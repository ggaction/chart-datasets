// DOCS: doc-e790db38fc2a278a, doc-2e6240c00cb297cc, doc-76573a465e2b6a33
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({ width: 613, height: 583, margin: { left: 53, top: 46, right: 10, bottom: 37 } })
    .editCanvas({ background: "#FeFeF8" })
    .createData({ values: data })
    .filterData({ id: "validRaw", field: "MedianWeeklyWage", noneOf: ["1,054.10"] })
    .createComputedData({ id: "px", as: "MedianHPriceNum", expression: { op: "toNumber", operand: { field: "MedianHPrice" } } })
    .createComputedData({ id: "py", as: "MedianWeeklyWageNum", expression: { op: "toNumber", operand: { field: "MedianWeeklyWage" } } })
    .createScatterPlot({ x: "MedianHPriceNum", y: "MedianWeeklyWageNum", guides: false })
    .encodePointRadius({ value: 5 })
    .editPointMark({ fill: "rgb(0,47,167)", stroke: false })
    .encodeOpacity({ target: "scatterPlot", value: 0.7 })
    .editXScale({ domain: [0, 1400000] })
    .editYScale({ domain: [0, 1000] })
    .createGrid({
      horizontal: { values: [0, 100, 200, 300, 400, 500, 600, 700, 800, 900, 1000] },
      vertical: { values: [0, 200000, 400000, 600000, 800000, 1000000, 1200000, 1400000] }
    })
    .editHorizontalGrid({ color: "#ddd" })
    .editVerticalGrid({ color: "#ddd" })
    .createXAxis({
      line: {},
      ticksAndLabels: {
        values: [0, 200000, 400000, 600000, 800000, 1000000, 1200000, 1400000],
        ticks: { length: 5 },
        labels: { fontSize: 10, offset: 7, flush: true }
      },
      title: { text: "MedianHPrice", fontSize: 11, offset: 28 }
    })
    .editXAxis({
      line: { color: "#888" },
      ticksAndLabels: { ticks: { color: "#888" }, labels: { color: "black", format: ",.0f" } },
      title: { fontWeight: 700, color: "rgb(0, 0, 0)" }
    })
    .createYAxis({
      line: {},
      ticksAndLabels: {
        values: [0, 100, 200, 300, 400, 500, 600, 700, 800, 900, 1000],
        ticks: { length: 5 },
        labels: { fontSize: 10, offset: 7 }
      },
      title: { text: "MedianWeeklyWage", fontSize: 11 }
    })
    .editYAxis({
      line: { color: "#888" },
      ticksAndLabels: { ticks: { color: "#888" }, labels: { color: "black", format: ",.0f" } },
      title: { fontWeight: 700, color: "rgb(0, 0, 0)" }
    })
    .createTitle({ text: "Median House Prices vs Median Weekly Wage", titleStyle: { fontSize: 13 }, align: "center" })
    .editTitle({ offset: -13, gap: 1, titleStyle: { fontWeight: 700, color: "rgb(0, 0, 0)" } })
    .editTitle({ subtitle: "By English Constituency (2022).  Source:ONS", subtitleStyle: { fontSize: 10, fontStyle: "italic", color: "rgb(0, 0, 0)" } })
    .createRegressionData({ id: "reg", x: "MedianHPriceNum", y: "MedianWeeklyWageNum" })
    .editRegressionData({ target: "reg", predict: { domain: [0, 1400000], steps: 2 } })
    .createLinePlot({ x: "MedianHPriceNum", y: "MedianWeeklyWageNum", guides: false })
    .encodeStroke({ target: "linePlot", value: "grey" })
    .encodeStrokeWidth({ target: "linePlot", value: 2 })
    .createSummaryData({ id: "annotationSeed", source: "py", aggregates: [{ op: "count", as: "n" }] })
    .createComputedData({ id: "r2text", as: "R2", expression: { constant: "R²: 0.17" } })
    .createTextMark({ fontSize: 11, fill: "grey", align: "right" })
    .editTextMark({ baseline: "middle", dy: -5 })
    .encodeX({ datum: 1400000 })
    .encodeY({ datum: 1000 })
    .encodeText({ field: "R2" });
}