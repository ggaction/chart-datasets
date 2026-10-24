import assert from 'node:assert/strict';
import {chromium} from 'playwright';
import {readFile,mkdir,writeFile} from 'node:fs/promises';
import {createHash} from 'node:crypto';
import {spawn} from 'node:child_process';
import {once} from 'node:events';
import {combineCatalog,selectCharts,DEFAULT_STATE} from '../explorer-model.js';
let server,browser;
let url=process.argv[2];
if(!url){
 server=spawn(process.execPath,['scripts/serve.mjs','_site'],{env:{...process.env,PORT:'0'},stdio:['ignore','pipe','inherit']});
 const timeout=setTimeout(()=>server.kill(),10000);
 try{const [line]=await once(server.stdout,'data');url=line.toString().trim();assert(url.startsWith('http://127.0.0.1:'));}finally{clearTimeout(timeout);}
}
const errors=[],httpErrors=[],external=[];
try{
 browser=await chromium.launch({headless:true});
 const page=await browser.newPage({viewport:{width:1440,height:900}});
 page.on('pageerror',e=>errors.push(e.message));
 page.on('response',r=>{if(r.status()>=400)httpErrors.push({url:r.url(),status:r.status()});});
 page.on('request',r=>{if(new URL(r.url()).origin!==new URL(url).origin)external.push(r.url());});
 const manifest=await (await fetch(new URL('manifest.json',url))).json(),catalog=await(await fetch(new URL('catalog.json',url))).json(),charts=combineCatalog(manifest,catalog);
 const settle=id=>page.waitForFunction(id=>document.querySelector('#comparison').dataset.chart===id&&document.querySelector('#comparison').style.visibility==='visible',id);
 const codeSettled=(id,stage,diff=false)=>page.waitForFunction(({id,stage,diff})=>{const d=document.querySelector('#gg-code').dataset;return d.chart===id&&d.stage===stage&&d.diff===String(diff);},{id,stage,diff});
 await page.goto(url);await page.waitForFunction(()=>document.querySelectorAll('.card').length>0);
 assert.equal(await page.locator('.card').count(),60);assert.equal(await page.locator('#gallery').isVisible(),true);
 await page.locator('#more').click();assert.equal(await page.locator('.card').count(),120);
 await page.locator('.card').nth(80).scrollIntoViewIfNeeded();
 const beforeScroll=await page.locator('#gallery').evaluate(el=>el.scrollTop);
 const picked=await page.locator('.card').nth(80).getAttribute('data-chart');
 await page.locator('.card').nth(80).click();await settle(picked);
 await page.goBack();await page.waitForFunction(()=>!document.querySelector('#gallery').hidden);
 assert.equal(await page.locator('.card').count(),120);
 assert(Math.abs(await page.locator('#gallery').evaluate(el=>el.scrollTop)-beforeScroll)<2);
 await page.locator('#preview').selectOption('both');assert.equal(await page.locator('.card').first().locator('img').count(),2);
 await page.locator('#type').selectOption('line');
 await page.locator('#structure').selectOption('layer');
 await page.locator('#sort').selectOption('complexity-desc');
 await page.waitForFunction(()=>new URL(location.href).searchParams.get('sort')==='complexity-desc');
 const expected=selectCharts(charts,{...DEFAULT_STATE,type:'line',structure:'layer',sort:'complexity-desc'});
 assert(expected.length>0);assert.equal(await page.locator('.card').first().getAttribute('data-chart'),expected[0].id);
 await page.locator('#search').fill('zzzz-no-chart-matches');await page.waitForFunction(()=>!document.querySelector('#gallery-empty').hidden);
 assert.equal(await page.locator('.card').count(),0);
 await page.locator('#reset').click();await page.waitForFunction(()=>document.querySelectorAll('.card').length===60);
 await page.locator('#search').fill('1180');await page.waitForFunction(()=>document.querySelector('.card')?.dataset.chart==='vl_1180');
 await page.locator('.card').first().click();await settle('vl_1180');
 assert.equal(await page.locator('#previous').isDisabled(),true);assert.equal(await page.locator('#next').isDisabled(),true);
 await page.locator('#code-panel summary').click();
 await codeSettled('vl_1180','G1');
 const selected=charts.find(c=>c.id==='vl_1180');
 for(const stage of selected.stages){
  await page.locator('#stage').selectOption(stage.level);await codeSettled(selected.id,stage.level);
  const raw=await(await fetch(new URL('charts/'+selected.id+'/'+stage.code,url))).text();
  assert.equal(await page.locator('#gg-code').textContent(),raw);
 }
 if(selected.stages.length>1){
  await page.locator('#diff').check();await codeSettled(selected.id,selected.stages.at(-1).level,true);
  assert(await page.locator('#gg-code .added,#gg-code .removed').count()>0);
 }
 const shared=page.url();await page.reload();await settle(selected.id);await codeSettled(selected.id,selected.stages.at(-1).level,selected.stages.length>1);assert.equal(page.url(),shared);
 const frozenImages=await page.locator('#comparison img').evaluateAll(imgs=>imgs.map(i=>i.src));
 await page.locator('#stage').selectOption('G1');await codeSettled(selected.id,'G1');
 assert.deepEqual(await page.locator('#comparison img').evaluateAll(imgs=>imgs.map(i=>i.src)),frozenImages);
 await page.locator('#code-panel summary').click();
 await page.locator('#reset').click();await settle('vl_1180');
 await page.locator('#next').click();await settle(charts[charts.findIndex(c=>c.id==='vl_1180')+1].id);
 await page.keyboard.press('ArrowLeft');await settle('vl_1180');
 await page.locator('body').click({position:{x:2,y:2}});
 await page.keyboard.press('End');await settle(charts.at(-1).id);assert.equal(await page.locator('#next').isDisabled(),true);
 await page.keyboard.press('Home');await settle(charts[0].id);
 await page.locator('#slider').evaluate(el=>{for(const value of [20,200,10,500,0]){el.value=value;el.dispatchEvent(new Event('input',{bubbles:true}));}});
 await settle(charts[0].id);
 for(const width of [1440,800,390,320]){
  await page.setViewportSize({width,height:800});
  await page.waitForFunction(()=>[...document.querySelectorAll('#comparison img')].every(img=>img.getBoundingClientRect().width<=img.parentElement.clientWidth+0.1&&img.getBoundingClientRect().height<=img.parentElement.clientHeight+0.1));
  const geometry=await page.evaluate(()=>({overflow:document.documentElement.scrollWidth>innerWidth,labels:[...document.querySelectorAll('#comparison h3')].map(el=>({text:el.textContent,x:el.getBoundingClientRect().left,y:el.getBoundingClientRect().top})),images:[...document.querySelectorAll('#comparison img')].map(i=>({w:i.getBoundingClientRect().width,h:i.getBoundingClientRect().height,nw:i.naturalWidth,nh:i.naturalHeight}))}));
  assert(!geometry.overflow);assert.deepEqual(geometry.labels.map(x=>x.text),['Vega-Lite','ggaction']);assert(geometry.labels[0].x<geometry.labels[1].x);assert.equal(geometry.labels[0].y,geometry.labels[1].y);
  assert.equal(geometry.images.length,2);for(const s of geometry.images){assert(s.w>0&&s.h>0);assert(Math.abs(s.w/s.nw-s.h/s.nh)<0.001);}
  assert(Math.abs(geometry.images[0].w/geometry.images[0].nw-geometry.images[1].w/geometry.images[1].nw)<0.001);
  await page.locator('#code-panel summary').click();await codeSettled(charts[0].id,'G1');
  assert.equal(await page.locator('#gg-code').isVisible(),true);assert.equal(await page.evaluate(()=>document.documentElement.scrollWidth>innerWidth),false);
  const panel=await page.evaluate(()=>({height:innerHeight,bottom:document.querySelector('.bottom-bar').getBoundingClientRect().top,code:[...document.querySelectorAll('.code-panes pre')].map(el=>({top:el.getBoundingClientRect().top,bottom:el.getBoundingClientRect().bottom,height:el.getBoundingClientRect().height})),images:[...document.querySelectorAll('#comparison img')].map(el=>el.getBoundingClientRect().height)}));
  for(const box of panel.code){assert(box.height>20,'Code pane remains usable');assert(box.bottom<=panel.bottom+1,'Code panes stay above footer');}
  assert(panel.images.every(h=>h>0),'Both charts stay visible with code open');
  await page.locator('#code-panel summary').click();
 }
 await page.goto(url+'#vl_1180');await settle('vl_1180');
 assert.equal(await page.locator('#number').textContent(),'1180');
 // Fail closed on stale deployments and code corruption; never show stale code as valid.
 await page.route('**/catalog.json',async route=>{const body=structuredClone(catalog);body.manifestSha256='0'.repeat(64);await route.fulfill({json:body});});
 await page.goto(url);await page.waitForFunction(()=>document.querySelector('#status').textContent.includes('site is updating'));
 await page.unroute('**/catalog.json');
 await page.route('**/charts/vl_1180/G1.gg.mjs',route=>route.fulfill({body:'corrupted code',contentType:'text/plain'}));
 await page.goto(url+'?view=compare&id=vl_1180&code=1');await settle('vl_1180');
 await page.waitForFunction(()=>document.querySelector('#gg-code').textContent.includes('Code does not match'));
 assert.deepEqual(errors,[]);assert.deepEqual(httpErrors,[]);assert.deepEqual(external,[]);
 const report={status:'passed',chartCount:charts.length,programCount:manifest.programCount,checks:['gallery pagination and paired preview','multiple type/structure filters and structural ordering','search and empty state/reset','filtered comparison boundaries','browser back and gallery scroll preservation','every actual stage of1180 code equals frozen module bytes','stage diff and unchanged canonical image','URL/reload and legacy hash links','arrow/range/rapid navigation','left Vega-Lite/right ggaction at1440/800/390/320','mobile code panel and no horizontal page overflow','mixed deployment and corrupted code fail closed','no external or failed requests, no JS errors'],manualImageInspection:false};
 await mkdir('.validation',{recursive:true});await writeFile('.validation/viewer-explorer.json',JSON.stringify(report,null,2)+'\n');console.log(JSON.stringify(report));
}finally{await browser?.close();server?.kill();}
