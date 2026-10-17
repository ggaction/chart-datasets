// DOCS: doc-3b660fabf78cdd08 doc-3558b809b504c100
import { chart } from "ggaction";
import data from "./data.json";

const X_TICKS = [1549735200000, 1549756800000, 1549778400000, 1549800000000, 1549821600000, 1549843200000, 1549864800000, 1549886400000, 1549908000000];
const X_LABELS = [
  { value: 1549735200000, label: "06 PM" },
  { value: 1549756800000, label: "Feb 10" },
  { value: 1549778400000, label: "06 AM" },
  { value: 1549800000000, label: "12 PM" },
  { value: 1549821600000, label: "06 PM" },
  { value: 1549843200000, label: "Mon 11" },
  { value: 1549864800000, label: "06 AM" },
  { value: 1549886400000, label: "12 PM" },
  { value: 1549908000000, label: "06 PM" }
];
const Y_TICKS = [0, 50, 100, 150, 200, 250, 300, 350];

export function buildChart() {
  return chart()
    .createCanvas({ width: 449, height: 347, margin: { left: 44, top: 10, right: 5, bottom: 37 } })
    .createData({ id: "raw", values: data })
    .createComputedData({ id: "d1", as: "annotation", expression: { op: "getPath", operand: { field: "_source" }, path: ["annotation"] } })
    .createComputedData({ id: "d2", as: "timestamp", expression: { op: "getPath", operand: { field: "_source" }, path: ["timestamp"] } })
    .createComputedData({ id: "d3", as: "end_timestamp", expression: { op: "getPath", operand: { field: "_source" }, path: ["end_timestamp"] } })
    .createComputedData({ id: "d4", as: "job_id", expression: { op: "getPath", operand: { field: "_source" }, path: ["job_id"] } })
    .createComputedData({ id: "d5", as: "y", expression: { constant: 350 } })
    .createComputedData({ id: "d6", as: "y2", expression: { constant: 0 } })
    .filterData({ id: "jobRows", field: "job_id", oneOf: ["fq_single_count_15m"] })
    .createRectMark({ fill: "#369", opacity: 0.15, stroke: false })
    .encodeXRange({ lower: "timestamp", upper: "end_timestamp", fieldType: "temporal" })
    .encodeYRange({ lower: "y2", upper: "y" })
    .editXScale({ domain: [1549721618451, 1549926900000], nice: false })
    .editYScale({ domain: [0, 350], nice: false })
    
    .createXAxis({
      line: { color: "#888" },
      ticksAndLabels: {
        values: X_TICKS,
        ticks: { color: "#888", length: 5 },
        labels: { fontSize: 10, fontFamily: "sans-serif", offset: 7, labelMap: X_LABELS }
      },
      title: { text: "timestamp, end_timestamp", fontSize: 11, fontWeight: 700, fontFamily: "sans-serif", offset: 28 }
    })
    .createYAxis({
      line: { color: "#888" },
      ticksAndLabels: {
        values: Y_TICKS,
        ticks: { color: "#888", length: 5 },
        labels: { fontSize: 10, fontFamily: "sans-serif", offset: 7 }
      },
      title: { text: "y, y2", fontSize: 11, fontWeight: 700, fontFamily: "sans-serif", offset: 29, rotation: { value: -90, unit: "degrees" } }
    })
    .createGrid({
      vertical: { values: X_TICKS, color: "#ddd" },
      horizontal: { values: Y_TICKS, color: "#ddd" }
    });
}