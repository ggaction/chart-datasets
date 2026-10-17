// DOCS: doc-e790db38fc2a278a (createScatterPlot), doc-2e6240c00cb297cc (createScatterPlot), doc-76573a465e2b6a33 (createLinePlot)
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({ width: 506, height: 383, margin: { left: 44, top: 46, right: 62, bottom: 37 } })
    .createData({ values: data })
    .createComputedData({ id: "xnum", as: "fp", expression: { op: "toNumber", operand: { field: "foreign population %" } } })
    .createComputedData({ id: "ynum", as: "val", expression: { op: "toNumber", operand: { field: "Value" } } })
    .createScatterPlot({ x: "fp", y: "val", guides: false })
    .encodePointRadius({ value: Math.sqrt(30) / 2 })
    .editPointMark({ fill: "#162a2c", opacity: 0.7 })
    .createRegressionData({ id: "fit", x: "fp", y: "val" })
    .editRegressionData({ target: "fit", predict: { domain: [0, 20], steps: 2 } })
    .createLinePlot({ x: "fp", y: "val", guides: false })
    .editLineMark({ stroke: "firebrick", strokeWidth: 2 })
    .createSummaryData({ id: "stats", source: "ynum", aggregates: [{ op: "count", as: "N" }] })
    .createComputedData({ id: "ann", as: "R2", expression: { constant: "R²: 0.02" } })
    .createTextMark({ id: "text", data: "ann", fontSize: 11 })
    .encodeText({ target: "text", field: "R2" })
    .encodeX({ target: "text", datum: 24 })
    .encodeY({ target: "text", datum: 116.43333333333334 })
    .editTextMark({ target: "text", align: "right", baseline: "middle" })
    .editTextMark({ target: "text", fill: "firebrick" })
    .editXScale({ domain: [0, 24] })
    .editYScale({ domain: [90, 116] })
    .createGrid({ horizontal: { values: [90, 95, 100, 105, 110, 115], color: "#ddd" }, vertical: { values: [0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24], color: "#ddd" } })
    .createAxes({
      x: { line: { color: "#888" }, ticksAndLabels: { values: [0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24], ticks: { length: 5, color: "#888" }, labels: { fontSize: 10, offset: 7, flush: true, color: "black" } }, title: { text: "Foreign Population (%)", fontWeight: 700, fontSize: 11, color: "black" } },
      y: { line: { color: "#888" }, ticksAndLabels: { values: [90, 95, 100, 105, 110, 115], ticks: { length: 5, color: "#888" }, labels: { fontSize: 10, offset: 7, color: "black" } }, title: { text: "Productivity", fontWeight: 700, fontSize: 11, color: "black" } }
    })
    .createTitle({ text: "Productivity & Immigration", titleStyle: { fontWeight: 700, fontSize: 13, color: "black" }, subtitleStyle: { fontSize: 10, fontStyle: "italic", color: "black" } })
    .editTitle({ alongOffset: -38.6845703125 })
    .editTitle({ subtitle: "GDP per hour worked (USD, indexed 2015=100) regressed on foregin born population (%), 2019, source:OECD", gap: 1, offset: -13 });
}