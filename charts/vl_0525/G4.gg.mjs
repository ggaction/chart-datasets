// DOCS: doc-8677e2a82d3e344b, doc-36558ee3175924e3, doc-99b0513458edff76
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({ width: 351, height: 349, margin: { left: 44, top: 10, right: 47, bottom: 39 } })
    .editCanvas({ plotBorder: { color: "#ddd", lineWidth: 1 } })
    .applyTextMetrics({ profile: { schemaVersion: 1, id: "vl_0525-original-source-font-widths", measurements: [
      { text: "0", fontFamily: "sans-serif", fontSize: 6, fontWeight: 400, fontStyle: "normal", width: 3.34375 },
      { text: "0.5", fontFamily: "sans-serif", fontSize: 6, fontWeight: 400, fontStyle: "normal", width: 8.34375 },
      { text: "1", fontFamily: "sans-serif", fontSize: 6, fontWeight: 400, fontStyle: "normal", width: 3.34375 },
      { text: "1.5", fontFamily: "sans-serif", fontSize: 6, fontWeight: 400, fontStyle: "normal", width: 8.34375 },
      { text: "2", fontFamily: "sans-serif", fontSize: 6, fontWeight: 400, fontStyle: "normal", width: 3.34375 },
      { text: "2.5", fontFamily: "sans-serif", fontSize: 6, fontWeight: 400, fontStyle: "normal", width: 8.34375 },
      { text: "3", fontFamily: "sans-serif", fontSize: 6, fontWeight: 400, fontStyle: "normal", width: 3.34375 },
      { text: "3.5", fontFamily: "sans-serif", fontSize: 6, fontWeight: 400, fontStyle: "normal", width: 8.34375 },
      { text: "4", fontFamily: "sans-serif", fontSize: 6, fontWeight: 400, fontStyle: "normal", width: 3.34375 },
      { text: "4.5", fontFamily: "sans-serif", fontSize: 6, fontWeight: 400, fontStyle: "normal", width: 8.34375 },
      { text: "5", fontFamily: "sans-serif", fontSize: 6, fontWeight: 400, fontStyle: "normal", width: 3.34375 },
      { text: "5.5", fontFamily: "sans-serif", fontSize: 6, fontWeight: 400, fontStyle: "normal", width: 8.34375 },
      { text: "6", fontFamily: "sans-serif", fontSize: 6, fontWeight: 400, fontStyle: "normal", width: 3.34375 },
      { text: "6.5", fontFamily: "sans-serif", fontSize: 6, fontWeight: 400, fontStyle: "normal", width: 8.34375 },
      { text: "7", fontFamily: "sans-serif", fontSize: 6, fontWeight: 400, fontStyle: "normal", width: 3.34375 },
      { text: "7.5", fontFamily: "sans-serif", fontSize: 6, fontWeight: 400, fontStyle: "normal", width: 8.34375 },
      { text: "8", fontFamily: "sans-serif", fontSize: 6, fontWeight: 400, fontStyle: "normal", width: 3.34375 },
      { text: "8.5", fontFamily: "sans-serif", fontSize: 6, fontWeight: 400, fontStyle: "normal", width: 8.34375 },
      { text: "9", fontFamily: "sans-serif", fontSize: 6, fontWeight: 400, fontStyle: "normal", width: 3.34375 },
      { text: "9.5", fontFamily: "sans-serif", fontSize: 6, fontWeight: 400, fontStyle: "normal", width: 8.34375 },
      { text: "10", fontFamily: "sans-serif", fontSize: 6, fontWeight: 400, fontStyle: "normal", width: 6.6875 },
      { text: "10.5", fontFamily: "sans-serif", fontSize: 6, fontWeight: 400, fontStyle: "normal", width: 11.6875 },
      { text: "11", fontFamily: "sans-serif", fontSize: 6, fontWeight: 400, fontStyle: "normal", width: 6.234375 },
      { text: "11.5", fontFamily: "sans-serif", fontSize: 6, fontWeight: 400, fontStyle: "normal", width: 11.25 },
      { text: "12", fontFamily: "sans-serif", fontSize: 6, fontWeight: 400, fontStyle: "normal", width: 6.6875 },
      { text: "12.5", fontFamily: "sans-serif", fontSize: 6, fontWeight: 400, fontStyle: "normal", width: 11.6875 },
      { text: "13", fontFamily: "sans-serif", fontSize: 6, fontWeight: 400, fontStyle: "normal", width: 6.6875 },
      { text: "13.5", fontFamily: "sans-serif", fontSize: 6, fontWeight: 400, fontStyle: "normal", width: 11.6875 },
      { text: "14", fontFamily: "sans-serif", fontSize: 6, fontWeight: 400, fontStyle: "normal", width: 6.6875 },
      { text: "14.5", fontFamily: "sans-serif", fontSize: 6, fontWeight: 400, fontStyle: "normal", width: 11.6875 },
      { text: "15", fontFamily: "sans-serif", fontSize: 6, fontWeight: 400, fontStyle: "normal", width: 6.6875 },
      { text: "15.5", fontFamily: "sans-serif", fontSize: 6, fontWeight: 400, fontStyle: "normal", width: 11.6875 },
      { text: "16", fontFamily: "sans-serif", fontSize: 6, fontWeight: 400, fontStyle: "normal", width: 6.6875 },
      { text: "16.5", fontFamily: "sans-serif", fontSize: 6, fontWeight: 400, fontStyle: "normal", width: 11.6875 },
      { text: "17", fontFamily: "sans-serif", fontSize: 6, fontWeight: 400, fontStyle: "normal", width: 6.6875 },
      { text: "17.5", fontFamily: "sans-serif", fontSize: 6, fontWeight: 400, fontStyle: "normal", width: 11.6875 },
      { text: "18", fontFamily: "sans-serif", fontSize: 6, fontWeight: 400, fontStyle: "normal", width: 6.6875 },
      { text: "18.5", fontFamily: "sans-serif", fontSize: 6, fontWeight: 400, fontStyle: "normal", width: 11.6875 },
      { text: "19", fontFamily: "sans-serif", fontSize: 6, fontWeight: 400, fontStyle: "normal", width: 6.6875 },
      { text: "19.5", fontFamily: "sans-serif", fontSize: 6, fontWeight: 400, fontStyle: "normal", width: 11.6875 },
      { text: "20", fontFamily: "sans-serif", fontSize: 6, fontWeight: 400, fontStyle: "normal", width: 6.6875 },
      { text: "Sugar intensity (g per 100g)", fontFamily: "sans-serif", fontSize: 11, fontWeight: 700, fontStyle: "normal", width: 144.875 },
      { text: "0", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 5.5625 },
      { text: "50", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 11.125 },
      { text: "100", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 16.6875 },
      { text: "150", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 16.6875 },
      { text: "200", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 16.6875 },
      { text: "250", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 16.6875 },
      { text: "300", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 16.6875 },
      { text: "350", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 16.6875 },
      { text: "Number of products", fontFamily: "sans-serif", fontSize: 11, fontWeight: 700, fontStyle: "normal", width: 105.125 },
      { text: "0.00", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 19.46875 },
      { text: "0.05", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 19.46875 },
      { text: "0.10", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 19.46875 },
      { text: "0.15", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 19.46875 },
      { text: "0.20", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 19.46875 },
      { text: "0.25", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 19.46875 },
      { text: "0.30", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 19.46875 },
      { text: "0.35", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 19.46875 },
      { text: "0.40", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 19.46875 },
      { text: "Tax (pence per g sugar)", fontFamily: "sans-serif", fontSize: 11, fontWeight: 700, fontStyle: "normal", width: 123.28125 }
    ] } })
    .createData({ values: data })
    .createComputedData({ id: "productsN", as: "productsN", expression: { op: "toNumber", operand: { field: "Number of products " } } })
    .createComputedData({ id: "taxN", as: "taxN", expression: { op: "toNumber", operand: { field: "Tax (pence per g sugar)" } } })
    .createBarPlot({ x: { field: "Sugar intensity (g per 100ml)", fieldType: "nominal" }, y: { field: "productsN" }, guides: false })
    .editYScale({ domain: [0, 350] })
    .editBarMark({ fill: "#e6224b", opacity: 0.5, stroke: false })
    .encodeBarWidth({ band: 0.9 })
    .createLinePlot({ x: { field: "Sugar intensity (g per 100ml)", fieldType: "nominal" }, y: { field: "taxN", scale: { id: "taxY", domain: [0, 0.4] } }, guides: false })
    .editLineMark({ stroke: "#36b7b4", curve: "monotone" })
    .createAxes({
      x: {
        line: { color: "#888" },
        ticksAndLabels: {
          values: ["0", "0.5", "1", "1.5", "2", "2.5", "3", "3.5", "4", "4.5", "5", "5.5", "6", "6.5", "7", "7.5", "8", "8.5", "9", "9.5", "10", "10.5", "11", "11.5", "12", "12.5", "13", "13.5", "14", "14.5", "15", "15.5", "16", "16.5", "17", "17.5", "18", "18.5", "19", "19.5", "20"],
          ticks: { length: 5, color: "#888", alongOffset: 0.5 },
          labels: { fontSize: 6, fontFamily: "sans-serif", color: "black", offset: 6.21875, alongOffset: -0.3788849220628, rotation: { value: 60, unit: "degrees" }, align: "left", overlap: "allow" }
        },
        title: { text: "Sugar intensity (g per 100g)", fontSize: 11, fontWeight: 700, color: "black", fontFamily: "sans-serif", offset: 29.19133949279785, alongOffset: 0.5 }
      },
      y: false
    })
    .createAxes({
      x: false,
      y: [
        {
          id: "yAxis", scale: "y", position: "left",
          line: { color: "#888" },
          ticksAndLabels: {
            values: [0, 50, 100, 150, 200, 250, 300, 350],
            ticks: { length: 5, color: "#888", alongOffset: -0.5 },
            labels: { fontSize: 10, fontFamily: "sans-serif", color: "black", offset: 6.5, alongOffset: 0.890625, format: ".0f" }
          },
          title: { text: "Number of products", fontSize: 11, fontWeight: 700, color: "#e6224b", fontFamily: "sans-serif", offset: 32.1064453125, alongOffset: 0.5, rotation: { value: -90, unit: "degrees" } }
        }
      ]
    })
    .createAxes({
      x: false,
      y: [
        {
          id: "taxAxis", scale: "taxY", position: "right",
          line: { color: "#888" },
          ticksAndLabels: {
            values: [0, 0.05, 0.1, 0.15, 0.2, 0.25, 0.3, 0.35, 0.4],
            ticks: { length: 5, color: "#888", alongOffset: -0.5 },
            labels: { fontSize: 10, fontFamily: "sans-serif", color: "black", offset: 7.5, alongOffset: 0.890625, format: ".2f" }
          },
          title: { text: "Tax (pence per g sugar)", fontSize: 11, fontWeight: 700, color: "#36b7b4", fontFamily: "sans-serif", offset: 35.884765625, alongOffset: 0.5, rotation: { value: 90, unit: "degrees" } }
        }
      ]
    })
    .createGrid({ horizontal: { scale: "y", values: [0, 50, 100, 150, 200, 250, 300, 350], color: "#ddd" }, vertical: false });
}