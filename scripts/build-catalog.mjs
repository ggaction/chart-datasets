import {readFile} from 'node:fs/promises';
import {createHash} from 'node:crypto';
import path from 'node:path';
import {describeChart,SCORE_DESCRIPTION} from '../explorer-model.js';

export async function buildCatalog(root='.') {
  const bytes=await readFile(path.join(root,'manifest.json'));
  const manifest=JSON.parse(bytes),charts=[];
  for(const chart of manifest.charts) {
    const dir=path.join(root,'charts',chart.id);
    const [spec,meta,data]=await Promise.all(['source.vl.json','metadata.json','data.json'].map(async f=>JSON.parse(await readFile(path.join(dir,f),'utf8'))));
    charts.push(describeChart(spec,meta,data));
  }
  return {schemaVersion:1,manifestSha256:createHash('sha256').update(bytes).digest('hex'),scoreDescription:SCORE_DESCRIPTION,charts};
}
