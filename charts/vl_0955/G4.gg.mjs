import { chart } from "ggaction";
import data from "./data.json";
// DOCS: doc-e790db38fc2a278a doc-2e6240c00cb297cc doc-48c72317a1a99e17

export function buildChart() {
  return chart()
    .createCanvas({ width: 270, height: 283, margin: { left: 39, top: 46, right: 31, bottom: 37 } })
    .createData({ values: data })
    .createComputedData({ id: "numX", as: "x", expression: { op: "toNumber", operand: { field: "Price" } } })
    .createComputedData({ id: "numY", as: "y", expression: { op: "toNumber", operand: { field: "Gas Price" } } })
    .createScatterPlot({ x: "x", y: "y", guides: false })
    .editXScale({ domain: [0, 100] })
    .editYScale({ domain: [0, 70] })
    .editPointMark({ fill: "#4c78a8", stroke: false })
    .encodeOpacity({ value: 0.7, target: "scatterPlot" })
    .encodePointRadius({ value: 2.7386127875258306 })
    .createRegressionData({ id: "reg", x: "x", y: "y" })
    .editRegressionData({ target: "reg", predict: { domain: [0.01, 90.16], steps: 2 } })
    .createLinePlot({ x: "x", y: "y", guides: false })
    .encodeStroke({ value: "firebrick", target: "linePlot" })
    .encodeStrokeWidth({ value: 2, target: "linePlot" })
    .createSummaryData({ id: "annotationSeed", source: "numY", aggregates: [{ op: "count", as: "n" }] })
    .createComputedData({ id: "r2", as: "R2", expression: { constant: "R²: 0.44" } })
    .createTextMark({ fontSize: 11, align: "right", fill: "firebrick" })
    .editTextMark({ target: "text", baseline: "middle", dy: -5 })
    .encodeX({ target: "text", datum: 100 })
    .encodeY({ target: "text", datum: 70 })
    .encodeText({ target: "text", field: "R2" })
    .createXAxis({
      line: { color: "#888" },
      ticksAndLabels: {
        values: [0, 20, 40, 60, 80, 100],
        ticks: { length: 5, color: "#888" },
        labels: { fontSize: 10, offset: 7, color: "black", flush: true }
      },
      title: { text: "Carbon Price €", fontSize: 11, fontWeight: 700, color: "rgb(0, 0, 0)", offset: 28 }
    })
    .createYAxis({
      line: { color: "#888" },
      ticksAndLabels: {
        values: [0, 10, 20, 30, 40, 50, 60, 70],
        ticks: { length: 5, color: "#888" },
        labels: { fontSize: 10, offset: 7, color: "black" }
      },
      title: { text: "Gas Price", fontSize: 11, fontWeight: 700, color: "rgb(0, 0, 0)" }
    })
    .createTitle({
      text: "Natural Gas and Carbon Price Regression",
      titleStyle: { fontSize: 13 },
      alongOffset: -33.123046875
    })
    .editTitle({ offset: -13, gap: 1 })
    .editTitle({
      subtitle: "Source: https://www.investing.com, FRED Economic Data",
      subtitleStyle: { fontSize: 10, fontStyle: "italic", color: "rgb(0, 0, 0)" },
      titleStyle: { fontWeight: 700, color: "rgb(0, 0, 0)" }
    });
}