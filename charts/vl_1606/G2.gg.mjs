// DOCS: doc-e790db38fc2a278a createScatterPlot facade with explicit guides:false; derived z-score data via createComputedData
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({
      width: 371,
      height: 247,
      margin: { left: 39, top: 10, right: 132, bottom: 37 }
    })
    .createData({ values: data })
    .filterData({
      id: "carsValid",
      field: "Horsepower",
      predicate: { op: "neq", value: null }
    })
    .filterData({
      id: "carsValidMpg",
      field: "Miles_per_Gallon",
      predicate: { op: "neq", value: null }
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
      x: { field: "Horsepower", fieldType: "quantitative" },
      y: { field: "Miles_per_Gallon", fieldType: "quantitative" },
      guides: false
    })
    .editXScale({ type: "linear", domain: [0, 240] })
    .editYScale({ type: "linear", domain: [0, 50] })
    .encodeColor({
      field: "accelerationZScore",
      fieldType: "quantitative",
      scale: {
        type: "symlog",
        domain: [-2.685714285714286, 3.314285714285715],
        range: ["rgb(255, 255, 0)", "rgb(255, 0, 0)"]
      }
    })
    .editColorScale({ target: "scatterPlot", interpolate: "hcl" })
    .encodePointRadius({ value: 3.872983346207417 })
    .createGuides({
      axes: {
        x: {
          line: {},
          ticksAndLabels: {
            values: [0, 50, 100, 150, 200],
            ticks: {},
            labels: { fontSize: 10, fontFamily: "sans-serif", offset: 7 }
          },
          title: {
            text: "Horsepower",
            fontSize: 11,
            fontWeight: 700,
            fontFamily: "sans-serif",
            offset: 28
          }
        },
        y: {
          line: {},
          ticksAndLabels: {
            values: [0, 10, 20, 30, 40, 50],
            ticks: {},
            labels: { fontSize: 10, fontFamily: "sans-serif", offset: 7 }
          },
          title: {
            text: "Miles_per_Gallon",
            fontSize: 11,
            fontWeight: 700,
            fontFamily: "sans-serif",
            offset: 31,
            rotation: { value: -90, unit: "degrees" }
          }
        }
      },
      grid: {
        horizontal: { color: "#ddd", lineWidth: 1 },
        vertical: { color: "#ddd", lineWidth: 1 }
      },
      legend: {
        representation: "gradient",
        position: "right",
        title: "accelerationZScore",

        gradient: { length: 200 },
        titleStyle: { fontSize: 11, fontWeight: 700, fontFamily: "sans-serif" },
        labels: { fontSize: 10, fontFamily: "sans-serif" }
      }
    });
}