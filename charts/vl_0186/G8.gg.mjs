// DOCS: doc-e790db38fc2a278a doc-2e6240c00cb297cc doc-964c0bc52c92a0d3
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({
      width: 534,
      height: 347,
      margin: { left: 53, top: 10, right: 81, bottom: 37 }
    })
    .createData({ values: data })
    .createFoldData({ id: "folded", fields: ["stress"] })
    .createScatterPlot({
      x: { field: "shearrate", fieldType: "quantitative" },
      y: { field: "value", fieldType: "quantitative" },
      guides: false
    })
    .editXScale({ type: "log", domain: [0.0001, 10000] })
    .editYScale({ type: "log", domain: [1, 1000] })
    .encodeColor({ field: "vol_frac", fieldType: "nominal" })
    .editColorScale({ type: "ordinal", domain: ["0.68", "0.7", "0.72", "0.74", "0.76", "0.78", "0.8"], range: ["#4c78a8", "#f58518", "#e45756", "#72b7b2", "#54a24b", "#eeca3b", "#b279a2"] })
    .encodeOpacity({ value: 0.55 })
    .encodeShape({ field: "key", fieldType: "nominal" })
    .editShapeScale({ domain: ["stress"], range: ["circle"] })
    .encodePointRadius({ value: 5 })
    .createXAxis({ line: {}, ticksAndLabels: { ticks: {}, labels: { fontSize: 10, offset: 7 } }, title: { text: "shearrate", fontSize: 11, offset: 26 } })
    .editXAxisLine({ color: "#888" })
    .editXAxisTicks({ color: "#888" })
    .editXAxisLabels({ fontFamily: "sans-serif" })
    .editXAxisTitle({ fontWeight: "bold", fontFamily: "sans-serif" })
    .createYAxis({ line: {}, ticksAndLabels: { ticks: {}, labels: { fontSize: 10, offset: 7 } }, title: { text: "value", fontSize: 11, offset: 42 } })
    .editYAxisLine({ color: "#888" })
    .editYAxisTicks({ color: "#888" })
    .editYAxisLabels({ fontFamily: "sans-serif" })
    .editYAxisTitle({ fontWeight: "bold", fontFamily: "sans-serif" })
    .createGrid({ horizontal: {}, vertical: {} })
    .editHorizontalGrid({ color: "#ddd" })
.editVerticalGrid({ color: "#ddd" })
    .createGuides({ axes: false, grid: false, legend: { channels: ["color"], title: "vol_frac", titleStyle: { fontSize: 11, fontWeight: "bold" }, labels: { fontSize: 10, fontFamily: "sans-serif" }, symbol: { layers: [{ type: "point", shape: "circle", size: 5 }] } } })
    .editLegendBlock({ target: "scatterPlot", channel: "color", symbol: { opacity: 0.7 } })
    .createGuides({ axes: false, grid: false, legend: { channels: ["shape"], title: "key", titleStyle: { fontSize: 11, fontWeight: "bold", color: "black" }, labels: { fontSize: 10, color: "black" }, symbol: { layers: [{ type: "point", shape: "circle", size: 5, fill: "black" }] } } })
    .editLegendBlock({ target: "scatterPlot", channel: "shape", symbol: { opacity: 0.385 } });
}