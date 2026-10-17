// DOCS: doc-b11b4627b143730d, doc-76573a465e2b6a33, doc-8a4f6f06e0d37d5e
export function buildChart() {
  return chart()
    .createCanvas({ width: 246, height: 247, margin: { left: 39, top: 10, right: 7, bottom: 37 } })
    .editCanvas({ plotBorder: { color: "#ddd", lineWidth: 1 } })
    .createData({ values: data })
    .createAreaPlot({
      x: { field: "Year", fieldType: "temporal" },
      y: { lower: "ci1", upper: "ci0" },
      guides: false
    })
    .editAreaMark({ opacity: 0.3 })
    .createLinePlot({
      x: { field: "Year", fieldType: "temporal" },
      y: { field: "center" },
      guides: false
    })
    .editLineMark({ stroke: "#4c78a8", strokeWidth: 2 })
    .editYScale({ target: "areaPlot", domain: [19, 28], nice: false })
    .editXScale({ target: "areaPlot", domain: [189302400000, 283996800000], nice: false })
    .applyTextMetrics({
      profile: {
        schemaVersion: 1,
        id: "0024-source-browser-fonts",
        measurements: [
          { text: "1976", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 22.25 },
          { text: "1977", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 22.25 },
          { text: "1978", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 22.25 },
          { text: "1979", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 22.25 },
          { text: "Year (year)", fontFamily: "sans-serif", fontSize: 11, fontWeight: 700, fontStyle: "normal", width: 56.28125 },
          { text: "20", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 11.125 },
          { text: "22", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 11.125 },
          { text: "24", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 11.125 },
          { text: "26", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 11.125 },
          { text: "28", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 11.125 },
          { text: "Mean of Miles per Gallon (95% CIs)", fontFamily: "sans-serif", fontSize: 11, fontWeight: 700, fontStyle: "normal", width: 182.15625 }
        ]
      }
    })
    .createHorizontalGrid({ values: [20, 22, 24, 26, 28], lineWidth: 1 })
    .createVerticalGrid({ values: [189302400000, 220924800000, 252460800000, 283996800000], lineWidth: 1 })
    .editHorizontalGrid({ color: "#ddd" })
    .editVerticalGrid({ color: "#ddd" })
    .createXAxis({
      line: { lineWidth: 1 },
      ticksAndLabels: {
        values: [189302400000, 220924800000, 252460800000, 283996800000],
        ticks: { length: 5, lineWidth: 1 },
        labels: { fontSize: 10, offset: 5.5, alongOffset: 0.5, flush: true, format: "%Y" }
      },
      title: { text: "Year (year)", fontSize: 11, offset: 27.578125 }
    })
    .editXAxisLine({ color: "#888" })
    .editXAxisTicks({ color: "#888" })
    .editXAxisLabels({ color: "black" })
    .editXAxisTitle({ color: "black", fontWeight: 700 })
    .createYAxis({
      line: { lineWidth: 1 },
      ticksAndLabels: {
        values: [20, 22, 24, 26, 28],
        ticks: { length: 5, lineWidth: 1 },
        labels: { fontSize: 10, offset: 6.5, alongOffset: 0.890625, flush: false }
      },
      title: {
        text: "Mean of Miles per Gallon (95% CIs)",
        fontSize: 11,
        offset: 26.544921875,
        rotation: { value: -90, unit: "degrees" }
      }
    })
    .editYAxisLine({ color: "#888" })
    .editYAxisTicks({ color: "#888" })
    .editYAxisLabels({ color: "black" })
    .editYAxisTitle({ color: "black", fontWeight: 700 });
}

import { chart } from "ggaction";
import data from "./data.json";