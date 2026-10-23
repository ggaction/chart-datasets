import assert from 'node:assert/strict';
import test from 'node:test';
import {mkdtemp,mkdir,writeFile,readFile,copyFile,rm,symlink} from 'node:fs/promises';
import {tmpdir} from 'node:os';
import path from 'node:path';
import {createHash} from 'node:crypto';
import {spawnSync} from 'node:child_process';
const hash=value=>createHash('sha256').update(value).digest('hex');
const json=async(file,value)=>writeFile(file,JSON.stringify(value)+'\n');
const load=async file=>JSON.parse(await readFile(file,'utf8'));
const code='import {chart} from "ggaction"; import data from "./data.json" with {type:"json"}; export function buildChart(){return chart().createData({values:data})}';
const svg='<svg xmlns="http://www.w3.org/2000/svg" width="100" height="80"><g><path d="M0 0L10 10"/></g></svg>';
async function fixture(){
 const home=await mkdtemp(path.join(tmpdir(),'chart-dataset-sync-')),root=path.join(home,'repo'),workspace=path.join(home,'workspace');
 for(const directory of [root+'/scripts',root+'/charts',root+'/reports',workspace+'/experiments/glm-thousand-chart-adaptive',workspace+'/artifacts/v12-glm-thousand-chart-adaptive/vl_0001/G1/attempt-01/render'])await mkdir(directory,{recursive:true});
 for(const file of ['sync-dataset.py','dataset_inputs.py','audit-module-inputs.mjs','audit-concat-input-owners.mjs'])await copyFile(new URL('./'+file,import.meta.url),root+'/scripts/'+file);
 await symlink(new URL('../node_modules',import.meta.url).pathname,root+'/node_modules','dir');
 await json(root+'/package.json',{dependencies:{ggaction:'0.0.19'}});
 await json(root+'/manifest.json',{schemaVersion:1,chartCount:0,programCount:0,runtime:{version:'0.0.19',status:'verified'},charts:[]});
 await json(workspace+'/experiments/glm-thousand-chart-adaptive/config.json',{sourceIds:['vl_0001','vl_0002']});
 const family=workspace+'/artifacts/v12-glm-thousand-chart-adaptive/vl_0001',attempt=family+'/G1/attempt-01';
 await mkdir(family+'/reference');
 await json(family+'/source.vl.json',{mark:'point',data:{values:[{x:'1'}]}});
 await json(family+'/data.json',[{x:'1'}]);
 await copyFile(family+'/data.json',attempt+'/data.json');
 await writeFile(family+'/reference/chart.svg',svg);
 await writeFile(attempt+'/render/chart.svg',svg);
 async function setCode(text){
  await writeFile(attempt+'/candidate.gg.mjs',text);
  await json(attempt+'/code-review.json',{reviewer:'codex',status:'reviewed',codeSha256:hash(text)});
  await json(attempt+'/verification.json',{status:'pass',checks:[{pass:true}],codeSha256:hash(text),sourceSha256:hash(await readFile(family+'/source.vl.json')),svgSha256:hash(svg),runtimeCommit:'a'.repeat(40)});
  await json(family+'/accepted.json',{G1:{attempt:'attempt-01',codeSha256:hash(text),svgSha256:hash(svg),actions:1,topOptions:1}});
  await json(family+'/completion.json',{status:'completed',stageCount:1,lastCodeSha256:hash(text),reason:'frontier-exhausted'});
 }
 await setCode(code);
 return {home,root,workspace,family,attempt,setCode,run(apply=false){return spawnSync('python3',['scripts/sync-dataset.py',workspace,...(apply?['--apply']:[])],{cwd:root,encoding:'utf8'});},async cleanup(){await rm(home,{recursive:true,force:true});}};
}

test('stages only completed reviewed families and leaves the manifest unchanged in preview',async()=>{
 const f=await fixture();try{const before=await readFile(f.root+'/manifest.json'),run=f.run();assert.equal(run.status,0,run.stderr);const report=JSON.parse(run.stdout);assert.equal(report.charts,1);assert.deepEqual(report.added,['vl_0001']);assert.deepEqual(await readFile(f.root+'/manifest.json'),before);}finally{await f.cleanup();}
});

