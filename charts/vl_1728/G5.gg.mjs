// DOCS: doc-e790db38fc2a278a (createScatterPlot), doc-2bd5de4bd99e314a (Basic Charts), doc-76573a465e2b6a33
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({
      width: 453,
      height: 549,
      margin: { left: 39, top: 10, right: 114, bottom: 239 }
    })
    .createData({ values: data })
    .filterData({ id: "filter-horsepower", field: "Horsepower", predicate: { op: "neq", value: null } })
    .filterData({ id: "filter-mpg", field: "Miles_per_Gallon", predicate: { op: "neq", value: null } })
    .createScatterPlot({
      x: { field: "Horsepower" },
      y: { field: "Miles_per_Gallon" },
      guides: false
    })
    .editXScale({ domain: [0, 240] })
    .editYScale({ domain: [0, 50] })
    .encodeColor({ field: "Origin" })
    .editColorScale({
      domain: ["Europe", "Japan", "USA"],
      range: [
        "#4c78a8", "#f58518", "#e45756", "#72b7b2", "#54a24b",
        "#eeca3b", "#b279a2", "#ff9da6", "#9d755d", "#bab0ac"
      ]
    })
    .encodeSize({
      field: "Horsepower"
    })
    .editSizeScale({
      domain: [0, 230],
      range: [3.141592653589793, 283.52873698647815]
    })
    .editPointMark({ stroke: false })
    .encodeOpacity({
      field: "Weight_in_lbs"
    })
    .editOpacityScale({
      domain: [1613, 5140],
      range: [0.3, 0.8]
    })
    .createXAxis({
      line: {},
      ticksAndLabels: {
        values: [0, 20, 40, 60, 80, 100, 120, 140, 160, 180, 200, 220, 240],
        ticks: {},
        labels: {
          fontSize: 10,
          offset: 7,
          flush: true,
          labelMap: [
            { value: 20, label: "" },
            { value: 60, label: "" },
            { value: 100, label: "" },
            { value: 140, label: "" },
            { value: 180, label: "" },
            { value: 220, label: "" }
          ]
        }
      },
      title: { text: "Horsepower", fontSize: 11 }
    })
    .createYAxis({
      line: {},
      ticksAndLabels: {
        values: [0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50],
        ticks: {},
        labels: { fontSize: 10, offset: 7 }
      },
      title: { text: "Miles_per_Gallon", fontSize: 11 }
    })
    .editXAxis({ title: { fontWeight: 700 } })
    .editYAxis({ title: { fontWeight: 700 } })
    .createGrid({
      horizontal: { color: "#ddd", lineWidth: 1 },
      vertical: { color: "#ddd", lineWidth: 1 }
    })
    .createGuides({
      axes: false,
      legend: {
        target: "scatterPlot",
        channels: ["color"],
        title: "Origin",
        labels: { fontSize: 10 },
        titleStyle: { fontSize: 11, fontWeight: 700 }
      }
    })
    .createGuides({
      axes: false,
      legend: {
        target: "scatterPlot",
        channels: ["size"],
        title: "Horsepower",
        values: [0, 50, 100, 150, 200],
        labels: { fontSize: 10 },
        titleStyle: { fontSize: 11, fontWeight: 700 }
      }
    })
    .createGuides({
      axes: false,
      legend: {
        target: "scatterPlot",
        channels: ["opacity"],
        title: "Weight_in_lbs",
        values: [2000, 2500, 3000, 3500, 4000, 4500, 5000],
        labels: { fontSize: 10, format: ",.0f" },
        titleStyle: { fontSize: 11, fontWeight: 700 }
      }
    })
  .editYAxis({ title: { offset: 26.544921875 } })
  .editCanvas({ width: 555, height: 549, margin: { left: 141, right: 114, top: 10, bottom: 239 } })
  .editLegendLayout({ position: "left", blockLayout: "column", offset: 52.625 })
  .editCanvas({ width: 447, height: 403, margin: { left: 141, top: 10, right: 6, bottom: 93 } })
;
}