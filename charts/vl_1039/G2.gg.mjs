// DOCS: doc-d9e3b1b7add0d2c6, doc-ed5155a9b2cc3bf8, doc-7f2c254224fc4908
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({ width: 613, height: 583, margin: { left: 53, top: 46, right: 10, bottom: 37 } })
    .editCanvas({ background: "#FeFeF8" })
    .createData({ values: data })
    .filterData({ id: "fit", field: "MedianWeeklyWage", noneOf: ["1,054.10"] })
    .createComputedData({ id: "fitX", as: "MedianHPriceNum", expression: { op: "toNumber", operand: { field: "MedianHPrice" } } })
    .createComputedData({ id: "fitY", as: "MedianWeeklyWageNum", expression: { op: "toNumber", operand: { field: "MedianWeeklyWage" } } })
    .createScatterPlot({ x: { field: "MedianHPriceNum", scale: { domain: [0, 1400000], nice: false } }, y: { field: "MedianWeeklyWageNum" }, guides: false })
    .editYScale({ domain: [0, 1000] })
    .encodeOpacity({ value: 0.7 })
    .editPointMark({ fill: "rgb(0,47,167)", stroke: false })
    .encodePointRadius({ value: 5 })
    .createGrid({ vertical: { scale: "x", color: "#ddd", values: [0, 100000, 200000, 300000, 400000, 500000, 600000, 700000, 800000, 900000, 1000000, 1100000, 1200000, 1300000, 1400000] }, horizontal: { scale: "y", color: "#ddd", values: [0, 100, 200, 300, 400, 500, 600, 700, 800, 900, 1000] } })
    .createRegressionData({ id: "regression", x: "MedianHPriceNum", y: "MedianWeeklyWageNum" })
    .editRegressionData({ target: "regression", predict: { domain: [0, 1400000], steps: 2 } })
    .createLinePlot({ x: { field: "MedianHPriceNum" }, y: { field: "MedianWeeklyWageNum" }, guides: false })
    .encodeStroke({ value: "grey" })
    .encodeStrokeWidth({ value: 2 })
    .createSummaryData({ id: "r2summary", source: "fitY", aggregates: [{ op: "count", as: "N" }] })
    .createComputedData({ id: "sourceDisplay", as: "R2", expression: { constant: "R²: 0.17" } })
    .createTextMark({ data: "sourceDisplay", fontSize: 11, fill: "grey" })
    .encodeText({ target: "text", field: "R2" })
    .encodeX({ target: "text", datum: 1400000 })
    .encodeY({ target: "text", datum: 1010 })
    .editTextMark({ target: "text", align: "right", baseline: "middle" })
    .createAxes({
      x: {
        line: { color: "#888" },
        ticksAndLabels: {
          values: [0, 100000, 200000, 300000, 400000, 500000, 600000, 700000, 800000, 900000, 1000000, 1100000, 1200000, 1300000, 1400000],
          ticks: { length: 5, color: "#888" },
          labels: { fontSize: 10, offset: 7, color: "black", format: ",.0f", flush: true, labelMap: [{ value: 100000, label: "" }, { value: 300000, label: "" }, { value: 500000, label: "" }, { value: 700000, label: "" }, { value: 900000, label: "" }, { value: 1100000, label: "" }, { value: 1300000, label: "" }] }
        },
        title: { text: "MedianHPrice", fontSize: 11, fontWeight: 700, color: "black" }
      },
      y: {
        line: { color: "#888" },
        ticksAndLabels: {
          values: [0, 100, 200, 300, 400, 500, 600, 700, 800, 900, 1000],
          ticks: { length: 5, color: "#888" },
          labels: { fontSize: 10, offset: 7, color: "black", format: ",.0f" }
        },
        title: { text: "MedianWeeklyWage", fontSize: 11, fontWeight: 700, color: "black", rotation: { value: -90, unit: "degrees" } }
      }
    })
    .createTitle({ text: "Median House Prices vs Median Weekly Wage", titleStyle: { fontSize: 13, fontWeight: 700, color: "rgb(0, 0, 0)" }, align: "center" })
    .editTitle({ offset: -13, gap: 1 })
    .editTitle({ subtitle: "By English Constituency (2022).  Source:ONS", subtitleStyle: { fontSize: 10, fontStyle: "italic", color: "rgb(0, 0, 0)" } });
}