test('adds a family and refreshes reviewed code while preserving every original input',async()=>{
 const f=await fixture();try{let run=f.run(true);assert.equal(run.status,0,run.stderr);const before=await readFile(f.root+'/charts/vl_0001/data.json');await f.setCode(code+'\n// reviewed correction\n');run=f.run(true);assert.equal(run.status,0,run.stderr);const report=JSON.parse(run.stdout);assert.deepEqual(report.added,[]);assert.deepEqual(report.refreshed,['vl_0001']);assert.deepEqual(await readFile(f.root+'/charts/vl_0001/data.json'),before);const manifest=await load(f.root+'/manifest.json');assert.equal(manifest.runtime.status,'pending-current-runtime-validation');assert.equal(manifest.programCount,1);}finally{await f.cleanup();}
});

test('rejects stale code verification before changing the distributed dataset',async()=>{
 const f=await fixture();try{const proof=await load(f.attempt+'/verification.json');proof.codeSha256='0'.repeat(64);await json(f.attempt+'/verification.json',proof);const run=f.run(true);assert.notEqual(run.status,0);assert.match(run.stderr,/stale verification or review/);assert.equal((await load(f.root+'/manifest.json')).chartCount,0);}finally{await f.cleanup();}
});

test('rejects corruption of an already distributed file',async()=>{
 const f=await fixture();try{assert.equal(f.run(true).status,0);await writeFile(f.root+'/charts/vl_0001/data.json','[]\n');const run=f.run(true);assert.notEqual(run.status,0);assert.match(run.stderr,/Existing distributed file changed/);assert.equal((await load(f.root+'/manifest.json')).chartCount,1);}finally{await f.cleanup();}
});

test('rejects changes to original rows even when the new stage uses those same changed rows',async()=>{
 const f=await fixture();try{assert.equal(f.run(true).status,0);await json(f.family+'/data.json',[{x:'2'}]);await copyFile(f.family+'/data.json',f.attempt+'/data.json');const run=f.run(true);assert.notEqual(run.status,0);assert.match(run.stderr,/original input changed: data.json/);assert.deepEqual(await load(f.root+'/charts/vl_0001/data.json'),[{x:'1'}]);}finally{await f.cleanup();}
});

test('never drops an existing family if its workspace completion becomes partial',async()=>{
 const f=await fixture();try{assert.equal(f.run(true).status,0);await json(f.family+'/completion.json',{status:'partial'});const run=f.run(true);assert.notEqual(run.status,0);assert.match(run.stderr,/Refusing to drop/);assert.equal((await load(f.root+'/manifest.json')).chartCount,1);}finally{await f.cleanup();}
});

async function seededReference(f) {
 const names=['chart.svg','chart.png','compiled.vega.json','initial-state.json','reference-evidence.json','render.json','source.vl.json'];
 await mkdir(f.family+'/reference-before-approved-seed1');
 const archived=[];
 for(const name of names){
  const bytes=name==='chart.svg'?svg.replace('L10 10','L11 10'):'historical '+name;
  await writeFile(f.family+'/reference-before-approved-seed1/'+name,bytes);
  archived.push({path:'reference-before-approved-seed1/'+name,sha256:hash(bytes)});
  if(name!=='chart.svg')await writeFile(f.family+'/reference/'+name,'adopted '+name);
 }
 const adoption={sourceSha256:hash(await readFile(f.family+'/source.vl.json')),dataSha256:hash(await readFile(f.family+'/data.json')),
  allOriginalAuthoredSourceAndDataBytesUnchanged:true,
  approvedReferenceRandomPolicy:{reviewer:'codex',policy:'source0001-approved-seed1-bootstrap-reference-v1',seed:1,expectedDraws:1000,sourceSpecAndRawRowsUnchanged:true,approvalRecordSha256:'b'.repeat(64),sourceSha256:hash(await readFile(f.family+'/source.vl.json'))},
  archivedOriginalReference:archived,newReference:await Promise.all(names.map(async name=>({path:'reference/'+name,sha256:hash(await readFile(f.family+'/reference/'+name))})))};
 await json(f.family+'/source-reference-seed1-adoption.json',adoption);
 return adoption;
}

test('publishes reference environment provenance and original unseeded SVG without changing authored input',async()=>{
 const f=await fixture();try{await seededReference(f);const original=await readFile(f.family+'/source.vl.json');const run=f.run(true);assert.equal(run.status,0,run.stderr);
  const base=f.root+'/charts/vl_0001',metadata=await load(base+'/metadata.json'),policy=await load(base+'/source-reference-policy.json');
  assert.equal(metadata.referencePolicy.originalSourceAuthoredSeed,false);assert.equal(policy.seed,1);assert.equal(policy.settingOrigin,'approved-reference-rendering-environment');
  assert.equal(policy.historicalUnseededReference.length,7);assert.equal(metadata.files['source-reference-policy.json'].sha256,hash(await readFile(base+'/source-reference-policy.json')));
  assert.deepEqual(await readFile(base+'/vega-lite-unseeded.svg'),await readFile(f.family+'/reference-before-approved-seed1/chart.svg'));
  assert.deepEqual(await readFile(base+'/source.vl.json'),original);assert(!JSON.stringify(policy).includes(f.home));
 }finally{await f.cleanup();}
});

