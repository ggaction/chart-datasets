// DOCS: doc-6c2c08869091f6a0 createBarPlot facade per panel; doc-2bd5de4bd99e314a Basic Charts create order; doc-fc11e9fb291905d1 createBarPlot bar geometry; doc-da6e304c0dd40c0c facet-equivalent closed tree composition.
// G1 complete whole-parent program: eight independent source-facet children, four supplied two-leaf rows, vconcat root.
// Panel ownership: each child filters the frozen shared ./data.json to its exact source pacbioRun partition.

import { chart, hconcat, vconcat } from "ggaction";
import data from "./data.json";

export function buildChart() {
  // child0: Lib-1_211105 // DOCS: doc-6c2c08869091f6a0
  const child0 = chart()
    .createCanvas({ width: 383, height: 139, margin: { top: 26, right: 7, bottom: 38, left: 126 } }) // DOCS: doc-2bd5de4bd99e314a
    .editCanvas({ plotBorder: { color: "#ddd", lineWidth: 1 } })
    .createData({ values: data }) // DOCS: doc-2bd5de4bd99e314a
    .filterData({ id: "panel0Rows", field: "pacbioRun", oneOf: ["Lib-1_211105"] })
    .createBarPlot({ x: "count", y: "category", guides: false }) // DOCS: doc-6c2c08869091f6a0
    .encodeBarWidth({ band: 1 }) // DOCS: doc-fc11e9fb291905d1
    .editBarMark({ fill: "#4c78a8", stroke: false })
    .editXScale({ domain: [0, 600000] })
    .editYScale({ type: "band", paddingInner: 0.1, paddingOuter: 0.05 })
    .applyTextMetrics({ profile: { schemaVersion: 1, id: "vl_1432-panel0-actual-source-axis-widths", measurements: [
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
    .createXAxis({
      ticksAndLabels: { values: [0, 100000, 200000, 300000, 400000, 500000, 600000], ticks: { length: 5 }, labels: { flush: true, offset: 5.5, fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, labelMap: [
          { value: 100000, label: "" },
          { value: 300000, label: "" },
          { value: 500000, label: "" }
        ] } },
      title: { text: "count", fontSize: 11, offset: 27.484375 }
    })
    .createYAxis({
      ticksAndLabels: { ticks: { length: 5 }, labels: { offset: 7, fontFamily: "sans-serif", fontSize: 10, fontWeight: 400 } },
      title: false
    })
    .editXAxis({ line: { color: "#888", lineWidth: 1 }, ticksAndLabels: { ticks: { color: "#888", lineWidth: 1 }, labels: { format: ",.0f", color: "black" } }, title: { fontWeight: 700, color: "black" } })
    .editYAxis({ line: { color: "#888", lineWidth: 1 }, ticks: { color: "#888", lineWidth: 1 }, labels: { color: "black" } })
    .createVerticalGrid({ values: [0, 100000, 200000, 300000, 400000, 500000, 600000], lineWidth: 1 })
    .editVerticalGrid({ color: "#ddd" })
    .createTitle({ text: "Lib-1_211105", offset: 0, titleStyle: { fontSize: 10 } })
    .editTitle({ align: "center", offset: -9.609375, titleStyle: { fontWeight: 400, color: "black" } });

  // child1: Lib-1_220124 // DOCS: doc-6c2c08869091f6a0
  const child1 = chart()
    .createCanvas({ width: 383, height: 139, margin: { top: 26, right: 7, bottom: 38, left: 126 } }) // DOCS: doc-2bd5de4bd99e314a
    .editCanvas({ plotBorder: { color: "#ddd", lineWidth: 1 } })
    .createData({ values: data }) // DOCS: doc-2bd5de4bd99e314a
    .filterData({ id: "panel1Rows", field: "pacbioRun", oneOf: ["Lib-1_220124"] })
    .createBarPlot({ x: "count", y: "category", guides: false }) // DOCS: doc-6c2c08869091f6a0
    .encodeBarWidth({ band: 1 })
    .editBarMark({ fill: "#4c78a8", stroke: false })
    .editXScale({ domain: [0, 600000] })
    .editYScale({ type: "band", paddingInner: 0.1, paddingOuter: 0.05 })
    .applyTextMetrics({ profile: { schemaVersion: 1, id: "vl_1432-panel1-actual-source-axis-widths", measurements: [
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
    .createXAxis({
      ticksAndLabels: { values: [0, 100000, 200000, 300000, 400000, 500000, 600000], ticks: { length: 5 }, labels: { flush: true, offset: 5.5, fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, labelMap: [
          { value: 100000, label: "" },
          { value: 300000, label: "" },
          { value: 500000, label: "" }
        ] } },
      title: { text: "count", fontSize: 11, offset: 27.484375 }
    })
    .createYAxis({
      ticksAndLabels: { ticks: { length: 5 }, labels: { offset: 7, fontFamily: "sans-serif", fontSize: 10, fontWeight: 400 } },
      title: false
    })
    .editXAxis({ line: { color: "#888", lineWidth: 1 }, ticksAndLabels: { ticks: { color: "#888", lineWidth: 1 }, labels: { format: ",.0f", color: "black" } }, title: { fontWeight: 700, color: "black" } })
    .editYAxis({ line: { color: "#888", lineWidth: 1 }, ticks: { color: "#888", lineWidth: 1 }, labels: { color: "black" } })
    .createVerticalGrid({ values: [0, 100000, 200000, 300000, 400000, 500000, 600000], lineWidth: 1 })
    .editVerticalGrid({ color: "#ddd" })
    .createTitle({ text: "Lib-1_220124", offset: 0, titleStyle: { fontSize: 10 } })
    .editTitle({ align: "center", offset: -9.609375, titleStyle: { fontWeight: 400, color: "black" } });

  // child2: Lib-2_211105 // DOCS: doc-6c2c08869091f6a0
  const child2 = chart()
    .createCanvas({ width: 383, height: 139, margin: { top: 26, right: 7, bottom: 38, left: 126 } }) // DOCS: doc-2bd5de4bd99e314a
    .editCanvas({ plotBorder: { color: "#ddd", lineWidth: 1 } })
    .createData({ values: data }) // DOCS: doc-2bd5de4bd99e314a
    .filterData({ id: "panel2Rows", field: "pacbioRun", oneOf: ["Lib-2_211105"] })
    .createBarPlot({ x: "count", y: "category", guides: false }) // DOCS: doc-6c2c08869091f6a0
    .encodeBarWidth({ band: 1 })
    .editBarMark({ fill: "#4c78a8", stroke: false })
    .editXScale({ domain: [0, 450000] })
    .editYScale({ type: "band", paddingInner: 0.1, paddingOuter: 0.05 })
    .applyTextMetrics({ profile: { schemaVersion: 1, id: "vl_1432-panel2-actual-source-axis-widths", measurements: [
      { text: "0", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 5.5625 },
      { text: "50,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 30.59375 },
      { text: "100,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 36.15625 },
      { text: "150,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 36.15625 },
      { text: "200,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 36.15625 },
      { text: "250,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 36.15625 },
      { text: "300,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 36.15625 },
      { text: "350,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 36.15625 },
      { text: "400,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 36.15625 },
      { text: "450,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 36.15625 },
      { text: "aligned PacBio_amplicon", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 112.296875 },
      { text: "filtered PacBio_amplicon", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 110.0625 },
      { text: "unmapped", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 47.265625 }
    ] } })
    .createXAxis({
      ticksAndLabels: { values: [0, 50000, 100000, 150000, 200000, 250000, 300000, 350000, 400000, 450000], ticks: { length: 5 }, labels: { flush: true, offset: 5.5, fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, labelMap: [
          { value: 50000, label: "" },
          { value: 150000, label: "" },
          { value: 250000, label: "" },
          { value: 350000, label: "" },
          { value: 450000, label: "" }
        ] } },
      title: { text: "count", fontSize: 11, offset: 27.484375 }
    })
    .createYAxis({
      ticksAndLabels: { ticks: { length: 5 }, labels: { offset: 7, fontFamily: "sans-serif", fontSize: 10, fontWeight: 400 } },
      title: false
    })
    .editXAxis({ line: { color: "#888", lineWidth: 1 }, ticksAndLabels: { ticks: { color: "#888", lineWidth: 1 }, labels: { format: ",.0f", color: "black" } }, title: { fontWeight: 700, color: "black" } })
    .editYAxis({ line: { color: "#888", lineWidth: 1 }, ticks: { color: "#888", lineWidth: 1 }, labels: { color: "black" } })
    .createVerticalGrid({ values: [0, 50000, 100000, 150000, 200000, 250000, 300000, 350000, 400000, 450000], lineWidth: 1 })
    .editVerticalGrid({ color: "#ddd" })
    .createTitle({ text: "Lib-2_211105", offset: 0, titleStyle: { fontSize: 10 } })
    .editTitle({ align: "center", offset: -9.609375, titleStyle: { fontWeight: 400, color: "black" } });

  // child3: Lib-2_220124 // DOCS: doc-6c2c08869091f6a0
  const child3 = chart()
    .createCanvas({ width: 383, height: 139, margin: { top: 26, right: 7, bottom: 38, left: 126 } }) // DOCS: doc-2bd5de4bd99e314a
    .editCanvas({ plotBorder: { color: "#ddd", lineWidth: 1 } })
    .createData({ values: data }) // DOCS: doc-2bd5de4bd99e314a
    .filterData({ id: "panel3Rows", field: "pacbioRun", oneOf: ["Lib-2_220124"] })
    .createBarPlot({ x: "count", y: "category", guides: false }) // DOCS: doc-6c2c08869091f6a0
    .encodeBarWidth({ band: 1 })
    .editBarMark({ fill: "#4c78a8", stroke: false })
    .editXScale({ domain: [0, 500000] })
    .editYScale({ type: "band", paddingInner: 0.1, paddingOuter: 0.05 })
    .applyTextMetrics({ profile: { schemaVersion: 1, id: "vl_1432-panel3-actual-source-axis-widths", measurements: [
      { text: "0", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 5.5625 },
      { text: "100,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 36.15625 },
      { text: "200,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 36.15625 },
      { text: "300,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 36.15625 },
      { text: "400,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 36.15625 },
      { text: "500,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 36.15625 },
      { text: "aligned PacBio_amplicon", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 112.296875 },
      { text: "filtered PacBio_amplicon", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 110.0625 },
      { text: "unmapped", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 47.265625 }
    ] } })
    .createXAxis({
      ticksAndLabels: { values: [0, 100000, 200000, 300000, 400000, 500000], ticks: { length: 5 }, labels: { flush: true, offset: 5.5, fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, labelMap: [
          { value: 100000, label: "" },
          { value: 300000, label: "" },
          { value: 500000, label: "" }
        ] } },
      title: { text: "count", fontSize: 11, offset: 27.484375 }
    })
    .createYAxis({
      ticksAndLabels: { ticks: { length: 5 }, labels: { offset: 7, fontFamily: "sans-serif", fontSize: 10, fontWeight: 400 } },
      title: false
    })
    .editXAxis({ line: { color: "#888", lineWidth: 1 }, ticksAndLabels: { ticks: { color: "#888", lineWidth: 1 }, labels: { format: ",.0f", color: "black" } }, title: { fontWeight: 700, color: "black" } })
    .editYAxis({ line: { color: "#888", lineWidth: 1 }, ticks: { color: "#888", lineWidth: 1 }, labels: { color: "black" } })
    .createVerticalGrid({ values: [0, 100000, 200000, 300000, 400000, 500000], lineWidth: 1 })
    .editVerticalGrid({ color: "#ddd" })
    .createTitle({ text: "Lib-2_220124", offset: 0, titleStyle: { fontSize: 10 } })
    .editTitle({ align: "center", offset: -9.609375, titleStyle: { fontWeight: 400, color: "black" } });

  // child4: Lib-3_211105 // DOCS: doc-6c2c08869091f6a0
  const child4 = chart()
    .createCanvas({ width: 383, height: 139, margin: { top: 26, right: 7, bottom: 38, left: 126 } }) // DOCS: doc-2bd5de4bd99e314a
    .editCanvas({ plotBorder: { color: "#ddd", lineWidth: 1 } })
    .createData({ values: data }) // DOCS: doc-2bd5de4bd99e314a
    .filterData({ id: "panel4Rows", field: "pacbioRun", oneOf: ["Lib-3_211105"] })
    .createBarPlot({ x: "count", y: "category", guides: false }) // DOCS: doc-6c2c08869091f6a0
    .encodeBarWidth({ band: 1 })
    .editBarMark({ fill: "#4c78a8", stroke: false })
    .editXScale({ domain: [0, 280000] })
    .editYScale({ type: "band", paddingInner: 0.1, paddingOuter: 0.05 })
    .applyTextMetrics({ profile: { schemaVersion: 1, id: "vl_1432-panel4-actual-source-axis-widths", measurements: [
      { text: "0", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 5.5625 },
      { text: "50,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 30.59375 },
      { text: "100,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 36.15625 },
      { text: "150,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 36.15625 },
      { text: "200,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 36.15625 },
      { text: "250,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 36.15625 },
      { text: "aligned PacBio_amplicon", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 112.296875 },
      { text: "filtered PacBio_amplicon", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 110.0625 },
      { text: "unmapped", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 47.265625 }
    ] } })
    .createXAxis({
      ticksAndLabels: { values: [0, 50000, 100000, 150000, 200000, 250000], ticks: { length: 5 }, labels: { flush: true, offset: 5.5, fontFamily: "sans-serif", fontSize: 10, fontWeight: 400 } },
      title: { text: "count", fontSize: 11, offset: 27.484375 }
    })
    .createYAxis({
      ticksAndLabels: { ticks: { length: 5 }, labels: { offset: 7, fontFamily: "sans-serif", fontSize: 10, fontWeight: 400 } },
      title: false
    })
    .editXAxis({ line: { color: "#888", lineWidth: 1 }, ticksAndLabels: { ticks: { color: "#888", lineWidth: 1 }, labels: { format: ",.0f", color: "black" } }, title: { fontWeight: 700, color: "black" } })
    .editYAxis({ line: { color: "#888", lineWidth: 1 }, ticks: { color: "#888", lineWidth: 1 }, labels: { color: "black" } })
    .createVerticalGrid({ values: [0, 50000, 100000, 150000, 200000, 250000], lineWidth: 1 })
    .editVerticalGrid({ color: "#ddd" })
    .createTitle({ text: "Lib-3_211105", offset: 0, titleStyle: { fontSize: 10 } })
    .editTitle({ align: "center", offset: -9.609375, titleStyle: { fontWeight: 400, color: "black" } });

  // child5: Lib-3_220124 // DOCS: doc-6c2c08869091f6a0
  const child5 = chart()
    .createCanvas({ width: 383, height: 139, margin: { top: 26, right: 7, bottom: 38, left: 126 } }) // DOCS: doc-2bd5de4bd99e314a
    .editCanvas({ plotBorder: { color: "#ddd", lineWidth: 1 } })
    .createData({ values: data }) // DOCS: doc-2bd5de4bd99e314a
    .filterData({ id: "panel5Rows", field: "pacbioRun", oneOf: ["Lib-3_220124"] })
    .createBarPlot({ x: "count", y: "category", guides: false }) // DOCS: doc-6c2c08869091f6a0
    .encodeBarWidth({ band: 1 })
    .editBarMark({ fill: "#4c78a8", stroke: false })
    .editXScale({ domain: [0, 300000] })
    .editYScale({ type: "band", paddingInner: 0.1, paddingOuter: 0.05 })
    .applyTextMetrics({ profile: { schemaVersion: 1, id: "vl_1432-panel5-actual-source-axis-widths", measurements: [
      { text: "0", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 5.5625 },
      { text: "50,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 30.59375 },
      { text: "100,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 36.15625 },
      { text: "150,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 36.15625 },
      { text: "200,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 36.15625 },
      { text: "250,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 36.15625 },
      { text: "300,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 36.15625 },
      { text: "aligned PacBio_amplicon", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 112.296875 },
      { text: "filtered PacBio_amplicon", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 110.0625 },
      { text: "unmapped", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 47.265625 }
    ] } })
    .createXAxis({
      ticksAndLabels: { values: [0, 50000, 100000, 150000, 200000, 250000, 300000], ticks: { length: 5 }, labels: { flush: true, offset: 5.5, fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, labelMap: [
          { value: 50000, label: "" },
          { value: 150000, label: "" },
          { value: 250000, label: "" }
        ] } },
      title: { text: "count", fontSize: 11, offset: 27.484375 }
    })
    .createYAxis({
      ticksAndLabels: { ticks: { length: 5 }, labels: { offset: 7, fontFamily: "sans-serif", fontSize: 10, fontWeight: 400 } },
      title: false
    })
    .editXAxis({ line: { color: "#888", lineWidth: 1 }, ticksAndLabels: { ticks: { color: "#888", lineWidth: 1 }, labels: { format: ",.0f", color: "black" } }, title: { fontWeight: 700, color: "black" } })
    .editYAxis({ line: { color: "#888", lineWidth: 1 }, ticks: { color: "#888", lineWidth: 1 }, labels: { color: "black" } })
    .createVerticalGrid({ values: [0, 50000, 100000, 150000, 200000, 250000, 300000], lineWidth: 1 })
    .editVerticalGrid({ color: "#ddd" })
    .createTitle({ text: "Lib-3_220124", offset: 0, titleStyle: { fontSize: 10 } })
    .editTitle({ align: "center", offset: -9.609375, titleStyle: { fontWeight: 400, color: "black" } });

  // child6: Lib-4_211105 // DOCS: doc-6c2c08869091f6a0
  const child6 = chart()
    .createCanvas({ width: 383, height: 139, margin: { top: 26, right: 7, bottom: 38, left: 126 } }) // DOCS: doc-2bd5de4bd99e314a
    .editCanvas({ plotBorder: { color: "#ddd", lineWidth: 1 } })
    .createData({ values: data }) // DOCS: doc-2bd5de4bd99e314a
    .filterData({ id: "panel6Rows", field: "pacbioRun", oneOf: ["Lib-4_211105"] })
    .createBarPlot({ x: "count", y: "category", guides: false }) // DOCS: doc-6c2c08869091f6a0
    .encodeBarWidth({ band: 1 })
    .editBarMark({ fill: "#4c78a8", stroke: false })
    .editXScale({ domain: [0, 500000] })
    .editYScale({ type: "band", paddingInner: 0.1, paddingOuter: 0.05 })
    .applyTextMetrics({ profile: { schemaVersion: 1, id: "vl_1432-panel6-actual-source-axis-widths", measurements: [
      { text: "0", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 5.5625 },
      { text: "100,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 36.15625 },
      { text: "200,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 36.15625 },
      { text: "300,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 36.15625 },
      { text: "400,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 36.15625 },
      { text: "500,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 36.15625 },
      { text: "aligned PacBio_amplicon", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 112.296875 },
      { text: "filtered PacBio_amplicon", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 110.0625 },
      { text: "unmapped", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 47.265625 }
    ] } })
    .createXAxis({
      ticksAndLabels: { values: [0, 100000, 200000, 300000, 400000, 500000], ticks: { length: 5 }, labels: { flush: true, offset: 5.5, fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, labelMap: [
          { value: 100000, label: "" },
          { value: 300000, label: "" },
          { value: 500000, label: "" }
        ] } },
      title: { text: "count", fontSize: 11, offset: 27.484375 }
    })
    .createYAxis({
      ticksAndLabels: { ticks: { length: 5 }, labels: { offset: 7, fontFamily: "sans-serif", fontSize: 10, fontWeight: 400 } },
      title: false
    })
    .editXAxis({ line: { color: "#888", lineWidth: 1 }, ticksAndLabels: { ticks: { color: "#888", lineWidth: 1 }, labels: { format: ",.0f", color: "black" } }, title: { fontWeight: 700, color: "black" } })
    .editYAxis({ line: { color: "#888", lineWidth: 1 }, ticks: { color: "#888", lineWidth: 1 }, labels: { color: "black" } })
    .createVerticalGrid({ values: [0, 100000, 200000, 300000, 400000, 500000], lineWidth: 1 })
    .editVerticalGrid({ color: "#ddd" })
    .createTitle({ text: "Lib-4_211105", offset: 0, titleStyle: { fontSize: 10 } })
    .editTitle({ align: "center", offset: -9.609375, titleStyle: { fontWeight: 400, color: "black" } });

  // child7: Lib-4_220124 // DOCS: doc-6c2c08869091f6a0
  const child7 = chart()
    .createCanvas({ width: 383, height: 139, margin: { top: 26, right: 7, bottom: 38, left: 126 } }) // DOCS: doc-2bd5de4bd99e314a
    .editCanvas({ plotBorder: { color: "#ddd", lineWidth: 1 } })
    .createData({ values: data }) // DOCS: doc-2bd5de4bd99e314a
    .filterData({ id: "panel7Rows", field: "pacbioRun", oneOf: ["Lib-4_220124"] })
    .createBarPlot({ x: "count", y: "category", guides: false }) // DOCS: doc-6c2c08869091f6a0
    .encodeBarWidth({ band: 1 })
    .editBarMark({ fill: "#4c78a8", stroke: false })
    .editXScale({ domain: [0, 500000] })
    .editYScale({ type: "band", paddingInner: 0.1, paddingOuter: 0.05 })
    .applyTextMetrics({ profile: { schemaVersion: 1, id: "vl_1432-panel7-actual-source-axis-widths", measurements: [
      { text: "0", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 5.5625 },
      { text: "100,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 36.15625 },
      { text: "200,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 36.15625 },
      { text: "300,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 36.15625 },
      { text: "400,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 36.15625 },
      { text: "500,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 36.15625 },
      { text: "aligned PacBio_amplicon", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 112.296875 },
      { text: "filtered PacBio_amplicon", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 110.0625 },
      { text: "unmapped", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 47.265625 }
    ] } })
    .createXAxis({
      ticksAndLabels: { values: [0, 100000, 200000, 300000, 400000, 500000], ticks: { length: 5 }, labels: { flush: true, offset: 5.5, fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, labelMap: [
          { value: 100000, label: "" },
          { value: 300000, label: "" },
          { value: 500000, label: "" }
        ] } },
      title: { text: "count", fontSize: 11, offset: 27.484375 }
    })
    .createYAxis({
      ticksAndLabels: { ticks: { length: 5 }, labels: { offset: 7, fontFamily: "sans-serif", fontSize: 10, fontWeight: 400 } },
      title: false
    })
    .editXAxis({ line: { color: "#888", lineWidth: 1 }, ticksAndLabels: { ticks: { color: "#888", lineWidth: 1 }, labels: { format: ",.0f", color: "black" } }, title: { fontWeight: 700, color: "black" } })
    .editYAxis({ line: { color: "#888", lineWidth: 1 }, ticks: { color: "#888", lineWidth: 1 }, labels: { color: "black" } })
    .createVerticalGrid({ values: [0, 100000, 200000, 300000, 400000, 500000], lineWidth: 1 })
    .editVerticalGrid({ color: "#ddd" })
    .createTitle({ text: "Lib-4_220124", offset: 0, titleStyle: { fontSize: 10 } })
    .editTitle({ align: "center", offset: -9.609375, titleStyle: { fontWeight: 400, color: "black" } });

  // Supplied closed rows in reviewedNestedTree order. // DOCS: doc-da6e304c0dd40c0c
  const row0 = hconcat({ programs: [{ id: "panel0", program: child0 }, { id: "panel1", program: child1 }], gap: 10, align: "start" });
  const row1 = hconcat({ programs: [{ id: "panel2", program: child2 }, { id: "panel3", program: child3 }], gap: 10, align: "start" });
  const row2 = hconcat({ programs: [{ id: "panel4", program: child4 }, { id: "panel5", program: child5 }], gap: 10, align: "start" });
  const row3 = hconcat({ programs: [{ id: "panel6", program: child6 }, { id: "panel7", program: child7 }], gap: 10, align: "start" });

  return vconcat({ programs: [{ id: "row0", program: row0 }, { id: "row1", program: row1 }, { id: "row2", program: row2 }, { id: "row3", program: row3 }], gap: 10, align: "start" });
}