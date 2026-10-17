import { chart } from "ggaction";
import data from "./data.json";
// DOCS: see doc-e790db38fc2a278a and doc-76573a465e2b6a33

export function buildChart() {
  const XVALS = [10,10.5,11,11.5,12,12.5,13,13.5,14,14.5,15,15.5,16,16.5,17,17.5,18,18.5,19,19.5,20];
  const YVALS = [0,10,20,30,40,50,60,70,80,90];
  return chart()
    .createCanvas({ width: 1280, height: 403, margin: { left: 39, top: 66, right: 6, bottom: 37 } })
    .createData({ id: "raw", values: data })
    .createComputedData({ id: "numStock", as: "stockN", expression: { op: "toNumber", operand: { field: "stock" } } })
    .createComputedData({ id: "numBoth", as: "pointsN", expression: { op: "toNumber", operand: { field: "points" } } })
    .createScatterPlot({ x: "stockN", y: "pointsN", guides: false })
    .editXScale({ domain: [10, 20] })
    .editYScale({ domain: [0, 90] })
    .encodeOpacity({ target: "scatterPlot", value: 0.7 })
    .editPointMark({ fill: "#d21200" })
    .encodePointRadius({ value: 2.7386127875258306 })
    .createRegressionData({ id: "reg", x: "pointsN", y: "stockN" })
    .editRegressionData({ target: "reg", predict: { domain: [58, 81], steps: 2 } })
    .createLinePlot({ x: "stockN", y: "pointsN", guides: false })
    .encodeStroke({ target: "linePlot", value: "black" })
    .encodeStrokeWidth({ target: "linePlot", value: 2 })
    .createXAxis({
      line: {},
      ticksAndLabels: {
        values: XVALS,
        ticks: {},
        labels: { fontSize: 10, offset: 7, flush: true }
      },
      title: { text: "Stock Price", fontSize: 11, offset: 27 }
    })
    .editXAxisLine({ color: "#888" })
    .editXAxisTicksAndLabels({
      ticks: { color: "#888" },
      labels: { format: ".1f", color: "black" }
    })
    .editXAxisTitle({ fontWeight: 700, color: "black" })
    .createYAxis({
      line: {},
      ticksAndLabels: {
        values: YVALS,
        ticks: {},
        labels: { fontSize: 10, offset: 7 }
      },
      title: { text: "Points Scored", fontSize: 11, offset: 27, rotation: { value: -90, unit: "degrees" } }
    })
    .editYAxisLine({ color: "#888" })
    .editYAxisTicksAndLabels({
      ticks: { color: "#888" },
      labels: { color: "black" }
    })
    .editYAxisTitle({ fontWeight: 700, color: "black" })
    .createGrid({
      horizontal: { scale: "y", values: YVALS },
      vertical: { scale: "x", values: XVALS }
    })
    .editHorizontalGrid({ color: "#ddd" })
    .editVerticalGrid({ color: "#ddd" })
    .createSummaryData({
      id: "r2Summary",
      aggregates: [{ op: "count", as: "count" }]
    })
    .createComputedData({
      id: "r2Computed",
      as: "R2",
      expression: { constant: "R\u00B2: 0.68" }
    })
    .createTextMark({ id: "r2Text", data: "r2Computed" })
    .encodeText({ target: "r2Text", field: "R2" })
    .encodeX({ target: "r2Text", datum: 20 })
    .encodeY({ target: "r2Text", datum: 91.5 })
    .editTextMark({ fontSize: 11, align: "right", baseline: "middle" })
    .editTextMark({ fill: "firebrick" })
    .createTitle({
      text: "Manchester United Stock Price vs Points",
      titleStyle: { fontSize: 18 },
      subtitleStyle: { fontSize: 12, fontStyle: "italic" }
    })
    .editTitle({ subtitle: "Figure 8: Stock price of MANU, 2014-2022\nSource: Yahoo Finance", gap: 1 })
    .editTitle({ alongOffset: -33.123, titleStyle: { fontWeight: 700 } });
}
