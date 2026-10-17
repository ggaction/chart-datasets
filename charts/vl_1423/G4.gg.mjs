import { chart, hconcat, vconcat } from "ggaction";
import data from "./data.json";

// DOCS: doc-f1f94dec7d5389ca (composition: hconcat/vconcat with named child programs)
// DOCS: doc-333a87e52954985d (bar chart facade pattern)
// DOCS: doc-fc11e9fb291905d1 (createBarPlot x/y channels)

const sourceTextMetrics = { schemaVersion: 1, id: "vl_1423-actual-axis-widths", measurements: [
  { text: "0", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 5.5625 },
  { text: "5,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 25.03125 },
  { text: "10,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 30.59375 },
  { text: "15,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 30.59375 },
  { text: "20,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 30.59375 },
  { text: "25,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 30.59375 },
  { text: "30,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 30.59375 },
  { text: "aligned", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 32.265625 },
  { text: "barcode mutation_nt_count", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 121.203125 },
  { text: "gene clip3", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 45.59375 },
  { text: "gene mutation_nt_count", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 107.3125 },
  { text: "query_clip5", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 51.15625 },
  { text: "termini5 clip5", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 58.921875 }
] };

export function buildChart() {
  const child0 = chart()
    .createCanvas({ width: 388, height: 139, margin: { top: 26, right: 3, bottom: 38, left: 135 } })
    .editCanvas({ plotBorder: { color: "#ddd", lineWidth: 1 } })
    .createData({ values: data })
    .filterData({ id: "run0", field: "pacbioRun", oneOf: ["LibA_211105"] })
    .filterData({ id: "frac0", field: "frac_counts", predicate: { op: "gt", value: 0.01 } })
    .createComputedData({ id: "isAligned0", as: "is_aligned", expression: { op: "eq", left: { field: "filter_reason" }, right: { constant: "aligned" } } })
    .applyTextMetrics({ profile: sourceTextMetrics })
    .createTitle({ text: "LibA_211105", titleStyle: { fontSize: 10 } })
    .editTitle({ align: "center", offset: -9.609375, titleStyle: { fontWeight: 400, color: "black" } })
    .createBarPlot({
      x: { field: "count", fieldType: "quantitative" },
      y: { field: "filter_reason", fieldType: "nominal" },
      guides: false
    })
    .editXScale({ type: "linear", domain: [0, 28000] })
    .editYScale({ type: "band", domain: ["aligned", "barcode mutation_nt_count", "gene clip3", "gene mutation_nt_count", "query_clip5", "termini5 clip5"] })
    .encodeColor({ field: "is_aligned", layout: "overlay" })
    .editColorScale({ type: "ordinal", domain: [false, true], range: ["#4c78a8", "#f58518"] })
    .encodeBarWidth({ band: 1 })
    .editYScale({ paddingInner: 0.1, paddingOuter: 0.05 })
    .editBarMark({ stroke: false })
    .createXAxis({
      line: { color: "#888", lineWidth: 1 },
      ticksAndLabels: {
        values: [0, 5000, 10000, 15000, 20000, 25000],
        ticks: { length: 5, color: "#888", lineWidth: 1 },
        labels: { format: ",.0f", offset: 5.5, flush: true, fontSize: 10, fontFamily: "sans-serif", fontWeight: 400, color: "black" }
      },
      title: { text: "count", offset: 27.484375, fontSize: 11, fontWeight: 700, color: "black" }
    })
    .createYAxis({
      line: { color: "#888", lineWidth: 1 },
      ticksAndLabels: {
        values: ["aligned", "barcode mutation_nt_count", "gene clip3", "gene mutation_nt_count", "query_clip5", "termini5 clip5"],
        ticks: { length: 5, color: "#888", lineWidth: 1 },
        labels: { offset: 7, fontSize: 10, fontFamily: "sans-serif", fontWeight: 400, color: "black" }
      },
      title: false
    })
    .createVerticalGrid({ values: [0, 5000, 10000, 15000, 20000, 25000], color: "#ddd", lineWidth: 1 });

  const child1 = chart()
    .createCanvas({ width: 478, height: 139, margin: { top: 26, right: 93, bottom: 38, left: 135 } })
    .editCanvas({ plotBorder: { color: "#ddd", lineWidth: 1 } })
    .createData({ values: data })
    .filterData({ id: "run1", field: "pacbioRun", oneOf: ["LibA_220124"] })
    .filterData({ id: "frac1", field: "frac_counts", predicate: { op: "gt", value: 0.01 } })
    .createComputedData({ id: "isAligned1", as: "is_aligned", expression: { op: "eq", left: { field: "filter_reason" }, right: { constant: "aligned" } } })
    .applyTextMetrics({ profile: sourceTextMetrics })
    .createTitle({ text: "LibA_220124", titleStyle: { fontSize: 10 } })
    .editTitle({ align: "center", offset: -9.609375, titleStyle: { fontWeight: 400, color: "black" } })
    .createBarPlot({
      x: { field: "count", fieldType: "quantitative" },
      y: { field: "filter_reason", fieldType: "nominal" },
      guides: false
    })
    .editXScale({ type: "linear", domain: [0, 28000] })
    .editYScale({ type: "band", domain: ["aligned", "gene clip3", "gene mutation_nt_count", "query_clip5", "termini5 clip5"] })
    .encodeColor({ field: "is_aligned", layout: "overlay" })
    .editColorScale({ type: "ordinal", domain: [false, true], range: ["#4c78a8", "#f58518"] })
    .encodeBarWidth({ band: 1 })
    .editYScale({ paddingInner: 0.1, paddingOuter: 0.05 })
    .editBarMark({ stroke: false })
    .createXAxis({
      line: { color: "#888", lineWidth: 1 },
      ticksAndLabels: {
        values: [0, 5000, 10000, 15000, 20000, 25000],
        ticks: { length: 5, color: "#888", lineWidth: 1 },
        labels: { format: ",.0f", offset: 5.5, flush: true, fontSize: 10, fontFamily: "sans-serif", fontWeight: 400, color: "black" }
      },
      title: { text: "count", offset: 27.484375, fontSize: 11, fontWeight: 700, color: "black" }
    })
    .createYAxis({
      line: { color: "#888", lineWidth: 1 },
      ticksAndLabels: {
        values: ["aligned", "gene clip3", "gene mutation_nt_count", "query_clip5", "termini5 clip5"],
        ticks: { length: 5, color: "#888", lineWidth: 1 },
        labels: { offset: 7, fontSize: 10, fontFamily: "sans-serif", fontWeight: 400, color: "black" }
      },
      title: false
    })
    .createVerticalGrid({ values: [0, 5000, 10000, 15000, 20000, 25000], color: "#ddd", lineWidth: 1 })
    .createGuides({ axes: false, grid: false, legend: { titleStyle: { color: "black", fontSize: 11, fontWeight: 700 }, labels: { color: "black", fontSize: 10 }, symbol: { layers: [{ type: "swatch", width: 10, height: 10, stroke: "none", strokeWidth: 0 }] } } });

  const child2 = chart()
    .createCanvas({ width: 392, height: 139, margin: { top: 26, right: 7, bottom: 38, left: 135 } })
    .editCanvas({ plotBorder: { color: "#ddd", lineWidth: 1 } })
    .createData({ values: data })
    .filterData({ id: "run2", field: "pacbioRun", oneOf: ["LibB_211105"] })
    .filterData({ id: "frac2", field: "frac_counts", predicate: { op: "gt", value: 0.01 } })
    .createComputedData({ id: "isAligned2", as: "is_aligned", expression: { op: "eq", left: { field: "filter_reason" }, right: { constant: "aligned" } } })
    .applyTextMetrics({ profile: sourceTextMetrics })
    .createTitle({ text: "LibB_211105", titleStyle: { fontSize: 10 } })
    .editTitle({ align: "center", offset: -9.609375, titleStyle: { fontWeight: 400, color: "black" } })
    .createBarPlot({
      x: { field: "count", fieldType: "quantitative" },
      y: { field: "filter_reason", fieldType: "nominal" },
      guides: false
    })
    .editXScale({ type: "linear", domain: [0, 30000] })
    .editYScale({ type: "band", domain: ["aligned", "barcode mutation_nt_count", "gene clip3", "gene mutation_nt_count", "query_clip5", "termini5 clip5"] })
    .encodeColor({ field: "is_aligned", layout: "overlay" })
    .editColorScale({ type: "ordinal", domain: [false, true], range: ["#4c78a8", "#f58518"] })
    .encodeBarWidth({ band: 1 })
    .editYScale({ paddingInner: 0.1, paddingOuter: 0.05 })
    .editBarMark({ stroke: false })
    .createXAxis({
      line: { color: "#888", lineWidth: 1 },
      ticksAndLabels: {
        values: [0, 5000, 10000, 15000, 20000, 25000, 30000],
        ticks: { length: 5, color: "#888", lineWidth: 1 },
        labels: { format: ",.0f", offset: 5.5, flush: true, fontSize: 10, fontFamily: "sans-serif", fontWeight: 400, color: "black", labelMap: [{ value: 5000, label: "" }, { value: 15000, label: "" }, { value: 25000, label: "" }] }
      },
      title: { text: "count", offset: 27.484375, fontSize: 11, fontWeight: 700, color: "black" }
    })
    .createYAxis({
      line: { color: "#888", lineWidth: 1 },
      ticksAndLabels: {
        values: ["aligned", "barcode mutation_nt_count", "gene clip3", "gene mutation_nt_count", "query_clip5", "termini5 clip5"],
        ticks: { length: 5, color: "#888", lineWidth: 1 },
        labels: { offset: 7, fontSize: 10, fontFamily: "sans-serif", fontWeight: 400, color: "black" }
      },
      title: false
    })
    .createVerticalGrid({ values: [0, 5000, 10000, 15000, 20000, 25000, 30000], color: "#ddd", lineWidth: 1 });

  const child3 = chart()
    .createCanvas({ width: 392, height: 139, margin: { top: 26, right: 7, bottom: 38, left: 135 } })
    .editCanvas({ plotBorder: { color: "#ddd", lineWidth: 1 } })
    .createData({ values: data })
    .filterData({ id: "run3", field: "pacbioRun", oneOf: ["LibB_220124"] })
    .filterData({ id: "frac3", field: "frac_counts", predicate: { op: "gt", value: 0.01 } })
    .createComputedData({ id: "isAligned3", as: "is_aligned", expression: { op: "eq", left: { field: "filter_reason" }, right: { constant: "aligned" } } })
    .applyTextMetrics({ profile: sourceTextMetrics })
    .createTitle({ text: "LibB_220124", titleStyle: { fontSize: 10 } })
    .editTitle({ align: "center", offset: -9.609375, titleStyle: { fontWeight: 400, color: "black" } })
    .createBarPlot({
      x: { field: "count", fieldType: "quantitative" },
      y: { field: "filter_reason", fieldType: "nominal" },
      guides: false
    })
    .editXScale({ type: "linear", domain: [0, 30000] })
    .editYScale({ type: "band", domain: ["aligned", "barcode mutation_nt_count", "gene clip3", "gene mutation_nt_count", "query_clip5", "termini5 clip5"] })
    .encodeColor({ field: "is_aligned", layout: "overlay" })
    .editColorScale({ type: "ordinal", domain: [false, true], range: ["#4c78a8", "#f58518"] })
    .encodeBarWidth({ band: 1 })
    .editYScale({ paddingInner: 0.1, paddingOuter: 0.05 })
    .editBarMark({ stroke: false })
    .createXAxis({
      line: { color: "#888", lineWidth: 1 },
      ticksAndLabels: {
        values: [0, 5000, 10000, 15000, 20000, 25000, 30000],
        ticks: { length: 5, color: "#888", lineWidth: 1 },
        labels: { format: ",.0f", offset: 5.5, flush: true, fontSize: 10, fontFamily: "sans-serif", fontWeight: 400, color: "black", labelMap: [{ value: 5000, label: "" }, { value: 15000, label: "" }, { value: 25000, label: "" }] }
      },
      title: { text: "count", offset: 27.484375, fontSize: 11, fontWeight: 700, color: "black" }
    })
    .createYAxis({
      line: { color: "#888", lineWidth: 1 },
      ticksAndLabels: {
        values: ["aligned", "barcode mutation_nt_count", "gene clip3", "gene mutation_nt_count", "query_clip5", "termini5 clip5"],
        ticks: { length: 5, color: "#888", lineWidth: 1 },
        labels: { offset: 7, fontSize: 10, fontFamily: "sans-serif", fontWeight: 400, color: "black" }
      },
      title: false
    })
    .createVerticalGrid({ values: [0, 5000, 10000, 15000, 20000, 25000, 30000], color: "#ddd", lineWidth: 1 });

  const row0 = hconcat({ programs: [{ id: "panel0", program: child0 }, { id: "panel1", program: child1 }], gap: 0, align: "start" });
  const row1 = hconcat({ programs: [{ id: "panel2", program: child2 }, { id: "panel3", program: child3 }], gap: 10, align: "start" });

  return vconcat({ programs: [{ id: "row0", program: row0 }, { id: "row1", program: row1 }], gap: 10, align: "start" });
}