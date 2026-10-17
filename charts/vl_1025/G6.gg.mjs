// DOCS: doc-e790db38fc2a278a, doc-76573a465e2b6a33, doc-2bd5de4bd99e314a
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({ width: 607, height: 583, margin: { left: 47, top: 46, right: 10, bottom: 37 } })
    .editCanvas({ background: "#FeFeF8" })
    .createData({ values: data })
    .createComputedData({ id: "num", as: "MedianHPriceNum", expression: { op: "toNumber", operand: { field: "MedianHPrice" } } })
    .createComputedData({ id: "num2", as: "UnempConstRateNum", expression: { op: "toNumber", operand: { field: "UnempConstRate" } } })
    .createScatterPlot({ x: "MedianHPriceNum", y: "UnempConstRateNum", guides: false })
    .encodePointRadius({ value: 5, target: "scatterPlot" })
    .encodeOpacity({ target: "scatterPlot", value: 0.7 })
    .editPointMark({ target: "scatterPlot", fill: "rgb(0,47,167)" })
    .editPointMark({ target: "scatterPlot", stroke: false })
    .editXScale({ domain: [0, 1400000], nice: false })
    .editYScale({ domain: [0, 0.11], nice: false })
    .createRegressionData({ id: "regLine", x: "MedianHPriceNum", y: "UnempConstRateNum" })
    .editRegressionData({ target: "regLine", predict: { domain: [0, 1400000], steps: 2 } })
    .createLinePlot({ x: "MedianHPriceNum", y: "UnempConstRateNum", guides: false })
    .encodeStroke({ target: "linePlot", value: "grey" })
    .encodeStrokeWidth({ target: "linePlot", value: 2 })
    .createSummaryData({ id: "annotationSeed", source: "num2", aggregates: [{ op: "count", as: "n" }] })
    .createComputedData({ id: "r2", as: "R2", expression: { constant: "R²: 0.04" } })
    .createTextMark({ fontSize: 11, fill: "grey" })
    .editTextMark({ align: "right", baseline: "middle", dy: -5 })
    .encodeX({ target: "text", datum: 1400000 })
    .encodeY({ target: "text", datum: 0.11 })
    .encodeText({ field: "R2", target: "text" })
    .createGrid({ horizontal: true, vertical: true })
    .editHorizontalGrid({ color: "#ddd" })
    .editVerticalGrid({ color: "#ddd" })
.createXAxis({
      ticksAndLabels: { values: [0, 200000, 400000, 600000, 800000, 1000000, 1200000, 1400000], ticks: { length: 5 }, labels: { fontSize: 10, offset: 7, flush: true } },
      title: { text: "MedianHPrice", fontSize: 11, offset: 28 }
    })
    .createYAxis({
      ticksAndLabels: { values: [0, 0.01, 0.02, 0.03, 0.04, 0.05, 0.06, 0.07, 0.08, 0.09, 0.1, 0.11], ticks: { length: 5 }, labels: { fontSize: 10, offset: 7 } },
      title: { text: "UnempConstRate", fontSize: 11 }
    })
    .editXAxis({ line: { color: "#888" }, ticksAndLabels: { ticks: { color: "#888" }, labels: { color: "black" } }, title: { fontWeight: 700, color: "rgb(0, 0, 0)" } })
    .editYAxis({ line: { color: "#888" }, ticksAndLabels: { ticks: { color: "#888" }, labels: { color: "black" } }, title: { fontWeight: 700, color: "rgb(0, 0, 0)" } })
    .createTitle({ text: "Median House Prices vs Unemployment Rate", titleStyle: { fontSize: 13, fontWeight: 700, color: "rgb(0, 0, 0)" }, align: "center" })
    .editTitle({ offset: -13, gap: 1 })
    .editTitle({ subtitle: "By English Constituency (2022).  Source:ONS", subtitleStyle: { fontSize: 10, fontStyle: "italic", color: "rgb(0, 0, 0)" } });
}