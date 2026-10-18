// DOCS: doc-4e183c1ba7f7e20b
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({ width: 918, height: 447, margin: { left: 58, top: 10, right: 60, bottom: 37 } })
    .applyTextMetrics({ profile: { schemaVersion: 1, id: "vl_1263-original-source-font-widths", measurements: [
      { text: "0", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 5.5625 },
      { text: "200", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 16.6875 },
      { text: "400", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 16.6875 },
      { text: "600", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 16.6875 },
      { text: "800", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 16.6875 },
      { text: "1,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 25.03125 },
      { text: "1,200", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 25.03125 },
      { text: "1,400", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 25.03125 },
      { text: "1,600", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 25.03125 },
      { text: "1,800", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 25.03125 },
      { text: "2,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 25.03125 },
      { text: "2,200", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 25.03125 },
      { text: "2,400", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 25.03125 },
      { text: "2,600", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 25.03125 },
      { text: "2,800", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 25.03125 },
      { text: "3,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 25.03125 },
      { text: "3,200", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 25.03125 },
      { text: "3,400", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 25.03125 },
      { text: "Iteration", fontFamily: "sans-serif", fontSize: 11, fontWeight: 700, fontStyle: "normal", width: 43.40625 },
      { text: "−1,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 30.875 },
      { text: "4,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 25.03125 },
      { text: "5,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 25.03125 },
      { text: "6,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 25.03125 },
      { text: "7,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 25.03125 },
      { text: "Return (95% CIs)", fontFamily: "sans-serif", fontSize: 11, fontWeight: 700, fontStyle: "normal", width: 88.03125 },
      { text: "SAC", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 20.5625 },
      { text: "Agent", fontFamily: "sans-serif", fontSize: 11, fontWeight: 700, fontStyle: "normal", width: 31.171875 }
    ] } })
    .editCanvas({ plotBorder: { color: "#ddd", lineWidth: 1 } })
    .createData({ values: data })
    .createSummaryData({ id: "summary", groupBy: ["Iteration", "Agent"], aggregates: [
      { field: "Value", op: "mean", as: "mean" },
      { field: "Value", op: { op: "ciLower", method: { type: "bootstrap", seed: 1 } }, as: "ciLower" },
      { field: "Value", op: { op: "ciUpper", method: { type: "bootstrap", seed: 1 } }, as: "ciUpper" }
    ] })
    .createAreaPlot({ x: { field: "Iteration" }, y: { lower: "ciLower", upper: "ciUpper" }, guides: false })
    .editXScale({ domain: [0, 3500] })
    .editYScale({ domain: [-1000, 7000] })
    .encodeColor({ field: "Agent", fieldType: "nominal", scale: { range: ["#4c78a8", "#f58518", "#e45756", "#72b7b2", "#54a24b", "#eeca3b", "#b279a2", "#ff9da6", "#9d755d", "#bab0ac"] } })
    .editAreaMark({ opacity: 0.3 })
    .createLinePlot({ x: "Iteration", y: "mean", guides: false })
    .encodeColor({ field: "Agent", fieldType: "nominal" })
    .createAxes({
      x: {
        ticksAndLabels: {
          values: [0, 200, 400, 600, 800, 1000, 1200, 1400, 1600, 1800, 2000, 2200, 2400, 2600, 2800, 3000, 3200, 3400],
          ticks: { length: 5, alongOffset: 0.5 },
          labels: { fontSize: 10, fontWeight: 400, fontFamily: "sans-serif", offset: 5.5, alongOffset: 0.5, flush: true, format: ",.0f" }
        },
        title: { text: "Iteration", fontSize: 11, fontFamily: "sans-serif", offset: 27.578125, alongOffset: 0.5 }
      },
      y: false
    })
    .editXAxisLine({ color: "#888" })
    .editXAxisTicksAndLabels({ ticks: { color: "#888" }, labels: { color: "black" } })
    .editXAxisTitle({ color: "black", fontWeight: 700 })
    .createAxes({
      x: false,
      y: {
        ticksAndLabels: {
          values: [-1000, 0, 1000, 2000, 3000, 4000, 5000, 6000, 7000],
          ticks: { length: 5, alongOffset: -0.5 },
          labels: { fontSize: 10, fontWeight: 400, fontFamily: "sans-serif", offset: 6.5, alongOffset: 0.890625, format: ",.0f", labelMap: [{ value: -1000, label: "−1,000" }] }
        },
        title: { text: "Return (95% CIs)", fontSize: 11, fontFamily: "sans-serif", offset: 46.2861328125, alongOffset: 0.5, rotation: { value: -90, unit: "degrees" } }
      }
    })
    .editYAxisLine({ color: "#888" })
    .editYAxisTicksAndLabels({ ticks: { color: "#888" }, labels: { color: "black" } })
    .editYAxisTitle({ color: "black", fontWeight: 700 })
    .createGrid({
      horizontal: { scale: "y", values: [-1000, 0, 1000, 2000, 3000, 4000, 5000, 6000, 7000], color: "#ddd" },
      vertical: { scale: "x", values: [0, 200, 400, 600, 800, 1000, 1200, 1400, 1600, 1800, 2000, 2200, 2400, 2600, 2800, 3000, 3200, 3400], color: "#ddd" }
    })
    .createGuides({
      axes: false,
      grid: false,
      legend: {
        target: "areaPlot",
        titleStyle: { fontSize: 11, fontWeight: 700, fontFamily: "sans-serif", color: "black" },
        labels: { fontSize: 10, fontWeight: 400, fontFamily: "sans-serif", color: "black" },
        symbol: { layers: [{ type: "point", stroke: "#4c78a8", strokeWidth: 1.5, opacity: 0.3 }] }
      }
    });
}