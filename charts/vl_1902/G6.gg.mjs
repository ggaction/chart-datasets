// DOCS: doc-dfae58344d5a524e createCanvas; doc-b11b4627b143730d createLinePlot; doc-76573a465e2b6a33 createScatterPlot
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({ width: 354, height: 377, margin: { left: 39, top: 40, right: 10, bottom: 37 } })
    .applyTextMetrics({ profile: { schemaVersion: 1, id: "source-actual-font-metrics", measurements: [
      { text: "1998", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 22.25 },
      { text: "2000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 22.25 },
      { text: "2002", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 22.25 },
      { text: "2004", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 22.25 },
      { text: "2006", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 22.25 },
      { text: "2008", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 22.25 },
      { text: "2010", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 22.25 },
      { text: "2012", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 22.25 },
      { text: "2014", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 22.25 },
      { text: "2016", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 22.25 },
      { text: "2018", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 22.25 },
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
      { text: "Value", fontFamily: "sans-serif", fontSize: 11, fontWeight: 700, fontStyle: "normal", width: 28.75 },
      { text: "Debt/GDP ratio", fontFamily: "sans-serif", fontSize: 13, fontWeight: 700, fontStyle: "normal", width: 92.234375 },
      { text: "% GDP. Source: ONS", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "italic", width: 97.16796875 }
    ] } })
    .createData({ values: data })
    .createComputedData({ id: "debt", as: "ValueNum", expression: { op: "toNumber", operand: { field: "Value" } } })
    .createLinePlot({ x: { field: "Date", fieldType: "temporal" }, y: "ValueNum", guides: false })
    .editXScale({ domain: [859852800000, 1609459200000], nice: false })
    .editYScale({ domain: [0, 90] })
    .encodeStroke({ value: "mediumvioletred" })
    .encodeStrokeWidth({ value: 2 })
    .createScatterPlot({ x: { field: "Date", fieldType: "temporal" }, y: "ValueNum", guides: false })
    .encodeStroke({ value: "#4c78a8" })
    .editPointMark({ fill: "transparent", strokeWidth: 2 })
    .encodeOpacity({ value: 0.7 })
    .encodePointRadius({ value: 2.7386127875258306 })
    .createRuleMark({ stroke: "black", opacity: 0.1 })
    .encodeX({ field: "Date", fieldType: "temporal", target: "rule" })
    .editRuleMark({ target: "rule", strokeWidth: 1 })
    .removeEncoding({ target: "rule", channel: "y" })
    .createTitle({ text: "Debt/GDP ratio", titleStyle: { fontSize: 13, fontWeight: 700, color: "black" }, alongOffset: -33.123046875 })
    .editTitle({ align: "left", offset: -10.953125, gap: 3.34375 })
    .editTitle({ subtitle: "% GDP. Source: ONS", subtitleStyle: { fontSize: 10, fontStyle: "italic", color: "black" } })
    .createXAxis({
      ticksAndLabels: {
        values: [883612800000, 946684800000, 1009843200000, 1072915200000, 1136073600000, 1199145600000, 1262304000000, 1325376000000, 1388534400000, 1451606400000, 1514764800000, 1577836800000],
        ticks: { length: 5 },
        labels: { fontSize: 10, offset: 7 }
      },
      title: { text: "Date", fontSize: 11, offset: 27.578125 }
    })
    .editXAxisLine({ color: "#888" })
    .editXAxisTicks({ color: "#888" })
    .editXAxisLabels({ labelMap: [
      { value: 883612800000, label: "1998" },
      { value: 946684800000, label: "2000" },
      { value: 1009843200000, label: "2002" },
      { value: 1072915200000, label: "2004" },
      { value: 1136073600000, label: "2006" },
      { value: 1199145600000, label: "2008" },
      { value: 1262304000000, label: "2010" },
      { value: 1325376000000, label: "2012" },
      { value: 1388534400000, label: "2014" },
      { value: 1451606400000, label: "2016" },
      { value: 1514764800000, label: "2018" },
      { value: 1577836800000, label: "2020" }
    ], color: "black" })
    .editXAxisTitle({ fontWeight: 700, color: "black" })
    .createYAxis({
      ticksAndLabels: {
        values: [0, 10, 20, 30, 40, 50, 60, 70, 80, 90],
        ticks: { length: 5 },
        labels: { fontSize: 10, offset: 7 }
      },
      title: { text: "Value", fontSize: 11, offset: 26.544921875, rotation: { value: -90, unit: "degrees" } }
    })
    .editYAxisLine({ color: "#888" })
    .editYAxisTicks({ color: "#888" })
    .editYAxisLabels({ color: "black" })
    .editYAxisTitle({ fontWeight: 700, color: "black" });
}