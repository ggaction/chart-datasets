// DOCS: doc-e790db38fc2a278a (createScatterPlot), doc-2e6240c00cb297cc (createScatterPlot), doc-76573a465e2b6a33 (createScatterPlot)
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({ width: 329, height: 247, margin: { left: 39, top: 10, right: 90, bottom: 37 } })
    .createData({ values: data })
    .createComputedData({
      id: "carsZ",
      as: "accelerationZScore",
      expression: {
        op: "divide",
        left: { op: "subtract", left: { field: "Acceleration" }, right: { constant: 15.52 } },
        right: { constant: 2.80 }
      }
    })
    .filterData({ id: "carsHp", field: "Horsepower", noneOf: [null] })
    .filterData({ id: "carsMpg", field: "Miles_per_Gallon", noneOf: [null] })
    .createScatterPlot({ x: "Horsepower", y: "Miles_per_Gallon", guides: false })
    .encodeColor({ field: "Acceleration", fieldType: "quantitative" })
    .encodePointRadius({ value: 3.872983346207417 })
    .editXScale({ domain: [0, 240], nice: false })
    .editYScale({ domain: [0, 50], nice: false })
    .editColorScale({ domain: [8, 24.8], range: ["yellow", "red"], interpolate: "hcl" })
    .editPointMark({ opacity: 1, stroke: false })
    .createGrid({ horizontal: true, vertical: true })
    .editHorizontalGrid({ color: "#ddd" })
    .editVerticalGrid({ color: "#ddd" })
    .createXAxis({
      line: {},
      ticksAndLabels: {
        values: [0, 50, 100, 150, 200],
        ticks: { length: 5 },
        labels: { fontSize: 10, offset: 7 }
      },
      title: { text: "Horsepower", fontSize: 11, offset: 27.578125 }
    })
    .createYAxis({
      line: {},
      ticksAndLabels: {
        values: [0, 10, 20, 30, 40, 50],
        ticks: { length: 5 },
        labels: { fontSize: 10, offset: 7 }
      },
      title: { text: "Miles_per_Gallon", fontSize: 11, offset: 26.544921875 }
    })
    .editXAxisLine({ color: "#888" })
    .editXAxisTicks({ color: "#888" })
    .editXAxisLabels({ color: "black" })
    .editXAxisTitle({ fontWeight: 700, color: "black" })
    .editYAxisLine({ color: "#888" })
    .editYAxisTicks({ color: "#888" })
    .editYAxisLabels({ color: "black" })
    .editYAxisTitle({ fontWeight: 700, color: "black" })
    .editCanvas({ width: 336, margin: { left: 39, top: 10, right: 97, bottom: 37 } })
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