test('rejects changed history or mismatched policy data before distributing a reference',async()=>{
 for(const mutation of ['history','data','path']){const f=await fixture();try{const adoption=await seededReference(f);
  if(mutation==='history')await writeFile(f.family+'/reference-before-approved-seed1/chart.svg','changed');
  if(mutation==='data')adoption.dataSha256='0'.repeat(64);
  if(mutation==='path')adoption.archivedOriginalReference[0].path='../data.json';
  await json(f.family+'/source-reference-seed1-adoption.json',adoption);const run=f.run(true);assert.notEqual(run.status,0);assert.equal((await load(f.root+'/manifest.json')).chartCount,0);
 }finally{await f.cleanup();}}
});

test('cannot silently drop previously distributed reference provenance',async()=>{
 const f=await fixture();try{await seededReference(f);assert.equal(f.run(true).status,0);await rm(f.family+'/source-reference-seed1-adoption.json');const run=f.run(true);assert.notEqual(run.status,0);assert.match(run.stderr,/reference policy was dropped or changed/);assert.equal((await load(f.root+'/manifest.json')).chartCount,1);}finally{await f.cleanup();}
});

async function multiResource(f){
 const source={data:{values:[{key:'a',v:' 1 '}]},transform:[{lookup:'key',from:{data:{values:[{key:'a',name:'Ref'}]},key:'key'}},{lookup:'key',from:{data:{values:[{key:'a',name:'Ref'}]},key:'key'}}],mark:'point'};
 const rows=source.data.values,refs=source.transform[0].from.data.values;
 await json(f.family+'/source.vl.json',source);await json(f.family+'/resolved-source.vl.json',source);
 for(const [file,value]of [['data.json',rows],['data-lookup-0.json',refs],['data-lookup-1.json',refs]])await json(f.family+'/'+file,value);
 for(const file of ['data.json','data-lookup-0.json'])await copyFile(f.family+'/'+file,f.attempt+'/'+file);
 await json(f.attempt+'/render/semantic.json',{datasets:[{id:'data',values:refs},{id:'terms',values:rows}]});
 const descriptors=[];for(const [pointer,file,value]of [['/data','data.json',rows],['/transform/0/from/data','data-lookup-0.json',refs],['/transform/1/from/data','data-lookup-1.json',refs]])descriptors.push({pointer,file,kind:'inline',rowCount:value.length,dataSha256:hash(await readFile(f.family+'/'+file))});
 await json(f.family+'/data-resolution.json',{schemaVersion:2,kind:'lookup-multi-input-v1',sourceSha256:hash(await readFile(f.family+'/source.vl.json')),resolvedSourceSha256:hash(await readFile(f.family+'/resolved-source.vl.json')),dataSha256:hash(await readFile(f.family+'/data.json')),totalRows:3,dataDescriptors:descriptors});
 await f.setCode('import {chart} from "ggaction";import terms from "./data.json";import people from "./data-lookup-0.json";export function buildChart(){return chart().createData({values:people}).createData({id:"terms",values:terms});}');
}

