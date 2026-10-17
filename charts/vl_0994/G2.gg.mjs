// DOCS: doc-f1f94dec7d5389ca — composition recipe: hconcat/vconcat of child programs
// DOCS: doc-e790db38fc2a278a — createScatterPlot facade (H0), guides:false, point styling
// DOCS: doc-2e6240c00cb297cc — createScatterPlot declared options reference
// DOCS: doc-48c72317a1a99e17 — createScatterPlot with explicit guides:false and explicit axes

import { chart, vconcat } from "ggaction";
import data from "./data.json";

// Frozen measured source font widths (axis labels, titles, annotations).
const FONT_PROFILE = {
  schemaVersion: 1,
  id: "vl_0994-original-source-leaf-font-widths",
  measurements: [
    { text: "0.0", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 13.90625 },
    { text: "0.1", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 13.90625 },
    { text: "0.2", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 13.90625 },
    { text: "0.3", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 13.90625 },
    { text: "0.4", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 13.90625 },
    { text: "LCOE $/kWh", fontFamily: "sans-serif", fontSize: 11, fontWeight: 700, fontStyle: "normal", width: 66.015625 },
    { text: "Bioenergy levelized cost of energy", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 152.3125 },
    { text: "Concentrated solar power levelized cost of energy", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 221.796875 },
    { text: "Geothermal levelized cost of energy", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 159.53125 },
    { text: "Hydropower levelized cost of energy", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 161.203125 },
    { text: "Offshore wind levelized cost of energy", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 168.8125 },
    { text: "Onshore wind levelized cost of energy", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 168.984375 },
    { text: "Solar photovoltaic levelized cost of energy", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 186.78125 },
    { text: "2010", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 22.25 },
    { text: "2012", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 22.25 },
    { text: "2014", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 22.25 },
    { text: "2016", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 22.25 },
    { text: "2018", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 22.25 },
    { text: "2020", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 22.25 },
    { text: "Renewables Levelized Cost of Energy (LCOE)", fontFamily: "sans-serif", fontSize: 13, fontWeight: 700, fontStyle: "normal", width: 281.734375 },
    { text: "LCOE estimates the average cost per unit of energy generated across the lifetime of a power plant, Source:Our World in Data", fontFamily: "sans-serif", fontSize: 8, fontWeight: 400, fontStyle: "italic", width: 444.23828125 }
  ]
};

const COLOR_DOMAIN = [
  "Bioenergy levelized cost of energy",
  "Concentrated solar power levelized cost of energy",
  "Geothermal levelized cost of energy",
  "Hydropower levelized cost of energy",
  "Offshore wind levelized cost of energy",
  "Onshore wind levelized cost of energy",
  "Solar photovoltaic levelized cost of energy"
];

const COLOR_RANGE = [
  "rgb(37, 75, 115)",
  "rgb(28, 104, 138)",
  "rgb(29, 136, 131)",
  "rgb(41, 168, 105)",
  "rgb(122, 197, 74)",
  "rgb(202, 219, 32)",
  "rgb(255, 238, 64)"
];

