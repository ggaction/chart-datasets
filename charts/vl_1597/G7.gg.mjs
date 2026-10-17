// DOCS: doc-e790db38fc2a278a, doc-76573a465e2b6a33
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({ width: 336, height: 249, margin: { left: 39, top: 10, right: 97, bottom: 39 } })
    .createData({ values: data })
    .createComputedData({ id: "carsAccelZScore", as: "accelerationZScore", expression: { op: "divide", left: { op: "subtract", left: { field: "Acceleration" }, right: { constant: 15.52 } }, right: { constant: 2.8 } } })
    .filterData({ id: "carsValidHp", field: "Horsepower", predicate: { op: "gte", value: 0 } })
    .filterData({ id: "carsValidMpg", field: "Miles_per_Gallon", predicate: { op: "gte", value: 0 } })
    .createScatterPlot({
      x: { field: "Horsepower", fieldType: "quantitative" },
      y: { field: "Miles_per_Gallon", fieldType: "quantitative" },
      guides: false
    })
    .editXScale({ domain: [0, 240] })
    .editYScale({ domain: [0, 50] })
    .encodeColor({ field: "Acceleration", fieldType: "quantitative" })
    .editColorScale({ domain: [8, 24.8], range: ["yellow", "red"], interpolate: "cubehelix-long" })
    .encodePointRadius({ value: Math.sqrt(60) / 2 })
    .editPointMark({ stroke: false })    .encodeOpacity({ value: 1 })
    .createXAxis({
      line: {},
      ticksAndLabels: { count: 5, ticks: {}, labels: { fontSize: 10, offset: 7 } },
      title: { text: "Horsepower", fontSize: 11, fontWeight: 700, offset: 28 }
    })
    .createYAxis({
      line: {},
      ticksAndLabels: { ticks: {}, labels: { fontSize: 10, offset: 7 } },
      title: { text: "Miles_per_Gallon", fontSize: 11, fontWeight: 700, offset: 28 }
    })
    .createHorizontalGrid({ color: "#ddd", count: 5 })
    .createVerticalGrid({ color: "#ddd", count: 5 })
    .createLegend({
      titleStyle: { fontSize: 11 },
      labels: { fontSize: 10 },
      gradient: { length: 200 }
    })
    .editLegendTitle({ fontWeight: 700 });
}