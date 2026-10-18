import {readFile,writeFile,mkdir,rm} from 'node:fs/promises';
import assert from 'node:assert/strict';
import {spawn} from 'node:child_process';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
const root=fileURLToPath(new URL('../',import.meta.url)),manifest=JSON.parse(await readFile(path.join(root,'manifest.json'),'utf8'));
const browser=!process.argv.includes('--node');
const requested=process.argv.slice(2).filter(arg=>arg!=='--browser'&&arg!=='--node'),ids=requested.includes('--all')?manifest.charts.map(c=>c.id):requested;
if(!ids.length||ids.some(id=>!manifest.charts.some(c=>c.id===id)))throw Error('Usage: npm run render -- vl_1180 [vl_#### ...] | --all');
await mkdir(path.join(root,'.validation'),{recursive:true});
const aggregateFile=path.join(root,'.validation',browser?'runtime-sync-browser.json':'runtime-sync.json');
await rm(aggregateFile,{force:true});
const chunks=[];for(let i=0;i<ids.length;i+=12)chunks.push(ids.slice(i,i+12));
const results=[];let done=0,serial=0;
async function worker(){
  for(;;){
    const chunk=chunks.shift();if(!chunk)return;const file=path.join(root,'.validation/chunk-'+serial+++'.json');
    // A failed child must never reuse a successful chunk from an older run.
    await rm(file,{force:true});
    await new Promise((resolve,reject)=>{
      const child=spawn(process.execPath,['--max-old-space-size=4096',path.join(root,'scripts',browser?'render-browser-family.mjs':'render-family.mjs'),JSON.stringify(chunk)],{cwd:root,env:{...process.env,TZ:'UTC',RESULT_FILE:file},stdio:['ignore','ignore','inherit']});
      child.on('error',reject);child.on('exit',(code,signal)=>code===0?resolve():reject(Error('Renderer failed: '+(signal??code))));
    });
    const rows=JSON.parse(await readFile(file,'utf8'));
    assert.ok(Array.isArray(rows),'Renderer chunk must be an array.');
    assert.equal(rows.length,chunk.length,'Renderer chunk must contain every requested family.');
    const returnedIds=rows.map(row=>row?.id);
    assert.equal(new Set(returnedIds).size,chunk.length,'Renderer chunk must not duplicate families.');
    assert.deepEqual(returnedIds,chunk,'Renderer chunk must preserve the exact requested family order.');
    results.push(...rows);done+=rows.length;
    console.log(done+'/'+ids.length+' families; '+results.filter(r=>r.status!=='passed').length+' differences/errors');
  }
}
// Keep chart construction sequential, including runtime compatibility sweeps.
await worker();
results.sort((a,b)=>a.id.localeCompare(b.id));
const identity=process.env.GGACTION_IDENTITY?JSON.parse(await readFile(process.env.GGACTION_IDENTITY,'utf8')):undefined;
const report={runtime:identity??(process.env.GGACTION_SOURCE?'local-release-candidate':manifest.runtime),backend:browser?'Chromium, en-US, UTC, 1280x960, DPR2':'Node, UTC',browserVersions:browser?[...new Set(results.map(r=>r.browser).filter(Boolean))]:undefined,charts:results.length,programs:results.reduce((n,r)=>n+(r.stages?.length||0),0),passed:results.filter(r=>r.status==='passed').length,results};
await writeFile(aggregateFile,JSON.stringify(report,null,2)+'\n');
if(report.passed!==ids.length)process.exitCode=1;
