// DOCS: doc-e790db38fc2a278a doc-76573a465e2b6a33 doc-48c72317a1a99e17
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({
      width: 342,
      height: 249,
      margin: { top: 10, right: 103, bottom: 39, left: 39 }
    })
    .createData({ values: data })
    .createComputedData({
      id: "carsZScore",
      as: "accelerationZScore",
      expression: {
        op: "divide",
        left: { op: "subtract", left: { field: "Acceleration" }, right: { constant: 15.52 } },
        right: { constant: 2.80 }
      }
    })
    .filterData({ id: "carsMpgValid", field: "Miles_per_Gallon", noneOf: [null] })
    .filterData({ id: "carsValid", field: "Horsepower", noneOf: [null] })
    .createScatterPlot({
      x: "Horsepower",
      y: "Miles_per_Gallon",
      guides: false
    })
    .encodeX({
      field: "Horsepower",
      fieldType: "quantitative",
      scale: { type: "linear", domain: [0, 240] }
    })
    .encodeY({
      field: "Miles_per_Gallon",
      fieldType: "quantitative",
      scale: { type: "linear", domain: [0, 50] }
    })
    .encodeColor({
      field: "Acceleration",
      fieldType: "quantitative"
    })
    .editColorScale({ type: "sequential", domain: [8, 24.8], range: ["yellow", "red"] })
    .editColorScale({ interpolate: "hcl" })    .encodePointRadius({ value: 3.872983346207417 })
    .encodeOpacity({ value: 1 })
    .createXAxis({
      line: {},
      ticksAndLabels: {
        values: [0, 50, 100, 150, 200],
        labels: { fontSize: 10, offset: 7 }
      },
      title: { text: "Horsepower", fontSize: 11, offset: 28 }
    })
    .editXAxisLabels({ fontFamily: "sans-serif" })
    .editXAxisTitle({ fontWeight: 700, fontFamily: "sans-serif" })
    .createYAxis({
      line: {},
      ticksAndLabels: {
        values: [0, 10, 20, 30, 40, 50],
        labels: { fontSize: 10, offset: 7 }
      },
      title: { text: "Miles_per_Gallon", fontSize: 11, offset: 31 }
    })
    .editYAxisLabels({ fontFamily: "sans-serif" })
    .editYAxisTitle({ fontWeight: 700, fontFamily: "sans-serif" })
    .createGrid({ horizontal: true, vertical: true })
    .editHorizontalGrid({ color: "#ddd", lineWidth: 1 })
    .editVerticalGrid({ color: "#ddd", lineWidth: 1 })
    .createLegend({
      representation: "gradient",
      title: "Acceleration",
      gradient: { length: 200 }
    })
    .editLegend({ position: "right" })
    .editLegendLabels({ fontSize: 10, fontFamily: "sans-serif" })
    .editLegendTitle({ fontSize: 11, fontWeight: 700, fontFamily: "sans-serif" });
}