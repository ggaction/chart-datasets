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
    .encodeStroke({ value: "red" })
    .encodeStrokeWidth({ value: 3 })
    .createGrid({ horizontal: true, vertical: true })
    .editHorizontalGrid({ color: "#ddd" })
    .editVerticalGrid({ color: "#ddd" })
    .createXAxis({
      ticksAndLabels: {
        values: [0, 400, 800, 1200, 1600, 2000, 2400, 2800],
        ticks: { length: 5 },
        labels: { fontSize: 10, fontFamily: "sans-serif", offset: 7 }
      },
      title: { text: "Iterations", fontSize: 11, fontFamily: "sans-serif", offset: 28 },
      line: {}
    })
    .editXAxis({
      line: { color: "#888" },
      ticksAndLabels: { ticks: { color: "#888" }, labels: { format: ",", color: "black" } },
      title: { fontWeight: 700, color: "black" }
    })
    .createYAxis({
      ticksAndLabels: {
        values: [0.2, 0.25, 0.3, 0.35, 0.4, 0.45, 0.5, 0.55, 0.6, 0.65, 0.7],
        ticks: { length: 5 },
        labels: { fontSize: 10, fontFamily: "sans-serif", offset: 7 }
      },
      title: { text: "cost", fontSize: 11, fontFamily: "sans-serif", offset: 38, rotation: { value: -90, unit: "degrees" } },
      line: {}
    })
    .editYAxis({
      line: { color: "#888" },
      ticksAndLabels: { ticks: { color: "#888" }, labels: { format: ".2f", color: "black" } },
      title: { fontWeight: 700, color: "black" }
    });
}