// DOCS: doc-e790db38fc2a278a — each child is one complete createScatterPlot program
export function buildChart() {
  // ---------------- panel0 : Bioenergy ----------------
  const child0 = chart()
    .createCanvas({ width: 455, height: 223, margin: { top: 34, right: 220, bottom: 19, left: 65 } })
    .applyTextMetrics({ profile: FONT_PROFILE })
    .editCanvas({ background: "transparent", plotBorder: { color: "#ddd", lineWidth: 1 } })
    .createData({ id: "raw0", values: data })
    // DOCS: filterData primary mode oneOf preserves the 84 facet rows in original order
    .filterData({ id: "facet0", field: "Energy Cost", oneOf: ["Bioenergy levelized cost of energy"] })
    .createComputedData({
      id: "facet0Y",
      as: "CostNum",
      expression: {
        op: "if",
        condition: { op: "eq", left: { field: "Cost" }, right: { constant: "" } },
        then: { constant: 0 },
        else: { op: "toNumber", operand: { field: "Cost" } }
      }
    })
    .createScatterPlot({
      x: { field: "Year", fieldType: "temporal" },
      y: { field: "CostNum", fieldType: "quantitative" },
      guides: false
    })
    .encodeColor({ field: "Energy Cost", fieldType: "ordinal" })
    .editXScale({ domain: [1262304000000, 1609459200000] })
    .editYScale({ domain: [0, 0.45], zero: true })
    .editColorScale({ domain: COLOR_DOMAIN, range: COLOR_RANGE })
    .encodeRadius({ value: 2.7386127875258306 })
    .editPointMark({ stroke: false, opacity: 1 })
    .createYAxis({
      line: { color: "#888", lineWidth: 1 },
      ticksAndLabels: {
        values: [0, 0.1, 0.2, 0.3, 0.4],
        ticks: { length: 5, color: "#888", lineWidth: 1 },
        labels: { format: ".1f", offset: 7, fontSize: 10, fontFamily: "sans-serif", fontWeight: "normal", color: "black" }
      },
      title: { text: "LCOE $/kWh", offset: 33.9013671875, rotation: { value: -90, unit: "degrees" }, fontSize: 11, fontFamily: "sans-serif", fontWeight: 700, color: "black" }
    })
    .createAnnotation({ text: "Bioenergy levelized cost of energy", anchor: "plot-center", fontSize: 10 })
    .editTextMark({ target: "annotation", rotation: { value: -90, unit: "degrees" }, dx: -136.9013671875 })
    .editTextMark({ target: "annotation", fill: "black", baseline: "alphabetic" })
    .createTitle({ text: "Renewables Levelized Cost of Energy (LCOE)", titleStyle: { fontSize: 13, fontFamily: "sans-serif", fontWeight: 700, color: "black" }, subtitleStyle: { fontSize: 8, fontFamily: "sans-serif", fontStyle: "italic", color: "black" } })
    .editTitle({ offset: -10.953125, gap: 2.859375, alongOffset: -59.9013671875 })
    .editTitle({ subtitle: "LCOE estimates the average cost per unit of energy generated across the lifetime of a power plant, Source:Our World in Data" });

  // ---------------- panel1 : Concentrated solar power ----------------
  const child1 = chart()
    .createCanvas({ width: 455, height: 195, margin: { top: 6, right: 220, bottom: 19, left: 65 } })
    .applyTextMetrics({ profile: FONT_PROFILE })
    .editCanvas({ background: "transparent", plotBorder: { color: "#ddd", lineWidth: 1 } })
    .createData({ id: "raw1", values: data })
    .filterData({ id: "facet1", field: "Energy Cost", oneOf: ["Concentrated solar power levelized cost of energy"] })
    .createComputedData({
      id: "facet1Y",
      as: "CostNum",
      expression: {
        op: "if",
        condition: { op: "eq", left: { field: "Cost" }, right: { constant: "" } },
        then: { constant: 0 },
        else: { op: "toNumber", operand: { field: "Cost" } }
      }
    })
    .createScatterPlot({
      x: { field: "Year", fieldType: "temporal" },
      y: { field: "CostNum", fieldType: "quantitative" },
      guides: false
    })
    .encodeColor({ field: "Energy Cost", fieldType: "ordinal" })
    .editXScale({ domain: [1262304000000, 1609459200000] })
    .editYScale({ domain: [0, 0.45], zero: true })
    .editColorScale({ domain: COLOR_DOMAIN, range: COLOR_RANGE })
    .encodeRadius({ value: 2.7386127875258306 })
    .editPointMark({ stroke: false, opacity: 1 })
    .createYAxis({
      line: { color: "#888", lineWidth: 1 },
      ticksAndLabels: {
        values: [0, 0.1, 0.2, 0.3, 0.4],
        ticks: { length: 5, color: "#888", lineWidth: 1 },
        labels: { format: ".1f", offset: 7, fontSize: 10, fontFamily: "sans-serif", fontWeight: "normal", color: "black" }
      },
      title: { text: "LCOE $/kWh", offset: 33.9013671875, rotation: { value: -90, unit: "degrees" }, fontSize: 11, fontFamily: "sans-serif", fontWeight: 700, color: "black" }
    })
    .createAnnotation({ text: "Concentrated solar power levelized cost of energy", anchor: "plot-center", fontSize: 10 })
    .editTextMark({ target: "annotation", rotation: { value: -90, unit: "degrees" }, dx: -136.9013671875 })
    .editTextMark({ target: "annotation", fill: "black", baseline: "alphabetic" });

  // ---------------- panel2 : Geothermal ----------------
  const child2 = chart()
    .createCanvas({ width: 455, height: 195, margin: { top: 6, right: 220, bottom: 19, left: 65 } })
    .applyTextMetrics({ profile: FONT_PROFILE })
    .editCanvas({ background: "transparent", plotBorder: { color: "#ddd", lineWidth: 1 } })
    .createData({ id: "raw2", values: data })
    .filterData({ id: "facet2", field: "Energy Cost", oneOf: ["Geothermal levelized cost of energy"] })
    .createComputedData({
      id: "facet2Y",
      as: "CostNum",
      expression: {
        op: "if",
        condition: { op: "eq", left: { field: "Cost" }, right: { constant: "" } },
        then: { constant: 0 },
        else: { op: "toNumber", operand: { field: "Cost" } }
      }
    })
    .createScatterPlot({
      x: { field: "Year", fieldType: "temporal" },
      y: { field: "CostNum", fieldType: "quantitative" },
      guides: false
    })
    .encodeColor({ field: "Energy Cost", fieldType: "ordinal" })
    .editXScale({ domain: [1262304000000, 1609459200000] })
    .editYScale({ domain: [0, 0.45], zero: true })
    .editColorScale({ domain: COLOR_DOMAIN, range: COLOR_RANGE })
    .encodeRadius({ value: 2.7386127875258306 })
    .editPointMark({ stroke: false, opacity: 1 })
    .createYAxis({
      line: { color: "#888", lineWidth: 1 },
      ticksAndLabels: {
        values: [0, 0.1, 0.2, 0.3, 0.4],
        ticks: { length: 5, color: "#888", lineWidth: 1 },
        labels: { format: ".1f", offset: 7, fontSize: 10, fontFamily: "sans-serif", fontWeight: "normal", color: "black" }
      },
      title: { text: "LCOE $/kWh", offset: 33.9013671875, rotation: { value: -90, unit: "degrees" }, fontSize: 11, fontFamily: "sans-serif", fontWeight: 700, color: "black" }
    })
    .createAnnotation({ text: "Geothermal levelized cost of energy", anchor: "plot-center", fontSize: 10 })
    .editTextMark({ target: "annotation", rotation: { value: -90, unit: "degrees" }, dx: -136.9013671875 })
    .editTextMark({ target: "annotation", fill: "black", baseline: "alphabetic" });

  // ---------------- panel3 : Hydropower ----------------
  const child3 = chart()
    .createCanvas({ width: 455, height: 195, margin: { top: 6, right: 220, bottom: 19, left: 65 } })
    .applyTextMetrics({ profile: FONT_PROFILE })
    .editCanvas({ background: "transparent", plotBorder: { color: "#ddd", lineWidth: 1 } })
    .createData({ id: "raw3", values: data })
    .filterData({ id: "facet3", field: "Energy Cost", oneOf: ["Hydropower levelized cost of energy"] })
    .createComputedData({
      id: "facet3Y",
      as: "CostNum",
      expression: {
        op: "if",
        condition: { op: "eq", left: { field: "Cost" }, right: { constant: "" } },
        then: { constant: 0 },
        else: { op: "toNumber", operand: { field: "Cost" } }
      }
    })
    .createScatterPlot({
      x: { field: "Year", fieldType: "temporal" },
      y: { field: "CostNum", fieldType: "quantitative" },
      guides: false
    })
    .encodeColor({ field: "Energy Cost", fieldType: "ordinal" })
    .editXScale({ domain: [1262304000000, 1609459200000] })
    .editYScale({ domain: [0, 0.45], zero: true })
    .editColorScale({ domain: COLOR_DOMAIN, range: COLOR_RANGE })
    .encodeRadius({ value: 2.7386127875258306 })
    .editPointMark({ stroke: false, opacity: 1 })
    .createYAxis({
      line: { color: "#888", lineWidth: 1 },
      ticksAndLabels: {
        values: [0, 0.1, 0.2, 0.3, 0.4],
        ticks: { length: 5, color: "#888", lineWidth: 1 },
        labels: { format: ".1f", offset: 7, fontSize: 10, fontFamily: "sans-serif", fontWeight: "normal", color: "black" }
      },
      title: { text: "LCOE $/kWh", offset: 33.9013671875, rotation: { value: -90, unit: "degrees" }, fontSize: 11, fontFamily: "sans-serif", fontWeight: 700, color: "black" }
    })
    .createAnnotation({ text: "Hydropower levelized cost of energy", anchor: "plot-center", fontSize: 10 })
    .editTextMark({ target: "annotation", rotation: { value: -90, unit: "degrees" }, dx: -136.9013671875 })
    .editTextMark({ target: "annotation", fill: "black", baseline: "alphabetic" });

  // ---------------- panel4 : Offshore wind ----------------
  const child4 = chart()
    .createCanvas({ width: 455, height: 195, margin: { top: 6, right: 220, bottom: 19, left: 65 } })
    .applyTextMetrics({ profile: FONT_PROFILE })
    .editCanvas({ background: "transparent", plotBorder: { color: "#ddd", lineWidth: 1 } })
    .createData({ id: "raw4", values: data })
    .filterData({ id: "facet4", field: "Energy Cost", oneOf: ["Offshore wind levelized cost of energy"] })
    .createComputedData({
      id: "facet4Y",
      as: "CostNum",
      expression: {
        op: "if",
        condition: { op: "eq", left: { field: "Cost" }, right: { constant: "" } },
        then: { constant: 0 },
        else: { op: "toNumber", operand: { field: "Cost" } }
      }
    })
    .createScatterPlot({
      x: { field: "Year", fieldType: "temporal" },
      y: { field: "CostNum", fieldType: "quantitative" },
      guides: false
    })
    .encodeColor({ field: "Energy Cost", fieldType: "ordinal" })
    .editXScale({ domain: [1262304000000, 1609459200000] })
    .editYScale({ domain: [0, 0.45], zero: true })
    .editColorScale({ domain: COLOR_DOMAIN, range: COLOR_RANGE })
    .encodeRadius({ value: 2.7386127875258306 })
    .editPointMark({ stroke: false, opacity: 1 })
    .createYAxis({
      line: { color: "#888", lineWidth: 1 },
      ticksAndLabels: {
        values: [0, 0.1, 0.2, 0.3, 0.4],
        ticks: { length: 5, color: "#888", lineWidth: 1 },
        labels: { format: ".1f", offset: 7, fontSize: 10, fontFamily: "sans-serif", fontWeight: "normal", color: "black" }
      },
      title: { text: "LCOE $/kWh", offset: 33.9013671875, rotation: { value: -90, unit: "degrees" }, fontSize: 11, fontFamily: "sans-serif", fontWeight: 700, color: "black" }
    })
    .createAnnotation({ text: "Offshore wind levelized cost of energy", anchor: "plot-center", fontSize: 10 })
    .editTextMark({ target: "annotation", rotation: { value: -90, unit: "degrees" }, dx: -136.9013671875 })
    .editTextMark({ target: "annotation", fill: "black", baseline: "alphabetic" });

  // ---------------- panel5 : Onshore wind ----------------
  const child5 = chart()
    .createCanvas({ width: 455, height: 195, margin: { top: 6, right: 220, bottom: 19, left: 65 } })
    .applyTextMetrics({ profile: FONT_PROFILE })
    .editCanvas({ background: "transparent", plotBorder: { color: "#ddd", lineWidth: 1 } })
    .createData({ id: "raw5", values: data })
    .filterData({ id: "facet5", field: "Energy Cost", oneOf: ["Onshore wind levelized cost of energy"] })
    .createComputedData({
      id: "facet5Y",
      as: "CostNum",
      expression: {
        op: "if",
        condition: { op: "eq", left: { field: "Cost" }, right: { constant: "" } },
        then: { constant: 0 },
        else: { op: "toNumber", operand: { field: "Cost" } }
      }
    })
    .createScatterPlot({
      x: { field: "Year", fieldType: "temporal" },
      y: { field: "CostNum", fieldType: "quantitative" },
      guides: false
    })
    .encodeColor({ field: "Energy Cost", fieldType: "ordinal" })
    .editXScale({ domain: [1262304000000, 1609459200000] })
    .editYScale({ domain: [0, 0.45], zero: true })
    .editColorScale({ domain: COLOR_DOMAIN, range: COLOR_RANGE })
    .encodeRadius({ value: 2.7386127875258306 })
    .editPointMark({ stroke: false, opacity: 1 })
    .createYAxis({
      line: { color: "#888", lineWidth: 1 },
      ticksAndLabels: {
        values: [0, 0.1, 0.2, 0.3, 0.4],
        ticks: { length: 5, color: "#888", lineWidth: 1 },
        labels: { format: ".1f", offset: 7, fontSize: 10, fontFamily: "sans-serif", fontWeight: "normal", color: "black" }
      },
      title: { text: "LCOE $/kWh", offset: 33.9013671875, rotation: { value: -90, unit: "degrees" }, fontSize: 11, fontFamily: "sans-serif", fontWeight: 700, color: "black" }
    })
    .createAnnotation({ text: "Onshore wind levelized cost of energy", anchor: "plot-center", fontSize: 10 })
    .editTextMark({ target: "annotation", rotation: { value: -90, unit: "degrees" }, dx: -136.9013671875 })
    .editTextMark({ target: "annotation", fill: "black", baseline: "alphabetic" });

  // ---------------- panel6 : Solar photovoltaic (bottom row, has X axis) ----------------
  const child6 = chart()
    .createCanvas({ width: 455, height: 199, margin: { top: 6, right: 220, bottom: 23, left: 65 } })
    .applyTextMetrics({ profile: FONT_PROFILE })
    .editCanvas({ background: "transparent", plotBorder: { color: "#ddd", lineWidth: 1 } })
    .createData({ id: "raw6", values: data })
    .filterData({ id: "facet6", field: "Energy Cost", oneOf: ["Solar photovoltaic levelized cost of energy"] })
    .createComputedData({
      id: "facet6Y",
      as: "CostNum",
      expression: {
        op: "if",
        condition: { op: "eq", left: { field: "Cost" }, right: { constant: "" } },
        then: { constant: 0 },
        else: { op: "toNumber", operand: { field: "Cost" } }
      }
    })
    .createScatterPlot({
      x: { field: "Year", fieldType: "temporal" },
      y: { field: "CostNum", fieldType: "quantitative" },
      guides: false
    })
    .encodeColor({ field: "Energy Cost", fieldType: "ordinal" })
    .editXScale({ domain: [1262304000000, 1609459200000] })
    .editYScale({ domain: [0, 0.45], zero: true })
    .editColorScale({ domain: COLOR_DOMAIN, range: COLOR_RANGE })
    .encodeRadius({ value: 2.7386127875258306 })
    .editPointMark({ stroke: false, opacity: 1 })
    .createYAxis({
      line: { color: "#888", lineWidth: 1 },
      ticksAndLabels: {
        values: [0, 0.1, 0.2, 0.3, 0.4],
        ticks: { length: 5, color: "#888", lineWidth: 1 },
        labels: { format: ".1f", offset: 7, fontSize: 10, fontFamily: "sans-serif", fontWeight: "normal", color: "black" }
      },
      title: { text: "LCOE $/kWh", offset: 33.9013671875, rotation: { value: -90, unit: "degrees" }, fontSize: 11, fontFamily: "sans-serif", fontWeight: 700, color: "black" }
    })
    .createXAxis({
      line: { color: "#888", lineWidth: 1 },
      ticksAndLabels: {
        values: [1262304000000, 1325376000000, 1388534400000, 1451606400000, 1514764800000, 1577836800000],
        ticks: { length: 5, color: "#888", lineWidth: 1 },
        labels: { format: "%Y", offset: 7, fontSize: 10, fontFamily: "sans-serif", fontWeight: "normal", color: "black", flush: true, overlap: "allow" }
      },
      title: false
    })
    .createAnnotation({ text: "Solar photovoltaic levelized cost of energy", anchor: "plot-center", fontSize: 10 })
    .editTextMark({ target: "annotation", rotation: { value: -90, unit: "degrees" }, dx: -136.9013671875 })
    .editTextMark({ target: "annotation", fill: "black", baseline: "alphabetic" });

  // Measured vertical stack: canvases butt together (child1 panel top 229 = 223 + 6 top margin), gap 0.
  return vconcat({
    programs: [
      { id: "panel0", program: child0 },
      { id: "panel1", program: child1 },
      { id: "panel2", program: child2 },
      { id: "panel3", program: child3 },
      { id: "panel4", program: child4 },
      { id: "panel5", program: child5 },
      { id: "panel6", program: child6 }
    ],
    gap: 0,
    align: "start"
  });
}
