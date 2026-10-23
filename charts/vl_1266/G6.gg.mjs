import { chart } from "ggaction";
import data from "./data.json";

// DOCS: doc-efb03835af4d2e1b, doc-713dc20a242b174b, doc-af5562e03efab97d

const FONT_PROFILE = {
  schemaVersion: 1,
  id: "vl_1266-original-source-font-widths",
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
    { text: "−40", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 16.96875 },
    { text: "−30", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 16.96875 },
    { text: "−20", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 16.96875 },
    { text: "−10", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 16.96875 },
    { text: "Return (95% CIs)", fontFamily: "sans-serif", fontSize: 11, fontWeight: 700, fontStyle: "normal", width: 88.03125 },
    { text: "C51", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 18.359375 },
    { text: "DQN", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 22.234375 },
    { text: "DQN (Adam + MSE in JAX)", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 122.53125 },
    { text: "IQN", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 17.78125 },
    { text: "Quantile (JAX)", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 65.03125 },
    { text: "Rainbow", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 38.921875 },
    { text: "Agent", fontFamily: "sans-serif", fontSize: 11, fontWeight: 700, fontStyle: "normal", width: 31.171875 }
  ]
};

export function buildChart() {
  return chart()
    .createCanvas({
      plot: { width: 800, height: 400 },
      margin: { left: 44, top: 10, right: 162, bottom: 37 },
      plotBorder: { color: "#ddd", lineWidth: 1 }
    })
    .applyTextMetrics({ profile: FONT_PROFILE })
    .createData({ values: data })    .createErrorBand({
      x: { field: "Iteration" },
      y: { field: "Value", method: { type: "bootstrap", seed: 1 } },
      groupBy: "Agent"
    })
    .editXScale({ domain: [0, 200] })
    .editYScale({ domain: [-40, 100] })
    .encodeColor({
      field: "Agent",
      scale: { palette: "tableau10", domain: ["C51", "DQN", "DQN (Adam + MSE in JAX)", "IQN", "Quantile (JAX)", "Rainbow"] }
    })
    .editErrorBand({ opacity: 0.3 })
    .createLinePlot({
      x: "Iteration",
      y: "__errorBand_center",
      guides: false
    })
    .encodeColor({ field: "Agent" })
    .encodeStroke({
      field: "Agent",
      scale: { palette: "tableau10", domain: ["C51", "DQN", "DQN (Adam + MSE in JAX)", "IQN", "Quantile (JAX)", "Rainbow"] }
    })
    .createAxes({
      x: {
        ticksAndLabels: {
          values: [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150, 160, 170, 180, 190, 200],
          ticks: { length: 5, alongOffset: 0.5 },
          labels: {
            fontSize: 10, fontFamily: "sans-serif", offset: 5.5, alongOffset: 0.5,
            format: ",.0f", flush: true
          }
        },
        title: {
          text: "Iteration", fontSize: 11, fontFamily: "sans-serif",
          offset: 27.578125, alongOffset: 0.5
        }
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
          values: [-40, -30, -20, -10, 0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100],
          ticks: { length: 5, alongOffset: -0.5 },
          labels: {
            fontSize: 10, fontFamily: "sans-serif", offset: 6.5, alongOffset: 0.890625,
            format: ",.0f",
            labelMap: [
              { value: -40, label: "−40" },
              { value: -30, label: "−30" },
              { value: -20, label: "−20" },
              { value: -10, label: "−10" }
            ]
          }
        },
        title: {
          text: "Return (95% CIs)", fontSize: 11, fontFamily: "sans-serif",
          offset: 32.384765625, alongOffset: 0.5, rotation: { value: -90, unit: "degrees" }
        }
      }
    })
    .editYAxisLine({ color: "#888" })
    .editYAxisTicksAndLabels({ ticks: { color: "#888" }, labels: { color: "black" } })
    .editYAxisTitle({ color: "black", fontWeight: 700 })
    .createGrid({
      vertical: { color: "#ddd" },
      horizontal: { color: "#ddd" }
    })
    .createLegend({
      titleStyle: { fontSize: 11, fontFamily: "sans-serif", fontWeight: 700, color: "black" },
      labels: { fontSize: 10, fontFamily: "sans-serif", color: "black" },
      symbol: { layers: [{ type: "point", strokeWidth: 1.5, opacity: 0.3 }] }
    });
}