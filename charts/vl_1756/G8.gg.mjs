// DOCS: doc-d861735fa993d882 (createTextPlot)
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({ width: 151, height: 148, margin: { left: 39, top: 11, right: 12, bottom: 37 } })
    .applyTextMetrics({
      profile: {
        schemaVersion: 1,
        id: "vl_1756",
        measurements: [
          { text: "0", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 5.5625 },
          { text: "10", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 11.125 },
          { text: "20", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 11.125 },
          { text: "30", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 11.125 },
          { text: "40", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 11.125 },
          { text: "x", fontFamily: "sans-serif", fontSize: 11, fontWeight: 700, width: 6.125 },
          { text: "y", fontFamily: "sans-serif", fontSize: 11, fontWeight: 700, width: 6.125 }
        ]
      }
    })
    .createData({ values: data })
    .editCanvas({ plotBorder: { color: "#ddd", lineWidth: 1 } })
    .createTextPlot({
      x: { field: "x" },
      y: { field: "y" },
      text: { value: "🐕" },
      guides: false
    })
    .editXScale({ domain: [0, 40], nice: false })
    .editYScale({ domain: [0, 30], nice: false })
    .createXAxis({
      line: { lineWidth: 1 },
      ticksAndLabels: {
        values: [0, 10, 20, 30, 40],
        ticks: { length: 5 },
        labels: { fontSize: 10, offset: 5.5, alongOffset: 0.5, flush: true }
      },
      title: { text: "x", fontSize: 11, offset: 27.578125 }
    })
    .createYAxis({
      line: { lineWidth: 1 },
      ticksAndLabels: {
        values: [0, 10, 20, 30],
        ticks: { length: 5 },
        labels: { fontSize: 10, offset: 6.5, alongOffset: 0.890625 }
      },
      title: { text: "y", fontSize: 11, offset: 26.544921875 }
    })
    .editXAxisLine({ color: "#888" })
    .editXAxisTicks({ color: "#888" })
    .editXAxisLabels({ color: "black" })
    .editXAxisTitle({ color: "black", fontWeight: 700 })
    .editYAxisLine({ color: "#888" })
    .editYAxisTicks({ color: "#888" })
    .editYAxisLabels({ color: "black" })
    .editYAxisTitle({ color: "black", fontWeight: 700 })
    .createGrid({
      vertical: { values: [0, 10, 20, 30, 40] },
      horizontal: { values: [0, 10, 20, 30] }
    })
    .editVerticalGrid({ color: "#ddd" })
    .editHorizontalGrid({ color: "#ddd" })
    .editTextMark({ fontSize: 11, align: "center", baseline: "middle" })
    .editTextMark({ fill: "black" });
}