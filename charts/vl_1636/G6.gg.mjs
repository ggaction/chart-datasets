import { chart } from "ggaction";
import data from "./data.json";
// DOCS: doc-6c2c08869091f6a0, doc-2ba6dfbdbb611825, doc-fc11e9fb291905d1
export function buildChart() {
  return chart()
    .createCanvas({ width: 359, height: 242, margin: { left: 39, top: 5, right: 20, bottom: 37 } })
    .createData({ values: data })
    .createBinData({
      id: "bins",
      field: "x",
      boundaries: [6.5, 7.5, 8.5, 9.5, 10.5, 11.5, 12.5, 13.5, 14.5, 15.5, 16.5, 17.5]
    })
    .editBinData({ target: "bins", as: { lower: "binStart", upper: "binEnd", count: "count" } })
    .createComputedData({
      id: "binsInset",
      as: "lowerX",
      expression: { op: "add", left: { field: "binStart" }, right: { constant: 0.035 } }
    })
    .createComputedData({ id: "baseline", as: "baseline", expression: { constant: 0 } })
    .createHeatmap({ x: { field: "binStart", fieldType: "nominal" }, y: { field: "count", fieldType: "nominal" }, guides: false })
    .encodeXRange({ lower: "lowerX", upper: "binEnd", scale: { id: "xRect" } })
    .encodeYRange({ lower: "baseline", upper: "count", scale: { id: "yRect" } })
    .editXScale({ id: "xRect", domain: [6.5, 17] })
    .editYScale({ id: "yRect", domain: [0, 22] })
    .editRectMark({ fill: "#4c78a8" })
    .createXAxis({
      scale: "xRect",
      ticksAndLabels: {
        values: [6.5, 7.5, 8.5, 9.5, 10.5, 11.5, 12.5, 13.5, 14.5, 15.5, 16.5],
        ticks: {},
        labels: { fontSize: 10, offset: 7 }
      },
      title: { text: "x (binned)", fontSize: 11, offset: 28 }
    })
    .createYAxis({
      scale: "yRect",
      ticksAndLabels: {
        values: [0, 5, 10, 15, 20],
        ticks: {},
        labels: { fontSize: 10, offset: 7 }
      },
      title: { text: "Count of Records", fontSize: 11, offset: 32 }
    })
    .editXAxisTitle({ fontWeight: 700 })
    .editYAxisTitle({ fontWeight: 700 })
    .createGrid({ horizontal: { scale: "yRect" }, vertical: false })
    .editHorizontalGrid({ color: "#ddd" });
}