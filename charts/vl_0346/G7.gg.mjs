// DOCS: doc-b11b4627b143730d, doc-8a4f6f06e0d37d5e (createLinePlot / line chart tutorial)
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({ width: 540, height: 362, margin: { left: 33, top: 40, right: 7, bottom: 22 } })
    .createData({ values: data })
    .filterData({ id: "since1989", field: "Date", predicate: { op: "gte", value: "1989-01-01" } })
    .filterData({ id: "until2022", field: "Date", predicate: { op: "lte", value: "2022-12-31" } })
    .createComputedData({
      id: "inflationValue",
      as: "value",
      expression: { op: "divide", left: { op: "toNumber", operand: { field: "CPIAUCSL_PC1" } }, right: { constant: 100 } }
    })
    .createLinePlot({
      x: { field: "Date", fieldType: "temporal" },
      y: { field: "value", fieldType: "quantitative" },
      guides: false
    })
    .editXScale({ domain: [599616000000, 1640995200000], nice: false })
    .editYScale({ domain: [-0.02, 0.08], nice: false, zero: false })
    .encodeStroke({ value: "rgb(0,112,192)" })
    .encodeStrokeWidth({ value: 2 })
    .encodeOpacity({ value: 1 })
    .createXAxis({
      line: {},
      ticksAndLabels: {
        values: [631152000000, 757382400000, 883612800000, 1009843200000, 1136073600000, 1262304000000, 1388534400000, 1514764800000, 1640995200000],
        ticks: {},
        labels: { fontSize: 10, fontFamily: "sans-serif", offset: 7, flush: true }
      },
      title: false
    })
    .createYAxis({
      line: {},
      ticksAndLabels: {
        values: [-0.02, -0.01, 0, 0.01, 0.02, 0.03, 0.04, 0.05, 0.06, 0.07, 0.08],
        ticks: {},
        labels: { fontSize: 10, fontFamily: "sans-serif", offset: 7 }
      },
      title: false
    })
    .editXAxis({ line: { color: "#888" }, ticksAndLabels: { ticks: { color: "#888" }, labels: { format: "%Y" } } })
    .editYAxis({ line: { color: "#888" }, ticksAndLabels: { ticks: { color: "#888" }, labels: { format: ".0%" } } })
    .createGrid({ horizontal: { scale: "y" }, vertical: { scale: "x" } })
    .editHorizontalGrid({ color: "#ddd" })
    .editVerticalGrid({ color: "#ddd" })
    .createTitle({
      text: "Inflation - US",
      titleStyle: { fontSize: 13, fontFamily: "sans-serif" },
      subtitleStyle: { fontSize: 10, fontStyle: "italic", fontFamily: "sans-serif" }
    })
    .editTitle({ offset: -13, alongOffset: -27.3, gap: 1 })
    .editTitle({ titleStyle: { fontWeight: 700, color: "black" }, subtitleStyle: { fontWeight: 400, color: "black" } })
    .editTitle({ subtitle: "All items, FRED series: CPIAUCSL_PC1" });
}