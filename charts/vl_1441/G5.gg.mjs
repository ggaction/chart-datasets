import { chart, hconcat, vconcat } from "ggaction";
import data from "./data.json";

// DOCS: doc-6c2c08869091f6a0 createBarPlot facade is used for every panel below.
// Module-local measured source glyph profile: referenced ONLY as applyTextMetrics({profile:sourceTextMetrics}).
const sourceTextMetrics = {
  schemaVersion: 1,
  id: "vl_1441-actual-axis-widths",
  measurements: [
    { text: "0", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 5.5625 },
    { text: "100,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 36.15625 },
    { text: "200,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 36.15625 },
    { text: "300,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 36.15625 },
    { text: "400,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 36.15625 },
    { text: "500,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 36.15625 },
    { text: "600,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 36.15625 },
    { text: "700,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 36.15625 },
    { text: "800,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 36.15625 },
    { text: "900,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 36.15625 },
    { text: "1,000,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 44.5 },
    { text: "1,500,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 44.5 },
    { text: "2,000,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 44.5 },
    { text: "2,500,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 44.5 },
    { text: "3,000,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 44.5 },
    { text: "aligned", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 32.265625 },
    { text: "barcode mutation_nt_count", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 121.203125 },
    { text: "gene clip3", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 45.59375 },
    { text: "gene mutation_nt_count", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 107.3125 },
    { text: "query_clip3", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 51.15625 },
    { text: "query_clip5", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 51.15625 },
    { text: "termini5 clip5", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 58.921875 }
  ]
};

export function buildChart() {
  // panel0: Lib-1_220531
  const child0 = chart()
    .createCanvas({ width: 392, height: 140, margin: { top: 27, right: 7, bottom: 38, left: 135 } })
    .editCanvas({ plotBorder: { color: "#ddd", lineWidth: 1 } })
    .createData({ values: data })
    .applyTextMetrics({ profile: sourceTextMetrics })
    .filterData({ id: "frac_gt_001_p0", field: "frac_counts", predicate: { op: "gt", value: 0.01 } })
    .createComputedData({ id: "is_aligned_p0", as: "is_aligned", expression: { op: "eq", left: { field: "filter_reason" }, right: { constant: "aligned" } } })
    .filterData({ id: "run_p0", field: "pacbioRun", oneOf: ["Lib-1_220531"] })
    .createBarPlot({ x: { field: "count", fieldType: "quantitative" }, y: { field: "filter_reason" }, guides: false })
    .editXScale({ domain: [0, 650000] })
    .editYScale({ domain: ["aligned", "barcode mutation_nt_count", "gene clip3", "gene mutation_nt_count", "query_clip3", "query_clip5", "termini5 clip5"], paddingInner: 0.1, paddingOuter: 0.05 })
    .editBarMark({ stroke: false })
    .encodeColor({ field: "is_aligned", layout: "overlay" })
    .editColorScale({ domain: [false, true], range: ["#4c78a8", "#f58518"] })
    .encodeBarWidth({ band: 1 })
    .createVerticalGrid({ values: [0, 100000, 200000, 300000, 400000, 500000, 600000], lineWidth: 1 }).editVerticalGrid({ color: "#ddd" })
    .createXAxis({
      line: { lineWidth: 1 },
      ticksAndLabels: {
        values: [0, 100000, 200000, 300000, 400000, 500000, 600000],
        ticks: { length: 5, lineWidth: 1 },
        labels: { offset: 5.5, fontSize: 10, fontFamily: "sans-serif", fontWeight: 400, flush: true, overlap: "error" }
      },
      title: { text: "count", offset: 27.484375, fontSize: 11, fontFamily: "sans-serif" }
    })
    .editXAxis({ line: { color: "#888" }, ticksAndLabels: { ticks: { color: "#888" }, labels: { color: "black", format: ",.0f" } }, title: { color: "black", fontWeight: 700 } })
    .createYAxis({
      line: { lineWidth: 1 },
      ticksAndLabels: {
        values: ["aligned", "barcode mutation_nt_count", "gene clip3", "gene mutation_nt_count", "query_clip3", "query_clip5", "termini5 clip5"],
        ticks: { length: 5, lineWidth: 1 },
        labels: { offset: 7, fontSize: 10, fontFamily: "sans-serif", fontWeight: 400, overlap: "allow" }
      },
      title: false
    })
    .editYAxis({ line: { color: "#888" }, ticksAndLabels: { ticks: { color: "#888" }, labels: { color: "black" } } })
    .createTitle({ text: "Lib-1_220531", titleStyle: { fontSize: 10, fontWeight: 400, color: "black", fontFamily: "sans-serif" } })
    .editTitle({ align: "center", offset: -8.75223159790039 });

  // panel1: Lib-1_220710 — the only panel with the source boolean legend
  const child1 = chart()
    .createCanvas({ width: 464, height: 140, margin: { top: 27, right: 79, bottom: 38, left: 135 } })
    .editCanvas({ plotBorder: { color: "#ddd", lineWidth: 1 } })
    .createData({ values: data })
    .applyTextMetrics({ profile: sourceTextMetrics })
    .filterData({ id: "frac_gt_001_p1", field: "frac_counts", predicate: { op: "gt", value: 0.01 } })
    .createComputedData({ id: "is_aligned_p1", as: "is_aligned", expression: { op: "eq", left: { field: "filter_reason" }, right: { constant: "aligned" } } })
    .filterData({ id: "run_p1", field: "pacbioRun", oneOf: ["Lib-1_220710"] })
    .createBarPlot({ x: { field: "count", fieldType: "quantitative" }, y: { field: "filter_reason" }, guides: false })
    .editXScale({ domain: [0, 1000000] })
    .editYScale({ domain: ["aligned", "barcode mutation_nt_count", "gene mutation_nt_count"], paddingInner: 0.1, paddingOuter: 0.05 })
    .editBarMark({ stroke: false })
    .encodeColor({ field: "is_aligned", layout: "overlay" })
    .editColorScale({ domain: [false, true], range: ["#4c78a8", "#f58518"] })
    .encodeBarWidth({ band: 1 })
    .createLegend({ titleStyle: { color: "black", fontSize: 11, fontWeight: 700 }, labels: { color: "black", fontSize: 10 }, symbol: { layers: [{ type: "swatch", width: 10, height: 10, stroke: "none", strokeWidth: 0 }] } })
    .createVerticalGrid({ values: [0, 200000, 400000, 600000, 800000, 1000000], lineWidth: 1 }).editVerticalGrid({ color: "#ddd" })
    .createXAxis({
      line: { lineWidth: 1 },
      ticksAndLabels: {
        values: [0, 200000, 400000, 600000, 800000, 1000000],
        ticks: { length: 5, lineWidth: 1 },
        labels: { offset: 5.5, fontSize: 10, fontFamily: "sans-serif", fontWeight: 400, flush: true, overlap: "error", labelMap: [{ value: 200000, label: "" }, { value: 600000, label: "" }, { value: 1000000, label: "" }] }
      },
      title: { text: "count", offset: 27.484375, fontSize: 11, fontFamily: "sans-serif" }
    })
    .editXAxis({ line: { color: "#888" }, ticksAndLabels: { ticks: { color: "#888" }, labels: { color: "black", format: ",.0f" } }, title: { color: "black", fontWeight: 700 } })
    .createYAxis({
      line: { lineWidth: 1 },
      ticksAndLabels: {
        values: ["aligned", "barcode mutation_nt_count", "gene mutation_nt_count"],
        ticks: { length: 5, lineWidth: 1 },
        labels: { offset: 7, fontSize: 10, fontFamily: "sans-serif", fontWeight: 400, overlap: "error" }
      },
      title: false
    })
    .editYAxis({ line: { color: "#888" }, ticksAndLabels: { ticks: { color: "#888" }, labels: { color: "black" } } })
    .createTitle({ text: "Lib-1_220710", titleStyle: { fontSize: 10, fontWeight: 400, color: "black", fontFamily: "sans-serif" } })
    .editTitle({ align: "center", offset: -8.609375 });

  // panel2: Lib-1_220711
  const child2 = chart()
    .createCanvas({ width: 392, height: 140, margin: { top: 27, right: 7, bottom: 38, left: 135 } })
    .editCanvas({ plotBorder: { color: "#ddd", lineWidth: 1 } })
    .createData({ values: data })
    .applyTextMetrics({ profile: sourceTextMetrics })
    .filterData({ id: "frac_gt_001_p2", field: "frac_counts", predicate: { op: "gt", value: 0.01 } })
    .createComputedData({ id: "is_aligned_p2", as: "is_aligned", expression: { op: "eq", left: { field: "filter_reason" }, right: { constant: "aligned" } } })
    .filterData({ id: "run_p2", field: "pacbioRun", oneOf: ["Lib-1_220711"] })
    .createBarPlot({ x: { field: "count", fieldType: "quantitative" }, y: { field: "filter_reason" }, guides: false })
    .editXScale({ domain: [0, 900000] })
    .editYScale({ domain: ["aligned", "barcode mutation_nt_count", "gene mutation_nt_count"], paddingInner: 0.1, paddingOuter: 0.05 })
    .editBarMark({ stroke: false })
    .encodeColor({ field: "is_aligned", layout: "overlay" })
    .editColorScale({ domain: [false, true], range: ["#4c78a8", "#f58518"] })
    .encodeBarWidth({ band: 1 })
    .createVerticalGrid({ values: [0, 100000, 200000, 300000, 400000, 500000, 600000, 700000, 800000, 900000], lineWidth: 1 }).editVerticalGrid({ color: "#ddd" })
    .createXAxis({
      line: { lineWidth: 1 },
      ticksAndLabels: {
        values: [0, 100000, 200000, 300000, 400000, 500000, 600000, 700000, 800000, 900000],
        ticks: { length: 5, lineWidth: 1 },
        labels: { offset: 5.5, fontSize: 10, fontFamily: "sans-serif", fontWeight: 400, flush: true, overlap: "error", labelMap: [{ value: 100000, label: "" }, { value: 300000, label: "" }, { value: 500000, label: "" }, { value: 700000, label: "" }, { value: 900000, label: "" }] }
      },
      title: { text: "count", offset: 27.484375, fontSize: 11, fontFamily: "sans-serif" }
    })
    .editXAxis({ line: { color: "#888" }, ticksAndLabels: { ticks: { color: "#888" }, labels: { color: "black", format: ",.0f" } }, title: { color: "black", fontWeight: 700 } })
    .createYAxis({
      line: { lineWidth: 1 },
      ticksAndLabels: {
        values: ["aligned", "barcode mutation_nt_count", "gene mutation_nt_count"],
        ticks: { length: 5, lineWidth: 1 },
        labels: { offset: 7, fontSize: 10, fontFamily: "sans-serif", fontWeight: 400, overlap: "error" }
      },
      title: false
    })
    .editYAxis({ line: { color: "#888" }, ticksAndLabels: { ticks: { color: "#888" }, labels: { color: "black" } } })
    .createTitle({ text: "Lib-1_220711", titleStyle: { fontSize: 10, fontWeight: 400, color: "black", fontFamily: "sans-serif" } })
    .editTitle({ align: "center", offset: -8.609375 });

  // panel3: Lib-2_220629
  const child3 = chart()
    .createCanvas({ width: 392, height: 140, margin: { top: 27, right: 7, bottom: 38, left: 135 } })
    .editCanvas({ plotBorder: { color: "#ddd", lineWidth: 1 } })
    .createData({ values: data })
    .applyTextMetrics({ profile: sourceTextMetrics })
    .filterData({ id: "frac_gt_001_p3", field: "frac_counts", predicate: { op: "gt", value: 0.01 } })
    .createComputedData({ id: "is_aligned_p3", as: "is_aligned", expression: { op: "eq", left: { field: "filter_reason" }, right: { constant: "aligned" } } })
    .filterData({ id: "run_p3", field: "pacbioRun", oneOf: ["Lib-2_220629"] })
    .createBarPlot({ x: { field: "count", fieldType: "quantitative" }, y: { field: "filter_reason" }, guides: false })
    .editXScale({ domain: [0, 3000000] })
    .editYScale({ domain: ["aligned", "barcode mutation_nt_count", "gene mutation_nt_count"], paddingInner: 0.1, paddingOuter: 0.05 })
    .editBarMark({ stroke: false })
    .encodeColor({ field: "is_aligned", layout: "overlay" })
    .editColorScale({ domain: [false, true], range: ["#4c78a8", "#f58518"] })
    .encodeBarWidth({ band: 1 })
    .createVerticalGrid({ values: [0, 500000, 1000000, 1500000, 2000000, 2500000, 3000000], lineWidth: 1 }).editVerticalGrid({ color: "#ddd" })
    .createXAxis({
      line: { lineWidth: 1 },
      ticksAndLabels: {
        values: [0, 500000, 1000000, 1500000, 2000000, 2500000, 3000000],
        ticks: { length: 5, lineWidth: 1 },
        labels: { offset: 5.5, fontSize: 10, fontFamily: "sans-serif", fontWeight: 400, flush: true, overlap: "error", labelMap: [{ value: 500000, label: "" }, { value: 1500000, label: "" }, { value: 2500000, label: "" }] }
      },
      title: { text: "count", offset: 27.484375, fontSize: 11, fontFamily: "sans-serif" }
    })
    .createYAxis({
      line: { lineWidth: 1 },
      ticksAndLabels: {
        values: ["aligned", "barcode mutation_nt_count", "gene mutation_nt_count"],
        ticks: { length: 5, lineWidth: 1 },
        labels: { offset: 7, fontSize: 10, fontFamily: "sans-serif", fontWeight: 400, overlap: "error" }
      },
      title: false
    })
    .editXAxis({ line: { color: "#888" }, ticksAndLabels: { ticks: { color: "#888" }, labels: { color: "black", format: ",.0f" } }, title: { color: "black", fontWeight: 700 } })
    .editYAxis({ line: { color: "#888" }, ticksAndLabels: { ticks: { color: "#888" }, labels: { color: "black" } } })
    .createTitle({ text: "Lib-2_220629", titleStyle: { fontSize: 10, fontWeight: 400, color: "black", fontFamily: "sans-serif" } })
    .editTitle({ align: "center", offset: -8.609375 });

  // panel4: Lib-3_220629
  const child4 = chart()
    .createCanvas({ width: 392, height: 140, margin: { top: 27, right: 7, bottom: 38, left: 135 } })
    .editCanvas({ plotBorder: { color: "#ddd", lineWidth: 1 } })
    .createData({ values: data })
    .applyTextMetrics({ profile: sourceTextMetrics })
    .filterData({ id: "frac_gt_001_p4", field: "frac_counts", predicate: { op: "gt", value: 0.01 } })
    .createComputedData({ id: "is_aligned_p4", as: "is_aligned", expression: { op: "eq", left: { field: "filter_reason" }, right: { constant: "aligned" } } })
    .filterData({ id: "run_p4", field: "pacbioRun", oneOf: ["Lib-3_220629"] })
    .createBarPlot({ x: { field: "count", fieldType: "quantitative" }, y: { field: "filter_reason" }, guides: false })
    .editXScale({ domain: [0, 3000000] })
    .editYScale({ domain: ["aligned", "barcode mutation_nt_count", "gene mutation_nt_count"], paddingInner: 0.1, paddingOuter: 0.05 })
    .editBarMark({ stroke: false })
    .encodeColor({ field: "is_aligned", layout: "overlay" })
    .editColorScale({ domain: [false, true], range: ["#4c78a8", "#f58518"] })
    .encodeBarWidth({ band: 1 })
    .createVerticalGrid({ values: [0, 500000, 1000000, 1500000, 2000000, 2500000, 3000000], lineWidth: 1 }).editVerticalGrid({ color: "#ddd" })
    .createXAxis({
      line: { lineWidth: 1 },
      ticksAndLabels: {
        values: [0, 500000, 1000000, 1500000, 2000000, 2500000, 3000000],
        ticks: { length: 5, lineWidth: 1 },
        labels: { offset: 5.5, fontSize: 10, fontFamily: "sans-serif", fontWeight: 400, flush: true, overlap: "error", labelMap: [{ value: 500000, label: "" }, { value: 1500000, label: "" }, { value: 2500000, label: "" }] }
      },
      title: { text: "count", offset: 27.484375, fontSize: 11, fontFamily: "sans-serif" }
    })
    .createYAxis({
      line: { lineWidth: 1 },
      ticksAndLabels: {
        values: ["aligned", "barcode mutation_nt_count", "gene mutation_nt_count"],
        ticks: { length: 5, lineWidth: 1 },
        labels: { offset: 7, fontSize: 10, fontFamily: "sans-serif", fontWeight: 400, overlap: "error" }
      },
      title: false
    })
    .editXAxis({ line: { color: "#888" }, ticksAndLabels: { ticks: { color: "#888" }, labels: { color: "black", format: ",.0f" } }, title: { color: "black", fontWeight: 700 } })
    .editYAxis({ line: { color: "#888" }, ticksAndLabels: { ticks: { color: "#888" }, labels: { color: "black" } } })
    .createTitle({ text: "Lib-3_220629", titleStyle: { fontSize: 10, fontWeight: 400, color: "black", fontFamily: "sans-serif" } })
    .editTitle({ align: "center", offset: -8.609375 });

  // DOCS: doc-6c2c08869091f6a0 — reviewed nested tree: exact per-row gaps and root gap.
  const row0 = hconcat({ programs: [{ id: "panel0", program: child0 }, { id: "panel1", program: child1 }], gap: 10, align: "start" });
  const row1 = hconcat({ programs: [{ id: "panel2", program: child2 }, { id: "panel3", program: child3 }], gap: 10, align: "start" });
  return vconcat({ programs: [{ id: "row0", program: row0 }, { id: "row1", program: row1 }, { id: "row2", program: child4 }], gap: 9, align: "start" });
}