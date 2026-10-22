// DOCS: doc-2b2e3149e57e859d, doc-8c1e8e710e83918a, doc-7184b02978bdf5d1
import { chart } from "ggaction";
import data from "./data.json";
import lineData from "./line-data.json";

export function buildChart() {
  return chart()
    .createCanvas({
      plot: { width: 400, height: 300 },
      margin: { left: 39, top: 11, right: 61, bottom: 37 },
      plotBorder: { color: "#ddd", lineWidth: 1 }
    })
    .applyTextMetrics({
      profile: {
        schemaVersion: 1,
        id: "vl_1496-x-edge-source-font-widths",
        measurements: [
          { text: "0", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 5.5625 },
          { text: "10", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 11.125 }
        ]
      }
    })
    .createData({ values: data })
    .createScatterPlot({
      x: "studied",
      y: "slept",
      guides: false
    })
    .editXScale({ domain: [0, 10] })
    .editYScale({ domain: [-2, 11], nice: false })
    .encodeColor({
      field: "passed",
      scale: { domain: [0, 1], palette: "tableau10" }
    })
    .encodePointRadius({ value: 5 })
    .editPointMark({ stroke: false, opacity: 0.7 })
    .createData({ id: "line", values: lineData })
    .createLinePlot({
      x: { field: "x", scale: { id: "x" } },
      y: { field: "y", scale: { id: "y" } },
      guides: false
    })
    .editLineMark({ stroke: "red", strokeWidth: 3 })
    .createAxes({
      x: {
        ticksAndLabels: {
          values: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
          ticks: { length: 5, alongOffset: 0.5 },
          labels: { fontSize: 10, offset: 5.5, alongOffset: 0.5, flush: true }
        },
        title: { text: "studied", fontSize: 11, offset: 27.578125, alongOffset: 0.5 }
      },
      y: {
        ticksAndLabels: {
          values: [-2, 0, 2, 4, 6, 8, 10],
          ticks: { length: 5, alongOffset: 0.5 },
          labels: {
            fontSize: 10,
            offset: 6.5,
            alongOffset: 0.890625,
            labelMap: [{ value: -2, label: "−2" }]
          }
        },
        title: {
          text: "slept",
          fontSize: 11,
          offset: 26.8232421875,
          alongOffset: 0.5,
          rotation: { value: -90, unit: "degrees" }
        }
      }
    })
    .editXAxisLine({ color: "#888" })
    .editXAxisTicksAndLabels({ ticks: { color: "#888" }, labels: { color: "#000" } })
    .editXAxisTitle({ fontWeight: 700, color: "#000" })
    .editYAxisLine({ color: "#888" })
    .editYAxisTicksAndLabels({ ticks: { color: "#888" }, labels: { color: "#000" } })
    .editYAxisTitle({ fontWeight: 700, color: "#000" })
    .createGrid({ vertical: { color: "#ddd" }, horizontal: { color: "#ddd" } })
    .createLegend({
      titleStyle: { fontSize: 11, fontWeight: 700, color: "#000" },
      labels: { fontSize: 10, color: "#000" },
      symbol: { layers: [{ type: "point", size: 5, opacity: 0.7 }] }
    });
}