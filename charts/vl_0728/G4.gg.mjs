import { chart } from "ggaction";
import data from "./data.json";

// DOCS: doc-b11b4627b143730d doc-071c93dff3a5ea2e doc-8a4f6f06e0d37d5e
export function buildChart() {
  return chart()
    .createCanvas({
      width: 203,
      height: 206,
      margin: { left: 39, top: 34, right: 14, bottom: 22 }
    })
    .createData({ values: data })
    .createComputedData({
      id: "unemploymentNumeric",
      as: "valueNum",
      expression: { op: "toNumber", operand: { field: "value" } }
    })
    .createLinePlot({
      x: {
        field: "date",
        fieldType: "temporal",
        temporalUnit: "year"
      },
      y: {
        field: "valueNum"
      },
      guides: false
    })
    .editXScale({ domain: [31536000000, 1609459200000], nice: false })
    .editYScale({ domain: [0, 12], zero: true })
    .encodeStroke({ value: "rgb(8,123,102" })
    .encodeStrokeWidth({ value: 2 })
    .createXAxis({
      line: {},
      ticksAndLabels: {
        values: [315532800000, 631152000000, 946684800000, 1262304000000, 1577836800000],
        ticks: {},
        labels: { fontSize: 10, fontFamily: "sans-serif", offset: 7 }
      },
      title: false
    })
    .createYAxis({
      line: {},
      ticksAndLabels: {
        values: [0, 2, 4, 6, 8, 10, 12],
        ticks: {},
        labels: { fontSize: 10, fontFamily: "sans-serif", offset: 7 }
      },
      title: { text: "%", fontSize: 11, fontWeight: 700, fontFamily: "sans-serif", offset: 21 }
    })
    .createTitle({
      text: "Unemployment rate, aged 16 and over",
      titleStyle: { fontSize: 9, fontWeight: 700, fontFamily: "sans-serif", color: "black" },
      subtitleStyle: { fontSize: 8, fontStyle: "italic", fontFamily: "sans-serif", color: "black" }
    })
    .editTitle({ gap: 3 })
    .editTitle({ subtitle: "Seasonally Adjusted, Source: ONS", alongOffset: -33, offset: -12 });
}