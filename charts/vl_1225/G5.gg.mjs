// DOCS: doc-b11b4627b143730d, doc-071c93dff3a5ea2e, doc-8a4f6f06e0d37d5e
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({
      width: 194,
      height: 212,
      margin: { left: 29, top: 35, right: 10, bottom: 22 }
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
    .editXScale({ domain: [852076800000, 1609459200000] })
    .editYScale({ domain: [0, 260] })
    .encodeStroke({ value: "rgb(0,47,167)" })
    .encodeStrokeWidth({ value: 2 })
    .createXAxis({
      line: {},
      ticksAndLabels: {
        ticks: {},
        values: [946684800000, 1262304000000, 1420070400000, 1577836800000],
        labels: {
          fontSize: 10,
          offset: 7
        }
      },
      title: false
    })
    .createYAxis({
      line: {},
      ticksAndLabels: {
        ticks: {},
        values: [0, 50, 100, 150, 200, 250],
        labels: {
          fontSize: 10,
          offset: 7
        }
      },
      title: false
    })
    .createTitle({
      text: "Imports from EU: Iron ores",
      titleStyle: { fontSize: 13 },
      subtitleStyle: { fontSize: 10 }
    })
    .editTitle({ gap: 1, offset: -9, alongOffset: -23.7 })
    .editTitle({
      subtitle: "Data source: ONS (2022)",
      subtitleStyle: { fontStyle: "italic", color: "black" },
      titleStyle: { color: "black", fontWeight: 700 }
    });
}