// DOCS: doc-e790db38fc2a278a, doc-2e6240c00cb297cc, doc-e8d8c6aef74192f0
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({ width: 279, height: 122, margin: { left: 74, top: 5, right: 5, bottom: 37 } })
    .editCanvas({ plotBorder: { color: "#ddd", lineWidth: 1 } })
    .createData({ values: data })
    .createComputedData({ id: "yieldLower", as: "lower_yield", expression: { op: "subtract", left: { field: "yield" }, right: { field: "yieldError" } } })
    .createComputedData({ id: "yieldUpper",
        as: "upper_yield", expression: { op: "add", left: { field: "yield" }, right: { field: "yieldError" } } })
    .createTickMark({ id: "capLower", length: 15, stroke: "#4c78a8" })
    .editTickMark({ strokeWidth: 1, opacity: 0.7 })
    .encodeX({ field: "lower_yield", target: "capLower", fieldType: "quantitative" })
    .encodeY({ field: "variety", fieldType: "ordinal", scale: { type: "band", domain: ["Glabron", "Manchuria", "No. 457", "No. 462"], paddingInner: 0.25, paddingOuter: 0.125 } })
    .createTickMark({ id: "capUpper", length: 15, stroke: "#4c78a8" })
    .editTickMark({ strokeWidth: 1, opacity: 0.7 })
    .encodeX({ field: "upper_yield", target: "capUpper", fieldType: "quantitative" })
    .encodeY({ field: "variety", target: "capUpper", fieldType: "ordinal" })
    .createRuleMark({ id: "errRule", stroke: "black" })
    .encodeStrokeWidth({ value: 1, target: "errRule" })
    .encodeXRange({ lower: "lower_yield", upper: "upper_yield" })
    .encodeY({ field: "variety", target: "errRule", fieldType: "ordinal" })
    .createScatterPlot({ x: "yield", y: { field: "variety", fieldType: "ordinal" }, guides: false })
    .editPointMark({ fill: "black", stroke: "none", opacity: 0.7 })
    .encodePointRadius({ value: 2.7386127875258306 })
    .editXScale({ domain: [18, 44], nice: false, zero: false })
    .editYScale({ type: "band", paddingInner: 0.25, paddingOuter: 0.125 })
    .createXAxis({
      line: {},
      ticksAndLabels: { values: [20, 25, 30, 35, 40], ticks: { length: 5 }, labels: { fontSize: 10, offset: 5.5, alongOffset: 0.5, flush: true } },
      title: { text: "yield", fontSize: 11, offset: 27.578125 }
    })
    .editXAxisLine({ color: "#888" })
    .editXAxisTicksAndLabels({ ticks: { color: "#888" }, labels: { color: "black" } })
    .editXAxisTitle({ color: "black", fontWeight: 700 })
    .createYAxis({
      line: {},
      ticksAndLabels: { values: ["Glabron", "Manchuria", "No. 457", "No. 462"], ticks: { length: 5 }, labels: { fontSize: 10, offset: 6.5, alongOffset: 0.890625 } },
      title: { text: "variety", fontSize: 11, offset: 62.111328125, rotation: -1.5707963267948966 }
    })
    .editYAxisLine({ color: "#888" })
    .editYAxisTicksAndLabels({ ticks: { color: "#888" }, labels: { color: "black" } })
    .editYAxisTitle({ color: "black", fontWeight: 700 })
    .createVerticalGrid({ values: [20, 25, 30, 35, 40] })
    .editVerticalGrid({ color: "#ddd" });
}