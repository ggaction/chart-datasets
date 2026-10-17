#!/usr/bin/env python3
"""Import only completed chart families from a paused translation workspace."""
import argparse, collections, hashlib, json, pathlib, re, shutil, xml.etree.ElementTree as ET
parser=argparse.ArgumentParser();parser.add_argument('workspace',type=pathlib.Path);args=parser.parse_args()
root=pathlib.Path(__file__).resolve().parents[1]; workspace=args.workspace.resolve()
runtime_version=json.loads((root/'package.json').read_text())['dependencies']['ggaction']
if not re.fullmatch(r'\d+\.\d+\.\d+',runtime_version):
    raise RuntimeError('The ggaction dependency must use an exact release version')
base=workspace/'artifacts/v12-glm-thousand-chart-adaptive'
ids=json.loads((workspace/'experiments/glm-thousand-chart-adaptive/config.json').read_text())['sourceIds']
sha=lambda p:hashlib.sha256(p.read_bytes()).hexdigest()
def save(path,value):path.write_text(json.dumps(value,ensure_ascii=False,indent=2)+'\n')
def dimension(path):
    svg=ET.parse(path).getroot()
    def number(value):return float(re.sub(r'px$','',value))
    if 'width' in svg.attrib and 'height' in svg.attrib:return [number(svg.attrib['width']),number(svg.attrib['height'])]
    return [float(x) for x in svg.attrib['viewBox'].split()][2:]
def urls(value):
    found=[]
    if isinstance(value,dict):
        if isinstance(value.get('data'),dict) and isinstance(value['data'].get('url'),str): found.append(value['data']['url'])
        for child in value.values():found+=urls(child)
    elif isinstance(value,list):
        for child in value:found+=urls(child)
    return sorted(set(found))
charts=[];total=0;maxbytes=0
for chart_id in sorted(ids):
    src=base/chart_id; completion=src/'completion.json'
    if not completion.exists() or json.loads(completion.read_text()).get('status')!='completed':continue
    dest=root/'charts'/chart_id
    if dest.exists():raise RuntimeError('Refusing to overwrite '+str(dest))
    dest.mkdir(parents=True)
    accepted=json.loads((src/'accepted.json').read_text()); levels=sorted(accepted,key=lambda g:int(g[1:]))
    source=json.loads((src/'source.vl.json').read_text())
    copied=['source.vl.json','data.json']
    for name in copied:shutil.copyfile(src/name,dest/name)
    resolved=src/'resolved-source.vl.json'
    if not resolved.exists():
        # Imported baseline charts without a resolved copy already have inline data.
        if urls(source):raise RuntimeError(chart_id+' needs explicit resource resolution')
        resolved=src/'source.vl.json'
    shutil.copyfile(resolved,dest/'resolved-source.vl.json');copied.append('resolved-source.vl.json')
    stages=[]
    for level in levels:
        item=accepted[level];attempt=src/level/item['attempt'];code=attempt/'candidate.gg.mjs'
        if sha(code)!=item['codeSha256']:raise RuntimeError(chart_id+'/'+level+' code hash mismatch')
        if sha(attempt/'data.json')!=sha(src/'data.json'):raise RuntimeError(chart_id+'/'+level+' has a distinct input dataset')
        text=code.read_text()
        imports=re.findall(r'(?:from\s*|import\s*)["\']([^"\']+)["\']',text)
        if sorted(imports)!=['./data.json','ggaction']:raise RuntimeError('Unexpected dependency '+chart_id+'/'+level)
        name=level+'.gg.mjs';shutil.copyfile(code,dest/name);copied.append(name)
        stages.append(dict(level=level,code=name,sha256=sha(code),actions=item.get('actions'),topOptions=item.get('topOptions')))
    g1=src/'G1'/accepted['G1']['attempt']/'render/chart.svg'
    for incoming,outgoing in [(src/'reference/chart.svg','vega-lite.svg'),(g1,'ggaction.svg')]:
        shutil.copyfile(incoming,dest/outgoing);copied.append(outgoing)
    status=json.loads(completion.read_text())
    # Whitelist human-readable status only: never copy host paths or requests.
    notes={key:status[key] for key in ['reason','explanation','correction'] if isinstance(status.get(key),str)}
    notes={key:re.sub(r'/Users/[^\s"\']+','[local path]',value) for key,value in notes.items()}
    meta=dict(id=chart_id,status='completed',stages=stages,sourceUrls=urls(source),notes=notes,
        historicalRuntimeCommit='690767d53415b93d22321c7915b0e2eddda24071',
        files={name:dict(sha256=sha(dest/name),bytes=(dest/name).stat().st_size) for name in copied})
    save(dest/'metadata.json',meta);total+=len(stages)
    charts.append(dict(id=chart_id,vegaLite='charts/'+chart_id+'/vega-lite.svg',ggaction='charts/'+chart_id+'/ggaction.svg',
        dimensions=dict(vegaLite=dimension(dest/'vega-lite.svg'),ggaction=dimension(dest/'ggaction.svg')),stageCount=len(stages)))
    maxbytes=max(maxbytes,*[(dest/name).stat().st_size for name in copied])
manifest=dict(schemaVersion=1,chartCount=len(charts),programCount=total,runtime=dict(package='ggaction',version=runtime_version,status='release-pending'),charts=charts)
save(root/'manifest.json',manifest)
print(json.dumps(dict(charts=len(charts),programs=total,largestFileBytes=maxbytes)))
