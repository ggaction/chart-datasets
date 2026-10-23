// DOCS: doc-e91dcd68bf744fb2 doc-5efc8272c8849334 doc-8b8d7baf581eb3e7
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({
      plot: { width: 800, height: 400 },
      margin: { left: 50, top: 10, right: 87, bottom: 37 },
      plotBorder: { color: "#ddd", lineWidth: 1 }
    })
    .applyTextMetrics({
      profile: {
        schemaVersion: 1,
        id: "vl_1318-original-source-font-widths",
        measurements: [
          { text: "0", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 5.5625 },
          { text: "200", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 16.6875 },
          { text: "−100", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 22.53125 },
          { text: "−80", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 16.96875 },
          { text: "−60", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 16.96875 },
          { text: "−40", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 16.96875 },
          { text: "−20", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 16.96875 }
        ]
      }
    })
    .createData({ values: data })
    .filterData({ id: "selectedAgents", field: "Agent", oneOf: ["DQN", "C51", "RAINBOW", "IQN"] })
    .createErrorBand({
      x: { field: "Iteration" },
      y: { field: "Value", method: { type: "bootstrap", seed: 1 }, scale: { domain: [-100, 60] } },
      groupBy: "Agent"
    })
    .encodeColor({
      field: "Agent",
      scale: { palette: "tableau10", domain: ["C51", "DQN", "IQN", "RAINBOW"] }
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
      scale: { palette: "tableau10", domain: ["C51", "DQN", "IQN", "RAINBOW"] }
    })
    .createGuides({
      axes: {
        x: {
          line: { color: "#888", lineWidth: 1 },
          ticksAndLabels: {
            values: [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150, 160, 170, 180, 190, 200],
            ticks: { color: "#888", length: 5, alongOffset: 0.5 },
            labels: { fontSize: 10, fontFamily: "sans-serif", color: "black", offset: 5.5, alongOffset: 0.5, format: ",.0f", flush: true }
          },
          title: { text: "Iteration", fontSize: 11, fontFamily: "sans-serif", fontWeight: 700, color: "black", offset: 27.578125, alongOffset: 0.5 }
        },
        y: {
          line: { color: "#888", lineWidth: 1 },
          ticksAndLabels: {
            values: [-100, -80, -60, -40, -20, 0, 20, 40, 60],
            ticks: { color: "#888", length: 5, alongOffset: -0.5 },
            labels: {
              fontSize: 10, fontFamily: "sans-serif", color: "black", offset: 6.5, alongOffset: 0.890625, format: ",.0f",
              labelMap: [
                { value: -100, label: "−100" },
                { value: -80, label: "−80" },
                { value: -60, label: "−60" },
                { value: -40, label: "−40" },
                { value: -20, label: "−20" }
              ]
            }
          },
          title: { text: "Return (95% CIs)", fontSize: 11, fontFamily: "sans-serif", fontWeight: 700, color: "black", offset: 37.9462890625, alongOffset: 0.5, rotation: { value: -90, unit: "degrees" } }
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