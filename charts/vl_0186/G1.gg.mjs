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
      x: { field: "shearrate", fieldType: "quantitative", scale: { type: "log", domain: [0.0001, 10000] } },
      y: { field: "value", fieldType: "quantitative", scale: { type: "log", domain: [1, 1000] } },
      guides: false
    })
    .encodeColor({
      field: "vol_frac",
      fieldType: "nominal",
      scale: { type: "ordinal", domain: ["0.68", "0.7", "0.72", "0.74", "0.76", "0.78", "0.8"], range: ["#4c78a8", "#f58518", "#e45756", "#72b7b2", "#54a24b", "#eeca3b", "#b279a2"] }
    })
    .encodeOpacity({ value: 0.55 })
    .encodeShape({
      field: "key",
      fieldType: "nominal",
      scale: { domain: ["stress"], range: ["circle"] }
    })
    .encodePointRadius({ value: 5 })
    .createAxes({
      x: { line: { color: "#888" }, ticksAndLabels: { ticks: { color: "#888" }, labels: { fontSize: 10, offset: 7, fontFamily: "sans-serif" } }, title: { text: "shearrate", fontSize: 11, fontWeight: "bold", fontFamily: "sans-serif", offset: 26 } },
      y: { line: { color: "#888" }, ticksAndLabels: { ticks: { color: "#888" }, labels: { fontSize: 10, offset: 7, fontFamily: "sans-serif" } }, title: { text: "value", fontSize: 11, fontWeight: "bold", fontFamily: "sans-serif", offset: 42 } }
    })
    .createGrid({ horizontal: { color: "#ddd" }, vertical: { color: "#ddd" } })
    .createGuides({ axes: false, grid: false, legend: { channels: ["color"], title: "vol_frac", titleStyle: { fontSize: 11, fontWeight: "bold" }, labels: { fontSize: 10, fontFamily: "sans-serif" }, symbol: { layers: [{ type: "point", shape: "circle", size: 5 }] } } })
    .editLegendBlock({ target: "scatterPlot", channel: "color", symbol: { opacity: 0.7 } })
    .createGuides({ axes: false, grid: false, legend: { channels: ["shape"], title: "key", titleStyle: { fontSize: 11, fontWeight: "bold", color: "black" }, labels: { fontSize: 10, color: "black" }, symbol: { layers: [{ type: "point", shape: "circle", size: 5, fill: "black" }] } } })
    .editLegendBlock({ target: "scatterPlot", channel: "shape", symbol: { opacity: 0.385 } });
}