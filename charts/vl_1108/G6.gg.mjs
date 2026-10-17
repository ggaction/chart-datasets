// DOCS: doc-e790db38fc2a278a, doc-2e6240c00cb297cc, doc-76573a465e2b6a33
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({ width: 412, height: 403, margin: { left: 41, top: 16, right: 21, bottom: 37 } })
    .editCanvas({ plotBorder: { color: "#ddd", lineWidth: 1 } })
    .applyTextMetrics({
      profile: {
        schemaVersion: 1,
        id: "vl_1108-source-fonts",
        measurements: [
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
        ]
      }
    })
    .createData({ id: "raw", values: data })
    .createComputedData({ id: "xTyped", as: "xNum", expression: { op: "toNumber", operand: { field: "value1" } } })
    .createComputedData({ id: "typed", as: "yNum", expression: { op: "toNumber", operand: { field: "value2" } } })
    .filterData({ id: "other18", field: "code", noneOf: ["SCOT", "IRL"] })
    .createScatterPlot({ x: "xNum", y: "yNum", guides: false })
    .editXScale({ domain: [0, 12000] })
    .editYScale({ domain: [0, 3.5] })
    .encodeStroke({ value: "#6e0018" })
    .editPointMark({ fill: "#e6224b", strokeWidth: 1 })
    .encodePointRadius({ value: Math.sqrt(70) / 2 })
    .encodeOpacity({ value: 0.7 })
    .filterData({ id: "highlight", source: "typed", field: "code", oneOf: ["SCOT", "IRL"] })
    .createPointMark({ id: "highlightPts", data: "highlight", fill: "#00abc2" })
    .encodeStroke({ value: "#005a66", target: "highlightPts" })
    .editPointMark({ target: "highlightPts", strokeWidth: 1 })
    .encodeX({ field: "xNum", target: "highlightPts" })
    .encodeY({ field: "yNum", target: "highlightPts" })
    .encodePointRadius({ value: Math.sqrt(70) / 2, target: "highlightPts" })
    .encodeOpacity({ value: 0.7, target: "highlightPts" })
    .createRegressionData({ id: "fit", source: "typed", x: "xNum", y: "yNum" })
    .editRegressionData({ target: "fit", predict: { domain: [750, 11000], steps: 2 } })
    .createComputedData({ id: "fitAttached", as: "fitX", expression: { field: "xNum" } })
    .createLineMark({ id: "fitLine", data: "fitAttached", stroke: "#6e0018" })
    .encodeX({ field: "fitX", target: "fitLine" })
    .encodeY({ field: "yNum", target: "fitLine" })
    .editLineMark({ target: "fitLine", strokeWidth: 2 })
    .createSummaryData({ id: "r2stats", source: "typed", aggregates: [{ op: "count", as: "n" }] })
    .createComputedData({ id: "r2text", as: "R2", expression: { constant: "R²: 0.39" } })
    .createXAxis({
      line: {},
      ticksAndLabels: {
        values: [0, 2000, 4000, 6000, 8000, 10000, 12000],
        ticks: { length: 5 },
        labels: { fontSize: 10, offset: 5.5, alongOffset: 0.5, flush: true }
      },
      title: { text: "1926 GDP per capita", fontSize: 11, offset: 27.578125 }
    })
    .createYAxis({
      line: {},
      ticksAndLabels: {
        values: [0, 0.5, 1, 1.5, 2, 2.5, 3, 3.5],
        ticks: { length: 5 },
        labels: { fontSize: 10, offset: 6.5, alongOffset: 0.890625 }
      },
      title: { text: "Average annual growth rate (%)", fontSize: 11, offset: 29.3232421875, rotation: { value: -90, unit: "degrees" } }
    })
    .editXAxisLine({ color: "#888" })
    .editXAxisTicks({ color: "#888" })
    .editXAxisLabels({ color: "black", labelMap: [
      { value: 0, label: "0" }, { value: 2000, label: "2,000" }, { value: 4000, label: "4,000" },
      { value: 6000, label: "6,000" }, { value: 8000, label: "8,000" },
      { value: 10000, label: "10,000" }, { value: 12000, label: "12,000" }
    ] })
    .editXAxisTitle({ fontWeight: 700, color: "black" })
    .editYAxisLine({ color: "#888" })
    .editYAxisTicks({ color: "#888" })
    .editYAxisLabels({ color: "black", format: ".1f" })
    .editYAxisTitle({ fontWeight: 700, color: "black" })
    .createGrid({
      horizontal: { values: [0, 0.5, 1, 1.5, 2, 2.5, 3, 3.5] },
      vertical: { values: [0, 2000, 4000, 6000, 8000, 10000, 12000] }
    })
    .editGrid({ horizontal: { color: "#ddd" }, vertical: { color: "#ddd" } })
    .createTextMark({ id: "r2Ann", data: "r2text", fill: "#6e0018" })
    .editTextMark({ target: "r2Ann", fontSize: 11, baseline: "middle" })
    .editTextMark({ target: "r2Ann", align: "right", dy: -5 })
    .encodeText({ field: "R2", target: "r2Ann" })
    .encodeX({ datum: 12000, target: "r2Ann" })
    .encodeY({ datum: 3.5, target: "r2Ann" })
    .createTextMark({ id: "codesMain", data: "other18", fill: "#6e0018" })
    .editTextMark({ target: "codesMain", fontSize: 11, align: "center" })
    .editTextMark({ target: "codesMain", baseline: "middle", dx: 14 })
    .editTextMark({ target: "codesMain", dy: 11 })
    .encodeText({ field: "code", target: "codesMain" })
    .encodeX({ field: "xNum", target: "codesMain" })
    .encodeY({ field: "yNum", target: "codesMain" })
    .createTextMark({ id: "codesHi", data: "highlight", fill: "#005a66" })
    .editTextMark({ target: "codesHi", fontSize: 11, align: "center" })
    .editTextMark({ target: "codesHi", baseline: "middle", dx: 14 })
    .editTextMark({ target: "codesHi", dy: 11 })
    .encodeText({ field: "code", target: "codesHi" })
    .encodeX({ field: "xNum", target: "codesHi" })
    .encodeY({ field: "yNum", target: "codesHi" });
}