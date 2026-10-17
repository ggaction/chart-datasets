// DOCS: doc-e790db38fc2a278a (createScatterPlot), doc-76573a465e2b6a33 (createLinePlot)
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({ width: 338, height: 362, margin: { left: 32, top: 40, right: 6, bottom: 22 } })
    .createData({ values: data })
    .createComputedData({ id: "incomeData", as: "income", expression: { op: "toNumber", operand: { field: "Med income" } } })
    .createComputedData({ id: "deathsData", as: "deaths", expression: { op: "toNumber", operand: { field: "Firearm deaths" } } })
    .createScatterPlot({
      x: { field: "income", fieldType: "quantitative" },
      y: { field: "deaths", fieldType: "quantitative" },
      guides: false
    })
    .encodePointRadius({ value: 5, target: "scatterPlot" })
    .editPointMark({ target: "scatterPlot", fill: "rgb(0,47,167)", opacity: 0.7 })
    .createRegressionData({ id: "regressionData", x: "income", y: "deaths" })
    .editRegressionData({ target: "regressionData", predict: { domain: [41099, 76260], steps: 2 } })
    .createLinePlot({
      x: { field: "income", fieldType: "quantitative" },
      y: { field: "deaths", fieldType: "quantitative" },
      guides: false
    })
    .editXScale({ domain: [40000, 80000] })
    .editYScale({ domain: [0, 0.24] })
    .editLineMark({ target: "linePlot", stroke: "grey", strokeWidth: 2 })
    .createGrid({
      horizontal: { values: [0, 0.02, 0.04, 0.06, 0.08, 0.1, 0.12, 0.14, 0.16, 0.18, 0.2, 0.22, 0.24], color: "#ddd" },
      vertical: { values: [40000, 45000, 50000, 55000, 60000, 65000, 70000, 75000, 80000], color: "#ddd" }
    })
    .createXAxis({
      line: { color: "#888" },
      ticksAndLabels: {
        values: [40000, 45000, 50000, 55000, 60000, 65000, 70000, 75000, 80000],
        ticks: { length: 5, color: "#888" },
        labels: {
          fontSize: 10, color: "black", offset: 5.5, flush: true, format: ",.0f",
          labelMap: [
            { value: 40000, label: "40,000" },
            { value: 45000, label: "" },
            { value: 50000, label: "50,000" },
            { value: 55000, label: "" },
            { value: 60000, label: "60,000" },
            { value: 65000, label: "" },
            { value: 70000, label: "70,000" },
            { value: 75000, label: "" },
            { value: 80000, label: "80,000" }
          ]
        }
      },
      title: false
    })
    .createYAxis({
      line: { color: "#888" },
      ticksAndLabels: {
        values: [0, 0.02, 0.04, 0.06, 0.08, 0.1, 0.12, 0.14, 0.16, 0.18, 0.2, 0.22, 0.24],
        ticks: { length: 5, color: "#888" },
        labels: { fontSize: 10, color: "black", offset: 7, format: ".2f" }
      },
      title: false
    })
    .createTitle({
      text: "Gun deaths and income - US states",
      titleStyle: { fontSize: 13, fontWeight: 700, color: "black" },
      subtitleStyle: { fontSize: 10, fontStyle: "italic", color: "black" }
    })
    .editTitle({ alongOffset: -26.5 })
    .editTitle({
      subtitle: "Median income (x), and firearm deaths per 100k population",
      gap: 1,
      offset: -13
    });
}