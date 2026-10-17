// DOCS: doc-b11b4627b143730d, doc-071c93dff3a5ea2e, doc-7f2c254224fc4908
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({
      width: 344,
      height: 257,
      margin: { left: 44, top: 40, right: 100, bottom: 37 }
    })
    .createData({ values: data })
    .createComputedData({
      id: "ukValueNum",
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
    .editXScale({ domain: [694224000000, 1609459200000], nice: false })
    .editYScale({ domain: [0, 800], zero: true })
    .encodeStroke({ value: "rgb(0,47,167" })
    .encodeStrokeWidth({ value: 2 })
    .createTitle({
      text: "Number of unemployed people in the UK (Aged 16-24)",
      titleStyle: { fontSize: 13, fontFamily: "sans-serif" },
      alongOffset: -38.6845703125
    })
    .editTitle({ offset: -13, gap: 3, titleStyle: { fontWeight: 700, color: "black" } })
    .editTitle({
      subtitle: "Seasonally adjusted from 1992-2022 , Source: ONS",
      subtitleStyle: { fontSize: 10, fontStyle: "italic", fontFamily: "sans-serif" }
    })
    .createXAxis({
      line: {},
      ticksAndLabels: {
        values: [788918400000, 946684800000, 1104537600000, 1262304000000, 1420070400000, 1577836800000],
        ticks: { length: 5 },
        labels: { format: "%Y", fontSize: 10, offset: 7 }
      },
      title: { text: "date", fontSize: 11, offset: 28 }
    })
    .editXAxisLine({ color: "#888" })
    .editXAxisTicks({ color: "#888" })
    .editXAxisTitle({ fontWeight: 700 })
    .createYAxis({
      line: {},
      ticksAndLabels: {
        values: [0, 200, 400, 600, 800],
        ticks: { length: 5 },
        labels: { fontSize: 10, offset: 7 }
      },
      title: {
        text: "Unemployed people (000s)",
        fontSize: 11,
        offset: 33,
        rotation: { value: -90, unit: "degrees" }
      }
    })
    .editYAxisLine({ color: "#888" })
    .editYAxisTicks({ color: "#888" })
    .editYAxisTitle({ fontWeight: 700 })
    ;
}