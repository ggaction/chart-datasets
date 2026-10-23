// Re-run every distributed program against the exact tagged release artifact.
import assert from 'node:assert/strict';
import {readFile,writeFile,mkdir,rm} from 'node:fs/promises';
import {createHash} from 'node:crypto';
import {spawn} from 'node:child_process';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
import {qualifyReport} from './reviewed-render-equivalence.mjs';
const root=fileURLToPath(new URL('../',import.meta.url));
const manifestFile=path.resolve(process.argv[2]||'');
if(!process.argv[2])throw Error('Usage: node scripts/verify-runtime.mjs /path/to/candidate.json [report.json] [reviewed-equivalence.json]');
const reportFile=path.resolve(process.argv[3]||path.join(root,'reports/runtime-sync.json'));
const candidate=JSON.parse(await readFile(manifestFile,'utf8'));
assert.equal(candidate.name,'ggaction');
assert.match(candidate.version,/^\d+\.\d+\.\d+$/);
assert.equal(candidate.tag,'v'+candidate.version);
assert.equal(candidate.filename,'ggaction-'+candidate.version+'.tgz');
assert.match(candidate.commit,/^[a-f0-9]{40}$/);
const archive=path.join(path.dirname(manifestFile),candidate.filename),bytes=await readFile(archive);
for(const algorithm of ['sha1','sha256'])assert.equal(createHash(algorithm).update(bytes).digest('hex'),candidate[algorithm]);
const consumer=path.join(root,'.validation/canonical-consumer');
await rm(consumer,{recursive:true,force:true});
await mkdir(consumer,{recursive:true});
async function run(command,args,env={},allowed=[0]){
 return await new Promise((resolve,reject)=>{
  const child=spawn(command,args,{cwd:root,env:{...process.env,...env},stdio:'inherit'});
  child.on('error',reject);child.on('exit',(code,signal)=>!signal&&allowed.includes(code)?resolve(code):reject(Error(command+' failed: '+(signal??code))));
 });
}
await run(process.platform==='win32'?'npm.cmd':'npm',['install','--prefix',consumer,'--ignore-scripts','--no-package-lock','--no-save',archive]);
const installed=path.join(consumer,'node_modules/ggaction');
assert.equal(JSON.parse(await readFile(path.join(installed,'package.json'),'utf8')).version,candidate.version);
const identity={name:candidate.name,version:candidate.version,tag:candidate.tag,commit:candidate.commit,sha1:candidate.sha1,sha256:candidate.sha256,packedBytes:bytes.length};
const identityFile=path.join(root,'.validation/canonical-runtime.json');
await writeFile(identityFile,JSON.stringify(identity,null,2)+'\n');
const reviewFile=process.argv[4];
await run(process.execPath,['scripts/render.mjs','--all'],{GGACTION_SOURCE:installed,GGACTION_IDENTITY:identityFile},reviewFile?[0,1]:[0]);
let report=JSON.parse(await readFile(path.join(root,'.validation/runtime-sync-browser.json'),'utf8'));
const dataset=JSON.parse(await readFile(path.join(root,'manifest.json'),'utf8'));
assert.equal(report.charts,dataset.chartCount);assert.equal(report.programs,dataset.programCount);
assert.deepEqual(report.results.map(r=>r.id).sort(),dataset.charts.map(r=>r.id).sort());
if(reviewFile) {
  // Preserve the strict byte-comparison result separately and retain unchanged:false.
  await writeFile(reportFile.replace(/\.json$/,'')+'-byte-comparison.json',JSON.stringify(report,null,2)+'\n');
  report=await qualifyReport(root,report,JSON.parse(await readFile(reviewFile,'utf8')));
}
assert.equal(report.passed,report.charts);
assert.ok(report.results.every(r=>r.stages.every(s=>s.sameFamily&&(s.unchanged||r.status==='passed-reviewed-pixel-equivalent'))));
await mkdir(path.dirname(reportFile),{recursive:true});
await writeFile(reportFile,JSON.stringify(report,null,2)+'\n');
console.log(JSON.stringify({status:'passed',runtime:identity,charts:report.charts,programs:report.programs,browserVersions:report.browserVersions}));
