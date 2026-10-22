// Guide construction per doc-2b2e3149e57e859d (createScatterPlot)
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({
      margin: { left: 39, top: 10, right: 90, bottom: 37 },
      plot: { width: 200, height: 200 },
      plotBorder: {}
    })
    .applyTextMetrics({
      profile: {
        schemaVersion: 1,
        id: "source1588-zero-label-width",
        measurements: [
          {
            text: "0",
            fontFamily: "sans-serif",
            fontSize: 10,
            fontWeight: 400,
            fontStyle: "normal",
            width: 5.5625
          }
        ]
      }
    })
    .createData({ values: data })
    .createComputedData({
      id: "zScore",
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
    .filterData({ id: "definedHP", field: "Horsepower", noneOf: [null] })
    .filterData({ id: "definedMPG", field: "Miles_per_Gallon", noneOf: [null] })
    .createScatterPlot({
      x: "Horsepower",
      y: "Miles_per_Gallon",
      guides: false
    })
    .editXScale({ domain: [0, 240] })
    .editYScale({ domain: [0, 50] })
    .editPointMark({ stroke: false, opacity: 1 })
    .encodePointRadius({ value: 3.872983346207417 })
    .encodeColor({
      field: "Acceleration",
      fieldType: "quantitative",
      scale: {
        domain: [8, 24.8],
        range: ["yellow", "red"],
        interpolate: "cubehelix-long",
        gamma: -0.1
      }
    })
    .createXAxis({
      ticksAndLabels: {
        values: [0, 50, 100, 150, 200],
        ticks: { length: 5 },
        labels: {
          fontSize: 10,
          offset: 5.5,
          alongOffset: 0.5,
          flush: true
        }
      },
      title: {
        fontSize: 11,
        fontWeight: 700,
        offset: 27.578125,
        alongOffset: 0.5
      }
    })
    .editXAxis({
      line: { color: "#888" },
      ticksAndLabels: {
        ticks: { color: "#888" },
        labels: { color: "black" }
      },
      title: { color: "black" }
    })
    .createYAxis({
      ticksAndLabels: {
        values: [0, 10, 20, 30, 40, 50],
        ticks: { length: 5 },
        labels: {
          fontSize: 10,
          offset: 6.5,
          alongOffset: 0.890625
        }
      },
      title: {
        fontSize: 11,
        fontWeight: 700,
        offset: 26.544921875,
        alongOffset: 0.5
      }
    })
    .editYAxis({
      line: { color: "#888" },
      ticksAndLabels: {
        ticks: { color: "#888" },
        labels: { color: "black" }
      },
      title: { color: "black" }
    })
    .createGrid({
      horizontal: { values: [0, 10, 20, 30, 40, 50], color: "#ddd" },
      vertical: { values: [0, 50, 100, 150, 200], color: "#ddd" }
    })
    .createGuides({
      axes: false,
      grid: false,
      legend: {
        offset: 18,
        values: [10, 15, 20],
        labels: { fontSize: 10, color: "black", offset: 2 },
        titleStyle: { fontSize: 11, fontWeight: 700, color: "black" },
        titlePadding: 3,
        gradient: { length: 200, thickness: 16 }
      }
    })
;
}