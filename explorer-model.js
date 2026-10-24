// Shared, deterministic catalog/search logic. No chart execution or model calls.
export const TYPE_LABELS = Object.freeze({bar:'Bar',line:'Line',point:'Point / scatter',area:'Area',rect:'Heatmap / rect',arc:'Arc / pie',boxplot:'Box plot',errorbar:'Error bar',errorband:'Error band',rule:'Rule',tick:'Tick',text:'Text',trail:'Trail',image:'Image',geoshape:'Geoshape'});
export const STRUCTURE_LABELS = Object.freeze({single:'Single',layer:'Layered',facet:'Faceted',repeat:'Repeated',concat:'Concatenated'});
export const FEATURE_LABELS = Object.freeze({color:'Color encoding',size:'Size encoding',shape:'Shape encoding',stack:'Explicit stack',log:'Log scale',temporal:'Temporal encoding',aggregate:'Aggregation'});
export const SCORE_DESCRIPTION = 'Declared mark units + static encoding channels + 2 × declared transforms + 3 × composition nodes. A structural heuristic, not visual difficulty. Tooltip and other interactive channels are excluded.';
const INTERACTIVE = new Set(['tooltip','href','url','description','cursor']);
const finite = n => Number.isFinite(n) ? n : null;

export function describeChart(spec, metadata, primaryData) {
  const types=new Set(), structures=new Set(), features=new Set(), fields=new Set(), titles=new Set();
  const metrics={units:0,channels:0,transforms:0,compositions:0};
  function title(value) { if(typeof value==='string')titles.add(value);else if(Array.isArray(value))value.forEach(title);else if(value&&typeof value==='object')title(value.text); }
  function encodingFields(value) {
    if(!value||typeof value!=='object')return;
    if(typeof value.field==='string')fields.add(value.field);
    if(value.aggregate)features.add('aggregate');
    if(value.type==='temporal')features.add('temporal');
    if(value.scale?.type==='log')features.add('log');
    if(value.stack!==undefined&&value.stack!==null&&value.stack!==false)features.add('stack');
    title(value.title);title(value.axis?.title);title(value.legend?.title);
    if(Array.isArray(value))value.forEach(encodingFields);
    if(value.condition)encodingFields(value.condition);
  }
  function visit(node,inherited={}) {
    if(!node||typeof node!=='object')return;
    title(node.title);
    if(typeof node.description==='string')titles.add(node.description);
    const encoding={...inherited,...node.encoding};
    const transforms=Array.isArray(node.transform)?node.transform:[];
    metrics.transforms+=transforms.length;
    if(transforms.some(t=>t.aggregate||t.joinaggregate))features.add('aggregate');
    if(transforms.some(t=>t.stack))features.add('stack');
    for(const t of transforms)if(typeof t.as==='string')fields.add(t.as);
    for(const [channel,def] of Object.entries(node.encoding||{})) {
      if(INTERACTIVE.has(channel))continue;
      encodingFields(def);
      if(['color','size','shape'].includes(channel)&&def&&typeof def==='object'&&('field' in def||'condition' in def))features.add(channel);
    }
    const mark=typeof node.mark==='string'?node.mark:node.mark?.type;
    if(mark) {
      metrics.units++;
      const normalized=['circle','square'].includes(mark)?'point':mark;
      types.add(normalized);
      if(node.mark?.point)types.add('point');
      if(node.mark?.line)types.add('line');
      metrics.channels+=Object.keys(encoding).filter(k=>!INTERACTIVE.has(k)).length;
      Object.entries(encoding).filter(([k])=>!INTERACTIVE.has(k)).forEach(([,v])=>encodingFields(v));
    }
    if(node.layer){structures.add('layer');metrics.compositions++;}
    if(node.facet||Object.keys(node.encoding||{}).some(k=>['row','column','facet'].includes(k))){structures.add('facet');metrics.compositions++;}
    if(node.repeat){structures.add('repeat');metrics.compositions++;}
    for(const key of ['concat','hconcat','vconcat'])if(node[key]){structures.add('concat');metrics.compositions++;}
    for(const key of ['layer','concat','hconcat','vconcat'])if(Array.isArray(node[key]))node[key].forEach(child=>visit(child,encoding));
    if(node.spec)visit(node.spec,encoding);
  }
  visit(spec);
  if(!structures.size)structures.add('single');
  const stages=metadata.stages.map(s=>({level:s.level,code:s.code,sha256:s.sha256,actions:finite(s.actions),options:finite(s.topOptions)}));
  return {id:metadata.id,types:[...types].sort(),structures:[...structures].sort(),features:[...features].sort(),fields:[...fields].sort(),titles:[...titles],metrics,
    complexity:metrics.units+metrics.channels+2*metrics.transforms+3*metrics.compositions,
    sourceSha256:metadata.files?.['source.vl.json']?.sha256,primaryRows:Array.isArray(primaryData)?primaryData.length:null,stages};
}

