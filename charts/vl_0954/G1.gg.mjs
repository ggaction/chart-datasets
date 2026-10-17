import { chart } from "ggaction";
import data from "./data.json";
// DOCS: doc-e790db38fc2a278a, doc-48c72317a1a99e17

export function buildChart() {
  return chart()
    .createCanvas({ width: 345, height: 383, margin: { left: 39, top: 46, right: 6, bottom: 37 } })
    .createData({ values: data })
    .createComputedData({ id: "px", as: "X", expression: { op: "toNumber", operand: { field: "Price" } } })
    .createComputedData({ id: "py", as: "Y", expression: { op: "toNumber", operand: { field: "Gas Price" } } })
    .createScatterPlot({ x: "X", y: "Y", guides: false })
    .editPointMark({ fill: "#4c78a8", opacity: 0.7 })
    .encodePointRadius({ value: 2.7386127875258306 })
    .createRegressionData({ id: "fit", x: "X", y: "Y" })
    .editRegressionData({ target: "fit", predict: { domain: [0.01, 90.16], steps: 2 } })
    .createLinePlot({ x: "X", y: "Y", guides: false })
    .editLineMark({ stroke: "firebrick", strokeWidth: 2 })
    .createSummaryData({ id: "n", source: "py", aggregates: [{ op: "count", as: "N" }] })
    .createComputedData({ id: "r2", as: "R2", expression: { constant: "R²: 0.44" } })
    .createTextMark({ id: "text", data: "r2", fontSize: 11 })
    .encodeText({ field: "R2" })
    .encodeX({ datum: 100 })
    .encodeY({ datum: 71.16666666666667 })
    .editTextMark({ fill: "firebrick" })
    .editTextMark({ align: "right", baseline: "middle" })
    .editXScale({ domain: [0, 100] })
    .editYScale({ domain: [0, 70] })
    .createAxes({
      x: {
        line: { color: "#888" },
        ticksAndLabels: {
          values: [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100],
          ticks: { length: 5, color: "#888" },
          labels: { fontSize: 10, color: "black", offset: 7, flush: true }
        },
        title: { text: "Carbon Price €", fontSize: 11, fontWeight: 700, color: "black" }
      },
      y: {
        line: { color: "#888" },
        ticksAndLabels: {
          values: [0, 10, 20, 30, 40, 50, 60, 70],
          ticks: { length: 5, color: "#888" },
          labels: { fontSize: 10, color: "black", offset: 7 }
        },
        title: { text: "Gas Price", fontSize: 11, fontWeight: 700, color: "black", rotation: { value: -90, unit: "degrees" } }
      }
    })
    .createTitle({ text: "Natural Gas and Carbon Price Regression", titleStyle: { fontSize: 13, fontWeight: 700, color: "black" }, subtitleStyle: { fontSize: 10, fontStyle: "italic", color: "black" } })
    .editTitle({ subtitle: "Source: https://www.investing.com, FRED Economic Data", gap: 1, offset: -13 }).editTitle({ alongOffset: -33.123046875 });
}