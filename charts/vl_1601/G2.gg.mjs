// DOCS: doc-e790db38fc2a278a, doc-d9e3b1b7add0d2c6, doc-f84a6354ad5070da
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({
      width: 336,
      height: 249,
      margin: { left: 39, top: 10, right: 97, bottom: 39 }
    })
    .createData({ values: data })
    .filterData({
      id: "carsValidHp",
      field: "Horsepower",
      predicate: { op: "gte", value: 0 }
    })
    .filterData({
      id: "carsValidMpg",
      field: "Miles_per_Gallon",
      predicate: { op: "gte", value: 0 }
    })
    .createComputedData({
      id: "carsZ",
      as: "accelerationZScore",
      expression: {
        op: "divide",
        left: {
          op: "subtract",
          left: { field: "Acceleration" },
          right: { constant: 15.52 }
        },
        right: { constant: 2.8 }
      }
    })
    .createScatterPlot({
      x: {
        field: "Horsepower",
        fieldType: "quantitative",
        scale: { domain: [0, 240] }
      },
      y: {
        field: "Miles_per_Gallon",
        fieldType: "quantitative",
        scale: { domain: [0, 50] }
      },
      guides: false
    })
    .encodeColor({
      field: "Acceleration",
      fieldType: "quantitative",
      scale: {
        domain: [8, 24.8],
        palette: { name: "plasma", extent: [0, 0.5] }
      }
    })
    .editColorScale({ reverse: true })
    .encodePointRadius({ value: Math.sqrt(60) / 2 })
    .encodeOpacity({ value: 1 })
    .editPointMark({ stroke: false })
    .createGrid({
      horizontal: { color: "#ddd", lineWidth: 1 },
      vertical: { color: "#ddd", lineWidth: 1 }
    })
    .createXAxis({
      line: {},
      ticksAndLabels: {
        values: [0, 50, 100, 150, 200],
        ticks: {},
        labels: { fontSize: 10, offset: 7 }
      },
      title: { text: "Horsepower", fontSize: 11, fontWeight: 700 }
    })
    .createYAxis({
      line: {},
      ticksAndLabels: {
        values: [0, 10, 20, 30, 40, 50],
        ticks: {},
        labels: { fontSize: 10, offset: 7 }
      },
      title: { text: "Miles_per_Gallon", fontSize: 11, fontWeight: 700 }
    })
    .createLegend({
      title: "Acceleration",
      titleStyle: { fontSize: 11, fontWeight: 700 },
      labels: { fontSize: 10 }
    })
    .editLegend({
      gradient: { length: 200 }
    })
  .editYAxis({ title: { offset: 26.544921875 } })
}
