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
    .createGuides({
      grid: { horizontal: false, vertical: { count: 31, color: "#ddd" } },
      axes: {
        x: {
          line: { color: "#888" },
          ticksAndLabels: {
            count: 31,
            ticks: { length: 5, color: "#888" },
            labels: { fontSize: 10, offset: 7, color: "black", fontFamily: "sans-serif" }
          },
          title: {
            text: "Average of b",
            fontSize: 11,
            fontWeight: "bold",
            offset: 28,
            color: "black",
            fontFamily: "sans-serif"
          }
        },
        y: {
          line: { color: "#888" },
          ticksAndLabels: {
            labels: { fontSize: 10, offset: 7, color: "black", fontFamily: "sans-serif" }
          },
          title: {
            text: "a",
            fontSize: 11,
            fontWeight: "bold",
            offset: 28,
            color: "black",
            fontFamily: "sans-serif"
          }
        }
      }
    });
}
