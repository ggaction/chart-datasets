// DOCS: doc-b11b4627b143730d, doc-8a4f6f06e0d37d5e, doc-76573a465e2b6a33
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({
      width: 217,
      height: 242,
      margin: { left: 24, top: 40, right: 13, bottom: 22 }
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
    .editYScale({ domain: [0, 12] })
    .encodeStroke({ value: "#3662f1" })
    .encodeStrokeWidth({ value: 2 })
    .encodeOpacity({ value: 1 })
    .createTitle({
      text: "Unemployment Rate (16+)",
      titleStyle: { fontSize: 13 },
      subtitleStyle: { fontSize: 10, fontStyle: "italic" }
    })
    .editTitle({
      subtitle: "United Kingdom (%), seasonally adjusted",
      offset: -12,
      alongOffset: -18
    })
    .editTitle({ titleStyle: { fontWeight: 700, color: "black" } })
    .editTitle({ subtitleStyle: { color: "black" } })
    .createXAxis({
      line: {},
      ticksAndLabels: {
        values: [315532800000, 631152000000, 946684800000, 1262304000000, 1577836800000],
        ticks: { length: 5 },
        labels: { fontSize: 10, offset: 7, fontFamily: "sans-serif" }
      },
      title: false
    })
    .createYAxis({
      line: {},
      ticksAndLabels: {
        values: [0, 2, 4, 6, 8, 10, 12],
        ticks: { length: 5 },
        labels: { fontSize: 10, offset: 7, fontFamily: "sans-serif" }
      },
      title: false
    })
    .createHorizontalGrid({ color: "#ddd", lineWidth: 1 })
    .createVerticalGrid({ color: "#ddd", lineWidth: 1 });
}