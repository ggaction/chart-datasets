import{chart}from"ggaction";
import data from"./data.json";
import rules from"./rule-data.json";

// DOCS: doc-8a4f6f06e0d37d5e — Cars Line Chart Tutorial, temporal x with scale options
export function buildChart(){
return chart()
.createCanvas({width:400,height:400,margin:{left:43,right:7,top:67,bottom:22}})
.editCanvas({plotBorder:{underlay:true}})
.applyTextMetrics({profile:{schemaVersion:1,id:"source0087-exact-flush-endpoint-widths",measurements:[{text:"1970",fontFamily:"sans-serif",fontSize:10,fontWeight:400,width:22.25},{text:"0",fontFamily:"sans-serif",fontSize:10,fontWeight:400,width:5.5625}]}})
.createTitle({text:"CO₂ Emissions by region",titleStyle:{fontSize:13,fontWeight:700,color:"black"},offset:-10.953125})
.editTitle({subtitle:"Million tonnes. Source: Authors' calculations",subtitleStyle:{fontSize:10,fontWeight:400,fontStyle:"italic",color:"black"},gap:3.34375})
.editTitle({alongOffset:-37.5859375})
.createData({values:data})
.createComputedData({id:"numericValues",as:"sourceValue",expression:{op:"toNumber",operand:{field:"Value1"}}})
.createLinePlot({x:{field:"Year",fieldType:"temporal"},y:{field:"sourceValue",scale:{domain:[0,16000]}},guides:false})
.editLineMark({strokeWidth:2})
.encodeColor({field:"Region",scale:{domain:["Sub Saharan Africa","Latin America and Caribbean","North America","East Asia and Pacific","Europe and Central Asia","South Asia","Middle East and North Africa"],range:["rgb(212, 238, 180)","rgb(169, 221, 183)","rgb(116, 201, 189)","rgb(69, 180, 194)","rgb(41, 151, 190)","rgb(33, 115, 177)","rgb(35, 78, 160)"]}})
.createData({id:"rules",values:rules})
.createRuleMark({stroke:"#e54753",strokeWidth:2})
.encodeX({field:"x",fieldType:"quantitative",scale:{id:"ruleX",domain:[0,2200]}})
.createAxes({x:[{scale:"x",line:{color:"#888"},ticksAndLabels:{values:[0,157766400000,315532800000,473385600000,631152000000,788918400000,946684800000,1104537600000,1262304000000,1420070400000],ticks:{length:5,color:"#888",alongOffset:0.5},labels:{fontSize:10,color:"#000",format:"%Y",offset:5.5,alongOffset:0.5,flush:true}},title:false,underlay:true,id:"x"},{id:"ruleAxis",scale:"ruleX",position:"top",line:{color:"#888"},ticksAndLabels:{values:[0,200,400,600,800,1000,1200,1400,1600,1800,2000,2200],ticks:{length:5,color:"#888",alongOffset:0.5},labels:{fontSize:10,color:"#000",format:",.0f",offset:6.5,alongOffset:0.5,flush:true,labelMap:[{value:200,label:""},{value:600,label:""},{value:1000,label:""},{value:1400,label:""},{value:1800,label:""},{value:2200,label:""}]}},title:{text:"x",fontSize:11,fontWeight:700,color:"#000",offset:25.421875,alongOffset:0.5},underlay:true}],y:{scale:"y",title:false,line:{color:"#888"},ticksAndLabels:{values:[0,2000,4000,6000,8000,10000,12000,14000,16000],ticks:{length:5,color:"#888",alongOffset:0.5},labels:{fontSize:10,color:"#000",format:",.0f",offset:6.5,alongOffset:0.890625}},underlay:true}})
.createLegend({position:"top-left",title:false,labels:{fontSize:10,color:"#000"}})
.editLegend({symbol:{length:10,lineWidth:1.5}});
}