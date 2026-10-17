// DOCS: doc-6c2c08869091f6a0 doc-fc11e9fb291905d1 doc-2ba6dfbdbb611825 doc-5f9c35fbf79658cc
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({ width: 332, height: 375, margin: { left: 27, top: 53, right: 5, bottom: 22 } })
    .editCanvas({ background: "#122b39" })
    .createData({ values: data })
    .createComputedData({ id: "growthNum", as: "growthNum", expression: { op: "toNumber", operand: { field: "growth" } } })
    .createTitle({
      text: "Aceh - growth rates",
      titleStyle: { fontSize: 13, fontWeight: 700, color: "#179fdb" },
      subtitleStyle: { fontSize: 10, fontStyle: "italic", color: "#179fdb" }
    })
    .editTitle({ offset: -10.893123626708984, gap: 3.34375, alongOffset: -21.453125 })
    .editTitle({ subtitle: "Annual average, 4 year periods, non-oil GDP\n" })
    .createBarPlot({
      x: "date",
      y: "growthNum",
      guides: false
    })
    .editXScale({ domain: ["2000-2004", "2004-2008", "2008-2012"], paddingInner: 0.1, paddingOuter: 0.05 })
    .editYScale({ domain: [0, 0.06], nice: false })
    .editBarMark({ target: "barPlot", fill: "orange", stroke: false })
    .encodeBarWidth({ target: "barPlot", band: 1 })
    .createTextMark({ data: "growthNum", fill: "whitesmoke", fontSize: 11 })
    .editTextMark({ align: "center", baseline: "middle", dy: 0.06 })
    .encodeX({ target: "text", field: "date", fieldType: "nominal" })
    .encodeY({ target: "text", datum: 0.06 })
    .encodeText({ target: "text", field: "label" })
    .createXAxis({
      line: { color: "dimgrey" },
      ticksAndLabels: { ticks: { color: "whitesmoke", length: 5 }, labels: { fontSize: 10, color: "#00a767", offset: 7 } },
      title: false
    })
    .createYAxis({
      line: { color: "dimgrey" },
      ticksAndLabels: {
        values: [0, 0.01, 0.02, 0.03, 0.04, 0.05, 0.06],
        ticks: { color: "whitesmoke", length: 5 },
        labels: { fontSize: 10, color: "#00a767", offset: 7, format: ".0%" }
      },
      title: false
    });
}