// DOCS: doc-76573a465e2b6a33
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({
      width: 336,
      height: 247,
      margin: { left: 39, top: 10, right: 97, bottom: 37 }
    })
    .createData({ values: data })
    .createComputedData({
      id: "carsZ",
      as: "accelerationZScore",
      expression: {
        op: "divide",
        left: { op: "subtract", left: { field: "Acceleration" }, right: { constant: 15.52 } },
        right: { constant: 2.8 }
      }
    })
    .filterData({ id: "filtered_hp", field: "Horsepower", predicate: { op: "gte", value: 0 } })
    .filterData({ id: "filtered_mpg", field: "Miles_per_Gallon", predicate: { op: "gte", value: 0 } })
    .createScatterPlot({ x: "Horsepower", y: "Miles_per_Gallon", guides: false })
    .encodeColor({ field: "Acceleration", fieldType: "quantitative" })
    .editColorScale({ palette: "plasma", domain: [8, 24.8] })
    .editXScale({ domain: [0, 240] })
    .editYScale({ domain: [0, 50] })
    .encodePointRadius({ value: Math.sqrt(60) / 2 })
    .encodeOpacity({ value: 1 })
    .createXAxis({
      line: {},
      ticksAndLabels: { values: [0, 50, 100, 150, 200], ticks: {}, labels: { fontSize: 10, offset: 7, flush: true } },
      title: { text: "Horsepower", fontSize: 11, offset: 28 }
    })
    .editXAxisLine({ color: "#888" })
    .editXAxisTicksAndLabels({ ticks: { color: "#888" }, labels: { color: "black" } })
    .editXAxisTitle({ fontWeight: 700, color: "black" })
    .createYAxis({
      line: {},
      ticksAndLabels: { values: [0, 10, 20, 30, 40, 50], ticks: {}, labels: { fontSize: 10, offset: 7 } },
      title: { text: "Miles_per_Gallon", fontSize: 11, offset: 25 }
    })
    .editYAxisLine({ color: "#888" })
    .editYAxisTicksAndLabels({ ticks: { color: "#888" }, labels: { color: "black" } })
    .editYAxisTitle({ fontWeight: 700, color: "black" })
    .createGrid({
      horizontal: { values: [0, 10, 20, 30, 40, 50] },
      vertical: { values: [0, 50, 100, 150, 200] }
    })
    .editGrid({
      horizontal: { color: "#ddd", lineWidth: 1 },
      vertical: { color: "#ddd", lineWidth: 1 }
    })
    .createLegend({
      title: "Acceleration",
      titleStyle: { fontSize: 11, fontWeight: 700, color: "black" },
      labels: { fontSize: 10, color: "black" }
    });
}