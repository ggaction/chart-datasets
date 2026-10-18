// DOCS: doc-f1f94dec7d5389ca (composition recipe: hconcat/vconcat child programs)
// DOCS: doc-e790db38fc2a278a (createScatterPlot facade)
// DOCS: doc-2e6240c00cb297cc (createScatterPlot reference)
import { chart, vconcat } from "ggaction";
import data from "./data.json";

const METRICS = {
  schemaVersion: 1,
  id: "vl_0995-original-source-leaf-font-widths",
  measurements: [
    { text: "Energy Cost", fontFamily: "sans-serif", fontSize: 11, fontWeight: 700, fontStyle: "normal", width: 64.796875 },
    { text: "0.0", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 13.90625 },
    { text: "0.2", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 13.90625 },
    { text: "0.4", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 13.90625 },
    { text: "LCOE $/kWh", fontFamily: "sans-serif", fontSize: 11, fontWeight: 700, fontStyle: "normal", width: 66.015625 },
    { text: "Bioenergy", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 45.03125 },
    { text: "Concentrated solar power", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 114.515625 },
    { text: "Geothermal", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 52.25 },
    { text: "Hydropower", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 53.921875 },
    { text: "Offshore wind", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 61.53125 },
    { text: "Onshore wind", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 61.703125 },
    { text: "Solar photovoltaic", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 79.5 },
    { text: "2010", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 22.25 },
    { text: "2015", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 22.25 },
    { text: "2020", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 22.25 },
    { text: "Renewables LCOE", fontFamily: "sans-serif", fontSize: 13, fontWeight: 700, fontStyle: "normal", width: 114.875 },
    { text: "LCOE estimates the average cost per unit of energy generated", fontFamily: "sans-serif", fontSize: 8, fontWeight: 400, fontStyle: "italic", width: 223.05078125 },
    { text: "across the lifetime of a power plant, Source: Our World in Data", fontFamily: "sans-serif", fontSize: 8, fontWeight: 400, fontStyle: "italic", width: 221.88671875 }
  ]
};

const COLOR_DOMAIN = ["Bioenergy", "Concentrated solar power", "Geothermal", "Hydropower", "Offshore wind", "Onshore wind", "Solar photovoltaic"];

const COLOR_RANGE = ["rgb(37, 75, 115)", "rgb(28, 104, 138)", "rgb(29, 136, 131)", "rgb(41, 168, 105)", "rgb(122, 197, 74)", "rgb(202, 219, 32)", "rgb(255, 238, 64)"];

const X_DOMAIN = [1262304000000, 1609459200000];

const POINT_RADIUS = 1.5811388300841898;

