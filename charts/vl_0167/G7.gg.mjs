// DOCS: doc-8d4a6d5bcdd6ce8f
import {chart} from "ggaction";
import data from "./data.json";
import bars from "./bar-data.json";
export function buildChart(){return chart()
.createCanvas({plot:{width:400,height:300},margin:{left:44,right:132,top:27,bottom:37},plotBorder:{underlay:true}})
.createData({values:data})
.createLinePlot({x:{field:"gasDayStart",fieldType:"temporal"},y:"full",guides:false})
  .editXScale({domain:[1482825600000,1515081600000]})
  .editYScale({domain:[0,100],target:"linePlot"})
.editLineMark({stroke:"red"})
.createData({id:"flows",values:bars})
.createBarPlot({x:{field:"gasDayStart",fieldType:"temporal",scale:{id:"x"}},y:{field:"value",scale:{id:"flowY",domain:[-15000,15000]}},guides:false})
.encodeBarWidth({pixels:5})
.editBarMark({stroke:false,opacity:0.6})
.encodeColor({field:"variable",layout:"diverging"})
.editColorScale({domain:["afname","injectie"],range:["#4c78a8","#f58518","#e45756","#72b7b2","#54a24b","#eeca3b","#b279a2","#ff9da6","#9d755d","#bab0ac"]})
.createAxes({x:{underlay:true,line:{},ticksAndLabels:{values:[1483228800000,1485907200000,1488326400000,1491004800000,1493596800000,1496275200000,1498867200000,1501545600000,1504224000000,1506816000000,1509494400000,1512086400000,1514764800000],ticks:{length:5,alongOffset:0.5},labels:{fontSize:10,offset:7,alongOffset:0.5,labelMap:[{value:1483228800000,label:"2017"},{value:1485907200000,label:""},{value:1488326400000,label:"March"},{value:1491004800000,label:""},{value:1493596800000,label:"May"},{value:1496275200000,label:""},{value:1498867200000,label:"July"},{value:1501545600000,label:""},{value:1504224000000,label:"September"},{value:1506816000000,label:""},{value:1509494400000,label:"November"},{value:1512086400000,label:""},{value:1514764800000,label:"2018"}]}},title:{text:"Datum",fontSize:11,fontWeight:700,color:"#000",offset:27.578125,alongOffset:0.5}},y:[{id:"y",scale:"y",underlay:true,line:{},ticksAndLabels:{values:[0,10,20,30,40,50,60,70,80,90,100],ticks:{length:5,alongOffset:0.5},labels:{fontSize:10,offset:6.5,alongOffset:0.890625}},title:{text:"Vulniveau (%)",fontSize:11,fontWeight:700,color:"#000",offset:32.1064453125,alongOffset:0.5,rotation:{value:-90,unit:"degrees"}}},{id:"flowAxis",scale:"flowY",position:"right",underlay:true,line:{},ticksAndLabels:{values:[-15000,-10000,-5000,0,5000,10000,15000],ticks:{length:5,alongOffset:0.5},labels:{fontSize:10,format:",.0f",offset:7.5,alongOffset:0.890625,labelMap:[{value:-15000,label:"−15,000"},{value:-10000,label:"−10,000"},{value:-5000,label:"−5,000"}]}},title:{text:"Gastoevoer (GWh/week)",fontSize:11,fontWeight:700,color:"#000",offset:52.84765625,alongOffset:0.5,rotation:{value:90,unit:"degrees"}}}]
})
.editXAxisLine({
  color: "#888"
})
.editXAxisTicks({
  color: "#888"
})
.editXAxisLabels({
  color: "#000"
})
.editYAxisLine({
  target: "y",
  color: "#888"
})
.editYAxisTicks({
  target: "y",
  color: "#888"
})
.editYAxisLabels({
  target: "y",
  color: "#000"
})
.editYAxisLine({
  target: "flowAxis",
  color: "#888"
})
.editYAxisTicks({
  target: "flowAxis",
  color: "#888"
})
.editYAxisLabels({
  target: "flowAxis",
  color: "#000"
})
.createGrid({vertical:{color:"#ddd"},horizontal:{scale:"y",color:"#ddd"}})
.createLegend({
            titleStyle:{fontSize:11,fontWeight:700,color:"black"},
            labels:{fontSize:10,color:"black"},
            symbol:{layers:[{
                type:"swatch",
                width:10,
                height:10,
                strokeWidth:0,
                opacity:0.6
            }]}
        })
.createTitle({text:"Gasvoorraad in Nederland 2017",titleStyle:{fontSize:13,fontWeight:700,color:"black"},offset:-7.046875})
.editTitle({align:"center"});}