// DOCS: doc-e790db38fc2a278a, doc-2e6240c00cb297cc, doc-76573a465e2b6a33
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({ width: 412, height: 403, margin: { left: 41, top: 16, right: 21, bottom: 37 } })
    .applyTextMetrics({ profile: { schemaVersion: 1, id: "vl_1109-source-fonts", measurements: [
      { text: "0", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 5.5625 },
      { text: "2,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 25.03125 },
      { text: "4,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 25.03125 },
      { text: "6,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 25.03125 },
      { text: "8,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 25.03125 },
      { text: "10,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 30.59375 },
      { text: "12,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 30.59375 },
      { text: "1926 GDP per capita", fontFamily: "sans-serif", fontSize: 11, fontWeight: 700, fontStyle: "normal", width: 106.203125 },
      { text: "0.0", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 13.90625 },
      { text: "0.5", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 13.90625 },
      { text: "1.0", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 13.90625 },
      { text: "1.5", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 13.90625 },
      { text: "2.0", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 13.90625 },
      { text: "2.5", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 13.90625 },
      { text: "3.0", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 13.90625 },
      { text: "3.5", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 13.90625 },
      { text: "Average annual growth rate (%)", fontFamily: "sans-serif", fontSize: 11, fontWeight: 700, fontStyle: "normal", width: 164.640625 }
    ] } })
    .createData({ values: data })
    .createComputedData({ id: "xTyped", as: "xNum", expression: { op: "toNumber", operand: { field: "value1" } } })
    .createComputedData({ id: "typed", as: "yNum", expression: { op: "toNumber", operand: { field: "value2" } } })
    .filterData({ id: "other", field: "code", noneOf: ["SCOT", "IRL"] })
    .createScatterPlot({ x: "xNum", y: "yNum", guides: false })
    .editPointMark({ target: "scatterPlot", fill: "#e6224b", stroke: "#6e0018" })
    .editPointMark({ target: "scatterPlot", strokeWidth: 1 })
    .encodePointRadius({ value: Math.sqrt(70) / 2, target: "scatterPlot" })
    .encodeOpacity({ value: 0.7, target: "scatterPlot" })
    .editXScale({ domain: [0, 12000] })
    .editYScale({ domain: [0, 3.5] })
    .filterData({ id: "highlight", source: "typed", field: "code", oneOf: ["SCOT", "IRL"] })
    .createPointMark({ id: "highlight", data: "highlight", fill: "#00abc2" })
    .editPointMark({ target: "highlight", stroke: "#005a66", strokeWidth: 1 })
    .encodePointRadius({ value: Math.sqrt(70) / 2, target: "highlight" })
    .encodeOpacity({ value: 0.7, target: "highlight" })
    .encodeX({ field: "xNum", target: "highlight" })
    .encodeY({ field: "yNum", target: "highlight" })
    .createRegressionData({ id: "fit", source: "typed", x: "xNum", y: "yNum" })
    .editRegressionData({ target: "fit", predict: { domain: [750, 11000], steps: 2 } })
    .createComputedData({ id: "fitAttached", as: "fitX", expression: { field: "xNum" } })
    .createLineMark({ id: "fitLine", data: "fitAttached", stroke: "#6e0018" })
    .encodeX({ field: "fitX", target: "fitLine" })
    .encodeY({ field: "yNum", target: "fitLine" })
    .editLineMark({ target: "fitLine", strokeWidth: 2 })
    .createSummaryData({ id: "fitStats", source: "typed", aggregates: [{ op: "count", as: "n" }] })
    .createComputedData({ id: "r2Text", as: "R2", expression: { constant: "R²: 0.08" } })
    .createTextMark({ id: "r2", data: "r2Text", fill: "#6e0018" })
    .encodeText({ target: "r2", field: "R2" })
    .encodeX({ target: "r2", datum: 12000 })
    .encodeY({ target: "r2", datum: 3.5 })
    .editTextMark({ target: "r2", align: "right", baseline: "middle" })
    .editTextMark({ target: "r2", dy: -5, fontSize: 11 })
    .createTextMark({ id: "codes", data: "other", fill: "#6e0018" })
    .encodeX({ field: "xNum", target: "codes" })
    .encodeY({ field: "yNum", target: "codes" })
    .encodeText({ field: "code", target: "codes" })
    .editTextMark({ target: "codes", fontSize: 11, dx: 14 })
    .editTextMark({ target: "codes", align: "center", baseline: "middle" })
    .editTextMark({ target: "codes", dy: 11 })
    .createTextMark({ id: "codesHi", data: "highlight", fill: "#005a66" })
    .encodeX({ field: "xNum", target: "codesHi" })
    .encodeY({ field: "yNum", target: "codesHi" })
    .encodeText({ field: "code", target: "codesHi" })
    .editTextMark({ target: "codesHi", fontSize: 11, dx: 14 })
    .editTextMark({ target: "codesHi", align: "center", baseline: "middle" })
    .editTextMark({ target: "codesHi", dy: 11 })
    .createXAxis({ line: { color: "#888" }, ticksAndLabels: { values: [0, 2000, 4000, 6000, 8000, 10000, 12000], ticks: { color: "#888", length: 5 }, labels: { fontSize: 10, color: "black", offset: 5.5, alongOffset: 0.5, flush: true, labelMap: [{ value: 0, label: "0" }, { value: 2000, label: "2,000" }, { value: 4000, label: "4,000" }, { value: 6000, label: "6,000" }, { value: 8000, label: "8,000" }, { value: 10000, label: "10,000" }, { value: 12000, label: "12,000" }] } }, title: { text: "1926 GDP per capita", fontSize: 11, fontWeight: 700, color: "black", offset: 27.578125 } })
    .createYAxis({ line: { color: "#888" }, ticksAndLabels: { values: [0, 0.5, 1, 1.5, 2, 2.5, 3, 3.5], ticks: { color: "#888", length: 5 }, labels: { fontSize: 10, color: "black", offset: 6.5, alongOffset: 0.890625, format: ".1f" } }, title: { text: "Average annual growth rate (%)", fontSize: 11, fontWeight: 700, color: "black", offset: 29.3232421875, rotation: { value: -90, unit: "degrees" } } })
    .createGrid({ vertical: { values: [0, 2000, 4000, 6000, 8000, 10000, 12000], color: "#ddd", lineWidth: 1 }, horizontal: { values: [0, 0.5, 1, 1.5, 2, 2.5, 3, 3.5], color: "#ddd", lineWidth: 1 } })
    .editCanvas({ plotBorder: { color: "#ddd", lineWidth: 1 } });
}