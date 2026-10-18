import { chart } from "ggaction";
import data from "./data.json";
// DOCS: doc-e790db38fc2a278a, doc-2bd5de4bd99e314a, doc-48c72317a1a99e17
export function buildChart() {
  return chart()
    .createCanvas({ width: 342, height: 249, margin: { left: 39, top: 10, right: 103, bottom: 39 } })
    .createData({ values: data })
    .createComputedData({ id: "acceleration-zscore", as: "accelerationZScore", expression: { op: "divide", left: { op: "subtract", left: { field: "Acceleration" }, right: { constant: 15.52 } }, right: { constant: 2.8 } } })
    .filterData({ id: "carpoints-hp-valid", field: "Horsepower", predicate: { op: "neq", value: null } })
    .filterData({ id: "carpoints-mpg-valid", field: "Miles_per_Gallon", predicate: { op: "neq", value: null } })
    .createScatterPlot({ x: { field: "Horsepower" }, y: { field: "Miles_per_Gallon" }, guides: false })
    .editXScale({ domain: [0, 240] })
    .editYScale({ domain: [0, 50] })
    .encodeColor({ field: "Acceleration", fieldType: "quantitative" })
    .editColorScale({ domain: [8, 24.8], range: ["#f33", "#33f"] })
    .editColorScale({ interpolate: "hcl", whitePoint: "d50" })
    .encodePointRadius({ value: 3.872983346207417 })
    .editPointMark({ opacity: 1, stroke: false })
    .createXAxis({ line: { lineWidth: 1 }, ticksAndLabels: { values: [0, 50, 100, 150, 200], ticks: { lineWidth: 1, length: 5 }, labels: { fontSize: 10, fontFamily: "sans-serif", offset: 7 } }, title: { text: "Horsepower", fontSize: 11, fontFamily: "sans-serif", offset: 28 } })
    .editXAxis({ line: { color: "#888" }, ticksAndLabels: { ticks: { color: "#888" }, labels: { color: "black" } }, title: { color: "black", fontWeight: 700 } })
    .createYAxis({ line: { lineWidth: 1 }, ticksAndLabels: { values: [0, 10, 20, 30, 40, 50], ticks: { lineWidth: 1, length: 5 }, labels: { fontSize: 10, fontFamily: "sans-serif", offset: 7 } }, title: { text: "Miles_per_Gallon", fontSize: 11, fontFamily: "sans-serif", offset: 28 } })
    .editYAxis({ line: { color: "#888" }, ticksAndLabels: { ticks: { color: "#888" }, labels: { color: "black" } }, title: { color: "black", fontWeight: 700 } })
    .createGrid({ horizontal: { color: "#ddd" }, vertical: { color: "#ddd" } })
    .createGuides({ axes: false, grid: false, legend: { representation: "gradient", target: "scatterPlot", title: "Acceleration", gradient: { length: 200 }, titleStyle: { fontSize: 11, fontWeight: 700, fontFamily: "sans-serif", color: "black" }, labels: { fontSize: 10, fontFamily: "sans-serif", color: "black" } } });
}
