// SOURCE1666 horizontal concat of two line children (doc-b9261a4b2909a353 createLinePlot wraps encodeStrokeDash/createGuides; doc-cbebf93910cdde5e program composition via hconcat)
import { chart, hconcat } from "ggaction";
import data from "./data.json";

export function buildChart() {
  // child0: strokeDash fieldType nominal (doc-b9261a4b2909a353)
  const child0 = chart()
    .createCanvas({
      plot: { width: 200, height: 200 },
      margin: { left: 30, top: 28, right: 52, bottom: 23 },
      plotBorder: { color: "#ddd", lineWidth: 1, underlay: true }
    })
    .applyTextMetrics({
      profile: {
        schemaVersion: 1,
        id: "vl_1666-original-font-widths",
        measurements: [
          { text: "0.0", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 13.90625 },
          { text: "1.0", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 13.90625 }
        ]
      }
    })
    .createData({ values: data })
    .createLinePlot({
      x: { field: "x" },
      y: { field: "y" },
      guides: false
    })
    .editYScale({ domain: [0, 100] })
    .encodeStrokeDash({
      field: "cat"
    })
    .editStrokeDashScale({ range: [[1, 0], [4, 2], [2, 1], [1, 1], [1, 2, 4, 2]] })
    .editLineMark({ stroke: "orange", strokeWidth: 1, opacity: 0.6 })
    .createAxes({
      x: {
        underlay: true,
        line: {},
        ticksAndLabels: {
          values: [0, 0.2, 0.4, 0.6, 0.8, 1],
          ticks: { length: 5, alongOffset: 0.5 },
          labels: { fontSize: 10, offset: 5.5, alongOffset: 0.5, flush: true, format: ".1f" }
        },
        title: false
      },
      y: {
        underlay: true,
        line: {},
        ticksAndLabels: {
          values: [0, 20, 40, 60, 80, 100],
          ticks: { length: 5, alongOffset: 0.5 },
          labels: { fontSize: 10, offset: 6.5, alongOffset: 0.890625 }
        },
        title: false
      }
    })
    .editXAxis({ line: { color: "#888" }, ticksAndLabels: { ticks: { color: "#888" }, labels: { color: "black" } } })
    .editYAxis({ line: { color: "#888" }, ticksAndLabels: { ticks: { color: "#888" }, labels: { color: "black" } } })
    .createLegend({
      labels: { fontSize: 10, color: "black" },
      titleStyle: { fontSize: 11, fontWeight: 700, color: "black" },
      symbol: { layers: [{ type: "line", length: 10, lineWidth: 1, opacity: 1 }] }
    })
    .editLegend({ titlePadding: 3 })
    .editLegendBlock({ target: "linePlot", channel: "strokeDash", symbol: { stroke: "orange" } })
    .createTitle({
      text: "Nominal",
      offset: -7.046875,
      titleStyle: { fontSize: 13, fontWeight: 700, color: "black" }
    })
    .editTitle({ align: "center" });

  // child1: strokeDash fieldType ordinal (doc-b9261a4b2909a353)
  const child1 = chart()
    .createCanvas({
      plot: { width: 200, height: 200 },
      margin: { left: 30, top: 28, right: 52, bottom: 23 },
      plotBorder: { color: "#ddd", lineWidth: 1, underlay: true }
    })
    .applyTextMetrics({
      profile: {
        schemaVersion: 1,
        id: "vl_1666-original-font-widths",
        measurements: [
          { text: "0.0", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 13.90625 },
          { text: "1.0", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 13.90625 }
        ]
      }
    })
    .createData({ values: data })
    .createLinePlot({
      x: { field: "x" },
      y: { field: "y" },
      guides: false
    })
    .editYScale({ domain: [0, 100] })
    .encodeStrokeDash({
      field: "cat",
      fieldType: "ordinal"
    })
    .editStrokeDashScale({ range: [[1, 0], [4, 2], [2, 1], [1, 1], [1, 2, 4, 2]] })
    .editLineMark({ stroke: "orange", strokeWidth: 1, opacity: 0.6 })
    .createAxes({
      x: {
        underlay: true,
        line: {},
        ticksAndLabels: {
          values: [0, 0.2, 0.4, 0.6, 0.8, 1],
          ticks: { length: 5, alongOffset: 0.5 },
          labels: { fontSize: 10, offset: 5.5, alongOffset: 0.5, flush: true, format: ".1f" }
        },
        title: false
      },
      y: {
        underlay: true,
        line: {},
        ticksAndLabels: {
          values: [0, 20, 40, 60, 80, 100],
          ticks: { length: 5, alongOffset: 0.5 },
          labels: { fontSize: 10, offset: 6.5, alongOffset: 0.890625 }
        },
        title: false
      }
    })
    .editXAxis({ line: { color: "#888" }, ticksAndLabels: { ticks: { color: "#888" }, labels: { color: "black" } } })
    .editYAxis({ line: { color: "#888" }, ticksAndLabels: { ticks: { color: "#888" }, labels: { color: "black" } } })
    .createLegend({
      labels: { fontSize: 10, color: "black" },
      titleStyle: { fontSize: 11, fontWeight: 700, color: "black" },
      symbol: { layers: [{ type: "line", length: 10, lineWidth: 1, opacity: 1 }] }
    })
    .editLegend({ titlePadding: 3 })
    .editLegendBlock({ target: "linePlot", channel: "strokeDash", symbol: { stroke: "orange" } })
    .createTitle({
      text: "Ordinal",
      offset: -7.046875,
      titleStyle: { fontSize: 13, fontWeight: 700, color: "black" }
    })
    .editTitle({ align: "center" });

  // parent composition: measured gap 10, align start (doc-cbebf93910cdde5e program composition)
  return hconcat({
    programs: [
      { id: "panel0", program: child0 },
      { id: "panel1", program: child1 }
    ],
    gap: 10,
    align: "start"
  });
}