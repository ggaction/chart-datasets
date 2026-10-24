import { chart } from "ggaction";
import data from "./data.json";
import line1Data from "./line1-data.json";
import line2Data from "./line2-data.json";
import line3Data from "./line3-data.json";
import line4Data from "./line4-data.json";
import labelsData from "./labels-data.json";
export function buildChart(){
 return chart()
 // DOCS: doc-cffb363a4b862ced doc-2bd5de4bd99e314a doc-76573a465e2b6a33
 .createCanvas({width:529,height:347,margin:{left:39,top:10,right:90,bottom:37}})
 .editCanvas({plotBorder:{color:"#ddd",lineWidth:1,underlay:true}})
 .applyTextMetrics({profile:{schemaVersion:1,id:"source0211-own-original-svg",measurements:[{text:"15",fontFamily:"sans-serif",fontSize:10,fontWeight:400,fontStyle:"normal",width:11.125},{text:"20",fontFamily:"sans-serif",fontSize:10,fontWeight:400,fontStyle:"normal",width:11.125},{text:"25",fontFamily:"sans-serif",fontSize:10,fontWeight:400,fontStyle:"normal",width:11.125},{text:"30",fontFamily:"sans-serif",fontSize:10,fontWeight:400,fontStyle:"normal",width:11.125},{text:"35",fontFamily:"sans-serif",fontSize:10,fontWeight:400,fontStyle:"normal",width:11.125},{text:"40",fontFamily:"sans-serif",fontSize:10,fontWeight:400,fontStyle:"normal",width:11.125},{text:"45",fontFamily:"sans-serif",fontSize:10,fontWeight:400,fontStyle:"normal",width:11.125},{text:"50",fontFamily:"sans-serif",fontSize:10,fontWeight:400,fontStyle:"normal",width:11.125},{text:"55",fontFamily:"sans-serif",fontSize:10,fontWeight:400,fontStyle:"normal",width:11.125},{text:"60",fontFamily:"sans-serif",fontSize:10,fontWeight:400,fontStyle:"normal",width:11.125},{text:"Age",fontFamily:"sans-serif",fontSize:11,fontWeight:700,fontStyle:"normal",width:20.78125},{text:"4",fontFamily:"sans-serif",fontSize:10,fontWeight:400,fontStyle:"normal",width:5.5625},{text:"6",fontFamily:"sans-serif",fontSize:10,fontWeight:400,fontStyle:"normal",width:5.5625},{text:"8",fontFamily:"sans-serif",fontSize:10,fontWeight:400,fontStyle:"normal",width:5.5625},{text:"10",fontFamily:"sans-serif",fontSize:10,fontWeight:400,fontStyle:"normal",width:11.125},{text:"12",fontFamily:"sans-serif",fontSize:10,fontWeight:400,fontStyle:"normal",width:11.125},{text:"14",fontFamily:"sans-serif",fontSize:10,fontWeight:400,fontStyle:"normal",width:11.125},{text:"16",fontFamily:"sans-serif",fontSize:10,fontWeight:400,fontStyle:"normal",width:11.125},{text:"Years of Education",fontFamily:"sans-serif",fontSize:11,fontWeight:700,fontStyle:"normal",width:99.046875},{text:"1",fontFamily:"sans-serif",fontSize:11,fontWeight:400,fontStyle:"normal",width:6.125},{text:"2",fontFamily:"sans-serif",fontSize:11,fontWeight:400,fontStyle:"normal",width:6.125},{text:"3",fontFamily:"sans-serif",fontSize:11,fontWeight:400,fontStyle:"normal",width:6.125},{text:"4",fontFamily:"sans-serif",fontSize:11,fontWeight:400,fontStyle:"normal",width:6.125},{text:"false",fontFamily:"sans-serif",fontSize:10,fontWeight:400,fontStyle:"normal",width:21.125},{text:"true",fontFamily:"sans-serif",fontSize:10,fontWeight:400,fontStyle:"normal",width:17.234375},{text:"High Income",fontFamily:"sans-serif",fontSize:11,fontWeight:700,fontStyle:"normal",width:66.015625}]}})
 .createData({values:data})
 .createScatterPlot({x:{field:"Age",fieldType:"quantitative",scale:{id:"x",domain:[15,60]}},y:{field:"Years of Education",fieldType:"quantitative",scale:{id:"y",domain:[4,16]}},guides:false})
 .encodeColor({field:"High Income",fieldType:"nominal",scale:{domain:[false,true],range:["#e41a1c","#377eb8","#4daf4a","#984ea3","#ff7f00","#ffff33","#a65628","#f781bf","#999999"]}})
 .encodePointRadius({value:3.1622776601683795})
 .editPointMark({opacity:0.7,stroke:false}).createXAxis({ticksAndLabels:{values:[15,20,25,30,35,40,45,50,55,60],ticks:{length:5,alongOffset:0.5},labels:{fontFamily:"sans-serif",fontSize:10,color:"black",offset:5.5,alongOffset:0.5,flush:true}},title:{text:"Age",fontFamily:"sans-serif",fontSize:11,fontWeight:700,color:"black",offset:30.5,alongOffset:0.5,baseline:"alphabetic"}}).createYAxis({ticksAndLabels:{values:[4,6,8,10,12,14,16],ticks:{length:5,alongOffset:0.5},labels:{fontFamily:"sans-serif",fontSize:10,color:"black",offset:6.5,alongOffset:0.890625}},title:{text:"Years of Education",fontFamily:"sans-serif",fontSize:11,fontWeight:700,color:"black",offset:23.623046875,alongOffset:0.5,baseline:"alphabetic"}}).editXAxisTicks({color:"#888"}).editYAxisTicks({color:"#888"}).editXAxisLine({color:"#888"}).editYAxisLine({color:"#888"}).createHorizontalGrid({values:[4,6,8,10,12,14,16],color:"#ddd",alongOffset:0.5}).createVerticalGrid({values:[15,20,25,30,35,40,45,50,55,60],color:"#ddd",alongOffset:0.5}).createLegend({symbol:{layers:[{type:"point",size:5,strokeWidth:0,opacity:0.7}]},labels:{fontFamily:"sans-serif",fontSize:10,color:"black"},titleStyle:{fontFamily:"sans-serif",fontSize:11,fontWeight:700,color:"black"}})
 .createData({id:"line1Data",values:line1Data})
 .createLinePlot({id:"line1",x:{field:"Age",fieldType:"quantitative",scale:{id:"x",domain:[15,60]}},y:{field:"Years of Education",fieldType:"quantitative",scale:{id:"y",domain:[4,16]}}})
 .editLineMark({stroke:"#4c78a8",strokeWidth:1})
 .editLineMark({lineCap:"butt",lineJoin:"miter"})
 .encodePathOrder({field:"Age"})
 .createData({id:"line2Data",values:line2Data})
 .createLinePlot({id:"line2",x:{field:"Age",fieldType:"quantitative",scale:{id:"x",domain:[15,60]}},y:{field:"Years of Education",fieldType:"quantitative",scale:{id:"y",domain:[4,16]}}})
 .editLineMark({stroke:"#4c78a8",strokeWidth:1})
 .editLineMark({lineCap:"butt",lineJoin:"miter"})
 .encodePathOrder({field:"Age"})
 .createData({id:"line3Data",values:line3Data})
 .createLinePlot({id:"line3",x:{field:"Age",fieldType:"quantitative",scale:{id:"x",domain:[15,60]}},y:{field:"Years of Education",fieldType:"quantitative",scale:{id:"y",domain:[4,16]}}})
 .editLineMark({stroke:"#4c78a8",strokeWidth:1})
 .editLineMark({lineCap:"butt",lineJoin:"miter"})
 .encodePathOrder({field:"Age"})
 .createData({id:"line4Data",values:line4Data})
 .createLinePlot({id:"line4",x:{field:"Age",fieldType:"quantitative",scale:{id:"x",domain:[15,60]}},y:{field:"Years of Education",fieldType:"quantitative",scale:{id:"y",domain:[4,16]}}})
 .editLineMark({stroke:"#4c78a8",strokeWidth:1})
 .editLineMark({lineCap:"butt",lineJoin:"miter"})
 .encodePathOrder({field:"Age"})
 .createData({id:"labelsData",values:labelsData})
 .createTextPlot({x:{field:"Age",fieldType:"quantitative",scale:{id:"x",domain:[15,60]}},y:{field:"Years of Education",fieldType:"quantitative",scale:{id:"y",domain:[4,16]}},text:{field:"Depth"}})
 .editTextMark({fontSize:11,fontFamily:"sans-serif",fill:"black"})
 .editTextMark({align:"left",baseline:"alphabetic",dy:3});
}