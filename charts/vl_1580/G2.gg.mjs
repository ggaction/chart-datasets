// DOCS: doc-e790db38fc2a278a, doc-2e6240c00cb297cc, doc-7184b02978bdf5d1
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({
      width: 244,
      height: 247,
      margin: { left: 39, top: 10, right: 5, bottom: 37 }
    })
    .createData({ values: data })
    .filterData({ id: "filter-non-null-mpg", field: "Miles_per_Gallon", noneOf: [null] })
    .filterData({ id: "filter-non-null-horsepower", field: "Horsepower", noneOf: [null] })
    .createScatterPlot({
      x: { field: "Horsepower", fieldType: "quantitative", scale: { domain: [0, 240] } },
      y: { field: "Miles_per_Gallon", fieldType: "quantitative", scale: { domain: [0, 50] } },
      guides: false
    })
    .encodeStroke({
      field: "Origin",
      fieldType: "nominal"
    })
    .editStrokeScale({
      target: "scatterPlot",
      domain: ["Europe", "Japan", "USA"],
      range: ["#4c78a8", "#f58518", "#e45756", "#72b7b2", "#54a24b", "#eeca3b", "#b279a2", "#ff9da6", "#9d755d", "#bab0ac"]
    })
    .encodePointRadius({ value: 2.7386127875258306 })
    .editPointMark({ fill: "none", opacity: 0.7, strokeWidth: 2 })
    .createAxes({
      x: {
        line: { color: "orange" },
        ticksAndLabels: {
          values: [0, 50, 100, 150, 200],
          ticks: {},
          labels: {
            fontSize: 10,
            offset: 7,
            labelMap: [
              { value: 0, label: "low:0" },
              { value: 50, label: "low:50" },
              { value: 100, label: "low:100" },
              { value: 150, label: "high:150" },
              { value: 200, label: "high:200" }
            ]
          }
        },
        title: { text: "Horsepower", fontSize: 11, fontWeight: 700, offset: 28 }
      },
      y: {
        ticksAndLabels: {
          values: [0, 10, 20, 30, 40, 50],
          ticks: {},
          labels: { fontSize: 10, offset: 7 }
        },
        title: { text: "Miles_per_Gallon", fontSize: 11, fontWeight: 700, offset: 28 }
      }
    })
    .createGrid({
      horizontal: { color: "#ddd" },
      vertical: { color: "lightgreen" }
    });
}