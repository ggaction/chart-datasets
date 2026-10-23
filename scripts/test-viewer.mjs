import assert from 'node:assert/strict';
import {chromium} from 'playwright';
import {readFile,mkdir,writeFile} from 'node:fs/promises';
const url=process.argv[2]||'http://127.0.0.1:4317/';
const browser=await chromium.launch({headless:true}),page=await browser.newPage({viewport:{width:1440,height:900}});
const errors=[],external=[];
page.on('pageerror',e=>errors.push(e.message));
page.on('request',request=>{if(new URL(request.url()).origin!==new URL(url).origin)external.push(request.url());});
try{
 const manifest=await (await fetch(new URL('manifest.json',url))).json(),charts=manifest.charts;
 async function settled(id){await page.waitForFunction(id=>document.querySelector('#comparison').dataset.chart===id&&document.querySelector('#comparison').style.visibility==='visible',id);}
 await page.goto(url+'#'+charts[0].id);await settled(charts[0].id);
 assert.equal(await page.locator('#previous').isDisabled(),true);
 await page.locator('#next').click();await settled(charts[1].id);
 await page.keyboard.press('ArrowLeft');await settled(charts[0].id);
 await page.keyboard.press('End');await settled(charts.at(-1).id);assert.equal(await page.locator('#next').isDisabled(),true);
 await page.keyboard.press('Home');await settled(charts[0].id);
 const target=charts.findIndex(c=>c.id==='vl_1180');
 await page.locator('#slider').evaluate((el,index)=>{el.value=index;el.dispatchEvent(new Event('input',{bubbles:true}));},target);
 await settled(charts[target].id);assert.equal(await page.locator('h1').textContent(),'1180');
 await page.locator('#slider').focus();await page.keyboard.press('ArrowRight');await settled(charts[target+1].id);
 await page.locator('#slider').evaluate(el=>{for(const value of [200,10,500,999,0]){el.value=value;el.dispatchEvent(new Event('input',{bubbles:true}));}});
 await settled(charts[0].id);
 for(const width of [1440,800,390]){
  await page.setViewportSize({width,height:800});
  await page.waitForFunction(()=>[...document.images].every(img=>img.getBoundingClientRect().width<=img.parentElement.clientWidth+0.1&&img.getBoundingClientRect().height<=img.parentElement.clientHeight+0.1));
  const labels=page.getByRole('heading',{level:2});
  assert.deepEqual(await labels.allTextContents(),['Vega-Lite','ggaction']);
  for(const label of await labels.all())assert.equal(await label.isVisible(),true);
  const layout=await page.evaluate(()=>[...document.querySelectorAll('#comparison section')].map(section=>{
   const heading=section.querySelector('h2'),label=heading.getBoundingClientRect(),picture=section.querySelector('.picture').getBoundingClientRect();
   return {name:section.getAttribute('aria-labelledby'),labelId:heading.id,left:label.left,right:label.right,top:label.top,bottom:label.bottom,pictureTop:picture.top};
  }));
  assert(layout[0].right<layout[1].left,'Vega-Lite heading stays left of ggaction');
  assert.equal(layout[0].top,layout[1].top);
  for(const item of layout){assert.equal(item.name,item.labelId);assert(item.top>=0);assert(item.bottom<item.pictureTop);}
  const sizes=await page.evaluate(()=>[...document.images].map(img=>({w:img.getBoundingClientRect().width,h:img.getBoundingClientRect().height,nw:img.naturalWidth,nh:img.naturalHeight,parent:img.parentElement.getBoundingClientRect().width,parentHeight:img.parentElement.clientHeight})));
  assert.equal(sizes.length,2);
  for(const s of sizes){assert(s.w<=s.parent+0.1);assert(s.h<=s.parentHeight+0.1);assert(Math.abs(s.w/s.nw-s.h/s.nh)<0.01);}
  assert(Math.abs(sizes[0].w/sizes[0].nw-sizes[1].w/sizes[1].nw)<0.001);
 }
 const decoded=await page.evaluate(async charts=>{
  let total=0;
  for(let i=0;i<charts.length;i+=16)await Promise.all(charts.slice(i,i+16).flatMap(c=>[c.vegaLite,c.ggaction]).map(async src=>{const img=new Image();img.src=src;await img.decode();if(!img.naturalWidth||!img.naturalHeight)throw Error('Empty image '+src);total++;}));
  return total;
 },charts);
 assert.equal(decoded,charts.length*2);assert.deepEqual(errors,[]);assert.deepEqual(external,[]);
 const report={status:'passed',chartCount:charts.length,decodedImages:decoded,checks:['navigation','keyboard','range keys','fast range changes','hash deep link','boundaries','visible left/right headings at desktop/mobile widths','desktop/mobile shared scale and height fit','all SVGs decode','no external requests','no JavaScript errors']};
 await mkdir('.validation',{recursive:true});await writeFile('.validation/viewer.json',JSON.stringify(report,null,2)+'\n');console.log(report);
}finally{await browser.close();}
