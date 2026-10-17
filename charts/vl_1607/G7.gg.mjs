// DOCS: doc-e790db38fc2a278a, doc-276d35c7791587fd, doc-2e6240c00cb297cc
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({ width: 371, height: 247, margin: { left: 39, top: 10, right: 132, bottom: 37 } })
    .createData({ values: data })
    .filterData({ id: "hpValid", field: "Horsepower", noneOf: [null] })
    .filterData({ id: "mpgValid", field: "Miles_per_Gallon", noneOf: [null] })
    .createComputedData({
      id: "zScore",
      as: "accelerationZScore",
      expression: {
        op: "divide",
        left: { op: "subtract", left: { field: "Acceleration" }, right: { constant: 15.52 } },
        right: { constant: 2.80 }
      }
    })
    .createScatterPlot({
      x: { field: "Horsepower" },
      y: { field: "Miles_per_Gallon" },
      guides: false
    })
    .encodePointRadius({ value: 3.873 })
    .encodeColor({
      field: "accelerationZScore",
      fieldType: "quantitative",
      scale: { type: "symlog", constant: 0.01 }
    })
    .editColorScale({
      domain: [-2.685714285714286, 3.314285714285715],
      range: ["yellow", "red"],
      interpolate: "hcl"
    })
    .editXScale({ domain: [0, 240] })
    .editYScale({ domain: [0, 50] })
    .createXAxis({
      line: {},
      ticksAndLabels: {
        values: [0, 50, 100, 150, 200],
        ticks: {},
        labels: { fontSize: 10, fontFamily: "sans-serif", offset: 7 }
      },
      title: { text: "Horsepower", fontSize: 11, offset: 28 }
    })
    .editXAxisTitle({ fontFamily: "sans-serif", fontWeight: 700 })
    .createYAxis({
      line: {},
      ticksAndLabels: {
        values: [0, 10, 20, 30, 40, 50],
        ticks: {},
        labels: { fontSize: 10, fontFamily: "sans-serif", offset: 7 }
      },
      title: { text: "Miles_per_Gallon", fontSize: 11, offset: 31, rotation: { value: -90, unit: "degrees" } }
    })
    .editYAxisTitle({ fontFamily: "sans-serif", fontWeight: 700 })
    .createGrid({ horizontal: true, vertical: true })
    .editHorizontalGrid({ color: "#ddd", lineWidth: 1 })
    .editVerticalGrid({ color: "#ddd", lineWidth: 1 })
    .createLegend({
      gradient: { length: 200 },
      titleStyle: { fontSize: 11 },
      labels: { fontSize: 10, fontFamily: "sans-serif", color: "black" }
    })
    .editLegendTitle({ fontWeight: 700, fontFamily: "sans-serif" });
}
