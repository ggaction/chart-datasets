import { chart } from "ggaction";
import data from "./data.json";

// DOCS: doc-b11b4627b143730d, doc-76573a465e2b6a33, doc-8a4f6f06e0d37d5e

export function buildChart() {
  return chart()
    .createCanvas({ width: 372, height: 377, margin: { left: 64, top: 40, right: 13, bottom: 37 } })
    .applyTextMetrics({
      profile: {
        schemaVersion: 1,
        id: "source-actual-font-metrics",
        measurements: [
          { text: "1970", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 22.25 },
          { text: "1980", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 22.25 },
          { text: "1990", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 22.25 },
          { text: "2000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 22.249984741210938 },
          { text: "2010", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 22.25 },
          { text: "2020", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 22.25 },
          { text: "Date", fontFamily: "sans-serif", fontSize: 11, fontWeight: 700, fontStyle: "normal", width: 23.84375 },
          { text: "0", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 5.5625 },
          { text: "100,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 36.15625 },
          { text: "200,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 36.15625 },
          { text: "300,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 36.15625 },
          { text: "400,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 36.15625 },
          { text: "500,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 36.15625 },
          { text: "600,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 36.15625 },
          { text: "Value", fontFamily: "sans-serif", fontSize: 11, fontWeight: 700, fontStyle: "normal", width: 28.75 },
          { text: "Nominal GDP", fontFamily: "sans-serif", fontSize: 13, fontWeight: 700, fontStyle: "normal", width: 83.078125 },
          { text: "GDP at market prices, seasonally adjusted, £ million. Source: ONS", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "italic", width: 296.15234375 }
        ]
      }
    })
    .createData({ values: data })
    .createComputedData({ id: "num", as: "ValueNum", expression: { op: "toNumber", operand: { field: "Value" } } })
    .createLinePlot({ x: { field: "Date", fieldType: "temporal" }, y: "ValueNum", guides: false })
    .editLineMark({ stroke: "darkblue", strokeWidth: 2 })
    .createScatterPlot({ x: { field: "Date", fieldType: "temporal" }, y: "ValueNum", guides: false })
    .editPointMark({ fill: "transparent", stroke: "#4c78a8", strokeWidth: 2 })
    .editPointMark({ target: "scatterPlot", opacity: 0.7 })
    .encodePointRadius({ value: 2.7386127875258306, target: "scatterPlot" })
    .createRuleMark({ stroke: "black", opacity: 0.1 })
    .encodeX({ target: "rule", field: "Date", fieldType: "temporal" })
    .removeEncoding({ target: "rule", channel: "y" })
    .editXScale({ domain: [-220924800000, 1601510400000], nice: false })
    .editYScale({ domain: [0, 600000] })
    .createXAxis({
      line: { color: "#888" },
      ticksAndLabels: {
        values: [0, 315532800000, 631152000000, 946684800000, 1262304000000, 1577836800000],
        ticks: { length: 5, color: "#888" },
        labels: { fontSize: 10, offset: 7, color: "black", format: "%Y" }
      },
      title: { text: "Date", fontSize: 11, fontWeight: 700, color: "black", offset: 27.578125 }
    })
    .createYAxis({
      line: { color: "#888" },
      ticksAndLabels: {
        values: [0, 100000, 200000, 300000, 400000, 500000, 600000],
        ticks: { length: 5, color: "#888" },
        labels: { fontSize: 10, offset: 7, color: "black", format: ",.0f" }
      },
      title: { text: "Value", fontSize: 11, fontWeight: 700, color: "black", offset: 51.5693359375, rotation: { value: -90, unit: "degrees" } }
    })
    .createTitle({ text: "Nominal GDP", titleStyle: { fontSize: 13, fontWeight: 700, color: "black" }, alongOffset: -58.1474609375 })
    .editTitle({ offset: -10.953125, gap: 3.34375 })
    .editTitle({ subtitle: "GDP at market prices, seasonally adjusted, £ million. Source: ONS", subtitleStyle: { fontSize: 10, fontStyle: "italic", color: "black" } });
}