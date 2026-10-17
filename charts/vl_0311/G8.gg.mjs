import { chart } from "ggaction";
import data from "./data.json";

// DOCS: doc-e790db38fc2a278a, doc-76573a465e2b6a33, doc-48c72317a1a99e17

export function buildChart() {
  return chart()
    .createCanvas({ width: 547, height: 383, margin: { left: 44, top: 46, right: 103, bottom: 37 } })
    .createData({ id: "source", values: data })
    .createComputedData({ id: "xnum", as: "fx", expression: { op: "toNumber", operand: { field: "foreign population %" } } })
    .createComputedData({ id: "ynum", as: "fy", expression: { op: "toNumber", operand: { field: "GDP 000s" } } })
    .createScatterPlot({ x: "fx", y: "fy", guides: false })
    .encodeColor({ field: "Continent", fieldType: "nominal" })
    .editColorScale({ domain: ["Asia", "Europe", "North America"], range: ["#4c78a8", "#f58518", "#e45756"] })
    .encodeOpacity({ target: "scatterPlot", value: 0.7 })
    .encodePointRadius({ value: 2.7386127875236846 })
    .createRegressionData({ id: "fit", x: "fx", y: "fy" })
    .editRegressionData({ target: "fit", predict: { domain: [0, 40], steps: 2 } })
    .createLinePlot({ x: "fx", y: "fy", guides: false })
    .encodeStroke({ target: "linePlot", value: "firebrick" })
    .encodeStrokeWidth({ target: "linePlot", value: 2 })
    .createSummaryData({ id: "ann", source: "ynum", aggregates: [{ op: "count", as: "N" }] })
    .createComputedData({ id: "annR2", as: "R2", expression: { constant: "R²: 0.64" } })
    .createTextMark({ data: "annR2", fill: "#8B2323", fontSize: 11 })
    .encodeText({ field: "R2" })
    .encodeX({ datum: 50 })
    .encodeY({ datum: 122 })
    .editTextMark({ align: "right", baseline: "middle" })
    .editXScale({ domain: [0, 50], nice: false })
    .editYScale({ domain: [0, 120], nice: false })
    .createXAxis({
      line: {},
      ticksAndLabels: { values: [0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50], ticks: { length: 5 }, labels: { fontSize: 10, offset: 7, flush: true } },
      title: { text: "Foreign born population (%)", fontSize: 11 }
    })
    .editXAxisLine({ color: "#888" })
    .editXAxisTicks({ color: "#888" })
    .editXAxisLabels({ color: "black" })
    .editXAxisTitle({ fontWeight: 700, color: "black" })
    .createYAxis({
      line: {},
      ticksAndLabels: { values: [0, 20, 40, 60, 80, 100, 120], ticks: { length: 5 }, labels: { fontSize: 10, offset: 7 } },
      title: { text: "GDP per capita (000s)", fontSize: 11 }
    })
    .editYAxisLine({ color: "#888" })
    .editYAxisTicks({ color: "#888" })
    .editYAxisLabels({ color: "black" })
    .editYAxisTitle({ fontWeight: 700, color: "black" })
    
    
    .createGrid({ vertical: { values: [0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50] }, horizontal: { values: [0, 20, 40, 60, 80, 100, 120] } })
    .editVerticalGrid({ color: "#ddd" })
    .editHorizontalGrid({ color: "#ddd" })
    .createGuides({ axes: false, grid: false, legend: { title: "Continent", labels: { fontSize: 10 }, titleStyle: { fontSize: 11, fontWeight: 700 }, symbol: { layers: [{ type: "point", shape: "circle", size: 5 }] } } })
    .editLegendBlock({ target: "scatterPlot", channel: "color", symbol: { opacity: 0.7 } })
    .createTitle({ text: "GDP per capita & Immigration", titleStyle: { fontSize: 13 }, subtitleStyle: { fontStyle: "italic", fontSize: 10 } })
    .editTitle({ subtitle: "GDP per capita (USD) regressed on foregin born population (%) for OECD countries, 2019. source:OECD", gap: 1, offset: -13 })
    .editTitle({ alongOffset: -38.6845703125, titleStyle: { fontWeight: 700, color: "black" }, subtitleStyle: { color: "black" } });
}