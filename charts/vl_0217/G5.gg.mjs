// DOCS: doc-5d974e8fdcb4f774 doc-b1afedddb1ebef69 doc-dfae58344d5a524e
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({ width: 549, height: 259, margin: { left: 44, top: 22, right: 105, bottom: 37 } })
    .editCanvas({plotBorder:{color:"#ddd",lineWidth:1}})
    .applyTextMetrics({profile:{"schemaVersion":1,"id":"source0217-all-text","measurements":[{"text":"July","fontFamily":"sans-serif","fontSize":10,"fontWeight":400,"fontStyle":"normal","width":17.796875},{"text":"October","fontFamily":"sans-serif","fontSize":10,"fontWeight":400,"fontStyle":"normal","width":35.578125},{"text":"2021","fontFamily":"sans-serif","fontSize":10,"fontWeight":400,"fontStyle":"normal","width":22.25},{"text":"April","fontFamily":"sans-serif","fontSize":10,"fontWeight":400,"fontStyle":"normal","width":20.015625},{"text":"2022","fontFamily":"sans-serif","fontSize":10,"fontWeight":400,"fontStyle":"normal","width":22.25},{"text":"2023","fontFamily":"sans-serif","fontSize":10,"fontWeight":400,"fontStyle":"normal","width":22.25},{"text":"interaction_createdAt","fontFamily":"sans-serif","fontSize":11,"fontWeight":700,"fontStyle":"normal","width":113.09375},{"text":"0","fontFamily":"sans-serif","fontSize":10,"fontWeight":400,"fontStyle":"normal","width":5.5625},{"text":"100","fontFamily":"sans-serif","fontSize":10,"fontWeight":400,"fontStyle":"normal","width":16.6875},{"text":"200","fontFamily":"sans-serif","fontSize":10,"fontWeight":400,"fontStyle":"normal","width":16.6875},{"text":"300","fontFamily":"sans-serif","fontSize":10,"fontWeight":400,"fontStyle":"normal","width":16.6875},{"text":"400","fontFamily":"sans-serif","fontSize":10,"fontWeight":400,"fontStyle":"normal","width":16.6875},{"text":"500","fontFamily":"sans-serif","fontSize":10,"fontWeight":400,"fontStyle":"normal","width":16.6875},{"text":"cumulative_comments","fontFamily":"sans-serif","fontSize":11,"fontWeight":700,"fontStyle":"normal","width":118.609375},{"text":"discussions","fontFamily":"sans-serif","fontSize":10,"fontWeight":400,"fontStyle":"normal","width":51.703125},{"text":"issues","fontFamily":"sans-serif","fontSize":10,"fontWeight":400,"fontStyle":"normal","width":28.359375},{"text":"pullRequests","fontFamily":"sans-serif","fontSize":10,"fontWeight":400,"fontStyle":"normal","width":57.8125},{"text":"Interaction type","fontFamily":"sans-serif","fontSize":11,"fontWeight":700,"fontStyle":"normal","width":81.90625},{"text":"Cumulative Number of Comments from External Users","fontFamily":"sans-serif","fontSize":13,"fontWeight":700,"fontStyle":"normal","width":336.640625}]}})
    .createData({ values: data })
    .createCompleteData({ id: "complete", key: "interaction_createdAt", groupBy: ["interaction_type"] })
    .createComputedData({
      id: "plotted",
      as: "plottedValue",
      expression: { op: "coalesce", operands: [{ field: "cumulative_comments" }, { constant: 0 }] }
    })
    .createSortedData({ id: "desc", sortBy: [{ field: "interaction_type", order: "descending" }] })
    .createStackData({ category: "interaction_createdAt", group: "interaction_type", value: "plottedValue" })
    .createSortedData({ id: "asc", sortBy: [{ field: "interaction_type", order: "ascending" }] })
    .createAreaPlot({x:{field:"interaction_createdAt",fieldType:"temporal"},y:{lower:"plottedValue_end",upper:"plottedValue_start"},guides:false})
    .editXScale({domain:[1592524800000,1685923200000],nice:false})
    .editYScale({domain:[0,550],nice:false})
    .encodeGroup({field:"interaction_type"})
    .encodeColor({field:"interaction_type"})
    .editColorScale({domain:["discussions","issues","pullRequests"],range:["#1f77b4","#ff7f0e","#2ca02c"]})
    .editAreaMark({ opacity: 1 })
    .createXAxis({
      line:{color:"#888"},
      ticksAndLabels:{values:[1593561600000,1601510400000,1609459200000,1617235200000,1625097600000,1633046400000,1640995200000,1648771200000,1656633600000,1664582400000,1672531200000,1680307200000],ticks:{length:5,color:"#888"},labels:{fontSize:10,color:"black",offset:5.5,alongOffset:0.5,flush:false,labelMap:[{value:1593561600000,label:"July"},{value:1601510400000,label:"October"},{value:1609459200000,label:"2021"},{value:1617235200000,label:"April"},{value:1625097600000,label:"July"},{value:1633046400000,label:"October"},{value:1640995200000,label:"2022"},{value:1648771200000,label:"April"},{value:1656633600000,label:"July"},{value:1664582400000,label:"October"},{value:1672531200000,label:"2023"},{value:1680307200000,label:"April"}]}},
      title:{text:"interaction_createdAt",fontSize:11,fontWeight:700,color:"black",offset:27.578125}
    })
    .createYAxis({
      line: { color: "#888" },
      ticksAndLabels: {
        values: [0, 100, 200, 300, 400, 500],
        ticks: { length: 5, color: "#888" },
        labels:{fontSize:10,offset:6.5,alongOffset:0.890625,color:"black"}
      },
      title:{text:"cumulative_comments",fontSize:11,fontWeight:700,color:"black",offset:32.6064453125}
    })
.createGrid({horizontal:{values:[0,100,200,300,400,500],color:"#ddd"},vertical:{values:[1593561600000,1601510400000,1609459200000,1617235200000,1625097600000,1633046400000,1640995200000,1648771200000,1656633600000,1664582400000,1672531200000,1680307200000],color:"#ddd"}})
      .createGuides({axes:false,grid:false,legend:{title:"Interaction type",titleStyle:{fontSize:11,fontWeight:700,color:"black"},labels:{fontSize:10,color:"black"},symbol:{layers:[{type:"swatch",width:10,height:10,stroke:"transparent",strokeWidth:0}]}}})
    .createTitle({text:"Cumulative Number of Comments from External Users",titleStyle:{fontSize:13,fontWeight:700,color:"black"},offset:-10.953125})
    .editTitle({align:"center"});
}