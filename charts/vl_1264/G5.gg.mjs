// DOCS: doc-4e183c1ba7f7e20b, doc-4aba5fb850bbed9c, doc-b2d0eb8c5f214d93
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({
      plot: { width: 800, height: 400 },
      margin: { left: 44, top: 10, right: 162, bottom: 37 },
      plotBorder: { color: "#ddd", lineWidth: 1 }
    })
    .applyTextMetrics({
      profile: {
        schemaVersion: 1,
        id: "vl_1264-original-source-font-widths",
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
          { text: "−25", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 16.96875 },
          { text: "−20", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 16.96875 },
          { text: "−15", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 16.96875 },
          { text: "−10", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 16.96875 },
          { text: "−5", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 11.40625 },
          { text: "5", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 5.5625 },
          { text: "15", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 11.125 },
          { text: "25", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 11.125 },
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
    .editYScale({ domain: [-25, 25] })
    .encodeGroup({ field: "Agent" })
    .encodeColor({
      field: "Agent",
      scale: { domain: ["C51", "DQN", "DQN (Adam + MSE in JAX)", "IQN", "Quantile (JAX)", "Rainbow"], palette: "tableau10" }
    })
    .editAreaMark({ opacity: 0.3 })
    .createLinePlot({
      x: { field: "Iteration" },
      y: { field: "meanValue" },
      guides: false
    })
    .encodeColor({ field: "Agent" })
    .encodeStroke({
      field: "Agent",
      scale: { domain: ["C51", "DQN", "DQN (Adam + MSE in JAX)", "IQN", "Quantile (JAX)", "Rainbow"], palette: "tableau10" }
    })
    .createAxes({
      x: {
        ticksAndLabels: {
          values: [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150, 160, 170, 180, 190, 200],
          ticks: { length: 5, alongOffset: 0.5 },
          labels: {
            fontSize: 10, fontFamily: "sans-serif",
            offset: 5.5, alongOffset: 0.5, format: ",.0f", flush: true
          }
        },
        title: {
          text: "Iteration", fontSize: 11, fontFamily: "sans-serif",
          offset: 27.578125, alongOffset: 0.5
        }
      },
      y: false
    })
    .editXAxis({
      line: { color: "#888" },
      ticksAndLabels: {
        ticks: { color: "#888" },
        labels: { color: "black" }
      },
      title: { color: "black", fontWeight: 700 }
    })
    .createAxes({
      x: false,
      y: {
        ticksAndLabels: {
          values: [-25, -20, -15, -10, -5, 0, 5, 10, 15, 20, 25],
          ticks: { length: 5, alongOffset: -0.5 },
          labels: {
            fontSize: 10, fontFamily: "sans-serif",
            offset: 6.5, alongOffset: 0.890625, format: ",.0f",
            labelMap: [
              { value: -25, label: "−25" },
              { value: -20, label: "−20" },
              { value: -15, label: "−15" },
              { value: -10, label: "−10" },
              { value: -5, label: "−5" }
            ]
          }
        },
        title: {
          text: "Return (95% CIs)", fontSize: 11, fontFamily: "sans-serif",
          offset: 32.384765625, alongOffset: 0.5,
          rotation: { value: -90, unit: "degrees" }
        }
      }
    })
    .editYAxis({
      line: { color: "#888" },
      ticksAndLabels: {
        ticks: { color: "#888" },
        labels: { color: "black" }
      },
      title: { color: "black", fontWeight: 700 }
    })
    .createGrid({
      vertical: {
        values: [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150, 160, 170, 180, 190, 200],
        color: "#ddd"
      },
      horizontal: {
        values: [-25, -20, -15, -10, -5, 0, 5, 10, 15, 20, 25],
        color: "#ddd"
      }
    })
    .createLegend({
      titleStyle: { fontSize: 11, fontFamily: "sans-serif", fontWeight: 700, color: "black" },
      labels: { fontSize: 10, fontFamily: "sans-serif", color: "black" },
      symbol: { layers: [{ type: "point", strokeWidth: 1.5, opacity: 0.3 }] }
    });
}