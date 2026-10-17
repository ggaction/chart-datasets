// DOCS: doc-fc11e9fb291905d1 (createBarPlot), doc-dfae58344d5a524e (createCanvas)
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({ width: 332, height: 375, margin: { left: 27, top: 53, right: 5, bottom: 22 } })
    .createData({ values: data })
    .createComputedData({ id: "growthNum", as: "growthNum", expression: { op: "toNumber", operand: { field: "growth" } } })
    .createBarPlot({ x: "date", y: { field: "growthNum" }, guides: false })
    .editXScale({ domain: ["2000-2004", "2004-2008", "2008-2012"], paddingInner: 0.1, paddingOuter: 0.05 })
    .editYScale({ domain: [0, 0.06] })
    .encodeBarWidth({ band: 1 })
    .editBarMark({ fill: "orange", stroke: false })
    .createTextMark({ data: "growthNum", fontSize: 11, fill: "black" })
    .encodeText({ target: "text", field: "label" })
    .encodeX({ target: "text", field: "date", fieldType: "nominal" })
    .encodeY({ target: "text", datum: 0.06 })
    .editTextMark({ align: "center", baseline: "middle", dy: 0.06 })
    .createXAxis({ title: false, ticksAndLabels: { labels: { fontSize: 10, offset: 7 } } })
    .createYAxis({ title: false, ticksAndLabels: { labels: { fontSize: 10, offset: 7, format: ".0%" } } })
    .createTitle({
      text: "Aceh - growth rates",
      titleStyle: { fontSize: 13, fontWeight: 700, color: "black" },
      subtitleStyle: { fontSize: 10, fontStyle: "italic", color: "black" }
    })
    .editTitle({ offset: -10.893123626708984, gap: 3.34375, alongOffset: -21.453125 })
    .editTitle({ subtitle: "Annual average, 4 year periods, non-oil GDP\n" });
}
