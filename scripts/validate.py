#!/usr/bin/env python3
"""Validate every distributed input, accepted module and rendered SVG."""
import hashlib,json,pathlib,re,xml.etree.ElementTree as ET
root=pathlib.Path(__file__).resolve().parents[1];m=json.loads((root/'manifest.json').read_text());ids=[];programs=0
for chart in m['charts']:
    i=chart['id'];assert re.fullmatch(r'vl_\d{4}',i);ids.append(i);d=root/'charts'/i
    metadata=json.loads((d/'metadata.json').read_text());assert metadata['id']==i
    for name,proof in metadata['files'].items():
        assert pathlib.Path(name).name==name
        b=(d/name).read_bytes();assert len(b)==proof['bytes'],(i,name,'size')
        assert hashlib.sha256(b).hexdigest()==proof['sha256'],(i,name,'hash')
        assert len(b)<100*1024*1024,(i,name,'GitHub file limit')
    for key in ['vegaLite','ggaction']:
        p=root/chart[key];svg=ET.parse(p).getroot();assert svg.tag.endswith('svg')
        assert len(list(svg.iter()))>3,(i,key,'empty chart')
        assert all(not element.tag.endswith('script') for element in svg.iter()),(i,key,'script')
        for el in svg.iter():
            for attr,value in el.attrib.items():
                if attr.endswith('href') and not el.tag.endswith('}a'):assert not value.startswith(('http:','https:','file:')),(i,key,'external SVG resource')
    for name in ['source.vl.json','resolved-source.vl.json','data.json']:json.loads((d/name).read_text())
    assert len(metadata['stages'])==chart['stageCount'];programs+=chart['stageCount']
assert ids==sorted(set(ids));assert len(ids)==m['chartCount'];assert programs==m['programCount']
print(json.dumps(dict(status='passed',charts=len(ids),programs=programs,runtime=m['runtime'])))
