// DOCS: doc-e790db38fc2a278a (createScatterPlot), doc-2e6240c00cb297cc (createScatterPlot reference)
// DOCS: doc-48c72317a1a99e17 (guides: aggregate creation, concise authoring)
import { chart, vconcat } from "ggaction";
import data from "./data.json";

// panel0: AREA (x, quantitative via toNumber) vs URBAN_PROF (y, nominal)
export function buildChart() {
const child0 = chart()
  // DOCS: doc-e790db38fc2a278a — canvas context prerequisite; source inner plot 200x120, margins 14/14/38/34
  .createCanvas({
    width: 248,
    height: 172,
    margin: { top: 14, right: 14, bottom: 38, left: 34 }
  })
  // DOCS: doc-e790db38fc2a278a — source plot border; fixed canvas prevents inferred outer expansion
  .editCanvas({ plotBorder: { color: "#ddd", lineWidth: 1 } })
  // DOCS: doc-e790db38fc2a278a — actual source font metrics applied before guide creation
  .applyTextMetrics({
    profile: {
      schemaVersion: 1,
      id: "actual-source-1445-fonts",
      measurements: [
        { text: "0", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 5.5615234375 },
        { text: "20,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 30.5859375 },
        { text: "40,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 30.5859375 },
        { text: "60,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 30.5859375 },
        { text: "80,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 30.5859375 },
        { text: "Total area", fontFamily: "sans-serif", fontSize: 11, fontWeight: 700, fontStyle: "normal", width: 51.154296875 },
        { text: "1", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 5.5615234375 },
        { text: "2", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 5.5615234375 },
        { text: "3", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 5.5615234375 },
        { text: "4", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 5.5615234375 },
        { text: "5", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 5.5615234375 },
        { text: "6", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 5.5615234375 },
        { text: "Urban Landscape profiles", fontFamily: "sans-serif", fontSize: 11, fontWeight: 700, fontStyle: "normal", width: 135.08837890625 }
      ]
    }
  })
  // DOCS: doc-e790db38fc2a278a — dataset context; frozen shared import, all raw rows retained
  .createData({ values: data })
  // DOCS: doc-e790db38fc2a278a — toNumber computed alias; raw AREA strings are not coerced by fieldType
  .createComputedData({
    id: "typed0",
    as: "sourceX",
    expression: { op: "toNumber", operand: { field: "AREA" } }
  })
  // DOCS: doc-e790db38fc2a278a — high-level facade, one point per row, guides disabled
  .createScatterPlot({
    x: "sourceX",
    y: { field: "URBAN_PROF", fieldType: "nominal" },
    guides: false
  })
  // DOCS: doc-e790db38fc2a278a — mark paint: source fill (radius from facade point default 2.5)
  .editPointMark({ fill: "#4c78a8" })
  .encodeOpacity({ value: 0.7 })
  .encodePointRadius({ value: 2.5 })
  // DOCS: doc-e790db38fc2a278a — reference scales: X quantitative original literal domain, nice disabled
  .editXScale({ domain: [0, 90000], nice: false })
  // DOCS: doc-e790db38fc2a278a — reference scales: Y nominal with exact source six-string order
  .editYScale({ type: "point", domain: ["1", "2", "3", "4", "5", "6"] })
  // DOCS: doc-48c72317a1a99e17 — paired complete axes created explicitly after facade
  .createXAxis({
    line: {},
    ticksAndLabels: {
      ticks: { length: 5, lineWidth: 1 },
      values: [0, 20000, 40000, 60000, 80000],
      labels: {
        offset: 5.5,
        alongOffset: 0.5,
        flush: false,
        fontSize: 10,
        fontFamily: "sans-serif"
      }
    },
    title: {
      text: "Total area",
      offset: 27.578125,
      fontSize: 11,
      fontFamily: "sans-serif"
    }
  })
  .editXAxisLabels({
    labelMap: [
      { value: 0, label: "0" },
      { value: 20000, label: "20,000" },
      { value: 40000, label: "40,000" },
      { value: 60000, label: "60,000" },
      { value: 80000, label: "80,000" }
    ],
    color: "black"
  })
  .editXAxisLine({ color: "#888", lineWidth: 1 })
  .editXAxisTicks({ color: "#888" })
  .editXAxisTitle({ color: "black", fontWeight: 700 })
  .createYAxis({
    line: {},
    ticksAndLabels: {
      ticks: { length: 5, lineWidth: 1 },
      values: ["1", "2", "3", "4", "5", "6"],
      labels: {
        offset: 6.5,
        alongOffset: 0.890625,
        fontSize: 10,
        fontFamily: "sans-serif"
      }
    },
    title: {
      text: "Urban Landscape profiles",
      offset: 20.9833984375,
      rotation: { value: -90, unit: "degrees" },
      fontSize: 11,
      fontFamily: "sans-serif"
    }
  })
  .editYAxisLine({ color: "#888", lineWidth: 1 })
  .editYAxisTicks({ color: "#888" })
  .editYAxisLabels({ color: "black" })
  .editYAxisTitle({ color: "black", fontWeight: 700 })
  // DOCS: doc-48c72317a1a99e17 — source has vertical grid only
  .createGrid({
    horizontal: false,
    vertical: {
      scale: "x",
      values: [0, 20000, 40000, 60000, 80000],
      lineWidth: 1
    }
  })
  .editVerticalGrid({ color: "#ddd" });

// panel1: BECADSTTDENS (x, quantitative via toNumber) vs URBAN_PROF (y, nominal)
const child1 = chart()
  // DOCS: doc-e790db38fc2a278a — canvas context prerequisite; source inner plot 200x120, margins 14/14/38/34
  .createCanvas({
    width: 248,
    height: 172,
    margin: { top: 14, right: 14, bottom: 38, left: 34 }
  })
  // DOCS: doc-e790db38fc2a278a — source plot border; fixed canvas prevents inferred outer expansion
  .editCanvas({ plotBorder: { color: "#ddd", lineWidth: 1 } })
  // DOCS: doc-e790db38fc2a278a — actual source font metrics applied before guide creation
  .applyTextMetrics({
    profile: {
      schemaVersion: 1,
      id: "actual-source-1445-fonts",
      measurements: [
        { text: "0", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 5.5615234375 },
        { text: "5,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 25.0244140625 },
        { text: "10,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 30.5859375 },
        { text: "15,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 30.5859375 },
        { text: "20,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 30.5859375 },
        { text: "25,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 30.5859375 },
        { text: "Population density", fontFamily: "sans-serif", fontSize: 11, fontWeight: 700, fontStyle: "normal", width: 98.39306640625 },
        { text: "1", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 5.5615234375 },
        { text: "2", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 5.5615234375 },
        { text: "3", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 5.5615234375 },
        { text: "4", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 5.5615234375 },
        { text: "5", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 5.5615234375 },
        { text: "6", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 5.5615234375 },
        { text: "Urban Landscape profiles", fontFamily: "sans-serif", fontSize: 11, fontWeight: 700, fontStyle: "normal", width: 135.08837890625 }
      ]
    }
  })
  // DOCS: doc-e790db38fc2a278a — dataset context; frozen shared import, all raw rows retained
  .createData({ values: data })
  // DOCS: doc-e790db38fc2a278a — toNumber computed alias; raw BECADSTTDENS strings are not coerced by fieldType
  .createComputedData({
    id: "typed1",
    as: "sourceX",
    expression: { op: "toNumber", operand: { field: "BECADSTTDENS" } }
  })
  // DOCS: doc-e790db38fc2a278a — high-level facade, one point per row, guides disabled
  .createScatterPlot({
    x: "sourceX",
    y: { field: "URBAN_PROF", fieldType: "nominal" },
    guides: false
  })
  // DOCS: doc-e790db38fc2a278a — mark paint: source fill (radius from facade point default 2.5)
  .editPointMark({ fill: "#4c78a8" })
  .encodeOpacity({ value: 0.7 })
  .encodePointRadius({ value: 2.5 })
  // DOCS: doc-e790db38fc2a278a — reference scales: X quantitative original literal domain, nice disabled
  .editXScale({ domain: [0, 26000], nice: false })
  // DOCS: doc-e790db38fc2a278a — reference scales: Y nominal with exact source six-string order
  .editYScale({ type: "point", domain: ["1", "2", "3", "4", "5", "6"] })
  // DOCS: doc-48c72317a1a99e17 — paired complete axes created explicitly after facade
  .createXAxis({
    line: {},
    ticksAndLabels: {
      ticks: { length: 5, lineWidth: 1 },
      values: [0, 5000, 10000, 15000, 20000, 25000],
      labels: {
        offset: 5.5,
        alongOffset: 0.5,
        flush: false,
        fontSize: 10,
        fontFamily: "sans-serif"
      }
    },
    title: {
      text: "Population density",
      offset: 27.578125,
      fontSize: 11,
      fontFamily: "sans-serif"
    }
  })
  .editXAxisLabels({
    labelMap: [
      { value: 0, label: "0" },
      { value: 5000, label: "5,000" },
      { value: 10000, label: "10,000" },
      { value: 15000, label: "15,000" },
      { value: 20000, label: "20,000" },
      { value: 25000, label: "25,000" }
    ],
    color: "black"
  })
  .editXAxisLine({ color: "#888", lineWidth: 1 })
  .editXAxisTicks({ color: "#888" })
  .editXAxisTitle({ color: "black", fontWeight: 700 })
  .createYAxis({
    line: {},
    ticksAndLabels: {
      ticks: { length: 5, lineWidth: 1 },
      values: ["1", "2", "3", "4", "5", "6"],
      labels: {
        offset: 6.5,
        alongOffset: 0.890625,
        fontSize: 10,
        fontFamily: "sans-serif"
      }
    },
    title: {
      text: "Urban Landscape profiles",
      offset: 20.9833984375,
      rotation: { value: -90, unit: "degrees" },
      fontSize: 11,
      fontFamily: "sans-serif"
    }
  })
  .editYAxisLine({ color: "#888", lineWidth: 1 })
  .editYAxisTicks({ color: "#888" })
  .editYAxisLabels({ color: "black" })
  .editYAxisTitle({ color: "black", fontWeight: 700 })
  // DOCS: doc-48c72317a1a99e17 — source has vertical grid only
  .createGrid({
    horizontal: false,
    vertical: {
      scale: "x",
      values: [0, 5000, 10000, 15000, 20000, 25000],
      lineWidth: 1
    }
  })
  .editVerticalGrid({ color: "#ddd" });

// DOCS: doc-48c72317a1a99e17 — explicit concat composition of complete children
  return vconcat({
    programs: [
      { id: "panel0", program: child0 },
      { id: "panel1", program: child1 }
    ],
    gap: 10,
    align: "start"
  });
}