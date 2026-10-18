import { chart } from "ggaction";
import data from "./data.json";

// DOCS: doc-b11b4627b143730d, doc-76573a465e2b6a33, doc-c2eafbbd16fe3c71

export function buildChart() {
  return chart()
    .createCanvas({ width: 364, height: 377, margin: { left: 72, top: 40, right: 12, bottom: 37 } })
    .applyTextMetrics({
      profile: {
        schemaVersion: 1,
        id: "source-actual-font-metrics",
        measurements: [
          { text: "1970", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 22.25 },
          { text: "1980", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 22.25 },
          { text: "1990", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 22.25 },
          { text: "2000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 22.25 },
          { text: "2010", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 22.25 },
          { text: "2020", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 22.25 },
          { text: "Date", fontFamily: "sans-serif", fontSize: 11, fontWeight: 700, fontStyle: "normal", width: 23.84375 },
          { text: "0", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 5.5625 },
          { text: "500,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 36.15625 },
          { text: "1,000,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 44.5 },
          { text: "1,500,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 44.5 },
          { text: "2,000,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 44.5 },
          { text: "2,500,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 44.5 },
          { text: "3,000,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 44.5 },
          { text: "Value", fontFamily: "sans-serif", fontSize: 11, fontWeight: 700, fontStyle: "normal", width: 28.75 },
          { text: "Broad money outstanding", fontFamily: "sans-serif", fontSize: 13, fontWeight: 700, fontStyle: "normal", width: 161.0625 },
          { text: "£ million. Source: Bank of England", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "italic", width: 153.740234375 }
        ]
      }
    })
    .createData({ values: data })
    .createComputedData({ id: "numeric", as: "ValueNumber", expression: { op: "toNumber", operand: { field: "Value" } } })
    .createLinePlot({ x: { field: "Date", fieldType: "temporal" }, y: "ValueNumber", guides: false })
    .encodeStroke({ value: "darkblue" })
    .encodeStrokeWidth({ value: 2 })
    .createScatterPlot({ x: { field: "Date", fieldType: "temporal" }, y: "ValueNumber", guides: false })
    .encodePointRadius({ value: 2.7386127875258306 })
    .encodeStroke({ value: "#4c78a8" })
    .editPointMark({ fill: "transparent", strokeWidth: 2 })
    .encodeOpacity({ value: 0.7 })
    .createRuleMark({ stroke: "black", opacity: 0.1, strokeWidth: 1 })
    .encodeX({ field: "Date", target: "rule", fieldType: "temporal" })
    .removeEncoding({ target: "rule", channel: "y" })
    .editXScale({ domain: [-213235200000, 1609372800000], nice: false })
    .editYScale({ domain: [0, 3000000], nice: false })
    .createTitle({
      text: "Broad money outstanding",
      alongOffset: -66.4873046875,
      titleStyle: { fontSize: 13 }
    })
    .editTitle({ offset: -10.953125, subtitleStyle: { fontSize: 10, fontStyle: "italic", color: "black" }, titleStyle: { fontWeight: 700, color: "black" } })
    .editTitle({ subtitle: "£ million. Source: Bank of England", gap: 3.34375 })
    .createXAxis({
      line: {},
      ticksAndLabels: {
        values: [0, 315532800000, 631152000000, 946684800000, 1262304000000, 1577836800000],
        ticks: { length: 5 },
        labels: { fontSize: 10, offset: 7 }
      },
      title: { text: "Date", fontSize: 11, offset: 27.578125 }
    })
    .editXAxisTicksAndLabels({ ticks: { color: "#888" }, labels: { color: "black", format: "%Y" } })
    .createYAxis({
      line: {},
      ticksAndLabels: {
        values: [0, 500000, 1000000, 1500000, 2000000, 2500000, 3000000],
        ticks: { length: 5 },
        labels: { fontSize: 10, offset: 7 }
      },
      title: { text: "Value", fontSize: 11, rotation: { value: -90, unit: "degrees" }, offset: 59.9091796875 }
    })
    .editYAxisTicksAndLabels({ ticks: { color: "#888" }, labels: { color: "black", format: ",.0f" } })
    .editXAxisLine({ color: "#888" })
    .editXAxisTitle({ fontWeight: 700, color: "black" })
    .editYAxisLine({ color: "#888" })
    .editYAxisTitle({ fontWeight: 700, color: "black" });;
}