export function selectCharts(charts, state) {
  const terms=(state.q||'').normalize('NFKC').toLowerCase().trim().split(/\s+/).filter(Boolean);
  const result=charts.filter(c=>(!state.type||c.types.includes(state.type))&&(!state.structure||c.structures.includes(state.structure))&&(!state.feature||c.features.includes(state.feature))&&terms.every(t=>c.search.includes(t)));
  const sort=state.sort||'id';
  const value=c=>sort.startsWith('complexity')?c.complexity:sort.startsWith('actions')?c.stages[0]?.actions:sort.startsWith('rows')?c.primaryRows:null;
  result.sort((a,b)=>{
    if(sort==='id')return a.id.localeCompare(b.id);
    const x=value(a),y=value(b); // Missing measurements always sort last, including descending.
    if(x==null||y==null)return x==null&&y==null?a.id.localeCompare(b.id):x==null?1:-1;
    return (sort.endsWith('-desc')?y-x:x-y)||a.id.localeCompare(b.id);
  });
  return result;
}

export function combineCatalog(manifest,catalog) {
  if(catalog.schemaVersion!==1||catalog.charts.length!==manifest.charts.length)throw Error('Catalog does not match the dataset. Please reload.');
  const map=new Map(catalog.charts.map(c=>[c.id,c]));
  if(map.size!==manifest.charts.length)throw Error('Duplicate catalog chart.');
  return manifest.charts.map(c=>{
    const meta=map.get(c.id);
    if(!meta||meta.stages.length!==c.stageCount||!/^vl_\d{4}$/.test(c.id)||!(/^[a-f0-9]{64}$/).test(meta.sourceSha256||'')||meta.stages.some(s=>!/^G[1-8]$/.test(s.level)||s.code!==s.level+'.gg.mjs'||!(/^[a-f0-9]{64}$/).test(s.sha256||'')))throw Error('Invalid catalog chart.');
    return {...c,...meta,search:[c.id,c.id.slice(3),...meta.types,...meta.types.map(t=>TYPE_LABELS[t]||t),...meta.structures,...meta.structures.map(t=>STRUCTURE_LABELS[t]||t),...meta.features,...meta.fields,...meta.titles].join(' ').normalize('NFKC').toLowerCase()};
  });
}

export const DEFAULT_STATE=Object.freeze({view:'gallery',q:'',type:'',structure:'',feature:'',sort:'id',preview:'vega',id:'',stage:'',code:false,diff:false});
const sorts=['id','complexity-asc','complexity-desc','actions-asc','actions-desc','rows-asc','rows-desc'];
export function readState(search,hash='') {
  const p=new URLSearchParams(search),s={...DEFAULT_STATE};
  for(const k of ['q','type','structure','feature','id','stage'])s[k]=(p.get(k)||'').slice(0,k==='q'?200:40);
  if(p.get('view')==='compare')s.view='compare';
  if(sorts.includes(p.get('sort')))s.sort=p.get('sort');
  if(['vega','ggaction','both'].includes(p.get('preview')))s.preview=p.get('preview');
  s.code=p.get('code')==='1';s.diff=p.get('diff')==='1';
  // Preserve previously shared #vl_1180 links.
  if(/^#vl_\d{4}$/.test(hash)){s.id=hash.slice(1);s.view='compare';}
  return s;
}
export function stateQuery(state) {
  const p=new URLSearchParams();
  for(const [k,v] of Object.entries(DEFAULT_STATE))if(state[k]!==v&&state[k]!==''&&state[k]!=null)p.set(k,typeof state[k]==='boolean'?(state[k]?'1':'0'):state[k]);
  return p.toString();
}

// Bounded line diff. Large changes use exact common prefix/suffix instead of quadratic work.
export function diffLines(before,after) {
  const a=before.split('\n'),b=after.split('\n');let start=0,end=0;
  while(start<a.length&&start<b.length&&a[start]===b[start])start++;
  while(end<a.length-start&&end<b.length-start&&a[a.length-1-end]===b[b.length-1-end])end++;
  const x=a.slice(start,a.length-end),y=b.slice(start,b.length-end),out=a.slice(0,start).map(text=>({kind:'same',text}));
  if(x.length*y.length>600000)out.push(...x.map(text=>({kind:'removed',text})),...y.map(text=>({kind:'added',text})));
  else {
    const rows=Array.from({length:x.length+1},()=>new Uint32Array(y.length+1));
    for(let i=x.length-1;i>=0;i--)for(let j=y.length-1;j>=0;j--)rows[i][j]=x[i]===y[j]?1+rows[i+1][j+1]:Math.max(rows[i+1][j],rows[i][j+1]);
    let i=0,j=0;
    while(i<x.length||j<y.length){if(i<x.length&&j<y.length&&x[i]===y[j]){out.push({kind:'same',text:x[i++]});j++;}else if(i<x.length&&(j===y.length||rows[i+1][j]>=rows[i][j+1]))out.push({kind:'removed',text:x[i++]});else out.push({kind:'added',text:y[j++]});}
  }
  return out.concat(a.slice(a.length-end).map(text=>({kind:'same',text})));
}
