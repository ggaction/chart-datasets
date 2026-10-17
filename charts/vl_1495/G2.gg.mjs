// DOCS: doc-b11b4627b143730d, doc-76573a465e2b6a33, doc-071c93dff3a5ea2e
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({ width: 455, height: 347, margin: { left: 47, top: 10, right: 8, bottom: 37 } })
    .createData({ values: data })
    .createLinePlot({
      x: { field: "x", fieldType: "quantitative" },
      y: { field: "y", fieldType: "quantitative" },
      guides: false
    })
    .editXScale({ domain: [0, 3000] })
    .editYScale({ domain: [0.2, 0.7] })
    .editLineMark({ stroke: "red", strokeWidth: 3 })
    .createGrid({ horizontal: { color: "#ddd" }, vertical: { color: "#ddd" } })
    .createAxes({ 
      x: {
        ticksAndLabels: {
          values: [0, 400, 800, 1200, 1600, 2000, 2400, 2800],
          ticks: { color: "#888", length: 5 },
          labels: { format: ",", fontSize: 10, fontFamily: "sans-serif", color: "black", offset: 7 }
        },
        title: { text: "Iterations", fontSize: 11, fontWeight: 700, fontFamily: "sans-serif", color: "black", offset: 28 },
        line: { color: "#888" }
      },
      y: {
        ticksAndLabels: {
          values: [0.2, 0.25, 0.3, 0.35, 0.4, 0.45, 0.5, 0.55, 0.6, 0.65, 0.7],
          ticks: { color: "#888", length: 5 },
          labels: { format: ".2f", fontSize: 10, fontFamily: "sans-serif", color: "black", offset: 7 }
        },
        title: { text: "cost", fontSize: 11, fontWeight: 700, fontFamily: "sans-serif", color: "black", offset: 38, rotation: { value: -90, unit: "degrees" } },
        line: { color: "#888" }
      }
    });
}