// DOCS: doc-8f7efd41b2186a84 createBarPlot
// DOCS: doc-3b660fabf78cdd08 createBarPlot ranged/interval geometry
// DOCS: doc-333a87e52954985d Bar Chart Tutorial
import { chart, vconcat } from "ggaction";
import data from "./data.json";

// DOCS: doc-8f7efd41b2186a84 createBarPlot (complete facade, band width, color scale)
export function buildChart() {
  // ---- panel0: Baggage handling ----
  const child0 = chart()
    // DOCS: doc-8f7efd41b2186a84 createBarPlot (canvas with measured margins)
    .createCanvas({
      width: 414,
      height: 178,
      margin: { top: 42, right: 73, bottom: 16, left: 141 }
    })
    // frozen shared typed raw import, unchanged rows
    .createData({ id: "raw0", values: data })
    // DOCS: doc-8f7efd41b2186a84 (source facet partition)
    .filterData({
      id: "baggage",
      field: "field_name",
      oneOf: ["Baggage handling"]
    })
    .createBarPlot({
      x: { field: "end_percent", fieldType: "quantitative" },
      y: { field: "response", fieldType: "nominal" },
      guides: false
    })
    // transparent child over the single white parent; source plot border
    .editCanvas({ background: "transparent", plotBorder: { color: "#ddd", lineWidth: 1 } })
    .applyTextMetrics({ profile: { schemaVersion: 1, id: "vl_1277-panel-0-original-font-widths", measurements: [{ text: "field_name", fontFamily: "sans-serif", fontSize: 36, fontWeight: 700, fontStyle: "normal", width: 188.078125 }, { text: "0", fontFamily: "sans-serif", fontSize: 24, fontWeight: 400, fontStyle: "normal", width: 13.359375 }, { text: "1", fontFamily: "sans-serif", fontSize: 24, fontWeight: 400, fontStyle: "normal", width: 13.359375 }, { text: "2", fontFamily: "sans-serif", fontSize: 24, fontWeight: 400, fontStyle: "normal", width: 13.359375 }, { text: "3", fontFamily: "sans-serif", fontSize: 24, fontWeight: 400, fontStyle: "normal", width: 13.359375 }, { text: "4", fontFamily: "sans-serif", fontSize: 24, fontWeight: 400, fontStyle: "normal", width: 13.359375 }, { text: "5", fontFamily: "sans-serif", fontSize: 24, fontWeight: 400, fontStyle: "normal", width: 13.359375 }, { text: "response", fontFamily: "sans-serif", fontSize: 18, fontWeight: 700, fontStyle: "normal", width: 80.046875 }, { text: "Baggage handling", fontFamily: "sans-serif", fontSize: 24, fontWeight: 400, fontStyle: "normal", width: 193.515625 }, { text: "0", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 5.5625 }, { text: "1", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 5.5625 }, { text: "2", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 5.5625 }, { text: "3", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 5.5625 }, { text: "4", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 5.5625 }, { text: "5", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 5.5625 }, { text: "response", fontFamily: "sans-serif", fontSize: 11, fontWeight: 700, fontStyle: "normal", width: 48.921875 }] } })
    .editXScale({ domain: [0, 1] })
    .editYScale({ domain: [0, 1, 2, 3, 4, 5], paddingInner: 0, paddingOuter: 0 })
    .encodeColor({ field: "response", layout: "overlay" })
    .editColorScale({ domain: [0, 1, 2, 3, 4, 5], range: ["#1b9e77", "#d95f02", "#7570b3", "#e7298a", "#66a61e", "#e6ab02"] })
    .encodeBarWidth({ pixels: 18 })
    .editBarMark({ stroke: false, opacity: 1 })
    // left axis: line, ticks, 24px labels, 18px bold title (panel0 has no x axis)
    .createYAxis({
      ticksAndLabels: {
        values: [0, 1, 2, 3, 4, 5],
        ticks: { length: 5 },
        labels: { fontSize: 24, fontFamily: "sans-serif", offset: 7, overlap: "allow" }
      },
      title: {
        text: "response",
        offset: 33.62890625,
        rotation: -1.5707963267948966,
        fontSize: 18,
        fontFamily: "sans-serif"
      }
    })
    .editYAxisLine({ color: "#888", lineWidth: 1 })
    .editYAxisTicks({
      color: "#888",
      lineWidth: 1
    })
    .editYAxisLabels({
      color: "black"
    })
    .editYAxisTitle({ color: "black", fontWeight: 700 })
    // vertical grid only, explicit source values
    .createVerticalGrid({ values: [0, 0.2, 0.4, 0.6, 0.8, 1] })
    .editVerticalGrid({ color: "#ddd", lineWidth: 1 })
    // right categorical color legend, source fonts and spacing (panel0 only)
    .createLegend({
      titleStyle: { fontSize: 11, fontFamily: "sans-serif" },
      labels: { fontSize: 10, fontFamily: "sans-serif" },
      symbol: { layers: [{ type: "swatch", width: 10, height: 10, stroke: "none", strokeWidth: 0 }] }
    })
    .editLegendTitle({ color: "black", fontWeight: 700 })
    .editLegendLabels({ color: "black" })
    // facet column caption "field_name": 36px bold, rotated, independent row text
    .createAnnotation({ id: "facetCaption", anchor: "plot-center", text: "field_name", fontSize: 36 })
    .editTextMark({ target: "facetCaption", rotation: { value: -90, unit: "degrees" }, dx: -206 })
    .editTextMark({ target: "facetCaption", dy: 71, fontWeight: 700 })
    .editTextMark({ target: "facetCaption", fill: "black", baseline: "alphabetic" })
    // row header annotation "Baggage handling": 24px, rotated, independent row text
    .createAnnotation({ text: "Baggage handling", anchor: "plot-center", fontSize: 24 })
    .editTextMark({ target: "annotation", rotation: { value: -90, unit: "degrees" }, dx: -158.34765625 })
    .editTextMark({ target: "annotation", fill: "black", baseline: "alphabetic" });

  // ---- panel1: Seat comfort ----
  const child1 = chart()
    .createCanvas({
      width: 414,
      height: 185,
      margin: { top: 6, right: 73, bottom: 59, left: 141 }
    })
    .createData({ id: "raw1", values: data })
    .filterData({
      id: "seat",
      field: "field_name",
      oneOf: ["Seat comfort"]
    })
    .createBarPlot({
      x: { field: "end_percent", fieldType: "quantitative" },
      y: { field: "response", fieldType: "nominal" },
      guides: false
    })
    .editCanvas({ background: "transparent", plotBorder: { color: "#ddd", lineWidth: 1 } })
    .applyTextMetrics({ profile: { schemaVersion: 1, id: "vl_1277-panel-1-original-font-widths", measurements: [{ text: "0", fontFamily: "sans-serif", fontSize: 24, fontWeight: 400, fontStyle: "normal", width: 13.359375 }, { text: "1", fontFamily: "sans-serif", fontSize: 24, fontWeight: 400, fontStyle: "normal", width: 13.359375 }, { text: "2", fontFamily: "sans-serif", fontSize: 24, fontWeight: 400, fontStyle: "normal", width: 13.359375 }, { text: "3", fontFamily: "sans-serif", fontSize: 24, fontWeight: 400, fontStyle: "normal", width: 13.359375 }, { text: "4", fontFamily: "sans-serif", fontSize: 24, fontWeight: 400, fontStyle: "normal", width: 13.359375 }, { text: "5", fontFamily: "sans-serif", fontSize: 24, fontWeight: 400, fontStyle: "normal", width: 13.359375 }, { text: "response", fontFamily: "sans-serif", fontSize: 18, fontWeight: 700, fontStyle: "normal", width: 80.046875 }, { text: "Seat comfort", fontFamily: "sans-serif", fontSize: 24, fontWeight: 400, fontStyle: "normal", width: 136.0625 }, { text: "0.0", fontFamily: "sans-serif", fontSize: 24, fontWeight: 400, fontStyle: "normal", width: 33.375 }, { text: "0.4", fontFamily: "sans-serif", fontSize: 24, fontWeight: 400, fontStyle: "normal", width: 33.375 }, { text: "0.8", fontFamily: "sans-serif", fontSize: 24, fontWeight: 400, fontStyle: "normal", width: 33.375 }, { text: "end_percent", fontFamily: "sans-serif", fontSize: 18, fontWeight: 700, fontStyle: "normal", width: 107.046875 }] } })
    .editXScale({ domain: [0, 1] })
    .editYScale({ domain: [0, 1, 2, 3, 4, 5], paddingInner: 0, paddingOuter: 0 })
    .encodeColor({ field: "response", layout: "overlay" })
    .editColorScale({ domain: [0, 1, 2, 3, 4, 5], range: ["#1b9e77", "#d95f02", "#7570b3", "#e7298a", "#66a61e", "#e6ab02"] })
    .encodeBarWidth({ pixels: 18 })
    .editBarMark({ stroke: false, opacity: 1 })
    .createYAxis({
      ticksAndLabels: {
        values: [0, 1, 2, 3, 4, 5],
        ticks: { length: 5 },
        labels: { fontSize: 24, fontFamily: "sans-serif", offset: 7, overlap: "allow" }
      },
      title: {
        text: "response",
        offset: 33.62890625,
        rotation: -1.5707963267948966,
        fontSize: 18,
        fontFamily: "sans-serif"
      }
    })
    .editYAxisLine({ color: "#888", lineWidth: 1 })
    .editYAxisTicks({
      color: "#888",
      lineWidth: 1
    })
    .editYAxisLabels({
      color: "black"
    })
    .editYAxisTitle({ color: "black", fontWeight: 700 })
    .createXAxis({
      ticksAndLabels: {
        values: [0, 0.2, 0.4, 0.6, 0.8, 1],
        ticks: { length: 5 },
        labels: {
          fontSize: 24,
          fontFamily: "sans-serif",
          offset: 5.5,
          flush: true,
          labelMap: [
            { value: 0.2, label: "" },
            { value: 0.6, label: "" },
            { value: 1, label: "" }
          ]
        }
      },
      title: {
        text: "end_percent",
        offset: 45.71875,
        fontSize: 18,
        fontFamily: "sans-serif"
      }
    })
    .editXAxisLine({ color: "#888", lineWidth: 1 })
    .editXAxisTicks({
      color: "#888",
      lineWidth: 1
    })
    .editXAxisLabels({
      color: "black",
      format: ".1f"
    })
    .editXAxisTitle({ color: "black", fontWeight: 700 })
    .createVerticalGrid({ values: [0, 0.2, 0.4, 0.6, 0.8, 1] })
    .editVerticalGrid({ color: "#ddd", lineWidth: 1 })
    // row header annotation "Seat comfort": 24px, rotated, independent row text
    .createAnnotation({ text: "Seat comfort", anchor: "plot-center", fontSize: 24 })
    .editTextMark({ target: "annotation", rotation: { value: -90, unit: "degrees" }, dx: -158.34765625 })
    .editTextMark({ target: "annotation", fill: "black", baseline: "alphabetic" });

  // measured parent layout: child0 bottom 178 == child1 top 178, plots aligned start
  return vconcat({
    programs: [
      { id: "panel0", program: child0 },
      { id: "panel1", program: child1 }
    ],
    gap: 0,
    align: "start"
  });
}