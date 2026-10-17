// DOCS: doc-b11b4627b143730d, doc-76573a465e2b6a33, doc-4aba5fb850bbed9c
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({ width: 354, height: 377, margin: { left: 39, top: 40, right: 10, bottom: 37 } })
    .createData({ values: data })
    .createComputedData({ id: "bond", as: "ValueNum", expression: { op: "toNumber", operand: { field: "Value" } } })
    .createLinePlot({ x: { field: "Date", fieldType: "temporal" }, y: "ValueNum", guides: false })
    .encodeStroke({ value: "darkblue" })
    .encodeStrokeWidth({ value: 2 })
    .createPointMark({ id: "points", data: "bond" })
    .encodeStroke({ value: "#4c78a8", target: "points" })
    .encodeOpacity({ value: 0.7, target: "points" })
    .editPointMark({ fill: "transparent", strokeWidth: 2 })
    .encodeX({ field: "Date", target: "points", fieldType: "temporal" })
    .encodeY({ field: "ValueNum", target: "points" })
    .encodePointRadius({ value: 2.7386127875258306, target: "points" })
    .createRuleMark({ id: "rule", data: "bond", opacity: 0.1 })
    .editRuleMark({ target: "rule", stroke: "black" })
    .encodeX({ field: "Date", target: "rule", fieldType: "temporal" })
    .editXScale({ domain: [160358400000, 1498780800000], nice: false })
    .editYScale({ domain: [0, 18], nice: false })
    .applyTextMetrics({ profile: { schemaVersion: 1, id: "source-actual-font-metrics", measurements: [
      { text: "1980", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 22.25 },
      { text: "1985", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 22.24999237060547 },
      { text: "1990", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 22.25 },
      { text: "1995", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 22.25 },
      { text: "2000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 22.25 },
      { text: "2005", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 22.250015258789062 },
      { text: "2010", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 22.25 },
      { text: "2015", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 22.25 },
      { text: "Date", fontFamily: "sans-serif", fontSize: 11, fontWeight: 700, fontStyle: "normal", width: 23.84375 },
      { text: "0", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 5.5625 },
      { text: "2", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 5.5625 },
      { text: "4", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 5.5625 },
      { text: "6", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 5.5625 },
      { text: "8", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 5.5625 },
      { text: "10", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 11.125 },
      { text: "12", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 11.125 },
      { text: "14", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 11.125 },
      { text: "16", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 11.125 },
      { text: "18", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 11.125 },
      { text: "Value", fontFamily: "sans-serif", fontSize: 11, fontWeight: 700, fontStyle: "normal", width: 28.75 },
      { text: "Government bonds", fontFamily: "sans-serif", fontSize: 13, fontWeight: 700, fontStyle: "normal", width: 119.1875 },
      { text: "Average discount rate, 3-month Treasury Bill. Source: BoE", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "italic", width: 259.78515625 }
    ] } })
    .createXAxis({
      ticksAndLabels: {
        values: [315532800000, 473385600000, 631152000000, 788918400000, 946684800000, 1104537600000, 1262304000000, 1420070400000],
        ticks: { length: 5 },
        labels: { fontSize: 10, offset: 7, format: "%Y" }
      },
      title: { text: "Date", fontSize: 11, offset: 27.578125 }
    })
    .editXAxisLine({ color: "#888" })
    .editXAxisTicks({ color: "#888" })
    .editXAxisLabels({ color: "black" })
    .editXAxisTitle({ color: "black", fontWeight: 700 })
    .createYAxis({
      ticksAndLabels: {
        values: [0, 2, 4, 6, 8, 10, 12, 14, 16, 18],
        ticks: { length: 5 },
        labels: { fontSize: 10, offset: 7 }
      },
      title: { text: "Value", fontSize: 11, offset: 26.544921875, rotation: { value: -90, unit: "degrees" } }
    })
    .editYAxisLine({ color: "#888" })
    .editYAxisTicks({ color: "#888" })
    .editYAxisLabels({ color: "black" })
    .editYAxisTitle({ color: "black", fontWeight: 700 })
    .createTitle({ text: "Government bonds", titleStyle: { fontSize: 13 }, alongOffset: -33.123046875 })
    .editTitle({ offset: -10.953125, gap: 3.34375, titleStyle: { fontWeight: 700, color: "black" } })
    .editTitle({ subtitle: "Average discount rate, 3-month Treasury Bill. Source: BoE", subtitleStyle: { fontSize: 10, fontStyle: "italic", color: "black" } });
}