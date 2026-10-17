// DOCS: doc-fc11e9fb291905d1, doc-6c2c08869091f6a0
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({ width: 346, height: 375, margin: { left: 38, top: 40, right: 8, bottom: 35 } })
    .createData({ values: data })
    .createComputedData({
      id: "imfRatio",
      as: "TotalsdivGDP100",
      expression: { op: "multiply", left: { op: "toNumber", operand: { field: "TotalsdivGDP" } }, right: { constant: 100 } }
    })
    .createTitle({
      text: "IMF Lending Outstanding Relative to World GDP",
      titleStyle: { fontSize: 13, fontWeight: 700, fontFamily: "sans-serif", color: "black" },
      subtitleStyle: { fontSize: 10, fontStyle: "italic", fontFamily: "sans-serif", color: "black" }
    })
    .editTitle({ subtitle: "Credit outstanding to all members, SDRs (%). Source: IMF", gap: 1 })
    .editTitle({ offset: -4, alongOffset: -32 })
    .createBarPlot({
      x: { field: "Year", fieldType: "temporal" },
      y: { field: "TotalsdivGDP100", fieldType: "quantitative" },
      guides: false
    })
    .editBarMark({ fill: "#6b788c" })
    .encodeBarWidth({ pixels: 5 })
    .editXScale({ domain: [421630510344, 1629591889655], range: [38, 338] })
    .editYScale({ domain: [0, 0.045] })
    .createXAxis({
      line: {},
      title: false,
      ticksAndLabels: {
        values: [473385600000, 631152000000, 788918400000, 946684800000, 1104537600000, 1262304000000, 1420070400000, 1577836800000],
        ticks: { length: 0 },
        labels: { fontSize: 10, offset: 7, rotation: { value: 45, unit: "degrees" } }
      }
    })
    .editXAxisLine({ color: "#888" })
    .editXAxisLabels({ fontFamily: "sans-serif", color: "black", format: "%Y" })
    .createYAxis({
      line: {},
      title: false,
      ticksAndLabels: {
        values: [0, 0.005, 0.01, 0.015, 0.02, 0.025, 0.03, 0.035, 0.04, 0.045],
        ticks: {},
        labels: { fontSize: 10, offset: 7 }
      }
    })
    .editYAxisLine({ color: "#888" })
    .editYAxisTicks({ color: "#888" })
    .editYAxisLabels({ fontFamily: "sans-serif", color: "black", format: ".3f" });
}
