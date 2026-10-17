// DOCS: doc-e790db38fc2a278a createScatterPlot; doc-2e6240c00cb297cc createScatterPlot; doc-2bd5de4bd99e314a Basic Charts; doc-76573a465e2b6a33 createLinePlot/createScatterPlot facade point styles; doc-aff0694302d3fc9f createScatterPlot
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    // Outer canvas 243x267 with frozen source margins (plot area 200x200)
    .createCanvas({
      width: 243,
      height: 267,
      margin: { left: 33, top: 30, right: 10, bottom: 37 }
    })
    // Raw immutable dataset
    .createData({ values: data, id: "source" })
    // Integrated high-level scatter facade: x and y together, guides owned separately
    .createScatterPlot({
      x: { field: "x", fieldType: "quantitative" },
      y: { field: "y", fieldType: "quantitative" },
      guides: false
    })
    // Scale ownership moves to focused scale editors
    .editXScale({ domain: [0, 40] })
    .editYScale({ domain: [0, 4] })
    // Constant mark appearance: unfilled-looking black outline, semi-transparent
    .editPointMark({ stroke: "black", strokeWidth: 2, opacity: 0.7 })
    // Source size 2000 (area) -> circle radius sqrt(2000)/2
    .encodePointRadius({ value: 22.360679774997898 })
    // Explicit guides decomposed: complete X/Y axes then grid directions
    .createAxes({
      x: {
        line: { color: "#888", lineWidth: 1 },
        ticksAndLabels: {
          count: 5,
          ticks: { length: 5, color: "#888", lineWidth: 1 },
          labels: { fontSize: 10, fontFamily: "sans-serif", offset: 7, color: "black" }
        },
        title: { text: "x", fontSize: 11, fontWeight: "bold", fontFamily: "sans-serif", offset: 28, color: "black" }
      },
      y: {
        line: { color: "#888", lineWidth: 1 },
        ticksAndLabels: {
          count: 5,
          ticks: { length: 5, color: "#888", lineWidth: 1 },
          labels: { fontSize: 10, fontFamily: "sans-serif", offset: 7, color: "black" }
        },
        title: { text: "y", fontSize: 11, fontWeight: "bold", fontFamily: "sans-serif", offset: 26, color: "black" }
      }
    })
    .createGrid({ horizontal: { color: "#ddd" }, vertical: { color: "#ddd" } });
}