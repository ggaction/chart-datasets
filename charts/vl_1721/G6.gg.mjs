// DOCS: doc-e790db38fc2a278a, doc-2e6240c00cb297cc, doc-2bd5de4bd99e314a
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({ width: 498, height: 746, margin: { left: 39, top: 10, right: 159, bottom: 436 } })
    .createData({ values: data })
    .filterData({ id: "validHp", field: "Horsepower", predicate: { op: "gte", value: 0 } })
    .filterData({ id: "validMpg", field: "Miles_per_Gallon", predicate: { op: "gte", value: 0 } })
    .createScatterPlot({
      x: "Horsepower",
      y: "Miles_per_Gallon",
      guides: false
    })
    .editXScale({ domain: [0, 240] })
    .editYScale({ domain: [0, 50] })
    .encodeColor({ field: "Origin" })
    .editColorScale({
      domain: ["Europe", "Japan", "USA"],
      range: ["#4c78a8", "#f58518", "#e45756", "#72b7b2", "#54a24b", "#eeca3b", "#b279a2", "#ff9da6", "#9d755d", "#bab0ac"]
    })
    .encodeSize({ field: "Horsepower" })
    .editSizeScale({ domain: [0, 230], range: [Math.PI, 361 * Math.PI / 4] })
    .editPointMark({ target: "scatterPlot", stroke: false, opacity: 0.7 })
    .encodeOpacity({ field: "Weight_in_lbs" })
    .editOpacityScale({ domain: [1613, 5140], range: [0.3, 0.8] })
    .createXAxis({
      line: {},
      ticksAndLabels: {
        values: [0, 40, 80, 120, 160, 200, 240],
        ticks: {},
        labels: { fontSize: 10, fontFamily: "sans-serif", offset: 7 }
      },
      title: { text: "Horsepower", fontSize: 11, fontWeight: 700, fontFamily: "sans-serif", offset: 31 }
    })
    .createYAxis({
      line: {},
      ticksAndLabels: {
        values: [0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50],
        ticks: {},
        labels: { fontSize: 10, fontFamily: "sans-serif", offset: 7 }
      },
      title: { text: "Miles_per_Gallon", fontSize: 11, fontWeight: 700, fontFamily: "sans-serif", offset: 28 }
    })
    .createGrid({
      horizontal: true,
      vertical: true
    })
    .editHorizontalGrid({ color: "#ddd", lineWidth: 1 })
    .editVerticalGrid({ color: "#ddd", lineWidth: 1 })
    .createLegend({
      channels: ["opacity"],
      labels: { format: ",.0f", fontSize: 10 },
      titleStyle: { fontSize: 11 }
    })
    .editLegendTitle({ fontWeight: 700 })
    .editLegendBorder({
      border: { padding: 30, color: "lightgrey", lineWidth: 1 }
    })
    .createLegend({
      channels: ["color", "size"],
      labels: { fontSize: 10 },
      titleStyle: { fontSize: 11 }
    })
    .editLegendTitle({ fontWeight: 700 })
    .editLegendBorder({
      border: { padding: 30, color: "lightgrey", lineWidth: 1 }
    })
    .editLegendSymbols({ symbol: { layers: [{ type: "point", size: 5, stroke: "black", strokeWidth: 3 }] } })
    .editLegendBlock({ target: "scatterPlot", channel: "size", values: [0, 50, 100, 150, 200] })
    .editLegendBlock({ target: "scatterPlot", channel: "opacity", values: [2000, 2500, 3000, 3500, 4000, 4500, 5000] })
    .editLegendBlock({ target: "scatterPlot", channel: "color", symbol: { size: 25 * Math.PI, stroke: "black", strokeWidth: 3, opacity: 0.7 } })
    .editLegendBlock({ target: "scatterPlot", channel: "size", symbol: { fill: "rgba(0,0,0,0.7)", stroke: "transparent", strokeWidth: 3, opacity: 0.7 } })
    .editLegendBlock({ target: "scatterPlot", channel: "opacity", symbol: { size: 25 * Math.PI, fill: "rgba(0,0,0,0.7)", stroke: "transparent", strokeWidth: 3 } });
}