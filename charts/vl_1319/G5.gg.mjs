import { chart } from "ggaction";
import data from "./data.json";

// DOCS: doc-e91dcd68bf744fb2, doc-fc5444d17e31cc59, doc-5efc8272c8849334

export function buildChart() {
  return chart()
    .createCanvas({
      plot: { width: 800, height: 400 },
      margin: { left: 53, top: 10, right: 87, bottom: 37 },
      plotBorder: { color: "#ddd", lineWidth: 1 },
    })
    .applyTextMetrics({
      profile: {
        schemaVersion: 1,
        id: "vl_1319-original-source-font-widths",
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
          { text: "Return (95% CIs)", fontFamily: "sans-serif", fontSize: 11, fontWeight: 700, fontStyle: "normal", width: 88.03125 },
          { text: "C51", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 18.359375 },
          { text: "DQN", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 22.234375 },
          { text: "IQN", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 17.78125 },
          { text: "RAINBOW", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 47.78125 },
          { text: "Agent", fontFamily: "sans-serif", fontSize: 11, fontWeight: 700, fontStyle: "normal", width: 31.171875 },
        ],
      },
    })
    .createData({ values: data })
    .filterData({ id: "selectedAgents", field: "Agent", oneOf: ["DQN", "C51", "RAINBOW", "IQN"] })
    .createErrorBand({
      x: { field: "Iteration" },
      y: { field: "Value", method: { type: "bootstrap", seed: 1 } },
      groupBy: "Agent",
    })
    .editXScale({ domain: [0, 200] })
    .editYScale({ domain: [0, 3000] })
    .encodeColor({ field: "Agent", scale: { palette: "tableau10", domain: ["C51", "DQN", "IQN", "RAINBOW"] } })
    .editErrorBand({ opacity: 0.3 })
    .createLinePlot({
      x: "Iteration",
      y: "__errorBand_center",
      guides: false,
    })
    .encodeColor({ field: "Agent" })
    .encodeStroke({ field: "Agent", scale: { palette: "tableau10", domain: ["C51", "DQN", "IQN", "RAINBOW"] } })
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
          values: [0, 200, 400, 600, 800, 1000, 1200, 1400, 1600, 1800, 2000, 2200, 2400, 2600, 2800, 3000],
          ticks: { length: 5, alongOffset: -0.5 },
          labels: { fontSize: 10, fontFamily: "sans-serif", offset: 6.5, alongOffset: 0.890625, format: ",.0f" }
        },
        title: { text: "Return (95% CIs)", fontSize: 11, fontFamily: "sans-serif", offset: 40.4462890625, alongOffset: 0.5, rotation: { value: -90, unit: "degrees" } }
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
      vertical: { color: "#ddd" },
      horizontal: { color: "#ddd" }
    })
    .createLegend({
      titleStyle: { fontSize: 11, fontFamily: "sans-serif", fontWeight: 700, color: "black" },
      labels: { fontSize: 10, fontFamily: "sans-serif", color: "black" },
      symbol: { layers: [{ type: "point", strokeWidth: 1.5, opacity: 0.3 }] }
    });
}