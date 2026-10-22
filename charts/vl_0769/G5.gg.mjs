import { chart } from "ggaction";
import data from "./data.json";
import lineData from "./line-data.json";
import textData from "./text-data.json";

// DOCS: doc-8a4f6f06e0d37d5e

export function buildChart() {
  return chart()
    .createCanvas({
      plot: { width: 300, height: 300 },
      margin: { left: 39, right: 66, top: 53, bottom: 37 },
      plotBorder: { underlay: true }
    })
    .applyTextMetrics({
      profile: {
        schemaVersion: 1,
        id: "source0769-two-original-SVG-widths",
        measurements: [
          { text: "0", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 5.5625 },
          { text: "50", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 11.125 }
        ]
      }
    })
    .createTitle({
      text: "Regressing WGI Overall Score on Median Age using data from 2022",
      titleStyle: { fontSize: 12, fontWeight: 700, color: "black" },
      alongOffset: -33.123046875
    })
    .editTitle({ offset: -6.390625 })
    .editTitle({
      subtitle: "Religiosity measured as the percentage of the population who consider religion important\nSources: CAF and Worldometers",
      subtitleStyle: { fontSize: 10, fontWeight: 400, fontStyle: "italic", color: "black" },
      gap: 3.578125
    })
    .createData({ values: lineData })
    .createLinePlot({
      x: { field: "Median_Age_2022" },
      y: { field: "CAF_2022" },
      guides: false
    })
    .editXScale({ domain: [0, 50] })
    .editYScale({ domain: [0, 70] })
    .editLineMark({ stroke: "#603881", strokeWidth: 2, clip: true })
    .createData({ id: "countries", values: data })
    .createComputedData({
      id: "numericX",
      as: "sourceMedianAge",
      expression: { op: "toNumber", operand: { field: "Median_Age_2022" } }
    })
    .createComputedData({
      id: "numericY",
      as: "sourceCAF",
      expression: { op: "toNumber", operand: { field: "CAF_2022" } }
    })
    .createScatterPlot({
      x: { field: "sourceMedianAge", scale: { id: "x" } },
      y: { field: "sourceCAF", scale: { id: "y" } },
      guides: false
    })
    .encodePointRadius({ value: 2.7386127875258306 })
    .editPointMark({ fill: "#339a36", stroke: false, opacity: 0.9 })
    .createData({ id: "annotation", values: textData })
    .createTextMark({ fill: "red", fontSize: 12, align: "center" })
    .editTextMark({ baseline: "middle", dy: 0.859375 })
    .encodeX({ field: "Median_Age_2022", scale: { id: "x" } })
    .encodeY({ field: "CAF_2022", scale: { id: "y" } })
    .encodeText({ field: "text" })
    .createAxes({
      x: {
        scale: "x",
        ticksAndLabels: {
          values: [0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50],
          labels: { fontSize: 10, color: "#000", offset: 5.5, alongOffset: 0.5, flush: true }
        },
        title: { text: "Median Age (years)", fontSize: 11, fontWeight: 700, color: "#000", offset: 27.578125, alongOffset: 0.5 },
        underlay: true
      },
      y: {
        scale: "y",
        ticksAndLabels: {
          values: [0, 10, 20, 30, 40, 50, 60, 70],
          labels: { fontSize: 10, color: "#000", offset: 6.5, alongOffset: 0.890625 }
        },
        title: { text: "WGI overall score (out of 100)", fontSize: 11, fontWeight: 700, color: "#000", offset: 26.544921875, alongOffset: 0.5 },
        underlay: true
      }
    })
    .editXAxis({
      line: { color: "#888" }
    })
    .editXAxisTicks({
      length: 5,
      color: "#888",
      alongOffset: 0.5
    })
    .editYAxis({
      line: { color: "#888" }
    })
    .editYAxisTicks({
      length: 5,
      color: "#888",
      alongOffset: 0.5
    });
}