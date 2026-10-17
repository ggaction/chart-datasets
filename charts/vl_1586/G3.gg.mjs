// DOCS: doc-dfae58344d5a524e (createCanvas), doc-e790db38fc2a278a (createScatterPlot),
// doc-bc26da5598d35bae (scatter tutorial), doc-b53f98d9f1c94c48, doc-2fcdfbdfb290e440
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({
      width: 280,
      height: 278,
      margin: { left: 39, top: 41, right: 41, bottom: 37 }
    })
    .createData({ id: "source", values: data })
    .createScatterPlot({
      x: { field: "x", fieldType: "quantitative" },
      y: { field: "y", fieldType: "quantitative" },
      guides: false
    })
    .editXScale({ domain: [0, 20] })
    .editYScale({ domain: [0, 20] })
    .encodeColor({
      field: "cat",
      fieldType: "nominal",
      scale: { domain: ["a", "b"], range: ["#4c78a8", "#f58518"] }
    })
    .encodePointRadius({ value: 35.35533905932738 })
    .editPointMark({ opacity: 1, stroke: false })
    .createAxes({
      x: {
        line: { color: "#888" },
        ticksAndLabels: {
          ticks: { length: 5 },
          labels: { fontSize: 10, offset: 7 }
        },
        title: { text: "x", fontSize: 11, fontWeight: "bold", offset: 28 }
      },
      y: {
        line: { color: "#888" },
        ticksAndLabels: {
          ticks: { length: 5 },
          labels: { fontSize: 10, offset: 7 }
        },
        title: { text: "y", fontSize: 11, fontWeight: "bold", offset: 32 }
      }
    })
    .createGrid({
      horizontal: { color: "blue", lineWidth: 8, zIndex: 1 },
      vertical: { color: "red", lineWidth: 8, zIndex: 2 }
    });
}