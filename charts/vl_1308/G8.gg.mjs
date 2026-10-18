// DOCS: doc-8f7efd41b2186a84
// DOCS: doc-f1f94dec7d5389ca
import { chart, vconcat } from "ggaction";
import data from "./data.json";

export function buildChart() {
  const child0 = chart()
    .createCanvas({ width: 414, height: 178, margin: { top: 42, right: 73, bottom: 16, left: 141 } })
    .editCanvas({ background: "transparent", plotBorder: { color: "#ddd", lineWidth: 1 } })
    .applyTextMetrics({ profile: { schemaVersion: 1, id: "vl_1308-panel-0-original-font-widths", measurements: [
      { text: "field_name", fontFamily: "sans-serif", fontSize: 36, fontWeight: 700, fontStyle: "normal", width: 188.078125 },
      { text: "0", fontFamily: "sans-serif", fontSize: 24, fontWeight: 400, fontStyle: "normal", width: 13.359375 },
      { text: "1", fontFamily: "sans-serif", fontSize: 24, fontWeight: 400, fontStyle: "normal", width: 13.359375 },
      { text: "2", fontFamily: "sans-serif", fontSize: 24, fontWeight: 400, fontStyle: "normal", width: 13.359375 },
      { text: "3", fontFamily: "sans-serif", fontSize: 24, fontWeight: 400, fontStyle: "normal", width: 13.359375 },
      { text: "4", fontFamily: "sans-serif", fontSize: 24, fontWeight: 400, fontStyle: "normal", width: 13.359375 },
      { text: "5", fontFamily: "sans-serif", fontSize: 24, fontWeight: 400, fontStyle: "normal", width: 13.359375 },
      { text: "response", fontFamily: "sans-serif", fontSize: 18, fontWeight: 700, fontStyle: "normal", width: 80.046875 },
      { text: "Baggage handling", fontFamily: "sans-serif", fontSize: 24, fontWeight: 400, fontStyle: "normal", width: 193.515625 },
      { text: "0", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 5.5625 },
      { text: "1", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 5.5625 },
      { text: "2", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 5.5625 },
      { text: "3", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 5.5625 },
      { text: "4", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 5.5625 },
      { text: "5", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 5.5625 },
      { text: "response", fontFamily: "sans-serif", fontSize: 11, fontWeight: 700, fontStyle: "normal", width: 48.921875 }
    ] } })
    .createData({ values: data })
    .filterData({ id: "baggage", field: "field_name", oneOf: ["Baggage handling"] })
    .createBarPlot({ guides: false,
      x: { field: "freq", fieldType: "quantitative" },
      y: { field: "response", fieldType: "nominal" } })
    .editXScale({ domain: [0, 0.4] })
    .editYScale({ domain: [0, 1, 2, 3, 4, 5], paddingInner: 0, paddingOuter: 0 })
    .encodeBarWidth({ pixels: 18 })
    .encodeColor({ field: "response", fieldType: "nominal", layout: "overlay" })
    .editColorScale({ domain: [0, 1, 2, 3, 4, 5], range: ["#1b9e77", "#d95f02", "#7570b3", "#e7298a", "#66a61e", "#e6ab02"] })
    .editBarMark({ opacity: 1, stroke: false })
    .createYAxis({
      ticksAndLabels: { values: [0, 1, 2, 3, 4, 5], ticks: { length: 5 }, labels: { fontSize: 24, fontFamily: "sans-serif", offset: 7, overlap: "allow" } },
      title: { text: "response", offset: 33.62890625, rotation: { value: -90, unit: "degrees" }, fontSize: 18, fontFamily: "sans-serif" } })
    .editYAxisLine({ color: "#888", lineWidth: 1 })
    .editYAxisTicks({ color: "#888", lineWidth: 1 })
    .editYAxisLabels({ color: "black", fontWeight: "normal" })
    .editYAxisTitle({ color: "black", fontWeight: 700 })
    .createVerticalGrid({ values: [0, 0.1, 0.2, 0.3, 0.4] })
    .editVerticalGrid({ color: "#ddd", lineWidth: 1 })
    .createLegend({ titleStyle: { fontSize: 11, fontFamily: "sans-serif" },
      labels: { fontSize: 10, fontFamily: "sans-serif" },
      symbol: { layers: [{ width: 10, height: 10, stroke: "none", strokeWidth: 0, type: "swatch" }] } })
    .editLegendTitle({ color: "black", fontWeight: 700 })
    .editLegendLabels({ color: "black", fontWeight: "normal" })
    .createAnnotation({ text: "Baggage handling", anchor: "plot-center", fontSize: 24 })
    .createAnnotation({ id: "facetCaption", anchor: "plot-center", text: "field_name", fontSize: 36 })
    .editTextMark({ target: "facetCaption", dx: -206, rotation: { value: -90, unit: "degrees" } })
    .editTextMark({ target: "facetCaption", dy: 71, fontWeight: 700 })
    .editTextMark({ target: "facetCaption", fill: "black", baseline: "alphabetic" })
    .editTextMark({ target: "annotation", dx: -158.34765625, rotation: { value: -90, unit: "degrees" } })
    .editTextMark({ target: "annotation", fill: "black", baseline: "alphabetic" });

  const child1 = chart()
    .createCanvas({ width: 414, height: 185, margin: { top: 6, right: 73, bottom: 59, left: 141 } })
    .editCanvas({ background: "transparent", plotBorder: { color: "#ddd", lineWidth: 1 } })
    .applyTextMetrics({ profile: { schemaVersion: 1, id: "vl_1308-panel-1-original-font-widths", measurements: [
      { text: "0", fontFamily: "sans-serif", fontSize: 24, fontWeight: 400, fontStyle: "normal", width: 13.359375 },
      { text: "1", fontFamily: "sans-serif", fontSize: 24, fontWeight: 400, fontStyle: "normal", width: 13.359375 },
      { text: "2", fontFamily: "sans-serif", fontSize: 24, fontWeight: 400, fontStyle: "normal", width: 13.359375 },
      { text: "3", fontFamily: "sans-serif", fontSize: 24, fontWeight: 400, fontStyle: "normal", width: 13.359375 },
      { text: "4", fontFamily: "sans-serif", fontSize: 24, fontWeight: 400, fontStyle: "normal", width: 13.359375 },
      { text: "5", fontFamily: "sans-serif", fontSize: 24, fontWeight: 400, fontStyle: "normal", width: 13.359375 },
      { text: "response", fontFamily: "sans-serif", fontSize: 18, fontWeight: 700, fontStyle: "normal", width: 80.046875 },
      { text: "Seat comfort", fontFamily: "sans-serif", fontSize: 24, fontWeight: 400, fontStyle: "normal", width: 136.0625 },
      { text: "0.0", fontFamily: "sans-serif", fontSize: 24, fontWeight: 400, fontStyle: "normal", width: 33.375 },
      { text: "0.2", fontFamily: "sans-serif", fontSize: 24, fontWeight: 400, fontStyle: "normal", width: 33.375 },
      { text: "0.4", fontFamily: "sans-serif", fontSize: 24, fontWeight: 400, fontStyle: "normal", width: 33.375 },
      { text: "freq", fontFamily: "sans-serif", fontSize: 18, fontWeight: 700, fontStyle: "normal", width: 34.015625 }
    ] } })
    .createData({ values: data })
    .filterData({ id: "seat", field: "field_name", oneOf: ["Seat comfort"] })
    .createBarPlot({ guides: false,
      x: { field: "freq", fieldType: "quantitative" },
      y: { field: "response", fieldType: "nominal" } })
    .editXScale({ domain: [0, 0.4] })
    .editYScale({ domain: [0, 1, 2, 3, 4, 5], paddingInner: 0, paddingOuter: 0 })
    .encodeBarWidth({ pixels: 18 })
    .encodeColor({ field: "response", fieldType: "nominal", layout: "overlay" })
    .editColorScale({ domain: [0, 1, 2, 3, 4, 5], range: ["#1b9e77", "#d95f02", "#7570b3", "#e7298a", "#66a61e", "#e6ab02"] })
    .editBarMark({ opacity: 1, stroke: false })
    .createYAxis({
      ticksAndLabels: { values: [0, 1, 2, 3, 4, 5], ticks: { length: 5 }, labels: { fontSize: 24, fontFamily: "sans-serif", offset: 7, overlap: "allow" } },
      title: { text: "response", offset: 33.62890625, rotation: { value: -90, unit: "degrees" }, fontSize: 18, fontFamily: "sans-serif" } })
    .editYAxisLine({ color: "#888", lineWidth: 1 })
    .editYAxisTicks({ color: "#888", lineWidth: 1 })
    .editYAxisLabels({ color: "black", fontWeight: "normal" })
    .editYAxisTitle({ color: "black", fontWeight: 700 })
    .createVerticalGrid({ values: [0, 0.1, 0.2, 0.3, 0.4] })
    .editVerticalGrid({ color: "#ddd", lineWidth: 1 })
    .createXAxis({
      ticksAndLabels: { values: [0, 0.1, 0.2, 0.3, 0.4], ticks: { length: 5 }, labels: { fontSize: 24, fontFamily: "sans-serif", offset: 5.5, flush: true, overlap: "allow", labelMap: [{ value: 0.1, label: "" }, { value: 0.3, label: "" }] } },
      title: { text: "freq", offset: 45.71875, fontSize: 18, fontFamily: "sans-serif" } })
    .editXAxisLine({ color: "#888", lineWidth: 1 })
    .editXAxisTicks({ color: "#888", lineWidth: 1 })
    .editXAxisLabels({ color: "black", fontWeight: "normal", format: ".1f" })
    .editXAxisTitle({ color: "black", fontWeight: 700 })
    .createAnnotation({ text: "Seat comfort", anchor: "plot-center", fontSize: 24 })
    .editTextMark({ target: "annotation", dx: -158.34765625, rotation: { value: -90, unit: "degrees" } })
    .editTextMark({ target: "annotation", fill: "black", baseline: "alphabetic" });

  return vconcat({ programs: [{ id: "panel0", program: child0 }, { id: "panel1", program: child1 }], gap: 0, align: "start" });
}