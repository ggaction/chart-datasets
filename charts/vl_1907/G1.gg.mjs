// DOCS: doc-76573a465e2b6a33, doc-b11b4627b143730d, doc-071c93dff3a5ea2e
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({ width: 363, height: 377, margin: { left: 64, top: 40, right: 14, bottom: 37 } })
    .applyTextMetrics({
      profile: {
        schemaVersion: 1,
        id: "source-actual-font-metrics",
        measurements: [
          { text: "1960", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 22.25 },
          { text: "1970", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 22.25000762939453 },
          { text: "1980", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 22.25 },
          { text: "1990", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 22.25 },
          { text: "2000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 22.25 },
          { text: "2010", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 22.25 },
          { text: "2020", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 22.25 },
          { text: "Date", fontFamily: "sans-serif", fontSize: 11, fontWeight: 700, fontStyle: "normal", width: 23.84375 },
          { text: "0", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 5.5625 },
          { text: "10,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 30.59375 },
          { text: "20,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 30.59375 },
          { text: "30,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 30.59375 },
          { text: "40,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 30.59375 },
          { text: "50,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 30.59375 },
          { text: "60,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 30.59375 },
          { text: "70,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 30.59375 },
          { text: "80,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 30.59375 },
          { text: "90,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 30.59375 },
          { text: "100,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 36.15625 },
          { text: "110,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 35.421875 },
          { text: "Value", fontFamily: "sans-serif", fontSize: 11, fontWeight: 700, fontStyle: "normal", width: 28.75 },
          { text: "Government consumption expenditure", fontFamily: "sans-serif", fontSize: 13, fontWeight: 700, fontStyle: "normal", width: 239.09375 },
          { text: "£ million. Source: ONS", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "italic", width: 101.796875 }
        ]
      }
    })
    .createTitle({
      text: "Government consumption expenditure",
      titleStyle: { fontSize: 13, fontWeight: 700, color: "black" },
      alongOffset: -58.1474609375
    })
    .editTitle({ offset: -10.953125, gap: 3.34375 })
    .editTitle({ subtitle: "£ million. Source: ONS", subtitleStyle: { fontSize: 10, fontStyle: "italic", color: "black" } })
    .createData({ values: data })
    .createComputedData({ id: "valueNum", as: "ValueNumber", expression: { op: "toNumber", operand: { field: "Value" } } })
    .createLinePlot({
      x: { field: "Date", fieldType: "temporal" },
      y: { field: "ValueNumber" },
      guides: false
    })
    .editLineMark({ stroke: "goldenrod", strokeWidth: 2 })
    .createScatterPlot({
      x: { field: "Date", fieldType: "temporal" },
      y: { field: "ValueNumber" },
      guides: false
    })
    .editPointMark({ fill: "transparent", stroke: "#4c78a8", strokeWidth: 2 })
    .editPointMark({ opacity: 0.7 })
    .encodePointRadius({ value: 2.7386127875258306 })
    .createRuleMark({ id: "rule", strokeWidth: 1 })
    .encodeX({ field: "Date", fieldType: "temporal", target: "rule" })
    .removeEncoding({ target: "rule", channel: "y" })
    .editRuleMark({ target: "rule", stroke: "black", opacity: 0.1 })
    .editXScale({ domain: [-473385600000, 1593561600000], nice: false })
    .editYScale({ domain: [0, 110000] })
    .createAxes({
      x: {
        line: { color: "#888" },
        ticksAndLabels: {
          values: [-315619200000, 0, 315532800000, 631152000000, 946684800000, 1262304000000, 1577836800000],
          ticks: { length: 5, color: "#888" },
          labels: { fontSize: 10, offset: 7, color: "black", format: "%Y" }
        },
        title: { text: "Date", fontSize: 11, fontWeight: 700, color: "black", offset: 27.578125 }
      },
      y: {
        line: { color: "#888" },
        ticksAndLabels: {
          values: [0, 10000, 20000, 30000, 40000, 50000, 60000, 70000, 80000, 90000, 100000, 110000],
          ticks: { length: 5, color: "#888" },
          labels: { fontSize: 10, offset: 7, color: "black", format: ",.0f" }
        },
        title: { text: "Value", fontSize: 11, fontWeight: 700, color: "black", offset: 51.5693359375 }
      }
    });
}