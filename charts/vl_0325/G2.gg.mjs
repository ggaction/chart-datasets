// DOCS: doc-e790db38fc2a278a, doc-76573a465e2b6a33
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({ width: 450, height: 383, margin: { left: 44, top: 46, right: 6, bottom: 37 } })
    .createData({ values: data })
    .createComputedData({ id: "pointsX", as: "fx", expression: { op: "toNumber", operand: { field: "foreign population %" } } })
    .createComputedData({ id: "pointsXY", as: "fy", expression: { op: "toNumber", operand: { field: "GDP 000s" } } })
    .createScatterPlot({ x: "fx", y: "fy", guides: false })
    .editPointMark({ target: "scatterPlot", fill: "#162a2c", opacity: 0.7 })
    .encodePointRadius({ value: 2.7386, target: "scatterPlot" })
    .createRegressionData({ id: "fit", x: "fx", y: "fy" })
    .editRegressionData({ target: "fit", predict: { domain: [0, 40], steps: 2 } })
    .createLinePlot({ x: "fx", y: "fy", guides: false })
    .editLineMark({ target: "linePlot", stroke: "firebrick", strokeWidth: 2 })
    .createSummaryData({ id: "ann", source: "pointsXY", aggregates: [{ op: "count", as: "N" }] })
    .createComputedData({ id: "annR2", as: "R2", expression: { constant: "R²: 0.65" } })
    .createTextMark({ data: "annR2", fill: "#8B2323", fontSize: 11 })
    .encodeText({ target: "text", field: "R2" })
    .encodeX({ target: "text", datum: 50 })
    .encodeY({ target: "text", datum: 122 })
    .editTextMark({ target: "text", align: "right", baseline: "middle" })
    .editXScale({ domain: [0, 50] })
    .editYScale({ domain: [0, 120] })
    .createGrid({ vertical: { values: [0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50], color: "#ddd" }, horizontal: { values: [0, 20, 40, 60, 80, 100, 120], color: "#ddd" } })
    .createXAxis({ line: { color: "#888" }, ticksAndLabels: { values: [0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50], labels: { fontSize: 10, color: "black", flush: true, offset: 7 }, ticks: { length: 5, color: "#888" } }, title: { text: "Foreign born population (%)", fontSize: 11, fontWeight: 700, color: "black" } })
    .createYAxis({ line: { color: "#888" }, ticksAndLabels: { values: [0, 20, 40, 60, 80, 100, 120], labels: { fontSize: 10, color: "black", offset: 7 }, ticks: { length: 5, color: "#888" } }, title: { text: "GDP per capita (000s)", fontSize: 11, fontWeight: 700, color: "black", rotation: { value: -90, unit: "degrees" } } })
    .createTitle({ text: "GDP per capita & Immigration", titleStyle: { fontSize: 13, fontWeight: 700, fontFamily: "sans-serif", color: "black" }, subtitleStyle: { fontSize: 10, fontStyle: "italic", fontFamily: "sans-serif", color: "black" } })
    .editTitle({ alongOffset: -38.6845703125 }).editTitle({ subtitle: "GDP per capita regressed on foregin born population (%) for OECD countries, 2019. source:OECD", gap: 1, offset: -13 });;
}