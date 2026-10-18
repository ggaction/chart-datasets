import { chart, vconcat } from "ggaction";
import data from "./data.json";

// DOCS: doc-f1f94dec7d5389ca Composition Recipe — vconcat of complete child programs, parent Canvas inferred from children + measured gap.
// Measured source row layout: every child supplies its own top/bottom margins (6px inter-panel clearance), so the parent gap is 0 (measured layout fact, not a default).
// DOCS: doc-e790db38fc2a278a createScatterPlot — point-per-row facade, x/y facades, guides:false, scoped per-child resources.

const FONT_PROFILE = {
  schemaVersion: 1,
  id: "vl_0997-original-source-leaf-font-widths",
  measurements: [
    { text: "Bioenergy", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 45.03125 },
    { text: "Concentrated solar power", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 114.515625 },
    { text: "Geothermal", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 52.25 },
    { text: "Hydropower", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 53.921875 },
    { text: "Offshore wind energy", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 94.875 },
    { text: "Onshore wind energy", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 95.0625 },
    { text: "Solar photovoltaic", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 79.5 },
    { text: "2010", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 22.25 },
    { text: "2012", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 22.25 },
    { text: "2014", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 22.25 },
    { text: "2016", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 22.25 },
    { text: "2018", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 22.25 },
    { text: "2020", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 22.25 },
    { text: "60,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 30.59375 },
    { text: "80,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 30.59375 },
    { text: "100,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 36.15625 },
    { text: "120,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 36.15625 },
    { text: "140,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 36.15625 },
    { text: "Capacity (MW)", fontFamily: "sans-serif", fontSize: 11, fontWeight: 700, fontStyle: "normal", width: 75.78125 },
    { text: "1,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 25.03125 },
    { text: "2,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 25.03125 },
    { text: "3,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 25.03125 },
    { text: "4,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 25.03125 },
    { text: "5,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 25.03125 },
    { text: "6,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 25.03125 },
    { text: "7,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 25.03125 },
    { text: "10,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 30.59375 },
    { text: "11,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 29.859375 },
    { text: "12,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 30.59375 },
    { text: "13,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 30.59375 },
    { text: "14,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 30.59375 },
    { text: "15,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 30.59375 },
    { text: "16,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 30.59375 },
    { text: "1,000,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 44.5 },
    { text: "1,100,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 44.5 },
    { text: "1,200,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 44.5 },
    { text: "1,300,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 44.5 },
    { text: "1,400,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 44.5 },
    { text: "0", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 5.5625 },
    { text: "20,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 30.59375 },
    { text: "30,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 30.59375 },
    { text: "40,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 30.59375 },
    { text: "50,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 30.59375 },
    { text: "200,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 36.15625 },
    { text: "300,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 36.15625 },
    { text: "400,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 36.15625 },
    { text: "500,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 36.15625 },
    { text: "600,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 36.15625 },
    { text: "700,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 36.15625 },
    { text: "800,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 36.15625 },
    { text: "Renewable Energy Capacity", fontFamily: "sans-serif", fontSize: 13, fontWeight: 700, fontStyle: "normal", width: 173.40625 },
    { text: "Installed renewable electricity capacity (MW) by energy type, Source: International Renewable Energy Agency (IRENA)", fontFamily: "sans-serif", fontSize: 8, fontWeight: 400, fontStyle: "italic", width: 421.10546875 }
  ]
};

const COLOR_DOMAIN = ["Bioenergy", "Concentrated solar power", "Geothermal", "Hydropower", "Offshore wind energy", "Onshore wind energy", "Solar photovoltaic"];
const COLOR_RANGE = ["rgb(37, 75, 115)", "rgb(28, 104, 138)", "rgb(29, 136, 131)", "rgb(41, 168, 105)", "rgb(122, 197, 74)", "rgb(202, 219, 32)", "rgb(255, 238, 64)"];
const X_DOMAIN = [1262304000000, 1609459200000];





export function buildChart() {
  const child0 = chart()
    .createCanvas({ width: 433, height: 230, margin: { top: 34, right: 169, bottom: 26, left: 94 } })
    .applyTextMetrics({ profile: FONT_PROFILE })
    .editCanvas({ plotBorder: { color: "#ddd", lineWidth: 1 } })
    .createData({ values: data })
    .filterData({ id: "f0", field: "Energy Source", oneOf: ["Bioenergy"] })
    .createComputedData({
      id: "c0",
      as: "CapacityMW",
      expression: {
        op: "if",
        condition: { op: "eq", left: { field: "Capacity" }, right: { constant: "" } },
        then: { constant: 0 },
        else: { op: "toNumber", operand: { field: "Capacity" } }
      }
    })
        .createScatterPlot({ x: { field: "Year", fieldType: "temporal" }, y: { field: "CapacityMW" }, guides: false }).editXScale({ domain: X_DOMAIN }).editYScale({ zero: false, domain: [60000, 150000] }).encodeColor({ field: "Energy Source" }).editColorScale({ domain: COLOR_DOMAIN, range: COLOR_RANGE })
    .encodeRadius({ value: 2.7386127875258306 })
    .editPointMark({ stroke: false, opacity: 1 })
    .createYAxis({ line: { lineWidth: 1 }, ticksAndLabels: { ticks: { length: 5 }, labels: { offset: 7, fontSize: 10, fontFamily: "sans-serif" }, values: [60000, 80000, 100000, 120000, 140000] }, title: { text: "Capacity (MW)", fontSize: 11, fontFamily: "sans-serif", offset: 52.1474609375, rotation: { value: -90, unit: "degrees" } } }).editYAxis({ line: { color: "#888" }, ticksAndLabels: { ticks: { color: "#888" }, labels: { format: ",.0f", color: "black" } }, title: { color: "black", fontWeight: 700 } }).createAnnotation({ text: "Bioenergy", anchor: "plot-center", fontSize: 10 })
    .editTextMark({ target: "annotation", rotation: { value: -90, unit: "degrees" }, dx: -165 })
    .editTextMark({ target: "annotation", fill: "black", baseline: "alphabetic" })
    .createTitle({ text: "Renewable Energy Capacity", titleStyle: { color: "black", fontSize: 13, fontWeight: 700, fontFamily: "sans-serif" }, subtitleStyle: { color: "black", fontSize: 8, fontStyle: "italic", fontFamily: "sans-serif" } }).editTitle({ gap: 2.859375, offset: -10.953125, alongOffset: -88 }).editTitle({ subtitle: "Installed renewable electricity capacity (MW) by energy type, Source: International Renewable Energy Agency (IRENA)" });

  const child1 = chart()
    .createCanvas({ width: 433, height: 202, margin: { top: 6, right: 169, bottom: 26, left: 94 } })
    .applyTextMetrics({ profile: FONT_PROFILE })
    .editCanvas({ plotBorder: { color: "#ddd", lineWidth: 1 } })
    .createData({ values: data })
    .filterData({ id: "f1", field: "Energy Source", oneOf: ["Concentrated solar power"] })
    .createComputedData({
      id: "c1",
      as: "CapacityMW",
      expression: {
        op: "if",
        condition: { op: "eq", left: { field: "Capacity" }, right: { constant: "" } },
        then: { constant: 0 },
        else: { op: "toNumber", operand: { field: "Capacity" } }
      }
    })
        .createScatterPlot({ x: { field: "Year", fieldType: "temporal" }, y: { field: "CapacityMW" }, guides: false }).editXScale({ domain: X_DOMAIN }).editYScale({ zero: false, domain: [1000, 7000] }).encodeColor({ field: "Energy Source" }).editColorScale({ domain: COLOR_DOMAIN, range: COLOR_RANGE })
    .encodeRadius({ value: 2.7386127875258306 })
    .editPointMark({ stroke: false, opacity: 1 })
    .createYAxis({ line: { lineWidth: 1 }, ticksAndLabels: { ticks: { length: 5 }, labels: { offset: 7, fontSize: 10, fontFamily: "sans-serif" }, values: [1000, 2000, 3000, 4000, 5000, 6000, 7000] }, title: { text: "Capacity (MW)", fontSize: 11, fontFamily: "sans-serif", offset: 41.0244140625, rotation: { value: -90, unit: "degrees" } } }).editYAxis({ line: { color: "#888" }, ticksAndLabels: { ticks: { color: "#888" }, labels: { format: ",.0f", color: "black" } }, title: { color: "black", fontWeight: 700 } }).createAnnotation({ text: "Concentrated solar power", anchor: "plot-center", fontSize: 10 })
    .editTextMark({ target: "annotation", rotation: { value: -90, unit: "degrees" }, dx: -165 })
    .editTextMark({ target: "annotation", fill: "black", baseline: "alphabetic" });

  const child2 = chart()
    .createCanvas({ width: 433, height: 202, margin: { top: 6, right: 169, bottom: 26, left: 94 } })
    .applyTextMetrics({ profile: FONT_PROFILE })
    .editCanvas({ plotBorder: { color: "#ddd", lineWidth: 1 } })
    .createData({ values: data })
    .filterData({ id: "f2", field: "Energy Source", oneOf: ["Geothermal"] })
    .createComputedData({
      id: "c2",
      as: "CapacityMW",
      expression: {
        op: "if",
        condition: { op: "eq", left: { field: "Capacity" }, right: { constant: "" } },
        then: { constant: 0 },
        else: { op: "toNumber", operand: { field: "Capacity" } }
      }
    })
        .createScatterPlot({ x: { field: "Year", fieldType: "temporal" }, y: { field: "CapacityMW" }, guides: false }).editXScale({ domain: X_DOMAIN }).editYScale({ zero: false, domain: [10000, 16000] }).encodeColor({ field: "Energy Source" }).editColorScale({ domain: COLOR_DOMAIN, range: COLOR_RANGE })
    .encodeRadius({ value: 2.7386127875258306 })
    .editPointMark({ stroke: false, opacity: 1 })
    .createYAxis({ line: { lineWidth: 1 }, ticksAndLabels: { ticks: { length: 5 }, labels: { offset: 7, fontSize: 10, fontFamily: "sans-serif" }, values: [10000, 11000, 12000, 13000, 14000, 15000, 16000] }, title: { text: "Capacity (MW)", fontSize: 11, fontFamily: "sans-serif", offset: 46.5859375, rotation: { value: -90, unit: "degrees" } } }).editYAxis({ line: { color: "#888" }, ticksAndLabels: { ticks: { color: "#888" }, labels: { format: ",.0f", color: "black" } }, title: { color: "black", fontWeight: 700 } }).createAnnotation({ text: "Geothermal", anchor: "plot-center", fontSize: 10 })
    .editTextMark({ target: "annotation", rotation: { value: -90, unit: "degrees" }, dx: -165 })
    .editTextMark({ target: "annotation", fill: "black", baseline: "alphabetic" });

  const child3 = chart()
    .createCanvas({ width: 433, height: 198, margin: { top: 6, right: 169, bottom: 22, left: 94 } })
    .applyTextMetrics({ profile: FONT_PROFILE })
    .editCanvas({ plotBorder: { color: "#ddd", lineWidth: 1 } })
    .createData({ values: data })
    .filterData({ id: "f3", field: "Energy Source", oneOf: ["Hydropower"] })
    .createComputedData({
      id: "c3",
      as: "CapacityMW",
      expression: {
        op: "if",
        condition: { op: "eq", left: { field: "Capacity" }, right: { constant: "" } },
        then: { constant: 0 },
        else: { op: "toNumber", operand: { field: "Capacity" } }
      }
    })
        .createScatterPlot({ x: { field: "Year", fieldType: "temporal" }, y: { field: "CapacityMW" }, guides: false }).editXScale({ domain: X_DOMAIN }).editYScale({ zero: false, domain: [1000000, 1400000] }).encodeColor({ field: "Energy Source" }).editColorScale({ domain: COLOR_DOMAIN, range: COLOR_RANGE })
    .encodeRadius({ value: 2.7386127875258306 })
    .editPointMark({ stroke: false, opacity: 1 })
    .createYAxis({ line: { lineWidth: 1 }, ticksAndLabels: { ticks: { length: 5 }, labels: { offset: 7, fontSize: 10, fontFamily: "sans-serif" }, values: [1000000, 1100000, 1200000, 1300000, 1400000] }, title: { text: "Capacity (MW)", fontSize: 11, fontFamily: "sans-serif", offset: 60.4873046875, rotation: { value: -90, unit: "degrees" } } }).editYAxis({ line: { color: "#888" }, ticksAndLabels: { ticks: { color: "#888" }, labels: { format: ",.0f", color: "black" } }, title: { color: "black", fontWeight: 700 } }).createAnnotation({ text: "Hydropower", anchor: "plot-center", fontSize: 10 })
    .editTextMark({ target: "annotation", rotation: { value: -90, unit: "degrees" }, dx: -165 })
    .editTextMark({ target: "annotation", fill: "black", baseline: "alphabetic" })
    ;

  const child4 = chart()
    .createCanvas({ width: 433, height: 202, margin: { top: 6, right: 169, bottom: 26, left: 94 } })
    .applyTextMetrics({ profile: FONT_PROFILE })
    .editCanvas({ plotBorder: { color: "#ddd", lineWidth: 1 } })
    .createData({ values: data })
    .filterData({ id: "f4", field: "Energy Source", oneOf: ["Offshore wind energy"] })
    .createComputedData({
      id: "c4",
      as: "CapacityMW",
      expression: {
        op: "if",
        condition: { op: "eq", left: { field: "Capacity" }, right: { constant: "" } },
        then: { constant: 0 },
        else: { op: "toNumber", operand: { field: "Capacity" } }
      }
    })
        .createScatterPlot({ x: { field: "Year", fieldType: "temporal" }, y: { field: "CapacityMW" }, guides: false }).editXScale({ domain: X_DOMAIN }).editYScale({ zero: false, domain: [0, 55000] }).encodeColor({ field: "Energy Source" }).editColorScale({ domain: COLOR_DOMAIN, range: COLOR_RANGE })
    .encodeRadius({ value: 2.7386127875258306 })
    .editPointMark({ stroke: false, opacity: 1 })
    .createYAxis({ line: { lineWidth: 1 }, ticksAndLabels: { ticks: { length: 5 }, labels: { offset: 7, fontSize: 10, fontFamily: "sans-serif" }, values: [0, 10000, 20000, 30000, 40000, 50000] }, title: { text: "Capacity (MW)", fontSize: 11, fontFamily: "sans-serif", offset: 46.5859375, rotation: { value: -90, unit: "degrees" } } }).editYAxis({ line: { color: "#888" }, ticksAndLabels: { ticks: { color: "#888" }, labels: { format: ",.0f", color: "black" } }, title: { color: "black", fontWeight: 700 } }).createAnnotation({ text: "Offshore wind energy", anchor: "plot-center", fontSize: 10 })
    .editTextMark({ target: "annotation", rotation: { value: -90, unit: "degrees" }, dx: -165 })
    .editTextMark({ target: "annotation", fill: "black", baseline: "alphabetic" });

  const child5 = chart()
    .createCanvas({ width: 433, height: 192, margin: { top: 6, right: 169, bottom: 16, left: 94 } })
    .applyTextMetrics({ profile: FONT_PROFILE })
    .editCanvas({ plotBorder: { color: "#ddd", lineWidth: 1 } })
    .createData({ values: data })
    .filterData({ id: "f5", field: "Energy Source", oneOf: ["Onshore wind energy"] })
    .createComputedData({
      id: "c5",
      as: "CapacityMW",
      expression: {
        op: "if",
        condition: { op: "eq", left: { field: "Capacity" }, right: { constant: "" } },
        then: { constant: 0 },
        else: { op: "toNumber", operand: { field: "Capacity" } }
      }
    })
        .createScatterPlot({ x: { field: "Year", fieldType: "temporal" }, y: { field: "CapacityMW" }, guides: false }).editXScale({ domain: X_DOMAIN }).editYScale({ zero: false, domain: [150000, 800000] }).encodeColor({ field: "Energy Source" }).editColorScale({ domain: COLOR_DOMAIN, range: COLOR_RANGE })
    .encodeRadius({ value: 2.7386127875258306 })
    .editPointMark({ stroke: false, opacity: 1 })
    .createYAxis({ line: { lineWidth: 1 }, ticksAndLabels: { ticks: { length: 5 }, labels: { offset: 7, fontSize: 10, fontFamily: "sans-serif" }, values: [200000, 300000, 400000, 500000, 600000, 700000, 800000] }, title: { text: "Capacity (MW)", fontSize: 11, fontFamily: "sans-serif", offset: 52.1474609375, rotation: { value: -90, unit: "degrees" } } }).editYAxis({ line: { color: "#888" }, ticksAndLabels: { ticks: { color: "#888" }, labels: { format: ",.0f", color: "black" } }, title: { color: "black", fontWeight: 700 } }).createAnnotation({ text: "Onshore wind energy", anchor: "plot-center", fontSize: 10 })
    .editTextMark({ target: "annotation", rotation: { value: -90, unit: "degrees" }, dx: -165 })
    .editTextMark({ target: "annotation", fill: "black", baseline: "alphabetic" });

  const child6 = chart()
    .createCanvas({ width: 433, height: 204, margin: { top: 6, right: 169, bottom: 28, left: 94 } })
    .applyTextMetrics({ profile: FONT_PROFILE })
    .editCanvas({ plotBorder: { color: "#ddd", lineWidth: 1 } })
    .createData({ values: data })
    .filterData({ id: "f6", field: "Energy Source", oneOf: ["Solar photovoltaic"] })
    .createComputedData({
      id: "c6",
      as: "CapacityMW",
      expression: {
        op: "if",
        condition: { op: "eq", left: { field: "Capacity" }, right: { constant: "" } },
        then: { constant: 0 },
        else: { op: "toNumber", operand: { field: "Capacity" } }
      }
    })
        .createScatterPlot({ x: { field: "Year", fieldType: "temporal" }, y: { field: "CapacityMW" }, guides: false }).editXScale({ domain: X_DOMAIN }).editYScale({ zero: false, domain: [0, 900000] }).encodeColor({ field: "Energy Source" }).editColorScale({ domain: COLOR_DOMAIN, range: COLOR_RANGE })
    .encodeRadius({ value: 2.7386127875258306 })
    .editPointMark({ stroke: false, opacity: 1 })
    .createYAxis({ line: { lineWidth: 1 }, ticksAndLabels: { ticks: { length: 5 }, labels: { offset: 7, fontSize: 10, fontFamily: "sans-serif" }, values: [0, 200000, 400000, 600000, 800000] }, title: { text: "Capacity (MW)", fontSize: 11, fontFamily: "sans-serif", offset: 52.1474609375, rotation: { value: -90, unit: "degrees" } } }).editYAxis({ line: { color: "#888" }, ticksAndLabels: { ticks: { color: "#888" }, labels: { format: ",.0f", color: "black" } }, title: { color: "black", fontWeight: 700 } }).createXAxis({ line: { lineWidth: 1 }, ticksAndLabels: { ticks: { length: 5 }, labels: { format: "%Y", offset: 7, fontSize: 10, fontFamily: "sans-serif", flush: true, overlap: "allow" }, values: [1262304000000, 1325376000000, 1388534400000, 1451606400000, 1514764800000, 1577836800000] }, title: false }).editXAxis({ line: { color: "#888" }, ticksAndLabels: { ticks: { color: "#888", lineWidth: 1 }, labels: { color: "black" } } }).createAnnotation({ text: "Solar photovoltaic", anchor: "plot-center", fontSize: 10 })
    .editTextMark({ target: "annotation", rotation: { value: -90, unit: "degrees" }, dx: -165 })
    .editTextMark({ target: "annotation", fill: "black", baseline: "alphabetic" });

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