#!/usr/bin/env python3
"""Audit frozen versus rerendered SVGs without changing either file."""
import collections,json,pathlib,re,xml.etree.ElementTree as ET
root=pathlib.Path(__file__).resolve().parents[1]
pattern=re.compile(r'[-+]?(?:\d*\.\d+|\d+\.?\d*)(?:[eE][-+]?\d+)?')
numeric={'x','y','x1','x2','y1','y2','cx','cy','r','rx','ry','width','height','opacity','stroke-width','font-size','d','points','transform','viewBox','offset'}
results=[]
for p in sorted((root/'.validation/renders').glob('vl_*.svg')):
 old=root/'charts'/p.stem/'ggaction.svg'
 if old.read_bytes()==p.read_bytes():continue
 a=list(ET.parse(old).iter());b=list(ET.parse(p).iter());changes=[];other=[]
 if len(a)!=len(b):other.append('element counts differ')
 for i,(x,y) in enumerate(zip(a,b)):
  if x.tag!=y.tag or (x.text or '')!=(y.text or '') or x.attrib.keys()!=y.attrib.keys():other.append('element structure/text '+str(i));continue
  for k,v in x.attrib.items():
   w=y.attrib[k]
   if v==w:continue
   if k not in numeric or pattern.sub('#',v)!=pattern.sub('#',w):other.append('attribute '+str(i)+' '+k);continue
   aa=[float(n) for n in pattern.findall(v)];bb=[float(n)for n in pattern.findall(w)]
   if len(aa)!=len(bb):other.append('numeric arity '+str(i)+' '+k);continue
   changes.append({'element':i,'attribute':k,'maximumAbsoluteDifference':max([abs(c-d) for c,d in zip(aa,bb)],default=0)})
 results.append({'id':p.stem,'numericAttributeChanges':len(changes),'maximumAbsoluteDifference':max([c['maximumAbsoluteDifference']for c in changes],default=0),'otherDifferences':other})
report={'method':'Exact XML shape, text and paint comparison; numerical differences are measured and reported, not accepted through a general tolerance.','changedFamilies':len(results),'results':results}
(root/'.validation/svg-differences.json').write_text(json.dumps(report,indent=2)+'\n')
print(json.dumps(report,indent=2))
