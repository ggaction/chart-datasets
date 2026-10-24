import test from 'node:test';
import assert from 'node:assert/strict';
import {describeChart,selectCharts,diffLines,readState,stateQuery,DEFAULT_STATE,combineCatalog} from '../explorer-model.js';
const sha='a'.repeat(64);
const meta={id:'vl_0001',files:{'source.vl.json':{sha256:sha}},stages:[{level:'G1',code:'G1.gg.mjs',sha256:sha,actions:4,topOptions:9}]};

test('classifies inherited encodings and mixed layers without walking arbitrary data',()=>{
 const c=describeChart({encoding:{x:{field:'year',type:'temporal'},tooltip:{field:'secret'}},layer:[{mark:'line',encoding:{y:{field:'value'}}},{mark:'point',encoding:{y:{field:'value'}}}],datasets:{fake:[{mark:'bar',layer:[{mark:'arc'}]}]}},meta,[{x:1}]);
 assert.deepEqual(c.types,['line','point']);assert.deepEqual(c.structures,['layer']);assert.equal(c.metrics.units,2);assert.equal(c.metrics.channels,4);assert.equal(c.complexity,9);assert(!c.fields.includes('secret'));assert(c.features.includes('temporal'));assert.equal(c.primaryRows,1);
});
test('nested repeat/facet/concat structures and static feature definitions survive',()=>{
 const c=describeChart({hconcat:[{repeat:['a','b'],spec:{mark:'bar',transform:[{aggregate:[]}],encoding:{color:{field:'g'},y:{field:'a',scale:{type:'log'},stack:'zero'}}}},{facet:{field:'g'},spec:{mark:'circle',encoding:{size:{field:'n'}}}}]},meta,{});
 assert.deepEqual(c.types,['bar','point']);assert.deepEqual(c.structures,['concat','facet','repeat']);for(const f of ['color','size','log','stack','aggregate'])assert(c.features.includes(f));assert.equal(c.primaryRows,null);
});
test('row and column facets, overlay points, empty data, missing action counts',()=>{
 const c=describeChart({mark:{type:'line',point:true},encoding:{row:{field:'g'},x:{field:'a'}}},{...meta,stages:[{...meta.stages[0],actions:null}]},[]);
 assert.deepEqual(c.types,['line','point']);assert.deepEqual(c.structures,['facet']);assert.equal(c.primaryRows,0);assert.equal(c.stages[0].actions,null);
});
test('filters intersect and multiword search matches all terms; missing counts sort last',()=>{
 const a={id:'vl_0001',types:['line','point'],structures:['layer'],features:['color'],search:'oil year vl_0001',complexity:5,primaryRows:0,stages:[{actions:null}]};
 const b={...a,id:'vl_0002',types:['bar'],search:'oil price vl_0002',complexity:20,primaryRows:50,stages:[{actions:8}]};
 assert.deepEqual(selectCharts([a,b],{type:'point',structure:'layer',feature:'color',q:'oil year'}),[a]);assert.equal(selectCharts([a,b],{q:'oil nonexistent'}).length,0);
 assert.deepEqual(selectCharts([a,b],{sort:'actions-desc'}).map(c=>c.id),['vl_0002','vl_0001']);assert.deepEqual(selectCharts([a,b],{sort:'rows-asc'}).map(c=>c.id),['vl_0001','vl_0002']);
});
test('share state round trips, old hashes work and invalid enum values stay safe',()=>{
 const s={...DEFAULT_STATE,view:'compare',q:'a & b',type:'line',structure:'layer',sort:'actions-desc',id:'vl_1180',code:true,diff:true,stage:'G3',preview:'both'};
 assert.deepEqual(readState('?'+stateQuery(s)),s);assert.equal(readState('','#vl_1180').view,'compare');assert.equal(readState('?sort=evil&preview=evil').sort,'id');assert.equal(readState('?q='+('a'.repeat(500))).q.length,200);
});
test('diff reconstructs exact previous and next text, including empty and bounded large cases',()=>{
 for(const [a,b] of [['a\nb\nc','a\nd\nc'],['','a'],['x',''],['same','same'],[Array(800).fill('a').join('\n'),Array(800).fill('b').join('\n')]]){
  const d=diffLines(a,b);assert.equal(d.filter(l=>l.kind!=='added').map(l=>l.text).join('\n'),a);assert.equal(d.filter(l=>l.kind!=='removed').map(l=>l.text).join('\n'),b);
 }
});
test('catalog refuses duplicate/missing families, wrong frontier and unsafe code paths',()=>{
 const row=describeChart({mark:'bar'},meta,[]),manifest={charts:[{id:meta.id,stageCount:1}]};
 assert.equal(combineCatalog(manifest,{schemaVersion:1,charts:[row]}).length,1);
 for(const change of [r=>r.id='vl_9999',r=>r.stages.push({...r.stages[0]}),r=>r.stages[0].code='../escape.mjs',r=>r.sourceSha256='invalid']){
  const r=structuredClone(row);change(r);assert.throws(()=>combineCatalog(manifest,{schemaVersion:1,charts:[r]}));
 }
});
