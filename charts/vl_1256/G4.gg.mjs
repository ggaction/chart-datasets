import { chart } from "ggaction";
import data from "./data.json";

// DOCS: doc-4e183c1ba7f7e20b doc-b1afedddb1ebef69 doc-efb03835af4d2e1b

export function buildChart() {
  return chart()
    .createCanvas({
      plot: { width: 800, height: 400 },
      margin: { left: 58, top: 10, right: 162, bottom: 37 },
      plotBorder: { color: "#ddd", lineWidth: 1 }
    })
    .applyTextMetrics({
      profile: {
        schemaVersion: 1,
        id: "vl_1256-original-source-font-widths",
        measurements: [
          { text: "0", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 5.5625 },
          { text: "10", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 11.125 },
          { text: "20", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 11.125 },
          { text: "30", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 11.125 },
          { text: "40", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 11.125 },
          { text: "50", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 11.125 },
          { text: "60", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 11.125 },
          { text: "70", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 11.125 },
          { text: "80", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 11.125 },
          { text: "90", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 11.125 },
          { text: "100", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 16.6875 },
          { text: "110", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 15.953125 },
          { text: "120", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 16.6875 },
          { text: "130", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 16.6875 },
          { text: "140", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 16.6875 },
          { text: "150", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 16.6875 },
          { text: "160", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 16.6875 },
          { text: "170", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 16.6875 },
          { text: "180", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 16.6875 },
          { text: "190", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 16.6875 },
          { text: "200", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 16.6875 },
          { text: "Iteration", fontFamily: "sans-serif", fontSize: 11, fontWeight: 700, fontStyle: "normal", width: 43.40625 },
          { text: "2,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 25.03125 },
          { text: "4,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 25.03125 },
          { text: "6,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 25.03125 },
          { text: "8,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 25.03125 },
          { text: "10,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 30.59375 },
          { text: "12,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 30.59375 },
          { text: "14,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 30.59375 },
          { text: "16,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 30.59375 },
          { text: "18,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 30.59375 },
          { text: "20,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 30.59375 },
          { text: "Return (95% CIs)", fontFamily: "sans-serif", fontSize: 11, fontWeight: 700, fontStyle: "normal", width: 88.03125 },
          { text: "C51", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 18.359375 },
          { text: "DQN", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 22.234375 },
          { text: "DQN (Adam + MSE in JAX)", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 122.53125 },
          { text: "IQN", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 17.78125 },
          { text: "Quantile (JAX)", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 65.03125 },
          { text: "Rainbow", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 38.921875 },
          { text: "Agent", fontFamily: "sans-serif", fontSize: 11, fontWeight: 700, fontStyle: "normal", width: 31.171875 }
        ]
      }
    })
    .createData({ values: data })
    .createSummaryData({
      id: "stats",
      groupBy: ["Iteration", "Agent"],
      aggregates: [
        { field: "Value", op: "mean", as: "meanValue" },
        { field: "Value", op: { op: "ciLower", method: { type: "bootstrap", seed: 1 } }, as: "ciLower" },
        { field: "Value", op: { op: "ciUpper", method: { type: "bootstrap", seed: 1 } }, as: "ciUpper" }
      ]
    })
    .createAreaPlot({
      x: { field: "Iteration" },
      y: { lower: "ciLower", upper: "ciUpper" },
      guides: false
    })
    .editXScale({ domain: [0, 200] })
    .editYScale({ domain: [0, 20000] })
    .encodeGroup({ field: "Agent" })
    .encodeColor({
      field: "Agent",
      scale: { palette: "tableau10", domain: ["C51", "DQN", "DQN (Adam + MSE in JAX)", "IQN", "Quantile (JAX)", "Rainbow"] }
    })
    .editAreaMark({ opacity: 0.3 })
    .createLinePlot({
      x: "Iteration",
      y: "meanValue",
      guides: false
    })
    .encodeColor({ field: "Agent" })
    .encodeStroke({
      field: "Agent",
      scale: { palette: "tableau10", domain: ["C51", "DQN", "DQN (Adam + MSE in JAX)", "IQN", "Quantile (JAX)", "Rainbow"] }
    })
    .createAxes({
      x: {
        line: { color: "#888" },
        ticksAndLabels: {
          values: [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150, 160, 170, 180, 190, 200],
          ticks: { length: 5, color: "#888", alongOffset: 0.5 },
          labels: { fontSize: 10, fontFamily: "sans-serif", color: "black", offset: 5.5, alongOffset: 0.5, format: ",.0f", flush: true }
        },
        title: { text: "Iteration", fontSize: 11, fontFamily: "sans-serif", fontWeight: 700, color: "black", offset: 27.578125, alongOffset: 0.5 }
      },
      y: false
    })
    .createAxes({
      x: false,
      y: {
        line: { color: "#888" },
        ticksAndLabels: {
          values: [0, 2000, 4000, 6000, 8000, 10000, 12000, 14000, 16000, 18000, 20000],
          ticks: { length: 5, color: "#888", alongOffset: -0.5 },
          labels: { fontSize: 10, fontFamily: "sans-serif", color: "black", offset: 6.5, alongOffset: 0.890625, format: ",.0f" }
        },
        title: { text: "Return (95% CIs)", fontSize: 11, fontFamily: "sans-serif", fontWeight: 700, color: "black", offset: 46.0078125, alongOffset: 0.5, rotation: { value: -90, unit: "degrees" } }
      }
    })
    .createGrid({
      vertical: { values: [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150, 160, 170, 180, 190, 200], color: "#ddd" },
      horizontal: { values: [0, 2000, 4000, 6000, 8000, 10000, 12000, 14000, 16000, 18000, 20000], color: "#ddd" }
    })
    .createLegend({
      titleStyle: { fontSize: 11, fontFamily: "sans-serif", fontWeight: 700, color: "black" },
      labels: { fontSize: 10, fontFamily: "sans-serif", color: "black" },
      symbol: { layers: [{ type: "point", strokeWidth: 1.5, opacity: 0.3 }] }
    });
}