export function buildChart() {
  // DOCS: doc-e790db38fc2a278a
  const child0 = chart()
    .createCanvas({ width: 233, height: 142, margin: { top: 44, right: 58, bottom: 18, left: 95 } })
    .applyTextMetrics({ profile: METRICS })
    .createData({ values: data })
    .createComputedData({ id: "fresh", as: "freshCost", expression: { op: "if", condition: { op: "eq", left: { field: "Cost" }, right: { constant: "" } }, then: { constant: 0 }, else: { op: "toNumber", operand: { field: "Cost" } } } })
    .filterData({ id: "rowsBioenergy", field: "Energy Cost", oneOf: ["Bioenergy"] })
    .createScatterPlot({
      x: { field: "Year", fieldType: "temporal" },
      y: { field: "freshCost", fieldType: "quantitative" },
      guides: false
    })
    .editXScale({ domain: X_DOMAIN })
    .editYScale({ domain: [0, 0.45], zero: true })
    .encodeRadius({ value: POINT_RADIUS })
    .encodeColor({ field: "Energy Cost", fieldType: "ordinal" })
    .editColorScale({ domain: COLOR_DOMAIN, range: COLOR_RANGE })
    .editPointMark({ stroke: false, opacity: 1 })
    .editCanvas({ plotBorder: { color: "#ddd", lineWidth: 1 } })
    .createYAxis({
      line: { lineWidth: 1 },
      ticksAndLabels: { values: [0, 0.2, 0.4], ticks: { length: 5, lineWidth: 1 }, labels: { offset: 7, fontSize: 10, fontFamily: "sans-serif" } },
      title: { text: "LCOE $/kWh", offset: 32.9013671875, rotation: { value: -90, unit: "degrees" }, fontSize: 11, fontFamily: "sans-serif" }
    })
    .editYAxis({ line: { color: "#888" }, ticks: { color: "#888" }, labels: { color: "black", format: ".1f" } })
    .editYAxis({ title: { fontWeight: 700, color: "black" } })
    .createAnnotation({ text: "Bioenergy", anchor: "plot-center", fontSize: 10 })
    .editTextMark({ target: "annotation", rotation: { value: -90, unit: "degrees" }, dx: -90.9013671875 })
    .editTextMark({ target: "annotation", baseline: "alphabetic", fill: "black" })
    .createTitle({ text: "Renewables LCOE", titleStyle: { fontSize: 13, fontWeight: 700, color: "black" }, alongOffset: -90 })
    .editTitle({ offset: -10.953125, gap: 2.859375 })
    .editTitle({ subtitleStyle: { fontSize: 8, fontStyle: "italic", color: "black" }, subtitle: "LCOE estimates the average cost per unit of energy generated\nacross the lifetime of a power plant, Source: Our World in Data" });

  const child1 = chart()
    .createCanvas({ width: 233, height: 104, margin: { top: 6, right: 58, bottom: 18, left: 95 } })
    .applyTextMetrics({ profile: METRICS })
    .createData({ values: data })
    .createComputedData({ id: "fresh", as: "freshCost", expression: { op: "if", condition: { op: "eq", left: { field: "Cost" }, right: { constant: "" } }, then: { constant: 0 }, else: { op: "toNumber", operand: { field: "Cost" } } } })
    .filterData({ id: "rowsConcentratedSolarPower", field: "Energy Cost", oneOf: ["Concentrated solar power"] })
    .createScatterPlot({
      x: { field: "Year", fieldType: "temporal" },
      y: { field: "freshCost", fieldType: "quantitative" },
      guides: false
    })
    .editXScale({ domain: X_DOMAIN })
    .editYScale({ domain: [0, 0.45], zero: true })
    .encodeRadius({ value: POINT_RADIUS })
    .encodeColor({ field: "Energy Cost", fieldType: "ordinal" })
    .editColorScale({ domain: COLOR_DOMAIN, range: COLOR_RANGE })
    .editPointMark({ stroke: false, opacity: 1 })
    .editCanvas({ plotBorder: { color: "#ddd", lineWidth: 1 } })
    .createYAxis({
      line: { lineWidth: 1 },
      ticksAndLabels: { values: [0, 0.2, 0.4], ticks: { length: 5, lineWidth: 1 }, labels: { offset: 7, fontSize: 10, fontFamily: "sans-serif" } },
      title: { text: "LCOE $/kWh", offset: 32.9013671875, rotation: { value: -90, unit: "degrees" }, fontSize: 11, fontFamily: "sans-serif" }
    })
    .editYAxis({ line: { color: "#888" }, ticks: { color: "#888" }, labels: { color: "black", format: ".1f" } })
    .editYAxis({ title: { fontWeight: 700, color: "black" } })
    .createAnnotation({ text: "Concentrated solar power", anchor: "plot-center", fontSize: 10 })
    .editTextMark({ target: "annotation", rotation: { value: -90, unit: "degrees" }, dx: -90.9013671875 })
    .editTextMark({ target: "annotation", baseline: "alphabetic", fill: "black" });

  const child2 = chart()
    .createCanvas({ width: 233, height: 104, margin: { top: 6, right: 58, bottom: 18, left: 95 } })
    .applyTextMetrics({ profile: METRICS })
    .createData({ values: data })
    .createComputedData({ id: "fresh", as: "freshCost", expression: { op: "if", condition: { op: "eq", left: { field: "Cost" }, right: { constant: "" } }, then: { constant: 0 }, else: { op: "toNumber", operand: { field: "Cost" } } } })
    .filterData({ id: "rowsGeothermal", field: "Energy Cost", oneOf: ["Geothermal"] })
    .createScatterPlot({
      x: { field: "Year", fieldType: "temporal" },
      y: { field: "freshCost", fieldType: "quantitative" },
      guides: false
    })
    .editXScale({ domain: X_DOMAIN })
    .editYScale({ domain: [0, 0.45], zero: true })
    .encodeRadius({ value: POINT_RADIUS })
    .encodeColor({ field: "Energy Cost", fieldType: "ordinal" })
    .editColorScale({ domain: COLOR_DOMAIN, range: COLOR_RANGE })
    .editPointMark({ stroke: false, opacity: 1 })
    .editCanvas({ plotBorder: { color: "#ddd", lineWidth: 1 } })
    .createYAxis({
      line: { lineWidth: 1 },
      ticksAndLabels: { values: [0, 0.2, 0.4], ticks: { length: 5, lineWidth: 1 }, labels: { offset: 7, fontSize: 10, fontFamily: "sans-serif" } },
      title: { text: "LCOE $/kWh", offset: 32.9013671875, rotation: { value: -90, unit: "degrees" }, fontSize: 11, fontFamily: "sans-serif" }
    })
    .editYAxis({ line: { color: "#888" }, ticks: { color: "#888" }, labels: { color: "black", format: ".1f" } })
    .editYAxis({ title: { fontWeight: 700, color: "black" } })
    .createAnnotation({ text: "Geothermal", anchor: "plot-center", fontSize: 10 })
    .editTextMark({ target: "annotation", rotation: { value: -90, unit: "degrees" }, dx: -90.9013671875 })
    .editTextMark({ target: "annotation", baseline: "alphabetic", fill: "black" });

  const child3 = chart()
    .createCanvas({ width: 233, height: 104, margin: { top: 6, right: 58, bottom: 18, left: 95 } })
    .applyTextMetrics({ profile: METRICS })
    .createData({ values: data })
    .createComputedData({ id: "fresh", as: "freshCost", expression: { op: "if", condition: { op: "eq", left: { field: "Cost" }, right: { constant: "" } }, then: { constant: 0 }, else: { op: "toNumber", operand: { field: "Cost" } } } })
    .filterData({ id: "rowsHydropower", field: "Energy Cost", oneOf: ["Hydropower"] })
    .createScatterPlot({
      x: { field: "Year", fieldType: "temporal" },
      y: { field: "freshCost", fieldType: "quantitative" },
      guides: false
    })
    .editXScale({ domain: X_DOMAIN })
    .editYScale({ domain: [0, 0.45], zero: true })
    .encodeRadius({ value: POINT_RADIUS })
    .encodeColor({ field: "Energy Cost", fieldType: "ordinal" })
    .editColorScale({ domain: COLOR_DOMAIN, range: COLOR_RANGE })
    .editPointMark({ stroke: false, opacity: 1 })
    .editCanvas({ plotBorder: { color: "#ddd", lineWidth: 1 } })
    .createYAxis({
      line: { lineWidth: 1 },
      ticksAndLabels: { values: [0, 0.2, 0.4], ticks: { length: 5, lineWidth: 1 }, labels: { offset: 7, fontSize: 10, fontFamily: "sans-serif" } },
      title: { text: "LCOE $/kWh", offset: 32.9013671875, rotation: { value: -90, unit: "degrees" }, fontSize: 11, fontFamily: "sans-serif" }
    })
    .editYAxis({ line: { color: "#888" }, ticks: { color: "#888" }, labels: { color: "black", format: ".1f" } })
    .editYAxis({ title: { fontWeight: 700, color: "black" } })
    .createAnnotation({ text: "Hydropower", anchor: "plot-center", fontSize: 10 })
    .editTextMark({ target: "annotation", rotation: { value: -90, unit: "degrees" }, dx: -90.9013671875 })
    .editTextMark({ target: "annotation", baseline: "alphabetic", fill: "black" })
    .createAnnotation({ id: "facetCaption", text: "Energy Cost", anchor: "plot-center", fontSize: 11 })
    .editTextMark({ target: "facetCaption", rotation: { value: -90, unit: "degrees" }, dx: -121 })
    .editTextMark({ target: "facetCaption", baseline: "alphabetic" })
    .editTextMark({ target: "facetCaption", fill: "black", fontWeight: 700 });

  const child4 = chart()
    .createCanvas({ width: 233, height: 104, margin: { top: 6, right: 58, bottom: 18, left: 95 } })
    .applyTextMetrics({ profile: METRICS })
    .createData({ values: data })
    .createComputedData({ id: "fresh", as: "freshCost", expression: { op: "if", condition: { op: "eq", left: { field: "Cost" }, right: { constant: "" } }, then: { constant: 0 }, else: { op: "toNumber", operand: { field: "Cost" } } } })
    .filterData({ id: "rowsOffshoreWind", field: "Energy Cost", oneOf: ["Offshore wind"] })
    .createScatterPlot({
      x: { field: "Year", fieldType: "temporal" },
      y: { field: "freshCost", fieldType: "quantitative" },
      guides: false
    })
    .editXScale({ domain: X_DOMAIN })
    .editYScale({ domain: [0, 0.45], zero: true })
    .encodeRadius({ value: POINT_RADIUS })
    .encodeColor({ field: "Energy Cost", fieldType: "ordinal" })
    .editColorScale({ domain: COLOR_DOMAIN, range: COLOR_RANGE })
    .editPointMark({ stroke: false, opacity: 1 })
    .editCanvas({ plotBorder: { color: "#ddd", lineWidth: 1 } })
    .createYAxis({
      line: { lineWidth: 1 },
      ticksAndLabels: { values: [0, 0.2, 0.4], ticks: { length: 5, lineWidth: 1 }, labels: { offset: 7, fontSize: 10, fontFamily: "sans-serif" } },
      title: { text: "LCOE $/kWh", offset: 32.9013671875, rotation: { value: -90, unit: "degrees" }, fontSize: 11, fontFamily: "sans-serif" }
    })
    .editYAxis({ line: { color: "#888" }, ticks: { color: "#888" }, labels: { color: "black", format: ".1f" } })
    .editYAxis({ title: { fontWeight: 700, color: "black" } })
    .createAnnotation({ text: "Offshore wind", anchor: "plot-center", fontSize: 10 })
    .editTextMark({ target: "annotation", rotation: { value: -90, unit: "degrees" }, dx: -90.9013671875 })
    .editTextMark({ target: "annotation", baseline: "alphabetic", fill: "black" });

  const child5 = chart()
    .createCanvas({ width: 233, height: 104, margin: { top: 6, right: 58, bottom: 18, left: 95 } })
    .applyTextMetrics({ profile: METRICS })
    .createData({ values: data })
    .createComputedData({ id: "fresh", as: "freshCost", expression: { op: "if", condition: { op: "eq", left: { field: "Cost" }, right: { constant: "" } }, then: { constant: 0 }, else: { op: "toNumber", operand: { field: "Cost" } } } })
    .filterData({ id: "rowsOnshoreWind", field: "Energy Cost", oneOf: ["Onshore wind"] })
    .createScatterPlot({
      x: { field: "Year", fieldType: "temporal" },
      y: { field: "freshCost", fieldType: "quantitative" },
      guides: false
    })
    .editXScale({ domain: X_DOMAIN })
    .editYScale({ domain: [0, 0.45], zero: true })
    .encodeRadius({ value: POINT_RADIUS })
    .encodeColor({ field: "Energy Cost", fieldType: "ordinal" })
    .editColorScale({ domain: COLOR_DOMAIN, range: COLOR_RANGE })
    .editPointMark({ stroke: false, opacity: 1 })
    .editCanvas({ plotBorder: { color: "#ddd", lineWidth: 1 } })
    .createYAxis({
      line: { lineWidth: 1 },
      ticksAndLabels: { values: [0, 0.2, 0.4], ticks: { length: 5, lineWidth: 1 }, labels: { offset: 7, fontSize: 10, fontFamily: "sans-serif" } },
      title: { text: "LCOE $/kWh", offset: 32.9013671875, rotation: { value: -90, unit: "degrees" }, fontSize: 11, fontFamily: "sans-serif" }
    })
    .editYAxis({ line: { color: "#888" }, ticks: { color: "#888" }, labels: { color: "black", format: ".1f" } })
    .editYAxis({ title: { fontWeight: 700, color: "black" } })
    .createAnnotation({ text: "Onshore wind", anchor: "plot-center", fontSize: 10 })
    .editTextMark({ target: "annotation", rotation: { value: -90, unit: "degrees" }, dx: -90.9013671875 })
    .editTextMark({ target: "annotation", baseline: "alphabetic", fill: "black" });

  const child6 = chart()
    .createCanvas({ width: 233, height: 109, margin: { top: 6, right: 58, bottom: 23, left: 95 } })
    .applyTextMetrics({ profile: METRICS })
    .createData({ values: data })
    .createComputedData({ id: "fresh", as: "freshCost", expression: { op: "if", condition: { op: "eq", left: { field: "Cost" }, right: { constant: "" } }, then: { constant: 0 }, else: { op: "toNumber", operand: { field: "Cost" } } } })
    .filterData({ id: "rowsSolarPhotovoltaic", field: "Energy Cost", oneOf: ["Solar photovoltaic"] })
    .createScatterPlot({
      x: { field: "Year", fieldType: "temporal" },
      y: { field: "freshCost", fieldType: "quantitative" },
      guides: false
    })
    .editXScale({ domain: X_DOMAIN })
    .editYScale({ domain: [0, 0.45], zero: true })
    .encodeRadius({ value: POINT_RADIUS })
    .encodeColor({ field: "Energy Cost", fieldType: "ordinal" })
    .editColorScale({ domain: COLOR_DOMAIN, range: COLOR_RANGE })
    .editPointMark({ stroke: false, opacity: 1 })
    .editCanvas({ plotBorder: { color: "#ddd", lineWidth: 1 } })
    .createYAxis({
      line: { lineWidth: 1 },
      ticksAndLabels: { values: [0, 0.2, 0.4], ticks: { length: 5, lineWidth: 1 }, labels: { offset: 7, fontSize: 10, fontFamily: "sans-serif" } },
      title: { text: "LCOE $/kWh", offset: 32.9013671875, rotation: { value: -90, unit: "degrees" }, fontSize: 11, fontFamily: "sans-serif" }
    })
    .editYAxis({ line: { color: "#888" }, ticks: { color: "#888" }, labels: { color: "black", format: ".1f" } })
    .editYAxis({ title: { fontWeight: 700, color: "black" } })
    .createXAxis({
      line: { lineWidth: 1 },
      ticksAndLabels: { values: [1262304000000, 1420070400000, 1577836800000], ticks: { length: 5, lineWidth: 1 }, labels: { offset: 7, fontSize: 10, fontFamily: "sans-serif", flush: true } },
      title: false
    })
    .editXAxis({ line: { color: "#888" }, ticks: { color: "#888" }, labels: { color: "black", format: "%Y" } })
    .createAnnotation({ text: "Solar photovoltaic", anchor: "plot-center", fontSize: 10 })
    .editTextMark({ target: "annotation", rotation: { value: -90, unit: "degrees" }, dx: -90.9013671875 })
    .editTextMark({ target: "annotation", baseline: "alphabetic", fill: "black" });

  // DOCS: doc-f1f94dec7d5389ca
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