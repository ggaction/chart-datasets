import { chart, hconcat } from "ggaction";
import data from "./data.json";

export function buildChart() {

  // DOCS: doc-f1f94dec7d5389ca
  const child0 = chart()
    // DOCS: doc-f1f94dec7d5389ca
    .createCanvas({ width: 156, height: 443, margin: { top: 119, right: 11, bottom: 124, left: 85 } })
    .editCanvas({ plotBorder: { color: "#ddd", lineWidth: 1 } })
    .applyTextMetrics({ profile: { schemaVersion: 1, id: "vl_1394-panel-0-original-font-widths", measurements: [{ text: "0", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 5.5625 }, { text: "20", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 11.125 }, { text: "40", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 11.125 }, { text: "60", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 11.125 }, { text: "80", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 11.125 }, { text: "# Candidates", fontFamily: "sans-serif", fontSize: 11, fontWeight: 700, fontStyle: "normal", width: 68.46875 }, { text: "50000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 27.8125 }, { text: "Democrat", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 43.359375 }, { text: "Republican", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 50.046875 }, { text: "_AllOthers", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 46.6875 }, { text: "candidate_party", fontFamily: "sans-serif", fontSize: 11, fontWeight: 700, fontStyle: "normal", width: 84.375 }, { text: "Distribution of Spending By Party (< $1,000,000)", fontFamily: "sans-serif", fontSize: 13, fontWeight: 700, fontStyle: "normal", width: 296.546875 }] } })
    .createData({ id: "raw0", values: data })
    .filterData({ id: "facet0", field: "all_spending", oneOf: [50000] })
    // DOCS: doc-8f7efd41b2186a84
    .createBarPlot({ x: { field: "candidate_party", fieldType: "nominal" }, y: { field: "count", fieldType: "quantitative" }, guides: false })
    .editXScale({ domain: ["Democrat", "Republican", "_AllOthers"], paddingInner: 0.1, paddingOuter: 0.05 })
    .editYScale({ domain: [0, 80], nice: false })
    .encodeColor({ field: "candidate_party", layout: "overlay" })
    .editColorScale({ domain: ["Democrat", "Republican", "_AllOthers"], range: ["#4c78a8", "#f58518", "#e45756"] })
    .encodeBarWidth({ pixels: 18 })
    .editBarMark({ opacity: 1, stroke: false })
    .createXAxis({ ticksAndLabels: { values: ["Democrat", "Republican", "_AllOthers"], ticks: { length: 5 }, labels: { offset: 8.5, rotation: { value: -90, unit: "degrees" }, alongOffset: 0.390625, fontSize: 10, fontFamily: "sans-serif" } }, title: false })
    .editXAxis({ line: { color: "#888", lineWidth: 1 }, ticksAndLabels: { ticks: { color: "#888", lineWidth: 1 }, labels: { color: "black", fontWeight: "normal" } } })
    .createYAxis({ ticksAndLabels: { values: [0, 20, 40, 60, 80], ticks: { length: 5 }, labels: { offset: 7.5, alongOffset: 0.890625, fontSize: 10, fontFamily: "sans-serif" } }, title: { text: "# Candidates", offset: 27.544921875, fontSize: 11, fontFamily: "sans-serif" } })
    .editYAxis({ line: { color: "#888", lineWidth: 1 }, ticksAndLabels: { ticks: { color: "#888", lineWidth: 1 }, labels: { color: "black", fontWeight: "normal" } }, title: { color: "black", fontWeight: 700 } })
    .createGrid({ horizontal: { values: [0, 20, 40, 60, 80], color: "#ddd", lineWidth: 1 } })
    .createSummaryData({ id: "summary0", groupBy: ["all_spending"], aggregates: [{ op: "count", as: "n" }] })
    .createAnnotation({ text: "candidate_party", anchor: "plot-center", fontSize: 11 })
    .editTextMark({ align: "center", baseline: "middle" })
    .editTextMark({ dx: 0.5, dy: 168.6123046875 })
    .editTextMark({ fontWeight: 700, fill: "black" })
    .createTextMark({ id: "panelHeader", text: "50000", fontSize: 10 })
    .encodeX({ datum: "Republican", target: "panelHeader" })
    .encodeY({ datum: 40, target: "panelHeader" })
    .editTextMark({ target: "panelHeader", align: "center", baseline: "middle" })
    .editTextMark({ target: "panelHeader", dx: 0, dy: -115.609375 })
    .editTextMark({ target: "panelHeader", fontWeight: "normal", fill: "black" })
    .createTextMark({ id: "sourceGlobalHeading", text: "Distribution of Spending By Party (< $1,000,000)", fontSize: 13 })
    .encodeX({ datum: "Republican", target: "sourceGlobalHeading" })
    .encodeY({ datum: 40, target: "sourceGlobalHeading" })
    .editTextMark({ target: "sourceGlobalHeading", align: "left", baseline: "alphabetic" })
    .editTextMark({ target: "sourceGlobalHeading", dx: -64.123046875, dy: -159 })
    .editTextMark({ target: "sourceGlobalHeading", fontWeight: 700, fill: "black" });

  const child1 = chart()
    .createCanvas({ width: 82, height: 443, margin: { top: 119, right: 11, bottom: 124, left: 11 } })
    .editCanvas({ background: "transparent", plotBorder: { color: "#ddd", lineWidth: 1 } })
    .applyTextMetrics({ profile: { schemaVersion: 1, id: "vl_1394-panel-1-original-font-widths", measurements: [{ text: "150000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 33.375 }, { text: "Democrat", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 43.359375 }, { text: "Republican", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 50.046875 }, { text: "_AllOthers", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 46.6875 }, { text: "candidate_party", fontFamily: "sans-serif", fontSize: 11, fontWeight: 700, fontStyle: "normal", width: 84.375 }] } })
    .createData({ id: "raw1", values: data })
    .filterData({ id: "facet1", field: "all_spending", oneOf: [150000] })
    // DOCS: doc-8f7efd41b2186a84
    .createBarPlot({ x: { field: "candidate_party", fieldType: "nominal" }, y: { field: "count", fieldType: "quantitative" }, guides: false })
    .editXScale({ domain: ["Democrat", "Republican", "_AllOthers"], paddingInner: 0.1, paddingOuter: 0.05 })
    .editYScale({ domain: [0, 80], nice: false })
    .encodeColor({ field: "candidate_party", layout: "overlay" })
    .editColorScale({ domain: ["Democrat", "Republican", "_AllOthers"], range: ["#4c78a8", "#f58518", "#e45756"] })
    .encodeBarWidth({ pixels: 18 })
    .editBarMark({ opacity: 1, stroke: false })
    .createXAxis({ ticksAndLabels: { values: ["Democrat", "Republican", "_AllOthers"], ticks: { length: 5 }, labels: { offset: 8.5, rotation: { value: -90, unit: "degrees" }, alongOffset: 0.390625, fontSize: 10, fontFamily: "sans-serif" } }, title: false })
    .editXAxis({ line: { color: "#888", lineWidth: 1 }, ticksAndLabels: { ticks: { color: "#888", lineWidth: 1 }, labels: { color: "black", fontWeight: "normal" } } })
    .createGrid({ horizontal: { values: [0, 20, 40, 60, 80], color: "#ddd", lineWidth: 1 } })
    .createSummaryData({ id: "summary1", groupBy: ["all_spending"], aggregates: [{ op: "count", as: "n" }] })
    .createAnnotation({ text: "candidate_party", anchor: "plot-center", fontSize: 11 })
    .editTextMark({ align: "center", baseline: "middle" })
    .editTextMark({ dx: 0.5, dy: 168.6123046875 })
    .editTextMark({ fontWeight: 700, fill: "black" })
    .createTextMark({ id: "panelHeader", text: "150000", fontSize: 10 })
    .encodeX({ datum: "Republican", target: "panelHeader" })
    .encodeY({ datum: 40, target: "panelHeader" })
    .editTextMark({ target: "panelHeader", align: "center", baseline: "middle" })
    .editTextMark({ target: "panelHeader", dx: 0, dy: -115.609375 })
    .editTextMark({ target: "panelHeader", fontWeight: "normal", fill: "black" });

  const child2 = chart()
    .createCanvas({ width: 82, height: 443, margin: { top: 119, right: 11, bottom: 124, left: 11 } })
    .editCanvas({ background: "transparent", plotBorder: { color: "#ddd", lineWidth: 1 } })
    .applyTextMetrics({ profile: { schemaVersion: 1, id: "vl_1394-panel-2-original-font-widths", measurements: [{ text: "250000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 33.375 }, { text: "Democrat", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 43.359375 }, { text: "Republican", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 50.046875 }, { text: "_AllOthers", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 46.6875 }, { text: "candidate_party", fontFamily: "sans-serif", fontSize: 11, fontWeight: 700, fontStyle: "normal", width: 84.375 }] } })
    .createData({ id: "raw2", values: data })
    .filterData({ id: "facet2", field: "all_spending", oneOf: [250000] })
    // DOCS: doc-8f7efd41b2186a84
    .createBarPlot({ x: { field: "candidate_party", fieldType: "nominal" }, y: { field: "count", fieldType: "quantitative" }, guides: false })
    .editXScale({ domain: ["Democrat", "Republican", "_AllOthers"], paddingInner: 0.1, paddingOuter: 0.05 })
    .editYScale({ domain: [0, 80], nice: false })
    .encodeColor({ field: "candidate_party", layout: "overlay" })
    .editColorScale({ domain: ["Democrat", "Republican", "_AllOthers"], range: ["#4c78a8", "#f58518", "#e45756"] })
    .encodeBarWidth({ pixels: 18 })
    .editBarMark({ opacity: 1, stroke: false })
    .createXAxis({ ticksAndLabels: { values: ["Democrat", "Republican", "_AllOthers"], ticks: { length: 5 }, labels: { offset: 8.5, rotation: { value: -90, unit: "degrees" }, alongOffset: 0.390625, fontSize: 10, fontFamily: "sans-serif" } }, title: false })
    .editXAxis({ line: { color: "#888", lineWidth: 1 }, ticksAndLabels: { ticks: { color: "#888", lineWidth: 1 }, labels: { color: "black", fontWeight: "normal" } } })
    .createGrid({ horizontal: { values: [0, 20, 40, 60, 80], color: "#ddd", lineWidth: 1 } })
    .createSummaryData({ id: "summary2", groupBy: ["all_spending"], aggregates: [{ op: "count", as: "n" }] })
    .createAnnotation({ text: "candidate_party", anchor: "plot-center", fontSize: 11 })
    .editTextMark({ align: "center", baseline: "middle" })
    .editTextMark({ dx: 0.5, dy: 168.6123046875 })
    .editTextMark({ fontWeight: 700, fill: "black" })
    .createTextMark({ id: "panelHeader", text: "250000", fontSize: 10 })
    .encodeX({ datum: "Republican", target: "panelHeader" })
    .encodeY({ datum: 40, target: "panelHeader" })
    .editTextMark({ target: "panelHeader", align: "center", baseline: "middle" })
    .editTextMark({ target: "panelHeader", dx: 0, dy: -115.609375 })
    .editTextMark({ target: "panelHeader", fontWeight: "normal", fill: "black" });

  const child3 = chart()
    .createCanvas({ width: 82, height: 443, margin: { top: 119, right: 11, bottom: 124, left: 11 } })
    .editCanvas({ background: "transparent", plotBorder: { color: "#ddd", lineWidth: 1 } })
    .applyTextMetrics({ profile: { schemaVersion: 1, id: "vl_1394-panel-3-original-font-widths", measurements: [{ text: "350000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 33.375 }, { text: "Democrat", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 43.359375 }, { text: "Republican", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 50.046875 }, { text: "_AllOthers", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 46.6875 }, { text: "candidate_party", fontFamily: "sans-serif", fontSize: 11, fontWeight: 700, fontStyle: "normal", width: 84.375 }] } })
    .createData({ id: "raw3", values: data })
    .filterData({ id: "facet3", field: "all_spending", oneOf: [350000] })
    // DOCS: doc-8f7efd41b2186a84
    .createBarPlot({ x: { field: "candidate_party", fieldType: "nominal" }, y: { field: "count", fieldType: "quantitative" }, guides: false })
    .editXScale({ domain: ["Democrat", "Republican", "_AllOthers"], paddingInner: 0.1, paddingOuter: 0.05 })
    .editYScale({ domain: [0, 80], nice: false })
    .encodeColor({ field: "candidate_party", layout: "overlay" })
    .editColorScale({ domain: ["Democrat", "Republican", "_AllOthers"], range: ["#4c78a8", "#f58518", "#e45756"] })
    .encodeBarWidth({ pixels: 18 })
    .editBarMark({ opacity: 1, stroke: false })
    .createXAxis({ ticksAndLabels: { values: ["Democrat", "Republican", "_AllOthers"], ticks: { length: 5 }, labels: { offset: 8.5, rotation: { value: -90, unit: "degrees" }, alongOffset: 0.390625, fontSize: 10, fontFamily: "sans-serif" } }, title: false })
    .editXAxis({ line: { color: "#888", lineWidth: 1 }, ticksAndLabels: { ticks: { color: "#888", lineWidth: 1 }, labels: { color: "black", fontWeight: "normal" } } })
    .createGrid({ horizontal: { values: [0, 20, 40, 60, 80], color: "#ddd", lineWidth: 1 } })
    .createSummaryData({ id: "summary3", groupBy: ["all_spending"], aggregates: [{ op: "count", as: "n" }] })
    .createAnnotation({ text: "candidate_party", anchor: "plot-center", fontSize: 11 })
    .editTextMark({ align: "center", baseline: "middle" })
    .editTextMark({ dx: 0.5, dy: 168.6123046875 })
    .editTextMark({ fontWeight: 700, fill: "black" })
    .createTextMark({ id: "panelHeader", text: "350000", fontSize: 10 })
    .encodeX({ datum: "Republican", target: "panelHeader" })
    .encodeY({ datum: 40, target: "panelHeader" })
    .editTextMark({ target: "panelHeader", align: "center", baseline: "middle" })
    .editTextMark({ target: "panelHeader", dx: 0, dy: -115.609375 })
    .editTextMark({ target: "panelHeader", fontWeight: "normal", fill: "black" });

  const child4 = chart()
    .createCanvas({ width: 82, height: 443, margin: { top: 119, right: 11, bottom: 124, left: 11 } })
    .editCanvas({ background: "transparent", plotBorder: { color: "#ddd", lineWidth: 1 } })
    .applyTextMetrics({ profile: { schemaVersion: 1, id: "vl_1394-panel-4-original-font-widths", measurements: [{ text: "all_spending", fontFamily: "sans-serif", fontSize: 11, fontWeight: 700, fontStyle: "normal", width: 67.25 }, { text: "450000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 33.375 }, { text: "Democrat", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 43.359375 }, { text: "Republican", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 50.046875 }, { text: "_AllOthers", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 46.6875 }, { text: "candidate_party", fontFamily: "sans-serif", fontSize: 11, fontWeight: 700, fontStyle: "normal", width: 84.375 }] } })
    .createData({ id: "raw4", values: data })
    .filterData({ id: "facet4", field: "all_spending", oneOf: [450000] })
    // DOCS: doc-8f7efd41b2186a84
    .createBarPlot({ x: { field: "candidate_party", fieldType: "nominal" }, y: { field: "count", fieldType: "quantitative" }, guides: false })
    .editXScale({ domain: ["Democrat", "Republican", "_AllOthers"], paddingInner: 0.1, paddingOuter: 0.05 })
    .editYScale({ domain: [0, 80], nice: false })
    .encodeColor({ field: "candidate_party", layout: "overlay" })
    .editColorScale({ domain: ["Democrat", "Republican", "_AllOthers"], range: ["#4c78a8", "#f58518", "#e45756"] })
    .encodeBarWidth({ pixels: 18 })
    .editBarMark({ opacity: 1, stroke: false })
    .createXAxis({ ticksAndLabels: { values: ["Democrat", "Republican", "_AllOthers"], ticks: { length: 5 }, labels: { offset: 8.5, rotation: { value: -90, unit: "degrees" }, alongOffset: 0.390625, fontSize: 10, fontFamily: "sans-serif" } }, title: false })
    .editXAxis({ line: { color: "#888", lineWidth: 1 }, ticksAndLabels: { ticks: { color: "#888", lineWidth: 1 }, labels: { color: "black", fontWeight: "normal" } } })
    .createGrid({ horizontal: { values: [0, 20, 40, 60, 80], color: "#ddd", lineWidth: 1 } })
    .createSummaryData({ id: "summary4", groupBy: ["all_spending"], aggregates: [{ op: "count", as: "n" }] })
    .createAnnotation({ text: "candidate_party", anchor: "plot-center", fontSize: 11 })
    .editTextMark({ align: "center", baseline: "middle" })
    .editTextMark({ dx: 0.5, dy: 168.6123046875 })
    .editTextMark({ fontWeight: 700, fill: "black" })
    .createTextMark({ id: "panelHeader", text: "450000", fontSize: 10 })
    .encodeX({ datum: "Republican", target: "panelHeader" })
    .encodeY({ datum: 40, target: "panelHeader" })
    .editTextMark({ target: "panelHeader", align: "center", baseline: "middle" })
    .editTextMark({ target: "panelHeader", dx: 0, dy: -115.609375 })
    .editTextMark({ target: "panelHeader", fontWeight: "normal", fill: "black" })
    .createTextMark({ id: "facetCaption", text: "all_spending", fontSize: 11 })
    .encodeX({ datum: "Republican", target: "facetCaption" })
    .encodeY({ datum: 40, target: "facetCaption" })
    .editTextMark({ target: "facetCaption", align: "center", baseline: "middle" })
    .editTextMark({ target: "facetCaption", dx: 41, dy: -145.921875 })
    .editTextMark({ target: "facetCaption", fontWeight: 700, fill: "black" });

  const child5 = chart()
    .createCanvas({ width: 82, height: 443, margin: { top: 119, right: 11, bottom: 124, left: 11 } })
    .createData({ id: "raw5", values: data })
    .filterData({ id: "facet5", field: "all_spending", oneOf: [550000] })
    // DOCS: doc-8f7efd41b2186a84
    .createBarPlot({
      x: { field: "candidate_party", fieldType: "nominal" },
      y: { field: "count", fieldType: "quantitative" },
      guides: false
    })
    .editXScale({ domain: ["Democrat", "Republican", "_AllOthers"], paddingInner: 0.1, paddingOuter: 0.05 })
    .editYScale({ domain: [0, 80], nice: false })
    .encodeColor({ field: "candidate_party", layout: "overlay" })
    .editColorScale({ domain: ["Democrat", "Republican", "_AllOthers"], range: ["#4c78a8", "#f58518", "#e45756"] })
    .encodeBarWidth({ pixels: 18 })
    .editBarMark({ opacity: 1, stroke: false })
    .applyTextMetrics({ profile: { schemaVersion: 1, id: "vl_1394-panel-5-original-font-widths", measurements: [{ text: "550000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 33.375 }, { text: "Democrat", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 43.359375 }, { text: "Republican", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 50.046875 }, { text: "_AllOthers", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 46.6875 }, { text: "candidate_party", fontFamily: "sans-serif", fontSize: 11, fontWeight: 700, fontStyle: "normal", width: 84.375 }] } })
    .createXAxis({
      title: false,
      ticksAndLabels: { values: ["Democrat", "Republican", "_AllOthers"], ticks: { length: 5 }, labels: { fontSize: 10, fontFamily: "sans-serif", rotation: { value: -90, unit: "degrees" }, offset: 8.5, alongOffset: 0.390625 } }
    })
    .editXAxis({ line: { color: "#888", lineWidth: 1 }, ticksAndLabels: { ticks: { color: "#888", lineWidth: 1 }, labels: { color: "black" } } })
    .createGrid({ horizontal: { values: [0, 20, 40, 60, 80], color: "#ddd", lineWidth: 1 } })
    .editCanvas({ background: "transparent", plotBorder: { color: "#ddd", lineWidth: 1 } })
    .createSummaryData({ id: "summary5", groupBy: ["all_spending"], aggregates: [{ op: "count", as: "n" }] })
    .createAnnotation({ text: "candidate_party", anchor: "plot-center", fontSize: 11 })
    .editTextMark({ fontWeight: 700, fill: "black" })
    .editTextMark({ dx: 0.5, dy: 168.6123046875 })
    .createTextMark({ id: "panelHeader", text: "550000", fontSize: 10 })
    .encodeX({ datum: "Republican" })
    .encodeY({ datum: 40 })
    .editTextMark({ align: "center", baseline: "middle" })
    .editTextMark({ fontWeight: 400, fill: "black" })
    .editTextMark({ dx: 0, dy: -115.609375 });

  const child6 = chart()
    .createCanvas({ width: 82, height: 443, margin: { top: 119, right: 11, bottom: 124, left: 11 } })
    .createData({ id: "raw6", values: data })
    .filterData({ id: "facet6", field: "all_spending", oneOf: [650000] })
    // DOCS: doc-8f7efd41b2186a84
    .createBarPlot({
      x: { field: "candidate_party", fieldType: "nominal" },
      y: { field: "count", fieldType: "quantitative" },
      guides: false
    })
    .editXScale({ domain: ["Democrat", "Republican", "_AllOthers"], paddingInner: 0.1, paddingOuter: 0.05 })
    .editYScale({ domain: [0, 80], nice: false })
    .encodeColor({ field: "candidate_party", layout: "overlay" })
    .editColorScale({ domain: ["Democrat", "Republican", "_AllOthers"], range: ["#4c78a8", "#f58518", "#e45756"] })
    .encodeBarWidth({ pixels: 18 })
    .editBarMark({ opacity: 1, stroke: false })
    .applyTextMetrics({ profile: { schemaVersion: 1, id: "vl_1394-panel-6-original-font-widths", measurements: [{ text: "650000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 33.375 }, { text: "Democrat", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 43.359375 }, { text: "Republican", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 50.046875 }, { text: "_AllOthers", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 46.6875 }, { text: "candidate_party", fontFamily: "sans-serif", fontSize: 11, fontWeight: 700, fontStyle: "normal", width: 84.375 }] } })
    .createXAxis({
      title: false,
      ticksAndLabels: { values: ["Democrat", "Republican", "_AllOthers"], ticks: { length: 5 }, labels: { fontSize: 10, fontFamily: "sans-serif", rotation: { value: -90, unit: "degrees" }, offset: 8.5, alongOffset: 0.390625 } }
    })
    .editXAxis({ line: { color: "#888", lineWidth: 1 }, ticksAndLabels: { ticks: { color: "#888", lineWidth: 1 }, labels: { color: "black" } } })
    .createGrid({ horizontal: { values: [0, 20, 40, 60, 80], color: "#ddd", lineWidth: 1 } })
    .editCanvas({ background: "transparent", plotBorder: { color: "#ddd", lineWidth: 1 } })
    .createSummaryData({ id: "summary6", groupBy: ["all_spending"], aggregates: [{ op: "count", as: "n" }] })
    .createAnnotation({ text: "candidate_party", anchor: "plot-center", fontSize: 11 })
    .editTextMark({ fontWeight: 700, fill: "black" })
    .editTextMark({ dx: 0.5, dy: 168.6123046875 })
    .createTextMark({ id: "panelHeader", text: "650000", fontSize: 10 })
    .encodeX({ datum: "Republican" })
    .encodeY({ datum: 40 })
    .editTextMark({ align: "center", baseline: "middle" })
    .editTextMark({ fontWeight: 400, fill: "black" })
    .editTextMark({ dx: 0, dy: -115.609375 });

  const child7 = chart()
    .createCanvas({ width: 82, height: 443, margin: { top: 119, right: 11, bottom: 124, left: 11 } })
    .createData({ id: "raw7", values: data })
    .filterData({ id: "facet7", field: "all_spending", oneOf: [750000] })
    // DOCS: doc-8f7efd41b2186a84
    .createBarPlot({
      x: { field: "candidate_party", fieldType: "nominal" },
      y: { field: "count", fieldType: "quantitative" },
      guides: false
    })
    .editXScale({ domain: ["Democrat", "Republican", "_AllOthers"], paddingInner: 0.1, paddingOuter: 0.05 })
    .editYScale({ domain: [0, 80], nice: false })
    .encodeColor({ field: "candidate_party", layout: "overlay" })
    .editColorScale({ domain: ["Democrat", "Republican", "_AllOthers"], range: ["#4c78a8", "#f58518", "#e45756"] })
    .encodeBarWidth({ pixels: 18 })
    .editBarMark({ opacity: 1, stroke: false })
    .applyTextMetrics({ profile: { schemaVersion: 1, id: "vl_1394-panel-7-original-font-widths", measurements: [{ text: "750000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 33.375 }, { text: "Democrat", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 43.359375 }, { text: "Republican", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 50.046875 }, { text: "_AllOthers", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 46.6875 }, { text: "candidate_party", fontFamily: "sans-serif", fontSize: 11, fontWeight: 700, fontStyle: "normal", width: 84.375 }] } })
    .createXAxis({
      title: false,
      ticksAndLabels: { values: ["Democrat", "Republican", "_AllOthers"], ticks: { length: 5 }, labels: { fontSize: 10, fontFamily: "sans-serif", rotation: { value: -90, unit: "degrees" }, offset: 8.5, alongOffset: 0.390625 } }
    })
    .editXAxis({ line: { color: "#888", lineWidth: 1 }, ticksAndLabels: { ticks: { color: "#888", lineWidth: 1 }, labels: { color: "black" } } })
    .createGrid({ horizontal: { values: [0, 20, 40, 60, 80], color: "#ddd", lineWidth: 1 } })
    .editCanvas({ background: "transparent", plotBorder: { color: "#ddd", lineWidth: 1 } })
    .createSummaryData({ id: "summary7", groupBy: ["all_spending"], aggregates: [{ op: "count", as: "n" }] })
    .createAnnotation({ text: "candidate_party", anchor: "plot-center", fontSize: 11 })
    .editTextMark({ fontWeight: 700, fill: "black" })
    .editTextMark({ dx: 0.5, dy: 168.6123046875 })
    .createTextMark({ id: "panelHeader", text: "750000", fontSize: 10 })
    .encodeX({ datum: "Republican" })
    .encodeY({ datum: 40 })
    .editTextMark({ align: "center", baseline: "middle" })
    .editTextMark({ fontWeight: 400, fill: "black" })
    .editTextMark({ dx: 0, dy: -115.609375 });

  const child8 = chart()
    .createCanvas({ width: 82, height: 443, margin: { top: 119, right: 11, bottom: 124, left: 11 } })
    .createData({ id: "raw8", values: data })
    .filterData({ id: "facet8", field: "all_spending", oneOf: [850000] })
    // DOCS: doc-8f7efd41b2186a84
    .createBarPlot({
      x: { field: "candidate_party", fieldType: "nominal" },
      y: { field: "count", fieldType: "quantitative" },
      guides: false
    })
    .editXScale({ domain: ["Democrat", "Republican", "_AllOthers"], paddingInner: 0.1, paddingOuter: 0.05 })
    .editYScale({ domain: [0, 80], nice: false })
    .encodeColor({ field: "candidate_party", layout: "overlay" })
    .editColorScale({ domain: ["Democrat", "Republican", "_AllOthers"], range: ["#4c78a8", "#f58518", "#e45756"] })
    .encodeBarWidth({ pixels: 18 })
    .editBarMark({ opacity: 1, stroke: false })
    .applyTextMetrics({ profile: { schemaVersion: 1, id: "vl_1394-panel-8-original-font-widths", measurements: [{ text: "850000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 33.375 }, { text: "Democrat", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 43.359375 }, { text: "Republican", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 50.046875 }, { text: "_AllOthers", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 46.6875 }, { text: "candidate_party", fontFamily: "sans-serif", fontSize: 11, fontWeight: 700, fontStyle: "normal", width: 84.375 }] } })
    .createXAxis({
      title: false,
      ticksAndLabels: { values: ["Democrat", "Republican", "_AllOthers"], ticks: { length: 5 }, labels: { fontSize: 10, fontFamily: "sans-serif", rotation: { value: -90, unit: "degrees" }, offset: 8.5, alongOffset: 0.390625 } }
    })
    .editXAxis({ line: { color: "#888", lineWidth: 1 }, ticksAndLabels: { ticks: { color: "#888", lineWidth: 1 }, labels: { color: "black" } } })
    .createGrid({ horizontal: { values: [0, 20, 40, 60, 80], color: "#ddd", lineWidth: 1 } })
    .editCanvas({ background: "transparent", plotBorder: { color: "#ddd", lineWidth: 1 } })
    .createSummaryData({ id: "summary8", groupBy: ["all_spending"], aggregates: [{ op: "count", as: "n" }] })
    .createAnnotation({ text: "candidate_party", anchor: "plot-center", fontSize: 11 })
    .editTextMark({ fontWeight: 700, fill: "black" })
    .editTextMark({ dx: 0.5, dy: 168.6123046875 })
    .createTextMark({ id: "panelHeader", text: "850000", fontSize: 10 })
    .encodeX({ datum: "Republican" })
    .encodeY({ datum: 40 })
    .editTextMark({ align: "center", baseline: "middle" })
    .editTextMark({ fontWeight: 400, fill: "black" })
    .editTextMark({ dx: 0, dy: -115.609375 });

  const child9 = chart()
    .createCanvas({ width: 237, height: 443, margin: { top: 119, right: 166, bottom: 124, left: 11 } })
    .createData({ id: "raw9", values: data })
    .filterData({ id: "facet9", field: "all_spending", oneOf: [950000] })
    // DOCS: doc-8f7efd41b2186a84
    .createBarPlot({
      x: { field: "candidate_party", fieldType: "nominal" },
      y: { field: "count", fieldType: "quantitative" },
      guides: false
    })
    .editXScale({ domain: ["Democrat", "Republican", "_AllOthers"], paddingInner: 0.1, paddingOuter: 0.05 })
    .editYScale({ domain: [0, 80], nice: false })
    .encodeColor({ field: "candidate_party", layout: "overlay" })
    .editColorScale({ domain: ["Democrat", "Republican", "_AllOthers"], range: ["#4c78a8", "#f58518", "#e45756"] })
    .encodeBarWidth({ pixels: 18 })
    .editBarMark({ opacity: 1, stroke: false })
    .applyTextMetrics({ profile: { schemaVersion: 1, id: "vl_1394-panel-9-original-font-widths", measurements: [{ text: "950000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 33.375 }, { text: "Democrat", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 43.359375 }, { text: "Republican", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 50.046875 }, { text: "_AllOthers", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 46.6875 }, { text: "candidate_party", fontFamily: "sans-serif", fontSize: 11, fontWeight: 700, fontStyle: "normal", width: 84.375 }] } })
    .createXAxis({
      title: false,
      ticksAndLabels: { values: ["Democrat", "Republican", "_AllOthers"], ticks: { length: 5 }, labels: { fontSize: 10, fontFamily: "sans-serif", rotation: { value: -90, unit: "degrees" }, offset: 8.5, alongOffset: 0.390625 } }
    })
    .editXAxis({ line: { color: "#888", lineWidth: 1 }, ticksAndLabels: { ticks: { color: "#888", lineWidth: 1 }, labels: { color: "black" } } })
    .createGrid({ horizontal: { values: [0, 20, 40, 60, 80], color: "#ddd", lineWidth: 1 } })
    .editCanvas({ background: "transparent", plotBorder: { color: "#ddd", lineWidth: 1 } })
    .createLegend({ title: "candidate_party", titleStyle: { fontSize: 11, fontFamily: "sans-serif", fontWeight: 700, color: "black" }, labels: { fontSize: 10, fontFamily: "sans-serif", fontWeight: "normal", color: "black" } })
    .editLegend({ symbol: { width: 10, height: 10, stroke: "none", strokeWidth: 0 } })
    .createSummaryData({ id: "summary9", groupBy: ["all_spending"], aggregates: [{ op: "count", as: "n" }] })
    .createAnnotation({ text: "candidate_party", anchor: "plot-center", fontSize: 11 })
    .editTextMark({ fontWeight: 700, fill: "black" })
    .editTextMark({ dx: 0.5, dy: 168.6123046875 })
    .createTextMark({ id: "panelHeader", text: "950000", fontSize: 10 })
    .encodeX({ datum: "Republican" })
    .encodeY({ datum: 40 })
    .editTextMark({ align: "center", baseline: "middle" })
    .editTextMark({ fontWeight: 400, fill: "black" })
    .editTextMark({ dx: 0, dy: -115.609375 });

    // Measured parent layout: child canvases abut exactly (plot pitch 82px).
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