test('exports every original table including an unimported identical reference, preserving module bytes and native ID bindings',async()=>{
 const f=await fixture();try{await multiResource(f);let run=f.run(true);assert.equal(run.status,0,run.stderr);const dest=f.root+'/charts/vl_0001',raw=await load(dest+'/raw-inputs.json');assert.equal(raw.descriptors.length,3);assert.equal(raw.stages[0].bindings.find(b=>b.datasetId==='data').file,'data-lookup-0.json');assert(raw.stages[0].actualNativeRawDatasetBindingsExact);assert.deepEqual(await readFile(dest+'/G1.gg.mjs'),await readFile(f.attempt+'/candidate.gg.mjs'));assert.deepEqual(await readFile(dest+'/data-lookup-1.json'),await readFile(f.family+'/data-lookup-1.json'));assert(!JSON.stringify(raw).includes(f.home));assert.equal(f.run().status,0);}finally{await f.cleanup();}
});
for(const mutation of ['missing','swapped-descriptor','unknown-file','changed-stage','swapped-native-id','path-escape','changed-resolved-source'])test('rejects multi-resource '+mutation+' without publishing',async()=>{
 const f=await fixture();try{await multiResource(f);if(mutation==='missing')await rm(f.family+'/data-lookup-1.json');
 if(mutation==='swapped-descriptor'){let r=await load(f.family+'/data-resolution.json');[r.dataDescriptors[0].file,r.dataDescriptors[1].file]=[r.dataDescriptors[1].file,r.dataDescriptors[0].file];await json(f.family+'/data-resolution.json',r);}
 if(mutation==='unknown-file')await json(f.family+'/data-lookup-9.json',[]);
 if(mutation==='changed-stage')await json(f.attempt+'/data-lookup-0.json',[{key:'changed'}]);
 if(mutation==='swapped-native-id'){const s=await load(f.attempt+'/render/semantic.json');s.datasets.reverse();[s.datasets[0].id,s.datasets[1].id]=[s.datasets[1].id,s.datasets[0].id];await json(f.attempt+'/render/semantic.json',s);}
 if(mutation==='path-escape'){let r=await load(f.family+'/data-resolution.json');r.dataDescriptors[1].file='../data.json';await json(f.family+'/data-resolution.json',r);}
 if(mutation==='changed-resolved-source'){let r=await load(f.family+'/resolved-source.vl.json');r.transform[0].from.data.values[0].name='changed';await json(f.family+'/resolved-source.vl.json',r);}
 let run=f.run(true);assert.notEqual(run.status,0);assert.equal((await load(f.root+'/manifest.json')).chartCount,0);assert.match(run.stderr,/raw|descriptor|resolution|binding|input/i);
 }finally{await f.cleanup();}
});
async function requalifiedEpoch(f){
 const current=f.workspace+'/artifacts/explicit-epoch/vl_0001';await mkdir(current,{recursive:true});const {cp}=await import('node:fs/promises');await cp(f.family,current,{recursive:true});
 await json(f.family+'/contract.json',{historical:true});await json(current+'/contract.json',{current:true});
 await json(f.workspace+'/epoch-summary.json',{status:'completed',source:'vl_0001'});
 const directory=f.workspace+'/experiments/glm-thousand-chart-adaptive',parent={schemaVersion:1,sources:{}};await json(directory+'/requalified-source-families-v1.json',parent);
 const registry={schemaVersion:2,parent:{path:'experiments/glm-thousand-chart-adaptive/requalified-source-families-v1.json',sha256:hash(await readFile(directory+'/requalified-source-families-v1.json'))},sources:{vl_0001:{family:'artifacts/explicit-epoch/vl_0001',artifactRoot:'artifacts/explicit-epoch',historicalFamily:'artifacts/v12-glm-thousand-chart-adaptive/vl_0001',successful:true,sourceOriginalAndRawUnchanged:true,exportAt1413MustResolveThisExplicitEpoch:true,historicalContractSha256:hash(await readFile(f.family+'/contract.json')),currentContractSha256:hash(await readFile(current+'/contract.json')),runtimeCommit:'a'.repeat(40),completionSummary:'epoch-summary.json',completionSummarySha256:hash(await readFile(f.workspace+'/epoch-summary.json'))}}};
 // These legacy synthetic inputs had no resolved copy; both epochs must explicitly freeze it.
 for(const dir of [f.family,current])await copyFile(dir+'/source.vl.json',dir+'/resolved-source.vl.json');
 await json(directory+'/requalified-source-families-v2.json',registry);await json(f.family+'/completion.json',{status:'held'});return current;
}
test('selects a completed explicit authoring epoch while retaining the historical held contract',async()=>{const f=await fixture();try{let current=await requalifiedEpoch(f),run=f.run(true);assert.equal(run.status,0,run.stderr);let d=f.root+'/charts/vl_0001';assert.equal((await load(d+'/source-epoch.json')).selection,'explicit-reviewed-authoring-epoch');assert.deepEqual(await readFile(d+'/G1.gg.mjs'),await readFile(current+'/G1/attempt-01/candidate.gg.mjs'));assert.equal((await load(f.family+'/completion.json')).status,'held');}finally{await f.cleanup();}});
for(const mutation of ['contract','raw','summary','unsafe-path','missing-runtime'])test('rejects changed explicit authoring epoch '+mutation,async()=>{const f=await fixture();try{const current=await requalifiedEpoch(f);if(mutation==='contract')await json(current+'/contract.json',{changed:true});if(mutation==='raw')await json(current+'/data.json',[{x:'changed'}]);if(mutation==='summary')await json(f.workspace+'/epoch-summary.json',{changed:true});if(mutation==='missing-runtime'){let p=current+'/G1/attempt-01/verification.json',r=await load(p);delete r.runtimeCommit;await json(p,r);}if(mutation==='unsafe-path'){let p=f.workspace+'/experiments/glm-thousand-chart-adaptive/requalified-source-families-v2.json',r=await load(p);r.sources.vl_0001.family='../vl_0001';await json(p,r);}let run=f.run(true);assert.notEqual(run.status,0);assert.equal((await load(f.root+'/manifest.json')).chartCount,0);}finally{await f.cleanup();}});
async function completionCatalogV3(f, retained=false){
 const current=await requalifiedEpoch(f),directory=f.workspace+'/experiments/glm-thousand-chart-adaptive';
 const parentPath=directory+'/requalified-source-families-v2.json',previous=await load(parentPath),entry=structuredClone(previous.sources.vl_0001);
 if(!retained){delete previous.sources.vl_0001;previous.sources.vl_9999={preserved:'parent-entry'};await json(parentPath,previous);delete entry.exportAt1413MustResolveThisExplicitEpoch;entry.mustResolveExplicitEpoch=true;}
 const registry={schemaVersion:3,parent:{path:'experiments/glm-thousand-chart-adaptive/requalified-source-families-v2.json',sha256:hash(await readFile(parentPath))},sources:{...previous.sources,vl_0001:entry}};
 const file=directory+'/requalified-source-families-v3.json';
 async function save(){await json(file,registry);const configPath=directory+'/config.json',config=await load(configPath);config.requalifiedSourceFamiliesV3={path:'experiments/glm-thousand-chart-adaptive/requalified-source-families-v3.json',sha256:hash(await readFile(file))};await json(configPath,config);}
 await save();return {current,directory,file,parentPath,registry,save};
}
for(const retained of [false,true])test('v3 completion catalog selects '+(retained?'unchanged v2 parent':'new completed')+' epoch',async()=>{const f=await fixture();try{const e=await completionCatalogV3(f,retained),run=f.run(true);assert.equal(run.status,0,run.stderr);assert.deepEqual(await readFile(f.root+'/charts/vl_0001/G1.gg.mjs'),await readFile(e.current+'/G1/attempt-01/candidate.gg.mjs'));const proof=await load(f.root+'/charts/vl_0001/source-epoch.json');assert.equal(proof.registrySha256,hash(await readFile(e.file)));assert(!JSON.stringify(proof).includes(f.home));}finally{await f.cleanup();}});
for(const mutation of ['descriptor-hash','parent-hash','ancestor-hash','lost-parent','changed-parent','unfinished','raw-changed','missing-resolution','unsafe-descriptor'])test('v3 completion catalog rejects '+mutation+' before publication',async()=>{const f=await fixture();try{const e=await completionCatalogV3(f);
 if(mutation==='parent-hash')await json(e.parentPath,{schemaVersion:2,sources:{}});
 if(mutation==='ancestor-hash')await json(e.directory+'/requalified-source-families-v1.json',{changed:true});
 if(mutation==='lost-parent'){delete e.registry.sources.vl_9999;await e.save();}
 if(mutation==='changed-parent'){e.registry.sources.vl_9999.preserved='changed';await e.save();}
 if(mutation==='unfinished')await json(e.current+'/completion.json',{status:'held'});
 if(mutation==='raw-changed')await json(e.current+'/data.json',[{x:'changed'}]);
 if(mutation==='missing-resolution'){delete e.registry.sources.vl_0001.mustResolveExplicitEpoch;await e.save();}
 if(mutation==='descriptor-hash'||mutation==='unsafe-descriptor'){const p=e.directory+'/config.json',c=await load(p);if(mutation==='descriptor-hash')c.requalifiedSourceFamiliesV3.sha256='0'.repeat(64);else c.requalifiedSourceFamiliesV3.path='../outside.json';await json(p,c);}
 const run=f.run(true);assert.notEqual(run.status,0);assert.equal((await load(f.root+'/manifest.json')).chartCount,0);assert.match(run.stderr,/epoch|registry|input|workspace/i);
 }finally{await f.cleanup();}});
