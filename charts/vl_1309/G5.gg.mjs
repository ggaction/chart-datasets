// DOCS: doc-8f7efd41b2186a84 createBarPlot
// DOCS: doc-f1f94dec7d5389ca Composition Recipe
// DOCS: doc-8f7efd41b2186a84 createBarPlot width via pixels18 encodeBarWidth
import { chart, vconcat } from "ggaction";
import data from "./data.json";

export function buildChart() {
  const child0 = chart()
    .createCanvas({ width: 429, height: 178, margin: { top: 42, right: 88, bottom: 16, left: 141 } })
    .editCanvas({ background: "transparent", plotBorder: { color: "#ddd", lineWidth: 1 } })
    .createData({ values: data })
    .filterData({ id: "panel0Rows", field: "field_name", oneOf: ["Baggage handling"] })
    .applyTextMetrics({ profile: { schemaVersion: 1, id: "vl_1309-panel-0-original-font-widths", measurements: [
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
    .createBarPlot({
      x: { lower: "start_percent", upper: "end_percent", fieldType: "quantitative" },
      y: { field: "response", fieldType: "nominal" },
      guides: false
    })
    .editXScale({ domain: [0, 1] })
    .editYScale({ domain: [0, 1, 2, 3, 4, 5], paddingInner: 0, paddingOuter: 0 })
    .encodeColor({ field: "response", fieldType: "nominal", layout: "overlay" })
    .editColorScale({ domain: [0, 1, 2, 3, 4, 5], range: ["#1b9e77", "#d95f02", "#7570b3", "#e7298a", "#66a61e", "#e6ab02"] })
    .encodeBarWidth({ pixels: 18 })
    .editBarMark({ opacity: 1, stroke: false })
    .createVerticalGrid({ values: [0, 0.2, 0.4, 0.6, 0.8, 1], color: "#ddd", lineWidth: 1 })
    .createYAxis({
      ticksAndLabels: {
        ticks: { length: 5 },
        labels: { offset: 7, fontSize: 24, fontFamily: "sans-serif", rotation: 0, overlap: "allow" }
      },
      title: { text: "response", offset: 33.62890625, rotation: -1.5707963267948966, fontSize: 18, fontFamily: "sans-serif" }
    })
    .editYAxisLine({ color: "#888", lineWidth: 1 })
    .editYAxisTicks({ color: "#888", lineWidth: 1 })
    .editYAxisLabels({ color: "black", fontWeight: "normal" })
    .editYAxisTitle({ color: "black", fontWeight: 700 })
    .createLegend({
      titleStyle: { fontSize: 11, fontFamily: "sans-serif", fontWeight: 700, color: "black" },
      labels: { fontSize: 10, fontFamily: "sans-serif", fontWeight: "normal", color: "black" },
      symbol: { layers: [{ type: "swatch", width: 10, height: 10, stroke: "none", strokeWidth: 0 }] }
    })
    .createAnnotation({ id: "facetCaption", anchor: "plot-center", text: "field_name", fontSize: 36 })
    .editTextMark({ target: "facetCaption", rotation: { value: -90, unit: "degrees" }, dx: -206 })
    .editTextMark({ target: "facetCaption", dy: 71, fontWeight: 700 })
    .editTextMark({ target: "facetCaption", fill: "black", baseline: "alphabetic" })
    .createAnnotation({ text: "Baggage handling", anchor: "plot-center", fontSize: 24 })
    .editTextMark({ target: "annotation", rotation: { value: -90, unit: "degrees" }, dx: -158.34765625 })
    .editTextMark({ target: "annotation", fill: "black", baseline: "alphabetic" });

  const child1 = chart()
    .createCanvas({ width: 429, height: 185, margin: { top: 6, right: 88, bottom: 59, left: 141 } })
    .editCanvas({ background: "transparent", plotBorder: { color: "#ddd", lineWidth: 1 } })
    .createData({ values: data })
    .filterData({ id: "panel1Rows", field: "field_name", oneOf: ["Seat comfort"] })
    .applyTextMetrics({ profile: { schemaVersion: 1, id: "vl_1309-panel-1-original-font-widths", measurements: [
      { text: "0", fontFamily: "sans-serif", fontSize: 24, fontWeight: 400, fontStyle: "normal", width: 13.359375 },
      { text: "1", fontFamily: "sans-serif", fontSize: 24, fontWeight: 400, fontStyle: "normal", width: 13.359375 },
      { text: "2", fontFamily: "sans-serif", fontSize: 24, fontWeight: 400, fontStyle: "normal", width: 13.359375 },
      { text: "3", fontFamily: "sans-serif", fontSize: 24, fontWeight: 400, fontStyle: "normal", width: 13.359375 },
      { text: "4", fontFamily: "sans-serif", fontSize: 24, fontWeight: 400, fontStyle: "normal", width: 13.359375 },
      { text: "5", fontFamily: "sans-serif", fontSize: 24, fontWeight: 400, fontStyle: "normal", width: 13.359375 },
      { text: "response", fontFamily: "sans-serif", fontSize: 18, fontWeight: 700, fontStyle: "normal", width: 80.046875 },
      { text: "Seat comfort", fontFamily: "sans-serif", fontSize: 24, fontWeight: 400, fontStyle: "normal", width: 136.0625 },
      { text: "0.0", fontFamily: "sans-serif", fontSize: 24, fontWeight: 400, fontStyle: "normal", width: 33.375 },
      { text: "0.4", fontFamily: "sans-serif", fontSize: 24, fontWeight: 400, fontStyle: "normal", width: 33.375 },
      { text: "0.8", fontFamily: "sans-serif", fontSize: 24, fontWeight: 400, fontStyle: "normal", width: 33.375 },
      { text: "start_percent, end_percent", fontFamily: "sans-serif", fontSize: 18, fontWeight: 700, fontStyle: "normal", width: 231.09375 }
    ] } })
    .createBarPlot({
      x: { lower: "start_percent", upper: "end_percent", fieldType: "quantitative" },
      y: { field: "response", fieldType: "nominal" },
      guides: false
    })
    .editXScale({ domain: [0, 1] })
    .editYScale({ domain: [0, 1, 2, 3, 4, 5], paddingInner: 0, paddingOuter: 0 })
    .encodeColor({ field: "response", fieldType: "nominal", layout: "overlay" })
    .editColorScale({ domain: [0, 1, 2, 3, 4, 5], range: ["#1b9e77", "#d95f02", "#7570b3", "#e7298a", "#66a61e", "#e6ab02"] })
    .encodeBarWidth({ pixels: 18 })
    .editBarMark({ opacity: 1, stroke: false })
    .createVerticalGrid({ values: [0, 0.2, 0.4, 0.6, 0.8, 1], color: "#ddd", lineWidth: 1 })
    .createYAxis({
      ticksAndLabels: {
        ticks: { length: 5 },
        labels: { offset: 7, fontSize: 24, fontFamily: "sans-serif", rotation: 0, overlap: "allow" }
      },
      title: { text: "response", offset: 33.62890625, rotation: -1.5707963267948966, fontSize: 18, fontFamily: "sans-serif" }
    })
    .editYAxisLine({ color: "#888", lineWidth: 1 })
    .editYAxisTicks({ color: "#888", lineWidth: 1 })
    .editYAxisLabels({ color: "black", fontWeight: "normal" })
    .editYAxisTitle({ color: "black", fontWeight: 700 })
    .createXAxis({
      ticksAndLabels: {
        ticks: { length: 5 },
        labels: {
          offset: 5.5,
          fontSize: 24,
          fontFamily: "sans-serif",
          rotation: 0,
          flush: true,
          overlap: "allow",
          labelMap: [{ value: 0.2, label: "" }, { value: 0.6, label: "" }, { value: 1, label: "" }]
        }
      },
      title: { text: "start_percent, end_percent", offset: 45.71875, rotation: 0, fontSize: 18, fontFamily: "sans-serif" }
    })
    .editXAxisLine({ color: "#888", lineWidth: 1 })
    .editXAxisTicks({ color: "#888", lineWidth: 1 })
    .editXAxisLabels({ color: "black", fontWeight: "normal", format: ".1f" })
    .editXAxisTitle({ color: "black", fontWeight: 700 })
    .createAnnotation({ text: "Seat comfort", anchor: "plot-center", fontSize: 24 })
    .editTextMark({ target: "annotation", rotation: { value: -90, unit: "degrees" }, dx: -158.34765625 })
    .editTextMark({ target: "annotation", fill: "black", baseline: "alphabetic" });

  return vconcat({
    programs: [
      { id: "panel0", program: child0 },
      { id: "panel1", program: child1 }
    ],
    gap: 0,
    align: "start"
  });
}