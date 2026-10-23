import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({
      plot: { width: 800, height: 400 },
      margin: { left: 53, top: 10, right: 87, bottom: 37 },
      plotBorder: { color: "#ddd", lineWidth: 1 }
    })
    .applyTextMetrics({
      profile: {
        schemaVersion: 1,
        id: "vl_1344-original-source-font-widths",
        measurements: [
          { text: "0", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 5.5625 },
          { text: "200", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 16.6875 }
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
    .editYScale({ domain: [0, 6500] })
    .encodeColor({ field: "Agent", scale: { palette: "tableau10", domain: ["C51", "DQN", "IQN", "RAINBOW"] } })
    .editErrorBand({ opacity: 0.3 })
    .createLinePlot({ x: "Iteration", y: "__errorBand_center", guides: false })
    .encodeColor({ field: "Agent" })
    .encodeStroke({ field: "Agent", scale: { palette: "tableau10", domain: ["C51", "DQN", "IQN", "RAINBOW"] } })
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
      y: {
        line: { color: "#888" },
        ticksAndLabels: {
          values: [0, 500, 1000, 1500, 2000, 2500, 3000, 3500, 4000, 4500, 5000, 5500, 6000, 6500],
          ticks: { length: 5, color: "#888", alongOffset: -0.5 },
          labels: { fontSize: 10, fontFamily: "sans-serif", color: "black", offset: 6.5, alongOffset: 0.890625, format: ",.0f" }
        },
        title: { text: "Return (95% CIs)", fontSize: 11, fontFamily: "sans-serif", fontWeight: 700, color: "black", offset: 40.4462890625, alongOffset: 0.5, rotation: { value: -90, unit: "degrees" } }
      }
    })
    .createGrid({ vertical: { color: "#ddd" }, horizontal: { color: "#ddd" } })
    .createLegend({
      titleStyle: { fontSize: 11, fontFamily: "sans-serif", fontWeight: 700, color: "black" },
      labels: { fontSize: 10, fontFamily: "sans-serif", color: "black" },
      symbol: { layers: [{ type: "point", strokeWidth: 1.5, opacity: 0.3 }] }
    });
}

// DOCS: doc-e91dcd68bf744fb2, doc-5efc8272c8849334, doc-fc5444d17e31cc59