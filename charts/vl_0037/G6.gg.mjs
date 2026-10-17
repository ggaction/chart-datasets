// DOCS: actual delivered doc-6c2c08869091f6a0 (createBarPlot), doc-fc11e9fb291905d1 (createBarPlot), doc-bedf05337affd6f4 (bar chart recipe)
import { chart } from "ggaction";
import data from "./data.json";

// DOCS: doc-6c2c08869091f6a0 createBarPlot; doc-fc11e9fb291905d1 createBarPlot
export function buildChart() {
  return chart()
    .createCanvas({
      width: 1280,
      height: 342,
      margin: { left: 35, top: 5, right: 5, bottom: 37 }
    })
    .createData({ id: "source", values: data })
    .createBarPlot({
      x: {
        field: "b",
        fieldType: "quantitative",
        aggregate: "mean"
      },
      y: {
        field: "a",
        fieldType: "nominal"
      },
      guides: false
    })
    .encodeBarWidth({ band: 1 })
    .editXScale({ domain: [0, 6.5] })
    .editYScale({ domain: ["C", "D", "E"], paddingInner: 0.1, paddingOuter: 0.05 })
    .createXAxis({
      line: {},
      ticksAndLabels: {
        count: 31,
        ticks: { length: 5 },
        labels: { fontSize: 10, offset: 7 }
      },
      title: {
        text: "Average of b",
        fontSize: 11,
        offset: 28
      }
    })
    .editXAxis({
      line: { color: "#888" },
      ticksAndLabels: {
        ticks: { color: "#888" },
        labels: { color: "black", fontFamily: "sans-serif" }
      },
      title: { color: "black", fontFamily: "sans-serif", fontWeight: "bold" }
    })
    .createYAxis({
      line: {},
      ticksAndLabels: {
        labels: { fontSize: 10, offset: 7 }
      },
      title: {
        text: "a",
        fontSize: 11,
        offset: 28
      }
    })
    .editYAxis({
      line: { color: "#888" },
      ticksAndLabels: {
        labels: { color: "black", fontFamily: "sans-serif" }
      },
      title: { color: "black", fontFamily: "sans-serif", fontWeight: "bold" }
    })
    .createVerticalGrid({ count: 31, color: "#ddd" });
}
