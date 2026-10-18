import { chart } from "ggaction";
import data from "./data.json";

// DOCS: doc-b9261a4b2909a353 doc-76573a465e2b6a33 doc-203db321ccc2e60f

const xTickValues = [0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30];
const yTickValues = [0, 50, 100, 150];
const ruleRows = [{ value: 1 }, { value: 2.3 }, { value: 6.01 }, { value: 11 }, { value: 19 }];
const labelRows = [
  { value: 1, label: "1" },
  { value: 2.3, label: "2.3" },
  { value: 6.01, label: "6.01" },
  { value: 11, label: "11" },
  { value: 19, label: "19" }
];

export function buildChart() {
  return chart()
    .createCanvas({ width: 622, height: 243, margin: { left: 44, top: 6, right: 78, bottom: 37 } })
    .editCanvas({ plotBorder: { color: "#ddd", lineWidth: 1 } })
    .createData({ values: data })
    .applyTextMetrics({
      profile: {
        schemaVersion: 1,
        id: "vl_1391-original-source-font-widths",
        measurements: [
          { text: "0", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 5.5625 },
          { text: "2", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 5.5625 },
          { text: "4", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 5.5625 },
          { text: "6", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 5.5625 },
          { text: "8", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 5.5625 },
          { text: "10", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 11.125 },
          { text: "12", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 11.125 },
          { text: "14", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 11.125 },
          { text: "16", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 11.125 },
          { text: "18", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 11.125 },
          { text: "20", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 11.125 },
          { text: "22", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 11.125 },
          { text: "24", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 11.125 },
          { text: "26", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 11.125 },
          { text: "28", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 11.125 },
          { text: "30", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 11.125 },
          { text: "Difference Threshold (Euclidean Distance in CIELAB)", fontFamily: "sans-serif", fontSize: 11, fontWeight: 700, fontStyle: "normal", width: 278.109375 },
          { text: "50", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 11.125 },
          { text: "100", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 16.6875 },
          { text: "150", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 16.6875 },
          { text: "Number of Distinct Colors", fontFamily: "sans-serif", fontSize: 11, fontWeight: 700, fontStyle: "normal", width: 136.296875 },
          { text: "1", fontFamily: "sans-serif", fontSize: 11, fontWeight: 400, fontStyle: "normal", width: 6.125 },
          { text: "2.3", fontFamily: "sans-serif", fontSize: 11, fontWeight: 400, fontStyle: "normal", width: 15.296875 },
          { text: "6.01", fontFamily: "sans-serif", fontSize: 11, fontWeight: 400, fontStyle: "normal", width: 21.421875 },
          { text: "11", fontFamily: "sans-serif", fontSize: 11, fontWeight: 400, fontStyle: "normal", width: 11.4375 },
          { text: "19", fontFamily: "sans-serif", fontSize: 11, fontWeight: 400, fontStyle: "normal", width: 12.25 },
          { text: "Bivariate", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 38.90625 },
          { text: "VSUP", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 27.234375 },
          { text: "Map Type", fontFamily: "sans-serif", fontSize: 11, fontWeight: 700, fontStyle: "normal", width: 49.921875 }
        ]
      }
    })
    .createLinePlot({ x: "threshold", y: "num", guides: false })
    .encodeColor({ field: "type" })
    .editXScale({ domain: [0, 30], nice: false })
    .editYScale({ domain: [0, 180], nice: false })
    .createXAxis({
      line: { lineWidth: 1 },
      ticksAndLabels: {
        values: xTickValues,
        ticks: { length: 5, lineWidth: 1 },
        labels: { fontSize: 10, offset: 5.5, alongOffset: 0.5, flush: true, format: ".0f" }
      },
      title: { text: "Difference Threshold (Euclidean Distance in CIELAB)", fontSize: 11, fontWeight: 700, offset: 27.578125, alongOffset: 0.5 }
    })
    .editXAxisLine({ color: "#888" })
    .editXAxisTicksAndLabels({ ticks: { color: "#888" }, labels: { color: "black" } })
    .editXAxisTitle({ color: "black" })
    .createYAxis({
      line: { lineWidth: 1 },
      ticksAndLabels: {
        values: yTickValues,
        ticks: { length: 5, lineWidth: 1 },
        labels: { fontSize: 10, offset: 6.5, alongOffset: 0.890625, format: ".0f" }
      },
      title: { text: "Number of Distinct Colors", fontSize: 11, fontWeight: 700, offset: 32.1064453125, alongOffset: 0.5, rotation: { value: -90, unit: "degrees" } }
    })
    .editYAxisLine({ color: "#888" })
    .editYAxisTicksAndLabels({ ticks: { color: "#888" }, labels: { color: "black" } })
    .editYAxisTitle({ color: "black" })
    .createGrid({
      vertical: { values: xTickValues, color: "#ddd", lineWidth: 1 },
      horizontal: { values: yTickValues, color: "#ddd", lineWidth: 1 }
    })
    .createGuides({
      axes: false,
      grid: false,
      legend: {
        title: "Map Type",
        titleStyle: { fontSize: 11, fontWeight: 700, color: "black" },
        labels: { fontSize: 10, color: "black" },
        symbol: { layers: [{ type: "line", length: 10, lineWidth: 1.5, opacity: 1 }] }
      }
    })
    .createData({ id: "rules", values: ruleRows })
    .createRuleMark({ id: "rules", stroke: "red", strokeWidth: 1 })
    .encodeX({ field: "value", fieldType: "quantitative" })
    .createData({ id: "labels", values: labelRows })
    .createTextMark({ id: "text", data: "labels", fontSize: 11 })
    .editTextMark({ fill: "red", align: "center", baseline: "middle" })
    .encodeY({ datum: 180 })
    .editTextMark({ dy: 212 })
    .encodeX({ field: "value", fieldType: "quantitative" })
    .encodeText({ target: "text", field: "label" })
;
}