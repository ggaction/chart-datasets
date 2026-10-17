// G1 whole-parent program: four facet panels assembled as hconcat rows inside one vconcat root.
// DOCS: doc-f1f94dec7d5389ca (Composition Recipe — hconcat/vconcat child assembly)
// DOCS: doc-6c2c08869091f6a0 (createBarPlot — horizontal bars, width band fraction, guides:false)
// DOCS: doc-fc11e9fb291905d1 (createBarPlot — quantitative x + categorical y orientation inference)
import { chart, hconcat, vconcat } from "ggaction";
import data from "./data.json";

export function buildChart() {
  // ---- panel0: LibA_211105 ----
  // Stage family: canvas + measured source border (editCanvas owns plotBorder, not createCanvas).
  const child0 = chart()
    .createCanvas({ width: 383, height: 139, margin: { top: 26, right: 7, bottom: 38, left: 126 } })
    .editCanvas({ plotBorder: { color: "#ddd", lineWidth: 1 } })
    // Stage family: frozen shared data + exact source partition filter.
    .createData({ values: data })
    .filterData({ id: "filter0", field: "pacbioRun", oneOf: ["LibA_211105"] })
    // Measured source glyph widths guard native flush/overlap checks.
    .applyTextMetrics({
      profile: {
        schemaVersion: 1,
        id: "vl_1422-panel0-actual-source-axis-widths",
        measurements: [
          { text: "0", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 5.5625 },
          { text: "5,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 25.03125 },
          { text: "10,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 30.59375 },
          { text: "15,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 30.59375 },
          { text: "20,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 30.59375 },
          { text: "25,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 30.59375 },
          { text: "aligned PacBio_amplicon", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 112.296875 },
          { text: "filtered PacBio_amplicon", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 110.0625 },
          { text: "unmapped", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 47.265625 }
        ]
      }
    })
    // Stage family: bar facade with explicit source x domain preserved exactly.
    .createBarPlot({ x: "count", y: "category", guides: false })
    .editXScale({ domain: [0, 28000] })
    .editYScale({ paddingInner: 0.1, paddingOuter: 0.05 })
    // Source resolved band width 22.5 already includes .1/.05 padding: band:1 uses it directly.
    .encodeBarWidth({ band: 1 })
    .editBarMark({ fill: "#4c78a8", stroke: false })
    // Stage family: vertical grid at actual source x tick values (#ddd, width 1).
    .createVerticalGrid({ values: [0, 5000, 10000, 15000, 20000, 25000], color: "#ddd", lineWidth: 1 })
    // Stage family: complete paired axes — domain line, ticks and labels, bold "count" title.
    .createXAxis({
      line: { color: "#888", lineWidth: 1 },
      ticksAndLabels: {
        values: [0, 5000, 10000, 15000, 20000, 25000],
        ticks: { color: "#888", lineWidth: 1, length: 5 },
        labels: { fontSize: 10, fontFamily: "sans-serif", fontWeight: 400, color: "black", offset: 5.5, format: ",.0f", flush: true }
      },
      title: { text: "count", fontSize: 11, fontWeight: 700, fontFamily: "sans-serif", color: "black", offset: 27.484375 }
    })
    .createYAxis({
      line: { color: "#888", lineWidth: 1 },
      ticksAndLabels: {
        values: ["aligned PacBio_amplicon", "filtered PacBio_amplicon", "unmapped"],
        ticks: { color: "#888", lineWidth: 1, length: 5 },
        labels: { fontSize: 10, fontFamily: "sans-serif", fontWeight: 400, color: "black", offset: 7 }
      },
      title: false
    })
    // Stage family: cell header title, 10px/400, safe birth then measured alignment/offset.
    .createTitle({ text: "LibA_211105", offset: 0, titleStyle: { fontSize: 10, fontWeight: 400, fontFamily: "sans-serif", color: "black" } })
    .editTitle({ align: "center", offset: -9.609375 });

  // ---- panel1: LibA_220124 ----
  const child1 = chart()
    .createCanvas({ width: 383, height: 139, margin: { top: 26, right: 7, bottom: 38, left: 126 } })
    .editCanvas({ plotBorder: { color: "#ddd", lineWidth: 1 } })
    .createData({ values: data })
    .filterData({ id: "filter1", field: "pacbioRun", oneOf: ["LibA_220124"] })
    .applyTextMetrics({
      profile: {
        schemaVersion: 1,
        id: "vl_1422-panel1-actual-source-axis-widths",
        measurements: [
          { text: "0", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 5.5625 },
          { text: "5,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 25.03125 },
          { text: "10,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 30.59375 },
          { text: "15,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 30.59375 },
          { text: "20,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 30.59375 },
          { text: "25,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 30.59375 },
          { text: "aligned PacBio_amplicon", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 112.296875 },
          { text: "filtered PacBio_amplicon", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 110.0625 },
          { text: "unmapped", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 47.265625 }
        ]
      }
    })
    .createBarPlot({ x: "count", y: "category", guides: false })
    .editXScale({ domain: [0, 28000] })
    .editYScale({ paddingInner: 0.1, paddingOuter: 0.05 })
    .encodeBarWidth({ band: 1 })
    .editBarMark({ fill: "#4c78a8", stroke: false })
    .createVerticalGrid({ values: [0, 5000, 10000, 15000, 20000, 25000], color: "#ddd", lineWidth: 1 })
    .createXAxis({
      line: { color: "#888", lineWidth: 1 },
      ticksAndLabels: {
        values: [0, 5000, 10000, 15000, 20000, 25000],
        ticks: { color: "#888", lineWidth: 1, length: 5 },
        labels: { fontSize: 10, fontFamily: "sans-serif", fontWeight: 400, color: "black", offset: 5.5, format: ",.0f", flush: true }
      },
      title: { text: "count", fontSize: 11, fontWeight: 700, fontFamily: "sans-serif", color: "black", offset: 27.484375 }
    })
    .createYAxis({
      line: { color: "#888", lineWidth: 1 },
      ticksAndLabels: {
        values: ["aligned PacBio_amplicon", "filtered PacBio_amplicon", "unmapped"],
        ticks: { color: "#888", lineWidth: 1, length: 5 },
        labels: { fontSize: 10, fontFamily: "sans-serif", fontWeight: 400, color: "black", offset: 7 }
      },
      title: false
    })
    .createTitle({ text: "LibA_220124", offset: 0, titleStyle: { fontSize: 10, fontWeight: 400, fontFamily: "sans-serif", color: "black" } })
    .editTitle({ align: "center", offset: -9.609375 });

  // ---- panel2: LibB_211105 ----
  const child2 = chart()
    .createCanvas({ width: 383, height: 139, margin: { top: 26, right: 7, bottom: 38, left: 126 } })
    .editCanvas({ plotBorder: { color: "#ddd", lineWidth: 1 } })
    .createData({ values: data })
    .filterData({ id: "filter2", field: "pacbioRun", oneOf: ["LibB_211105"] })
    .applyTextMetrics({
      profile: {
        schemaVersion: 1,
        id: "vl_1422-panel2-actual-source-axis-widths",
        measurements: [
          { text: "0", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 5.5625 },
          { text: "5,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 25.03125 },
          { text: "10,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 30.59375 },
          { text: "15,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 30.59375 },
          { text: "20,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 30.59375 },
          { text: "25,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 30.59375 },
          { text: "30,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 30.59375 },
          { text: "aligned PacBio_amplicon", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 112.296875 },
          { text: "filtered PacBio_amplicon", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 110.0625 },
          { text: "unmapped", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 47.265625 }
        ]
      }
    })
    .createBarPlot({ x: "count", y: "category", guides: false })
    .editXScale({ domain: [0, 30000] })
    .editYScale({ paddingInner: 0.1, paddingOuter: 0.05 })
    .encodeBarWidth({ band: 1 })
    .editBarMark({ fill: "#4c78a8", stroke: false })
    .createVerticalGrid({ values: [0, 5000, 10000, 15000, 20000, 25000, 30000], color: "#ddd", lineWidth: 1 })
    // Source labelOverlap culls 5,000 / 15,000 / 25,000: empty labelMap entries keep raw ticks.
    .createXAxis({
      line: { color: "#888", lineWidth: 1 },
      ticksAndLabels: {
        values: [0, 5000, 10000, 15000, 20000, 25000, 30000],
        ticks: { color: "#888", lineWidth: 1, length: 5 },
        labels: {
          fontSize: 10,
          fontFamily: "sans-serif",
          fontWeight: 400,
          color: "black",
          offset: 5.5,
          format: ",.0f",
          flush: true,
          labelMap: [
            { value: 0, label: "0" },
            { value: 5000, label: "" },
            { value: 10000, label: "10,000" },
            { value: 15000, label: "" },
            { value: 20000, label: "20,000" },
            { value: 25000, label: "" },
            { value: 30000, label: "30,000" }
          ]
        }
      },
      title: { text: "count", fontSize: 11, fontWeight: 700, fontFamily: "sans-serif", color: "black", offset: 27.484375 }
    })
    .createYAxis({
      line: { color: "#888", lineWidth: 1 },
      ticksAndLabels: {
        values: ["aligned PacBio_amplicon", "filtered PacBio_amplicon", "unmapped"],
        ticks: { color: "#888", lineWidth: 1, length: 5 },
        labels: { fontSize: 10, fontFamily: "sans-serif", fontWeight: 400, color: "black", offset: 7 }
      },
      title: false
    })
    .createTitle({ text: "LibB_211105", offset: 0, titleStyle: { fontSize: 10, fontWeight: 400, fontFamily: "sans-serif", color: "black" } })
    .editTitle({ align: "center", offset: -9.609375 });

  // ---- panel3: LibB_220124 ----
  const child3 = chart()
    .createCanvas({ width: 383, height: 139, margin: { top: 26, right: 7, bottom: 38, left: 126 } })
    .editCanvas({ plotBorder: { color: "#ddd", lineWidth: 1 } })
    .createData({ values: data })
    .filterData({ id: "filter3", field: "pacbioRun", oneOf: ["LibB_220124"] })
    .applyTextMetrics({
      profile: {
        schemaVersion: 1,
        id: "vl_1422-panel3-actual-source-axis-widths",
        measurements: [
          { text: "0", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 5.5625 },
          { text: "5,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 25.03125 },
          { text: "10,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 30.59375 },
          { text: "15,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 30.59375 },
          { text: "20,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 30.59375 },
          { text: "25,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 30.59375 },
          { text: "30,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 30.59375 },
          { text: "aligned PacBio_amplicon", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 112.296875 },
          { text: "filtered PacBio_amplicon", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 110.0625 },
          { text: "unmapped", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 47.265625 }
        ]
      }
    })
    .createBarPlot({ x: "count", y: "category", guides: false })
    .editXScale({ domain: [0, 30000] })
    .editYScale({ paddingInner: 0.1, paddingOuter: 0.05 })
    .encodeBarWidth({ band: 1 })
    .editBarMark({ fill: "#4c78a8", stroke: false })
    .createVerticalGrid({ values: [0, 5000, 10000, 15000, 20000, 25000, 30000], color: "#ddd", lineWidth: 1 })
    .createXAxis({
      line: { color: "#888", lineWidth: 1 },
      ticksAndLabels: {
        values: [0, 5000, 10000, 15000, 20000, 25000, 30000],
        ticks: { color: "#888", lineWidth: 1, length: 5 },
        labels: {
          fontSize: 10,
          fontFamily: "sans-serif",
          fontWeight: 400,
          color: "black",
          offset: 5.5,
          format: ",.0f",
          flush: true,
          labelMap: [
            { value: 0, label: "0" },
            { value: 5000, label: "" },
            { value: 10000, label: "10,000" },
            { value: 15000, label: "" },
            { value: 20000, label: "20,000" },
            { value: 25000, label: "" },
            { value: 30000, label: "30,000" }
          ]
        }
      },
      title: { text: "count", fontSize: 11, fontWeight: 700, fontFamily: "sans-serif", color: "black", offset: 27.484375 }
    })
    .createYAxis({
      line: { color: "#888", lineWidth: 1 },
      ticksAndLabels: {
        values: ["aligned PacBio_amplicon", "filtered PacBio_amplicon", "unmapped"],
        ticks: { color: "#888", lineWidth: 1, length: 5 },
        labels: { fontSize: 10, fontFamily: "sans-serif", fontWeight: 400, color: "black", offset: 7 }
      },
      title: false
    })
    .createTitle({ text: "LibB_220124", offset: 0, titleStyle: { fontSize: 10, fontWeight: 400, fontFamily: "sans-serif", color: "black" } })
    .editTitle({ align: "center", offset: -9.609375 });

  // Reviewed nested tree: two two-leaf rows, gap 10, align start, in supplied slot order.
  const row0 = hconcat({
    programs: [
      { id: "panel0", program: child0 },
      { id: "panel1", program: child1 }
    ],
    gap: 10,
    align: "start"
  });
  const row1 = hconcat({
    programs: [
      { id: "panel2", program: child2 },
      { id: "panel3", program: child3 }
    ],
    gap: 10,
    align: "start"
  });

  return vconcat({
    programs: [
      { id: "row0", program: row0 },
      { id: "row1", program: row1 }
    ],
    gap: 10,
    align: "start"
  });
}