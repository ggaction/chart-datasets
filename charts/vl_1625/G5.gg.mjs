// DOCS: doc-e790db38fc2a278a, doc-2e6240c00cb297cc
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({ width: 124, height: 279, margin: { left: 39, top: 5, right: 5, bottom: 74 } })
    .editCanvas({ plotBorder: { color: "#ddd", lineWidth: 1 } })
    .applyTextMetrics({ profile: { schemaVersion: 1, id: "vl_1625-source-fonts", measurements: [
      { text: "Glabron", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 35.578125 },
      { text: "Manchuria", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 46.703125 },
      { text: "No. 457", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 35.03125 },
      { text: "No. 462", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 35.03125 },
      { text: "variety", fontFamily: "sans-serif", fontSize: 11, fontWeight: 700, fontStyle: "normal", width: 35.484375 },
      { text: "15", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 11.125 },
      { text: "20", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 11.125 },
      { text: "25", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 11.125 },
      { text: "30", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 11.125 },
      { text: "35", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 11.125 },
      { text: "40", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 11.125 },
      { text: "yield", fontFamily: "sans-serif", fontSize: 11, fontWeight: 700, fontStyle: "normal", width: 25.078125 }
    ] } })
    .createData({ values: data })
    .createComputedData({ id: "withLower", as: "lower_yield", expression: { op: "add", left: { field: "yield" }, right: { field: "yieldError2" } } })
    .createComputedData({ id: "withUpper", as: "upper_yield", expression: { op: "add", left: { field: "yield" }, right: { field: "yieldError" } } })
    .createTickMark({ id: "lowerCap", length: 15, stroke: "#4c78a8" })
    .editTickMark({ strokeWidth: 1, opacity: 0.7 })
    .encodeX({ field: "variety", fieldType: "ordinal", scale: { type: "band", domain: ["Glabron", "Manchuria", "No. 457", "No. 462"], paddingInner: 0.25, paddingOuter: 0.125 } })
    .encodeY({ target: "lowerCap", field: "lower_yield", fieldType: "quantitative" })
    .encodeAngle({ target: "lowerCap", value: 90 })
    .createTickMark({ id: "upperCap", length: 15, stroke: "#4c78a8" })
    .editTickMark({ strokeWidth: 1, opacity: 0.7 })
    .encodeX({ target: "upperCap", field: "variety", fieldType: "ordinal" })
    .encodeY({ target: "upperCap", field: "upper_yield", fieldType: "quantitative" })
    .encodeAngle({ target: "upperCap", value: 90 })
    .createRuleMark({ id: "intervalRule", stroke: "black", strokeWidth: 1 })
    .encodeX({ target: "intervalRule", field: "variety", fieldType: "ordinal" })
    .encodeYRange({ target: "intervalRule", lower: "lower_yield", upper: "upper_yield" })
    .createScatterPlot({ x: { field: "variety", fieldType: "ordinal" }, y: "yield", guides: false })
    .encodeOpacity({ target: "scatterPlot", value: 0.7 })
    .editPointMark({ fill: "black", stroke: "none" })
    .encodePointRadius({ value: Math.sqrt(30) / 2 })
    .editXScale({ domain: ["Glabron", "Manchuria", "No. 457", "No. 462"], paddingInner: 0.25, paddingOuter: 0.125 })
    .editYScale({ domain: [14, 44], zero: false, nice: false })
    .createXAxis({
      line: {},
      ticksAndLabels: { values: ["Glabron", "Manchuria", "No. 457", "No. 462"], ticks: { length: 5 }, labels: { fontSize: 10, offset: 7.5, alongOffset: 0.5, rotation: { value: -90, unit: "degrees" } } },
      title: { text: "variety", fontSize: 11, offset: 64.267578125 }
    })
    .editXAxisLine({ color: "#888" })
    .editXAxisTicksAndLabels({ ticks: { color: "#888" }, labels: { color: "black" } })
    .editXAxisTitle({ fontWeight: 700, color: "black" })
    .createYAxis({
      line: {},
      ticksAndLabels: { values: [15, 20, 25, 30, 35, 40], ticks: { length: 5 }, labels: { fontSize: 10, offset: 6.5, alongOffset: 0.890625 } },
      title: { text: "yield", fontSize: 11, offset: 26.544921875, rotation: { value: -90, unit: "degrees" } }
    })
    .editYAxisLine({ color: "#888" })
    .editYAxisTicksAndLabels({ ticks: { color: "#888" }, labels: { color: "black" } })
    .editYAxisTitle({ fontWeight: 700, color: "black" })
    .createHorizontalGrid({ values: [15, 20, 25, 30, 35, 40] })
    .editHorizontalGrid({ color: "#ddd" });
}