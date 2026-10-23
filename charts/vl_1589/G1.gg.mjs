import { chart } from "ggaction";
import data from "./data.json";
// docs: doc-276d35c7791587fd

export function buildChart() {
  return chart()
    .createCanvas({
      plot: { width: 200, height: 200 },
      margin: { left: 39, top: 10, right: 90, bottom: 37 },
      plotBorder: {}
    })
    .applyTextMetrics({
      profile: {
        schemaVersion: 1,
        id: "source1589-zero-label-width",
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
      id: "accelerationZScore",
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
    .filterData({ id: "hpValid", field: "Horsepower", noneOf: [null] })
    .filterData({ id: "mpgValid", field: "Miles_per_Gallon", noneOf: [null] })
    .createScatterPlot({
      x: { field: "Horsepower", scale: { domain: [0, 240] } },
      y: { field: "Miles_per_Gallon", scale: { domain: [0, 50] } },
      guides: false
    })
    .editPointMark({ stroke: false, opacity: 1 })
    .encodePointRadius({ value: 3.872983346207417 })
    .encodeColor({
      field: "Acceleration",
      fieldType: "quantitative",
      scale: {
        domain: [8, 24.8],
        range: ["yellow", "red"],
        interpolate: "cubehelix-long",
        gamma: 0
      }
    })
    .createAxes({
      x: {
        line: { color: "#888" },
        ticksAndLabels: {
          values: [0, 50, 100, 150, 200],
          ticks: { length: 5, color: "#888" },
          labels: {
            fontSize: 10,
            color: "black",
            offset: 5.5,
            alongOffset: 0.5,
            flush: true
          }
        },
        title: {
          fontSize: 11,
          fontWeight: 700,
          color: "black",
          offset: 27.578125,
          alongOffset: 0.5
        }
      },
      y: {
        line: { color: "#888" },
        ticksAndLabels: {
          values: [0, 10, 20, 30, 40, 50],
          ticks: { length: 5, color: "#888" },
          labels: {
            fontSize: 10,
            color: "black",
            offset: 6.5,
            alongOffset: 0.890625
          }
        },
        title: {
          fontSize: 11,
          fontWeight: 700,
          color: "black",
          offset: 26.544921875,
          alongOffset: 0.5
        }
      }
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
        gradient: { length: 200, thickness: 16 },
        labels: { fontSize: 10, color: "black", offset: 2 },
        titleStyle: { fontSize: 11, fontWeight: 700, color: "black" },
        titlePadding: 3
      }
    });
}