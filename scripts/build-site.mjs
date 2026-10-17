import {readFile,writeFile,mkdir,copyFile,rm} from 'node:fs/promises';
import path from 'node:path';
const manifest=JSON.parse(await readFile('manifest.json','utf8'));
await rm('_site',{recursive:true,force:true}); await mkdir('_site',{recursive:true});
for(const file of ['index.html','styles.css','viewer.js','manifest.json']) await copyFile(file,path.join('_site',file));
await writeFile('_site/.nojekyll','');
for(const chart of manifest.charts) for(const file of [chart.vegaLite,chart.ggaction]){
  await mkdir(path.dirname(path.join('_site',file)),{recursive:true}); await copyFile(file,path.join('_site',file));
}
console.log('Built '+manifest.charts.length+' chart pairs; source code and raw data stay in the repository.');
