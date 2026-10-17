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
        line: {},
        ticksAndLabels: {
          count: 6,
          ticks: { length: 5 },
          labels: { fontSize: 10, fontFamily: "sans-serif", offset: 7 }
        },
        title: { text: "x", fontSize: 11, fontFamily: "sans-serif", offset: 28 }
      },
      y: {
        scale: "y",
        line: {},
        ticksAndLabels: {
          count: 5,
          ticks: { length: 5 },
          labels: { fontSize: 10, fontFamily: "sans-serif", offset: 7 }
        },
        title: { text: "y", fontSize: 11, fontFamily: "sans-serif", offset: 26 }
      }
    })
    .createHorizontalGrid({ scale: "y", values: [0, 2, 4, 6, 8], color: "#ddd" })
    .createVerticalGrid({ scale: "x", values: [0, 1, 2, 3, 4, 5], color: "#ddd" })
    .editXAxis({
      line: { color: "#888" },
      ticksAndLabels: { ticks: { color: "#888" }, labels: { color: "black" } },
      title: { color: "black", fontWeight: "bold" }
    })
    .editYAxis({
      line: { color: "#888" },
      ticksAndLabels: { ticks: { color: "#888" }, labels: { color: "black" } },
      title: { color: "black", fontWeight: "bold" }
    });
}
