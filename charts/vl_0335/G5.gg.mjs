// DOCS: doc-6c2c08869091f6a0 (createBarPlot), doc-fc11e9fb291905d1 (createBarPlot)
// DOCS: vl_0335 G1 — integrated bar chart, horizontal bars, quantitative x, nominal y.
// Axes/titles owned by createAxes; the explicit vertical grid stays in
// createGuides. Layout matches the 269x122 canvas with margins
// {left:63, top:5, right:6, bottom:37} (plot 200x80).
// Top-level createBarPlot fields limited to 3: x, y, guides. Dataset is the
// current unique dataset, so no explicit data/id wiring is needed.

import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({
      width: 269,
      height: 122,
      margin: { left: 63, top: 5, right: 6, bottom: 37 }
    })
    .createData({
      id: "runtime",
      values: data
    })
    .createBarPlot({
      x: { field: "Runtime (minutes)", fieldType: "quantitative" },
      y: { field: "Model name", fieldType: "nominal" },
      guides: false
    })
    .createGrid({
      horizontal: false,
      vertical: { color: "#ddd", lineWidth: 1 }
    })
    .createXAxis({
      line: { color: "#888", lineWidth: 1 },
      ticksAndLabels: {
        ticks: { length: 5, color: "#888", lineWidth: 1 },
        labels: { fontSize: 10, color: "black", offset: 8 }
      },
      title: {
        text: "Runtime (minutes)",
        fontSize: 11,
        fontWeight: "bold",
        color: "black",
        offset: 28
      }
    })
    .createYAxis({
      line: { color: "#888", lineWidth: 1 },
      ticksAndLabels: {
        ticks: { length: 5, color: "#888", lineWidth: 1 },
        labels: { fontSize: 10, color: "black", offset: 8 }
      },
      title: {
        text: "Model name",
        fontSize: 11,
        fontWeight: "bold",
        color: "black",
        offset: 55
      }
    })
    .editXScale({ domain: [0, 8] })
    .editYScale({
      domain: ["Model 1", "Model 2", "Model 3", "Model 4"],
      paddingInner: 0.1,
      paddingOuter: 0.05
    })
    .encodeBarWidth({ pixels: 18 });
}
