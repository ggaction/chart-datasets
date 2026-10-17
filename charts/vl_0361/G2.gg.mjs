// DOCS: doc-6c2c08869091f6a0, doc-fc11e9fb291905d1, doc-dfae58344d5a524e, doc-76573a465e2b6a33
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({ width: 345, height: 389, margin: { left: 39, top: 52, right: 6, bottom: 37 } })
    .createData({ values: data })
    .createComputedData({ id: "num", as: "issueAmountNum", expression: { op: "toNumber", operand: { field: "issueAmount" } } })
    .createBinData({ id: "binned", field: "issueAmountNum", boundaries: [0, 5000, 10000, 15000, 20000, 25000, 30000, 35000, 40000, 45000] })
    .editBinData({ target: "binned", as: { lower: "binLower", upper: "binUpper", count: "count" } })
    .createComputedData({ id: "lowerX", as: "lowerX", expression: { op: "add", left: { field: "binLower" }, right: { constant: 150 } } })
    .createComputedData({ id: "baseline", as: "baseline", expression: { constant: 0 } })
    .createHeatmap({ x: { field: "binLower", fieldType: "nominal" }, y: { field: "count", fieldType: "nominal" }, guides: false })
    .editRectMark({ fill: "red" })
    .encodeXRange({ lower: "lowerX", upper: "binUpper", scale: { id: "xRect", type: "linear", domain: [0, 45000] } })
    .encodeYRange({ lower: "baseline", upper: "count", scale: { id: "yRect", type: "linear", domain: [0, 22] } })
    .createXAxis({
      scale: "xRect",
      ticksAndLabels: {
        values: [0, 5000, 10000, 15000, 20000, 25000, 30000, 35000, 40000, 45000],
        ticks: {},
        labels: { fontSize: 10, offset: 7, format: ",.0f", flush: true, labelMap: [ { value: 5000, label: "" }, { value: 15000, label: "" }, { value: 25000, label: "" }, { value: 35000, label: "" }, { value: 45000, label: "" } ] }
      },
      title: { text: "Size of issuance, £m", fontSize: 11, fontWeight: 700, offset: 28 }
    })
    .createYAxis({
      scale: "yRect",
      ticksAndLabels: {
        values: [0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22],
        ticks: {},
        labels: { fontSize: 10, offset: 7 }
      },
      title: { text: "Number of bonds", fontSize: 11, fontWeight: 700, offset: 32 }
    })
    .createGrid({ horizontal: { scale: "yRect", color: "#ddd", lineWidth: 1 }, vertical: false })
    .createTitle({
      text: "UK debt - number of bonds, by size at issue",
      titleStyle: { fontSize: 13, fontWeight: 700, color: "black" },
      subtitleStyle: { fontSize: 10, fontStyle: "italic", color: "black" }
    })
    .editTitle({ subtitle: "Source: DMO", offset: -13, alongOffset: -33.12 });
}
