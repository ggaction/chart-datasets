import { chart } from "ggaction";
import data from "./data.json";

// DOCS: doc-e790db38fc2a278a, doc-2e6240c00cb297cc, doc-76573a465e2b6a33, doc-48c72317a1a99e17
export function buildChart() {
  return chart()
    .createCanvas({ width: 325, height: 310, margin: { left: 40, top: 27, right: 85, bottom: 83 } })
    .createData({ values: data })
    .filterData({ id: "carsMpg", field: "Miles_per_Gallon", range: { min: 0 } })
    .filterData({ id: "carsClean", field: "Horsepower", range: { min: 0 } })
    .createComputedData({ id: "shapeArea", as: "nativeArea", expression: { op: "if", condition: { op: "eq", left: { field: "Origin" }, right: { constant: "Europe" } }, then: { constant: 78.53981633974483 }, else: { constant: 100 } } })    .createScatterPlot({
      x: { field: "Horsepower", fieldType: "quantitative" },
      y: { field: "Miles_per_Gallon", fieldType: "quantitative" },
      guides: false
    })
    .editXScale({ domain: [0, 240] })
    .editYScale({ domain: [0, 50] })
    .encodeStroke({ field: "Cylinders", fieldType: "ordinal" })
    .editStrokeScale({ target: "scatterPlot", domain: [3, 4, 5, 6, 8], range: ["rgb(175, 209, 231)", "rgb(134, 188, 220)", "rgb(91, 163, 207)", "rgb(56, 135, 192)", "rgb(27, 105, 173)"] })
    .encodeShape({ field: "Origin", fieldType: "nominal" })
    .editShapeScale({ domain: ["Europe", "Japan", "USA"], range: ["circle", "square", "triangle-up"] })
    .encodeSize({ field: "nativeArea" })
    .editSizeScale({ domain: [0, 100], range: [0, 100] })
    .editPointMark({ fill: "transparent", strokeWidth: 2, opacity: 0.7 })
    .createTitle({ text: "Car Scatter", titleStyle: { fontSize: 13, fontFamily: "Comic Sans MS", fontWeight: 700 }, offset: -7 })
    .editTitle({ align: "center" })
    .createXAxis({
      line: {},
      ticksAndLabels: { values: [0, 50, 100, 150, 200], ticks: { length: 5 }, labels: { fontSize: 10, offset: 7, fontFamily: "Comic Sans MS" } },
      title: { text: "Horsepower", fontSize: 11, offset: 31, fontFamily: "Comic Sans MS" }
    })
    .createYAxis({
      line: {},
      ticksAndLabels: { values: [0, 10, 20, 30, 40, 50], ticks: { length: 5 }, labels: { fontSize: 10, offset: 7, fontFamily: "Comic Sans MS" } },
      title: { text: "Miles_per_Gallon", fontSize: 11, offset: 26, fontFamily: "Comic Sans MS" }
    })
    .editXAxisLine({ color: "#888" })
    .editXAxisTicks({ color: "#888" })
    .editXAxisTitle({ fontWeight: 700 })
    .editYAxisLine({ color: "#888" })
    .editYAxisTicks({ color: "#888" })
    .editYAxisTitle({ fontWeight: 700 })
    .createGrid({
      horizontal: { color: "#ddd", values: [0, 10, 20, 30, 40, 50] },
      vertical: { color: "#ddd", values: [0, 50, 100, 150, 200] }
    })
    .createLegend({ channels: ["stroke"], labels: { fontSize: 10, fontFamily: "Comic Sans MS" }, titleStyle: { fontSize: 11, fontWeight: 700, fontFamily: "Comic Sans MS" } })
    .createLegend({ channels: ["shape"], labels: { fontSize: 10, fontFamily: "Comic Sans MS" }, titleStyle: { fontSize: 11, fontWeight: 700, fontFamily: "Comic Sans MS" } })
    .selectMarks({ field: "Origin", op: "eq", value: "USA" })
    .highlightMarks({ size: 0.4330127018922193, fill: "transparent", offset: { y: 2.193456688254154 }, bringToFront: false });
}