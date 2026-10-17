// DOCS: doc-e790db38fc2a278a, doc-2e6240c00cb297cc, doc-04fa8d3ace4022d6
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({
      width: 337,
      height: 249,
      margin: { left: 39, top: 10, right: 98, bottom: 39 }
    })
    .createData({ id: "raw", values: data })
    .filterData({ id: "hp-valid", field: "Horsepower", predicate: { op: "neq", value: null } })
    .filterData({ id: "mpg-valid", field: "Miles_per_Gallon", predicate: { op: "neq", value: null } })
    .createComputedData({
      id: "accelZ",
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
      x: { field: "Horsepower", fieldType: "quantitative" },
      y: { field: "Miles_per_Gallon", fieldType: "quantitative" },
      guides: false
    })
    .editXScale({ domain: [0, 240] })
    .editYScale({ domain: [0, 50] })
    .encodeColor({ field: "Acceleration", fieldType: "quantitative" })
    .editColorScale({
      domain: [8, 24.8],
      range: ["yellow", "red"],
      interpolate: "cubehelix-long"
    })
    .encodeOpacity({ value: 1 })
    .encodePointRadius({ value: 3.87298 })
    .createXAxis({
      line: {},
      ticksAndLabels: {
        count: 5,
        labels: { fontSize: 10, offset: 7, flush: true }
      },
      title: { text: "Horsepower", fontSize: 11, fontWeight: 700, offset: 28 }
    })
    .createYAxis({
      line: {},
      ticksAndLabels: {
        count: 5,
        labels: { fontSize: 10, offset: 7 }
      },
      title: { text: "Miles_per_Gallon", fontSize: 11, fontWeight: 700, offset: 31 }
    })
    .createGrid({ horizontal: { color: "#ddd" }, vertical: { color: "#ddd" } })
    .createLegend({
      title: "Acceleration",
      labels: { fontSize: 10 },
      titleStyle: { fontSize: 11, fontWeight: 700 }
    });
}
