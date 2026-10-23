// Explicit, source-bound release qualifications. The default SVG gate stays strict.
import assert from 'node:assert/strict';
import {readFile,readdir} from 'node:fs/promises';
import {createHash} from 'node:crypto';
import path from 'node:path';
import {chromium} from 'playwright';
export const sha = bytes => createHash('sha256').update(bytes).digest('hex');
export async function familyFingerprint(directory) {
  const names=(await readdir(directory)).sort();
  return sha(JSON.stringify(await Promise.all(names.map(async name=>[name,sha(await readFile(path.join(directory,name)))]))));
}
export function checkQualification({certificate,runtime,row,inputSha256,frozen,rendered}) {
  assert.equal(certificate.id,row.id);
  assert.equal(certificate.inputSha256,inputSha256,'Source, data, metadata and accepted code must remain exact.');
  assert.equal(certificate.runtimeSha256,runtime.sha256,'Qualification belongs to one exact release archive.');
  assert.equal(certificate.runtimeVersion,runtime.version);
  assert.equal(certificate.frozenSvgSha256,sha(frozen));
  assert.equal(certificate.renderedSvgSha256,sha(rendered));
  assert.ok(row.stages.length>0&&row.stages.every(s=>s.sameFamily&&s.svgSha256===certificate.renderedSvgSha256));
  assert.deepEqual(certificate.rasterChecks.map(r=>r.pixelRatio),[1,2,4]);
  assert.ok(certificate.rasterChecks.every(r=>r.identical&&r.changedChannels===0&&r.rgbaSha256));
}
export async function exactRasterChecks(frozen,rendered) {
  const browser=await chromium.launch({headless:true});
  try {
    const page=await browser.newPage({locale:'en-US',timezoneId:'UTC'});
    await page.route('**/*',route=>route.abort());
    await page.setContent('<!doctype html><html><body></body></html>');
    const checks=[];
    for(const pixelRatio of [1,2,4]) {
      const pair=await page.evaluate(async ({a,b,ratio})=>{
        async function pixels(svg) {
          const documentSvg=new DOMParser().parseFromString(svg,'image/svg+xml').documentElement;
          if(documentSvg.localName!=='svg'||documentSvg.querySelector('parsererror'))throw Error('Invalid SVG');
          const width=Number(documentSvg.getAttribute('width')),height=Number(documentSvg.getAttribute('height'));
          if(!(width>0&&height>0))throw Error('Explicit SVG dimensions required.');
          const image=new Image(),url=URL.createObjectURL(new Blob([svg],{type:'image/svg+xml'}));
          try {
            image.src=url;await image.decode();await document.fonts.ready;
            const canvas=document.createElement('canvas');canvas.width=Math.ceil(width*ratio);canvas.height=Math.ceil(height*ratio);
            const ctx=canvas.getContext('2d');ctx.scale(ratio,ratio);ctx.drawImage(image,0,0,width,height);
            const bytes=ctx.getImageData(0,0,canvas.width,canvas.height).data;
            let binary='';for(let i=0;i<bytes.length;i+=8192)binary+=String.fromCharCode(...bytes.subarray(i,i+8192));
            return {width:canvas.width,height:canvas.height,rgba:btoa(binary)};
          } finally {URL.revokeObjectURL(url);}
        }
        return [await pixels(a),await pixels(b)];
      },{a:frozen.toString(),b:rendered.toString(),ratio:pixelRatio});
      assert.equal(pair[0].width,pair[1].width);assert.equal(pair[0].height,pair[1].height);
      const before=Buffer.from(pair[0].rgba,'base64'),after=Buffer.from(pair[1].rgba,'base64');
      let changedChannels=0;for(let i=0;i<before.length;i++)if(before[i]!==after[i])changedChannels++;
      assert.equal(changedChannels,0,`Exact RGBA mismatch at DPR ${pixelRatio}`);
      checks.push({pixelRatio,width:pair[0].width,height:pair[0].height,identical:true,changedChannels,rgbaSha256:sha(before),browser:browser.version()});
    }
    return checks;
  } finally {await browser.close();}
}
export async function qualifyReport(root,report,review) {
  assert.equal(review.policy,'source-bound-exact-rgba-v1');
  assert.equal(review.schemaVersion,1);
  assert.equal(report.runtime.version,review.runtimeVersion);
  const certificates=new Map(review.families.map(item=>[item.id,item]));
  assert.equal(certificates.size,review.families.length);
  const used=[];
  const results=[];
  for(const row of report.results) {
    if(row.status==='passed') {
      assert.ok(row.stages.every(s=>s.sameFamily&&s.unchanged));results.push(row);continue;
    }
    assert.equal(row.status,'different','Execution errors can never be qualified.');
    const certificate=certificates.get(row.id);assert.ok(certificate,`Unreviewed SVG change: ${row.id}`);
    const directory=path.join(root,'charts',row.id),frozen=await readFile(path.join(directory,'ggaction.svg'));
    const rendered=await readFile(path.join(root,'.validation/renders',row.id+'.svg'));
    checkQualification({certificate,runtime:report.runtime,row,inputSha256:await familyFingerprint(directory),frozen,rendered});
    const checks=await exactRasterChecks(frozen,rendered);
    // The fresh browser may differ, but its exact before/after RGBA equality may not.
    assert.deepEqual(checks.map(({browser,...r})=>r),certificate.rasterChecks.map(({browser,...r})=>r));
    used.push(row.id);results.push({...row,status:'passed-reviewed-pixel-equivalent',qualification:review.policy});
  }
  assert.deepEqual(used.sort(),[...certificates.keys()].sort(),'Do not retain unused or unrelated qualifications.');
  return {...report,passed:results.length,byteIdenticalFamilies:report.passed,reviewedPixelEquivalentFamilies:used.length,qualificationPolicy:review.policy,manualImagesInspected:false,results};
}
