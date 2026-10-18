// DOCS: doc-b11b4627b143730d (createLinePlot), doc-76573a465e2b6a33 (basic-charts)
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({ width: 363, height: 377, margin: { left: 44, top: 40, right: 14, bottom: 37 } })
    .createData({ values: data })
    .filterData({ id: "definedOriginalDate", field: "Date", noneOf: [""] })
    .createComputedData({ id: "valueNumber", as: "Value_number", expression: { op: "toNumber", operand: { field: "Value" } } })
    .createLinePlot({ x: { field: "Date", fieldType: "temporal" }, y: "Value_number", guides: false })
    .encodeStroke({ value: "goldenrod", target: "linePlot" })
    .encodeStrokeWidth({ value: 2, target: "linePlot" })
    .createScatterPlot({ x: { field: "Date", fieldType: "temporal" }, y: "Value_number", guides: false })
    .encodePointRadius({ value: 2.7386127875258306 })
    .encodeStroke({ value: "#4c78a8", target: "scatterPlot" })
    .editPointMark({ fill: "transparent", strokeWidth: 2 })
    .encodeOpacity({ value: 0.7, target: "scatterPlot" })
    .createRuleMark({ data: "definedOriginalDate", stroke: "black", opacity: 0.1 })
    .encodeX({ field: "Date", fieldType: "temporal", target: "rule" })
    .editRuleMark({ strokeWidth: 1 })
    .editXScale({ domain: [31536000000, 1593561600000], nice: false })
    .editYScale({ domain: [0, 110] })
    .applyTextMetrics({ profile: { schemaVersion: 1, id: "source-actual-font-metrics", measurements: [
      { text: "1975", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 22.25 },
      { text: "1980", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 22.25 },
      { text: "1985", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 22.25 },
      { text: "1990", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 22.25 },
      { text: "1995", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 22.25 },
      { text: "2000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 22.25 },
      { text: "2005", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 22.25 },
      { text: "2010", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 22.25 },
      { text: "2015", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 22.25 },
      { text: "2020", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 22.25 },
      { text: "Date", fontFamily: "sans-serif", fontSize: 11, fontWeight: 700, fontStyle: "normal", width: 23.84375 },
      { text: "0", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 5.5625 },
      { text: "10", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 11.125 },
      { text: "20", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 11.125 },
      { text: "30", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 11.125 },
      { text: "40", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 11.125 },
      { text: "50", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 11.125 },
      { text: "60", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 11.125 },
      { text: "70", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 11.125 },
      { text: "80", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 11.125 },
      { text: "90", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 11.125 },
      { text: "100", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 16.6875 },
      { text: "110", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 15.953125 },
      { text: "Value", fontFamily: "sans-serif", fontSize: 11, fontWeight: 700, fontStyle: "normal", width: 28.75 },
      { text: "Productivity", fontFamily: "sans-serif", fontSize: 13, fontWeight: 700, fontStyle: "normal", width: 75.125 },
      { text: "Output per hour worked. Index: 2018 = 100. Source: ONS", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "italic", width: 256.0791015625 }
    ] } })
    .createTitle({ text: "Productivity", alongOffset: -38.6845703125, titleStyle: { fontSize: 13, fontWeight: 700, color: "black" } })
    .editTitle({ offset: -10.953125, gap: 3.34375 })
    .editTitle({ subtitle: "Output per hour worked. Index: 2018 = 100. Source: ONS", subtitleStyle: { fontSize: 10, fontStyle: "italic", color: "black" } })
    .createXAxis({ line: {}, ticksAndLabels: { values: [157766400000, 315532800000, 473385600000, 631152000000, 788918400000, 946684800000, 1104537600000, 1262304000000, 1420070400000, 1577836800000], ticks: { length: 5 }, labels: { fontSize: 10, offset: 7, format: "%Y" } }, title: { text: "Date", fontSize: 11, offset: 27.578125 } })
    .editXAxis({ line: { color: "#888" }, ticksAndLabels: { ticks: { color: "#888" }, labels: { color: "black" } }, title: { fontWeight: 700, color: "black" } })
    .createYAxis({ line: {}, ticksAndLabels: { values: [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110], ticks: { length: 5 }, labels: { fontSize: 10, offset: 7, format: ",.0f" } }, title: { text: "Value", fontSize: 11, rotation: { value: -90, unit: "degrees" }, offset: 32.1064453125 } })
    .editYAxis({ line: { color: "#888" }, ticksAndLabels: { ticks: { color: "#888" }, labels: { color: "black" } }, title: { fontWeight: 700, color: "black" } });
}