// DOCS: doc-8f7efd41b2186a84 (createBarPlot facade, width band fraction, guides inference)
// DOCS: doc-8f7efd41b2186a84 (createBarPlot horizontal bars, x/y position channels)
// DOCS: doc-8f7efd41b2186a84 (createBarPlot source authoring reference)
// DOCS: doc-f1f94dec7d5389ca (Composition Recipe)

import { chart, vconcat } from "ggaction";
import data from "./data.json";

// DOCS: doc-8f7efd41b2186a84 (createBarPlot complete chart facade; bar mark with nominal fill color)
export function buildChart() {
  // ---- Panel 0: Baggage handling ----
  const child0 = chart()
    // DOCS: doc-8f7efd41b2186a84 (canvas + dataset context prerequisite)
    .createCanvas({
      width: 414,
      height: 178,
      margin: { top: 42, right: 73, bottom: 16, left: 141 }
    })
    .editCanvas({
      background: "transparent",
      plotBorder: { color: "#ddd", lineWidth: 1 }
    })
    .createData({ values: data })
    .filterData({
      id: "baggage",
      field: "field_name",
      oneOf: ["Baggage handling"]
    })
    .applyTextMetrics({
      profile: {
        schemaVersion: 1,
        id: "vl_1316-panel-0-original-font-widths",
        measurements: [
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
        ]
      }
    })
    // DOCS: doc-8f7efd41b2186a84 (createBarPlot x/y channels; horizontal measure/category bars)
    .createBarPlot({
      x: { field: "count", fieldType: "quantitative" },
      y: { field: "response", fieldType: "nominal" },
      guides: false
    })
    .editXScale({ domain: [0, 50000] })
    .editYScale({
      domain: [0, 1, 2, 3, 4, 5],
      paddingInner: 0,
      paddingOuter: 0
    })
    .encodeColor({ field: "response", layout: "overlay" })
    .editColorScale({
      domain: [0, 1, 2, 3, 4, 5],
      range: ["#1b9e77", "#d95f02", "#7570b3", "#e7298a", "#66a61e", "#e6ab02"]
    })
    .editBarMark({ opacity: 1, stroke: false })
    .encodeBarWidth({ pixels: 18 })
    // DOCS: doc-8f7efd41b2186a84 (guides disabled in facade; explicit source axes/grid/legend follow)
    .createYAxis({
      ticksAndLabels: {
        ticks: { length: 5 },
        labels: {
          offset: 7,
          fontSize: 24,
          fontFamily: "sans-serif",
          overlap: "allow"
        }
      },
      title: {
        text: "response",
        offset: 33.62890625,
        rotation: { value: -90, unit: "degrees" },
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
    .editYAxisTitle({
      color: "black",
      fontWeight: 700
    })
    .createVerticalGrid({
      values: [0, 10000, 20000, 30000, 40000, 50000]
    })
    .editVerticalGrid({
      color: "#ddd",
      lineWidth: 1
    })
    .createLegend({
      titleStyle: { fontSize: 11, fontFamily: "sans-serif", fontWeight: 700, color: "black" },
      labels: { fontSize: 10, fontFamily: "sans-serif", color: "black" },
      symbol: { layers: [{ type: "swatch", width: 10, height: 10, stroke: "none", strokeWidth: 0 }] }
    })
    // Real row header over the filtered dataset.
    .createAnnotation({
      text: "Baggage handling",
      anchor: "plot-center",
      fontSize: 24
    })
    .editTextMark({
      target: "annotation",
      rotation: { value: -90, unit: "degrees" },
      dx: -158.34765625
    })
    .editTextMark({
      target: "annotation",
      fill: "black",
      baseline: "alphabetic"
    })
    // Independent row text: constant annotation over the derived dataset -> one item.
    .createAnnotation({
      id: "facetCaption",
      anchor: "plot-center",
      text: "field_name",
      fontSize: 36
    })
    .editTextMark({
      target: "facetCaption",
      rotation: { value: -90, unit: "degrees" },
      dx: -206
    })
    .editTextMark({
      target: "facetCaption",
      dy: 71,
      fontWeight: 700
    })
    .editTextMark({
      target: "facetCaption",
      fill: "black",
      baseline: "alphabetic"
    });

  // ---- Panel 1: Seat comfort ----
  const child1 = chart()
    .createCanvas({
      width: 414,
      height: 185,
      margin: { top: 6, right: 73, bottom: 59, left: 141 }
    })
    .editCanvas({
      background: "transparent",
      plotBorder: { color: "#ddd", lineWidth: 1 }
    })
    .createData({ values: data })
    .filterData({
      id: "seatComfort",
      field: "field_name",
      oneOf: ["Seat comfort"]
    })
    .applyTextMetrics({
      profile: {
        schemaVersion: 1,
        id: "vl_1316-panel-1-original-font-widths",
        measurements: [
          { text: "0", fontFamily: "sans-serif", fontSize: 24, fontWeight: 400, fontStyle: "normal", width: 13.359375 },
          { text: "1", fontFamily: "sans-serif", fontSize: 24, fontWeight: 400, fontStyle: "normal", width: 13.359375 },
          { text: "2", fontFamily: "sans-serif", fontSize: 24, fontWeight: 400, fontStyle: "normal", width: 13.359375 },
          { text: "3", fontFamily: "sans-serif", fontSize: 24, fontWeight: 400, fontStyle: "normal", width: 13.359375 },
          { text: "4", fontFamily: "sans-serif", fontSize: 24, fontWeight: 400, fontStyle: "normal", width: 13.359375 },
          { text: "5", fontFamily: "sans-serif", fontSize: 24, fontWeight: 400, fontStyle: "normal", width: 13.359375 },
          { text: "response", fontFamily: "sans-serif", fontSize: 18, fontWeight: 700, fontStyle: "normal", width: 80.046875 },
          { text: "Seat comfort", fontFamily: "sans-serif", fontSize: 24, fontWeight: 400, fontStyle: "normal", width: 136.0625 },
          { text: "20,000", fontFamily: "sans-serif", fontSize: 24, fontWeight: 400, fontStyle: "normal", width: 73.40625 },
          { text: "40,000", fontFamily: "sans-serif", fontSize: 24, fontWeight: 400, fontStyle: "normal", width: 73.40625 },
          { text: "count", fontFamily: "sans-serif", fontSize: 18, fontWeight: 700, fontStyle: "normal", width: 49 }
        ]
      }
    })
    .createBarPlot({
      x: { field: "count", fieldType: "quantitative" },
      y: { field: "response", fieldType: "nominal" },
      guides: false
    })
    .editXScale({ domain: [0, 50000] })
    .editYScale({
      domain: [0, 1, 2, 3, 4, 5],
      paddingInner: 0,
      paddingOuter: 0
    })
    .encodeColor({ field: "response", layout: "overlay" })
    .editColorScale({
      domain: [0, 1, 2, 3, 4, 5],
      range: ["#1b9e77", "#d95f02", "#7570b3", "#e7298a", "#66a61e", "#e6ab02"]
    })
    .editBarMark({ opacity: 1, stroke: false })
    .encodeBarWidth({ pixels: 18 })
    .createYAxis({
      ticksAndLabels: {
        ticks: { length: 5 },
        labels: {
          offset: 7,
          fontSize: 24,
          fontFamily: "sans-serif",
          overlap: "allow"
        }
      },
      title: {
        text: "response",
        offset: 33.62890625,
        rotation: { value: -90, unit: "degrees" },
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
    .editYAxisTitle({
      color: "black",
      fontWeight: 700
    })
    .createXAxis({
      ticksAndLabels: {
        ticks: { length: 5 },
        labels: {
          offset: 5.5,
          fontSize: 24,
          fontFamily: "sans-serif",
          overlap: "allow",
          flush: true,
          labelMap: [
            { value: 10000, label: "" },
            { value: 30000, label: "" },
            { value: 50000, label: "" }
          ]
        }
      },
      title: {
        text: "count",
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
      format: ",.0f",
      color: "black"
    })
    .editXAxisTitle({
      color: "black",
      fontWeight: 700
    })
    .createVerticalGrid({
      values: [0, 10000, 20000, 30000, 40000, 50000]
    })
    .editVerticalGrid({
      color: "#ddd",
      lineWidth: 1
    })
    .createAnnotation({
      text: "Seat comfort",
      anchor: "plot-center",
      fontSize: 24
    })
    .editTextMark({
      target: "annotation",
      rotation: { value: -90, unit: "degrees" },
      dx: -158.34765625
    })
    .editTextMark({
      target: "annotation",
      fill: "black",
      baseline: "alphabetic"
    });

  // DOCS: doc-f1f94dec7d5389ca (Composition Recipe: vertical composition of panel programs)
  return vconcat({
    programs: [
      { id: "panel0", program: child0 },
      { id: "panel1", program: child1 }
    ],
    gap: 0,
    align: "start"
  });
}