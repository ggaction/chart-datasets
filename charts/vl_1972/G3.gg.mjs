// DOCS: doc-e790db38fc2a278a (createScatterPlot), doc-2e6240c00cb297cc (createScatterPlot),
// doc-2fcdfbdfb290e440 (editXAxis/scale workflow), doc-bc26da5598d35bae (scatter tutorial)
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({
      width: 243,
      height: 247,
      margin: { left: 33, top: 10, right: 10, bottom: 37 }
    })
    .createData({ id: "source", values: data })
    .createScatterPlot({
      x: { field: "x", fieldType: "quantitative" },
      y: { field: "y", fieldType: "quantitative" },
      guides: false
    })
    .editXScale({ target: "scatterPlot", domain: [0, 5], nice: false })
    .editYScale({ target: "scatterPlot", domain: [0, 9], nice: false })
    .encodeStroke({ value: "#4c78a8" })
    .editPointMark({ fill: "transparent", strokeWidth: 2, opacity: 0.7 })
    .encodePointRadius({ value: 2.7386 })
    .createAxes({
      x: {
        scale: "x",
        line: { color: "#888" },
        ticksAndLabels: {
          count: 6,
          ticks: { color: "#888", length: 5 },
          labels: { fontSize: 10, fontFamily: "sans-serif", offset: 7, color: "black" }
        },
        title: { text: "x", fontSize: 11, fontWeight: "bold", fontFamily: "sans-serif", color: "black", offset: 28 }
      },
      y: {
        scale: "y",
        line: { color: "#888" },
        ticksAndLabels: {
          count: 5,
          ticks: { color: "#888", length: 5 },
          labels: { fontSize: 10, fontFamily: "sans-serif", offset: 7, color: "black" }
        },
        title: { text: "y", fontSize: 11, fontWeight: "bold", fontFamily: "sans-serif", color: "black", offset: 26 }
      }
    })
    .createGrid({
      vertical: { scale: "x", values: [0, 1, 2, 3, 4, 5], color: "#ddd" },
      horizontal: { scale: "y", values: [0, 2, 4, 6, 8], color: "#ddd" }
    });
}
