// DOCS: doc-f1f94dec7d5389ca (composition recipe: vconcat of complete child programs)
// DOCS: doc-e790db38fc2a278a (createScatterPlot facade)
// DOCS: doc-2e6240c00cb297cc (createScatterPlot reference)
import { chart, vconcat } from "ggaction";
import data from "./data.json";

// Frozen measured source font widths (applied per child program).
const fontProfile = {
  schemaVersion: 1,
  id: "vl_0998-original-source-leaf-font-widths",
  measurements: [
    { text: "Energy Source", fontFamily: "sans-serif", fontSize: 11, fontWeight: 700, fontStyle: "normal", width: 77.640625 },
    { text: "Bioenergy", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 45.03125 },
    { text: "Concentrated solar power", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 114.515625 },
    { text: "Geothermal", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 52.25 },
    { text: "Hydropower", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 53.921875 },
    { text: "Offshore wind energy", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 94.875 },
    { text: "Onshore wind energy", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 95.0625 },
    { text: "Solar photovoltaic", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 79.5 },
    { text: "2010", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 22.25 },
    { text: "2015", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 22.25 },
    { text: "2020", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 22.25 },
    { text: "100,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 36.15625 },
    { text: "150,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 36.15625 },
    { text: "Capacity (MW)", fontFamily: "sans-serif", fontSize: 11, fontWeight: 700, fontStyle: "normal", width: 75.78125 },
    { text: "2,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 25.03125 },
    { text: "4,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 25.03125 },
    { text: "6,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 25.03125 },
    { text: "10,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 30.59375 },
    { text: "12,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 30.59375 },
    { text: "14,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 30.59375 },
    { text: "16,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 30.59375 },
    { text: "1,000,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 44.5 },
    { text: "1,200,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 44.5 },
    { text: "1,400,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 44.5 },
    { text: "0", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 5.5625 },
    { text: "20,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 30.59375 },
    { text: "40,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 30.59375 },
    { text: "500,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 36.15625 },
    { text: "Renewable Energy Capacity", fontFamily: "sans-serif", fontSize: 13, fontWeight: 700, fontStyle: "normal", width: 173.40625 },
    { text: "Installed renewable electricity capacity (MW) by energy type", fontFamily: "sans-serif", fontSize: 8, fontWeight: 400, fontStyle: "italic", width: 212.73046875 },
    { text: "Source: International Renewable Energy Agency (IRENA).", fontFamily: "sans-serif", fontSize: 8, fontWeight: 400, fontStyle: "italic", width: 206.34375 }
  ]
};

const colorDomain = ["Bioenergy", "Concentrated solar power", "Geothermal", "Hydropower", "Offshore wind energy", "Onshore wind energy", "Solar photovoltaic"];
const colorRange = ["rgb(37, 75, 115)", "rgb(28, 104, 138)", "rgb(29, 136, 131)", "rgb(41, 168, 105)", "rgb(122, 197, 74)", "rgb(202, 219, 32)", "rgb(255, 238, 64)"];
const xDomain = [1262304000000, 1609459200000];
const pointRadius = 1.5811388300841898;

export function buildChart() {
  // panel0 — Bioenergy (doc-e790db38fc2a278a)
  const child0 = chart()
    .createCanvas({ width: 223, height: 145, margin: { top: 49, right: 18, bottom: 16, left: 125 } })
    .editCanvas({ plotBorder: { color: "#ddd", lineWidth: 1 } })
    .applyTextMetrics({ profile: fontProfile })
    .createData({ values: data })
    .filterData({ id: "p0rows", field: "Energy Source", oneOf: ["Bioenergy"] })
    .createComputedData({ id: "p0y", as: "CapacityMW", expression: { op: "if", condition: { op: "eq", left: { field: "Capacity" }, right: { constant: "" } }, then: { constant: 0 }, else: { op: "toNumber", operand: { field: "Capacity" } } } })
    .createScatterPlot({ x: { field: "Year", fieldType: "temporal" }, y: "CapacityMW", guides: false })
    .encodeColor({ field: "Energy Source", })
    .editColorScale({ domain: colorDomain, range: colorRange })
    .editXScale({ domain: xDomain })
    .editYScale({ domain: [60000, 150000] })
    .encodeRadius({ value: pointRadius })
    .editPointMark({ stroke: false, opacity: 1 })
    .createYAxis({
      line: { lineWidth: 1 },
      ticksAndLabels: { values: [100000, 150000], ticks: { length: 5, lineWidth: 1 }, labels: { offset: 7, fontSize: 10, fontFamily: "sans-serif" } },
      title: { text: "Capacity (MW)", at: "center", offset: 52.1474609375, rotation: -1.5707963267948966, fontSize: 11, fontFamily: "sans-serif" }
    })
    .editYAxisLine({ color: "#888" })
    .editYAxisTicksAndLabels({ ticks: { color: "#888" }, labels: { color: "black", format: ",.0f" } })
    .editYAxisTitle({ color: "black", fontWeight: 700 })
    .createAnnotation({ text: "Bioenergy", anchor: "plot-center", fontSize: 10 })
    .editTextMark({ rotation: -1.5707963267948966, dx: -120, baseline: "alphabetic" })
    .editTextMark({ fill: "black" })
    .createTitle({ text: "Renewable Energy Capacity", titleStyle: { fontSize: 13, fontFamily: "sans-serif", fontWeight: 700, color: "black" }, alongOffset: -120 })
    .editTitle({ offset: -10.953125, gap: 2.859375 })
    .editTitle({ subtitleStyle: { fontSize: 8, fontFamily: "sans-serif", fontStyle: "italic", color: "black" }, subtitle: "Installed renewable electricity capacity (MW) by energy type\nSource: International Renewable Energy Agency (IRENA). " });

  // panel1 — Concentrated solar power
  const child1 = chart()
    .createCanvas({ width: 223, height: 107, margin: { top: 6, right: 18, bottom: 21, left: 125 } })
    .editCanvas({ plotBorder: { color: "#ddd", lineWidth: 1 } })
    .applyTextMetrics({ profile: fontProfile })
    .createData({ values: data })
    .filterData({ id: "p1rows", field: "Energy Source", oneOf: ["Concentrated solar power"] })
    .createComputedData({ id: "p1y", as: "CapacityMW", expression: { op: "if", condition: { op: "eq", left: { field: "Capacity" }, right: { constant: "" } }, then: { constant: 0 }, else: { op: "toNumber", operand: { field: "Capacity" } } } })
    .createScatterPlot({ x: { field: "Year", fieldType: "temporal" }, y: "CapacityMW", guides: false })
    .encodeColor({ field: "Energy Source", })
    .editColorScale({ domain: colorDomain, range: colorRange })
    .editXScale({ domain: xDomain })
    .editYScale({ domain: [1000, 7000] })
    .encodeRadius({ value: pointRadius })
    .editPointMark({ stroke: false, opacity: 1 })
    .createYAxis({
      line: { lineWidth: 1 },
      ticksAndLabels: { values: [2000, 4000, 6000], ticks: { length: 5, lineWidth: 1 }, labels: { offset: 7, fontSize: 10, fontFamily: "sans-serif" } },
      title: { text: "Capacity (MW)", at: "center", offset: 41.0244140625, rotation: -1.5707963267948966, fontSize: 11, fontFamily: "sans-serif" }
    })
    .editYAxisLine({ color: "#888" })
    .editYAxisTicksAndLabels({ ticks: { color: "#888" }, labels: { color: "black", format: ",.0f" } })
    .editYAxisTitle({ color: "black", fontWeight: 700 })
    .createAnnotation({ text: "Concentrated solar power", anchor: "plot-center", fontSize: 10 })
    .editTextMark({ rotation: -1.5707963267948966, dx: -120, baseline: "alphabetic" })
    .editTextMark({ fill: "black" });

  // panel2 — Geothermal
  const child2 = chart()
    .createCanvas({ width: 223, height: 112, margin: { top: 6, right: 18, bottom: 26, left: 125 } })
    .editCanvas({ plotBorder: { color: "#ddd", lineWidth: 1 } })
    .applyTextMetrics({ profile: fontProfile })
    .createData({ values: data })
    .filterData({ id: "p2rows", field: "Energy Source", oneOf: ["Geothermal"] })
    .createComputedData({ id: "p2y", as: "CapacityMW", expression: { op: "if", condition: { op: "eq", left: { field: "Capacity" }, right: { constant: "" } }, then: { constant: 0 }, else: { op: "toNumber", operand: { field: "Capacity" } } } })
    .createScatterPlot({ x: { field: "Year", fieldType: "temporal" }, y: "CapacityMW", guides: false })
    .encodeColor({ field: "Energy Source", })
    .editColorScale({ domain: colorDomain, range: colorRange })
    .editXScale({ domain: xDomain })
    .editYScale({ domain: [10000, 16000] })
    .encodeRadius({ value: pointRadius })
    .editPointMark({ stroke: false, opacity: 1 })
    .createYAxis({
      line: { lineWidth: 1 },
      ticksAndLabels: { values: [10000, 12000, 14000, 16000], ticks: { length: 5, lineWidth: 1 }, labels: { offset: 7, fontSize: 10, fontFamily: "sans-serif" } },
      title: { text: "Capacity (MW)", at: "center", offset: 46.5859375, rotation: -1.5707963267948966, fontSize: 11, fontFamily: "sans-serif" }
    })
    .editYAxisLine({ color: "#888" })
    .editYAxisTicksAndLabels({ ticks: { color: "#888" }, labels: { color: "black", format: ",.0f" } })
    .editYAxisTitle({ color: "black", fontWeight: 700 })
    .createAnnotation({ text: "Geothermal", anchor: "plot-center", fontSize: 10 })
    .editTextMark({ rotation: -1.5707963267948966, dx: -120, baseline: "alphabetic" })
    .editTextMark({ fill: "black" });

  // panel3 — Hydropower (middle panel carries the rotated facet caption)
  const child3 = chart()
    .createCanvas({ width: 223, height: 108, margin: { top: 6, right: 18, bottom: 22, left: 125 } })
    .editCanvas({ plotBorder: { color: "#ddd", lineWidth: 1 } })
    .applyTextMetrics({ profile: fontProfile })
    .createData({ values: data })
    .filterData({ id: "p3rows", field: "Energy Source", oneOf: ["Hydropower"] })
    .createComputedData({ id: "p3y", as: "CapacityMW", expression: { op: "if", condition: { op: "eq", left: { field: "Capacity" }, right: { constant: "" } }, then: { constant: 0 }, else: { op: "toNumber", operand: { field: "Capacity" } } } })
    .createScatterPlot({ x: { field: "Year", fieldType: "temporal" }, y: "CapacityMW", guides: false })
    .encodeColor({ field: "Energy Source", })
    .editColorScale({ domain: colorDomain, range: colorRange })
    .editXScale({ domain: xDomain })
    .editYScale({ domain: [1000000, 1400000] })
    .encodeRadius({ value: pointRadius })
    .editPointMark({ stroke: false, opacity: 1 })
    .createYAxis({
      line: { lineWidth: 1 },
      ticksAndLabels: { values: [1000000, 1200000, 1400000], ticks: { length: 5, lineWidth: 1 }, labels: { offset: 7, fontSize: 10, fontFamily: "sans-serif" } },
      title: { text: "Capacity (MW)", at: "center", offset: 60.4873046875, rotation: -1.5707963267948966, fontSize: 11, fontFamily: "sans-serif" }
    })
    .editYAxisLine({ color: "#888" })
    .editYAxisTicksAndLabels({ ticks: { color: "#888" }, labels: { color: "black", format: ",.0f" } })
    .editYAxisTitle({ color: "black", fontWeight: 700 })
    .createAnnotation({ text: "Hydropower", anchor: "plot-center", fontSize: 10 })
    .editTextMark({ rotation: -1.5707963267948966, dx: -120, baseline: "alphabetic" })
    .editTextMark({ fill: "black" })
    .createAnnotation({ id: "facetCaption", text: "Energy Source", anchor: "plot-center", fontSize: 11 })
    .editTextMark({ target: "facetCaption", rotation: -1.5707963267948966, dx: -151 })
    .editTextMark({ target: "facetCaption", dy: -2, baseline: "alphabetic" })
    .editTextMark({ target: "facetCaption", fill: "black", fontWeight: 700 });

  // panel4 — Offshore wind energy
  const child4 = chart()
    .createCanvas({ width: 223, height: 107, margin: { top: 6, right: 18, bottom: 21, left: 125 } })
    .editCanvas({ plotBorder: { color: "#ddd", lineWidth: 1 } })
    .applyTextMetrics({ profile: fontProfile })
    .createData({ values: data })
    .filterData({ id: "p4rows", field: "Energy Source", oneOf: ["Offshore wind energy"] })
    .createComputedData({ id: "p4y", as: "CapacityMW", expression: { op: "if", condition: { op: "eq", left: { field: "Capacity" }, right: { constant: "" } }, then: { constant: 0 }, else: { op: "toNumber", operand: { field: "Capacity" } } } })
    .createScatterPlot({ x: { field: "Year", fieldType: "temporal" }, y: "CapacityMW", guides: false })
    .encodeColor({ field: "Energy Source", })
    .editColorScale({ domain: colorDomain, range: colorRange })
    .editXScale({ domain: xDomain })
    .editYScale({ domain: [0, 55000] })
    .encodeRadius({ value: pointRadius })
    .editPointMark({ stroke: false, opacity: 1 })
    .createYAxis({
      line: { lineWidth: 1 },
      ticksAndLabels: { values: [0, 20000, 40000], ticks: { length: 5, lineWidth: 1 }, labels: { offset: 7, fontSize: 10, fontFamily: "sans-serif" } },
      title: { text: "Capacity (MW)", at: "center", offset: 46.5859375, rotation: -1.5707963267948966, fontSize: 11, fontFamily: "sans-serif" }
    })
    .editYAxisLine({ color: "#888" })
    .editYAxisTicksAndLabels({ ticks: { color: "#888" }, labels: { color: "black", format: ",.0f" } })
    .editYAxisTitle({ color: "black", fontWeight: 700 })
    .createAnnotation({ text: "Offshore wind energy", anchor: "plot-center", fontSize: 10 })
    .editTextMark({ rotation: -1.5707963267948966, dx: -120, baseline: "alphabetic" })
    .editTextMark({ fill: "black" });

  // panel5 — Onshore wind energy
  const child5 = chart()
    .createCanvas({ width: 223, height: 102, margin: { top: 6, right: 18, bottom: 16, left: 125 } })
    .editCanvas({ plotBorder: { color: "#ddd", lineWidth: 1 } })
    .applyTextMetrics({ profile: fontProfile })
    .createData({ values: data })
    .filterData({ id: "p5rows", field: "Energy Source", oneOf: ["Onshore wind energy"] })
    .createComputedData({ id: "p5y", as: "CapacityMW", expression: { op: "if", condition: { op: "eq", left: { field: "Capacity" }, right: { constant: "" } }, then: { constant: 0 }, else: { op: "toNumber", operand: { field: "Capacity" } } } })
    .createScatterPlot({ x: { field: "Year", fieldType: "temporal" }, y: "CapacityMW", guides: false })
    .encodeColor({ field: "Energy Source", })
    .editColorScale({ domain: colorDomain, range: colorRange })
    .editXScale({ domain: xDomain })
    .editYScale({ domain: [150000, 800000] })
    .encodeRadius({ value: pointRadius })
    .editPointMark({ stroke: false, opacity: 1 })
    .createYAxis({
      line: { lineWidth: 1 },
      ticksAndLabels: { values: [500000], ticks: { length: 5, lineWidth: 1 }, labels: { offset: 7, fontSize: 10, fontFamily: "sans-serif" } },
      title: { text: "Capacity (MW)", at: "center", offset: 52.1474609375, rotation: -1.5707963267948966, fontSize: 11, fontFamily: "sans-serif" }
    })
    .editYAxisLine({ color: "#888" })
    .editYAxisTicksAndLabels({ ticks: { color: "#888" }, labels: { color: "black", format: ",.0f" } })
    .editYAxisTitle({ color: "black", fontWeight: 700 })
    .createAnnotation({ text: "Onshore wind energy", anchor: "plot-center", fontSize: 10 })
    .editTextMark({ rotation: -1.5707963267948966, dx: -120, baseline: "alphabetic" })
    .editTextMark({ fill: "black" });

  // panel6 — Solar photovoltaic (bottom panel carries the shared X axis)
  const child6 = chart()
    .createCanvas({ width: 223, height: 114, margin: { top: 6, right: 18, bottom: 28, left: 125 } })
    .editCanvas({ plotBorder: { color: "#ddd", lineWidth: 1 } })
    .applyTextMetrics({ profile: fontProfile })
    .createData({ values: data })
    .filterData({ id: "p6rows", field: "Energy Source", oneOf: ["Solar photovoltaic"] })
    .createComputedData({ id: "p6y", as: "CapacityMW", expression: { op: "if", condition: { op: "eq", left: { field: "Capacity" }, right: { constant: "" } }, then: { constant: 0 }, else: { op: "toNumber", operand: { field: "Capacity" } } } })
    .createScatterPlot({ x: { field: "Year", fieldType: "temporal" }, y: "CapacityMW", guides: false })
    .encodeColor({ field: "Energy Source", })
    .editColorScale({ domain: colorDomain, range: colorRange })
    .editXScale({ domain: xDomain })
    .editYScale({ domain: [0, 900000] })
    .encodeRadius({ value: pointRadius })
    .editPointMark({ stroke: false, opacity: 1 })
    .createXAxis({
      line: { lineWidth: 1 },
      ticksAndLabels: { values: [1262304000000, 1420070400000, 1577836800000], ticks: { length: 5, lineWidth: 1 }, labels: { offset: 7, fontSize: 10, fontFamily: "sans-serif", flush: true } },
      title: false
    })
    .editXAxisLine({ color: "#888" })
    .editXAxisTicksAndLabels({ ticks: { color: "#888" }, labels: { color: "black", format: "%Y" } })
    .createYAxis({
      line: { lineWidth: 1 },
      ticksAndLabels: { values: [0, 500000], ticks: { length: 5, lineWidth: 1 }, labels: { offset: 7, fontSize: 10, fontFamily: "sans-serif" } },
      title: { text: "Capacity (MW)", at: "center", offset: 52.1474609375, rotation: -1.5707963267948966, fontSize: 11, fontFamily: "sans-serif" }
    })
    .editYAxisLine({ color: "#888" })
    .editYAxisTicksAndLabels({ ticks: { color: "#888" }, labels: { color: "black", format: ",.0f" } })
    .editYAxisTitle({ color: "black", fontWeight: 700 })
    .createAnnotation({ text: "Solar photovoltaic", anchor: "plot-center", fontSize: 10 })
    .editTextMark({ rotation: -1.5707963267948966, dx: -120, baseline: "alphabetic" })
    .editTextMark({ fill: "black" });

  // Measured seam: total child heights 795 vs frozen parent extent 801 across 6 seams.
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