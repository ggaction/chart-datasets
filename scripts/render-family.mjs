import {build} from 'esbuild';
import {readFile,writeFile,mkdir,rm} from 'node:fs/promises';
import path from 'node:path';
import {pathToFileURL,fileURLToPath} from 'node:url';
import {createHash} from 'node:crypto';
import {createRequire} from 'node:module';
const root=fileURLToPath(new URL('../',import.meta.url)), require=createRequire(import.meta.url);
const ids=JSON.parse(process.argv[2]), results=[];
const runtime=process.env.GGACTION_SOURCE;
const entry=runtime?path.join(runtime,'src/index.js'):require.resolve('ggaction');
const svgEntry=runtime?path.join(runtime,'src/renderers/svg.js'):require.resolve('ggaction/svg');
const {renderToSVG}=await import(pathToFileURL(svgEntry));
const sha=text=>createHash('sha256').update(text).digest('hex');
await mkdir(path.join(root,'.validation/bundles'),{recursive:true});
for(const id of ids){
  const directory=path.join(root,'charts',id), metadata=JSON.parse(await readFile(path.join(directory,'metadata.json'),'utf8'));
  const output=path.join(root,'.validation/bundles',id+'.mjs');
  try{
    const imports=metadata.stages.map((s,i)=>'import {buildChart as c'+i+'} from '+JSON.stringify(path.join(directory,s.code))+';').join('\n');
    await build({stdin:{contents:imports+'\nexport const builders=['+metadata.stages.map((_,i)=>'c'+i).join(',')+'];',resolveDir:root},outfile:output,bundle:true,platform:'node',format:'esm',logLevel:'silent',plugins:[{name:'pinned-runtime',setup(b){b.onResolve({filter:/^ggaction$/},()=>({path:entry,external:true}));}}]});
    const {builders}=await import(pathToFileURL(output));
    const frozen=sha(await readFile(path.join(directory,'ggaction.svg'))),stages=[];
    let canonical;
    for(let i=0;i<builders.length;i++){
      const program=await builders[i](), svg=renderToSVG(program),hash=sha(svg);
      if(i===0) canonical=hash;
      const dimensions=program.graphicSpec.objects.canvas.properties;
      if(!svg.includes('<svg')||!svg.includes('</svg>')||!(dimensions.width>0&&dimensions.height>0))throw Error('Empty render');
      stages.push({level:metadata.stages[i].level,svgSha256:hash,sameFamily:hash===canonical,unchanged:hash===frozen});
    }
    results.push({id,status:stages.every(s=>s.sameFamily&&s.unchanged)?'passed':'different',stages});
  }catch(error){results.push({id,status:'failed',error:error.stack});}
  finally{await rm(output,{force:true});}
}
await writeFile(process.env.RESULT_FILE,JSON.stringify(results));
if(results.some(r=>r.status!=='passed'))process.exitCode=1;
