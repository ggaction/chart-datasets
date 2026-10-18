// DOCS: doc-b11b4627b143730d, doc-c2eafbbd16fe3c71, doc-76573a465e2b6a33
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({ width: 353, height: 377, margin: { left: 33, top: 40, right: 10, bottom: 37 } })
    .applyTextMetrics({
      profile: {
        schemaVersion: 1,
        id: "source-actual-font-metrics",
        measurements: [
          { text: "2006", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 22.25 },
          { text: "2008", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 22.25 },
          { text: "2010", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 22.25 },
          { text: "2012", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 22.25 },
          { text: "2014", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 22.25 },
          { text: "2016", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 22.249984741210938 },
          { text: "2018", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 22.25 },
          { text: "2020", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 22.25 },
          { text: "Date", fontFamily: "sans-serif", fontSize: 11, fontWeight: 700, fontStyle: "normal", width: 23.84375 },
          { text: "0", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 5.5625 },
          { text: "1", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 5.5625 },
          { text: "2", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 5.5625 },
          { text: "3", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 5.5625 },
          { text: "4", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 5.5625 },
          { text: "5", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 5.5625 },
          { text: "6", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 5.5625 },
          { text: "7", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 5.5625 },
          { text: "Value", fontFamily: "sans-serif", fontSize: 11, fontWeight: 700, fontStyle: "normal", width: 28.75 },
          { text: "Corporate bond rate", fontFamily: "sans-serif", fontSize: 13, fontWeight: 700, fontStyle: "normal", width: 124.96875 },
          { text: "Monthly average, PNFC new depositis. Source: BoE", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "italic", width: 232.71484375 }
        ]
      }
    })
    .createData({ values: data })
    .createComputedData({ id: "valueNumData", as: "ValueNum", expression: { op: "toNumber", operand: { field: "Value" } } })
    .createTitle({ text: "Corporate bond rate", titleStyle: { fontSize: 13 }, alongOffset: -27.5615234375 })
    .editTitle({ offset: -10.953125, gap: 3.34375, titleStyle: { fontWeight: 700, color: "black" } })
    .editTitle({ subtitle: "Monthly average, PNFC new depositis. Source: BoE", subtitleStyle: { fontSize: 10, fontStyle: "italic", color: "black" } })
    .createLinePlot({ x: { field: "Date", fieldType: "temporal" }, y: "ValueNum", guides: false })
    .encodeStroke({ value: "darkblue" })
    .encodeStrokeWidth({ value: 2 })
    .createScatterPlot({ x: { field: "Date", fieldType: "temporal" }, y: "ValueNum", guides: false })
    .encodeStroke({ value: "#4c78a8" })
    .encodeOpacity({ value: 0.7 })
    .editPointMark({ fill: "transparent", strokeWidth: 2 })
    .encodePointRadius({ value: 2.7386127875258306 })
    .createRuleMark({ stroke: "black" })
    .encodeOpacity({ value: 0.1 })
    .encodeX({ field: "Date", target: "rule", fieldType: "temporal" })
    .editRuleMark({ strokeWidth: 1 })
    .removeEncoding({ target: "rule", channel: "y" })
    .editXScale({ domain: [1075507200000, 1612051200000], nice: false })
    .editYScale({ domain: [0, 7], nice: false })
    .createXAxis({
      line: {},
      ticksAndLabels: {
        values: [1136073600000, 1199145600000, 1262304000000, 1325376000000, 1388534400000, 1451606400000, 1514764800000, 1577836800000],
        ticks: { length: 5 },
        labels: { fontSize: 10, offset: 7, fontFamily: "sans-serif", flush: true }
      },
      title: { text: "Date", fontSize: 11, offset: 27.578125 }
    })
    .editXAxisLine({ color: "#888" })
    .editXAxisTicks({ color: "#888" })
    .editXAxisLabels({ color: "black" })
    .editXAxisTitle({ color: "black", fontWeight: 700 })
    .createYAxis({
      line: {},
      ticksAndLabels: {
        values: [0, 1, 2, 3, 4, 5, 6, 7],
        ticks: { length: 5 },
        labels: { fontSize: 10, offset: 7, fontFamily: "sans-serif" }
      },
      title: { text: "Value", fontSize: 11, offset: 20.9833984375, rotation: { value: -90, unit: "degrees" } }
    })
    .editYAxisLine({ color: "#888" })
    .editYAxisTicks({ color: "#888" })
    .editYAxisLabels({ color: "black" })
    .editYAxisTitle({ color: "black", fontWeight: 700 });
}