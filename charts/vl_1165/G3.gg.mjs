// DOCS: doc-e790db38fc2a278a, doc-dfae58344d5a524e, doc-76573a465e2b6a33
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({ width: 319, height: 333, margin: { left: 33, top: 16, right: 6, bottom: 37 } })
    .createData({ values: data })
    .createComputedData({ id: "num", as: "lifeexpectancyNum", expression: { op: "toNumber", operand: { field: "lifeexpectancy" } } })
    .createComputedData({ id: "numY", as: "happiness2020Num", expression: { op: "toNumber", operand: { field: "happiness2020" } } })
    .createScatterPlot({ x: "lifeexpectancyNum", y: "happiness2020Num", guides: false })
    .editPointMark({ fill: "#4c78a8", opacity: 0.7 })
    .encodePointRadius({ value: 2.7386127875258306 })
    .editXScale({ domain: [45, 90], nice: false })
    .editYScale({ domain: [2, 8], nice: false })
    .createGrid({ horizontal: true, vertical: true })
    .editGrid({ horizontal: { color: "#ddd" }, vertical: { color: "#ddd" } })
    .createXAxis({
      line: { color: "#888" },
      ticksAndLabels: { values: [45, 50, 55, 60, 65, 70, 75, 80, 85, 90], ticks: { length: 5, color: "#888" }, labels: { fontSize: 10, offset: 7, color: "black", flush: true } },
      title: { text: "Life Expectancy", fontSize: 11, fontWeight: 700, color: "black", offset: 28 }
    })
    .createYAxis({
      line: { color: "#888" },
      ticksAndLabels: { values: [2, 3, 4, 5, 6, 7, 8], ticks: { length: 5, color: "#888" }, labels: { fontSize: 10, offset: 7, color: "black" } },
      title: { text: "Happiness", fontSize: 11, fontWeight: 700, color: "black" }
    })
    .createRegressionData({ id: "reg", x: "lifeexpectancyNum", y: "happiness2020Num" })
    .editRegressionData({ target: "reg", predict: { domain: [52.997, 84.82], steps: 2 } })
    .createLinePlot({ x: "lifeexpectancyNum", y: "happiness2020Num", guides: false })
    .editLineMark({ target: "linePlot", stroke: "firebrick", strokeWidth: 2 })
    .createSummaryData({ id: "annotationSeed", source: "numY", aggregates: [{ op: "count", as: "n" }] })
    .createComputedData({ id: "r2", as: "R2", expression: { constant: "R²: 0.57" } })
    .createTextMark({ fontSize: 11, fill: "firebrick", align: "right" })
    .editTextMark({ target: "text", baseline: "middle", dy: -5 })
    .encodeX({ target: "text", datum: 90 })
    .encodeY({ target: "text", datum: 8 })
    .encodeText({ target: "text", field: "R2" });
}