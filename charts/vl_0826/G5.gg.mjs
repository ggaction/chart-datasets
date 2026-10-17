// DOCS: doc-b11b4627b143730d, doc-dfae58344d5a524e, doc-8a4f6f06e0d37d5e
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({ width: 351, height: 237, margin: { left: 44, top: 35, right: 7, bottom: 22 } })
    .createData({ values: data })
    .createComputedData({
      id: "valueNum",
      as: "valueNum",
      expression: { op: "toNumber", operand: { field: "value" } }
    })
    .createLinePlot({
      x: { field: "date", fieldType: "temporal" },
      y: { field: "valueNum", fieldType: "quantitative" },
      guides: false
    })
    .editXScale({ domain: [536457600000, 1661990400000] })
    .editYScale({ domain: [0, 280] })
    .encodeStroke({ value: "rgb(0,47,167)" })
    .encodeStrokeWidth({ value: 2 })
    .createTitle({
      text: "RPI: food: potatoes (Jan 1987=100)",
      titleStyle: { fontSize: 13, fontFamily: "sans-serif" },
      subtitleStyle: { fontSize: 10, fontStyle: "italic", fontFamily: "sans-serif" }
    })
    .editTitle({
      offset: -13,
      alongOffset: -38.7,
      gap: 1
    })
    .editTitle({
      subtitle: "RPI: Potato from 1987-2022, Source: ONS",
      titleStyle: { fontWeight: 700, color: "black" },
      subtitleStyle: { color: "black" }
    })
    .createXAxis({
      line: {},
      ticksAndLabels: {
        values: [631152000000, 788918400000, 946684800000, 1104537600000, 1262304000000, 1420070400000, 1577836800000],
        ticks: {},
        labels: { fontSize: 10, fontFamily: "sans-serif", offset: 7, format: "%Y" }
      },
      title: false
    })
    .createYAxis({
      line: {},
      ticksAndLabels: {
        values: [0, 50, 100, 150, 200, 250],
        ticks: {},
        labels: { fontSize: 10, fontFamily: "sans-serif", offset: 7 }
      },
      title: { text: "Index, base year = 100", fontSize: 11, fontWeight: 700, fontFamily: "sans-serif", offset: 32 }
    });
}