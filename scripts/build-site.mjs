import {readFile,writeFile,mkdir,copyFile,rm} from 'node:fs/promises';
import path from 'node:path';
import {buildCatalog} from './build-catalog.mjs';
const manifest=JSON.parse(await readFile('manifest.json','utf8'));
await rm('_site',{recursive:true,force:true}); await mkdir('_site',{recursive:true});
for(const file of ['index.html','styles.css','viewer.js','explorer-model.js','manifest.json']) await copyFile(file,path.join('_site',file));
await writeFile('_site/catalog.json',JSON.stringify(await buildCatalog())+'\n');
await writeFile('_site/.nojekyll','');
for(const chart of manifest.charts) {
 const dir=path.join('charts',chart.id),metadata=JSON.parse(await readFile(path.join(dir,'metadata.json'),'utf8'));
 for(const file of [chart.vegaLite,chart.ggaction,path.join(dir,'source.vl.json'),...metadata.stages.map(s=>path.join(dir,s.code))]){
  await mkdir(path.dirname(path.join('_site',file)),{recursive:true}); await copyFile(file,path.join('_site',file));
 }
}
console.log('Built '+manifest.charts.length+' chart pairs, exploration catalog and original code files. Additional raw input tables stay in the repository.');
