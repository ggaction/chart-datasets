import test from 'node:test';
import assert from 'node:assert/strict';
import {sha,checkQualification,exactRasterChecks} from './reviewed-render-equivalence.mjs';
function fixture() {
 const frozen=Buffer.from('<svg/>'),rendered=Buffer.from('<svg />');
 const certificate={id:'vl_0237',inputSha256:'inputs',runtimeSha256:'archive',runtimeVersion:'0.0.22',frozenSvgSha256:sha(frozen),renderedSvgSha256:sha(rendered),rasterChecks:[1,2,4].map(pixelRatio=>({pixelRatio,identical:true,changedChannels:0,rgbaSha256:'pixels'}))};
 return {certificate,runtime:{sha256:'archive',version:'0.0.22'},row:{id:'vl_0237',stages:[{sameFamily:true,svgSha256:sha(rendered)}]},inputSha256:'inputs',frozen,rendered};
}
test('binds a qualification to exact input, code, archive and both SVG hashes',()=>{
 checkQualification(fixture());
 for(const change of [v=>v.inputSha256='changed-code',v=>v.runtime.sha256='other-archive',v=>v.runtime.version='0.0.23',v=>v.frozen=Buffer.from('other-source'),v=>v.rendered=Buffer.from('other-render'),v=>v.row.stages[0].sameFamily=false,v=>v.certificate.rasterChecks.pop(),v=>v.certificate.rasterChecks[0].changedChannels=1]) {
  const v=fixture();change(v);assert.throws(()=>checkQualification(v));
 }
});
test('requires exact decoded pixels and rejects a visible paint change',async()=>{
 const a=Buffer.from('<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"><circle cx="10" cy="10" r="5" fill="red"/></svg>');
 const b=Buffer.from(a.toString().replace('r="5"','r="5.000000000000001"'));
 assert.deepEqual((await exactRasterChecks(a,b)).map(r=>r.changedChannels),[0,0,0]);
 await assert.rejects(exactRasterChecks(a,Buffer.from(a.toString().replace('red','blue'))),/Exact RGBA mismatch/);
});
