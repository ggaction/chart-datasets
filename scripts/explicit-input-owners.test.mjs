import test from 'node:test';
import assert from 'node:assert/strict';
import {spawnSync} from 'node:child_process';
import {fileURLToPath} from 'node:url';

// Labelled synthetic owners exercise the exporter without a translation checkout.
const program = String.raw`
import copy, hashlib, importlib.util, json, pathlib, shutil, sys, tempfile
spec=importlib.util.spec_from_file_location('synthetic_export_inputs',sys.argv[1]); d=importlib.util.module_from_spec(spec); spec.loader.exec_module(d)
home=pathlib.Path(tempfile.mkdtemp(prefix='synthetic-explicit-owners-')); family=home/'vl_synthetic'; family.mkdir()
def write(name,value):
 p=family/name;p.write_text(json.dumps(value,ensure_ascii=False,separators=(',',':')));return p
def digest(name):return d.digest(family/name)
try:
 source={'data':{'url':'https://example.invalid/frozen.json'},'layer':[{'mark':'point'},{'data':{'values':[{}]},'mark':'rule'},{'data':{'values':[{}]},'mark':'rule'}]}
 tables={'data.json':[{'Date':'2020-01-01','value':1},{'Date':'2020-01-02','value':None}],'reference-data.json':[{}],'vertical-reference-data.json':[{}]}
 resolved=copy.deepcopy(source);resolved['data']={'values':tables['data.json']}
 write('source.vl.json',source);write('resolved-source.vl.json',resolved)
 for name,rows in tables.items():write(name,rows)
 raw=[{'specifier':'./'+name,'binding':binding,'ownerName':owner,'pointer':ptr,'sha256':digest(name)} for name,binding,owner,ptr in [('data.json','data','root-url','/data'),('reference-data.json','referenceData','layer-1-inline','/layer/1/data'),('vertical-reference-data.json','verticalReferenceData','layer-2-inline','/layer/2/data')]]
 owners=[dict(binding=r['binding'],specifier=r['specifier'],pointer=r['pointer'],kind='root-url' if i==0 else 'inline',**({'url':source['data']['url'],'rows':2,'dataSha256':r['sha256']} if i==0 else {'values':[{}]})) for i,r in enumerate(raw)]
 descriptor={'sourceSha256':digest('source.vl.json'),'owners':owners};write('owners.json',descriptor)
 contract={'sourceSha256':digest('source.vl.json'),'resolvedSourceSha256':digest('resolved-source.vl.json'),'dataSha256':digest('data.json'),'rawImports':raw,'v13Qualification':{'inlineRawOwners':{'path':'owners.json','sha256':digest('owners.json')}}}
 body=write('cache-body.json',tables['data.json']);metadata=write('cache-metadata.json',{'url':source['data']['url']})
 resolution={'sourceSha256':contract['sourceSha256'],'resolvedSourceSha256':contract['resolvedSourceSha256'],'dataSha256':contract['dataSha256'],'rowCount':2,'resource':{'requestedUrl':source['data']['url'],'resolvedUrl':source['data']['url'],'bodyFile':str(body),'sha256':d.digest(body),'metadataFile':str(metadata),'metadataSha256':d.digest(metadata)}}
 public_negative=sys.argv[2] if sys.argv[2].startswith('public-') else None
 public_check=sys.argv[2].endswith('-public') or public_negative is not None;mutation='valid' if public_negative else sys.argv[2].removesuffix('-public')
 if mutation=='swap-order':raw[1],raw[2]=raw[2],raw[1]
 elif mutation=='swap-equal-files':raw[1]['specifier'],raw[2]['specifier']=raw[2]['specifier'],raw[1]['specifier']
 elif mutation=='duplicate-binding':raw[2]['binding']=raw[1]['binding']
 elif mutation=='wrong-pointer':raw[1]['pointer']='/layer/0/data'
 elif mutation=='missing-owner':raw.pop()
 elif mutation=='empty-declaration':contract['rawImports']=[]
 elif mutation=='unsafe-file':raw[1]['specifier']='./../reference-data.json'
 elif mutation=='wrong-hash':raw[1]['sha256']='0'*64
 elif mutation=='changed-row':write('reference-data.json',[{'altered':True}])
 elif mutation=='changed-scalar-type':write('data.json',[{'Date':'2020-01-01','value':'1'},{'Date':'2020-01-02','value':None}])
 elif mutation=='source-hash':contract['sourceSha256']='0'*64
 elif mutation=='resolved-hash':contract['resolvedSourceSha256']='0'*64
 elif mutation=='descriptor-path':contract['v13Qualification']['inlineRawOwners']['path']='elsewhere/owners.json'
 elif mutation=='descriptor-symlink':(family/'owners.json').rename(family/'real-owners.json');(family/'owners.json').symlink_to(family/'real-owners.json')
 elif mutation=='descriptor-changed':write('owners.json',{})
 elif mutation=='url-substitute':resolution['resource']['requestedUrl']='https://example.invalid/changed'
 elif mutation=='body-hash':resolution['resource']['sha256']='0'*64
 elif mutation=='metadata-hash':resolution['resource']['metadataSha256']='0'*64
 elif mutation=='legacy-ambiguous':contract.pop('rawImports')
 elif mutation=='optional-url-name':
  source['data']['name']='label-only';write('source.vl.json',source);contract['sourceSha256']=digest('source.vl.json');resolution['sourceSha256']=contract['sourceSha256'];descriptor['sourceSha256']=contract['sourceSha256'];write('owners.json',descriptor);contract['v13Qualification']['inlineRawOwners']['sha256']=digest('owners.json')
 elif mutation!='valid':raise RuntimeError('unknown synthetic mutation')
 write('contract.json',contract);write('data-resolution.json',resolution)
 files,record=d.raw_inputs(family,source,family/'resolved-source.vl.json')
 if public_check:
  record['stages']=[]
  if public_negative=='public-wrong-pointer':record['descriptors'][1]['pointer']='/layer/0/data'
  if public_negative=='public-changed-row':write('reference-data.json',[{'changed':True}])
  print('PUBLIC_OWNER_VALIDATION_ENTERED',file=sys.stderr)
  d.validate_explicit_source_inputs(family,{'files':{name:{} for name in files},'stages':[]},record,set(files)-{'data.json'})
 print(json.dumps({'files':sorted(files),'record':record,'publicOwnerValidation':public_check}))
finally:shutil.rmtree(home)
`;
const module = fileURLToPath(new URL('./dataset_inputs.py',import.meta.url));
function run(mutation){return spawnSync('python3',['-B','-c',program,module,mutation],{encoding:'utf8'});}
for(const variant of ['valid','optional-url-name','valid-public','optional-url-name-public']) test('explicit declarations preserve three original owners: '+variant,()=>{
 const r=run(variant);assert.equal(r.status,0,r.stderr);const x=JSON.parse(r.stdout);
 assert.deepEqual(x.files,['data.json','reference-data.json','vertical-reference-data.json']);
 assert.deepEqual(x.record.descriptors.map(d=>[d.pointer,d.file,d.rowCount]),[['/data','data.json',2],['/layer/1/data','reference-data.json',1],['/layer/2/data','vertical-reference-data.json',1]]);
 if(variant.endsWith('-public'))assert.equal(x.publicOwnerValidation,true);
 assert(x.record.descriptors.every(d=>!Object.hasOwn(d,'aliasOf')));assert(!Object.hasOwn(x.record,'nativeScopePolicy'));
});
for(const variant of ['swap-order','swap-equal-files','duplicate-binding','wrong-pointer','missing-owner','empty-declaration','unsafe-file','wrong-hash','changed-row','changed-scalar-type','source-hash','resolved-hash','descriptor-path','descriptor-symlink','descriptor-changed','url-substitute','body-hash','metadata-hash','legacy-ambiguous','public-wrong-pointer','public-changed-row']) test('explicit ownership refuses '+variant,()=>{
 const r=run(variant);assert.notEqual(r.status,0,'changed ownership unexpectedly passed');assert.match(r.stderr,/RuntimeError:/);if(variant.startsWith('public-'))assert.match(r.stderr,/PUBLIC_OWNER_VALIDATION_ENTERED/);
});
