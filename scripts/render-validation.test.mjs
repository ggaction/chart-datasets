import assert from 'node:assert/strict';
import test from 'node:test';
import {mkdtemp,readFile,writeFile,mkdir,copyFile,access,rm} from 'node:fs/promises';
import {tmpdir} from 'node:os';
import path from 'node:path';
import {spawnSync} from 'node:child_process';
const driver=new URL('./render.mjs',import.meta.url);
const ids=['vl_0001','vl_0002'];
const child=`import {writeFile,mkdir,rm,readdir} from 'node:fs/promises';
const ids=JSON.parse(process.argv[2]),mode=process.env.RENDER_VALIDATION_CASE;
if(mode==='parallel'){
 await mkdir('active',{recursive:true});
 const marker='active/'+process.pid;await writeFile(marker,'active');
 await new Promise(resolve=>setTimeout(resolve,150));
 if((await readdir('active')).length>1)await writeFile('overlap','confirmed');
 await new Promise(resolve=>setTimeout(resolve,150));
 await rm(marker);
}
if(mode==='sequential'){
 await mkdir('active-renderer-lock');
 await new Promise(resolve=>setTimeout(resolve,100));
 await rm('active-renderer-lock',{recursive:true});
}
if(mode==='exit-before-write')process.exit(23);
if(mode==='signal-before-write')process.kill(process.pid,'SIGTERM');
let rows=ids.map(id=>({id,browser:'controlled-test-renderer',status:'passed',stages:[{level:'G1',svgSha256:'fresh',sameFamily:true,unchanged:true}]}));
if(mode==='duplicate')rows[1]={...rows[1],id:rows[0].id};
if(mode==='wrong-count')rows.pop();
if(mode==='wrong-order')rows.reverse();
if(mode==='reported-difference'&&ids.includes('vl_0001'))rows[0].status='different';
await writeFile(process.env.RESULT_FILE,JSON.stringify(rows));
if(mode==='reported-difference'&&ids.includes('vl_0001'))process.exit(1);
if(mode==='contradictory-exit')process.exit(1);
`;
async function exists(file){try{await access(file);return true;}catch(error){if(error.code==='ENOENT')return false;throw error;}}
async function fixture(mode,sourceIds=ids,workers='1'){
 const root=await mkdtemp(path.join(tmpdir(),'chart-render-validation-'));
 await mkdir(path.join(root,'scripts'));await mkdir(path.join(root,'.validation'));
 await copyFile(driver,path.join(root,'scripts/render.mjs'));
 await writeFile(path.join(root,'scripts/render-browser-family.mjs'),child);
 await writeFile(path.join(root,'manifest.json'),JSON.stringify({runtime:{version:'controlled-test'},charts:sourceIds.map(id=>({id}))}));
 const stale=sourceIds.map(id=>({id,status:'passed',stages:[{level:'G1',svgSha256:'stale',sameFamily:true,unchanged:true}]}));
 await writeFile(path.join(root,'.validation/chunk-0.json'),JSON.stringify(stale));
 await writeFile(path.join(root,'.validation/runtime-sync-browser.json'),JSON.stringify({status:'stale-success'}));
 const run=spawnSync(process.execPath,['scripts/render.mjs','--all'],{cwd:root,encoding:'utf8',env:{...process.env,RENDER_VALIDATION_CASE:mode,RENDER_WORKERS:workers}});
 return {root,run,report:path.join(root,'.validation/runtime-sync-browser.json'),chunk:path.join(root,'.validation/chunk-0.json')};
}
for(const mode of ['exit-before-write','signal-before-write','duplicate','wrong-count','wrong-order']){
 test(`rejects ${mode} despite a stale successful chunk`,async()=>{
  const f=await fixture(mode);
  try{
   assert.notEqual(f.run.status,0,`${mode} must fail closed: ${f.run.stdout} ${f.run.stderr}`);
   assert.equal(await exists(f.report),false,'no aggregate success report');
   if(mode.endsWith('before-write'))assert.equal(await exists(f.chunk),false,'old successful chunk was deleted');
  }finally{await rm(f.root,{recursive:true,force:true});}
 });
}
test('accepts a fresh complete ordered chunk and records its actual stages',async()=>{
 const f=await fixture('success');
 try{
  assert.equal(f.run.status,0,f.run.stderr);
  const report=JSON.parse(await readFile(f.report,'utf8'));
  assert.equal(report.charts,2);assert.equal(report.programs,2);assert.equal(report.passed,2);
  assert.deepEqual(report.results.map(row=>row.id),ids);
  assert.ok(report.results.every(row=>row.stages[0].svgSha256==='fresh'));
 }finally{await rm(f.root,{recursive:true,force:true});}
});
test('runs separate chart chunks without overlapping renderer processes',async()=>{
 const sourceIds=Array.from({length:13},(_,index)=>'vl_'+String(index+1).padStart(4,'0'));
 const f=await fixture('sequential',sourceIds);
 try{
  assert.equal(f.run.status,0,f.run.stderr);
  const report=JSON.parse(await readFile(f.report,'utf8'));
  assert.equal(report.charts,13);assert.equal(report.passed,13);
  assert.deepEqual(report.results.map(row=>row.id),sourceIds);
 }finally{await rm(f.root,{recursive:true,force:true});}
});
test('explicit two-worker replay overlaps chunks and retains every result exactly once',async()=>{
 const sourceIds=Array.from({length:25},(_,index)=>'vl_'+String(index+1).padStart(4,'0'));
 const f=await fixture('parallel',sourceIds,'2');
 try{
  assert.equal(f.run.status,0,f.run.stderr);
  assert.equal(await readFile(path.join(f.root,'overlap'),'utf8'),'confirmed');
  const report=JSON.parse(await readFile(f.report,'utf8'));
  assert.equal(report.workers,2);assert.equal(report.passed,25);
  assert.deepEqual(report.results.map(row=>row.id),sourceIds);
 }finally{await rm(f.root,{recursive:true,force:true});}
});
test('rejects an unbounded worker count before rendering',async()=>{
 const f=await fixture('success',ids,'4');
 try{assert.notEqual(f.run.status,0);assert.match(f.run.stderr,/RENDER_WORKERS must be/);}
 finally{await rm(f.root,{recursive:true,force:true});}
});

test('a fresh explicit difference is collected with later chunks and the complete report still fails',async()=>{
 const sourceIds=Array.from({length:13},(_,index)=>'vl_'+String(index+1).padStart(4,'0'));
 const f=await fixture('reported-difference',sourceIds);
 try{assert.notEqual(f.run.status,0);const r=JSON.parse(await readFile(f.report,'utf8'));assert.equal(r.charts,13);assert.equal(r.passed,12);assert.equal(r.results[0].status,'different');assert.equal(r.results.at(-1).id,'vl_0013');}finally{await rm(f.root,{recursive:true,force:true});}
});
test('a failed child cannot claim success through a fresh all-passed chunk',async()=>{
 const f=await fixture('contradictory-exit');try{assert.notEqual(f.run.status,0);assert.equal(await exists(f.report),false);}finally{await rm(f.root,{recursive:true,force:true});}
});
