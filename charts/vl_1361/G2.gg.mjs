import { chart } from "ggaction";
import data from "./data.json";

// DOCS: doc-5d974e8fdcb4f774, doc-9f1e9ae3b82a4178

export function buildChart() {
  return chart().createCanvas({width:283,height:247,margin:{left:78,top:10,right:5,bottom:37}})
    .createData({values:data})
    .createTimeUnitData({id:"months",field:"date",unit:"month"})
    .createComputedData({id:"numbers",as:"quantityNum",expression:{op:"toNumber",operand:{field:"quantity"}}})
    .createSummaryData({id:"sums",groupBy:["date_month"],aggregates:[{op:"sum",field:"quantityNum",as:"sumQuantity"}]})
    .createSortedData({id:"ordered",sortBy:[{field:"date_month",order:"ascending",nulls:"last"}]})
    .createAreaPlot({x:{field:"date_month",fieldType:"temporal",temporalUnit:"timestamp"},y:{field:"sumQuantity"},guides:false})
    .editAreaMark({curve:"monotone",opacity:0.69,fill:"#4c78a8"})
    .editXScale({domain:[820454400000,1456790400000],nice:false})
    .editYScale({domain:[0,10000000]})
    .createGrid({horizontal:{values:[0,2000000,4000000,6000000,8000000,10000000]},vertical:{values:[820454400000,852076800000,883609600000,915148800000,946684800000,978307200000,1009843200000,1041379200000,1072915200000,1104537600000,1136073600000,1167609600000,1199145600000,1230768000000,1262304000000,1293840000000,1325376000000,1356998400000,1388534400000,1420070400000,1451606400000]}}).editHorizontalGrid({color:"#ddd"}).editVerticalGrid({color:"#ddd"})
    .createXAxis({line:{color:"#888"},ticksAndLabels:{values:[820454400000,852076800000,883609600000,915148800000,946684800000,978307200000,1009843200000,1041379200000,1072915200000,1104537600000,1136073600000,1167609600000,1199145600000,1230768000000,1262304000000,1293840000000,1325376000000,1356998400000,1388534400000,1420070400000,1451606400000],ticks:{length:5,color:"#888"},labels:{format:"%b %Y",fontSize:10,offset:7,color:"black",flush:true,labelMap:[{value:820454400000,label:"Jan 1996"},{value:852076800000,label:""},{value:883609600000,label:""},{value:915148800000,label:""},{value:946684800000,label:""},{value:978307200000,label:""},{value:1009843200000,label:""},{value:1041379200000,label:""},{value:1072915200000,label:"Jan 2004"},{value:1104537600000,label:""},{value:1136073600000,label:""},{value:1167609600000,label:""},{value:1199145600000,label:""},{value:1230768000000,label:""},{value:1262304000000,label:""},{value:1293840000000,label:""},{value:1325376000000,label:"Jan 2012"},{value:1356998400000,label:""},{value:1388534400000,label:""},{value:1420070400000,label:""},{value:1451606400000,label:""}]}},title:{text:"date (year-month)",fontSize:11,fontWeight:700,color:"black"}})
    .createYAxis({line:{color:"#888"},ticksAndLabels:{values:[0,2000000,4000000,6000000,8000000,10000000],ticks:{length:5,color:"#888"},labels:{format:",.0f",fontSize:10,offset:7,color:"black"}},title:{text:"Sum of quantity",fontSize:11,fontWeight:700,color:"black",rotation:{value:-90,unit:"degrees"}}});
}