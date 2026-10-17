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
    .encodeOpacity({ value: 0.7 })
    .editPointMark({ fill: "#4c78a8" })
    .encodePointRadius({ value: 2.7386127875258306 })
    .createRegressionData({ id: "fit", x: "X", y: "Y" })
    .editRegressionData({ target: "fit", predict: { domain: [0.01, 90.16], steps: 2 } })
    .createLinePlot({ x: "X", y: "Y", guides: false })
    .encodeStroke({ value: "firebrick" })
    .encodeStrokeWidth({ value: 2 })
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
    .createXAxis({
      line: {},
      ticksAndLabels: {
        values: [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100],
        ticks: { length: 5 },
        labels: { fontSize: 10, offset: 7, flush: true }
      },
      title: { text: "Carbon Price €", fontSize: 11 }
    })
    .editXAxis({
      line: { color: "#888" },
      ticksAndLabels: { ticks: { color: "#888" }, labels: { color: "black" } },
      title: { color: "black", fontWeight: 700 }
    })
    .createYAxis({
      line: {},
      ticksAndLabels: {
        values: [0, 10, 20, 30, 40, 50, 60, 70],
        ticks: { length: 5 },
        labels: { fontSize: 10, offset: 7 }
      },
      title: { text: "Gas Price", fontSize: 11, rotation: { value: -90, unit: "degrees" } }
    })
    .editYAxis({
      line: { color: "#888" },
      ticksAndLabels: { ticks: { color: "#888" }, labels: { color: "black" } },
      title: { color: "black", fontWeight: 700 }
    })
    .createTitle({ text: "Natural Gas and Carbon Price Regression", titleStyle: { fontSize: 13 }, subtitleStyle: { fontSize: 10, fontStyle: "italic" } })
    .editTitle({ subtitle: "Source: https://www.investing.com, FRED Economic Data", gap: 1, offset: -13 }).editTitle({ alongOffset: -33.123046875, titleStyle: { fontWeight: 700, color: "black" }, subtitleStyle: { color: "black" } });
}