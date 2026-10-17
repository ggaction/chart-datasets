// DOCS: doc-e790db38fc2a278a, doc-2e6240c00cb297cc, doc-76573a465e2b6a33
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({ width: 534, height: 443, margin: { left: 39, top: 51, right: 105, bottom: 37 } })
    .editCanvas({ background: "white" })
    .createData({ values: data })
    .createComputedData({ id: "typedTotal", as: "totalNum", expression: { op: "toNumber", operand: { field: "total" } } })
    .createComputedData({ id: "fullEligibleTypedDataset", as: "valueNum", expression: { op: "toNumber", operand: { field: "value" } } })
    .createScatterPlot({ x: "totalNum", y: "valueNum", guides: false })
    .encodeStroke({ field: "continent", fieldType: "nominal" })
    .editStrokeScale({ target: "scatterPlot", domain: ["Africa", "Asia", "Europe", "North America", "South America"], range: ["#1b9e77", "#d95f02", "#7570b3", "#e7298a", "#66a61e", "#e6ab02", "#a6761d", "#666666"] })
    .encodePointRadius({ value: Math.sqrt(30) / 2 })
    .editPointMark({ fill: "transparent", strokeWidth: 2 })
    .createRegressionData({ id: "regression", x: "totalNum", y: "valueNum" })
    .editRegressionData({ target: "regression", predict: { domain: [833541000000, 1012850000000], steps: 2 } })
    .createLinePlot({ x: "totalNum", y: "valueNum", guides: false })
    .encodeStroke({ target: "linePlot", value: "black" })
    .encodeStrokeWidth({ target: "linePlot", value: 2 })
    .editXScale({ domain: [0, 5000000000000] })
    .editYScale({ domain: [0, 16] })
    .createXAxis({
      ticksAndLabels: {
        values: [0, 2000000000000, 4000000000000],
        ticks: { length: 5 },
        labels: { fontSize: 10, offset: 7, flush: true }
      },
      title: { text: "Total GDP in US$", fontSize: 11 }
    })
    .createYAxis({
      ticksAndLabels: {
        values: [0, 2, 4, 6, 8, 10, 12, 14, 16],
        ticks: { length: 5 },
        labels: { fontSize: 10, offset: 7 }
      },
      title: { text: "Inflation rate (%)", fontSize: 11, rotation: { value: -90, unit: "degrees" } }
    })
    .editXAxisLine({ color: "#888" })
    .editXAxisTicks({ color: "#888" })
    .editXAxisLabels({ color: "black", format: ",.0f" })
    .editXAxisTitle({ fontWeight: 700, color: "black" })
    .editYAxisLine({ color: "#888" })
    .editYAxisTicks({ color: "#888" })
    .editYAxisLabels({ color: "black" })
    .editYAxisTitle({ fontWeight: 700, color: "black" })
    .createGuides({
      axes: false,
      grid: false,
      legend: {
        target: "scatterPlot",
        channels: ["stroke"],
        title: "Continent",
        titleStyle: { fontSize: 11, fontWeight: 700, color: "rgb(0, 0, 0)" },
        labels: { fontSize: 10, color: "rgb(0, 0, 0)" },
        symbol: { layers: [{ type: "point", shape: "circle", size: 5, fill: "transparent", strokeWidth: 1.5 }] }
      }
    })
    .createTitle({
      text: "Is there a correlation between the size of a countries economy and it's growth rate?",
      titleStyle: { fontSize: 13, fontWeight: 700, color: "rgb(0, 0, 0)" },
      alongOffset: -33.123046875
    })
    .editTitle({ offset: -13, gap: 1 })
    .editTitle({ subtitle: "Regression of country GDP size vs GDP growth rate. Source: TheWorldBank", subtitleStyle: { fontSize: 10, fontStyle: "italic", color: "rgb(0, 0, 0)" } })
    .createSummaryData({ id: "ann", source: "fullEligibleTypedDataset", aggregates: [{ op: "count", as: "N" }] })
    .createComputedData({ id: "display", as: "sourceDisplay", expression: { constant: "R²: 0.06" } })
    .createTextMark({ data: "display", fill: "firebrick" })
    .editTextMark({ align: "right", baseline: "middle", fontSize: 11 })
    .encodeText({ field: "sourceDisplay" })
    .encodeX({ datum: 5000000000000 })
    .encodeY({ datum: 16.450704225352112 });
}