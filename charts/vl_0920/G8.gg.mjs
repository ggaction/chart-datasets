import { chart } from "ggaction";
import data from "./data.json";
// DOCS: doc-7f2c254224fc4908 doc-7184b02978bdf5d1 doc-e790db38fc2a278a

export function buildChart() {
  return chart()
    .createCanvas({ width: 401, height: 328, margin: { left: 64, top: 41, right: 87, bottom: 37 } })
    .createData({ id: "raw", values: data })
    .createComputedData({ id: "typedBuilds", as: "Builds_num", expression: { op: "toNumber", operand: { field: "Builds" } } })
    .createComputedData({ id: "typedPrice", as: "Price_num", expression: { op: "toNumber", operand: { field: "Price" } } })
    .createScatterPlot({ x: "Builds_num", y: "Price_num", guides: false })
    .encodeColor({ field: "Period" })
    .editColorScale({
      domain: ["1980-1989", "1990-1999", "2000-2009", "2010-2019", "2020-2022"],
      range: ["rgb(254, 175, 120)", "rgb(241, 96, 93)", "rgb(182, 55, 122)", "rgb(114, 31, 129)", "rgb(44, 17, 96)"]
    })
    .encodeOpacity({ value: 0.7, target: "scatterPlot" })
    .encodePointRadius({ value: 5 })
    .editXScale({ domain: [0, 60000] })
    .editYScale({ domain: [0, 350000] })
    .createGrid({ horizontal: true, vertical: true })
    .editHorizontalGrid({ color: "#ddd" })
    .editVerticalGrid({ color: "#ddd" })
    .createXAxis({
      line: {},
      ticksAndLabels: { values: [0, 20000, 40000, 60000], ticks: { length: 5 }, labels: { fontSize: 10, offset: 7, flush: true } },
      title: { text: "House Build Completions", fontSize: 11, offset: 28 }
    })
    .editXAxisLine({ color: "#888" })
    .editXAxisTicks({ color: "#888" })
    .editXAxisLabels({ color: "black" })
    .editXAxisTitle({ fontWeight: 700, color: "rgb(0, 0, 0)" })
    .createYAxis({
      line: {},
      ticksAndLabels: { values: [0, 50000, 100000, 150000, 200000, 250000, 300000, 350000], ticks: { length: 5 }, labels: { fontSize: 10, offset: 7 } },
      title: { text: "Average House Price (quarterly)", fontSize: 11 }
    })
    .editYAxisLine({ color: "#888" })
    .editYAxisTicks({ color: "#888" })
    .editYAxisLabels({ color: "black" })
    .editYAxisTitle({ fontWeight: 700, color: "rgb(0, 0, 0)" })
    .createRegressionData({ id: "regression", x: "Builds_num", y: "Price_num" })
    .editRegressionData({ target: "regression", predict: { domain: [10000, 55000], steps: 2 } })
    .createLinePlot({ x: "Builds_num", y: "Price_num", guides: false })
    .encodeStroke({ value: "black", target: "linePlot" })
    .encodeStrokeWidth({ value: 2, target: "linePlot" })
    .createSummaryData({ id: "annotationSeed", source: "typedPrice", aggregates: [{ op: "count", as: "count" }] })
    .createComputedData({ id: "r2", as: "R2", expression: { constant: "R²: 0.04" } })
    .createTextMark({ fontSize: 14, fill: "black", align: "right" })
    .editTextMark({ fontWeight: 700, baseline: "middle" })
    .encodeX({ datum: 60000 })
    .encodeY({ datum: 322000 })
    .encodeText({ field: "R2" })
    .createTitle({ text: "House Prices and House Building", titleStyle: { fontSize: 12 }, alongOffset: -58.1474609375 })
    .editTitle({ offset: -13, gap: 1, titleStyle: { fontWeight: 700, color: "rgb(0, 0, 0)" } })
    .editTitle({ subtitle: "Quarterly Data. Sources: HM Land Registry and DLUHC", subtitleStyle: { fontSize: 10, fontStyle: "italic", color: "rgb(0, 0, 0)" } })
    .createLegend({
      title: "Period",
      titleStyle: { fontSize: 11, fontWeight: 700 },
      labels: { fontSize: 10 }
    })
    .editLegendSymbols({ symbol: { layers: [{ type: "point", shape: "circle", size: 5 }] } });
}