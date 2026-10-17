// DOCS: doc-d861735fa993d882
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({
      width: 244,
      height: 248,
      margin: { left: 39, top: 11, right: 5, bottom: 37 }
    })
    .applyTextMetrics({
      profile: {
        schemaVersion: 1,
        id: "vl_1628-source-widths",
        measurements: [
          { text: "0", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 5.5625 },
          { text: "5", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 5.5625 },
          { text: "10", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 11.125 },
          { text: "15", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 11.125 },
          { text: "20", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 11.125 },
          { text: "25", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 11.125 },
          { text: "30", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 11.125 },
          { text: "x", fontFamily: "sans-serif", fontSize: 11, fontWeight: 700, width: 6.125 },
          { text: "y", fontFamily: "sans-serif", fontSize: 11, fontWeight: 700, width: 6.125 }
        ]
      }
    })
    .createData({ values: data })
    .createComputedData({
      id: "lines",
      as: "l2",
      expression: {
        op: "replaceLiteral",
        operand: {
          op: "replaceLiteral",
          operand: { field: "l" },
          search: "X",
          replacement: "\n"
        },
        search: "X",
        replacement: "\n"
      }
    })
    .createTextPlot({
      x: { field: "x", scale: { domain: [0, 16], nice: false } },
      y: { field: "y", scale: { domain: [0, 30], nice: false } },
      text: "l2"
    })
    .editTextMark({ fontSize: 11, align: "center", baseline: "middle" })
    .editTextMark({ fill: "black", lineHeight: 13 })
    .editCanvas({ plotBorder: { color: "#ddd", lineWidth: 1 } })
    .editXAxis({
      line: { color: "#888", lineWidth: 1 },
      ticksAndLabels: {
        values: [0, 5, 10, 15],
        ticks: { length: 5, color: "#888" },
        labels: { fontSize: 10, color: "black", offset: 5.5, alongOffset: 0.5, flush: true }
      },
      title: { text: "x", fontSize: 11, fontWeight: 700, color: "black", offset: 27.578125 }
    })
    .editYAxis({
      line: { color: "#888", lineWidth: 1 },
      ticksAndLabels: {
        values: [0, 5, 10, 15, 20, 25, 30],
        ticks: { length: 5, color: "#888" },
        labels: { fontSize: 10, color: "black", offset: 6.5, alongOffset: 0.890625 }
      },
      title: { text: "y", fontSize: 11, fontWeight: 700, color: "black", offset: 26.544921875, rotation: { value: -90, unit: "degrees" } }
    })
    .editHorizontalGrid({ values: [0, 5, 10, 15, 20, 25, 30], color: "#ddd" })
    .createVerticalGrid({ values: [0, 5, 10, 15], color: "#ddd" });
}