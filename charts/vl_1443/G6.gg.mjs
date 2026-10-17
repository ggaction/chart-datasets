// G1 whole-parent program: two-panel horizontal concat, exact source reproduction.
// DOCS: doc-6c2c08869091f6a0 (createBarPlot), doc-fc11e9fb291905d1 (bar range/layout),
// DOCS: doc-333a87e52954985d (bar facade pattern), doc-cbebf93910cdde5e (composition).

import { chart, hconcat } from "ggaction";
import data from "./data.json";

export function buildChart() {
  // ---------- panel0: Lib-1_220629 ----------
  const child0 = chart()
    // DOCS: doc-fc11e9fb291905d1 — canvas margins resolve the inner plot (250x75)
    .createCanvas({ width: 392, height: 139, margin: { top: 26, right: 7, bottom: 38, left: 135 } })
    // DOCS: doc-6c2c08869091f6a0 — source plot border paint lives on editCanvas, not createCanvas
    .editCanvas({ plotBorder: { color: "#ddd", lineWidth: 1 } })
    .applyTextMetrics({ profile: { schemaVersion: 1, id: "source1443-actual-axis-widths", measurements: [ { text: "0", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 5.5625 }, { text: "500,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 36.15625 }, { text: "1,000,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 44.5 }, { text: "1,500,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 44.5 }, { text: "2,000,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 44.5 }, { text: "2,500,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 44.5 }, { text: "aligned", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 32.265625 }, { text: "barcode mutation_nt_count", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 121.203125 }, { text: "gene mutation_nt_count", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 107.3125 }, { text: "3,000,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 44.5 }, { text: "3,500,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 44.5 } ] } })
    .createData({ values: data })
    // source transform: filter frac_counts > 0.01
    .filterData({ id: "frac0", field: "frac_counts", predicate: { op: "gt", value: 0.01 } })
    // source transform: filter pacbioRun equal Lib-1_220629
    .filterData({ id: "run0", field: "pacbioRun", oneOf: ["Lib-1_220629"] })
    // source calculate: is_aligned = filter_reason === 'aligned'
    .createComputedData({
      id: "align0",
      as: "is_aligned",
      expression: { op: "eq", left: { field: "filter_reason" }, right: { constant: "aligned" } }
    })
    // DOCS: doc-6c2c08869091f6a0 — bar facade, guides disabled for explicit source guides
    .createBarPlot({
      x: { field: "count", fieldType: "quantitative" },
      y: { field: "filter_reason", fieldType: "nominal" },
      guides: false
    })
    // preserve exact source scale domain before any guides
    .editXScale({ domain: [0, 2800000] })
    .editYScale({
      domain: ["aligned", "barcode mutation_nt_count", "gene mutation_nt_count"],
      paddingInner: 0.1,
      paddingOuter: 0.05
    })
    // DOCS: doc-6c2c08869091f6a0 — source color scale false,true over overlay layout
    .encodeColor({ field: "is_aligned", layout: "overlay" })
    .editColorScale({ domain: [false, true], range: ["#4c78a8", "#f58518"] })
    // full band width bars
    .encodeBarWidth({ band: 1 })
    // source bars have no outline
    .editBarMark({ stroke: false })
    // DOCS: doc-cbebf93910cdde5e — source vertical grid, both children identical paint
    .createVerticalGrid({ lineWidth: 1 })
    .editVerticalGrid({ color: "#ddd" })
    // DOCS: doc-6c2c08869091f6a0 — explicit source-bound axes from referenceAxisSpecs
    .createXAxis({
      line: { lineWidth: 1 },
      ticksAndLabels: {
        values: [0, 500000, 1000000, 1500000, 2000000, 2500000],
        ticks: { length: 5, lineWidth: 1 },
        labels: {
          offset: 5.5,
          fontSize: 10,
          fontFamily: "sans-serif",
          flush: true
        }
      },
      title: { text: "count", at: "center", offset: 27.484375, fontSize: 11, fontFamily: "sans-serif" }
    })
    .editXAxisLine({ color: "#888" })
    .editXAxisTicksAndLabels({ ticks: { color: "#888" }, labels: { color: "black", fontWeight: "normal", format: ",.0f" } })
    .editXAxisTitle({ color: "black", fontWeight: 700 })
    .createYAxis({
      line: { lineWidth: 1 },
      ticksAndLabels: {
        values: ["aligned", "barcode mutation_nt_count", "gene mutation_nt_count"],
        ticks: { length: 5, lineWidth: 1 },
        labels: {
          offset: 7,
          fontSize: 10,
          fontFamily: "sans-serif"
        }
      },
      title: false
    })
    .editYAxisLine({ color: "#888" })
    .editYAxisTicksAndLabels({ ticks: { color: "#888" }, labels: { color: "black", fontWeight: "normal" } })
    // DOCS: doc-cbebf93910cdde5e — header birth: font exists at creation, layout after
    .createTitle({ text: "Lib-1_220629", offset: 0, titleStyle: { fontSize: 10, fontWeight: 400, color: "black" } })
    .editTitle({ align: "center", offset: -9.609375 });

  // ---------- panel1: Lib-2_220629 ----------
  const child1 = chart()
    .createCanvas({ width: 464, height: 139, margin: { top: 26, right: 79, bottom: 38, left: 135 } })
    .editCanvas({ plotBorder: { color: "#ddd", lineWidth: 1 } })
    .applyTextMetrics({ profile: { schemaVersion: 1, id: "source1443-actual-axis-widths", measurements: [ { text: "0", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 5.5625 }, { text: "500,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 36.15625 }, { text: "1,000,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 44.5 }, { text: "1,500,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 44.5 }, { text: "2,000,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 44.5 }, { text: "2,500,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 44.5 }, { text: "aligned", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 32.265625 }, { text: "barcode mutation_nt_count", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 121.203125 }, { text: "gene mutation_nt_count", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 107.3125 }, { text: "3,000,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 44.5 }, { text: "3,500,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 44.5 } ] } })
    .createData({ values: data })
    .filterData({ id: "frac1", field: "frac_counts", predicate: { op: "gt", value: 0.01 } })
    .filterData({ id: "run1", field: "pacbioRun", oneOf: ["Lib-2_220629"] })
    .createComputedData({
      id: "align1",
      as: "is_aligned",
      expression: { op: "eq", left: { field: "filter_reason" }, right: { constant: "aligned" } }
    })
    .createBarPlot({
      x: { field: "count", fieldType: "quantitative" },
      y: { field: "filter_reason", fieldType: "nominal" },
      guides: false
    })
    .editXScale({ domain: [0, 3500000] })
    .editYScale({
      domain: ["aligned", "barcode mutation_nt_count", "gene mutation_nt_count"],
      paddingInner: 0.1,
      paddingOuter: 0.05
    })
    .encodeColor({ field: "is_aligned", layout: "overlay" })
    .editColorScale({ domain: [false, true], range: ["#4c78a8", "#f58518"] })
    .encodeBarWidth({ band: 1 })
    .editBarMark({ stroke: false })
    .createVerticalGrid({ lineWidth: 1 })
    .editVerticalGrid({ color: "#ddd" })
    .createXAxis({
      line: { lineWidth: 1 },
      ticksAndLabels: {
        values: [0, 500000, 1000000, 1500000, 2000000, 2500000, 3000000, 3500000],
        ticks: { length: 5, lineWidth: 1 },
        labels: {
          offset: 5.5,
          fontSize: 10,
          fontFamily: "sans-serif",
          flush: true,
          // DOCS: doc-cbebf93910cdde5e — source-culled labels kept as raw ticks with empty paint
          labelMap: [
            { value: 500000, label: "" },
            { value: 1500000, label: "" },
            { value: 2500000, label: "" },
            { value: 3500000, label: "" }
          ]
        }
      },
      title: { text: "count", at: "center", offset: 27.484375, fontSize: 11, fontFamily: "sans-serif" }
    })
    .editXAxisLine({ color: "#888" })
    .editXAxisTicksAndLabels({ ticks: { color: "#888" }, labels: { color: "black", fontWeight: "normal", format: ",.0f" } })
    .editXAxisTitle({ color: "black", fontWeight: 700 })
    .createYAxis({
      line: { lineWidth: 1 },
      ticksAndLabels: {
        values: ["aligned", "barcode mutation_nt_count", "gene mutation_nt_count"],
        ticks: { length: 5, lineWidth: 1 },
        labels: {
          offset: 7,
          fontSize: 10,
          fontFamily: "sans-serif"
        }
      },
      title: false
    })
    .editYAxisLine({ color: "#888" })
    .editYAxisTicksAndLabels({ ticks: { color: "#888" }, labels: { color: "black", fontWeight: "normal" } })
    // DOCS: doc-6c2c08869091f6a0 — panel1-only source categorical legend with measured fonts
    .createLegend({
      titleStyle: { fontSize: 11, fontWeight: 700, color: "black" },
      labels: { fontSize: 10, color: "black" },
      symbol: { layers: [{ type: "swatch", width: 10, height: 10, stroke: "none", strokeWidth: 0 }] }
    })
    .createTitle({ text: "Lib-2_220629", offset: 0, titleStyle: { fontSize: 10, fontWeight: 400, color: "black" } })
    .editTitle({ align: "center", offset: -9.609375 });

  // DOCS: doc-cbebf93910cdde5e — parent hconcat composition, measured gap and align
  return hconcat({
    programs: [
      { id: "panel0", program: child0 },
      { id: "panel1", program: child1 }
    ],
    gap: 9,
    align: "start"
  });
}