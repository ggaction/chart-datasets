// DOCS: doc-6c2c08869091f6a0, doc-4218dc37ed9c42ec, doc-fc11e9fb291905d1
import { chart } from "ggaction";
import data from "./data.json";

const BASE = 1325376000000;

export function buildChart() {
  return chart()
    .createCanvas({ width: 245, height: 247, margin: { left: 39, top: 10, right: 6, bottom: 37 } })
    .createData({ id: "raw", values: data })
    .createComputedData({
      id: "tms",
      as: "tms",
      expression: { op: "parseTime", operand: { field: "date" }, format: "auto" }
    })
    .createBinData({
      id: "bins",
      field: "tms",
      step: 300000
    })
    .editBinData({
      target: "bins",
      weight: { field: "distance", kind: "frequency" },
      extent: [1325376000000, 1325377200000]
    })
    .createComputedData({
      id: "paintStart",
      as: "paintStart",
      expression: { op: "add", left: { field: "tms_start" }, right: { constant: 6000 } }
    })
    .createComputedData({
      id: "computedzero",
      as: "computedzero",
      expression: { constant: 0 }
    })
    .createHeatmap({
      x: { field: "tms_start", fieldType: "nominal" },
      y: { field: "count", fieldType: "nominal" },
      guides: false
    })
    .encodeX({
      field: "paintStart",
      fieldType: "temporal",
      scale: { id: "xTime", type: "time", domain: [1325376000000, 1325377200000], nice: false }
    })
    .encodeX2({
      field: "tms_end",
      fieldType: "temporal",
      scale: { id: "xTime" }
    })
    .encodeYRange({
      lower: "computedzero",
      upper: "count",
      scale: { id: "yCount", type: "linear", domain: [0, 20] }
    })
    .editRectMark({ fill: "#4c78a8", stroke: false })    .createXAxis({
      scale: "xTime",
      ticksAndLabels: {
        values: [1325376000000, 1325376300000, 1325376600000, 1325376900000, 1325377200000],
        ticks: { length: 5 },
        labels: { fontSize: 10, offset: 7, flush: true }
      },
      title: { text: "date (minutes)", fontSize: 11, offset: 28 }
    })
    .editXAxis({
      ticks: { color: "#888" },
      labels: { fontFamily: "sans-serif", format: "%H:%M" },
      title: { fontWeight: 700 }
    })
    .createYAxis({
      scale: "yCount",
      ticksAndLabels: {
        values: [0, 5, 10, 15, 20],
        ticks: { length: 5 },
        labels: { fontSize: 10, offset: 7 }
      },
      title: { text: "Sum of distance", fontSize: 11, offset: 26 }
    })
    .editYAxis({
      ticks: { color: "#888" },
      labels: { fontFamily: "sans-serif" },
      title: { fontWeight: 700 }
    })
    .createGrid({
      horizontal: { scale: "yCount" },
      vertical: { scale: "xTime" }
    })
    .editHorizontalGrid({ color: "#ddd" })
    .editVerticalGrid({ color: "#ddd" });
}
