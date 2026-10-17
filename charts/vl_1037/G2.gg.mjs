// DOCS: doc-6c2c08869091f6a0 doc-fc11e9fb291905d1
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({ width: 379, height: 375, margin: { left: 29, top: 40, right: 5, bottom: 35 } })
    .createData({ values: data })
    .createComputedData({ id: "yearNum", as: "YearNum", expression: { op: "toNumber", operand: { field: "Year" } } })
    .createComputedData({ id: "totalsNum", as: "TotalsNum", expression: { op: "toNumber", operand: { field: "Totals" } } })
    .createBarPlot({
      x: { field: "YearNum", fieldType: "temporal", temporalUnit: "year" },
      y: { field: "TotalsNum" },
      guides: false
    })
    .editXScale({ domain: [423864214925, 1658894185074], nice: false })
    .editYScale({ domain: [0, 110], nice: false })
    .encodeBarWidth({ pixels: 5 })
    .editBarMark({ fill: "blueviolet" })
    .createXAxis({
      line: { color: "#888" },
      ticksAndLabels: {
        values: [473385600000, 631152000000, 788918400000, 946684800000, 1104537600000, 1262304000000, 1420070400000, 1577836800000],
        ticks: { color: "#888", length: 5 },
        labels: { fontSize: 10, offset: 7, rotation: { value: 45, unit: "degrees" } }
      },
      title: false
    })
    .createYAxis({
      line: { color: "#888" },
      ticksAndLabels: {
        values: [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110],
        ticks: { color: "#888", length: 5 },
        labels: { fontSize: 10, offset: 7 }
      },
      title: false
    })
    // Measured 4-key createTitle requirement: alongOffset (-23.68 = source title left 5.315 - plot left 29)
    // is geometrically essential at creation alongside protected titleStyle 13px/700 and subtitleStyle 10px/italic.
    .createTitle({
      text: "IMF Lending",
      titleStyle: { fontSize: 13, fontWeight: 700 },
      subtitleStyle: { fontSize: 10, fontStyle: "italic" }
    })
    .editTitle({ subtitle: "credit outstanding (billions), source IMF", gap: 1 })
    // Measured alongOffset (-23.68 = source title left 5.315 - plot left 29) keeps final title placement.
    .editTitle({ offset: -13, alongOffset: -23.68 });
}