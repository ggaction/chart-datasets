import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({ width: 367, height: 373, margin: { left: 72, top: 36, right: 10, bottom: 37 } })
    .applyTextMetrics({
      profile: {
        schemaVersion: 1,
        id: "source-actual-font-metrics",
        measurements: [
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
          { text: "500,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 36.15625 },
          { text: "1,000,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 44.5 },
          { text: "1,500,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 44.5 },
          { text: "2,000,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 44.5 },
          { text: "2,500,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 44.5 },
          { text: "Value", fontFamily: "sans-serif", fontSize: 11, fontWeight: 700, fontStyle: "normal", width: 28.75 },
          { text: "Net debt", fontFamily: "sans-serif", fontSize: 13, fontWeight: 700, fontStyle: "normal", width: 52 },
          { text: "£ million. Source: ONS", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "italic", width: 101.796875 }
        ]
      }
    })
    .createData({ values: data })
    .createComputedData({ id: "ValueNumComputed", as: "ValueNum", expression: { op: "toNumber", operand: { field: "Value" } } })
    .createTitle({ text: "Net debt", titleStyle: { fontSize: 13 }, alongOffset: -66.4873046875 })
    .editTitle({ offset: -10.953125, gap: 3.34375 })
    .editTitle({ subtitle: "£ million. Source: ONS", subtitleStyle: { fontSize: 10, fontStyle: "italic", color: "black" }, titleStyle: { fontWeight: 700, color: "black" } })
    .createLinePlot({ x: { field: "Date", fieldType: "temporal" }, y: "ValueNum", guides: false })
    .encodeStroke({ target: "linePlot", value: "mediumvioletred" })
    .encodeStrokeWidth({ target: "linePlot", value: 2 })
    .editXScale({ domain: [852076800000, 1601510400000], nice: false })
    .editYScale({ domain: [0, 2600000], nice: false })
    .createScatterPlot({ x: { field: "Date", fieldType: "temporal" }, y: "ValueNum", guides: false })
    .encodeStroke({ target: "scatterPlot", value: "#4c78a8" })
    .editPointMark({ fill: "transparent", strokeWidth: 2 })
    .encodeOpacity({ target: "scatterPlot", value: 0.7 })
    .encodePointRadius({ value: 2.7386127875258306 })
    .createRuleMark({ strokeWidth: 1 })
    .encodeX({ field: "Date", fieldType: "temporal" })
    .removeEncoding({ target: "rule", channel: "y" })
    .editRuleMark({ stroke: "black", opacity: 0.1 })
    .createXAxis({
      line: {},
      ticksAndLabels: {
        values: [883612800000, 946684800000, 1009843200000, 1072915200000, 1136073600000, 1199145600000, 1262304000000, 1325376000000, 1388534400000, 1451606400000, 1514764800000, 1577836800000],
        ticks: { length: 5 },
        labels: { fontSize: 10, offset: 7 }
      },
      title: { text: "Date", fontSize: 11, offset: 27.578125 }
    })
    .createYAxis({
      line: {},
      ticksAndLabels: {
        values: [0, 500000, 1000000, 1500000, 2000000, 2500000],
        ticks: { length: 5 },
        labels: { fontSize: 10, offset: 7 }
      },
      title: { text: "Value", fontSize: 11, offset: 59.9091796875, rotation: { value: -90, unit: "degrees" } }
    })
    .editXAxisLine({ color: "#888" })
    .editXAxisTicks({ color: "#888" })
    .editXAxisLabels({ color: "black", format: "%Y" })
    .editXAxisTitle({ color: "black", fontWeight: 700 })
    .editYAxisLine({ color: "#888" })
    .editYAxisTicks({ color: "#888" })
    .editYAxisLabels({ color: "black", format: ",.0f" })
    .editYAxisTitle({ color: "black", fontWeight: 700 });
}

// DOCS: doc-b11b4627b143730d, doc-76573a465e2b6a33, doc-8a4f6f06e0d37d5e