import { chart } from "ggaction";
import data from "./data.json";
import lineData from "./line-data.json";
import textData from "./text-data.json";

// DOCS: doc-8a4f6f06e0d37d5e

export function buildChart() {
  return chart()
    .createCanvas({
      plot: { width: 200, height: 200 },
      margin: { left: 39, right: 24, top: 65, bottom: 37 },
      plotBorder: { underlay: true }
    })
    .applyTextMetrics({
      profile: {
        schemaVersion: 1,
        id: "source0746-two-source-SVG-widths",
        measurements: [
          { text: "0", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 5.5625 },
          { text: "100,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 36.15625 }
        ]
      }
    })
    .createTitle({
      text: "Regressing WGI Score on GDP per capita",
      titleStyle: { fontSize: 12, fontWeight: 700, color: "black" },
      alongOffset: -33.123046875
    })
    .editTitle({ offset: 5.609375 })
    .editTitle({
      subtitle: "GDP per capita measured in current US$\nSources: CAF, World Bank and World Population Review",
      subtitleStyle: { fontSize: 10, fontWeight: 400, fontStyle: "italic", color: "black" },
      gap: 3.578125
    })
    .createData({ values: lineData })
    .createLinePlot({
      x: { field: "GDPpc", scale: { domain: [0, 110000] } },
      y: { field: "WGI", scale: { domain: [0, 70] } },
      guides: false
    })
    .editLineMark({ stroke: "#2c2a2e", strokeWidth: 2, clip: true })
    .createData({ id: "countries", values: data })
    .createComputedData({ id: "numericX", as: "sourceGDPpc", expression: { op: "toNumber", operand: { field: "GDPpc" } } })
    .createComputedData({ id: "numericY", as: "sourceWGI", expression: { op: "toNumber", operand: { field: "WGI" } } })
    .createScatterPlot({
      x: { field: "sourceGDPpc", scale: { id: "x" } },
      y: { field: "sourceWGI", scale: { id: "y" } },
      guides: false
    })
    .encodePointRadius({ value: 2.7386127875258306 })
    .editPointMark({ fill: "#2bb660", stroke: false, opacity: 0.9 })
    .createData({ id: "annotation", values: textData })
    .createTextMark({ fill: "red", fontSize: 12, align: "center" })
    .editTextMark({ baseline: "middle", dy: 0.859375 })
    .encodeX({ field: "GDPpc", scale: { id: "x" } })
    .encodeY({ field: "WGI", scale: { id: "y" } })
    .encodeText({ field: "text" })
    .createGuides({
      axes: {
        x: {
          scale: "x",
          line: { color: "#888" },
          ticksAndLabels: {
            values: [0, 20000, 40000, 60000, 80000, 100000],
            ticks: { length: 5, color: "#888", alongOffset: 0.5 },
            labels: { fontSize: 10, color: "#000", format: ",.0f", offset: 5.5, alongOffset: 0.5, flush: true }
          },
          title: { text: "GDP per capita (current US$)", fontSize: 11, fontWeight: 700, color: "#000", offset: 27.578125, alongOffset: 0.5 },
          underlay: true
        },
        y: {
          scale: "y",
          line: { color: "#888" },
          ticksAndLabels: {
            values: [0, 10, 20, 30, 40, 50, 60, 70],
            ticks: { length: 5, color: "#888", alongOffset: 0.5 },
            labels: { fontSize: 10, color: "#000", offset: 6.5, alongOffset: 0.890625 }
          },
          title: { text: "WGI overall score (out of 100)", fontSize: 11, fontWeight: 700, color: "#000", offset: 26.544921875, alongOffset: 0.5 },
          underlay: true
        }
      },
      grid: false,
      legend: false
    });
}