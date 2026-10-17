import { chart } from "ggaction";
import data from "./data.json";

// DOCS: doc-42b93a4e107d59c6, doc-5d1932fc53b5becc

export function buildChart() {
  return chart()
    .createCanvas({width:430,height:343,margin:{left:24,top:21,right:6,bottom:22}})
    .editCanvas({plotBorder:{color:"#ddd",lineWidth:1}})
    .applyTextMetrics({profile:{"schemaVersion":1,"id":"source0042-all-visible-text","measurements":[{"text":"0","fontFamily":"sans-serif","fontSize":10,"fontWeight":400,"fontStyle":"normal","width":5.5625},{"text":"5","fontFamily":"sans-serif","fontSize":10,"fontWeight":400,"fontStyle":"normal","width":5.5625},{"text":"10","fontFamily":"sans-serif","fontSize":10,"fontWeight":400,"fontStyle":"normal","width":11.125},{"text":"15","fontFamily":"sans-serif","fontSize":10,"fontWeight":400,"fontStyle":"normal","width":11.125},{"text":"20","fontFamily":"sans-serif","fontSize":10,"fontWeight":400,"fontStyle":"normal","width":11.125},{"text":"25","fontFamily":"sans-serif","fontSize":10,"fontWeight":400,"fontStyle":"normal","width":11.125},{"text":"30","fontFamily":"sans-serif","fontSize":10,"fontWeight":400,"fontStyle":"normal","width":11.125},{"text":"35","fontFamily":"sans-serif","fontSize":10,"fontWeight":400,"fontStyle":"normal","width":11.125},{"text":"40","fontFamily":"sans-serif","fontSize":10,"fontWeight":400,"fontStyle":"normal","width":11.125},{"text":"45","fontFamily":"sans-serif","fontSize":10,"fontWeight":400,"fontStyle":"normal","width":11.125},{"text":"50","fontFamily":"sans-serif","fontSize":10,"fontWeight":400,"fontStyle":"normal","width":11.125},{"text":"55","fontFamily":"sans-serif","fontSize":10,"fontWeight":400,"fontStyle":"normal","width":11.125},{"text":"60","fontFamily":"sans-serif","fontSize":10,"fontWeight":400,"fontStyle":"normal","width":11.125},{"text":"65","fontFamily":"sans-serif","fontSize":10,"fontWeight":400,"fontStyle":"normal","width":11.125},{"text":"Macrofinanacial packages as % of GDP","fontFamily":"sans-serif","fontSize":11,"fontWeight":700,"fontStyle":"normal","width":204.8125},{"text":"Distribution over countries (%)","fontFamily":"sans-serif","fontSize":11,"fontWeight":700,"fontStyle":"normal","width":160.75}]}})    .createData({ id: "raw", values: data })
    .filterData({ id: "visible", field: "gx", noneOf: [null] })
    .createBarPlot({x:"gx",y:"gy",guides:false})
    .encodeBarWidth({pixels:25})
    .editBarMark({fill:"#179FDB",stroke:false})    .editXScale({ domain: [0, 65] })
    .editYScale({ domain: [0, 55] })
    .createXAxis({
      ticksAndLabels: {
        values: [0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65],
        ticks: { length: 5 },
        labels: { fontSize: 10, offset: 5.5, alongOffset: 0.5, flush: true }
      },
      title: false
    })
    .createYAxis({
      ticksAndLabels: {
        values: [0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55],
        ticks: { length: 5 },
        labels: { fontSize: 10, offset: 6.5, alongOffset: 0.890625 }
      },
      title: false
    })
    .editXAxisLine({ color: "#676A86" })
    .editYAxisLine({ color: "#676A86" })
    .editXAxisTicks({ color: "#676A86" })
    .editYAxisTicks({ color: "#676A86" })
    .editXAxisLabels({ color: "#676A86" })
    .editYAxisLabels({ color: "#676A86" })
    .createAnnotation({
      text: "Macrofinanacial packages as % of GDP",
      anchor: "plot-center",
      fontSize: 11
    })
    .editTextMark({target:"annotation",fill:"#676A86",fontWeight:700})
    .editTextMark({ target: "annotation", align: "right" })
    .editTextMark({ target: "annotation", baseline: "alphabetic" })
    .editTextMark({target:"annotation",dx:200.5,dy:129.5})
    .createAnnotation({
      id: "yAxisTitleNote",
      text: "Distribution over countries (%)",
      anchor: "plot-center",
      fontSize: 11
    })
    .editTextMark({target:"yAxisTitleNote",fill:"#676A86",fontWeight:700})
    .editTextMark({ target: "yAxisTitleNote", align: "left", baseline: "alphabetic" })
    .editTextMark({target:"yAxisTitleNote",dx:-204.5,dy:-156.5});
}