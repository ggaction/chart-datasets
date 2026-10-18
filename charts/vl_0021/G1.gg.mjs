import { chart } from "ggaction";
import data from "./data.json";

// DOCS: doc-b9261a4b2909a353, doc-76573a465e2b6a33, doc-8a4f6f06e0d37d5e

const events = [
  { start: "1933", end: "1945", event: "Nazi Rule" },
  { start: "1948", end: "1989", event: "GDR (East Germany)" }
];

export function buildChart() {
  return chart()
    .createCanvas({ width: 693, height: 215, margin: { left: 58, top: 5, right: 135, bottom: 10 } })
    .applyTextMetrics({
      profile: {
        schemaVersion: 1,
        id: "vl_0021-original-source-font-widths",
        measurements: [
          { text: "0", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 5.5625 },
          { text: "10,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 30.59375 },
          { text: "20,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 30.59375 },
          { text: "30,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 30.59375 },
          { text: "40,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 30.59375 },
          { text: "population", fontFamily: "sans-serif", fontSize: 11, fontWeight: 700, fontStyle: "normal", width: 56.21875 },
          { text: "GDR (East Germany)", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 95.578125 },
          { text: "Nazi Rule", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 43.359375 },
          { text: "event", fontFamily: "sans-serif", fontSize: 11, fontWeight: 700, fontStyle: "normal", width: 28.75 }
        ]
      }
    })
    .editCanvas({ plotBorder: { color: "#ddd", lineWidth: 1 } })
    .createData({ id: "events", values: events })
    .createComputedData({ id: "starts", as: "StartMs", expression: { op: "parseTime", operand: { field: "start" }, format: "auto" } })
    .createComputedData({ id: "ends", as: "EndMs", expression: { op: "parseTime", operand: { field: "end" }, format: "auto" } })
    .createRectMark({ id: "periods", stroke: false })
    .encodeXRange({ lower: "StartMs", upper: "EndMs", fieldType: "temporal" })
    .editXScale({ domain: [-2997907200000, 1388534400000], nice: false })
    .encodeY({ datum: 45000, scale: { domain: [0, 45000], nice: false } })
    .encodeY2({ datum: 0 })
    .encodeColor({ field: "event", scale: { domain: ["GDR (East Germany)", "Nazi Rule"], range: ["#4c78a8", "#f58518"] } })
    .createData({ id: "data", values: data })
    .createComputedData({ id: "dated", as: "YearMs", expression: { op: "parseTime", operand: { field: "year" }, format: "auto" } })
    .createLinePlot({ x: { field: "YearMs", fieldType: "temporal" }, y: "population", guides: false })
    .editLineMark({ stroke: "#333" })
    .createScatterPlot({ x: { field: "YearMs", fieldType: "temporal" }, y: "population", guides: false })
    .editPointMark({ fill: "transparent", stroke: "#333", strokeWidth: 2 })
    .editPointMark({ opacity: 0.7 })
    .encodePointRadius({ value: Math.sqrt(30) / 2 })
    .createYAxis({
      line: { color: "#888", lineWidth: 1 },
      ticksAndLabels: {
        values: [0, 10000, 20000, 30000, 40000],
        ticks: { length: 5, color: "#888" },
        labels: { fontSize: 10, color: "black", format: ",.0f", offset: 6.5, alongOffset: 0.890625 }
      },
      title: { text: "population", fontSize: 11, fontWeight: 700, color: "black", offset: 46.0078125, alongOffset: 0.5, rotation: { value: -90, unit: "degrees" } }
    })
    .createGrid({ horizontal: { values: [0, 10000, 20000, 30000, 40000], color: "#ddd", lineWidth: 1 } })
    .createGuides({
      axes: false,
      grid: false,
      legend: {
        channels: ["color"],
        titleStyle: { fontSize: 11, fontWeight: 700, color: "black" },
        labels: { fontSize: 10, color: "black" },
        symbol: { width: 10, height: 10, stroke: "transparent", strokeWidth: 1.5 }
      }
    });
}