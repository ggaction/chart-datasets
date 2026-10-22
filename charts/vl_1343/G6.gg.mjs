// DOCS: doc-e91dcd68bf744fb2 (createErrorBand), doc-5efc8272c8849334 (createErrorBand reference), doc-fc5444d17e31cc59 (editErrorBand types)
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
        id: "vl_1343-original-source-font-widths",
        measurements: [
          { text: "0", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 5.5625 },
          { text: "200", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 16.6875 },
          { text: "−500", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 22.53125 },
          { text: "−450", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 22.53125 },
          { text: "−400", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 22.53125 },
          { text: "−350", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 22.53125 },
          { text: "−300", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 22.53125 },
          { text: "−250", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 22.53125 },
          { text: "−200", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 22.53125 },
          { text: "−150", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 22.53125 },
          { text: "−100", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 22.53125 },
          { text: "−50", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 16.96875 }
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
    .encodeColor({
      field: "Agent",
      scale: { palette: "tableau10", domain: ["C51", "DQN", "IQN", "RAINBOW"] }
    })
    .editErrorBand({ opacity: 0.3 })
    .createLinePlot({ x: "Iteration", y: "__errorBand_center", guides: false })
    .encodeColor({ field: "Agent" })
    .encodeStroke({
      field: "Agent",
      scale: { palette: "tableau10", domain: ["C51", "DQN", "IQN", "RAINBOW"] }
    })
    .createAxes({
      x: {
        ticksAndLabels: {
          values: [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150, 160, 170, 180, 190, 200],
          ticks: { length: 5, alongOffset: 0.5 },
          labels: {
            fontSize: 10,
            fontFamily: "sans-serif",
            offset: 5.5,
            alongOffset: 0.5,
            format: ",.0f",
            flush: true
          }
        },
        title: {
          text: "Iteration",
          fontSize: 11,
          fontFamily: "sans-serif",
          offset: 27.578125,
          alongOffset: 0.5
        }
      },
      y: false
    })
    .editXAxisLine({ color: "#888" })
    .editXAxisTicks({ color: "#888" })
    .editXAxisLabels({ color: "black" })
    .editXAxisTitle({ color: "black", fontWeight: 700 })
    .createAxes({
      x: false,
      y: {
        ticksAndLabels: {
          values: [-500, -450, -400, -350, -300, -250, -200, -150, -100, -50, 0],
          ticks: { length: 5, alongOffset: -0.5 },
          labels: {
            fontSize: 10,
            fontFamily: "sans-serif",
            offset: 6.5,
            alongOffset: 0.890625,
            format: ",.0f",
            labelMap: [
              { value: -500, label: "−500" },
              { value: -450, label: "−450" },
              { value: -400, label: "−400" },
              { value: -350, label: "−350" },
              { value: -300, label: "−300" },
              { value: -250, label: "−250" },
              { value: -200, label: "−200" },
              { value: -150, label: "−150" },
              { value: -100, label: "−100" },
              { value: -50, label: "−50" }
            ]
          }
        },
        title: {
          text: "Return (95% CIs)",
          fontSize: 11,
          fontFamily: "sans-serif",
          offset: 37.9462890625,
          alongOffset: 0.5,
          rotation: { value: -90, unit: "degrees" }
        }
      }
    })
    .editYAxisLine({ color: "#888" })
    .editYAxisTicks({ color: "#888" })
    .editYAxisLabels({ color: "black" })
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