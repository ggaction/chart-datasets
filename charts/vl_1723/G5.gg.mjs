// DOCS: doc-e790db38fc2a278a, doc-2e6240c00cb297cc, doc-7f2c254224fc4908, doc-81f3b4da1bfe0908, doc-7184b02978bdf5d1, doc-76573a465e2b6a33, doc-dfae58344d5a524e, doc-223193483293cd8c, doc-bc26da5598d35bae, doc-99b0513458edff76, doc-03a2b0935e71ba1f, doc-964c0bc52c92a0d3
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({ width: 451, height: 571, margin: { left: 39, top: 10, right: 112, bottom: 261 } })    .createData({ values: data })
    .filterData({ id: "mpg-valid", field: "Miles_per_Gallon", predicate: { op: "gte", value: 0 } })
    .filterData({ id: "hp-valid", field: "Horsepower", predicate: { op: "gte", value: 0 } })
    .createScatterPlot({
      x: { field: "Horsepower" },
      y: { field: "Miles_per_Gallon" },
      guides: false
    })
    .editXScale({ domain: [0, 240] })
    .editYScale({ domain: [0, 50] })
    .encodeColor({ field: "Origin" })
    .editColorScale({ domain: ["Europe", "Japan", "USA"], range: ["#4c78a8", "#f58518", "#e45756", "#72b7b2", "#54a24b", "#eeca3b", "#b279a2", "#ff9da6", "#9d755d", "#bab0ac"] })
    .encodeSize({ field: "Horsepower" })
    .editSizeScale({ domain: [0, 230], range: [4 * Math.PI / 4, 361 * Math.PI / 4] })
    .encodeOpacity({ field: "Weight_in_lbs" })
    .editOpacityScale({ domain: [1613, 5140], range: [0.3, 0.8] })
    .editPointMark({ stroke: false })
    .createXAxis({
      line: {},
      ticksAndLabels: {
        values: [0, 20, 40, 60, 80, 100, 120, 140, 160, 180, 200, 220, 240],
        ticks: { length: 5 },
        labels: { fontSize: 10, offset: 7, flush: true, labelMap: [ { value: 0, label: "0" }, { value: 20, label: "" }, { value: 40, label: "40" }, { value: 60, label: "" }, { value: 80, label: "80" }, { value: 100, label: "" }, { value: 120, label: "120" }, { value: 140, label: "" }, { value: 160, label: "160" }, { value: 180, label: "" }, { value: 200, label: "200" }, { value: 220, label: "" }, { value: 240, label: "240" } ] }
      },
      title: { text: "Horsepower", fontSize: 11, offset: 31 }
    })
    .editXAxisLine({ color: "#888" })
    .editXAxisTicksAndLabels({ ticks: { color: "#888" }, labels: { fontFamily: "sans-serif" } })
    .editXAxisTitle({ color: "black", fontWeight: 700 })
    .createYAxis({
      line: {},
      ticksAndLabels: {
        values: [0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50],
        ticks: { length: 5 },
        labels: { fontSize: 10, offset: 7 }
      },
      title: { text: "Miles_per_Gallon", fontSize: 11, offset: 28 }
    })
    .editYAxisLine({ color: "#888" })
    .editYAxisTicksAndLabels({ ticks: { color: "#888" }, labels: { fontFamily: "sans-serif" } })
    .editYAxisTitle({ color: "black", fontWeight: 700 })
    .createGrid({ horizontal: { color: "#ddd", values: [0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50] }, vertical: { color: "#ddd", values: [0, 20, 40, 60, 80, 100, 120, 140, 160, 180, 200, 220, 240] } })
    .createLegend({ channels: ["color", "size"], labels: { fontSize: 10 }, titleStyle: { fontSize: 11, fontWeight: 700 } })
    .createLegend({ channels: ["opacity"], labels: { fontSize: 10, format: ",.0f" }, titleStyle: { fontSize: 11, fontWeight: 700 } })
    .editLegendSymbols({ symbol: { layers: [{ type: "point", size: 5, stroke: "transparent" }] } })
    .editLegendBlock({ target: "scatterPlot", channel: "size", values: [0, 50, 100, 150, 200] })
    .editLegendBlock({ target: "scatterPlot", channel: "opacity", values: [2000, 2500, 3000, 3500, 4000, 4500, 5000] })
    .editLegendBlock({ target: "scatterPlot", channel: "color", symbol: { size: 25 * Math.PI, stroke: "transparent", opacity: 0.7 } })
    .editLegendBlock({ target: "scatterPlot", channel: "size", symbol: { fill: "rgba(0,0,0,0.7)", stroke: "transparent", strokeWidth: 0, opacity: 0.7 } })
    .editLegendBlock({ target: "scatterPlot", channel: "opacity", symbol: { size: 25 * Math.PI, fill: "rgba(0,0,0,0.7)", stroke: "transparent", strokeWidth: 0 } }).editLegendLayout({ position: "top-right", blockLayout: "row" }).editCanvas({ width: 345, height: 347, margin: { left: 39, top: 10, right: 6, bottom: 37 } })
.applyTextMetrics({ profile: { schemaVersion: 1, id: "legend-title-metrics", measurements: [{ text: "Weight_in_lbs", fontFamily: "sans-serif", fontSize: 11, fontWeight: 700, width: 74.375 }] } });;
}