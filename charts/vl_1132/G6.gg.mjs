// DOCS: doc-b11b4627b143730d, doc-8a4f6f06e0d37d5e, doc-c2eafbbd16fe3c71
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({
      width: 339,
      height: 252,
      margin: { top: 35, right: 95, bottom: 37, left: 44 }
    })
    .createData({ values: data })
    .createComputedData({
      id: "valueNum",
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
        field: "valueNum",
        fieldType: "quantitative",
      },
      guides: false
    })
    .editXScale({ domain: [694224000000, 1609459200000] })
    .editYScale({ domain: [0, 550] })
    .encodeStroke({ value: "rgb(0,47,167" })
    .encodeStrokeWidth({ value: 2 })
    .createTitle({
      text: "Number of Unemployed Males in the UK (Aged 25-34) ",
      titleStyle: { fontSize: 13, fontFamily: "sans-serif" },
      alongOffset: -38.6845703125
    })
    .editTitle({
      align: "left",
      offset: -9,
      gap: 3
    })
    .editTitle({
      subtitle: "Seasonally adjusted from 1992-2022 , Source: ONS",
      subtitleStyle: { fontSize: 10, fontStyle: "italic", fontFamily: "sans-serif", color: "black" },
      titleStyle: { color: "black", fontWeight: 700 }
    })
    .createXAxis({
      line: {},
      ticksAndLabels: {
        values: [788918400000, 946684800000, 1104537600000, 1262304000000, 1420070400000, 1577836800000],
        labels: { fontSize: 10, fontFamily: "sans-serif", offset: 7 },
        ticks: { length: 5 }
      },
      title: { text: "date", fontSize: 11, fontFamily: "sans-serif", offset: 27 }
    })
    .createYAxis({
      line: {},
      ticksAndLabels: {
        values: [0, 100, 200, 300, 400, 500],
        labels: { fontSize: 10, fontFamily: "sans-serif", offset: 7 },
        ticks: { length: 5 }
      },
      title: { text: "Unemployment people (000s)", fontSize: 11, fontFamily: "sans-serif", offset: 33 }
    })
    .editXAxis({
      ticksAndLabels: { ticks: { color: "black" }, labels: { color: "black" } },
      title: { color: "black", fontWeight: 700 }
    })
    .editYAxis({
      ticksAndLabels: { ticks: { color: "black" }, labels: { color: "black" } },
      title: { color: "black", fontWeight: 700 }
    });
}