async function namedLayers(f){
 const rows=[{x:1,y:2}],lines=[{x:1,y:3}],source={layer:[{data:{name:'points'},mark:'point'},{data:{name:'lines'},mark:'line'}],datasets:{points:rows,lines}},resolved={layer:[{data:{values:rows},mark:'point'},{data:{values:lines},mark:'line'}],data:{values:rows}};
 await json(f.family+'/source.vl.json',source);await json(f.family+'/resolved-source.vl.json',resolved);await json(f.family+'/data.json',rows);await json(f.family+'/line-data.json',lines);for(const file of ['data.json','line-data.json'])await copyFile(f.family+'/'+file,f.attempt+'/'+file);
 const resolution={kind:'named-independent-layer-owners-v1',totalRawRows:2,owners:[{sourceLayerIndex:0,pointer:'/layer/0/data',name:'points',datasetPointer:'/datasets/points',rowCount:1},{sourceLayerIndex:1,pointer:'/layer/1/data',name:'lines',datasetPointer:'/datasets/lines',rowCount:1}]},profile={sourceSha256:hash(await readFile(f.family+'/source.vl.json'))};
 await json(f.family+'/data-resolution.json',resolution);await json(f.family+'/source-layer-profile.json',profile);await json(f.family+'/contract.json',{sourceSha256:profile.sourceSha256,sourceLayerProfile:profile,dataResolution:resolution});
 await json(f.attempt+'/render/semantic.json',{datasets:[{id:'data',values:rows},{id:'trend',values:lines}]});
 await f.setCode('import {chart} from "ggaction";import data from "./data.json";import lines from "./line-data.json";export function buildChart(){return chart().createData({values:data}).createData({id:"trend",values:lines})}');
}
test('exports distinct named layer inputs with original owner pointers and exact code bytes',async()=>{const f=await fixture();try{await namedLayers(f);let run=f.run(true);assert.equal(run.status,0,run.stderr);let p=await load(f.root+'/charts/vl_0001/raw-inputs.json');assert.equal(p.kind,'named-layer-raw-inputs-v1');assert.deepEqual(p.descriptors.map(d=>[d.pointer,d.file]),[['/layer/0/data','data.json'],['/layer/1/data','line-data.json']]);assert.equal(p.stages[0].bindings.find(b=>b.datasetId==='trend').file,'line-data.json');}finally{await f.cleanup();}});
for(const mutation of ['missing','ambiguous-file','wrong-source-owner','negative-zero'])test('rejects named layer '+mutation,async()=>{const f=await fixture();try{await namedLayers(f);if(mutation==='missing')await rm(f.family+'/line-data.json');if(mutation==='ambiguous-file')await copyFile(f.family+'/line-data.json',f.family+'/extra-data.json');if(mutation==='wrong-source-owner'){let s=await load(f.family+'/source.vl.json');s.layer[1].data.name='points';await json(f.family+'/source.vl.json',s);}if(mutation==='negative-zero'){await writeFile(f.family+'/line-data.json','[{"x":1,"y":-0}]\n');await copyFile(f.family+'/line-data.json',f.attempt+'/line-data.json');}assert.notEqual(f.run(true).status,0);assert.equal((await load(f.root+'/manifest.json')).chartCount,0);}finally{await f.cleanup();}});
async function initialImport(f){await copyFile(new URL('./import-dataset.py',import.meta.url),f.root+'/scripts/import-dataset.py');return spawnSync('python3',['scripts/import-dataset.py',f.workspace],{cwd:f.root,encoding:'utf8'});}
test('initial import uses the same multi-table source and native binding checks',async()=>{const f=await fixture();try{await multiResource(f);await rm(f.root+'/manifest.json');let run=await initialImport(f);assert.equal(run.status,0,run.stderr);assert.equal((await load(f.root+'/manifest.json')).chartCount,1);assert.equal((await load(f.root+'/charts/vl_0001/raw-inputs.json')).descriptors.length,3);}finally{await f.cleanup();}});
test('failed initial import remains retryable without creating a published manifest',async()=>{const f=await fixture();try{await multiResource(f);await rm(f.root+'/manifest.json');await rm(f.family+'/data-lookup-1.json');assert.notEqual((await initialImport(f)).status,0);await assert.rejects(()=>readFile(f.root+'/manifest.json'));}finally{await f.cleanup();}});
test('initial import refuses to overwrite an existing chart directory without a manifest',async()=>{const f=await fixture();try{await rm(f.root+'/manifest.json');await mkdir(f.root+'/charts/vl_0001');await writeFile(f.root+'/charts/vl_0001/sentinel','preserve');assert.notEqual((await initialImport(f)).status,0);assert.equal(await readFile(f.root+'/charts/vl_0001/sentinel','utf8'),'preserve');}finally{await f.cleanup();}});

