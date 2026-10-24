import { chart } from "ggaction";
import data from "./data.json";
import zeroData from "./zero-data.json";

// DOCS: doc-2bd5de4bd99e314a
export function buildChart() {
  return chart()
    .createCanvas({ width: 359, height: 377, margin: { left: 69, top: 40, right: 10, bottom: 37 } })
    .editCanvas({ plotBorder: { color: "#ddd", lineWidth: 1, underlay: true } })
    .applyTextMetrics({ profile: { schemaVersion: 1, id: "vl_1899-own-source-SVG-endpoint", measurements: [
      { text: "2020", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 22.25 },
      { text: "−300,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 42 },
      { text: "−250,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 42 },
      { text: "−200,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 42 },
      { text: "−150,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 42 },
      { text: "−100,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 42 }
    ] } })
    .createData({ values: data })
    .createComputedData({ id: "typedValue", as: "sourceValue", expression: { op: "toNumber", operand: { field: "Value" } } }).createLinePlot({
      x: { field: "Year", fieldType: "temporal", scale: { domain: [-757382400000, 1577836800000] } },
      y: { field: "sourceValue", scale: { domain: [-300000, 100000] } },
      guides: false
    }).createAxes({ x: { ticksAndLabels: { values: [-631152000000, -315619200000, 0, 315532800000, 631152000000, 946684800000, 1262304000000, 1577836800000], ticks: { length: 5, color: "#888", alongOffset: 0.5 }, labels: { fontFamily: "sans-serif", fontSize: 10, color: "black", format: "%Y", offset: 5.5, alongOffset: 0.5, flush: true, flushThreshold: 0 } }, title: { text: "Year", fontFamily: "sans-serif", fontSize: 11, fontWeight: 700, color: "black", offset: 27.578125, alongOffset: 0.5 } }, y: { ticksAndLabels: { values: [-300000, -250000, -200000, -150000, -100000, -50000, 0, 50000, 100000], ticks: { length: 5, color: "#888", alongOffset: 0.5 }, labels: { fontFamily: "sans-serif", fontSize: 10, color: "black", offset: 6.5, alongOffset: 0.890625, labelMap: [
              { value: -300000, label: "−300,000" },
              { value: -250000, label: "−250,000" },
              { value: -200000, label: "−200,000" },
              { value: -150000, label: "−150,000" },
              { value: -100000, label: "−100,000" },
              { value: -50000, label: "−50,000" },
              { value: 50000, label: "50,000" },
              { value: 100000, label: "100,000" }
            ] } }, title: { text: "Value", fontFamily: "sans-serif", fontSize: 11, fontWeight: 700, color: "black", offset: 57.4091796875, alongOffset: 0.5 } } }).editXAxisLine({ color: "#888" }).editYAxisLine({ color: "#888" })
    .editLineMark({ stroke: "mediumvioletred", strokeWidth: 2, curve: "monotone-steffen" })
    .createScatterPlot({
      x: { field: "Year", fieldType: "temporal", scale: { domain: [-757382400000, 1577836800000] } },
      y: { field: "sourceValue", scale: { domain: [-300000, 100000] } },
      guides: false
    })
    .encodePointRadius({ value: 2.7386127875258306 })
    .editPointMark({ stroke: "#4c78a8" })
    .editPointMark({ fill: "transparent", strokeWidth: 2, opacity: 0.7 })
    .createRuleMark({ data: "typedValue", strokeWidth: 1, opacity: 0.1 })
    .encodeX({ field: "Year", fieldType: "temporal", scale: { domain: [-757382400000, 1577836800000] } })
    .editRuleMark({ stroke: "black" })
    .createData({ id: "zeroData", values: zeroData })
    .createComputedData({ id: "zeroYear", as: "Year", expression: { constant: null } })
    .createComputedData({ id: "zeroValue", as: "sourceValue", expression: { op: "toNumber", operand: { field: "Value" } } })
    .filterData({ id: "validZero", field: "Year", predicate: { op: "neq", value: null } })
    .createRuleMark({ id: "zeroReference", data: "validZero", stroke: "darkgrey" })
    .editRuleMark({ strokeWidth: 0.75 })
    .encodeX({ field: "Year", fieldType: "temporal", scale: { domain: [-757382400000, 1577836800000] } })
    .encodeY({ field: "sourceValue", scale: { domain: [-300000, 100000] }, fieldType: "quantitative" })
    .encodeY2({ datum: 0, fieldType: "quantitative" })
    .createTitle({ text: "Budget deficit", titleStyle: { fontFamily: "sans-serif", fontSize: 13, fontWeight: 700, color: "black" }, offset: -10.953125 })
    .editTitle({ subtitle: "£ million. Source: ONS", subtitleStyle: { fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "italic", color: "black" }, gap: 3.34375 })
    .editTitle({ align: "left", alongOffset: -63.9873046875 });
}