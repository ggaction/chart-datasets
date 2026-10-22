// DOCS: doc-2b2e3149e57e859d, doc-8c1e8e710e83918a, doc-8270cd43de503558
import { chart } from "ggaction";
import data from "./data.json";
import lineData from "./line-data.json";

export function buildChart() {
  return chart()
    .createCanvas({
      plot: { width: 400, height: 300 },
      margin: { left: 39, top: 5, right: 9, bottom: 37 },
      plotBorder: { color: "#ddd", lineWidth: 1 }
    })
    .applyTextMetrics({
      profile: {
        schemaVersion: 1,
        id: "vl_1492-full-original-font-widths",
        measurements: [
          { text: "0.0", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 13.90625 },
          { text: "0.2", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 13.90625 },
          { text: "0.4", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 13.90625 },
          { text: "0.6", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 13.90625 },
          { text: "0.8", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 13.90625 },
          { text: "1.0", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 13.90625 },
          { text: "1.2", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 13.90625 },
          { text: "1.4", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 13.90625 },
          { text: "1.6", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 13.90625 },
          { text: "1.8", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 13.90625 },
          { text: "2.0", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 13.90625 },
          { text: "x", fontFamily: "sans-serif", fontSize: 11, fontWeight: 700, fontStyle: "normal", width: 6.125 },
          { text: "0", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 5.5625 },
          { text: "2", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 5.5625 },
          { text: "4", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 5.5625 },
          { text: "6", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 5.5625 },
          { text: "8", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 5.5625 },
          { text: "10", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 11.125 },
          { text: "12", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 11.125 },
          { text: "y", fontFamily: "sans-serif", fontSize: 11, fontWeight: 700, fontStyle: "normal", width: 6.125 }
        ]
      }
    })
    .createData({ values: data })
    .createScatterPlot({ x: "x", y: "y", guides: false })
    .editXScale({ domain: [0, 2] })
    .editYScale({ domain: [0, 13], nice: false })
    .encodePointRadius({ value: 3.5355339059327378 })
    .editPointMark({ fill: "red", stroke: false, opacity: 0.7 })
    .createData({ id: "line", values: lineData })
    .createLinePlot({ x: { field: "x", scale: { id: "x" } }, y: { field: "y", scale: { id: "y" } }, guides: false })
    .encodePathOrder({ field: "x" })
    .editLineMark({ stroke: "#4c78a8", strokeWidth: 3 })
    .createAxes({
      x: {
        ticksAndLabels: {
          values: [0, 0.2, 0.4, 0.6, 0.8, 1, 1.2, 1.4, 1.6, 1.8, 2],
          ticks: { length: 5, alongOffset: 0.5 },
          labels: { fontSize: 10, offset: 5.5, alongOffset: 0.5, flush: true, format: ".1f" }
        },
        title: { text: "x", fontSize: 11, offset: 27.578125, alongOffset: 0.5 }
      },
      y: {
        ticksAndLabels: {
          values: [0, 2, 4, 6, 8, 10, 12],
          ticks: { length: 5, alongOffset: 0.5 },
          labels: { fontSize: 10, offset: 6.5, alongOffset: 0.890625 }
        },
        title: { text: "y", fontSize: 11, offset: 26.544921875, alongOffset: 0.5, rotation: { value: -90, unit: "degrees" } }
      }
    })
    .editXAxis({
      line: { color: "#888" },
      ticksAndLabels: { ticks: { color: "#888" }, labels: { color: "#000" } },
      title: { fontWeight: 700, color: "#000" }
    })
    .editYAxis({
      line: { color: "#888" },
      ticksAndLabels: { ticks: { color: "#888" }, labels: { color: "#000" } },
      title: { fontWeight: 700, color: "#000" }
    })
    .createGrid({ vertical: { color: "#ddd" }, horizontal: { color: "#ddd" } });
}