// DOCS: doc-f1f94dec7d5389ca (Composition Recipe: hconcat/vconcat program slots)
// DOCS: doc-6c2c08869091f6a0 (createBarPlot facade, width band, guides:false)
// DOCS: doc-333a87e52954985d (grouped/positional bar scale conventions)

import { chart, hconcat, vconcat } from "ggaction";
import data from "./data.json";

// DOCS: doc-6c2c08869091f6a0 — measured source glyph widths (applyTextMetrics profile, frozen literal tuples)
const sourceTextMetrics = {
  schemaVersion: 1,
  id: "vl_1433-actual-axis-widths",
  measurements: [
    { text: "0", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 5.5625 },
    { text: "100,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 36.15625 },
    { text: "200,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 36.15625 },
    { text: "300,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 36.15625 },
    { text: "400,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 36.15625 },
    { text: "500,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 36.15625 },
    { text: "600,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 36.15625 },
    { text: "aligned", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 32.265625 },
    { text: "barcode mutation_nt_count", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 121.203125 },
    { text: "gene mutation_nt_count", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 107.3125 },
    { text: "query_clip5", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 51.15625 },
    { text: "termini5 clip5", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 58.921875 },
    { text: "gene clip3", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 45.59375 },
    { text: "50,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 30.59375 },
    { text: "150,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 36.15625 },
    { text: "250,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 36.15625 },
    { text: "350,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 36.15625 },
    { text: "450,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 36.15625 }
  ]
};

export function buildChart() {
  // child0 = panel0 (Lib-1_211105)
  const child0 = chart()
    .createCanvas({ width: 388, height: 139, margin: { top: 26, right: 3, bottom: 38, left: 135 } })
    .editCanvas({ plotBorder: { color: "#ddd", lineWidth: 1 } })
    .createData({ values: data })
    .filterData({ id: "frac_gt_01_0", field: "frac_counts", predicate: { op: "gt", value: 0.01 } })
    .createComputedData({ id: "is_aligned_0", as: "is_aligned", expression: { op: "eq", left: { field: "filter_reason" }, right: { constant: "aligned" } } })
    .filterData({ id: "run_0", field: "pacbioRun", oneOf: ["Lib-1_211105"] })
    .applyTextMetrics({ profile: sourceTextMetrics })
    .createBarPlot({ x: { field: "count", fieldType: "quantitative", scale: { domain: [0, 600000] } }, y: { field: "filter_reason", fieldType: "nominal", scale: { domain: ["aligned", "barcode mutation_nt_count", "gene mutation_nt_count", "query_clip5", "termini5 clip5"], paddingInner: 0.1, paddingOuter: 0.05 } }, guides: false })
    .encodeColor({ field: "is_aligned", scale: { domain: [false, true], range: ["#4c78a8", "#f58518"] }, layout: "overlay" })
    .encodeBarWidth({ band: 1 })
    .editBarMark({ stroke: false })
    .createAxes({
      x: {
        line: { color: "#888", lineWidth: 1 },
        ticksAndLabels: {
          values: [0, 100000, 200000, 300000, 400000, 500000, 600000],
          ticks: { length: 5, color: "#888", lineWidth: 1 },
          labels: { offset: 5.5, format: ",.0f", flush: true, color: "black", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, labelMap: [{ value: 100000, label: "" }, { value: 300000, label: "" }, { value: 500000, label: "" }] }
        },
        title: { text: "count", offset: 27.484375, color: "black", fontFamily: "sans-serif", fontSize: 11, fontWeight: 700 }
      },
      y: {
        line: { color: "#888", lineWidth: 1 },
        ticksAndLabels: {
          values: ["aligned", "barcode mutation_nt_count", "gene mutation_nt_count", "query_clip5", "termini5 clip5"],
          ticks: { length: 5, color: "#888", lineWidth: 1 },
          labels: { offset: 7, color: "black", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400 }
        },
        title: false
      }
    })
    .createVerticalGrid({ values: [0, 100000, 200000, 300000, 400000, 500000, 600000] })
    .editVerticalGrid({ color: "#ddd", lineWidth: 1 })
    .createTitle({ text: "Lib-1_211105", titleStyle: { fontFamily: "sans-serif", fontSize: 10 } })
    .editTitle({ align: "center", offset: -9.609375, titleStyle: { color: "black", fontWeight: 400 } });

  // child1 = panel1 (Lib-1_220124, sole boolean legend)
  const child1 = chart()
    .createCanvas({ width: 464, height: 139, margin: { top: 26, right: 79, bottom: 38, left: 135 } })
    .editCanvas({ plotBorder: { color: "#ddd", lineWidth: 1 } })
    .createData({ values: data })
    .filterData({ id: "frac_gt_01_1", field: "frac_counts", predicate: { op: "gt", value: 0.01 } })
    .createComputedData({ id: "is_aligned_1", as: "is_aligned", expression: { op: "eq", left: { field: "filter_reason" }, right: { constant: "aligned" } } })
    .filterData({ id: "run_1", field: "pacbioRun", oneOf: ["Lib-1_220124"] })
    .applyTextMetrics({ profile: sourceTextMetrics })
    .createBarPlot({ x: { field: "count", fieldType: "quantitative", scale: { domain: [0, 600000] } }, y: { field: "filter_reason", fieldType: "nominal", scale: { domain: ["aligned", "gene clip3", "gene mutation_nt_count", "query_clip5", "termini5 clip5"], paddingInner: 0.1, paddingOuter: 0.05 } }, guides: false })
    .encodeColor({ field: "is_aligned", scale: { domain: [false, true], range: ["#4c78a8", "#f58518"] }, layout: "overlay" })
    .encodeBarWidth({ band: 1 })
    .editBarMark({ stroke: false })
    .createAxes({
      x: {
        line: { color: "#888", lineWidth: 1 },
        ticksAndLabels: {
          values: [0, 100000, 200000, 300000, 400000, 500000, 600000],
          ticks: { length: 5, color: "#888", lineWidth: 1 },
          labels: { offset: 5.5, format: ",.0f", flush: true, color: "black", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, labelMap: [{ value: 100000, label: "" }, { value: 300000, label: "" }, { value: 500000, label: "" }] }
        },
        title: { text: "count", offset: 27.484375, color: "black", fontFamily: "sans-serif", fontSize: 11, fontWeight: 700 }
      },
      y: {
        line: { color: "#888", lineWidth: 1 },
        ticksAndLabels: {
          values: ["aligned", "gene clip3", "gene mutation_nt_count", "query_clip5", "termini5 clip5"],
          ticks: { length: 5, color: "#888", lineWidth: 1 },
          labels: { offset: 7, color: "black", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400 }
        },
        title: false
      }
    })
    .createVerticalGrid({ values: [0, 100000, 200000, 300000, 400000, 500000, 600000] })
    .editVerticalGrid({ color: "#ddd", lineWidth: 1 })
    .createTitle({ text: "Lib-1_220124", titleStyle: { fontFamily: "sans-serif", fontSize: 10 } })
    .editTitle({ align: "center", offset: -9.609375, titleStyle: { color: "black", fontWeight: 400 } })
    .createLegend({ titleStyle: { color: "black", fontFamily: "sans-serif", fontSize: 11, fontWeight: 700 }, labels: { color: "black", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400 }, symbol: { layers: [{ type: "swatch", width: 10, height: 10, stroke: "none", strokeWidth: 0 }] } });

  // child2 = panel2 (Lib-2_211105)
  const child2 = chart()
    .createCanvas({ width: 388, height: 139, margin: { top: 26, right: 3, bottom: 38, left: 135 } })
    .editCanvas({ plotBorder: { color: "#ddd", lineWidth: 1 } })
    .createData({ values: data })
    .filterData({ id: "frac_gt_01_2", field: "frac_counts", predicate: { op: "gt", value: 0.01 } })
    .createComputedData({ id: "is_aligned_2", as: "is_aligned", expression: { op: "eq", left: { field: "filter_reason" }, right: { constant: "aligned" } } })
    .filterData({ id: "run_2", field: "pacbioRun", oneOf: ["Lib-2_211105"] })
    .applyTextMetrics({ profile: sourceTextMetrics })
    .createBarPlot({ x: { field: "count", fieldType: "quantitative", scale: { domain: [0, 450000] } }, y: { field: "filter_reason", fieldType: "nominal", scale: { domain: ["aligned", "barcode mutation_nt_count", "gene mutation_nt_count", "query_clip5", "termini5 clip5"], paddingInner: 0.1, paddingOuter: 0.05 } }, guides: false })
    .encodeColor({ field: "is_aligned", scale: { domain: [false, true], range: ["#4c78a8", "#f58518"] }, layout: "overlay" })
    .encodeBarWidth({ band: 1 })
    .editBarMark({ stroke: false })
    .createAxes({
      x: {
        line: { color: "#888", lineWidth: 1 },
        ticksAndLabels: {
          values: [0, 50000, 100000, 150000, 200000, 250000, 300000, 350000, 400000, 450000],
          ticks: { length: 5, color: "#888", lineWidth: 1 },
          labels: { offset: 5.5, format: ",.0f", flush: true, color: "black", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, labelMap: [{ value: 50000, label: "" }, { value: 150000, label: "" }, { value: 250000, label: "" }, { value: 350000, label: "" }, { value: 450000, label: "" }] }
        },
        title: { text: "count", offset: 27.484375, color: "black", fontFamily: "sans-serif", fontSize: 11, fontWeight: 700 }
      },
      y: {
        line: { color: "#888", lineWidth: 1 },
        ticksAndLabels: {
          values: ["aligned", "barcode mutation_nt_count", "gene mutation_nt_count", "query_clip5", "termini5 clip5"],
          ticks: { length: 5, color: "#888", lineWidth: 1 },
          labels: { offset: 7, color: "black", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400 }
        },
        title: false
      }
    })
    .createVerticalGrid({ values: [0, 50000, 100000, 150000, 200000, 250000, 300000, 350000, 400000, 450000] })
    .editVerticalGrid({ color: "#ddd", lineWidth: 1 })
    .createTitle({ text: "Lib-2_211105", titleStyle: { fontFamily: "sans-serif", fontSize: 10 } })
    .editTitle({ align: "center", offset: -9.609375, titleStyle: { color: "black", fontWeight: 400 } });

  // child3 = panel3 (Lib-2_220124)
  const child3 = chart()
    .createCanvas({ width: 392, height: 139, margin: { top: 26, right: 7, bottom: 38, left: 135 } })
    .editCanvas({ plotBorder: { color: "#ddd", lineWidth: 1 } })
    .createData({ values: data })
    .filterData({ id: "frac_gt_01_3", field: "frac_counts", predicate: { op: "gt", value: 0.01 } })
    .createComputedData({ id: "is_aligned_3", as: "is_aligned", expression: { op: "eq", left: { field: "filter_reason" }, right: { constant: "aligned" } } })
    .filterData({ id: "run_3", field: "pacbioRun", oneOf: ["Lib-2_220124"] })
    .applyTextMetrics({ profile: sourceTextMetrics })
    .createBarPlot({ x: { field: "count", fieldType: "quantitative", scale: { domain: [0, 500000] } }, y: { field: "filter_reason", fieldType: "nominal", scale: { domain: ["aligned", "gene clip3", "gene mutation_nt_count", "query_clip5", "termini5 clip5"], paddingInner: 0.1, paddingOuter: 0.05 } }, guides: false })
    .encodeColor({ field: "is_aligned", scale: { domain: [false, true], range: ["#4c78a8", "#f58518"] }, layout: "overlay" })
    .encodeBarWidth({ band: 1 })
    .editBarMark({ stroke: false })
    .createAxes({
      x: {
        line: { color: "#888", lineWidth: 1 },
        ticksAndLabels: {
          values: [0, 100000, 200000, 300000, 400000, 500000],
          ticks: { length: 5, color: "#888", lineWidth: 1 },
          labels: { offset: 5.5, format: ",.0f", flush: true, color: "black", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, labelMap: [{ value: 100000, label: "" }, { value: 300000, label: "" }, { value: 500000, label: "" }] }
        },
        title: { text: "count", offset: 27.484375, color: "black", fontFamily: "sans-serif", fontSize: 11, fontWeight: 700 }
      },
      y: {
        line: { color: "#888", lineWidth: 1 },
        ticksAndLabels: {
          values: ["aligned", "gene clip3", "gene mutation_nt_count", "query_clip5", "termini5 clip5"],
          ticks: { length: 5, color: "#888", lineWidth: 1 },
          labels: { offset: 7, color: "black", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400 }
        },
        title: false
      }
    })
    .createVerticalGrid({ values: [0, 100000, 200000, 300000, 400000, 500000] })
    .editVerticalGrid({ color: "#ddd", lineWidth: 1 })
    .createTitle({ text: "Lib-2_220124", titleStyle: { fontFamily: "sans-serif", fontSize: 10 } })
    .editTitle({ align: "center", offset: -9.609375, titleStyle: { color: "black", fontWeight: 400 } });

  // child4 = panel4 (Lib-3_211105, all x labels visible)
  const child4 = chart()
    .createCanvas({ width: 388, height: 139, margin: { top: 26, right: 3, bottom: 38, left: 135 } })
    .editCanvas({ plotBorder: { color: "#ddd", lineWidth: 1 } })
    .createData({ values: data })
    .filterData({ id: "frac_gt_01_4", field: "frac_counts", predicate: { op: "gt", value: 0.01 } })
    .createComputedData({ id: "is_aligned_4", as: "is_aligned", expression: { op: "eq", left: { field: "filter_reason" }, right: { constant: "aligned" } } })
    .filterData({ id: "run_4", field: "pacbioRun", oneOf: ["Lib-3_211105"] })
    .applyTextMetrics({ profile: sourceTextMetrics })
    .createBarPlot({ x: { field: "count", fieldType: "quantitative", scale: { domain: [0, 280000] } }, y: { field: "filter_reason", fieldType: "nominal", scale: { domain: ["aligned", "barcode mutation_nt_count", "gene mutation_nt_count", "query_clip5", "termini5 clip5"], paddingInner: 0.1, paddingOuter: 0.05 } }, guides: false })
    .encodeColor({ field: "is_aligned", scale: { domain: [false, true], range: ["#4c78a8", "#f58518"] }, layout: "overlay" })
    .encodeBarWidth({ band: 1 })
    .editBarMark({ stroke: false })
    .createAxes({
      x: {
        line: { color: "#888", lineWidth: 1 },
        ticksAndLabels: {
          values: [0, 50000, 100000, 150000, 200000, 250000],
          ticks: { length: 5, color: "#888", lineWidth: 1 },
          labels: { offset: 5.5, format: ",.0f", flush: true, color: "black", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400 }
        },
        title: { text: "count", offset: 27.484375, color: "black", fontFamily: "sans-serif", fontSize: 11, fontWeight: 700 }
      },
      y: {
        line: { color: "#888", lineWidth: 1 },
        ticksAndLabels: {
          values: ["aligned", "barcode mutation_nt_count", "gene mutation_nt_count", "query_clip5", "termini5 clip5"],
          ticks: { length: 5, color: "#888", lineWidth: 1 },
          labels: { offset: 7, color: "black", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400 }
        },
        title: false
      }
    })
    .createVerticalGrid({ values: [0, 50000, 100000, 150000, 200000, 250000] })
    .editVerticalGrid({ color: "#ddd", lineWidth: 1 })
    .createTitle({ text: "Lib-3_211105", titleStyle: { fontFamily: "sans-serif", fontSize: 10 } })
    .editTitle({ align: "center", offset: -9.609375, titleStyle: { color: "black", fontWeight: 400 } });

  // child5 = panel5 (Lib-3_220124)
  const child5 = chart()
    .createCanvas({ width: 392, height: 139, margin: { top: 26, right: 7, bottom: 38, left: 135 } })
    .editCanvas({ plotBorder: { color: "#ddd", lineWidth: 1 } })
    .createData({ values: data })
    .filterData({ id: "frac_gt_01_5", field: "frac_counts", predicate: { op: "gt", value: 0.01 } })
    .createComputedData({ id: "is_aligned_5", as: "is_aligned", expression: { op: "eq", left: { field: "filter_reason" }, right: { constant: "aligned" } } })
    .filterData({ id: "run_5", field: "pacbioRun", oneOf: ["Lib-3_220124"] })
    .applyTextMetrics({ profile: sourceTextMetrics })
    .createBarPlot({ x: { field: "count", fieldType: "quantitative", scale: { domain: [0, 300000] } }, y: { field: "filter_reason", fieldType: "nominal", scale: { domain: ["aligned", "gene clip3", "gene mutation_nt_count", "query_clip5", "termini5 clip5"], paddingInner: 0.1, paddingOuter: 0.05 } }, guides: false })
    .encodeColor({ field: "is_aligned", scale: { domain: [false, true], range: ["#4c78a8", "#f58518"] }, layout: "overlay" })
    .encodeBarWidth({ band: 1 })
    .editBarMark({ stroke: false })
    .createAxes({
      x: {
        line: { color: "#888", lineWidth: 1 },
        ticksAndLabels: {
          values: [0, 50000, 100000, 150000, 200000, 250000, 300000],
          ticks: { length: 5, color: "#888", lineWidth: 1 },
          labels: { offset: 5.5, format: ",.0f", flush: true, color: "black", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, labelMap: [{ value: 50000, label: "" }, { value: 150000, label: "" }, { value: 250000, label: "" }] }
        },
        title: { text: "count", offset: 27.484375, color: "black", fontFamily: "sans-serif", fontSize: 11, fontWeight: 700 }
      },
      y: {
        line: { color: "#888", lineWidth: 1 },
        ticksAndLabels: {
          values: ["aligned", "gene clip3", "gene mutation_nt_count", "query_clip5", "termini5 clip5"],
          ticks: { length: 5, color: "#888", lineWidth: 1 },
          labels: { offset: 7, color: "black", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400 }
        },
        title: false
      }
    })
    .createVerticalGrid({ values: [0, 50000, 100000, 150000, 200000, 250000, 300000] })
    .editVerticalGrid({ color: "#ddd", lineWidth: 1 })
    .createTitle({ text: "Lib-3_220124", titleStyle: { fontFamily: "sans-serif", fontSize: 10 } })
    .editTitle({ align: "center", offset: -9.609375, titleStyle: { color: "black", fontWeight: 400 } });

  // child6 = panel6 (Lib-4_211105, six categories, bandwidth 11.25)
  const child6 = chart()
    .createCanvas({ width: 388, height: 139, margin: { top: 26, right: 3, bottom: 38, left: 135 } })
    .editCanvas({ plotBorder: { color: "#ddd", lineWidth: 1 } })
    .createData({ values: data })
    .filterData({ id: "frac_gt_01_6", field: "frac_counts", predicate: { op: "gt", value: 0.01 } })
    .createComputedData({ id: "is_aligned_6", as: "is_aligned", expression: { op: "eq", left: { field: "filter_reason" }, right: { constant: "aligned" } } })
    .filterData({ id: "run_6", field: "pacbioRun", oneOf: ["Lib-4_211105"] })
    .applyTextMetrics({ profile: sourceTextMetrics })
    .createBarPlot({ x: { field: "count", fieldType: "quantitative", scale: { domain: [0, 500000] } }, y: { field: "filter_reason", fieldType: "nominal", scale: { domain: ["aligned", "barcode mutation_nt_count", "gene clip3", "gene mutation_nt_count", "query_clip5", "termini5 clip5"], paddingInner: 0.1, paddingOuter: 0.05 } }, guides: false })
    .encodeColor({ field: "is_aligned", scale: { domain: [false, true], range: ["#4c78a8", "#f58518"] }, layout: "overlay" })
    .encodeBarWidth({ band: 1 })
    .editBarMark({ stroke: false })
    .createAxes({
      x: {
        line: { color: "#888", lineWidth: 1 },
        ticksAndLabels: {
          values: [0, 100000, 200000, 300000, 400000, 500000],
          ticks: { length: 5, color: "#888", lineWidth: 1 },
          labels: { offset: 5.5, format: ",.0f", flush: true, color: "black", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, labelMap: [{ value: 100000, label: "" }, { value: 300000, label: "" }, { value: 500000, label: "" }] }
        },
        title: { text: "count", offset: 27.484375, color: "black", fontFamily: "sans-serif", fontSize: 11, fontWeight: 700 }
      },
      y: {
        line: { color: "#888", lineWidth: 1 },
        ticksAndLabels: {
          values: ["aligned", "barcode mutation_nt_count", "gene clip3", "gene mutation_nt_count", "query_clip5", "termini5 clip5"],
          ticks: { length: 5, color: "#888", lineWidth: 1 },
          labels: { offset: 7, color: "black", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400 }
        },
        title: false
      }
    })
    .createVerticalGrid({ values: [0, 100000, 200000, 300000, 400000, 500000] })
    .editVerticalGrid({ color: "#ddd", lineWidth: 1 })
    .createTitle({ text: "Lib-4_211105", titleStyle: { fontFamily: "sans-serif", fontSize: 10 } })
    .editTitle({ align: "center", offset: -9.609375, titleStyle: { color: "black", fontWeight: 400 } });

  // child7 = panel7 (Lib-4_220124)
  const child7 = chart()
    .createCanvas({ width: 392, height: 139, margin: { top: 26, right: 7, bottom: 38, left: 135 } })
    .editCanvas({ plotBorder: { color: "#ddd", lineWidth: 1 } })
    .createData({ values: data })
    .filterData({ id: "frac_gt_01_7", field: "frac_counts", predicate: { op: "gt", value: 0.01 } })
    .createComputedData({ id: "is_aligned_7", as: "is_aligned", expression: { op: "eq", left: { field: "filter_reason" }, right: { constant: "aligned" } } })
    .filterData({ id: "run_7", field: "pacbioRun", oneOf: ["Lib-4_220124"] })
    .applyTextMetrics({ profile: sourceTextMetrics })
    .createBarPlot({ x: { field: "count", fieldType: "quantitative", scale: { domain: [0, 500000] } }, y: { field: "filter_reason", fieldType: "nominal", scale: { domain: ["aligned", "gene clip3", "gene mutation_nt_count", "query_clip5", "termini5 clip5"], paddingInner: 0.1, paddingOuter: 0.05 } }, guides: false })
    .encodeColor({ field: "is_aligned", scale: { domain: [false, true], range: ["#4c78a8", "#f58518"] }, layout: "overlay" })
    .encodeBarWidth({ band: 1 })
    .editBarMark({ stroke: false })
    .createAxes({
      x: {
        line: { color: "#888", lineWidth: 1 },
        ticksAndLabels: {
          values: [0, 100000, 200000, 300000, 400000, 500000],
          ticks: { length: 5, color: "#888", lineWidth: 1 },
          labels: { offset: 5.5, format: ",.0f", flush: true, color: "black", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, labelMap: [{ value: 100000, label: "" }, { value: 300000, label: "" }, { value: 500000, label: "" }] }
        },
        title: { text: "count", offset: 27.484375, color: "black", fontFamily: "sans-serif", fontSize: 11, fontWeight: 700 }
      },
      y: {
        line: { color: "#888", lineWidth: 1 },
        ticksAndLabels: {
          values: ["aligned", "gene clip3", "gene mutation_nt_count", "query_clip5", "termini5 clip5"],
          ticks: { length: 5, color: "#888", lineWidth: 1 },
          labels: { offset: 7, color: "black", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400 }
        },
        title: false
      }
    })
    .createVerticalGrid({ values: [0, 100000, 200000, 300000, 400000, 500000] })
    .editVerticalGrid({ color: "#ddd", lineWidth: 1 })
    .createTitle({ text: "Lib-4_220124", titleStyle: { fontFamily: "sans-serif", fontSize: 10 } })
    .editTitle({ align: "center", offset: -9.609375, titleStyle: { color: "black", fontWeight: 400 } });

  const row0 = hconcat({ programs: [{ id: "panel0", program: child0 }, { id: "panel1", program: child1 }], gap: 0, align: "start" });
  const row1 = hconcat({ programs: [{ id: "panel2", program: child2 }, { id: "panel3", program: child3 }], gap: 0, align: "start" });
  const row2 = hconcat({ programs: [{ id: "panel4", program: child4 }, { id: "panel5", program: child5 }], gap: 0, align: "start" });
  const row3 = hconcat({ programs: [{ id: "panel6", program: child6 }, { id: "panel7", program: child7 }], gap: 0, align: "start" });

  return vconcat({ programs: [{ id: "row0", program: row0 }, { id: "row1", program: row1 }, { id: "row2", program: row2 }, { id: "row3", program: row3 }], gap: 10, align: "start" });
}