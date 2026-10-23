// DOCS: doc-e91dcd68bf744fb2, doc-5efc8272c8849334, doc-8b8d7baf581eb3e7
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({
      plot: { width: 800, height: 400 },
      margin: { left: 64, top: 10, right: 162, bottom: 37 },
      plotBorder: { color: "#ddd", lineWidth: 1 }
    })
    .applyTextMetrics({
      profile: {
        schemaVersion: 1,
        id: "vl_1249-original-source-font-widths",
        measurements: [
          { text: "0", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 5.5625 },
          { text: "200", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 16.6875 },
          { text: "−35,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 36.4375 },
          { text: "−30,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 36.4375 },
          { text: "−25,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 36.4375 },
          { text: "−20,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 36.4375 },
          { text: "−15,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 36.4375 },
          { text: "−10,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 36.4375 },
          { text: "−5,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 30.875 }
        ]
      }
    })
    .createData({ values: data })
    .createErrorBand({
      x: { field: "Iteration" },
      y: { field: "Value", method: { type: "bootstrap", seed: 1 } },
      groupBy: "Agent"
    })
    .editYScale({ domain: [-35000, 0] })
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
          labels: { fontSize: 10, fontFamily: "sans-serif", offset: 5.5, alongOffset: 0.5, format: ",.0f", flush: true }
        },
        title: { text: "Iteration", fontSize: 11, fontFamily: "sans-serif", offset: 27.578125, alongOffset: 0.5 }
      },
      y: false
    })
    .editXAxisLine({
      color: "#888"
    })
    .editXAxisTicksAndLabels({
      ticks: { color: "#888" },
      labels: { color: "black" }
    })
    .editXAxisTitle({
      color: "black",
      fontWeight: 700
    })
    .createAxes({
      x: false,
      y: {
        ticksAndLabels: {
          values: [-35000, -30000, -25000, -20000, -15000, -10000, -5000, 0],
          ticks: { length: 5, alongOffset: -0.5 },
          labels: {
            fontSize: 10, fontFamily: "sans-serif", offset: 6.5, alongOffset: 0.890625, format: ",.0f",
            labelMap: [
              { value: -35000, label: "−35,000" },
              { value: -30000, label: "−30,000" },
              { value: -25000, label: "−25,000" },
              { value: -20000, label: "−20,000" },
              { value: -15000, label: "−15,000" },
              { value: -10000, label: "−10,000" },
              { value: -5000, label: "−5,000" }
            ]
          }
        },
        title: { text: "Return (95% CIs)", fontSize: 11, fontFamily: "sans-serif", offset: 51.84765625, alongOffset: 0.5, rotation: { value: -90, unit: "degrees" } }
      }
    })
    .editYAxisLine({
      color: "#888"
    })
    .editYAxisTicksAndLabels({
      ticks: { color: "#888" },
      labels: { color: "black" }
    })
    .editYAxisTitle({
      color: "black",
      fontWeight: 700
    })
    .createGrid({ vertical: { color: "#ddd" }, horizontal: { color: "#ddd" } })
    .createLegend({
      titleStyle: { fontSize: 11, fontFamily: "sans-serif", fontWeight: 700, color: "black" },
      labels: { fontSize: 10, fontFamily: "sans-serif", color: "black" },
      symbol: { layers: [{ type: "point", strokeWidth: 1.5, opacity: 0.3 }] }
    });
}