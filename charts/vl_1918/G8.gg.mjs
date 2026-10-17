import { chart } from "ggaction";
import data from "./data.json";

// DOCS: doc-b11b4627b143730d, doc-76573a465e2b6a33, doc-8a4f6f06e0d37d5e

export function buildChart() {
  return chart()
    .createCanvas({ width: 428, height: 377, margin: { left: 64, top: 40, right: 19, bottom: 37 } })
    .applyTextMetrics({
      profile: {
        schemaVersion: 1,
        id: "source-actual-font-metrics",
        measurements: [
          { text: "2008", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 22.25 },
          { text: "2010", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 22.25 },
          { text: "2012", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 22.25 },
          { text: "2014", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 22.249984741210938 },
          { text: "2016", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 22.25 },
          { text: "2018", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 22.25 },
          { text: "2020", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 22.25 },
          { text: "Date", fontFamily: "sans-serif", fontSize: 11, fontWeight: 700, fontStyle: "normal", width: 23.84375 },
          { text: "0", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 5.5625 },
          { text: "100,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 36.15625 },
          { text: "200,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 36.15625 },
          { text: "300,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 36.15625 },
          { text: "400,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 36.15625 },
          { text: "500,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 36.15625 },
          { text: "600,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 36.15625 },
          { text: "700,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 36.15625 },
          { text: "800,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 36.15625 },
          { text: "900,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 36.15625 },
          { text: "Reserve balances", fontFamily: "sans-serif", fontSize: 11, fontWeight: 700, fontStyle: "normal", width: 92.953125 },
          { text: "Quantitative easing", fontFamily: "sans-serif", fontSize: 13, fontWeight: 700, fontStyle: "normal", width: 119.921875 },
          { text: "BoE balance sheet, reserve balances. Source: BoE weekly report", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "italic", width: 290.478515625 }
        ]
      }
    })
    .createData({ id: "source", values: data })
    .createComputedData({ id: "sourceCanonicalDate", as: "sourceDateUTC", expression: { op: "concat", operands: [{ field: "Date" }, { constant: " UTC" }] } })
    .createComputedData({ id: "typed", as: "reserveBalances", expression: { op: "toNumber", operand: { field: "Reserve balances" } } })
    .createLinePlot({ x: { field: "sourceDateUTC", fieldType: "temporal" }, y: { field: "reserveBalances" }, guides: false })
    .encodeStroke({ value: "orangered", target: "linePlot" })
    .encodeStrokeWidth({ value: 2, target: "linePlot" })
    .createScatterPlot({ x: { field: "sourceDateUTC", fieldType: "temporal" }, y: { field: "reserveBalances" }, guides: false })
    .encodeStroke({ value: "rgba(220,220,220,0.8)", target: "scatterPlot" })
    .editPointMark({ fill: "pink", strokeWidth: 5 })
    .encodePointRadius({ value: 8.660254037844387 })
    .createRuleMark({})
    .editRuleMark({ opacity: 0, stroke: "black", strokeWidth: 1 })
    .encodeX({ field: "sourceDateUTC", fieldType: "temporal", target: "rule" })
    .removeEncoding({ target: "rule", channel: "y" })
    .editXScale({ domain: [1148428800000, 1615939200000], nice: false })
    .editYScale({ domain: [0, 900000], nice: false })
    .createXAxis({
      line: {},
      ticksAndLabels: {
        values: [1199145600000, 1262304000000, 1325376000000, 1388534400000, 1451606400000, 1514764800000, 1577836800000],
        ticks: { length: 5 },
        labels: { fontSize: 10, offset: 7 }
      },
      title: { text: "Date", fontSize: 11, offset: 27.578125 }
    })
    .createYAxis({
      line: {},
      ticksAndLabels: {
        values: [0, 100000, 200000, 300000, 400000, 500000, 600000, 700000, 800000, 900000],
        ticks: { length: 5 },
        labels: { fontSize: 10, offset: 7 }
      },
      title: { text: "Reserve balances", fontSize: 11, offset: 51.5693359375, rotation: { value: -90, unit: "degrees" } }
    })
    .editXAxisLine({ color: "#888" })
    .editYAxisLine({ color: "#888" })
    .editXAxisTicks({ color: "#888" })
    .editYAxisTicks({ color: "#888" })
    .editXAxisLabels({ color: "black", format: "%Y" })
    .editYAxisLabels({ color: "black", format: ",.0f" })
    .editXAxisTitle({ color: "black", fontWeight: 700 })
    .editYAxisTitle({ color: "black", fontWeight: 700 })
    .createTitle({ text: "Quantitative easing", titleStyle: { fontSize: 13 }, alongOffset: -58.1474609375 })
    .editTitle({ offset: -10.953125, gap: 3.34375, titleStyle: { fontWeight: 700, color: "black" } })
    .editTitle({ subtitle: "BoE balance sheet, reserve balances. Source: BoE weekly report", subtitleStyle: { fontSize: 10, fontStyle: "italic", color: "black" } });
}