import { chart } from "ggaction";
import data from "./data.json";
// DOCS: doc-e790db38fc2a278a, doc-2e6240c00cb297cc, doc-76573a465e2b6a33, doc-08d24a62ced0d1b8, doc-48c72317a1a99e17

export function buildChart() {
  return chart()
    .createCanvas({ width: 451, height: 571, margin: { left: 39, top: 10, right: 112, bottom: 261 } })
    .createData({ values: data })
    .filterData({ id: "hp_valid", field: "Horsepower", range: { min: 0 } })
    .filterData({ id: "scatter_rows", field: "Miles_per_Gallon", range: { min: 0 } })
    .createScatterPlot({
      x: { field: "Horsepower", fieldType: "quantitative" },
      y: { field: "Miles_per_Gallon", fieldType: "quantitative" },
      guides: false
    })
    .editXScale({ domain: [0, 240] })
    .editYScale({ domain: [0, 50] })
    .encodeColor({ field: "Origin", fieldType: "nominal" })
    .encodeSize({ field: "Horsepower", fieldType: "quantitative" })
    .encodeOpacity({ field: "Weight_in_lbs", fieldType: "quantitative" })
    .editColorScale({ domain: ["Europe", "Japan", "USA"], range: ["#4c78a8", "#f58518", "#e45756", "#72b7b2", "#54a24b", "#eeca3b", "#b279a2", "#ff9da6", "#9d755d", "#bab0ac"] })
    .editSizeScale({ domain: [0, 230], range: [3.141592653589793, 283.5287369864788] })
    .editOpacityScale({ domain: [1613, 5140], range: [0.3, 0.8] })
    .createXAxis({
      line: {},
      ticksAndLabels: { values: [0, 40, 80, 120, 160, 200, 240], ticks: {}, labels: { fontSize: 10, offset: 7, flush: true } },
      title: { text: "Horsepower", fontSize: 11, offset: 31 }
    })
    .editXAxisTitle({ fontWeight: 700 })
    .createYAxis({
      line: {},
      ticksAndLabels: { values: [0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50], ticks: {}, labels: { fontSize: 10, offset: 7 } },
      title: { text: "Miles_per_Gallon", fontSize: 11 }
    })
    .editYAxisTitle({ fontWeight: 700 })
    .createHorizontalGrid({ color: "#ddd", lineWidth: 1 })
    .createVerticalGrid({ color: "#ddd", lineWidth: 1 })
    .createLegend({ channels: ["color", "size"], labels: { fontSize: 10, fontFamily: "sans-serif" }, titleStyle: { fontSize: 11, fontWeight: "bold" } })
    .createLegend({ channels: ["opacity"], labels: { fontSize: 10, fontFamily: "sans-serif", format: ",.0f" }, titleStyle: { fontSize: 11, fontWeight: "bold" } })
    .editLegendBlock({ target: "scatterPlot", channel: "size", values: [0, 50, 100, 150, 200] })
    .editLegendBlock({ target: "scatterPlot", channel: "opacity", values: [2000, 2500, 3000, 3500, 4000, 4500, 5000] })
  .editYAxis({ title: { offset: 26.544921875 } })
  .editLegendLayout({ position: "bottom-right", blockLayout: "row" })
  .editCanvas({ width: 345, height: 347, margin: { left: 39, top: 10, right: 6, bottom: 37 } })
  .applyTextMetrics({
    profile: {
      schemaVersion: 1,
      id: "legend-title-metrics",
      measurements: [
        {
          text: "Weight_in_lbs",
          fontFamily: "sans-serif",
          fontSize: 11,
          fontWeight: 700,
          width: 74.375
        }
      ]
    }
  })
}