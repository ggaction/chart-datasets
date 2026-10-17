// DOCS: actual delivered doc-* IDs.
// doc-e790db38fc2a278a (createScatterPlot card)
// doc-2e6240c00cb297cc (docs/reference/actions/charts-data.md createScatterPlot)
// doc-2fcdfbdfb290e440 (examples/edit-scales-and-guides/program.js)
// doc-bc26da5598d35bae (docs/tutorials/scatterplot.md)
// doc-b53f98d9f1c94c48 (examples/getting-started/program.js)

import { chart } from "ggaction";
import data from "./data.json";

const gridValues = [0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20];
const colorRange = ["#4c78a8", "#f58518", "#e45756", "#72b7b2"];

export function buildChart() {
  return chart()
    .createCanvas({
      width: 491,
      height: 451,
      margin: { left: 32.5, top: 14, right: 58.5, bottom: 37 }
    })
    .createData({ id: "data", values: data })
    .createScatterPlot({ x: { field: "x" }, y: { field: "y" }, guides: false })
    .editXScale({ domain: [0, 20] })
    .editYScale({ domain: [0, 20] })
    .encodeShape({ field: "z", fieldType: "nominal" })
    .editShapeScale({
      target: "scatterPlot",
      domain: ["a", "b", "c", "d"],
      range: ["circle", "square", "triangle-up", "plus"]
    })
    .encodeStroke({ field: "id", fieldType: "nominal" })
    .editStrokeScale({ target: "scatterPlot", domain: [1, 2, 3, 4], range: colorRange })
    .encodePointRadius({ value: 6.123724356957945 })
    .editPointMark({ fill: "none", opacity: 0.7, strokeWidth: 2 })
.selectMarks({ id: "shape-d", field: "z", op: "eq", value: "d" })
.highlightMarks({ size: 0.6844935792496234, fill: "none" })
.selectMarks({ id: "shape-b", field: "z", op: "eq", value: "b" })
.highlightMarks({ size: 1.2732395447351628, fill: "none" })
.selectMarks({ id: "shape-c", field: "z", op: "eq", value: "c" })
.highlightMarks({ size: 0.5513288954217921, fill: "none", offset: { x: 0, y: 2.3807820171598935 } })
    .createGrid({
      horizontal: { values: gridValues, color: "#ddd" },
      vertical: { values: gridValues, color: "#ddd" }
    })
    .createXAxis({
      ticksAndLabels: {
        values: gridValues,
        ticks: { length: 5 },
        labels: { fontSize: 10, fontFamily: "sans-serif", offset: 7 }
      },
      title: { text: "x", fontSize: 11, offset: 28 }
    })
    .editXAxis({ line: { color: "#888" } })
    .createYAxis({
      ticksAndLabels: {
        values: gridValues,
        ticks: { length: 5 },
        labels: { fontSize: 10, fontFamily: "sans-serif", offset: 8 }
      },
      title: { text: "y", fontSize: 11, offset: 25.9 }
    })
    .editYAxis({ line: { color: "#888" } })
    .createLegend({ channels: ["stroke"], labels: { fontSize: 10, fontFamily: "sans-serif" } })
    .createLegend({ channels: ["shape"], labels: { fontSize: 10, fontFamily: "sans-serif" } });
}
