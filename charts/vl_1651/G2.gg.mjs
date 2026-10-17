// DOCS: doc-6c2c08869091f6a0, doc-fc11e9fb291905d1, doc-d9e3b1b7add0d2c6
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({
      width: 190,
      height: 242,
      margin: { left: 44, top: 5, right: 6, bottom: 37 }
    })
    .createData({ id: "data", values: data })
    .createWindowData({
      id: "stack",
      partitionBy: "a",
      operations: [{ op: "cumulativeSum", field: "b", as: "end" }]
    })
    .createComputedData({
      id: "intervals",
      as: "start",
      expression: { op: "subtract", left: { field: "end" }, right: { field: "b" } }
    })
    .createBarPlot({
      x: { field: "a", fieldType: "nominal" },
      y: { lower: "start", upper: "end" },
      guides: false
    })
    .editXScale({ domain: ["A", "B", "D", "E", "G", "H", "I"], paddingInner: 0.1, paddingOuter: 0.05 })
    .editYScale({ target: "barPlot", domain: [0, 180] })
    .encodeBarWidth({ target: "barPlot", band: 1 })
    .editBarMark({ fill: "#4c78a8", stroke: false })
    .createRuleMark({ id: "rule", data: "data", stroke: "black" })
    .encodeY({ target: "rule", field: "b", fieldType: "quantitative" })
    .applyTextMetrics({ profile: { schemaVersion: 1, id: "source-axis-glyphs", measurements: [{ text: "A", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 6.671875 }, { text: "B", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 6.671875 }, { text: "D", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 7.234375 }, { text: "E", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 6.671875 }, { text: "G", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 7.78125 }, { text: "H", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 7.234375 }, { text: "I", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 2.78125 }, { text: "0", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 5.5625 }, { text: "50", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 11.125 }, { text: "100", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 16.6875 }, { text: "150", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 16.6875 }] } })
    .createAxes({
      x: {
        line: { color: "#888", lineWidth: 1 },
        ticksAndLabels: {
          ticks: { length: 5, color: "#888", lineWidth: 1 },
          labels: { fontSize: 10, fontFamily: "sans-serif", fontWeight: 400, color: "black", offset: 7 }
        },
        title: { text: "a", fontSize: 11, fontFamily: "sans-serif", fontWeight: 700, color: "black", offset: 27.578125 }
      },
      y: {
        line: { color: "#888", lineWidth: 1 },
        ticksAndLabels: {
          values: [0, 50, 100, 150],
          ticks: { length: 5, color: "#888", lineWidth: 1 },
          labels: { fontSize: 10, fontFamily: "sans-serif", fontWeight: 400, color: "black", offset: 7 }
        },
        title: { text: "b", fontSize: 11, fontFamily: "sans-serif", fontWeight: 700, color: "black", offset: 32.1064453125 }
      }
    })
    .createGrid({ horizontal: { color: "#ddd", lineWidth: 1 }, vertical: false });
}