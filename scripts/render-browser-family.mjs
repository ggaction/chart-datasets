import {build} from 'esbuild';
import {chromium} from 'playwright';
import {readFile,writeFile,mkdir} from 'node:fs/promises';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
import {createHash} from 'node:crypto';
import {createRequire} from 'node:module';
const root=fileURLToPath(new URL('../',import.meta.url)), require=createRequire(import.meta.url);
const ids=JSON.parse(process.argv[2]),results=[],runtime=process.env.GGACTION_SOURCE;
const entry=runtime?path.join(runtime,'src/index.js'):require.resolve('ggaction');
const svgEntry=runtime?path.join(runtime,'src/renderers/svg.js'):require.resolve('ggaction/svg');
const sha=value=>createHash('sha256').update(value).digest('hex');
const browser=await chromium.launch({headless:true});
const context=await browser.newContext({locale:'en-US',timezoneId:'UTC',viewport:{width:1280,height:960},deviceScaleFactor:2,colorScheme:'light'});
await mkdir(path.join(root,'.validation/renders'),{recursive:true});
try{
for(const id of ids){
 const page=await context.newPage(),directory=path.join(root,'charts',id);
 try{
  const meta=JSON.parse(await readFile(path.join(directory,'metadata.json'),'utf8'));
  const imports=meta.stages.map((s,i)=>'import {buildChart as c'+i+'} from '+JSON.stringify(path.join(directory,s.code))+';').join('\n');
  const bundle=await build({stdin:{contents:imports+'\nimport {renderToSVG} from '+JSON.stringify(svgEntry)+'; globalThis.__builders=['+meta.stages.map((_,i)=>'c'+i).join(',')+'];globalThis.__svg=renderToSVG;',resolveDir:root},bundle:true,write:false,platform:'browser',format:'iife',logLevel:'silent',plugins:[{name:'runtime',setup(b){b.onResolve({filter:/^ggaction$/},()=>({path:entry}));}}]});
  await page.route('**/*',route=>route.abort());
  await page.setContent('<!doctype html><html><body></body></html>');
  await page.addScriptTag({content:bundle.outputFiles[0].text});
  const frozen=sha(await readFile(path.join(directory,'ggaction.svg'))),stages=[];let canonical;
  for(let i=0;i<meta.stages.length;i++){
   const svg=await page.evaluate(async index=>{await document.fonts.ready;return globalThis.__svg(await globalThis.__builders[index]());},i);
   if(!svg.includes('<svg')||!svg.includes('</svg>'))throw Error('Empty SVG');
   const hash=sha(svg);if(i===0){canonical=hash;await writeFile(path.join(root,'.validation/renders',id+'.svg'),svg);}
   stages.push({level:meta.stages[i].level,svgSha256:hash,sameFamily:hash===canonical,unchanged:hash===frozen});
  }
  results.push({id,status:stages.every(s=>s.sameFamily&&s.unchanged)?'passed':'different',stages});
 }catch(error){results.push({id,status:'failed',error:error.stack});}
 finally{await page.close();}
}
}finally{await browser.close();}
await writeFile(process.env.RESULT_FILE,JSON.stringify(results));if(results.some(r=>r.status!=='passed'))process.exitCode=1;
