import { chart } from "ggaction";
// DOCS: doc-03a2b0935e71ba1f docs/tutorials/regression-scatterplot.md
import data from "./data.json";
import lineData from "./line-data.json";
import textData from "./text-data.json";

export function buildChart() {
  return chart()
    .createCanvas({
      plot: { width: 300, height: 300 },
      margin: { left: 39, right: 107, top: 53, bottom: 37 },
      plotBorder: { underlay: true }
    })
    .applyTextMetrics({
      profile: {
        schemaVersion: 1,
        id: "source0770-one-original-SVG-width",
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
    .createTitle({
      text: "Regressing WGI Overall Score on GDP per capita using data from 2018-2022",
      titleStyle: { fontSize: 12, fontWeight: 700, color: "black" },
      alongOffset: -33.123046875
    })
    .editTitle({ offset: -6.390625 })
    .editTitle({
      subtitle: "GDP per capita measured in current US$\nSources: CAF, World Bank and World Population Review",
      subtitleStyle: { fontSize: 10, fontWeight: 400, fontStyle: "italic", color: "black" },
      gap: 3.578125
    })
    .createData({ values: lineData })
    .createLinePlot({
      x: { field: "GDPpc" },
      y: { field: "WGI" },
      guides: false
    })
    .editXScale({ domain: [0, 110000] })
    .editYScale({ domain: [0, 70] })
    .editLineMark({ stroke: "#603881", strokeWidth: 2, clip: true })
    .createData({ id: "countries", values: data })
    .createComputedData({
      id: "numericX",
      as: "sourceGDPpc",
      expression: { op: "toNumber", operand: { field: "GDPpc" } }
    })
    .createComputedData({
      id: "numericY",
      as: "sourceWGI",
      expression: { op: "toNumber", operand: { field: "WGI" } }
    })
    .createScatterPlot({
      x: { field: "sourceGDPpc", scale: { id: "x" } },
      y: { field: "sourceWGI", scale: { id: "y" } },
      guides: false
    })
    .encodePointRadius({ value: 2.7386127875258306 })
    .editPointMark({ fill: "#646fac", stroke: false, opacity: 0.9 })
    .createData({ id: "annotation", values: textData })
    .createTextMark({ fill: "red", fontSize: 12, align: "center" })
    .editTextMark({ baseline: "middle", dy: 0.859375 })
    .encodeX({ field: "GDPpc", scale: { id: "x" } })
    .encodeY({ field: "WGI", scale: { id: "y" } })
    .encodeText({ field: "text" })
    .createAxes({
      x: {
        scale: "x",
        ticksAndLabels: {
          values: [0, 10000, 20000, 30000, 40000, 50000, 60000, 70000, 80000, 90000, 100000, 110000],
          labels: {
            fontSize: 10,
            format: ",.0f",
            offset: 5.5,
            flush: true,
            labelMap: [
              { value: 10000, label: "" },
              { value: 30000, label: "" },
              { value: 50000, label: "" },
              { value: 70000, label: "" },
              { value: 90000, label: "" },
              { value: 110000, label: "" }
            ]
          }
        },
        title: {
          text: "GDP per capita (current US$)",
          fontSize: 11,
          fontWeight: 700,
          color: "#000",
          offset: 27.578125,
          alongOffset: 0.5
        },
        underlay: true
      },
      y: {
        scale: "y",
        ticksAndLabels: {
          values: [0, 10, 20, 30, 40, 50, 60, 70],
          labels: { fontSize: 10, offset: 6.5 }
        },
        title: {
          text: "WGI overall score (out of 100)",
          fontSize: 11,
          fontWeight: 700,
          color: "#000",
          offset: 26.544921875,
          alongOffset: 0.5
        },
        underlay: true
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
    });
}