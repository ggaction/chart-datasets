import { chart, hconcat } from "ggaction";
import data from "./data.json";

export function buildChart() {
  const child0 = chart()
    // DOCS: doc-b9261a4b2909a353 createLinePlot
    .createCanvas({
      plot: { width: 200, height: 200 },
      margin: { left: 30, top: 28, right: 46, bottom: 23 },
      plotBorder: { color: "#ddd", lineWidth: 1, underlay: true }
    })
    .applyTextMetrics({
      profile: {
        schemaVersion: 1,
        id: "vl_1667-original-font-widths",
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
    .encodeStrokeDash({ field: "cat" })
    .editStrokeDashScale({
      domain: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
      range: [[1, 0], [5, 4], [2, 4], [8, 4, 4, 4], [1, 3], [16, 4], [6, 4], [8, 4], [4, 6], [10, 4]],
      unknown: []
    })
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
    .editXAxisLine({ color: "#888" })
    .editXAxisTicks({ color: "#888" })
    .editXAxisLabels({ color: "black" })
    .editYAxisLine({ color: "#888" })
    .editYAxisTicks({ color: "#888" })
    .editYAxisLabels({ color: "black" })
    .createLegend({
      titleStyle: { fontSize: 11 },
      labels: { fontSize: 10 },
      symbol: { layers: [{ type: "line", length: 10, lineWidth: 1 }] }
    })
    .editLegend({ titlePadding: 3, labels: { color: "black" }, titleStyle: { fontWeight: 700, color: "black" } })
    .createTitle({
      text: "Nominal",
      titleStyle: { fontSize: 13, fontWeight: 700, color: "black" },
      offset: -7.046875
    })
    .editTitle({ align: "center" });

  const child1 = chart()
    // DOCS: doc-b9261a4b2909a353 createLinePlot
    .createCanvas({
      plot: { width: 200, height: 200 },
      margin: { left: 30, top: 28, right: 46, bottom: 23 },
      plotBorder: { color: "#ddd", lineWidth: 1, underlay: true }
    })
    .applyTextMetrics({
      profile: {
        schemaVersion: 1,
        id: "vl_1667-original-font-widths",
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
    .encodeStrokeDash({ field: "cat", fieldType: "ordinal" })
    .editStrokeDashScale({
      domain: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
      range: [[1, 0], [5, 4], [2, 4], [8, 4, 4, 4], [1, 3], [16, 4], [6, 4], [8, 4], [4, 6], [10, 4]],
      unknown: []
    })
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
    .editXAxisLine({ color: "#888" })
    .editXAxisTicks({ color: "#888" })
    .editXAxisLabels({ color: "black" })
    .editYAxisLine({ color: "#888" })
    .editYAxisTicks({ color: "#888" })
    .editYAxisLabels({ color: "black" })
    .createLegend({
      titleStyle: { fontSize: 11 },
      labels: { fontSize: 10 },
      symbol: { layers: [{ type: "line", length: 10, lineWidth: 1 }] }
    })
    .editLegend({ titlePadding: 3, labels: { color: "black" }, titleStyle: { fontWeight: 700, color: "black" } })
    .createTitle({
      text: "Ordinal",
      titleStyle: { fontSize: 13, fontWeight: 700, color: "black" },
      offset: -7.046875
    })
    .editTitle({ align: "center" });

  // DOCS: doc-cbebf93910cdde5e program composition
  return hconcat({
    programs: [
      { id: "panel0", program: child0 },
      { id: "panel1", program: child1 }
    ],
    gap: 10,
    align: "start"
  });
}