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
    .encodeOpacity({ value: 0.7, target: "scatterPlot" })
    .editPointMark({ target: "scatterPlot", fill: "rgb(0,47,167)" })
    .createRegressionData({ id: "regressionData", x: "income", y: "deaths" })
    .editRegressionData({ target: "regressionData", predict: { domain: [41099, 76260], steps: 2 } })
    .createLinePlot({
      x: { field: "income", fieldType: "quantitative" },
      y: { field: "deaths", fieldType: "quantitative" },
      guides: false
    })
    .editXScale({ domain: [40000, 80000] })
    .editYScale({ domain: [0, 0.24] })
    .encodeStroke({ value: "grey", target: "linePlot" })
    .encodeStrokeWidth({ value: 2, target: "linePlot" })
    .createGrid({
      horizontal: { values: [0, 0.02, 0.04, 0.06, 0.08, 0.1, 0.12, 0.14, 0.16, 0.18, 0.2, 0.22, 0.24] },
      vertical: { values: [40000, 45000, 50000, 55000, 60000, 65000, 70000, 75000, 80000] }
    })
    .editHorizontalGrid({ color: "#ddd" })
    .editVerticalGrid({ color: "#ddd" })
    .createXAxis({
      line: {},
      ticksAndLabels: {
        values: [40000, 45000, 50000, 55000, 60000, 65000, 70000, 75000, 80000],
        ticks: { length: 5 },
        labels: {
          fontSize: 10, offset: 5.5, flush: true,
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
      line: {},
      ticksAndLabels: {
        values: [0, 0.02, 0.04, 0.06, 0.08, 0.1, 0.12, 0.14, 0.16, 0.18, 0.2, 0.22, 0.24],
        ticks: { length: 5 },
        labels: { fontSize: 10, offset: 7 }
      },
      title: false
    })
    .editXAxisLine({ color: "#888" })
    .editYAxisLine({ color: "#888" })
    .editXAxisTicksAndLabels({ ticks: { color: "#888" }, labels: { color: "black", format: ",.0f" } })
    .editYAxisTicksAndLabels({ ticks: { color: "#888" }, labels: { color: "black", format: ".2f" } })
    .createTitle({
      text: "Gun deaths and income - US states",
      titleStyle: { fontSize: 13 },
      subtitleStyle: { fontSize: 10, fontStyle: "italic" }
    })
    .editTitle({
      alongOffset: -26.5,
      titleStyle: { fontWeight: 700, color: "black" },
      subtitleStyle: { color: "black" }
    })
    .editTitle({
      subtitle: "Median income (x), and firearm deaths per 100k population",
      gap: 1,
      offset: -13
    });
}