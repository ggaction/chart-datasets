// DOCS: doc-fc11e9fb291905d1, doc-6c2c08869091f6a0
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({ width: 340, height: 372, margin: { left: 32, top: 40, right: 8, bottom: 32 } })
    .createData({ values: data })
    .createComputedData({
      id: "totalsNum",
      as: "Totals_num",
      expression: { op: "toNumber", operand: { field: "Totals" } }
    })
    .createBarPlot({
      x: { field: "Year ", fieldType: "temporal", temporalUnit: "year" },
      y: "Totals_num",
      guides: false
    })
    .editXScale({ domain: [421630510344, 1629591889655], range: [32, 332], nice: false })
    .editYScale({ domain: [0, 0.35] })
    .encodeBarWidth({ pixels: 5 })
    .editBarMark({ fill: "rgb(0,47,167" })
    .createTitle({
      text: "IMF Lending as a Proportion of GDP",
      titleStyle: { fontSize: 13, fontWeight: 700, fontFamily: "sans-serif" },
      offset: -13
    })
    .editTitle({
      subtitle: "Credit outstanding to all members as a proportion of World GDP",
      subtitleStyle: { fontSize: 10, fontStyle: "italic", color: "black" },
      gap: 1
    })
    .editTitle({ align: "left", alongOffset: -26.46, titleStyle: { color: "black" } })
    .createXAxis({
      ticksAndLabels: {
        values: [473385600000, 631152000000, 788918400000, 946684800000, 1104537600000, 1262304000000, 1420070400000, 1577836800000],
        ticks: { length: 0 },
        labels: { fontSize: 10, offset: 7, rotation: { value: 45, unit: "degrees" } }
      },
      title: false
    })
    .createYAxis({
      ticksAndLabels: {
        values: [0, 0.05, 0.1, 0.15, 0.2, 0.25, 0.3, 0.35],
        ticks: {},
        labels: { fontSize: 10, offset: 7, format: ".2f" }
      },
      title: false
    })
    .editXAxisLine({ color: "#888" })
    .editYAxisLine({ color: "#888" });
}
