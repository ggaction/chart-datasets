import { chart } from "ggaction";
import data from "./data.json";
// DOCS: doc-e790db38fc2a278a, doc-2e6240c00cb297cc, doc-76573a465e2b6a33

export function buildChart() {
  return chart()
    .createCanvas({ width: 403, height: 396, margin: { left: 47, top: 59, right: 6, bottom: 37 } })
    .createData({ id: "raw", values: data })
    .createComputedData({ id: "typedX", as: "xNum", expression: { op: "toNumber", operand: { field: "Fed Funds Rate" } } })
    .createComputedData({ id: "typedY", as: "yNum", expression: { op: "toNumber", operand: { field: "Stocks Avg Return" } } })
    .createScatterPlot({ x: "xNum", y: "yNum", guides: false })
    .editPointMark({ target: "scatterPlot", fill: "#1f11ddf4" })
    .encodeOpacity({ target: "scatterPlot", value: 0.7 })
    .encodePointRadius({ value: Math.sqrt(60) / 2, target: "scatterPlot" })
    .editXScale({ domain: [0, 0.04] })
    .editYScale({ domain: [-0.5, 0.5] })
    .createRegressionData({ id: "fit", x: "xNum", y: "yNum" })
    .editRegressionData({ target: "fit", predict: { domain: [0.000793548, 0.038925], steps: 2 } })
    .createLinePlot({ x: "xNum", y: "yNum", guides: false })
    .encodeStroke({ target: "linePlot", value: "#674439f2" })
    .encodeStrokeWidth({ target: "linePlot", value: 2 })
    .applyTextMetrics({ profile: { schemaVersion: 1, id: "source-header-and-axis-metrics-0778", measurements: [
      { text: "S&P 500 Returns vs Fed Funds Rate Hike", fontFamily: "sans-serif", fontSize: 13, fontWeight: 700, fontStyle: "normal", width: 254.796875 },
      { text: "Relationship between S&P 500 Returns and Fed Funds Rate", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "italic", width: 269.6826171875 },
      { text: "Soruce:S&P Dow Jone Indices, FRED", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "italic", width: 169.39453125 },
      { text: "0.0%", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 22.796875 },
      { text: "0.5%", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 22.796875 },
      { text: "1.0%", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 22.796875 },
      { text: "1.5%", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 22.796875 },
      { text: "2.0%", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 22.796875 },
      { text: "2.5%", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 22.796875 },
      { text: "3.0%", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 22.796875 },
      { text: "3.5%", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 22.796875 },
      { text: "4.0%", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 22.796875 },
      { text: "Monthly Fed Funds Rate", fontFamily: "sans-serif", fontSize: 11, fontWeight: 700, fontStyle: "normal", width: 127.734375 },
      { text: "−0.5", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 19.75 },
      { text: "−0.4", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 19.75 },
      { text: "−0.3", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 19.75 },
      { text: "−0.2", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 19.75 },
      { text: "−0.1", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 19.75 },
      { text: "0.0", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 13.90625 },
      { text: "0.1", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 13.90625 },
      { text: "0.2", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 13.90625 },
      { text: "0.3", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 13.90625 },
      { text: "0.4", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 13.90625 },
      { text: "0.5", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 13.90625 },
      { text: "Monthly S&P 500 Returns", fontFamily: "sans-serif", fontSize: 11, fontWeight: 700, fontStyle: "normal", width: 133.671875 }
    ] } })
  .createXAxis({
    line: {},
    ticksAndLabels: {
      values: [0, 0.005, 0.01, 0.015, 0.02, 0.025, 0.03, 0.035, 0.04],
      ticks: { length: 5 },
      labels: { fontSize: 10, offset: 7, flush: true }
    },
    title: { text: "Monthly Fed Funds Rate", fontSize: 11, offset: 27 }
  })
  .editXAxisLine({ color: "#888" })
  .editXAxisTicks({ color: "#888" })
  .editXAxisLabels({ format: ".1%" })
  .editXAxisTitle({ fontWeight: 700 })
  .createYAxis({
    line: {},
    ticksAndLabels: {
      values: [-0.5, -0.4, -0.3, -0.2, -0.1, 0, 0.1, 0.2, 0.3, 0.4, 0.5],
      ticks: { length: 5 },
      labels: { fontSize: 10, offset: 7 }
    },
    title: { text: "Monthly S&P 500 Returns", fontSize: 11, offset: 35 }
  })
  .editYAxisLine({ color: "#888" })
  .editYAxisTicks({ color: "#888" })
  .editYAxisLabels({ format: ".1f", labelMap: [
    { value: -0.5, label: "−0.5" },
    { value: -0.4, label: "−0.4" },
    { value: -0.3, label: "−0.3" },
    { value: -0.2, label: "−0.2" },
    { value: -0.1, label: "−0.1" },
    { value: 0, label: "0.0" },
    { value: 0.1, label: "0.1" },
    { value: 0.2, label: "0.2" },
    { value: 0.3, label: "0.3" },
    { value: 0.4, label: "0.4" },
    { value: 0.5, label: "0.5" }
  ] })
  .editYAxisTitle({ fontWeight: 700 })
  .createGrid({ horizontal: true, vertical: true })
    .editHorizontalGrid({ color: "#ddd" })
    .editVerticalGrid({ color: "#ddd" })
    .createSummaryData({ id: "one", source: "typedY", aggregates: [{ op: "count", as: "N" }] })
    .createComputedData({ id: "display", as: "R2", expression: { constant: "R²: 0.03" } })
    .createTextMark({ id: "text", data: "display", fontSize: 11 })
    .encodeText({ target: "text", field: "R2" })
    .encodeX({ target: "text", datum: 0.04 })
    .encodeY({ target: "text", datum: 0.5 })
    .editTextMark({ target: "text", align: "right", baseline: "middle" })
    .editTextMark({ target: "text", fill: "black", dy: -6 })
    
    .createTitle({ text: "S&P 500 Returns vs Fed Funds Rate Hike", titleStyle: { fontSize: 13, fontWeight: 700, fontFamily: "sans-serif", color: "black" }, alongOffset: -41.7412109375 })
    .editTitle({ subtitleStyle: { fontSize: 10, fontWeight: 400, fontStyle: "italic", fontFamily: "sans-serif", color: "black" }, offset: -13, gap: 3 })
    .editTitle({ subtitle: "Relationship between S&P 500 Returns and Fed Funds Rate\nSoruce:S&P Dow Jone Indices, FRED" });
}