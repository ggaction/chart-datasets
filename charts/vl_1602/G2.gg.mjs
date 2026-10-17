import { chart } from "ggaction";
import data from "./data.json";

// DOCS: doc-e790db38fc2a278a; doc-2e6240c00cb297cc

export function buildChart() {
  return chart()
    .createCanvas({
      width: 329,
      height: 247,
      margin: { left: 39, top: 10, right: 90, bottom: 37 }
    })
    .createData({ values: data })
    .createComputedData({
      id: "accelZ",
      as: "accelerationZScore",
      expression: {
        op: "divide",
        left: { op: "subtract", left: { field: "Acceleration" }, right: { constant: 15.52 } },
        right: { constant: 2.80 }
      }
    })
    .filterData({ id: "hpValid", field: "Horsepower", noneOf: [null] })
    .filterData({ id: "mpgValid", field: "Miles_per_Gallon", noneOf: [null] })
    .createScatterPlot({
      x: { field: "Horsepower", fieldType: "quantitative" },
      y: { field: "Miles_per_Gallon", fieldType: "quantitative" },
      guides: false
    })
    .encodeColor({ field: "Acceleration", fieldType: "quantitative" })
    .encodePointRadius({ value: 3.872983346207417 })
    .editPointMark({ opacity: 1, stroke: false })
    .editXScale({ domain: [0, 240], nice: false })
    .editYScale({ domain: [0, 50], nice: false })
    .editColorScale({ domain: [8, 24.8], range: ["yellow", "red"], interpolate: "hcl" })
    .createGrid({ horizontal: { color: "#ddd" }, vertical: { color: "#ddd" } })
    .createXAxis({
      line: { color: "#888" },
      ticksAndLabels: {
        values: [0, 50, 100, 150, 200],
        ticks: { length: 5, color: "#888" },
        labels: { fontSize: 10, offset: 7, color: "black" }
      },
      title: { text: "Horsepower", fontSize: 11, fontWeight: 700, color: "black", offset: 27.578125 }
    })
    .createYAxis({
      line: { color: "#888" },
      ticksAndLabels: {
        values: [0, 10, 20, 30, 40, 50],
        ticks: { length: 5, color: "#888" },
        labels: { fontSize: 10, offset: 7, color: "black" }
      },
      title: { text: "Miles_per_Gallon", fontSize: 11, fontWeight: 700, color: "black", offset: 26.544921875 }
    })
    .editCanvas({ width: 336, height: 247, margin: { left: 39, top: 10, right: 97, bottom: 37 } })
    .createGuides({
      axes: false,
      grid: false,
      legend: {
        channels: ["color"],
        position: "right",
        title: "Acceleration",
        titleStyle: { fontSize: 11, fontWeight: 700, color: "black" },
        labels: { fontSize: 10, color: "black" }
      }
    });
}