// Parse accepted module bytes; never rewrite imports or derive dataset IDs from filenames.
import {parse} from 'acorn';
import {readFile} from 'node:fs/promises';
import {createHash} from 'node:crypto';
import {pathToFileURL} from 'node:url';
const hash=b=>createHash('sha256').update(b).digest('hex');
const require=(v,m)=>{if(!v)throw Error(m);};
export function auditModuleInputs(code,rawFiles,{strictBindings=true}={}){
 const allowed=new Set(rawFiles);require(allowed.has('data.json'),'Missing primary raw file');
 const ast=parse(code,{ecmaVersion:'latest',sourceType:'module'}),imports=new Map();let runtime=0;
 for(const n of ast.body.filter(n=>n.type==='ImportDeclaration')){
  const spec=n.source.value;
  if(spec==='ggaction'){runtime++;continue;}
  require(typeof spec==='string'&&/^\.\/(?:data(?:-lookup-\d+)?|[a-z][a-z0-9-]*-data)\.json$/.test(spec),'Unexpected dependency: '+spec);
  const file=spec.slice(2);require(allowed.has(file),'Undeclared raw input: '+file);
  require(n.specifiers.length===1&&n.specifiers[0].type==='ImportDefaultSpecifier','Raw input must be one default import');
  const local=n.specifiers[0].local.name;require(!imports.has(local),'Duplicate raw import');imports.set(local,file);
 }
 require(runtime===1,'Exactly one ggaction import required');require(imports.size>0,'Missing raw input import');
 const bindings=[],used=new Set();
 function pattern(n){if(!n)return;if(n.type==='Identifier')require(!imports.has(n.name),'Shadowed raw input import: '+n.name);else for(const v of Object.values(n))if(Array.isArray(v))v.forEach(x=>x&&typeof x==='object'&&pattern(x));else if(v&&typeof v==='object')pattern(v);}
 function walk(n){if(!n||typeof n!=='object')return;
  require(n.type!=='ImportExpression','Dynamic import is not a frozen input');
  if(n.type==='ExportNamedDeclaration'||n.type==='ExportAllDeclaration')require(!n.source,'External export dependency');
  if(n.type==='VariableDeclarator')pattern(n.id);
  if(/Function/.test(n.type))for(const p of n.params??[])pattern(p);
  if(n.type==='CatchClause')pattern(n.param);
  if(n.type==='AssignmentExpression'||n.type==='UpdateExpression')pattern(n.left??n.argument);
  if(n.type==='CallExpression'){
   require(!(n.callee.type==='Identifier'&&n.callee.name==='require'),'CommonJS dependency is not a frozen input');
   if(strictBindings&&n.callee.type==='MemberExpression'&&!n.callee.computed&&n.callee.property.name==='createData'){
    require(n.arguments.length===1&&n.arguments[0].type==='ObjectExpression','createData needs a literal options object');
    const options=new Map();for(const p of n.arguments[0].properties){require(p.type==='Property'&&!p.computed&&p.kind==='init','Dynamic createData options');const key=p.key.name??p.key.value;require(!options.has(key),'Duplicate createData key');options.set(key,p.value);}
    const values=options.get('values');require(values?.type==='Identifier'&&imports.has(values.name),'createData values must bind an unchanged imported raw table');
    const id=options.get('id');require(!id||(id.type==='Literal'&&typeof id.value==='string'&&id.value.length>0),'Dataset ID must be a literal');
    const file=imports.get(values.name);used.add(values.name);bindings.push({file,local:values.name,datasetId:id?.value??'data',datasetIdOrigin:id?'explicit-code-option':'public-createData-default'});
   }
  }
  for(const [k,v]of Object.entries(n)){if(k==='specifiers'&&n.type==='ImportDeclaration')continue;if(Array.isArray(v))v.forEach(walk);else if(v&&typeof v==='object')walk(v);}
 }
 walk(ast);if(strictBindings){require(bindings.length>0,'Missing bound createData');for(const local of imports.keys())require(used.has(local),'Unused raw import: '+local);}
 return {codeSha256:hash(code),policy:strictBindings?'strict-frozen-raw-bindings':'historical-single-input-dependencies-only',imports:[...imports].map(([local,file])=>({local,file})),bindings};
}
if(process.argv[1]&&import.meta.url===pathToFileURL(process.argv[1]).href){try{let bytes='';for await(const c of process.stdin)bytes+=c;const request=JSON.parse(bytes),stages=[];for(const s of request.stages){const code=await readFile(s.path,'utf8');stages.push({level:s.level,...auditModuleInputs(code,request.rawFiles,{strictBindings:request.strictBindings!==false})});}process.stdout.write(JSON.stringify({stages})+'\n');}catch(e){process.stderr.write(e.message+'\n');process.exitCode=1;}}
