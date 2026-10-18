import { chart } from "ggaction";
import data from "./data.json";
// DOCS: doc-d9ca5de321ee55a7, doc-b9261a4b2909a353, doc-76573a465e2b6a33

const X_TICKS = [-5364662400000, -3786825600000, -2208988800000, -631152000000, 946684800000];

const Y_TICKS = [1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000, 10000, 20000, 30000, 40000, 50000, 60000, 70000, 80000, 90000, 100000, 200000, 300000, 400000, 500000, 600000, 700000, 800000, 900000, 1000000, 2000000, 3000000, 4000000, 5000000, 6000000, 7000000, 8000000, 9000000, 10000000, 20000000, 30000000, 40000000, 50000000, 60000000, 70000000, 80000000, 90000000, 100000000, 200000000, 300000000, 400000000, 500000000, 600000000, 700000000, 800000000, 900000000, 1000000000];

const Y_LABELS = [
  { value: 1000, label: "1,000" },
  { value: 2000, label: "" },
  { value: 3000, label: "" },
  { value: 4000, label: "" },
  { value: 5000, label: "" },
  { value: 6000, label: "" },
  { value: 7000, label: "" },
  { value: 8000, label: "" },
  { value: 9000, label: "" },
  { value: 10000, label: "10,000" },
  { value: 20000, label: "" },
  { value: 30000, label: "" },
  { value: 40000, label: "" },
  { value: 50000, label: "" },
  { value: 60000, label: "" },
  { value: 70000, label: "" },
  { value: 80000, label: "" },
  { value: 90000, label: "" },
  { value: 100000, label: "100,000" },
  { value: 200000, label: "" },
  { value: 300000, label: "" },
  { value: 400000, label: "" },
  { value: 500000, label: "" },
  { value: 600000, label: "" },
  { value: 700000, label: "" },
  { value: 800000, label: "" },
  { value: 900000, label: "" },
  { value: 1000000, label: "1,000,000" },
  { value: 2000000, label: "" },
  { value: 3000000, label: "" },
  { value: 4000000, label: "" },
  { value: 5000000, label: "" },
  { value: 6000000, label: "" },
  { value: 7000000, label: "" },
  { value: 8000000, label: "" },
  { value: 9000000, label: "" },
  { value: 10000000, label: "10,000,000" },
  { value: 20000000, label: "" },
  { value: 30000000, label: "" },
  { value: 40000000, label: "" },
  { value: 50000000, label: "" },
  { value: 60000000, label: "" },
  { value: 70000000, label: "" },
  { value: 80000000, label: "" },
  { value: 90000000, label: "" },
  { value: 100000000, label: "100,000,000" },
  { value: 200000000, label: "" },
  { value: 300000000, label: "" },
  { value: 400000000, label: "" },
  { value: 500000000, label: "" },
  { value: 600000000, label: "" },
  { value: 700000000, label: "" },
  { value: 800000000, label: "" },
  { value: 900000000, label: "" },
  { value: 1000000000, label: "1,000,000,000" }
];

const FONT_PROFILE = {
  schemaVersion: 1,
  id: "source-full-font-metrics",
  measurements: [
    { text: "1800", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 22.25 },
    { text: "1850", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 22.25 },
    { text: "1900", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 22.25 },
    { text: "1950", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 22.25 },
    { text: "2000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 22.25 },
    { text: "Year Acquired", fontFamily: "sans-serif", fontSize: 11, fontWeight: 700, fontStyle: "normal", width: 73.59375 },
    { text: "1,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 25.03125 },
    { text: "10,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 30.59375 },
    { text: "100,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 36.15625 },
    { text: "1,000,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 44.5 },
    { text: "10,000,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 50.0625 },
    { text: "100,000,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 55.625 },
    { text: "1,000,000,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 63.953125 },
    { text: "total_sq_foot", fontFamily: "sans-serif", fontSize: 11, fontWeight: 700, fontStyle: "normal", width: 69.0625 }
  ]
};

export function buildChart() {
  return chart()
    .createCanvas({ width: 298, height: 250, margin: { left: 91, top: 10, right: 7, bottom: 40 } })
    .editCanvas({ plotBorder: { color: "#ddd", lineWidth: 1 } })
    .createData({ values: data })
    .createComputedData({ id: "yearUTC", as: "yearUTC", expression: { op: "concat", operands: [{ field: "Year Acquired" }, { constant: " UTC" }] } })
    .createTimeUnitData({ id: "yearDay", field: "yearUTC", unit: "day" })
    .createComputedData({ id: "footage", as: "squareFootage", expression: { op: "toNumber", operand: { field: "Square Footage" } } })
    .createWindowData({
      id: "win1",
      sortBy: [{ field: "yearUTC_day", order: "ascending" }],
      operations: [
        { op: "cumulativeSum", field: "squareFootage", as: "prefixSquareFootage" },
        { op: "lead", field: "yearUTC_day", as: "nextYear", offset: 1, default: -1 }
      ]
    })
    .createComputedData({
      id: "lastPeer",
      as: "lastPeerTotal",
      expression: {
        op: "if",
        condition: { op: "neq", left: { field: "yearUTC_day" }, right: { field: "nextYear" } },
        then: { field: "prefixSquareFootage" },
        else: { constant: 0 }
      }
    })
    .createWindowData({
      id: "win2",
      partitionBy: "yearUTC_day",
      operations: [
        { op: "movingSum", field: "lastPeerTotal", as: "totalSquareFootage", frame: { preceding: 8862, following: 8862 }, minPeriods: 1, missing: "skip" }
      ]
    })
    .createSortedData({ id: "lineData", sortBy: [{ field: "yearUTC_day", order: "ascending" }] })
    .applyTextMetrics({ profile: FONT_PROFILE })
    .createLinePlot({
      x: { field: "yearUTC_day", fieldType: "temporal", temporalUnit: "timestamp" },
      y: { field: "totalSquareFootage", fieldType: "quantitative" },
      guides: false
    })
    .editXScale({ type: "time", domain: [-6847804800000, 1546300800000], nice: false })
    .editYScale({ type: "log", domain: [1000, 1000000000] })
    .editLineMark({ stroke: "#4c78a8", strokeWidth: 2 })
    .createXAxis({
      line: { lineWidth: 1 },
      ticksAndLabels: {
        values: X_TICKS,
        ticks: { length: 5 },
        labels: { offset: 7, fontSize: 10 }
      },
      title: { text: "Year Acquired", fontSize: 11, offset: 30.578125 }
    })
    .editXAxis({
      line: { color: "#888" },
      ticksAndLabels: { ticks: { color: "#888" }, labels: { color: "black", format: "%Y" } },
      title: { fontWeight: 700, color: "black" }
    })
    .createYAxis({
      line: { lineWidth: 1 },
      ticksAndLabels: {
        values: Y_TICKS,
        ticks: { length: 5 },
        labels: { offset: 7, fontSize: 10, labelMap: Y_LABELS }
      },
      title: { text: "total_sq_foot", fontSize: 11, offset: 79.3720703125, rotation: -1.5707963267948966 }
    })
    .editYAxis({
      line: { color: "#888" },
      ticksAndLabels: { ticks: { color: "#888" }, labels: { color: "black" } },
      title: { fontWeight: 700, color: "black" }
    })
    .createGrid({
      horizontal: { values: Y_TICKS, color: "#ddd", lineWidth: 1 },
      vertical: { values: X_TICKS, color: "#ddd", lineWidth: 1 }
    });
}