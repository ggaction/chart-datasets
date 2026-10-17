// DOCS: doc-13d83a1cc9d3506a, doc-2bf9359e36625c96, doc-4ca6044ce3c62f09
import { chart } from "ggaction";
import data from "./data.json";

const varietyOrder = ["Glabron", "Manchuria", "No. 457", "No. 462", "No. 475", "Peatland", "Svansota", "Trebi", "Velvet", "Wisconsin No. 38"];
const xTicks = [20, 25, 30, 35, 40, 45, 50, 55];

export function buildChart() {
  return chart()
    .createCanvas({ width: 311, height: 242, margin: { left: 105, top: 5, right: 6, bottom: 37 } })
    .applyTextMetrics({
      profile: {
        schemaVersion: 1,
        id: "1619-source-fonts",
        measurements: [
          { text: "20", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 11.125 },
          { text: "25", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 11.125 },
          { text: "30", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 11.125 },
          { text: "35", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 11.125 },
          { text: "40", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 11.125 },
          { text: "45", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 11.125 },
          { text: "50", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 11.125 },
          { text: "55", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 11.125 },
          { text: "yield", fontFamily: "sans-serif", fontSize: 11, fontWeight: 700, fontStyle: "normal", width: 25.078125 },
          { text: "Glabron", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 35.578125 },
          { text: "Manchuria", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 46.703125 },
          { text: "No. 457", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 35.03125 },
          { text: "No. 462", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 35.03125 },
          { text: "No. 475", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 35.03125 },
          { text: "Peatland", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 39.484375 },
          { text: "Svansota", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 41.703125 },
          { text: "Trebi", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 22.421875 },
          { text: "Velvet", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 27.25 },
          { text: "Wisconsin No. 38", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 77.8125 },
          { text: "variety", fontFamily: "sans-serif", fontSize: 11, fontWeight: 700, fontStyle: "normal", width: 35.484375 }
        ]
      }
    })
    .createData({ id: "raw", values: data })
    .createIntervalData({ id: "capsInterval", field: "yield", groupBy: "variety" })
    .editIntervalData({ target: "capsInterval", extent: "stdev" })
    .createComputedData({ id: "lowerStart", as: "lowerStart", expression: { op: "subtract", left: { field: "__capsInterval_lower" }, right: { constant: 0.0875 } } })
    .createComputedData({ id: "lowerEnd", as: "lowerEnd", expression: { op: "add", left: { field: "__capsInterval_lower" }, right: { constant: 0.0875 } } })
    .createComputedData({ id: "upperStart", as: "upperStart", expression: { op: "subtract", left: { field: "__capsInterval_upper" }, right: { constant: 0.0875 } } })
    .createComputedData({ id: "upperEnd", as: "upperEnd", expression: { op: "add", left: { field: "__capsInterval_upper" }, right: { constant: 0.0875 } } })
    .createBarMark({ id: "lowerCap", data: "upperEnd" })
    .editBarMark({ stroke: "blue", strokeWidth: 1, opacity: 0.7 })
    .encodeBarWidth({ pixels: 15 })
    .encodeXRange({ lower: "lowerStart", upper: "lowerEnd", scale: { id: "capX", type: "linear", domain: [20, 55], nice: false } })
    .encodeY({ field: "variety", fieldType: "ordinal", scale: { id: "capY", type: "band", domain: varietyOrder, paddingInner: 0.25, paddingOuter: 0.125 } })
    .createBarMark({ id: "upperCap", data: "upperEnd" })
    .editBarMark({ stroke: "blue", strokeWidth: 1, opacity: 0.7 })
    .encodeBarWidth({ pixels: 15 })
    .encodeXRange({ lower: "upperStart", upper: "upperEnd", scale: { id: "capX", type: "linear", domain: [20, 55], nice: false } })
    .encodeY({ field: "variety", fieldType: "ordinal", scale: { id: "capY", type: "band", domain: varietyOrder, paddingInner: 0.25, paddingOuter: 0.125 } })    .createErrorBar({ data: "raw", x: { field: "yield", extent: "stdev", scale: { domain: [20, 55], nice: false } }, y: { field: "variety", fieldType: "ordinal", scale: { domain: varietyOrder } } })
    .editErrorBar({ caps: false, stroke: "black", strokeWidth: 1 })
    .createGrid({ horizontal: false, vertical: { scale: "x", values: xTicks } })
    .editVerticalGrid({ color: "#ddd" })
    .createXAxis({
      scale: "x",
      ticksAndLabels: { values: xTicks, ticks: { length: 5 }, labels: { fontSize: 10, offset: 5.5, alongOffset: 0.5, flush: true } },
      title: { text: "yield", fontSize: 11, offset: 27.578125 }
    })
    .createYAxis({
      scale: "y",
      ticksAndLabels: { values: varietyOrder, ticks: { length: 5 }, labels: { fontSize: 10, offset: 6.5, alongOffset: 0.890625 } },
      title: { text: "variety", fontSize: 11, offset: 93.2294921875, rotation: -1.5707963267948966 }
    })
    .editXAxisLine({ color: "#888" })
    .editYAxisLine({ color: "#888" })
    .editXAxisTicksAndLabels({ ticks: { color: "#888" }, labels: { color: "black" } })
    .editYAxisTicksAndLabels({ ticks: { color: "#888" }, labels: { color: "black" } })
    .editXAxisTitle({ color: "black", fontWeight: 700 })
    .editYAxisTitle({ color: "black", fontWeight: 700 })
    .editCanvas({ plotBorder: { color: "#ddd", lineWidth: 1 } });
}