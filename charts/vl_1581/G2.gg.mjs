import { chart } from "ggaction";
import data from "./data.json";

// DOCS: doc-e790db38fc2a278a, doc-2e6240c00cb297cc, doc-76573a465e2b6a33

export function buildChart() {
  return chart()
    .createCanvas({ width: 211, height: 242, margin: { left: 6, top: 5, right: 5, bottom: 37 } })
    .createData({ id: "cars", values: data })
    .filterData({ id: "cars-hp-filter", field: "Horsepower", range: { min: 0 } })
    .filterData({ id: "cars-mpg-filter", field: "Miles_per_Gallon", range: { min: 0 } })
    .createScatterPlot({
      x: "Horsepower",
      y: "Miles_per_Gallon",
      guides: false
    })
    .encodeX({ field: "Horsepower", fieldType: "quantitative", scale: { domain: [0, 240] } })
    .encodeY({ field: "Miles_per_Gallon", fieldType: "quantitative", scale: { domain: [0, 50] } })
    .encodeStroke({ field: "Origin", fieldType: "nominal" })
    .editStrokeScale({
      target: "scatterPlot",
      domain: ["Europe", "Japan", "USA"],
      range: ["#4c78a8", "#f58518", "#e45756"]
    })
    .encodePointRadius({ value: 2.7386127875258306 })
    .editPointMark({ missing: "skip", fill: "none", opacity: 0.7 })
    .editPointMark({ strokeWidth: 2 })
    .createAxes({
      y: false,
      x: {
        line: { color: "orange" },
        ticksAndLabels: {
          values: [0, 50, 100, 150, 200],
          labels: {
            fontSize: 10,
            fontFamily: "sans-serif",
            offset: 7,
            flush: true,
            labelMap: [
              { value: 0, label: "low:0" },
              { value: 50, label: "low:50" },
              { value: 100, label: "low:100" },
              { value: 150, label: "high:150" },
              { value: 200, label: "high:200" }
            ]
          }
        },
        title: { text: "Horsepower", fontSize: 11, fontWeight: 700, fontFamily: "sans-serif" }
      }
    })
    .createGrid({
      horizontal: false,
      vertical: { values: [0, 50, 100, 150, 200], color: "lightgreen" }
    });
}