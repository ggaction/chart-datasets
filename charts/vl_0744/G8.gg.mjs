import { chart } from "ggaction";
import data from "./data.json";
import lineData from "./line-data.json";
import textData from "./text-data.json";

// DOCS: doc-8a4f6f06e0d37d5e

export function buildChart() {
  return chart()
    .createCanvas({
      width: 245,
      height: 302,
      margin: { left: 39, right: 6, top: 65, bottom: 37 }
    })
    .editCanvas({ plotBorder: { underlay: true } })
    .applyTextMetrics({
      profile: {
        schemaVersion: 1,
        id: "source0744-flush-endpoint-widths",
        measurements: [
          { text: "0", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 5.5625 },
          { text: "50", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 11.125 }
        ]
      }
    })
    .createTitle({
      text: "Regressing WGI Score on Median Age",
      titleStyle: { fontSize: 12, fontWeight: 700 },
      alongOffset: -33.123046875
    })
    .editTitle({ offset: -10.1875 })
    .editTitle({
      titleStyle: { color: "black" },
      subtitleStyle: { color: "black" }
    })
    .editTitle({
      subtitle: "Median Age measured in years\nSources: CAF and Worldometers",
      subtitleStyle: { fontSize: 10, fontWeight: 400, fontStyle: "italic" },
      gap: 3.578125
    })
    .createData({ values: lineData })
    .createLinePlot({
      x: { field: "Median_Age_2022" },
      y: { field: "CAF_2022" },
      guides: false
    })
    .encodeX({
      field: "Median_Age_2022",
      scale: { domain: [0, 50] }
    })
    .encodeY({
      field: "CAF_2022",
      scale: { domain: [0, 70] }
    })
    .editLineMark({ stroke: "#2c2a2e", strokeWidth: 2, clip: true })
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
    .editPointMark({ fill: "#3188cf", stroke: false, opacity: 0.9 })
    .createData({ id: "annotation", values: textData })
    .createTextMark({ fill: "red", fontSize: 12, align: "center" })
    .editTextMark({ baseline: "middle", dy: 0.859375 })
    .encodeX({ field: "Median_Age_2022", scale: { id: "x" } })
    .encodeY({ field: "CAF_2022", scale: { id: "y" } })
    .encodeText({ field: "text" })
    .createAxes({
      x: {
        scale: "x",
        underlay: true,
        ticksAndLabels: {
          values: [0, 10, 20, 30, 40, 50],
          labels: { fontSize: 10, offset: 5.5, flush: true }
        },
        title: {
          text: "Median Age (years)",
          fontSize: 11,
          fontWeight: 700
        }
      },
      y: {
        scale: "y",
        underlay: true,
        ticksAndLabels: {
          values: [0, 10, 20, 30, 40, 50, 60, 70],
          labels: { fontSize: 10, offset: 6.5 }
        },
        title: {
          text: "WGI overall score (out of 100)",
          fontSize: 11,
          fontWeight: 700
        }
      }
    })
    .editXAxis({
      line: { color: "#888" }
    })
    .editYAxis({
      line: { color: "#888" }
    })
    .editXAxisTicks({
      length: 5,
      color: "#888",
      alongOffset: 0.5
    })
    .editYAxisTicks({
      length: 5,
      color: "#888",
      alongOffset: 0.5
    })
    .editXAxisLabels({
      color: "#000",
      alongOffset: 0.5
    })
    .editYAxisLabels({
      color: "#000",
      alongOffset: 0.890625
    })
    .editXAxisTitle({
      color: "#000",
      offset: 27.578125,
      alongOffset: 0.5
    })
    .editYAxisTitle({
      color: "#000",
      offset: 26.544921875,
      alongOffset: 0.5
    });
}