async function sharedNamedLayers(f, distinctName=false){
 await namedLayers(f);const source=await load(f.family+'/source.vl.json'),resolved=await load(f.family+'/resolved-source.vl.json'),resolution=await load(f.family+'/data-resolution.json');const name=distinctName?'otherPoints':'points';if(distinctName)source.datasets[name]=source.datasets.points;source.layer.push({data:{name},mark:'text'});resolved.layer.push({data:{values:source.datasets[name]},mark:'text'});resolution.owners.push({sourceLayerIndex:2,pointer:'/layer/2/data',name,datasetPointer:'/datasets/'+name,rowCount:1});resolution.totalRawRows=3;await json(f.family+'/source.vl.json',source);await json(f.family+'/resolved-source.vl.json',resolved);const profile={sourceSha256:hash(await readFile(f.family+'/source.vl.json'))};await json(f.family+'/source-layer-profile.json',profile);await json(f.family+'/data-resolution.json',resolution);await json(f.family+'/contract.json',{sourceSha256:profile.sourceSha256,sourceLayerProfile:profile,dataResolution:resolution});await f.setCode(await readFile(f.attempt+'/candidate.gg.mjs','utf8'));
}
function validateShared(f){return spawnSync('python3',['-c',"import sys,pathlib,json;sys.path.insert(0,'scripts');from dataset_inputs import validate_public_raw_inputs;p=pathlib.Path('charts/vl_0001');validate_public_raw_inputs(p,json.loads((p/'metadata.json').read_text()))"],{cwd:f.root,encoding:'utf8'});}
test('preserves explicit repeated named-table ownership and public validation without duplicating rows',async()=>{const f=await fixture();try{await sharedNamedLayers(f);const run=f.run(true);assert.equal(run.status,0,run.stderr);const dir=f.root+'/charts/vl_0001',record=await load(dir+'/raw-inputs.json');assert.equal(record.schemaVersion,2);assert.equal(record.kind,'named-layer-raw-inputs-v2');assert.equal(record.descriptors[2].aliasOf,'/layer/0/data');assert.equal(record.descriptors[2].file,'data.json');assert.equal(record.distinctRawRows,2);assert.equal(record.sourceOwnerRows,3);assert.equal(validateShared(f).status,0,validateShared(f).stderr);assert.deepEqual(await readFile(dir+'/G1.gg.mjs'),await readFile(f.attempt+'/candidate.gg.mjs'));}finally{await f.cleanup();}});
test('rejects value-equal tables with different original names instead of inferring shared ownership',async()=>{const f=await fixture();try{await sharedNamedLayers(f,true);const run=f.run(true);assert.notEqual(run.status,0);assert.match(run.stderr,/independent named owners/);assert.equal((await load(f.root+'/manifest.json')).chartCount,0);}finally{await f.cleanup();}});
for(const mutation of['missing-alias','self-alias','different-name','wrong-accounting','wrong-schema','wrong-owner'])test('public named-table alias rejects '+mutation,async()=>{const f=await fixture();try{await sharedNamedLayers(f);const run=f.run(true);assert.equal(run.status,0,run.stderr);const file=f.root+'/charts/vl_0001/raw-inputs.json',record=await load(file);if(mutation==='missing-alias')delete record.descriptors[2].aliasOf;if(mutation==='self-alias')record.descriptors[2].aliasOf='/layer/2/data';if(mutation==='different-name')record.descriptors[2].originalDatasetName='lines';if(mutation==='wrong-accounting')record.distinctRawRows=3;if(mutation==='wrong-schema')record.schemaVersion=1;if(mutation==='wrong-owner')record.descriptors[2].aliasOf='/layer/1/data';await json(file,record);assert.notEqual(validateShared(f).status,0);}finally{await f.cleanup();}});

