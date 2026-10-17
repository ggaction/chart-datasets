import { chart } from "ggaction";
import data from "./data.json";

// DOCS: doc-e790db38fc2a278a, doc-2e6240c00cb297cc, doc-2fcdfbdfb290e440
export function buildChart() {
  return chart()
    .createCanvas({ width: 279, height: 122, margin: { left: 74, top: 5, right: 5, bottom: 37 } })
    .applyTextMetrics({
      profile: {
        schemaVersion: 1,
        id: "vl_1623-source-fonts",
        measurements: [
          { text: "15", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 11.125 },
          { text: "20", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 11.125 },
          { text: "25", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 11.125 },
          { text: "30", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 11.125 },
          { text: "35", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 11.125 },
          { text: "40", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 11.124984741210938 },
          { text: "yield", fontFamily: "sans-serif", fontSize: 11, fontWeight: 700, fontStyle: "normal", width: 25.078125 },
          { text: "Glabron", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 35.578125 },
          { text: "Manchuria", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 46.703125 },
          { text: "No. 457", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 35.03125 },
          { text: "No. 462", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 35.03125 },
          { text: "variety", fontFamily: "sans-serif", fontSize: 11, fontWeight: 700, fontStyle: "normal", width: 35.484375 }
        ]
      }
    })
    .createData({ values: data })
    .createComputedData({ id: "errorLower", as: "lower_yield", expression: { op: "add", left: { field: "yield" }, right: { field: "yieldError2" } } })
    .createComputedData({ id: "errorUpper", as: "upper_yield", expression: { op: "add", left: { field: "yield" }, right: { field: "yieldError" } } })
    .createTickMark({ id: "capLower", data: "errorLower", length: 15 })
    .editTickMark({ stroke: "#4c78a8", strokeWidth: 1, opacity: 0.7 })
    .encodeX({ field: "lower_yield", scale: { zero: false, domain: [14, 44], nice: false } })
    .encodeY({ field: "variety", fieldType: "ordinal", scale: { type: "band", domain: ["Glabron", "Manchuria", "No. 457", "No. 462"], paddingInner: 0.25, paddingOuter: 0.125 } })
    .createTickMark({ id: "capUpper", data: "errorUpper", length: 15 })
    .editTickMark({ stroke: "#4c78a8", strokeWidth: 1, opacity: 0.7 })
    .encodeX({ field: "upper_yield", target: "capUpper" })
    .encodeY({ field: "variety", fieldType: "ordinal", target: "capUpper" })
    .createRuleMark({ data: "errorUpper", stroke: "black", strokeWidth: 1 })
    .encodeXRange({ lower: "lower_yield", upper: "upper_yield" })
    .encodeY({ field: "variety", fieldType: "ordinal" })
    .createScatterPlot({
      x: { field: "yield" },
      y: { field: "variety", fieldType: "ordinal" },
      guides: false
    })
    .editPointMark({ fill: "black", opacity: 0.7, stroke: "none" })
    .encodePointRadius({ value: 2.7386127875258306 })
    .createGrid({ horizontal: false, vertical: { values: [15, 20, 25, 30, 35, 40] } })
    .editVerticalGrid({ color: "#ddd" })
    .createXAxis({
      line: { color: "#888" },
      ticksAndLabels: { values: [15, 20, 25, 30, 35, 40], ticks: { length: 5, color: "#888" }, labels: { fontSize: 10, color: "black", offset: 5.5, alongOffset: 0.5, flush: true } },
      title: { text: "yield", fontSize: 11, fontWeight: 700, color: "black", offset: 27.578125 }
    })
    .createYAxis({
      line: { color: "#888" },
      ticksAndLabels: { values: ["Glabron", "Manchuria", "No. 457", "No. 462"], ticks: { length: 5, color: "#888" }, labels: { fontSize: 10, color: "black", offset: 6.5, alongOffset: 0.890625 } },
      title: { text: "variety", fontSize: 11, fontWeight: 700, color: "black", offset: 62.111328125, rotation: -1.5707963267948966 }
    })
    .editCanvas({ plotBorder: { color: "#ddd", lineWidth: 1 } });
}