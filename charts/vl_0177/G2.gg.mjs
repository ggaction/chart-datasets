// DOCS: doc-e790db38fc2a278a createScatterPlot; doc-2e6240c00cb297cc createScatterPlot; doc-b53f98d9f1c94c48 getting-started example
// G1 integrated declaration: facade owns positions + guides; point styling via focused encode/edit calls.
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({
      width: 288,
      height: 247,
      margin: { left: 78, top: 10, right: 10, bottom: 37 }
    })
    .createData({ values: data })
    .createScatterPlot({
      x: { field: "x", fieldType: "quantitative" },
      y: { field: "y", fieldType: "quantitative" },
      guides: {
        legend: false,
        axes: {
          x: {
            line: { color: "#888", lineWidth: 1 },
            ticksAndLabels: {
              ticks: { length: 5, color: "#888", lineWidth: 1 },
              labels: { offset: 8, fontSize: 10, color: "black" }
            },
            title: { text: "x", fontSize: 11, fontWeight: "bold", offset: 27, color: "black" }
          },
          y: {
            line: { color: "#888", lineWidth: 1 },
            ticksAndLabels: {
              ticks: { length: 5, color: "#888", lineWidth: 1 },
              labels: { offset: 8, fontSize: 10, color: "black" }
            },
            title: { text: "y", fontSize: 11, fontWeight: "bold", offset: 70, color: "black" }
          }
        }
      , grid: { horizontal: { color: '#ddd' } }}
    })
    .encodeStroke({ value: "#4c78a8" })
    .encodeOpacity({ value: 0.7 })
    .encodePointRadius({ value: 2.7386 })
    .editPointMark({ fill: "none", strokeWidth: 2 })
    .editXScale({ domain: [0, 7] })
    .editYScale({ type: "log", domain: [1, 10000000] })
    .createVerticalGrid({color:'#ddd'});
}