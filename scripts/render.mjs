import {readFile,writeFile,mkdir} from 'node:fs/promises';
import {spawn} from 'node:child_process';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
const root=fileURLToPath(new URL('../',import.meta.url)),manifest=JSON.parse(await readFile(path.join(root,'manifest.json'),'utf8'));
const browser=!process.argv.includes('--node');
const requested=process.argv.slice(2).filter(arg=>arg!=='--browser'&&arg!=='--node'),ids=requested.includes('--all')?manifest.charts.map(c=>c.id):requested;
if(!ids.length||ids.some(id=>!manifest.charts.some(c=>c.id===id)))throw Error('Usage: npm run render -- vl_1180 [vl_#### ...] | --all');
await mkdir(path.join(root,'.validation'),{recursive:true});
const chunks=[];for(let i=0;i<ids.length;i+=12)chunks.push(ids.slice(i,i+12));
const results=[];let done=0,serial=0;
async function worker(){
  for(;;){
    const chunk=chunks.shift();if(!chunk)return;const file=path.join(root,'.validation/chunk-'+serial+++'.json');
    await new Promise((resolve,reject)=>{
      const child=spawn(process.execPath,['--max-old-space-size=4096',path.join(root,'scripts',browser?'render-browser-family.mjs':'render-family.mjs'),JSON.stringify(chunk)],{cwd:root,env:{...process.env,TZ:'UTC',RESULT_FILE:file},stdio:['ignore','ignore','inherit']});
      child.on('error',reject);child.on('exit',(code,signal)=>signal?reject(Error('Renderer stopped: '+signal)):resolve(code));
    });
    const rows=JSON.parse(await readFile(file,'utf8'));results.push(...rows);done+=rows.length;
    console.log(done+'/'+ids.length+' families; '+results.filter(r=>r.status!=='passed').length+' differences/errors');
  }
}
await Promise.all(Array.from({length:Math.min(3,chunks.length)},worker));
results.sort((a,b)=>a.id.localeCompare(b.id));
const identity=process.env.GGACTION_IDENTITY?JSON.parse(await readFile(process.env.GGACTION_IDENTITY,'utf8')):undefined;
const report={runtime:identity??(process.env.GGACTION_SOURCE?'local-release-candidate':manifest.runtime),backend:browser?'Chromium, en-US, UTC, 1280x960, DPR2':'Node, UTC',browserVersions:browser?[...new Set(results.map(r=>r.browser).filter(Boolean))]:undefined,charts:results.length,programs:results.reduce((n,r)=>n+(r.stages?.length||0),0),passed:results.filter(r=>r.status==='passed').length,results};
await writeFile(path.join(root,'.validation',browser?'runtime-sync-browser.json':'runtime-sync.json'),JSON.stringify(report,null,2)+'\n');
if(report.passed!==ids.length)process.exitCode=1;
