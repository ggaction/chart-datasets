// DOCS: doc-e790db38fc2a278a, doc-2e6240c00cb297cc, doc-48c72317a1a99e17
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({
      width: 497,
      height: 796,
      margin: { left: 6, top: 10, right: 91, bottom: 386 }
    })
    .createData({ values: data })
    .createScatterPlot({
      x: { field: "x", fieldType: "quantitative" },
      y: { field: "y", fieldType: "quantitative" },
      guides: false
    })
    .editXScale({ domain: [0, 100] })
    .editYScale({ domain: [0, 400], reverse: true })
    .editYScale({ nice: false, zero: false })
    .encodeStroke({
      field: "val",
      fieldType: "ordinal"
    })
    .editStrokeScale({
      target: "scatterPlot",
      domain: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      range: [
        "rgb(192, 217, 237)", "rgb(172, 208, 230)", "rgb(150, 197, 224)",
        "rgb(126, 183, 218)", "rgb(102, 170, 211)", "rgb(81, 155, 203)",
        "rgb(62, 140, 195)", "rgb(44, 124, 186)", "rgb(29, 108, 175)",
        "rgb(17, 90, 162)"
      ]
    })
    .encodeSize({
      field: "val",
      fieldType: "quantitative"
    })
    .editSizeScale({
      domain: [0, 10],
      range: [3.141592653589793, 283.52873698647883]
    })
    .encodeShape({
      field: "cat",
      fieldType: "nominal"
    })
    .editShapeScale({
      domain: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"],
      range: [
        "circle", "square", "triangle-up", "plus",
        "diamond", "triangle-right", "triangle-down", "triangle-left",
        "circle", "square"
      ]
    })
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
    .createXAxis({
      ticksAndLabels: {
        values: [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100],
        labels: { fontSize: 10, offset: 7, flush: true, overlap: "allow" }
      },
      title: { text: "x", fontSize: 11, offset: 28 }
    })
    .editXAxisLabels({
      color: "black"
    })
    .editXAxisTitle({
      color: "black", fontWeight: "bold"
    })
    .createGrid({ horizontal: false, vertical: { scale: "x", color: "#ddd", values: [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100] } })
    .createGuides({
      axes: false,
      grid: false,
      legend: {
        channels: ["stroke"],
        labels: { fontSize: 10, color: "black" },
        titleStyle: { fontSize: 11, fontWeight: "bold", color: "black" }
      }
    })
    .createGuides({
      axes: false,
      grid: false,
      legend: {
        channels: ["size"],
        count: 3,
        labels: { fontSize: 10, color: "black" },
        titleStyle: { fontSize: 11, fontWeight: "bold", color: "black" }
      }
    })
    .createGuides({
      axes: false,
      grid: false,
      legend: {
        channels: ["shape"],
        labels: { fontSize: 10, color: "black" },
        titleStyle: { fontSize: 11, fontWeight: "bold", color: "black" }
      }
    });
}
