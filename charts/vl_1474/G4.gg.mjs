// DOCS: doc-6c2c08869091f6a0, doc-fc11e9fb291905d1, doc-2ba6dfbdbb611825, doc-99b0513458edff76
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({ width: 709, height: 375, margin: { left: 53, top: 38, right: 6, bottom: 37 } })
    .createData({ values: data })
    .createBarPlot({ x: { field: "n_revs type", fieldType: "quantitative" }, y: { field: "count", fieldType: "quantitative" }, guides: false }).encodeBarWidth({ pixels: 5 })
    .editXScale({ domain: [0, 24] })
    .editYScale({ domain: [0, 2000] })
    .createHorizontalGrid({ color: "#ddd" }).createVerticalGrid({ color: "#ddd" })
    .createXAxis({
      ticksAndLabels: {
        values: [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24],
        labels: { fontSize: 10, offset: 7, flush: true }
      },
      title: { text: "n_revs type", fontSize: 11, fontWeight: 700, offset: 28 }
    })
    .createYAxis({
      ticksAndLabels: {
        values: [0,200,400,600,800,1000,1200,1400,1600,1800,2000],
        labels: { fontSize: 10, offset: 7 }
      },
      title: { text: "count", fontSize: 11, fontWeight: 700, offset: 42 }
    })
    .createTitle({ text: "Year and Month Of Update (Kerbs)", offset: -6, titleStyle: { fontSize: 24, fontFamily: "sans-serif" } })
    .editTitle({ titleStyle: { fontWeight: 700 } });
}
