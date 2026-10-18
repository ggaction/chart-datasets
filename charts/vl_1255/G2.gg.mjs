// DOCS: doc-4e183c1ba7f7e20b doc-ce14eb4532f7cec7 doc-b1afedddb1ebef69
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({ width: 913, height: 447, margin: { left: 53, top: 10, right: 60, bottom: 37 } })
    .applyTextMetrics({ profile: { schemaVersion: 1, id: "vl_1255-original-source-font-widths", measurements: [
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
      { text: "500", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 16.6875 },
      { text: "1,500", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 25.03125 },
      { text: "2,500", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 25.03125 },
      { text: "3,500", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 25.03125 },
      { text: "4,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 25.03125 },
      { text: "4,500", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 25.03125 },
      { text: "Return (95% CIs)", fontFamily: "sans-serif", fontSize: 11, fontWeight: 700, fontStyle: "normal", width: 88.03125 },
      { text: "SAC", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 20.5625 },
      { text: "Agent", fontFamily: "sans-serif", fontSize: 11, fontWeight: 700, fontStyle: "normal", width: 31.171875 }
    ] } })
    .createData({ values: data })
    .createSummaryData({ id: "summary", groupBy: ["Iteration", "Agent"], aggregates: [
      { field: "Value", op: "mean", as: "meanValue" },
      { field: "Value", op: { op: "ciLower", method: { type: "bootstrap", seed: 1 } }, as: "ciLower" },
      { field: "Value", op: { op: "ciUpper", method: { type: "bootstrap", seed: 1 } }, as: "ciUpper" }
    ] })
    .createAreaPlot({ x: { field: "Iteration" }, y: { lower: "ciLower", upper: "ciUpper" }, guides: false })
    .editXScale({ domain: [0, 3500] })
    .editYScale({ domain: [0, 4500] })
    .encodeColor({ field: "Agent", fieldType: "nominal", scale: { palette: "tableau10" } })
    .editAreaMark({ opacity: 0.3 })
    .createLinePlot({ x: "Iteration", y: "meanValue", guides: false })
    .encodeColor({ field: "Agent", fieldType: "nominal" })
    .editCanvas({ plotBorder: { color: "#ddd", lineWidth: 1 } })
    .createGuides({
      axes: {
        x: {
          
          line: { color: "#888" },
          ticksAndLabels: {
            values: [0, 200, 400, 600, 800, 1000, 1200, 1400, 1600, 1800, 2000, 2200, 2400, 2600, 2800, 3000, 3200, 3400],
            ticks: { color: "#888", length: 5, alongOffset: 0.5 },
            labels: { fontSize: 10, fontFamily: "sans-serif", color: "black", offset: 5.5, alongOffset: 0.5, format: ",.0f", flush: true }
          },
          title: { text: "Iteration", fontSize: 11, fontFamily: "sans-serif", fontWeight: 700, color: "black", offset: 27.578125, alongOffset: 0.5 }
        },
        y: {
          
          line: { color: "#888" },
          ticksAndLabels: {
            values: [0, 500, 1000, 1500, 2000, 2500, 3000, 3500, 4000, 4500],
            ticks: { color: "#888", length: 5, alongOffset: -0.5 },
            labels: { fontSize: 10, fontFamily: "sans-serif", color: "black", offset: 6.5, alongOffset: 0.890625, format: ",.0f" }
          },
          title: { text: "Return (95% CIs)", fontSize: 11, fontFamily: "sans-serif", fontWeight: 700, color: "black", offset: 40.4462890625, alongOffset: 0.5, rotation: { value: -90, unit: "degrees" } }
        }
      },
      grid: {
        horizontal: { scale: "y", values: [0, 500, 1000, 1500, 2000, 2500, 3000, 3500, 4000, 4500], color: "#ddd" },
        vertical: { scale: "x", values: [0, 200, 400, 600, 800, 1000, 1200, 1400, 1600, 1800, 2000, 2200, 2400, 2600, 2800, 3000, 3200, 3400], color: "#ddd" }
      },
      legend: {
        target: "areaPlot",
        titleStyle: { fontSize: 11, fontFamily: "sans-serif", fontWeight: 700, color: "black" },
        labels: { fontSize: 10, fontFamily: "sans-serif", color: "black" },
        symbol: { layers: [{ type: "point", stroke: "#4c78a8", strokeWidth: 1.5, opacity: 0.3 }] }
      }
    });
}