test('accepts explicit unique-table row accounting for shared original named owners',async()=>{const f=await fixture();try{await sharedNamedLayers(f);const resolution=await load(f.family+'/data-resolution.json'),contract=await load(f.family+'/contract.json');delete resolution.totalRawRows;resolution.totalUniqueRawRows=2;contract.dataResolution=resolution;await json(f.family+'/data-resolution.json',resolution);await json(f.family+'/contract.json',contract);const run=f.run(true);assert.equal(run.status,0,run.stderr);const record=await load(f.root+'/charts/vl_0001/raw-inputs.json');assert.equal(record.distinctRawRows,2);assert.equal(record.sourceOwnerRows,3);}finally{await f.cleanup();}});
test('rejects forged unique-table row accounting before exporting any files',async()=>{const f=await fixture();try{await sharedNamedLayers(f);const resolution=await load(f.family+'/data-resolution.json'),contract=await load(f.family+'/contract.json');delete resolution.totalRawRows;resolution.totalUniqueRawRows=3;contract.dataResolution=resolution;await json(f.family+'/data-resolution.json',resolution);await json(f.family+'/contract.json',contract);assert.notEqual(f.run(true).status,0);assert.equal((await load(f.root+'/manifest.json')).chartCount,0);}finally{await f.cleanup();}});

