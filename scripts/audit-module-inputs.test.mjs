import assert from'node:assert/strict';import test from'node:test';import{auditModuleInputs}from'./audit-module-inputs.mjs';
const head='import {chart} from "ggaction";import primary from "./data.json";import reference from "./data-lookup-0.json";';
const body='export function buildChart(){return chart().createData({values:reference}).createData({id:"terms",values:primary});}';
const files=['data.json','data-lookup-0.json','data-lookup-1.json'];
test('binds IDs from actual code and keeps unimported descriptor snapshots',()=>{let r=auditModuleInputs(head+body,files);assert.deepEqual(new Set(r.bindings.map(x=>x.datasetId)),new Set(['data','terms']));assert.equal(r.bindings.find(x=>x.datasetId==='data').file,'data-lookup-0.json');assert(!r.imports.some(x=>x.file==='data-lookup-1.json'));});
test('comments and strings do not introduce fake imports',()=>{assert.equal(auditModuleInputs(head+'// import fake from "./secret.json"\n'+body+'\nconst str="import bad from ./other.json";',files).imports.length,2);});
for(const[name,code,allowed]of[
 ['unknown table',head.replace('data-lookup-0.json','data-lookup-4.json')+body,files],
 ['path escape',head.replace('./data-lookup-0.json','../data-lookup-0.json')+body,files],
 ['remote import',head.replace('./data-lookup-0.json','https://example.com/data.json')+body,files],
 ['shadowed raw import',head+body.replace('buildChart()','buildChart(primary)'),files],
 ['mapped table',head+body.replace('values:primary','values:primary.map(x=>x)'),files],
 ['spread data options',head+body.replace('id:"terms",values:primary','...opts,values:primary'),files],
 ['dynamic import',head+body+'\nimport("./data.json");',files],
 ['dynamic ID',head+body.replace('id:"terms"','id:someId'),files],
 ['CommonJS dependency',head+body+'\nrequire("./data.json");',files],
 ['unused raw import',head+body.replace('values:reference','values:primary'),files]
])test('rejects '+name,()=>assert.throws(()=>auditModuleInputs(code,allowed)));
test('historical single-input mode audits dependencies without claiming a new raw binding proof',()=>{const old='import {chart} from "ggaction";import data from "./data.json";export function buildChart(){return chart().createData({values:data.map(x=>x)})}';const r=auditModuleInputs(old,['data.json'],{strictBindings:false});assert.equal(r.policy,'historical-single-input-dependencies-only');assert.deepEqual(r.bindings,[]);assert.throws(()=>auditModuleInputs(old,['data.json']));});
import {spawnSync} from'node:child_process';
test('typed input comparison preserves signed zero, IEEE values, booleans, key order and row order',()=>{const source=`import sys,json\nsys.path.insert(0,'scripts')\nfrom dataset_inputs import ordered\nassert ordered(-0.0) != ordered(0)\nassert ordered(1) == ordered(1.0)\nassert ordered(True) != ordered(1)\nassert ordered({'a':1,'b':2}) != ordered({'b':2,'a':1})\nassert ordered([1,2]) != ordered([2,1])\nassert ordered(1.0) != ordered(1.0000000000000002)\nprint('exact')\n`;const r=spawnSync('python3',['-c',source],{cwd:new URL('../',import.meta.url),encoding:'utf8'});assert.equal(r.status,0,r.stderr);assert.match(r.stdout,/exact/);});
