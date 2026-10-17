// DOCS: doc-f1f94dec7d5389ca (hconcat composition), doc-6c2c08869091f6a0 (createBarPlot)
import { chart, hconcat } from "ggaction";
// DOCS: frozen shared import
import data from "./data.json";

// DOCS: doc-f1f94dec7d5389ca — each child is a complete materialized program
export function buildChart() {
const child0 = chart()
  // DOCS: createCanvas uses width,height,margin only; inner plot implied (392-135-7=250, 140-27-38=75)
  .createCanvas({ width: 392, height: 140, margin: { top: 27, right: 7, bottom: 38, left: 135 } })
  // DOCS: source plotBorder belongs to the separate public editCanvas
  .editCanvas({ plotBorder: { color: "#ddd", lineWidth: 1 } })
  // DOCS: exact source measured glyph widths prevent false native overlap fallback
  .applyTextMetrics({
    profile: {
      schemaVersion: 1,
      id: "source1425-actual-axis-widths",
      measurements: [
        { text: "0", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 5.5625 },
        { text: "200,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 36.15625 },
        { text: "400,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 36.15625 },
        { text: "600,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 36.15625 },
        { text: "800,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 36.15625 },
        { text: "1,000,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 44.5 },
        { text: "aligned", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 32.265625 },
        { text: "barcode mutation_nt_count", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 121.203125 },
        { text: "gene clip3", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 45.59375 },
        { text: "gene mutation_nt_count", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 107.3125 },
        { text: "query_clip3", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 51.15625 },
        { text: "query_clip5", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 51.15625 },
        { text: "termini3 mutation_nt_count", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 120.625 },
        { text: "termini5 clip5", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 58.921875 }
      ]
    }
  })
  // DOCS: every original raw row preserved via frozen shared import
    .createData({ values: data })
    // DOCS: source transform order — filter frac_counts > 0.01 first
    .filterData({ id: "frac_gt_001_A", field: "frac_counts", predicate: { op: "gt", value: 0.01 } })
    // DOCS: fresh derived boolean column, original field untouched
    .createComputedData({
      id: "is_aligned_A",
      as: "is_aligned",
      expression: { op: "eq", left: { field: "filter_reason" }, right: { constant: "aligned" } }
    })
    // DOCS: exact source run filter with oneOf primary mode
    .filterData({ id: "run_A_220708", field: "pacbioRun", oneOf: ["A_220708"] })
    // DOCS: doc-6c2c08869091f6a0 — bar facade binds current filtered dataset; guides disabled
    .createBarPlot({ x: { field: "count" }, y: { field: "filter_reason" }, guides: false })
    // DOCS: exact source x domain
    .editXScale({ domain: [0, 1100000] })
    // DOCS: source y band domain with padding
    .editYScale({
      domain: ["aligned", "barcode mutation_nt_count", "gene clip3", "gene mutation_nt_count", "query_clip3", "query_clip5", "termini3 mutation_nt_count", "termini5 clip5"],
      paddingInner: 0.1,
      paddingOuter: 0.05
    })
    // DOCS: color channel with source ordinal domain/range and overlay layout
    .encodeColor({
      field: "is_aligned",
      layout: "overlay",
      scale: { type: "ordinal", domain: [false, true], range: ["#4c78a8", "#f58518"] }
    })
    // DOCS: band:1 uses the already-resolved band width (8.4375), never the full slot
    .encodeBarWidth({ band: 1 })
    // DOCS: source bars carry no stroke
    .editBarMark({ stroke: false })
    // DOCS: complete guides birth — axes, vertical grid, no legend
    .createAxes({
      x: {
          line: { color: "#888", lineWidth: 1 },
          ticksAndLabels: {
            values: [0, 200000, 400000, 600000, 800000, 1000000],
            ticks: { color: "#888", lineWidth: 1, length: 5 },
            labels: {
              offset: 5.5,
              format: ",.0f",
              color: "black",
              fontSize: 10,
              fontFamily: "sans-serif",
              fontWeight: 400,
              flush: true,
              overlap: "error"
            }
          },
          title: {
            text: "count",
            at: "center",
            offset: 27.484375,
            color: "black",
            fontSize: 11,
            fontFamily: "sans-serif",
            fontWeight: 700
          }
        },
        y: {
          line: { color: "#888", lineWidth: 1 },
          ticksAndLabels: {
            values: ["aligned", "barcode mutation_nt_count", "gene clip3", "gene mutation_nt_count", "query_clip3", "query_clip5", "termini3 mutation_nt_count", "termini5 clip5"],
            ticks: { color: "#888", lineWidth: 1, length: 5 },
            labels: {
              offset: 7,
              color: "black",
              fontSize: 10,
              fontFamily: "sans-serif",
              fontWeight: 400,
              overlap: "allow"
            }
          },
          title: false
        }
    })
    .createGuides({
      grid: {
        horizontal: false,
        vertical: {
          values: [0, 200000, 400000, 600000, 800000, 1000000],
          color: "#ddd",
          lineWidth: 1
        }
      },
      legend: false
    })
    // DOCS: source header paint at creation; measured final offset via editTitle
    .createTitle({
      text: "A_220708",
      offset: 0,
      titleStyle: { fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, color: "black" }
    })
    .editTitle({ align: "center", offset: -9.609375 });

const child1 = chart()
  .createCanvas({ width: 464, height: 140, margin: { top: 27, right: 79, bottom: 38, left: 135 } })
  .editCanvas({ plotBorder: { color: "#ddd", lineWidth: 1 } })
  .applyTextMetrics({
    profile: {
      schemaVersion: 1,
      id: "source1425-actual-axis-widths",
      measurements: [
        { text: "0", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 5.5625 },
        { text: "200,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 36.15625 },
        { text: "400,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 36.15625 },
        { text: "600,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 36.15625 },
        { text: "800,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 36.15625 },
        { text: "1,000,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 44.5 },
        { text: "aligned", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 32.265625 },
        { text: "barcode mutation_nt_count", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 121.203125 },
        { text: "gene clip3", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 45.59375 },
        { text: "gene mutation_nt_count", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 107.3125 },
        { text: "query_clip3", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 51.15625 },
        { text: "query_clip5", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 51.15625 },
        { text: "termini3 mutation_nt_count", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 120.625 },
        { text: "termini5 clip5", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 58.921875 }
      ]
    }
  })
    .createData({ values: data })
    .filterData({ id: "frac_gt_001_B", field: "frac_counts", predicate: { op: "gt", value: 0.01 } })
    .createComputedData({
      id: "is_aligned_B",
      as: "is_aligned",
      expression: { op: "eq", left: { field: "filter_reason" }, right: { constant: "aligned" } }
    })
    .filterData({ id: "run_B_220708", field: "pacbioRun", oneOf: ["B_220708"] })
    .createBarPlot({ x: { field: "count" }, y: { field: "filter_reason" }, guides: false })
    // DOCS: exact source x domain
    .editXScale({ domain: [0, 1000000] })
    .editYScale({
      domain: ["aligned", "barcode mutation_nt_count", "gene clip3", "gene mutation_nt_count", "query_clip3", "query_clip5", "termini3 mutation_nt_count", "termini5 clip5"],
      paddingInner: 0.1,
      paddingOuter: 0.05
    })
    .encodeColor({
      field: "is_aligned",
      layout: "overlay",
      scale: { type: "ordinal", domain: [false, true], range: ["#4c78a8", "#f58518"] }
    })
    .encodeBarWidth({ band: 1 })
    .editBarMark({ stroke: false })
    // DOCS: G1 integrates all source guide policies (axes, vertical grid, legend swatch layers)
    .createAxes({
      x: {
          line: { color: "#888", lineWidth: 1 },
          ticksAndLabels: {
            values: [0, 200000, 400000, 600000, 800000, 1000000],
            ticks: { color: "#888", lineWidth: 1, length: 5 },
            labels: {
              offset: 5.5,
              format: ",.0f",
              color: "black",
              fontSize: 10,
              fontFamily: "sans-serif",
              fontWeight: 400,
              flush: true,
              overlap: "error",
              // DOCS: exact typed raw numeric keys preserve source-culled labels only
              labelMap: [
                { value: 200000, label: "" },
                { value: 600000, label: "" },
                { value: 1000000, label: "" }
              ]
            }
          },
          title: {
            text: "count",
            at: "center",
            offset: 27.484375,
            color: "black",
            fontSize: 11,
            fontFamily: "sans-serif",
            fontWeight: 700
          }
        },
        y: {
          line: { color: "#888", lineWidth: 1 },
          ticksAndLabels: {
            values: ["aligned", "barcode mutation_nt_count", "gene clip3", "gene mutation_nt_count", "query_clip3", "query_clip5", "termini3 mutation_nt_count", "termini5 clip5"],
            ticks: { color: "#888", lineWidth: 1, length: 5 },
            labels: {
              offset: 7,
              color: "black",
              fontSize: 10,
              fontFamily: "sans-serif",
              fontWeight: 400,
              overlap: "allow"
            }
          },
          title: false
        }
    })
    .createGuides({
      grid: {
        horizontal: false,
        vertical: {
          values: [0, 200000, 400000, 600000, 800000, 1000000],
          color: "#ddd",
          lineWidth: 1
        }
      },
      // DOCS: inferred source field title is_aligned with layered swatch symbol
      legend: {
        titleStyle: { color: "black", fontSize: 11, fontWeight: 700, fontFamily: "sans-serif" },
        labels: { color: "black", fontSize: 10, fontFamily: "sans-serif" },
        symbol: { layers: [{ type: "swatch", width: 10, height: 10, stroke: "none", strokeWidth: 0 }] }
      }
    })
    .createTitle({
      text: "B_220708",
      offset: 0,
      titleStyle: { fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, color: "black" }
    })
    .editTitle({ align: "center", offset: -9.609375 });

  // DOCS: doc-f1f94dec7d5389ca — documented hconcat with measured source gap and align
  return hconcat({
    programs: [
      { id: "panel0", program: child0 },
      { id: "panel1", program: child1 }
    ],
    gap: 9,
    align: "start"
  });
}
