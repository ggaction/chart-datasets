import { chart } from "ggaction";
import data from "./data.json";

// DOCS: doc-b11b4627b143730d, doc-76573a465e2b6a33, doc-c2eafbbd16fe3c71

export function buildChart() {
  return chart()
    .createCanvas({ width: 360, height: 377, margin: { left: 39, top: 40, right: 11, bottom: 37 } })
    .createData({ values: data })
    .createComputedData({ id: "valueNumber", as: "ValueNum", expression: { op: "toNumber", operand: { field: "Value" } } })
    .createLinePlot({ x: { field: "Date", fieldType: "temporal" }, y: "ValueNum", guides: false })
    .encodeStroke({ value: "seagreen", target: "linePlot" })
    .encodeStrokeWidth({ value: 2, target: "linePlot" })
    .createPointMark({ id: "points", fill: "transparent" })
    .encodeStroke({ value: "#4c78a8", target: "points" })
    .editPointMark({ target: "points", strokeWidth: 2 })
    .encodeOpacity({ value: 0.7, target: "points" })
    .encodeX({ field: "Date", fieldType: "temporal", target: "points" })
    .encodeY({ field: "ValueNum", target: "points" })
    .encodePointRadius({ value: 2.7386127875258306, target: "points" })
    .createRuleMark({ id: "rule" })
    .encodeStroke({ target: "rule", value: "black" })
    .encodeOpacity({ target: "rule", value: 0.1 })
    .encodeX({ field: "Date", fieldType: "temporal", target: "rule" })
    .removeEncoding({ target: "rule", channel: "y" })
    .editXScale({ domain: [34214400000, 1604188800000], nice: false })
    .editYScale({ domain: [0, 12] })
    .createTitle({ text: "Unemployment", titleStyle: { fontSize: 13 }, alongOffset: -33.123046875 })
    .editTitle({ offset: -10.953125, gap: 3.34375, titleStyle: { fontWeight: 700, color: "black" } })
    .editTitle({ subtitle: "Rate (%), 16+, seasonally adjusted. Source: ONS", subtitleStyle: { fontSize: 10, fontStyle: "italic", color: "black" } })
    .applyTextMetrics({
      profile: {
        schemaVersion: 1,
        id: "source-actual-font-metrics",
        measurements: [
          { text: "1975", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 22.249996185302734 },
          { text: "1980", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 22.25 },
          { text: "1985", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 22.24999237060547 },
          { text: "1990", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 22.25 },
          { text: "1995", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 22.25 },
          { text: "2000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 22.25 },
          { text: "2005", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 22.249984741210938 },
          { text: "2010", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 22.25 },
          { text: "2015", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 22.25 },
          { text: "2020", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 22.25 },
          { text: "Date", fontFamily: "sans-serif", fontSize: 11, fontWeight: 700, fontStyle: "normal", width: 23.84375 },
          { text: "0", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 5.5625 },
          { text: "2", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 5.5625 },
          { text: "4", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 5.5625 },
          { text: "6", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 5.5625 },
          { text: "8", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 5.5625 },
          { text: "10", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 11.125 },
          { text: "12", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 11.125 },
          { text: "Value", fontFamily: "sans-serif", fontSize: 11, fontWeight: 700, fontStyle: "normal", width: 28.75 },
          { text: "Unemployment", fontFamily: "sans-serif", fontSize: 13, fontWeight: 700, fontStyle: "normal", width: 93.90625 },
          { text: "Rate (%), 16+, seasonally adjusted. Source: ONS", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "italic", width: 220.4833984375 }
        ]
      }
    })
    .createXAxis({
      line: {},
      ticksAndLabels: {
        values: [157766400000, 315532800000, 473385600000, 631152000000, 788918400000, 946684800000, 1104537600000, 1262304000000, 1420070400000, 1577836800000],
        ticks: { length: 5 },
        labels: { fontSize: 10, offset: 7 }
      },
      title: { text: "Date", fontSize: 11, offset: 27.578125 }
    })
    .editXAxisLine({ color: "#888" })
    .editXAxisTicks({ color: "#888" })
    .editXAxisLabels({ color: "black", format: "%Y" })
    .editXAxisTitle({ color: "black", fontWeight: 700 })
    .createYAxis({
      line: {},
      ticksAndLabels: {
        values: [0, 2, 4, 6, 8, 10, 12],
        ticks: { length: 5 },
        labels: { fontSize: 10, offset: 7 }
      },
      title: { text: "Value", fontSize: 11, offset: 26.544921875, rotation: { value: -90, unit: "degrees" } }
    })
    .editYAxisLine({ color: "#888" })
    .editYAxisTicks({ color: "#888" })
    .editYAxisLabels({ color: "black" })
    .editYAxisTitle({ color: "black", fontWeight: 700 });
}