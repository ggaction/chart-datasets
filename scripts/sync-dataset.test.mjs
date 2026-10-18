import assert from 'node:assert/strict';
import test from 'node:test';
import {mkdtemp,mkdir,writeFile,readFile,copyFile,rm} from 'node:fs/promises';
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
 await copyFile(new URL('./sync-dataset.py',import.meta.url),root+'/scripts/sync-dataset.py');
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
