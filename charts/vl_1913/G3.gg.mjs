// DOCS: doc-dfae58344d5a524e, doc-b11b4627b143730d, doc-76573a465e2b6a33
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({ width: 359, height: 417, margin: { left: 39, top: 40, right: 15, bottom: 37 } })
    .applyTextMetrics({
      profile: {
        schemaVersion: 1,
        id: "source-actual-font-metrics",
        measurements: [
          { text: "1980", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 22.25 },
          { text: "1985", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 22.25 },
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
          { text: "14", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 11.125 },
          { text: "16", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 11.125 },
          { text: "18", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 11.125 },
          { text: "Rate", fontFamily: "sans-serif", fontSize: 11, fontWeight: 700, fontStyle: "normal", width: 23.84375 },
          { text: "Bank Rate", fontFamily: "sans-serif", fontSize: 13, fontWeight: 700, fontStyle: "normal", width: 63.578125 },
          { text: "Bank of England's main policy rate. Source: BoE", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "italic", width: 215.7421875 }
        ]
      }
    })
    .createData({ values: data })
    .createComputedData({ id: "rateNumber", as: "RateNumber", expression: { op: "toNumber", operand: { field: "Rate" } } })
    .createLinePlot({ x: { field: "Date", fieldType: "temporal" }, y: "RateNumber", guides: false })
    .encodeStroke({ target: "linePlot", value: "darkblue" })
    .editLineMark({ strokeWidth: 2, curve: "linear" })
    .createScatterPlot({ x: { field: "Date", fieldType: "temporal" }, y: "RateNumber", guides: false })
    .encodeStroke({ target: "scatterPlot", value: "#4c78a8" })
    .editPointMark({ fill: "transparent", strokeWidth: 2 })
    .encodeOpacity({ target: "scatterPlot", value: 0.7 })
    .encodePointRadius({ value: 2.7386127875258306 })
    .createRuleMark({ id: "rule", stroke: "black", opacity: 0.1 })
    .encodeX({ field: "Date", target: "rule", fieldType: "temporal" })
    .editRuleMark({ target: "rule", strokeWidth: 1 })
    .removeEncoding({ target: "rule", channel: "y" })
    .editXScale({ domain: [159408000000, 1584576000000], nice: false })
    .editYScale({ domain: [0, 18], nice: false })
    .createXAxis({
      ticksAndLabels: {
        values: [315532800000, 473385600000, 631152000000, 788918400000, 946684800000, 1104537600000, 1262304000000, 1420070400000, 1577836800000],
        ticks: { length: 5 },
        labels: { fontSize: 10, offset: 7 }
      },
      title: { text: "Date", fontSize: 11, offset: 27.578125 }
    })
    .editXAxis({
      line: { color: "#888" },
      ticksAndLabels: { ticks: { color: "#888" }, labels: { color: "black", format: "%Y" } },
      title: { color: "black", fontWeight: 700 }
    })
    .createYAxis({
      ticksAndLabels: {
        values: [0, 2, 4, 6, 8, 10, 12, 14, 16, 18],
        ticks: { length: 5 },
        labels: { fontSize: 10, offset: 7 }
      },
      title: { text: "Rate", fontSize: 11, offset: 26.544921875, rotation: { value: -90, unit: "degrees" } }
    })
    .editYAxis({
      line: { color: "#888" },
      ticksAndLabels: { ticks: { color: "#888" }, labels: { color: "black" } },
      title: { color: "black", fontWeight: 700 }
    })
    .createTitle({ text: "Bank Rate", titleStyle: { fontSize: 13, fontWeight: 700, color: "black" }, alongOffset: -33.123046875 })
    .editTitle({ offset: -10.953125, gap: 3.34375 })
    .editTitle({ subtitle: "Bank of England's main policy rate. Source: BoE", subtitleStyle: { fontSize: 10, fontStyle: "italic", color: "black" } });
}