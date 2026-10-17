// DOCS: doc-2e6240c00cb297cc, doc-76573a465e2b6a33
import { chart } from "ggaction";
import data from "./data.json";

const palette10 = ["#4c78a8", "#f58518", "#e45756", "#72b7b2", "#54a24b", "#eeca3b", "#b279a2", "#ff9da6", "#9d755d", "#bab0ac"];

const xLabelMap = [
  { value: 0, label: "0 horses" },
  { value: 50, label: "" },
  { value: 100, label: "100 horses" },
  { value: 150, label: "" },
  { value: 200, label: "200 horses" }
];

const yLabelMap = [
  { value: 0, label: "0 mpg" },
  { value: 10, label: "10 mpg" },
  { value: 20, label: "20 mpg" },
  { value: 30, label: "30 mpg" },
  { value: 40, label: "40 mpg" },
  { value: 50, label: "50 mpg" }
];

export function buildChart() {
  return chart()
    .createCanvas({ width: 266, height: 247, margin: { left: 61, top: 10, right: 5, bottom: 37 } })
    .createData({ values: data })
    .filterData({ id: "carsMpg", field: "Miles_per_Gallon", noneOf: [null] })
    .filterData({ id: "carsHorsepower", field: "Horsepower", noneOf: [null] })
    .createScatterPlot({
      x: { field: "Horsepower", scale: { domain: [0, 240] } },
      y: { field: "Miles_per_Gallon", scale: { domain: [0, 50] } },
      guides: false
    })
    .encodeStroke({
      field: "Origin",
      scale: { type: "ordinal", domain: ["Europe", "Japan", "USA"], range: palette10 }
    })
    .editPointMark({ fill: "none", opacity: 0.7, strokeWidth: 2 })
    .encodePointRadius({ value: 2.7386127875258306 })
    .createGrid({ vertical: { color: "#ddd", lineWidth: 1 }, horizontal: { color: "#ddd", lineWidth: 1 } })
    .createAxes({
      x: {
        line: { color: "#888" },
        ticksAndLabels: {
          values: [0, 50, 100, 150, 200],
          ticks: { length: 5, color: "#888" },
          labels: { fontSize: 10, offset: 7, labelMap: xLabelMap, flush: true }
        },
        title: { text: "Horsepower", fontSize: 11, fontWeight: 700, offset: 30 }
      },
      y: {
        line: { color: "#888" },
        ticksAndLabels: {
          values: [0, 10, 20, 30, 40, 50],
          ticks: { length: 5, color: "#888" },
          labels: { fontSize: 10, offset: 7, labelMap: yLabelMap }
        },
        title: { text: "Miles_per_Gallon", fontSize: 11, fontWeight: 700, offset: 49 }
      }
    });
}
