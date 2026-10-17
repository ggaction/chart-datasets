// DOCS: doc-b11b4627b143730d, doc-071c93dff3a5ea2e, doc-76573a465e2b6a33
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({
      width: 347,
      height: 257,
      margin: { left: 44, top: 40, right: 103, bottom: 37 }
    })
    .createData({ values: data })
    .createComputedData({
      id: "valueNum",
      as: "valueNum",
      expression: { op: "toNumber", operand: { field: "value" } }
    })
    .createLinePlot({
      x: { field: "date", fieldType: "temporal", temporalUnit: "year" },
      y: { field: "valueNum" },
      guides: false
    })
    .editXScale({ domain: [694224000000, 1609459200000] })
    .editYScale({ domain: [0, 120] })
    .encodeStroke({ value: "rgb(0,47,167" })
    .encodeStrokeWidth({ value: 2 })
    .createXAxis({
      line: {},
      ticksAndLabels: {
        ticks: { length: 3 },
        labels: { fontSize: 10, fontFamily: "sans-serif", offset: 7, flush: true },
        values: [
          788918400000, 946684800000, 1104537600000,
          1262304000000, 1420070400000, 1577836800000
        ]
      },
      title: { text: "date", fontSize: 11, fontFamily: "sans-serif", offset: 28 }
    })
    .createYAxis({
      line: {},
      ticksAndLabels: {
        ticks: { length: 3 },
        labels: { fontSize: 10, fontFamily: "sans-serif", offset: 7 },
        values: [0, 20, 40, 60, 80, 100, 120]
      },
      title: { text: "Unemployed people (000s)", fontSize: 11, fontFamily: "sans-serif", offset: 33 }
    })
    .editXAxisLine({ color: "#888", lineWidth: 1 })
    .editXAxisTicks({ color: "#888", lineWidth: 1 })
    .editXAxisTitle({ fontWeight: 700 })
    .editYAxisLine({ color: "#888", lineWidth: 1 })
    .editYAxisTicks({ color: "#888", lineWidth: 1 })
    .editYAxisTitle({ fontWeight: 700 })
    .createTitle({
      text: "Number of unemployed people in the UK  (Aged 18-24) ",
      titleStyle: { fontSize: 13, fontStyle: "normal", fontFamily: "sans-serif" },
      alongOffset: -38.6845703125
    })
    .editTitle({
      gap: 1,
      offset: -4,
      titleStyle: { fontWeight: 700, color: "black" }
    })
    .editTitle({
      subtitle: "Seasonally adjusted from 1992-2022 , Source: ONS",
      subtitleStyle: { fontSize: 10, fontWeight: 400, fontStyle: "italic", color: "black", fontFamily: "sans-serif" }
    });
}