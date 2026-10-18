// DOCS: doc-8f7efd41b2186a84 (createBarPlot action card)
// DOCS: doc-f1f94dec7d5389ca (docs/recipes/composition.md Composition Recipe)
import { chart, hconcat } from "ggaction";
import data from "./data.json";

export function buildChart() {
  const child0 = chart()
    .createCanvas({ width: 161, height: 443, margin: { top: 119, right: 11, bottom: 124, left: 90 } })
    .createData({ values: data })
    .filterData({ id: "panel0", field: "all_spending", oneOf: [500000] })
    .applyTextMetrics({ profile: { schemaVersion: 1, id: "vl_1393-panel-0-original-font-widths", measurements: [ { text: "0", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 5.5625 }, { text: "50", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 11.125 }, { text: "100", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 16.6875 }, { text: "150", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 16.6875 }, { text: "200", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 16.6875 }, { text: "# Candidates", fontFamily: "sans-serif", fontSize: 11, fontWeight: 700, fontStyle: "normal", width: 68.46875 }, { text: "500000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 33.375 }, { text: "Democrat", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 43.359375 }, { text: "Republican", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 50.046875 }, { text: "_AllOthers", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 46.6875 }, { text: "candidate_party", fontFamily: "sans-serif", fontSize: 11, fontWeight: 700, fontStyle: "normal", width: 84.375 }, { text: "Distribution of Spending By Party", fontFamily: "sans-serif", fontSize: 13, fontWeight: 700, fontStyle: "normal", width: 208.015625 } ] } })
    .createBarPlot({
      x: { field: "candidate_party", fieldType: "nominal", scale: { type: "band", domain: ["Democrat", "Republican", "_AllOthers"], paddingInner: 0.1, paddingOuter: 0.05 } },
      y: { field: "count", fieldType: "quantitative", scale: { type: "linear", domain: [0, 220], nice: false } },
      guides: false
    })
    .encodeColor({ field: "candidate_party", scale: { type: "ordinal", domain: ["Democrat", "Republican", "_AllOthers"], range: ["#4c78a8", "#f58518", "#e45756"] }, layout: "overlay" })
    .encodeBarWidth({ pixels: 18 })
    .editBarMark({ opacity: 1, stroke: false })
    .createXAxis({
      title: false,
      line: { color: "#888", lineWidth: 1 },
      ticksAndLabels: { values: ["Democrat", "Republican", "_AllOthers"], ticks: { length: 5, color: "#888", lineWidth: 1 }, labels: { color: "black", fontSize: 10, fontFamily: "sans-serif", rotation: { value: -90, unit: "degrees" }, offset: 8.5, alongOffset: 0.390625 } }
    })
    .createYAxis({
      line: { color: "#888", lineWidth: 1 },
      ticksAndLabels: { values: [0, 50, 100, 150, 200], ticks: { length: 5, color: "#888", lineWidth: 1 }, labels: { color: "black", fontSize: 10, fontFamily: "sans-serif", offset: 7.5, alongOffset: 0.890625 } },
      title: { text: "# Candidates", color: "black", fontSize: 11, fontWeight: 700, fontFamily: "sans-serif", offset: 33.1064453125, rotation: { value: -90, unit: "degrees" } }
    })
    .createGrid({ horizontal: { scale: "y", values: [0, 50, 100, 150, 200], color: "#ddd", lineWidth: 1 } })
    .editCanvas({ background: "white", plotBorder: { color: "#ddd", lineWidth: 1 } })
    .createSummaryData({ id: "panel0-summary", groupBy: ["all_spending"], aggregates: [{ op: "count", as: "n" }] })
    .createAnnotation({ text: "candidate_party", anchor: "plot-center", fontSize: 11 })
    .editTextMark({ fontWeight: 700, fill: "black" })
    .editTextMark({ dx: 0.5, dy: 168.6123046875 })
    .createTextMark({ id: "panelHeader", text: "500000", fontSize: 10 })
    .encodeX({ datum: "Republican" })
    .encodeY({ datum: 110 })
    .editTextMark({ align: "center", baseline: "middle" })
    .editTextMark({ fontWeight: 400, fill: "black" })
    .editTextMark({ dx: 0, dy: -115.609375 })
    .createTextMark({ id: "sourceGlobalHeading", text: "Distribution of Spending By Party", fontSize: 13 })
    .encodeX({ datum: "Republican" })
    .encodeY({ datum: 110 })
    .editTextMark({ align: "left", baseline: "alphabetic" })
    .editTextMark({ fontWeight: 700, fill: "black" })
    .editTextMark({ dx: -69.6845703125, dy: -159 });
  const child1 = chart()
    .createCanvas({ width: 82, height: 443, margin: { top: 119, right: 11, bottom: 124, left: 11 } })
    .createData({ values: data })
    .filterData({ id: "panel1", field: "all_spending", oneOf: [1500000] })
    .applyTextMetrics({ profile: { schemaVersion: 1, id: "vl_1393-panel-1-original-font-widths", measurements: [ { text: "1500000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 38.9375 }, { text: "Democrat", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 43.359375 }, { text: "Republican", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 50.046875 }, { text: "_AllOthers", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 46.6875 }, { text: "candidate_party", fontFamily: "sans-serif", fontSize: 11, fontWeight: 700, fontStyle: "normal", width: 84.375 } ] } })
    .createBarPlot({
      x: { field: "candidate_party", fieldType: "nominal", scale: { type: "band", domain: ["Democrat", "Republican", "_AllOthers"], paddingInner: 0.1, paddingOuter: 0.05 } },
      y: { field: "count", fieldType: "quantitative", scale: { type: "linear", domain: [0, 220], nice: false } },
      guides: false
    })
    .encodeColor({ field: "candidate_party", scale: { type: "ordinal", domain: ["Democrat", "Republican", "_AllOthers"], range: ["#4c78a8", "#f58518", "#e45756"] }, layout: "overlay" })
    .encodeBarWidth({ pixels: 18 })
    .editBarMark({ opacity: 1, stroke: false })
    .createXAxis({
      title: false,
      line: { color: "#888", lineWidth: 1 },
      ticksAndLabels: { values: ["Democrat", "Republican", "_AllOthers"], ticks: { length: 5, color: "#888", lineWidth: 1 }, labels: { color: "black", fontSize: 10, fontFamily: "sans-serif", rotation: { value: -90, unit: "degrees" }, offset: 8.5, alongOffset: 0.390625 } }
    })
    .createGrid({ horizontal: { scale: "y", values: [0, 50, 100, 150, 200], color: "#ddd", lineWidth: 1 } })
    .editCanvas({ background: "transparent", plotBorder: { color: "#ddd", lineWidth: 1 } })
    .createSummaryData({ id: "panel1-summary", groupBy: ["all_spending"], aggregates: [{ op: "count", as: "n" }] })
    .createAnnotation({ text: "candidate_party", anchor: "plot-center", fontSize: 11 })
    .editTextMark({ fontWeight: 700, fill: "black" })
    .editTextMark({ dx: 0.5, dy: 168.6123046875 })
    .createTextMark({ id: "panelHeader", text: "1500000", fontSize: 10 })
    .encodeX({ datum: "Republican" })
    .encodeY({ datum: 110 })
    .editTextMark({ align: "center", baseline: "middle" })
    .editTextMark({ fontWeight: 400, fill: "black" })
    .editTextMark({ dx: 0, dy: -115.609375 });
  const child2 = chart()
    .createCanvas({ width: 82, height: 443, margin: { top: 119, right: 11, bottom: 124, left: 11 } })
    .createData({ values: data })
    .filterData({ id: "panel2", field: "all_spending", oneOf: [2500000] })
    .applyTextMetrics({ profile: { schemaVersion: 1, id: "vl_1393-panel-2-original-font-widths", measurements: [ { text: "2500000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 38.9375 }, { text: "Democrat", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 43.359375 }, { text: "Republican", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 50.046875 }, { text: "_AllOthers", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 46.6875 }, { text: "candidate_party", fontFamily: "sans-serif", fontSize: 11, fontWeight: 700, fontStyle: "normal", width: 84.375 } ] } })
    .createBarPlot({
      x: { field: "candidate_party", fieldType: "nominal", scale: { type: "band", domain: ["Democrat", "Republican", "_AllOthers"], paddingInner: 0.1, paddingOuter: 0.05 } },
      y: { field: "count", fieldType: "quantitative", scale: { type: "linear", domain: [0, 220], nice: false } },
      guides: false
    })
    .encodeColor({ field: "candidate_party", scale: { type: "ordinal", domain: ["Democrat", "Republican", "_AllOthers"], range: ["#4c78a8", "#f58518", "#e45756"] }, layout: "overlay" })
    .encodeBarWidth({ pixels: 18 })
    .editBarMark({ opacity: 1, stroke: false })
    .createXAxis({
      title: false,
      line: { color: "#888", lineWidth: 1 },
      ticksAndLabels: { values: ["Democrat", "Republican", "_AllOthers"], ticks: { length: 5, color: "#888", lineWidth: 1 }, labels: { color: "black", fontSize: 10, fontFamily: "sans-serif", rotation: { value: -90, unit: "degrees" }, offset: 8.5, alongOffset: 0.390625 } }
    })
    .createGrid({ horizontal: { scale: "y", values: [0, 50, 100, 150, 200], color: "#ddd", lineWidth: 1 } })
    .editCanvas({ background: "transparent", plotBorder: { color: "#ddd", lineWidth: 1 } })
    .createSummaryData({ id: "panel2-summary", groupBy: ["all_spending"], aggregates: [{ op: "count", as: "n" }] })
    .createAnnotation({ text: "candidate_party", anchor: "plot-center", fontSize: 11 })
    .editTextMark({ fontWeight: 700, fill: "black" })
    .editTextMark({ dx: 0.5, dy: 168.6123046875 })
    .createTextMark({ id: "panelHeader", text: "2500000", fontSize: 10 })
    .encodeX({ datum: "Republican" })
    .encodeY({ datum: 110 })
    .editTextMark({ align: "center", baseline: "middle" })
    .editTextMark({ fontWeight: 400, fill: "black" })
    .editTextMark({ dx: 0, dy: -115.609375 });
  const child3 = chart()
    .createCanvas({ width: 82, height: 443, margin: { top: 119, right: 11, bottom: 124, left: 11 } })
    .createData({ values: data })
    .filterData({ id: "panel3", field: "all_spending", oneOf: [3500000] })
    .applyTextMetrics({ profile: { schemaVersion: 1, id: "vl_1393-panel-3-original-font-widths", measurements: [ { text: "3500000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 38.9375 }, { text: "Democrat", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 43.359375 }, { text: "Republican", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 50.046875 }, { text: "_AllOthers", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 46.6875 }, { text: "candidate_party", fontFamily: "sans-serif", fontSize: 11, fontWeight: 700, fontStyle: "normal", width: 84.375 } ] } })
    .createBarPlot({
      x: { field: "candidate_party", fieldType: "nominal", scale: { type: "band", domain: ["Democrat", "Republican", "_AllOthers"], paddingInner: 0.1, paddingOuter: 0.05 } },
      y: { field: "count", fieldType: "quantitative", scale: { type: "linear", domain: [0, 220], nice: false } },
      guides: false
    })
    .encodeColor({ field: "candidate_party", scale: { type: "ordinal", domain: ["Democrat", "Republican", "_AllOthers"], range: ["#4c78a8", "#f58518", "#e45756"] }, layout: "overlay" })
    .encodeBarWidth({ pixels: 18 })
    .editBarMark({ opacity: 1, stroke: false })
    .createXAxis({
      title: false,
      line: { color: "#888", lineWidth: 1 },
      ticksAndLabels: { values: ["Democrat", "Republican", "_AllOthers"], ticks: { length: 5, color: "#888", lineWidth: 1 }, labels: { color: "black", fontSize: 10, fontFamily: "sans-serif", rotation: { value: -90, unit: "degrees" }, offset: 8.5, alongOffset: 0.390625 } }
    })
    .createGrid({ horizontal: { scale: "y", values: [0, 50, 100, 150, 200], color: "#ddd", lineWidth: 1 } })
    .editCanvas({ background: "transparent", plotBorder: { color: "#ddd", lineWidth: 1 } })
    .createSummaryData({ id: "panel3-summary", groupBy: ["all_spending"], aggregates: [{ op: "count", as: "n" }] })
    .createAnnotation({ text: "candidate_party", anchor: "plot-center", fontSize: 11 })
    .editTextMark({ fontWeight: 700, fill: "black" })
    .editTextMark({ dx: 0.5, dy: 168.6123046875 })
    .createTextMark({ id: "panelHeader", text: "3500000", fontSize: 10 })
    .encodeX({ datum: "Republican" })
    .encodeY({ datum: 110 })
    .editTextMark({ align: "center", baseline: "middle" })
    .editTextMark({ fontWeight: 400, fill: "black" })
    .editTextMark({ dx: 0, dy: -115.609375 });
  const child4 = chart()
    .createCanvas({ width: 82, height: 443, margin: { top: 119, right: 11, bottom: 124, left: 11 } })
    .createData({ values: data })
    .filterData({ id: "panel4", field: "all_spending", oneOf: [4500000] })
    .applyTextMetrics({ profile: { schemaVersion: 1, id: "vl_1393-panel-4-original-font-widths", measurements: [ { text: "all_spending", fontFamily: "sans-serif", fontSize: 11, fontWeight: 700, fontStyle: "normal", width: 67.25 }, { text: "4500000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 38.9375 }, { text: "Democrat", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 43.359375 }, { text: "Republican", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 50.046875 }, { text: "_AllOthers", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 46.6875 }, { text: "candidate_party", fontFamily: "sans-serif", fontSize: 11, fontWeight: 700, fontStyle: "normal", width: 84.375 } ] } })
    .createBarPlot({
      x: { field: "candidate_party", fieldType: "nominal", scale: { type: "band", domain: ["Democrat", "Republican", "_AllOthers"], paddingInner: 0.1, paddingOuter: 0.05 } },
      y: { field: "count", fieldType: "quantitative", scale: { type: "linear", domain: [0, 220], nice: false } },
      guides: false
    })
    .encodeColor({ field: "candidate_party", scale: { type: "ordinal", domain: ["Democrat", "Republican", "_AllOthers"], range: ["#4c78a8", "#f58518", "#e45756"] }, layout: "overlay" })
    .encodeBarWidth({ pixels: 18 })
    .editBarMark({ opacity: 1, stroke: false })
    .createXAxis({
      title: false,
      line: { color: "#888", lineWidth: 1 },
      ticksAndLabels: { values: ["Democrat", "Republican", "_AllOthers"], ticks: { length: 5, color: "#888", lineWidth: 1 }, labels: { color: "black", fontSize: 10, fontFamily: "sans-serif", rotation: { value: -90, unit: "degrees" }, offset: 8.5, alongOffset: 0.390625 } }
    })
    .createGrid({ horizontal: { scale: "y", values: [0, 50, 100, 150, 200], color: "#ddd", lineWidth: 1 } })
    .editCanvas({ background: "transparent", plotBorder: { color: "#ddd", lineWidth: 1 } })
    .createSummaryData({ id: "panel4-summary", groupBy: ["all_spending"], aggregates: [{ op: "count", as: "n" }] })
    .createAnnotation({ text: "candidate_party", anchor: "plot-center", fontSize: 11 })
    .editTextMark({ fontWeight: 700, fill: "black" })
    .editTextMark({ dx: 0.5, dy: 168.6123046875 })
    .createTextMark({ id: "panelHeader", text: "4500000", fontSize: 10 })
    .encodeX({ datum: "Republican" })
    .encodeY({ datum: 110 })
    .editTextMark({ align: "center", baseline: "middle" })
    .editTextMark({ fontWeight: 400, fill: "black" })
    .editTextMark({ dx: 0, dy: -115.609375 })
    .createTextMark({ id: "facetCaption", text: "all_spending", fontSize: 11 })
    .encodeX({ datum: "Republican" })
    .encodeY({ datum: 110 })
    .editTextMark({ align: "center", baseline: "middle" })
    .editTextMark({ fontWeight: 700, fill: "black" })
    .editTextMark({ dx: 41, dy: -145.921875 });
  const child5 = chart()
    .createCanvas({ width: 82, height: 443, margin: { top: 119, right: 11, bottom: 124, left: 11 } })
    .createData({ values: data })
    .filterData({ id: "panel5", field: "all_spending", oneOf: [5500000] })
    .applyTextMetrics({ profile: { schemaVersion: 1, id: "vl_1393-panel-5-original-font-widths", measurements: [{ text: "5500000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 38.9375 }, { text: "Democrat", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 43.359375 }, { text: "Republican", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 50.046875 }, { text: "_AllOthers", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 46.6875 }, { text: "candidate_party", fontFamily: "sans-serif", fontSize: 11, fontWeight: 700, fontStyle: "normal", width: 84.375 }] } })
    .createBarPlot({
      x: { field: "candidate_party", fieldType: "nominal", scale: { type: "band", domain: ["Democrat", "Republican", "_AllOthers"], paddingInner: 0.1, paddingOuter: 0.05 } },
      y: { field: "count", fieldType: "quantitative", scale: { type: "linear", domain: [0, 220], nice: false } },
      guides: false
    })
    .encodeColor({ field: "candidate_party", scale: { type: "ordinal", domain: ["Democrat", "Republican", "_AllOthers"], range: ["#4c78a8", "#f58518", "#e45756"] }, layout: "overlay" })
    .encodeBarWidth({ pixels: 18 })
    .editBarMark({ opacity: 1, stroke: false })
    .createXAxis({
      title: false,
      line: { color: "#888", lineWidth: 1 },
      ticksAndLabels: { values: ["Democrat", "Republican", "_AllOthers"], ticks: { length: 5, color: "#888", lineWidth: 1 }, labels: { color: "black", fontSize: 10, fontFamily: "sans-serif", rotation: { value: -90, unit: "degrees" }, offset: 8.5, alongOffset: 0.390625 } }
    })
    .createGrid({ horizontal: { scale: "y", values: [0, 50, 100, 150, 200], color: "#ddd", lineWidth: 1 } })
    .editCanvas({ background: "transparent", plotBorder: { color: "#ddd", lineWidth: 1 } })
    .createSummaryData({ id: "panel5-summary", groupBy: ["all_spending"], aggregates: [{ op: "count", as: "n" }] })
    .createAnnotation({ text: "candidate_party", anchor: "plot-center", fontSize: 11 })
    .editTextMark({ fontWeight: 700, fill: "black" })
    .editTextMark({ dx: 0.5, dy: 168.6123046875 })
    .createTextMark({ id: "panelHeader", text: "5500000", fontSize: 10 })
    .encodeX({ datum: "Republican" })
    .encodeY({ datum: 110 })
    .editTextMark({ align: "center", baseline: "middle" })
    .editTextMark({ fontWeight: 400, fill: "black" })
    .editTextMark({ dx: 0, dy: -115.609375 });

  const child6 = chart()
    .createCanvas({ width: 82, height: 443, margin: { top: 119, right: 11, bottom: 124, left: 11 } })
    .createData({ values: data })
    .filterData({ id: "panel6", field: "all_spending", oneOf: [6500000] })
    .applyTextMetrics({ profile: { schemaVersion: 1, id: "vl_1393-panel-6-original-font-widths", measurements: [{ text: "6500000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 38.9375 }, { text: "Democrat", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 43.359375 }, { text: "Republican", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 50.046875 }, { text: "_AllOthers", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 46.6875 }, { text: "candidate_party", fontFamily: "sans-serif", fontSize: 11, fontWeight: 700, fontStyle: "normal", width: 84.375 }] } })
    .createBarPlot({
      x: { field: "candidate_party", fieldType: "nominal", scale: { type: "band", domain: ["Democrat", "Republican", "_AllOthers"], paddingInner: 0.1, paddingOuter: 0.05 } },
      y: { field: "count", fieldType: "quantitative", scale: { type: "linear", domain: [0, 220], nice: false } },
      guides: false
    })
    .encodeColor({ field: "candidate_party", scale: { type: "ordinal", domain: ["Democrat", "Republican", "_AllOthers"], range: ["#4c78a8", "#f58518", "#e45756"] }, layout: "overlay" })
    .encodeBarWidth({ pixels: 18 })
    .editBarMark({ opacity: 1, stroke: false })
    .createXAxis({
      title: false,
      line: { color: "#888", lineWidth: 1 },
      ticksAndLabels: { values: ["Democrat", "Republican", "_AllOthers"], ticks: { length: 5, color: "#888", lineWidth: 1 }, labels: { color: "black", fontSize: 10, fontFamily: "sans-serif", rotation: { value: -90, unit: "degrees" }, offset: 8.5, alongOffset: 0.390625 } }
    })
    .createGrid({ horizontal: { scale: "y", values: [0, 50, 100, 150, 200], color: "#ddd", lineWidth: 1 } })
    .editCanvas({ background: "transparent", plotBorder: { color: "#ddd", lineWidth: 1 } })
    .createSummaryData({ id: "panel6-summary", groupBy: ["all_spending"], aggregates: [{ op: "count", as: "n" }] })
    .createAnnotation({ text: "candidate_party", anchor: "plot-center", fontSize: 11 })
    .editTextMark({ fontWeight: 700, fill: "black" })
    .editTextMark({ dx: 0.5, dy: 168.6123046875 })
    .createTextMark({ id: "panelHeader", text: "6500000", fontSize: 10 })
    .encodeX({ datum: "Republican" })
    .encodeY({ datum: 110 })
    .editTextMark({ align: "center", baseline: "middle" })
    .editTextMark({ fontWeight: 400, fill: "black" })
    .editTextMark({ dx: 0, dy: -115.609375 });

  const child7 = chart()
    .createCanvas({ width: 82, height: 443, margin: { top: 119, right: 11, bottom: 124, left: 11 } })
    .createData({ values: data })
    .filterData({ id: "panel7", field: "all_spending", oneOf: [7500000] })
    .applyTextMetrics({ profile: { schemaVersion: 1, id: "vl_1393-panel-7-original-font-widths", measurements: [{ text: "7500000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 38.9375 }, { text: "Democrat", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 43.359375 }, { text: "Republican", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 50.046875 }, { text: "_AllOthers", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 46.6875 }, { text: "candidate_party", fontFamily: "sans-serif", fontSize: 11, fontWeight: 700, fontStyle: "normal", width: 84.375 }] } })
    .createBarPlot({
      x: { field: "candidate_party", fieldType: "nominal", scale: { type: "band", domain: ["Democrat", "Republican", "_AllOthers"], paddingInner: 0.1, paddingOuter: 0.05 } },
      y: { field: "count", fieldType: "quantitative", scale: { type: "linear", domain: [0, 220], nice: false } },
      guides: false
    })
    .encodeColor({ field: "candidate_party", scale: { type: "ordinal", domain: ["Democrat", "Republican", "_AllOthers"], range: ["#4c78a8", "#f58518", "#e45756"] }, layout: "overlay" })
    .encodeBarWidth({ pixels: 18 })
    .editBarMark({ opacity: 1, stroke: false })
    .createXAxis({
      title: false,
      line: { color: "#888", lineWidth: 1 },
      ticksAndLabels: { values: ["Democrat", "Republican", "_AllOthers"], ticks: { length: 5, color: "#888", lineWidth: 1 }, labels: { color: "black", fontSize: 10, fontFamily: "sans-serif", rotation: { value: -90, unit: "degrees" }, offset: 8.5, alongOffset: 0.390625 } }
    })
    .createGrid({ horizontal: { scale: "y", values: [0, 50, 100, 150, 200], color: "#ddd", lineWidth: 1 } })
    .editCanvas({ background: "transparent", plotBorder: { color: "#ddd", lineWidth: 1 } })
    .createSummaryData({ id: "panel7-summary", groupBy: ["all_spending"], aggregates: [{ op: "count", as: "n" }] })
    .createAnnotation({ text: "candidate_party", anchor: "plot-center", fontSize: 11 })
    .editTextMark({ fontWeight: 700, fill: "black" })
    .editTextMark({ dx: 0.5, dy: 168.6123046875 })
    .createTextMark({ id: "panelHeader", text: "7500000", fontSize: 10 })
    .encodeX({ datum: "Republican" })
    .encodeY({ datum: 110 })
    .editTextMark({ align: "center", baseline: "middle" })
    .editTextMark({ fontWeight: 400, fill: "black" })
    .editTextMark({ dx: 0, dy: -115.609375 });

  const child8 = chart()
    .createCanvas({ width: 82, height: 443, margin: { top: 119, right: 11, bottom: 124, left: 11 } })
    .createData({ values: data })
    .filterData({ id: "panel8", field: "all_spending", oneOf: [8500000] })
    .applyTextMetrics({ profile: { schemaVersion: 1, id: "vl_1393-panel-8-original-font-widths", measurements: [{ text: "8500000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 38.9375 }, { text: "Democrat", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 43.359375 }, { text: "Republican", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 50.046875 }, { text: "_AllOthers", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 46.6875 }, { text: "candidate_party", fontFamily: "sans-serif", fontSize: 11, fontWeight: 700, fontStyle: "normal", width: 84.375 }] } })
    .createBarPlot({
      x: { field: "candidate_party", fieldType: "nominal", scale: { type: "band", domain: ["Democrat", "Republican", "_AllOthers"], paddingInner: 0.1, paddingOuter: 0.05 } },
      y: { field: "count", fieldType: "quantitative", scale: { type: "linear", domain: [0, 220], nice: false } },
      guides: false
    })
    .encodeColor({ field: "candidate_party", scale: { type: "ordinal", domain: ["Democrat", "Republican", "_AllOthers"], range: ["#4c78a8", "#f58518", "#e45756"] }, layout: "overlay" })
    .encodeBarWidth({ pixels: 18 })
    .editBarMark({ opacity: 1, stroke: false })
    .createXAxis({
      title: false,
      line: { color: "#888", lineWidth: 1 },
      ticksAndLabels: { values: ["Democrat", "Republican", "_AllOthers"], ticks: { length: 5, color: "#888", lineWidth: 1 }, labels: { color: "black", fontSize: 10, fontFamily: "sans-serif", rotation: { value: -90, unit: "degrees" }, offset: 8.5, alongOffset: 0.390625 } }
    })
    .createGrid({ horizontal: { scale: "y", values: [0, 50, 100, 150, 200], color: "#ddd", lineWidth: 1 } })
    .editCanvas({ background: "transparent", plotBorder: { color: "#ddd", lineWidth: 1 } })
    .createSummaryData({ id: "panel8-summary", groupBy: ["all_spending"], aggregates: [{ op: "count", as: "n" }] })
    .createAnnotation({ text: "candidate_party", anchor: "plot-center", fontSize: 11 })
    .editTextMark({ fontWeight: 700, fill: "black" })
    .editTextMark({ dx: 0.5, dy: 168.6123046875 })
    .createTextMark({ id: "panelHeader", text: "8500000", fontSize: 10 })
    .encodeX({ datum: "Republican" })
    .encodeY({ datum: 110 })
    .editTextMark({ align: "center", baseline: "middle" })
    .editTextMark({ fontWeight: 400, fill: "black" })
    .editTextMark({ dx: 0, dy: -115.609375 });

  const child9 = chart()
    .createCanvas({ width: 237, height: 443, margin: { top: 119, right: 166, bottom: 124, left: 11 } })
    .createData({ values: data })
    .filterData({ id: "panel9", field: "all_spending", oneOf: [9500000] })
    .applyTextMetrics({ profile: { schemaVersion: 1, id: "vl_1393-panel-9-original-font-widths", measurements: [{ text: "9500000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 38.9375 }, { text: "Democrat", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 43.359375 }, { text: "Republican", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 50.046875 }, { text: "_AllOthers", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 46.6875 }, { text: "candidate_party", fontFamily: "sans-serif", fontSize: 11, fontWeight: 700, fontStyle: "normal", width: 84.375 }] } })
    .createBarPlot({
      x: { field: "candidate_party", fieldType: "nominal", scale: { type: "band", domain: ["Democrat", "Republican", "_AllOthers"], paddingInner: 0.1, paddingOuter: 0.05 } },
      y: { field: "count", fieldType: "quantitative", scale: { type: "linear", domain: [0, 220], nice: false } },
      guides: false
    })
    .encodeColor({ field: "candidate_party", scale: { type: "ordinal", domain: ["Democrat", "Republican", "_AllOthers"], range: ["#4c78a8", "#f58518", "#e45756"] }, layout: "overlay" })
    .encodeBarWidth({ pixels: 18 })
    .editBarMark({ opacity: 1, stroke: false })
    .createXAxis({
      title: false,
      line: { color: "#888", lineWidth: 1 },
      ticksAndLabels: { values: ["Democrat", "Republican", "_AllOthers"], ticks: { length: 5, color: "#888", lineWidth: 1 }, labels: { color: "black", fontSize: 10, fontFamily: "sans-serif", rotation: { value: -90, unit: "degrees" }, offset: 8.5, alongOffset: 0.390625 } }
    })
    .createGrid({ horizontal: { scale: "y", values: [0, 50, 100, 150, 200], color: "#ddd", lineWidth: 1 } })
    .editCanvas({ background: "transparent", plotBorder: { color: "#ddd", lineWidth: 1 } })
    .createLegend({ target: "barPlot", channels: ["color"], title: "candidate_party" })
    .editLegend({ titleStyle: { color: "black", fontSize: 11, fontWeight: 700 }, labels: { color: "black", fontSize: 10 } })
    .editLegend({ symbol: { width: 10, height: 10, stroke: "none", strokeWidth: 0 } })
    .createSummaryData({ id: "panel9-summary", groupBy: ["all_spending"], aggregates: [{ op: "count", as: "n" }] })
    .createAnnotation({ text: "candidate_party", anchor: "plot-center", fontSize: 11 })
    .editTextMark({ fontWeight: 700, fill: "black" })
    .editTextMark({ dx: 0.5, dy: 168.6123046875 })
    .createTextMark({ id: "panelHeader", text: "9500000", fontSize: 10 })
    .encodeX({ datum: "Republican" })
    .encodeY({ datum: 110 })
    .editTextMark({ align: "center", baseline: "middle" })
    .editTextMark({ fontWeight: 400, fill: "black" })
    .editTextMark({ dx: 0, dy: -115.609375 });

  return hconcat({
    programs: [
      { id: "panel0", program: child0 },
      { id: "panel1", program: child1 },
      { id: "panel2", program: child2 },
      { id: "panel3", program: child3 },
      { id: "panel4", program: child4 },
      { id: "panel5", program: child5 },
      { id: "panel6", program: child6 },
      { id: "panel7", program: child7 },
      { id: "panel8", program: child8 },
      { id: "panel9", program: child9 }
    ],
    gap: 0,
    align: "start"
  });
}