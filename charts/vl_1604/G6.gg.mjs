// DOCS: doc-e790db38fc2a278a
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({ width: 336, height: 247, margin: { left: 39, top: 10, right: 97, bottom: 37 } })
    .createData({ values: data })
    .filterData({ id: "cars-valid-x", field: "Horsepower", predicate: { op: "neq", value: null } })
    .filterData({ id: "cars-valid-xy", field: "Miles_per_Gallon", predicate: { op: "neq", value: null } })
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
      x: { field: "Horsepower", fieldType: "quantitative" },
      y: { field: "Miles_per_Gallon", fieldType: "quantitative" },
      guides: false
    })
    .editXScale({ domain: [0, 240] })
    .editYScale({ domain: [0, 50] })
    .encodePointRadius({ value: 3.873 })
    .encodeColor({
      field: "Acceleration",
      fieldType: "quantitative",
      scale: { type: "sqrt" }
    })
    .editColorScale({
      domain: [8, 24.8],
      range: ["rgb(255, 255, 0)", "rgb(255, 0, 0)"],
      interpolate: "hcl"
    })
    .createXAxis({
      line: {},
      ticksAndLabels: {
        values: [0, 50, 100, 150, 200],
        ticks: { length: 5, lineWidth: 1 },
        labels: { fontSize: 10, fontFamily: "sans-serif", offset: 7 }
      },
      title: { text: "Horsepower", fontSize: 11, fontFamily: "sans-serif", offset: 27 }
    })
    .editXAxisTicksAndLabels({
      ticks: { color: "#000" },
      labels: { color: "#000" }
    })
    .editXAxisTitle({ color: "#000", fontWeight: 700 })
    .createYAxis({
      line: {},
      ticksAndLabels: {
        values: [0, 10, 20, 30, 40, 50],
        ticks: { length: 5, lineWidth: 1 },
        labels: { fontSize: 10, fontFamily: "sans-serif", offset: 7 }
      },
      title: {
        text: "Miles_per_Gallon",
        fontSize: 11,
        fontFamily: "sans-serif",
        offset: 27,
        rotation: { value: -90, unit: "degrees" }
      }
    })
    .editYAxisTicksAndLabels({
      ticks: { color: "#000" },
      labels: { color: "#000" }
    })
    .editYAxisTitle({ color: "#000", fontWeight: 700 })
    .createGrid({
      horizontal: { lineWidth: 1 },
      vertical: { lineWidth: 1 }
    })
    .editHorizontalGrid({ color: "#ddd" })
    .editVerticalGrid({ color: "#ddd" })
    .createLegend({
      title: "Acceleration",
      titleStyle: { fontSize: 11, fontWeight: 700, fontFamily: "sans-serif", color: "black" },
      labels: { fontSize: 10, fontFamily: "sans-serif", color: "black" }
    })
    .editLegend({
      gradient: { length: 200 },
      titleStyle: { fontSize: 11, fontWeight: 700, fontFamily: "sans-serif", color: "#000" },
      labels: { fontSize: 10, fontFamily: "sans-serif", color: "#000" }
    });
}
