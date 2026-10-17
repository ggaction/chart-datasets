// DOCS: actual delivered doc-76573a465e2b6a33, doc-e790db38fc2a278a, doc-48c72317a1a99e17, doc-2e6240c00cb297cc, doc-80198e379a34e5ab
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({
      width: 528,
      height: 508,
      margin: { left: 39, top: 17, right: 89, bottom: 91 }
    })
    .createData({ values: data })
    // G1: x and y together in one high-level point facade; explicit guide tree follows.
    .createScatterPlot({
      x: { field: "x", fieldType: "quantitative" },
      y: { field: "y", fieldType: "quantitative" },
      guides: false
    })
    // Source x scale is null: values map directly onto the 400px plot range.
    .editXScale({ domain: [0, 400] })
    .editYScale({ domain: [0, 10] })
    // Unfilled points: field-driven stroke color (ordinal val palette), constant transparent fill.
    .encodeStroke({
      field: "val",
      fieldType: "ordinal",
      scale: {
        type: "ordinal",
        domain: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        range: [
          "rgb(192, 217, 237)",
          "rgb(172, 208, 230)",
          "rgb(150, 197, 224)",
          "rgb(126, 183, 218)",
          "rgb(102, 170, 211)",
          "rgb(81, 155, 203)",
          "rgb(62, 140, 195)",
          "rgb(44, 124, 186)",
          "rgb(29, 108, 175)",
          "rgb(17, 90, 162)"
        ]
      }
    })
    .encodeSize({
      field: "val",
      fieldType: "quantitative",
      scale: { type: "linear", domain: [0, 10], range: [3.141592653589793, 283.52873698647883] }
    })
    .encodeShape({
      field: "cat",
      fieldType: "nominal",
      scale: {
        type: "ordinal",
        domain: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"],
        range: [
          "circle",
          "square",
          "triangle-up",
          "plus",
          "diamond",
          "triangle-right",
          "triangle-down",
          "triangle-left",
          "circle",
          "square"
        ]
      }
    })
    // Constant unfilled point appearance after the stroke encoding is active.
    .editPointMark({ fill: "none", opacity: 0.7, strokeWidth: 2 })
.selectMarks({ id: "shape-b", field: "cat", op: "eq", value: "b" })
.highlightMarks({ selection: "shape-b", size: 1.2732395447351628, fill: "none" })
.selectMarks({ id: "shape-c", field: "cat", op: "eq", value: "c" })
.highlightMarks({ size: 0.5513288954217921, fill: "none", offset: { x: 0, y: 2.0489484567619356 } })
.selectMarks({ id: "shape-d", field: "cat", op: "eq", value: "d" })
.highlightMarks({ selection: "shape-d", size: 0.6844935792496234, fill: "none" })
.selectMarks({ id: "shape-e", field: "cat", op: "eq", value: "e" })
.highlightMarks({ selection: "shape-e", size: 0.6366197723675814, fill: "none" })
.selectMarks({ id: "shape-f", field: "cat", op: "eq", value: "f" })
.highlightMarks({ size: 0.5513288954217921, fill: "none", offset: { x: -2.8714507848672444, y: 0 } })
.selectMarks({ id: "shape-g", field: "cat", op: "eq", value: "g" })
.highlightMarks({ size: 0.5513288954217921, fill: "none", offset: { x: 0, y: -3.097457487531332 } })
.selectMarks({ id: "shape-h", field: "cat", op: "eq", value: "h" })
.highlightMarks({ size: 0.5513288954217921, fill: "none", offset: { x: 3.3080592745918436, y: 0 } })
.selectMarks({ id: "shape-j", field: "cat", op: "eq", value: "j" })
.highlightMarks({ selection: "shape-j", size: 1.2732395447351628, fill: "none" })
    // Explicit guide tree: horizontal grid (scale y), y axis only (source has no x axis).
    .createGrid({
      horizontal: { values: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10] , color: '#ddd'},
      vertical: false
    })
    .createYAxis({
      line: { color: "#888" },
      ticksAndLabels: {
        values: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        ticks: { length: 5 },
        labels: { fontSize: 10, offset: 7, overlap: "allow" }
      },
      title: { text: "y", fontSize: 11, fontWeight: "bold", offset: 31 }
    })
    .createGuides({
      axes: false,
      grid: false,
      legend: {
        channels: ["stroke"],
        labels: { fontSize: 10, offset: 2 },
        titleStyle: { fontSize: 11 },
        itemGap: 4
      }
    })
    .createGuides({
      axes: false,
      grid: false,
      legend: {
        channels: ["size"],
        count: 3,
        labels: { fontSize: 10, offset: 2 },
        titleStyle: { fontSize: 11 },
        itemGap: 4
      }
    })
    .createGuides({
      axes: false,
      grid: false,
      legend: {
        channels: ["shape"],
        labels: { fontSize: 10, offset: 2 },
        titleStyle: { fontSize: 11 },
        itemGap: 4
      }
    });
}