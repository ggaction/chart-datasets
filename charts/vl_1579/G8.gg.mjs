// DOCS: doc-e790db38fc2a278a (createScatterPlot), doc-2e6240c00cb297cc
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({ width: 244, height: 247, margin: { left: 39, top: 10, right: 5, bottom: 37 } })
    .createData({ values: data })
    .filterData({ id: "hpValid", field: "Horsepower", range: { min: 0 } })
    .filterData({ id: "pointsValid", field: "Miles_per_Gallon", range: { min: 0 } })
    .createScatterPlot({
      x: { field: "Horsepower" },
      y: { field: "Miles_per_Gallon" },
      guides: false
    })
    .editXScale({ target: "scatterPlot", domain: [0, 240] })
    .editYScale({ target: "scatterPlot", domain: [0, 50] })
    .encodeStroke({ field: "Origin", fieldType: "nominal" })
    .editStrokeScale({
      target: "scatterPlot",
      domain: ["Europe", "Japan", "USA"],
      range: ["#4c78a8", "#f58518", "#e45756"]
    })
    .editPointMark({ fill: "none", strokeWidth: 2, opacity: 0.7 })
    .encodePointRadius({ value: 2.7386 })
    .createXAxis({
      line: {},
      ticksAndLabels: {
        values: [0, 50, 100, 150, 200],
        ticks: {},
        labels: {
          offset: 7,
          fontSize: 10,
          labelMap: [
            { value: 0, label: "low:0" },
            { value: 50, label: "low:50" },
            { value: 100, label: "low:100" },
            { value: 150, label: "high:150" },
            { value: 200, label: "high:200" }
          ]
        }
      },
      title: { text: "Horsepower", fontSize: 11, offset: 28 }
    })
    .createYAxis({
      line: {},
      ticksAndLabels: {
        values: [0, 10, 20, 30, 40, 50],
        ticks: {},
        labels: { offset: 7, fontSize: 10 }
      },
      title: { text: "Miles_per_Gallon", fontSize: 11, offset: 28 }
    })
    .editXAxisLine({ color: "orange" })
    .editXAxisTitle({ fontWeight: 700 })
    .editYAxisTitle({ fontWeight: 700 })
    .createGrid({
      horizontal: { values: [0, 10, 20, 30, 40, 50] },
      vertical: { values: [0, 50, 100, 150, 200] }
    })
    .editHorizontalGrid({ color: '#ddd', lineWidth: 1 })
    .editVerticalGrid({ color: "lightgreen" });
}