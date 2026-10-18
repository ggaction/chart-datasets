import { chart } from "ggaction";
// DOCS: doc-6c2c08869091f6a0, doc-fc11e9fb291905d1, doc-2e4c2f9cfc9301d4
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({ width: 211, height: 62, margin: { left: 6, top: 5, right: 5, bottom: 37 } })
    .createData({ id: "tips", values: data })
    .createComputedData({
      id: "proofSingleGroupData",
      as: "proofSingleGroup",
      expression: { constant: "All" }
    })
    .createSummaryData({
      id: "summary",
      groupBy: ["proofSingleGroup"],
      aggregates: [
        { field: "x", op: "min", as: "min_x" },
        { field: "x", op: "q1", as: "q1_x" },
        { field: "x", op: "median", as: "median_x" },
        { field: "x", op: "q3", as: "q3_x" },
        { field: "x", op: "max", as: "max_x" }
      ]
    })
    .createRuleMark({ id: "rangeRule", stroke: "black", strokeWidth: 1 })
    .encodeY({
      field: "proofSingleGroup",
      fieldType: "nominal",
      scale: { type: "band", domain: ["All"], paddingInner: 0, paddingOuter: 0 }
    })
    .encodeXRange({ target: "rangeRule", lower: "min_x", upper: "max_x" })
    .createBarPlot({ x: { lower: "q1_x", upper: "q3_x" }, y: { field: "proofSingleGroup", fieldType: "nominal" }, guides: false })
    .editXScale({ domain: [0, 55], nice: false })
    
    .encodeBarWidth({ pixels: 18 })
    .editBarMark({ stroke: false })
    .createTickMark({ id: "medianTick", length: 18, stroke: "black" })
    .editTickMark({ strokeWidth: 1 })
    .encodeX({ target: "medianTick", field: "median_x" })
    .encodeY({ target: "medianTick", field: "proofSingleGroup", fieldType: "nominal" })
    .createVerticalGrid({ values: [0, 10, 20, 30, 40, 50], color: "#ddd" })
    .createXAxis({
      line: { color: "#888" },
      ticksAndLabels: {
        values: [0, 10, 20, 30, 40, 50],
        ticks: { length: 5, color: "#888" },
        labels: { fontSize: 10, offset: 7, color: "black", flush: true }
      },
      title: { text: "x", fontSize: 11, fontWeight: 700, color: "black" }
    });
}