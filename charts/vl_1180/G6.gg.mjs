// DOCS: doc-e790db38fc2a278a, doc-2e6240c00cb297cc, doc-2bd5de4bd99e314a
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({
      width: 491,
      height: 451,
      margin: { left: 32.5, top: 14, right: 58.5, bottom: 37 }
    })
    .createData({ values: data })
    .createScatterPlot({
      x: { field: "x" },
      y: { field: "y" },
      guides: false
    })
    .editXScale({ type: "linear", domain: [0, 20] })
    .editYScale({ type: "linear", domain: [0, 20] })
    .encodePointRadius({ value: 6.123724356957945 })
    .encodeStroke({
      field: "id",
      fieldType: "nominal",
      scale: {
        type: "ordinal",
        domain: [1, 2, 3],
        range: ["#4c78a8", "#f58518", "#e45756"]
      }
    })
    .encodeShape({
      field: "z",
      fieldType: "nominal",
      scale: {
        type: "ordinal",
        domain: ["a", "b", "c"],
        range: ["circle", "square", "triangle-up"]
      }
    })
    .editPointMark({ fill: "none", opacity: 0.7, strokeWidth: 2 })
  .selectMarks({ id: "shape-c", field: "z", op: "eq", value: "c" })
  .highlightMarks({ size: 0.5513288954217921, fill: "none", offset: { x: 0, y: 2.3807820171598935 } })
  .selectMarks({ id: "shape-b", field: "z", op: "eq", value: "b" })
  .highlightMarks({ size: 1.2732395447351628, fill: "none" })
    .createXAxis({
      line: {},
      ticksAndLabels: {
        values: [0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20],
        ticks: {},
        labels: {
          fontSize: 10,
          fontFamily: "sans-serif",
          offset: 8
        }
      },
      title: {
        text: "x",
        fontSize: 11,
        fontWeight: "bold",
        fontFamily: "sans-serif",
        offset: 28
      }
    })
    .editXAxis({
      line: { color: "#888" },
      ticksAndLabels: {
        ticks: { color: "#888" },
        labels: { color: "black" }
      },
      title: { color: "black" }
    })
    .createYAxis({
      line: {},
      ticksAndLabels: {
        values: [0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20],
        ticks: {},
        labels: {
          fontSize: 10,
          fontFamily: "sans-serif",
          offset: 8
        }
      },
      title: {
        text: "y",
        fontSize: 11,
        fontWeight: "bold",
        fontFamily: "sans-serif",
        offset: 25.9
      }
    })
    .editYAxis({
      line: { color: "#888" },
      ticksAndLabels: {
        ticks: { color: "#888" },
        labels: { color: "black" }
      },
      title: { color: "black" }
    })
    .createGrid({ horizontal: {}, vertical: {} })
    .editGrid({
      horizontal: { color: "#ddd" },
      vertical: { color: "#ddd" }
    })
    .createLegend({
      channels: ["stroke"],
      labels: { fontSize: 10, fontFamily: "sans-serif" }
    })
    .createLegend({
      channels: ["shape"],
      labels: { fontSize: 10, fontFamily: "sans-serif" }
    });
}