async function explicitOwners(f,{alias=false,emptyRoot=false}={}){
 const rows=[{x:'1'}],rules=[{x:2}],url={url:'https://example.test/input.csv'},source={layer:[{data:url,mark:'point'},{data:{values:rules},mark:'rule'}]},resolved={layer:[{data:{values:rows},mark:'point'},{data:{values:rules},mark:'rule'}]};
 if(alias){source.data=url;resolved.data={values:rows};}
 if(emptyRoot){source.data={values:[]};resolved.data={values:[]};await json(f.family+'/unused-root-data.json',[]);}
 await json(f.family+'/source.vl.json',source);await json(f.family+'/resolved-source.vl.json',resolved);await json(f.family+'/rule-data.json',rules);await copyFile(f.family+'/rule-data.json',f.attempt+'/rule-data.json');await json(f.attempt+'/render/semantic.json',{datasets:[{id:'data',values:rows},{id:'rules',values:rules}]});
 await f.setCode('import {chart} from "ggaction";import data from "./data.json";import rules from "./rule-data.json";export function buildChart(){return chart().createData({values:data}).createData({id:"rules",values:rules})}');
}
for(const options of [{},{alias:true},{emptyRoot:true}])test('exports independently frozen URL and inline owners '+JSON.stringify(options),async()=>{const f=await fixture();try{await explicitOwners(f,options);const run=f.run(true);assert.equal(run.status,0,run.stderr);const record=await load(f.root+'/charts/vl_0001/raw-inputs.json');assert.equal(record.kind,'explicit-source-owner-raw-inputs-v1');assert.equal(record.descriptors.length,options.alias||options.emptyRoot?3:2);assert.equal(record.distinctRawRows,2);assert.equal(record.sourceOwnerRows,options.alias?3:2);assert.equal(validateShared(f).status,0,validateShared(f).stderr);if(options.emptyRoot)assert.equal(record.descriptors[0].file,'unused-root-data.json');}finally{await f.cleanup();}});
for(const mutation of ['missing-owner','changed-rows','bad-alias','changed-url','wrong-count'])test('public explicit source owner rejects '+mutation,async()=>{const f=await fixture();try{await explicitOwners(f,{alias:true});assert.equal(f.run(true).status,0);const dir=f.root+'/charts/vl_0001',file=dir+'/raw-inputs.json',record=await load(file);if(mutation==='missing-owner')record.descriptors.pop();if(mutation==='bad-alias')record.descriptors[1].aliasOf='/data/bogus';if(mutation==='wrong-count')record.distinctRawRows++;if(mutation==='changed-rows')await json(dir+'/rule-data.json',[{x:3}]);if(mutation==='changed-url'){const source=await load(dir+'/source.vl.json');source.data.url='https://other.test/input.csv';await json(dir+'/source.vl.json',source);}await json(file,record);assert.notEqual(validateShared(f).status,0);}finally{await f.cleanup();}});

test('retains an unused empty original root separately from its explicit resolved analysis alias',async()=>{const f=await fixture();try{await explicitOwners(f,{emptyRoot:true});const resolved=await load(f.family+'/resolved-source.vl.json');resolved.data=resolved.layer[0].data;await json(f.family+'/resolved-source.vl.json',resolved);assert.equal(f.run(true).status,0);const record=await load(f.root+'/charts/vl_0001/raw-inputs.json');assert.equal(record.descriptors[0].resolvedContextAliasOf,'/layer/0/data');assert.equal(record.descriptors[0].rowCount,0);assert.equal(validateShared(f).status,0,validateShared(f).stderr);}finally{await f.cleanup();}});
test('rejects an unused-root analysis alias which differs from the actual first owner',async()=>{const f=await fixture();try{await explicitOwners(f,{emptyRoot:true});const resolved=await load(f.family+'/resolved-source.vl.json');resolved.data=resolved.layer[1].data;await json(f.family+'/resolved-source.vl.json',resolved);assert.notEqual(f.run(true).status,0);}finally{await f.cleanup();}});
