// DOCS: doc-e91dcd68bf744fb2, doc-5efc8272c8849334, doc-fc5444d17e31cc59
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({
      plot: { width: 800, height: 400 },
      margin: { left: 58, top: 10, right: 87, bottom: 37 },
      plotBorder: { color: "#ddd", lineWidth: 1 }
    })
    .applyTextMetrics({
      profile: {
        schemaVersion: 1,
        id: "vl_1323-original-source-font-widths",
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
          { text: "5,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 25.03125 },
          { text: "10,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 30.59375 },
          { text: "15,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 30.59375 },
          { text: "20,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 30.59375 },
          { text: "25,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 30.59375 },
          { text: "30,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 30.59375 },
          { text: "35,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 30.59375 },
          { text: "40,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 30.59375 },
          { text: "45,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 30.59375 },
          { text: "50,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 30.59375 },
          { text: "Return (95% CIs)", fontFamily: "sans-serif", fontSize: 11, fontWeight: 700, fontStyle: "normal", width: 88.03125 },
          { text: "C51", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 18.359375 },
          { text: "DQN", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 22.234375 },
          { text: "IQN", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 17.78125 },
          { text: "RAINBOW", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 47.78125 },
          { text: "Agent", fontFamily: "sans-serif", fontSize: 11, fontWeight: 700, fontStyle: "normal", width: 31.171875 }
        ]
      }
    })
    .createData({ values: data })
    .filterData({ id: "selectedAgents", field: "Agent", oneOf: ["DQN", "C51", "RAINBOW", "IQN"] })
    .createErrorBand({
      x: { field: "Iteration" },
      y: { field: "Value", method: { type: "bootstrap", seed: 1 } },
      groupBy: "Agent"
    })
    .editXScale({ domain: [0, 200] })
    .editYScale({ domain: [0, 50000] })
    .encodeColor({ field: "Agent", scale: { palette: "tableau10", domain: ["C51", "DQN", "IQN", "RAINBOW"] } })
    .editErrorBand({ opacity: 0.3 })
    .createLinePlot({ x: "Iteration", y: "__errorBand_center", guides: false })
    .encodeColor({ field: "Agent" })
    .encodeStroke({ field: "Agent", scale: { palette: "tableau10", domain: ["C51", "DQN", "IQN", "RAINBOW"] } })
    .createGuides({
      axes: {
        x: {
          line: { color: "#888" },
          ticksAndLabels: {
            values: [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150, 160, 170, 180, 190, 200],
            ticks: { length: 5, color: "#888", alongOffset: 0.5 },
            labels: { fontSize: 10, fontFamily: "sans-serif", color: "black", offset: 5.5, alongOffset: 0.5, format: ",.0f", flush: true }
          },
          title: { text: "Iteration", fontSize: 11, fontFamily: "sans-serif", fontWeight: 700, color: "black", offset: 27.578125, alongOffset: 0.5 }
        },
        y: {
          line: { color: "#888" },
          ticksAndLabels: {
            values: [0, 5000, 10000, 15000, 20000, 25000, 30000, 35000, 40000, 45000, 50000],
            ticks: { length: 5, color: "#888", alongOffset: -0.5 },
            labels: { fontSize: 10, fontFamily: "sans-serif", color: "black", offset: 6.5, alongOffset: 0.890625, format: ",.0f" }
          },
          title: { text: "Return (95% CIs)", fontSize: 11, fontFamily: "sans-serif", fontWeight: 700, color: "black", offset: 46.0078125, alongOffset: 0.5, rotation: { value: -90, unit: "degrees" } }
        }
      },
      grid: { vertical: { color: "#ddd" }, horizontal: { color: "#ddd" } },
      legend: {
        titleStyle: { fontSize: 11, fontFamily: "sans-serif", fontWeight: 700, color: "black" },
        labels: { fontSize: 10, fontFamily: "sans-serif", color: "black" },
        symbol: { layers: [{ type: "point", strokeWidth: 1.5, opacity: 0.3 }] }
      }
    });
}