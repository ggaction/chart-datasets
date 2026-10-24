import {TYPE_LABELS,STRUCTURE_LABELS,FEATURE_LABELS,SCORE_DESCRIPTION,DEFAULT_STATE,readState,stateQuery,selectCharts,combineCatalog,diffLines} from './explorer-model.js';
const $=id=>document.getElementById(id),PAGE_SIZE=60;
let state=readState(location.search,location.hash),charts=[],filtered=[],shown=0,ticket=0,codeTicket=0,visible=null,loaded=false,galleryKey='',galleryScroll=0;
const images=new Map(),texts=new Map();
const labels=keys=>keys.map(k=>TYPE_LABELS[k]||k).join(' + ');
const format=n=>n==null?'—':n.toLocaleString('en-US');
function announce(text){$('status').textContent=text;}
function stateURL(){const query=stateQuery(state);return location.pathname+(query?'?'+query:'');}
function remember(){history.replaceState(null,'',stateURL());}
async function digest(bytes){return [...new Uint8Array(await crypto.subtle.digest('SHA-256',bytes))].map(b=>b.toString(16).padStart(2,'0')).join('');}
function image(src){
 if(!images.has(src)){
  const pending=new Promise((resolve,reject)=>{const img=new Image();img.onload=()=>img.decode().then(()=>resolve(img)).catch(reject);img.onerror=()=>reject(Error('Could not load chart image.'));img.src=src;}).catch(e=>{images.delete(src);throw e;});
  images.set(src,pending);while(images.size>8)images.delete(images.keys().next().value);
 }
 return images.get(src);
}
async function text(path,expected){
 const key=path+':'+expected;
 if(!texts.has(key)){texts.set(key,fetch(path).then(async r=>{if(!r.ok)throw Error('Could not load code. Please retry.');const bytes=await r.arrayBuffer();if(await digest(bytes)!==expected)throw Error('Code does not match this catalog. Please reload.');return new TextDecoder().decode(bytes);}).catch(e=>{texts.delete(key);throw e;}));while(texts.size>10)texts.delete(texts.keys().next().value);}
 return texts.get(key);
}
function fit(){
 if(!visible||state.view!=='compare')return;
 const boxes=[$('left'),$('right')];
 const scale=Math.max(0,Math.min(1,...visible.map((img,i)=>boxes[i].clientWidth/img.naturalWidth),...visible.map((img,i)=>boxes[i].clientHeight/img.naturalHeight)));
 visible.forEach(img=>{img.style.width=img.naturalWidth*scale+'px';img.style.height=img.naturalHeight*scale+'px';});
}
function thumbnail(chart,kind){
 const box=document.createElement('span');box.className='thumb';
 const img=document.createElement('img');img.loading='lazy';img.decoding='async';img.width=400;img.height=260;img.src=kind==='vega'?chart.vegaLite:chart.ggaction;img.alt=(kind==='vega'?'Vega-Lite':'ggaction')+' chart '+chart.id.slice(3);
 img.addEventListener('error',()=>{img.alt='Image unavailable for '+chart.id;announce('Some previews could not load. Open the chart to retry.');},{once:true});
 const label=document.createElement('small');label.textContent=kind==='vega'?'Vega-Lite':'ggaction';box.append(img,label);return box;
}
function more(){
 const fragment=document.createDocumentFragment();
 for(const chart of filtered.slice(shown,shown+PAGE_SIZE)){
  const card=document.createElement('button');card.type='button';card.className='card';card.dataset.chart=chart.id;card.setAttribute('aria-label','Compare chart '+chart.id.slice(3)+': '+labels(chart.types));
  const thumbs=document.createElement('span');thumbs.className='thumbnails';
  for(const kind of state.preview==='both'?['vega','ggaction']:[state.preview])thumbs.append(thumbnail(chart,kind));
  const caption=document.createElement('span');caption.className='card-caption';const id=document.createElement('span');id.className='card-id';id.textContent=chart.id.slice(3);const type=document.createElement('span');type.className='card-type';type.textContent=labels(chart.types);caption.append(id,type);card.append(thumbs,caption);
  if(state.sort!=='id'){
   const metric=document.createElement('span');metric.className='card-measure';metric.textContent=state.sort.startsWith('complexity')?'Structure '+chart.complexity:state.sort.startsWith('actions')?'G1 · '+format(chart.stages[0].actions)+' actions':format(chart.primaryRows)+' primary rows';card.append(metric);
  }
  card.addEventListener('click',()=>{state.id=chart.id;state.stage='';setView('compare',true,true);});fragment.append(card);
 }
 shown=Math.min(shown+PAGE_SIZE,filtered.length);$('grid').append(fragment);$('more').hidden=shown>=filtered.length;
 $('results').textContent=format(filtered.length)+' charts'+(shown<filtered.length?' · showing '+format(shown):'');
}
function key(){return JSON.stringify([state.q,state.type,state.structure,state.feature,state.sort,state.preview]);}
function drawGallery(){galleryKey=key();shown=0;galleryScroll=0;$('grid').replaceChildren();$('gallery').scrollTop=0;$('gallery-empty').hidden=filtered.length!==0;more();}
function controls(){for(const k of ['type','structure','feature','sort','preview'])$(k).value=state[k];$('search').value=state.q;}
function selection(){return filtered.find(c=>c.id===state.id)||filtered[0];}
function setView(view,focus=false,push=false){
 if(!$('gallery').hidden&&view==='compare')galleryScroll=$('gallery').scrollTop;
 const changed=state.view!==view;state.view=view;if(changed&&push)history.pushState(null,'',stateURL());$('gallery').hidden=view!=='gallery';$('detail').hidden=view!=='compare';
 $('gallery-view').setAttribute('aria-pressed',String(view==='gallery'));$('compare-view').setAttribute('aria-pressed',String(view==='compare'));
 if(view==='compare')showChart(selection(),focus);else{ticket++;codeTicket++;announce('');remember();$('gallery').scrollTop=galleryScroll;if(focus&&state.id)$('grid').querySelector('[data-chart="'+state.id+'"]')?.focus({preventScroll:true});}
}
function refresh(){
 controls();filtered=selectCharts(charts,state);drawGallery();
 if(state.view==='compare')showChart(selection());else remember();
}
async function showChart(chart,focus=false){
 const turn=++ticket;codeTicket++;visible=null;$('comparison').style.visibility='hidden';delete $('comparison').dataset.chart;
 if(!chart){state.id='';$('number').textContent='No matching charts';$('chart-meta').textContent='';$('position').textContent='0 / 0';$('previous').disabled=true;$('next').disabled=true;$('slider').disabled=true;$('stage').replaceChildren();$('code-panel').hidden=true;announce('No charts match. Clear the filters to continue.');remember();return;}
 state.id=chart.id;const current=filtered.indexOf(chart);$('number').textContent=chart.id.slice(3);$('chart-meta').textContent=labels(chart.types)+' · '+chart.structures.map(s=>STRUCTURE_LABELS[s]).join(', ')+' · Structure '+chart.complexity;
 $('chart-meta').title=chart.metrics.units+' mark units · '+chart.metrics.channels+' channels · '+chart.metrics.transforms+' transforms · '+chart.metrics.compositions+' composition nodes';
 $('previous').disabled=current===0;$('next').disabled=current===filtered.length-1;$('slider').disabled=false;$('slider').max=filtered.length-1;$('slider').value=current;$('slider').setAttribute('aria-valuetext',chart.id);$('position').textContent=(current+1)+' / '+filtered.length;
 $('stage').replaceChildren(...chart.stages.map(s=>new Option(s.level,s.level)));if(!chart.stages.some(s=>s.level===state.stage))state.stage=chart.stages[0].level;$('stage').value=state.stage;
 $('code-panel').hidden=false;$('code-panel').open=state.code;$('diff').checked=state.diff;$('stage-summary').textContent=chart.stages.length+' stages · same chart';updateStage(chart);remember();announce('Loading chart…');
 if(focus)$('number').scrollIntoView({block:'nearest'});
 try{
  const pair=await Promise.all([image(chart.vegaLite),image(chart.ggaction)]);
  if(turn!==ticket||state.view!=='compare')return;
  pair.forEach((img,i)=>{img.alt=(i===0?'Vega-Lite':'ggaction')+' chart '+chart.id.slice(3);$(i===0?'left':'right').replaceChildren(img);});visible=pair;fit();$('comparison').style.visibility='visible';$('comparison').dataset.chart=chart.id;announce('');
  for(const neighbor of [filtered[current-1],filtered[current+1]])if(neighbor){image(neighbor.vegaLite).catch(()=>{});image(neighbor.ggaction).catch(()=>{});}
 }catch(e){if(turn===ticket)announce(e.message);}
}
function updateStage(chart){
 const s=chart.stages.find(s=>s.level===state.stage)||chart.stages[0];
 $('stage-metrics').textContent=format(s.actions)+' actions · '+format(s.options)+' options';$('diff').disabled=chart.stages.indexOf(s)===0;
 $('gg-code-title').textContent='ggaction · '+s.level;$('source-link').href='charts/'+chart.id+'/source.vl.json';$('gg-link').href='charts/'+chart.id+'/'+s.code;
 if(state.code)showCode(chart,s);
}
async function showCode(chart,stage){
 const turn=++codeTicket;const index=chart.stages.indexOf(stage),changed=state.diff&&index>0;
 $('source-code').textContent='Loading…';$('gg-code').textContent='Loading…';delete $('gg-code').dataset.chart;delete $('gg-code').dataset.stage;delete $('gg-code').dataset.diff;$('diff-key').hidden=!changed;
 try{
  const base='charts/'+chart.id+'/',[source,code,previous]=await Promise.all([text(base+'source.vl.json',chart.sourceSha256),text(base+stage.code,stage.sha256),changed?text(base+chart.stages[index-1].code,chart.stages[index-1].sha256):Promise.resolve(null)]);
  if(turn!==codeTicket||!state.code||state.id!==chart.id)return;
  $('source-code').textContent=source;
  if(!changed)$('gg-code').textContent=code;
  else{
   const fragment=document.createDocumentFragment();
   for(const line of diffLines(previous,code)){const span=document.createElement('span');span.className='diff-line '+line.kind;span.textContent=(line.kind==='added'?'+ ':line.kind==='removed'?'− ':'  ')+line.text;fragment.append(span);}
   $('gg-code').replaceChildren(fragment);
  }
  $('gg-code').dataset.chart=chart.id;$('gg-code').dataset.stage=stage.level;$('gg-code').dataset.diff=String(changed);
 }catch(e){if(turn===codeTicket){$('source-code').textContent='';$('gg-code').textContent=e.message;}}
}
function move(delta){const chart=selection();if(!chart)return;showChart(filtered[Math.max(0,Math.min(filtered.length-1,filtered.indexOf(chart)+delta))]);}
function populate(id,key,labels){
 const counts=new Map();for(const c of charts)for(const k of c[key])counts.set(k,(counts.get(k)||0)+1);
 for(const [value,count] of [...counts].sort(([a],[b])=>(labels[a]||a).localeCompare(labels[b]||b)))$(id).append(new Option((labels[value]||value)+' · '+count,value));
}
$('toolbar').addEventListener('submit',e=>e.preventDefault());
let timer;$('search').addEventListener('input',()=>{clearTimeout(timer);timer=setTimeout(()=>{state.q=$('search').value;refresh();},150);});
for(const k of ['type','structure','feature','sort'])$(k).addEventListener('change',()=>{clearTimeout(timer);state.q=$('search').value;state[k]=$(k).value;refresh();});
$('preview').addEventListener('change',()=>{state.preview=$('preview').value;drawGallery();remember();});
$('reset').addEventListener('click',()=>{clearTimeout(timer);state={...DEFAULT_STATE,view:state.view,preview:state.preview,id:state.id,code:state.code};refresh();});
$('gallery-view').addEventListener('click',()=>setView('gallery',true,true));$('compare-view').addEventListener('click',()=>setView('compare',false,true));
$('more').addEventListener('click',more);$('previous').addEventListener('click',()=>move(-1));$('next').addEventListener('click',()=>move(1));
$('slider').addEventListener('input',()=>showChart(filtered[Number($('slider').value)]));
$('stage').addEventListener('change',()=>{state.stage=$('stage').value;const c=selection();if(c)updateStage(c);remember();});
$('diff').addEventListener('change',()=>{state.diff=$('diff').checked;const c=selection();if(c)updateStage(c);remember();});
$('code-panel').addEventListener('toggle',()=>{if(state.code===$('code-panel').open)return;state.code=$('code-panel').open;codeTicket++;const c=selection();if(c)updateStage(c);remember();requestAnimationFrame(fit);});
$('share').addEventListener('click',async()=>{try{await navigator.clipboard.writeText(location.href);announce('Link copied.');}catch{announce('Copy the browser address to share this view.');}});
function restore(){if(!loaded)return;clearTimeout(timer);state=readState(location.search,location.hash);controls();filtered=selectCharts(charts,state);if(galleryKey!==key())drawGallery();setView(state.view);}
window.addEventListener('popstate',restore);window.addEventListener('hashchange',restore);window.addEventListener('resize',fit);new ResizeObserver(fit).observe($('comparison'));
document.addEventListener('keydown',event=>{
 if(!loaded||state.view!=='compare'||event.altKey||event.ctrlKey||event.metaKey||event.target.closest('input,select,textarea,summary,pre,a,[contenteditable]'))return;
 if(event.key==='Escape'){setView('gallery',true,true);return;}
 const chart=selection();if(!chart)return;const current=filtered.indexOf(chart),index={ArrowLeft:current-1,ArrowRight:current+1,Home:0,End:filtered.length-1}[event.key];
 if(index!==undefined){event.preventDefault();showChart(filtered[Math.max(0,Math.min(filtered.length-1,index))]);}
});
try{
 const responses=await Promise.all(['manifest.json','catalog.json'].map(f=>fetch(f,{cache:'no-cache'})));if(responses.some(r=>!r.ok))throw Error('Could not load the chart catalog. Please reload.');
 const [manifestText,catalog]=await Promise.all([responses[0].text(),responses[1].json()]);
 if(await digest(new TextEncoder().encode(manifestText))!==catalog.manifestSha256)throw Error('The site is updating. Please reload in a moment.');
 charts=combineCatalog(JSON.parse(manifestText),catalog);if(!charts.length)throw Error('No charts available.');
 $('total').textContent=format(charts.length)+' charts';$('score-description').textContent=SCORE_DESCRIPTION;
 populate('type','types',TYPE_LABELS);populate('structure','structures',STRUCTURE_LABELS);populate('feature','features',FEATURE_LABELS);loaded=true;controls();filtered=selectCharts(charts,state);drawGallery();setView(state.view);if(state.view==='gallery')announce('');
}catch(e){announce(e.message);}
