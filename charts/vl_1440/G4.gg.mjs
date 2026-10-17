// DOCS: doc-f1f94dec7d5389ca (Composition Recipe: hconcat/vconcat child programs)
// DOCS: doc-6c2c08869091f6a0 (createBarPlot facade)
import { chart, hconcat, vconcat } from "ggaction";
import data from "./data.json";

export function buildChart() {
  const child0 = chart()
    .createCanvas({ width: 383, height: 139, margin: { top: 26, right: 7, bottom: 38, left: 126 } })
    .editCanvas({ plotBorder: { color: "#ddd", lineWidth: 1 } })
    .createData({ values: data })
    .applyTextMetrics({ profile: { schemaVersion: 1, id: "vl_1440-panel0-actual-source-axis-widths", measurements: [
      { text: "0", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 5.5625 },
      { text: "100,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 36.15625 },
      { text: "200,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 36.15625 },
      { text: "300,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 36.15625 },
      { text: "400,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 36.15625 },
      { text: "500,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 36.15625 },
      { text: "600,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 36.15625 },
      { text: "aligned PacBio_amplicon", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 112.296875 },
      { text: "filtered PacBio_amplicon", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 110.0625 },
      { text: "unmapped", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 47.265625 }
    ] } })
    .filterData({ id: "panel0Data", field: "pacbioRun", oneOf: ["Lib-1_220531"] })
    .createBarPlot({ x: "count", y: "category", guides: false })
    .editBarMark({ fill: "#4c78a8", stroke: false })
    .encodeBarWidth({ band: 1 })
    .editXScale({ domain: [0, 650000] })
    .editYScale({ domain: ["aligned PacBio_amplicon", "filtered PacBio_amplicon", "unmapped"], paddingInner: 0.1, paddingOuter: 0.05 })
    .createVerticalGrid({ values: [0, 100000, 200000, 300000, 400000, 500000, 600000], lineWidth: 1 })
    .editVerticalGrid({ color: "#ddd" })
    .createXAxis({ line: { color: "#888", lineWidth: 1 }, ticksAndLabels: { values: [0, 100000, 200000, 300000, 400000, 500000, 600000], ticks: { color: "#888", lineWidth: 1, length: 5 }, labels: { format: ",.0f", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, color: "black", offset: 5.5, flush: true } }, title: { text: "count", offset: 27.484375, fontSize: 11, fontWeight: 700, fontFamily: "sans-serif", color: "black" } })
    .createYAxis({ line: { color: "#888", lineWidth: 1 }, ticksAndLabels: { ticks: { color: "#888", lineWidth: 1, length: 5 }, labels: { fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, color: "black", offset: 7 } }, title: false })
    .createTitle({ text: "Lib-1_220531", offset: 0, titleStyle: { fontFamily: "sans-serif", fontSize: 10 } })
    .editTitle({ align: "center", offset: -9.609375, titleStyle: { fontWeight: 400, color: "black" } });

  const child1 = chart()
    .createCanvas({ width: 383, height: 139, margin: { top: 26, right: 7, bottom: 38, left: 126 } })
    .editCanvas({ plotBorder: { color: "#ddd", lineWidth: 1 } })
    .createData({ values: data })
    .applyTextMetrics({ profile: { schemaVersion: 1, id: "vl_1440-panel1-actual-source-axis-widths", measurements: [
      { text: "0", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 5.5625 },
      { text: "200,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 36.15625 },
      { text: "400,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 36.15625 },
      { text: "600,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 36.15625 },
      { text: "800,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 36.15625 },
      { text: "1,000,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 44.5 },
      { text: "aligned PacBio_amplicon", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 112.296875 },
      { text: "filtered PacBio_amplicon", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 110.0625 },
      { text: "unmapped", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 47.265625 }
    ] } })
    .filterData({ id: "panel1Data", field: "pacbioRun", oneOf: ["Lib-1_220710"] })
    .createBarPlot({ x: "count", y: "category", guides: false })
    .editBarMark({ fill: "#4c78a8", stroke: false })
    .encodeBarWidth({ band: 1 })
    .editXScale({ domain: [0, 1000000] })
    .editYScale({ domain: ["aligned PacBio_amplicon", "filtered PacBio_amplicon", "unmapped"], paddingInner: 0.1, paddingOuter: 0.05 })
    .createVerticalGrid({ values: [0, 200000, 400000, 600000, 800000, 1000000], lineWidth: 1 })
    .editVerticalGrid({ color: "#ddd" })
    .createXAxis({ line: { color: "#888", lineWidth: 1 }, ticksAndLabels: { values: [0, 200000, 400000, 600000, 800000, 1000000], ticks: { color: "#888", lineWidth: 1, length: 5 }, labels: { format: ",.0f", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, color: "black", offset: 5.5, flush: true, labelMap: [{ value: 200000, label: "" }, { value: 600000, label: "" }, { value: 1000000, label: "" }] } }, title: { text: "count", offset: 27.484375, fontSize: 11, fontWeight: 700, fontFamily: "sans-serif", color: "black" } })
    .createYAxis({ line: { color: "#888", lineWidth: 1 }, ticksAndLabels: { ticks: { color: "#888", lineWidth: 1, length: 5 }, labels: { fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, color: "black", offset: 7 } }, title: false })
    .createTitle({ text: "Lib-1_220710", offset: 0, titleStyle: { fontFamily: "sans-serif", fontSize: 10 } })
    .editTitle({ align: "center", offset: -9.609375, titleStyle: { fontWeight: 400, color: "black" } });

  const child2 = chart()
    .createCanvas({ width: 383, height: 139, margin: { top: 26, right: 7, bottom: 38, left: 126 } })
    .editCanvas({ plotBorder: { color: "#ddd", lineWidth: 1 } })
    .createData({ values: data })
    .applyTextMetrics({ profile: { schemaVersion: 1, id: "vl_1440-panel2-actual-source-axis-widths", measurements: [
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
      { text: "aligned PacBio_amplicon", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 112.296875 },
      { text: "filtered PacBio_amplicon", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 110.0625 },
      { text: "unmapped", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 47.265625 }
    ] } })
    .filterData({ id: "panel2Data", field: "pacbioRun", oneOf: ["Lib-1_220711"] })
    .createBarPlot({ x: "count", y: "category", guides: false })
    .editBarMark({ fill: "#4c78a8", stroke: false })
    .encodeBarWidth({ band: 1 })
    .editXScale({ domain: [0, 900000] })
    .editYScale({ domain: ["aligned PacBio_amplicon", "filtered PacBio_amplicon", "unmapped"], paddingInner: 0.1, paddingOuter: 0.05 })
    .createVerticalGrid({ values: [0, 100000, 200000, 300000, 400000, 500000, 600000, 700000, 800000, 900000], lineWidth: 1 })
    .editVerticalGrid({ color: "#ddd" })
    .createXAxis({ line: { color: "#888", lineWidth: 1 }, ticksAndLabels: { values: [0, 100000, 200000, 300000, 400000, 500000, 600000, 700000, 800000, 900000], ticks: { color: "#888", lineWidth: 1, length: 5 }, labels: { format: ",.0f", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, color: "black", offset: 5.5, flush: true, labelMap: [{ value: 100000, label: "" }, { value: 300000, label: "" }, { value: 500000, label: "" }, { value: 700000, label: "" }, { value: 900000, label: "" }] } }, title: { text: "count", offset: 27.484375, fontSize: 11, fontWeight: 700, fontFamily: "sans-serif", color: "black" } })
    .createYAxis({ line: { color: "#888", lineWidth: 1 }, ticksAndLabels: { ticks: { color: "#888", lineWidth: 1, length: 5 }, labels: { fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, color: "black", offset: 7 } }, title: false })
    .createTitle({ text: "Lib-1_220711", offset: 0, titleStyle: { fontFamily: "sans-serif", fontSize: 10 } })
    .editTitle({ align: "center", offset: -9.609375, titleStyle: { fontWeight: 400, color: "black" } });

  const child3 = chart()
    .createCanvas({ width: 383, height: 139, margin: { top: 26, right: 7, bottom: 38, left: 126 } })
    .editCanvas({ plotBorder: { color: "#ddd", lineWidth: 1 } })
    .createData({ values: data })
    .applyTextMetrics({ profile: { schemaVersion: 1, id: "vl_1440-panel3-actual-source-axis-widths", measurements: [
      { text: "0", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 5.5625 },
      { text: "500,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 36.15625 },
      { text: "1,000,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 44.5 },
      { text: "1,500,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 44.5 },
      { text: "2,000,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 44.5 },
      { text: "2,500,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 44.5 },
      { text: "3,000,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 44.5 },
      { text: "aligned PacBio_amplicon", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 112.296875 },
      { text: "filtered PacBio_amplicon", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 110.0625 },
      { text: "unmapped", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 47.265625 }
    ] } })
    .filterData({ id: "panel3Data", field: "pacbioRun", oneOf: ["Lib-2_220629"] })
    .createBarPlot({ x: "count", y: "category", guides: false })
    .editBarMark({ fill: "#4c78a8", stroke: false })
    .encodeBarWidth({ band: 1 })
    .editXScale({ domain: [0, 3000000] })
    .editYScale({ domain: ["aligned PacBio_amplicon", "filtered PacBio_amplicon", "unmapped"], paddingInner: 0.1, paddingOuter: 0.05 })
    .createVerticalGrid({ values: [0, 500000, 1000000, 1500000, 2000000, 2500000, 3000000], lineWidth: 1 })
    .editVerticalGrid({ color: "#ddd" })
    .createXAxis({ line: { color: "#888", lineWidth: 1 }, ticksAndLabels: { values: [0, 500000, 1000000, 1500000, 2000000, 2500000, 3000000], ticks: { color: "#888", lineWidth: 1, length: 5 }, labels: { format: ",.0f", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, color: "black", offset: 5.5, flush: true, labelMap: [{ value: 500000, label: "" }, { value: 1500000, label: "" }, { value: 2500000, label: "" }] } }, title: { text: "count", offset: 27.484375, fontSize: 11, fontWeight: 700, fontFamily: "sans-serif", color: "black" } })
    .createYAxis({ line: { color: "#888", lineWidth: 1 }, ticksAndLabels: { ticks: { color: "#888", lineWidth: 1, length: 5 }, labels: { fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, color: "black", offset: 7 } }, title: false })
    .createTitle({ text: "Lib-2_220629", offset: 0, titleStyle: { fontFamily: "sans-serif", fontSize: 10 } })
    .editTitle({ align: "center", offset: -9.609375, titleStyle: { fontWeight: 400, color: "black" } });

  const child4 = chart()
    .createCanvas({ width: 383, height: 139, margin: { top: 26, right: 7, bottom: 38, left: 126 } })
    .editCanvas({ plotBorder: { color: "#ddd", lineWidth: 1 } })
    .createData({ values: data })
    .applyTextMetrics({ profile: { schemaVersion: 1, id: "vl_1440-panel4-actual-source-axis-widths", measurements: [
      { text: "0", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 5.5625 },
      { text: "500,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 36.15625 },
      { text: "1,000,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 44.5 },
      { text: "1,500,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 44.5 },
      { text: "2,000,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 44.5 },
      { text: "2,500,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 44.5 },
      { text: "3,000,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 44.5 },
      { text: "aligned PacBio_amplicon", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 112.296875 },
      { text: "filtered PacBio_amplicon", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 110.0625 },
      { text: "unmapped", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 47.265625 }
    ] } })
    .filterData({ id: "panel4Data", field: "pacbioRun", oneOf: ["Lib-3_220629"] })
    .createBarPlot({ x: "count", y: "category", guides: false })
    .editBarMark({ fill: "#4c78a8", stroke: false })
    .encodeBarWidth({ band: 1 })
    .editXScale({ domain: [0, 3000000] })
    .editYScale({ domain: ["aligned PacBio_amplicon", "filtered PacBio_amplicon", "unmapped"], paddingInner: 0.1, paddingOuter: 0.05 })
    .createVerticalGrid({ values: [0, 500000, 1000000, 1500000, 2000000, 2500000, 3000000], lineWidth: 1 })
    .editVerticalGrid({ color: "#ddd" })
    .createXAxis({ line: { color: "#888", lineWidth: 1 }, ticksAndLabels: { values: [0, 500000, 1000000, 1500000, 2000000, 2500000, 3000000], ticks: { color: "#888", lineWidth: 1, length: 5 }, labels: { format: ",.0f", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, color: "black", offset: 5.5, flush: true, labelMap: [{ value: 500000, label: "" }, { value: 1500000, label: "" }, { value: 2500000, label: "" }] } }, title: { text: "count", offset: 27.484375, fontSize: 11, fontWeight: 700, fontFamily: "sans-serif", color: "black" } })
    .createYAxis({ line: { color: "#888", lineWidth: 1 }, ticksAndLabels: { ticks: { color: "#888", lineWidth: 1, length: 5 }, labels: { fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, color: "black", offset: 7 } }, title: false })
    .createTitle({ text: "Lib-3_220629", offset: 0, titleStyle: { fontFamily: "sans-serif", fontSize: 10 } })
    .editTitle({ align: "center", offset: -9.609375, titleStyle: { fontWeight: 400, color: "black" } });

  const row0 = hconcat({ programs: [{ id: "panel0", program: child0 }, { id: "panel1", program: child1 }], gap: 10, align: "start" });
  const row1 = hconcat({ programs: [{ id: "panel2", program: child2 }, { id: "panel3", program: child3 }], gap: 10, align: "start" });

  return vconcat({ programs: [{ id: "row0", program: row0 }, { id: "row1", program: row1 }, { id: "row2", program: child4 }], gap: 10, align: "start" });
}