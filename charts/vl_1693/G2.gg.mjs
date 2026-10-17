// DOCS: doc-dfae58344d5a524e, doc-48c72317a1a99e17, doc-fb817e9743ec78cd
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({
      width: 249,
      height: 242,
      margin: { left: 44, top: 5, right: 5, bottom: 37 }
    })
    .createData({ values: data })
    .createComputedData({
      id: "rectXLower",
      as: "xLower",
      expression: { op: "add", left: { op: "if", condition: { op: "gte", left: { field: "binStart" }, right: { constant: 22 } }, then: { constant: 20 }, else: { field: "binStart" } }, right: { constant: 0.08 } }
    })
    .createComputedData({
      id: "rectXUpper",
      as: "xUpper",
      expression: { op: "if", condition: { op: "gt", left: { field: "binEnd" }, right: { constant: 22 } }, then: { constant: 22 }, else: { field: "binEnd" } }
    })
    .createComputedData({
      id: "rectYLower",
      as: "yLower",
      expression: { op: "subtract", left: { field: "count" }, right: { constant: 2 } }
    })
    .createComputedData({
      id: "rectYUpper",
      as: "yUpper",
      expression: { op: "add", left: { field: "count" }, right: { constant: 2 } }
    })
    .createHeatmap({
      x: { field: "binStart", fieldType: "nominal" },
      y: { field: "count", fieldType: "nominal" },
      guides: false
    })
    .encodeXRange({
      lower: "xLower",
      upper: "xUpper",
      scale: {
        id: "xRect",
        type: "linear"
      }
    })
    .editXScale({ domain: [8, 24], nice: false, zero: false })
    .encodeYRange({
      lower: "yLower",
      upper: "yUpper",
      scale: {
        id: "yRect",
        type: "linear"
      }
    })
    .editYScale({ domain: [-20, 140], nice: false, zero: false })
    .editRectMark({ fill: "#4c78a8", stroke: false })
    .createAxes({
      x: {
        line: { color: "#888" },
        ticksAndLabels: {
          values: [8, 10, 12, 14, 16, 18, 20, 22],
          ticks: { color: "#888", length: 5 },
          labels: { fontSize: 10, offset: 7, flush: true }
        },
        title: {
          text: "binStart (binned), binEnd",
          fontSize: 11,
          fontWeight: 700,
          offset: 28
        }
      },
      y: {
        line: { color: "#888" },
        ticksAndLabels: {
          values: [0, 50, 100],
          ticks: { color: "#888", length: 5 },
          labels: { fontSize: 10, offset: 7 }
        },
        title: { text: "count", fontSize: 11, fontWeight: 700, offset: 35 }
      }
    })
    .createGrid({ horizontal: { scale: "yRect", color: "#ddd" } });
}
