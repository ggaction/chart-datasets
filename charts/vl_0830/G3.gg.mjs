// DOCS: doc-b11b4627b143730d, doc-8a4f6f06e0d37d5e, doc-2a31551f1566fc6b, doc-9bb354f4e2d46693
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({
      width: 351,
      height: 237,
      margin: { left: 44, top: 35, right: 7, bottom: 22 }
    })
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
    .editXScale({ domain: [567993600000, 1661990400000] })
    .editYScale({ domain: [0, 130], zero: true })
    .editLineMark({ stroke: "rgb(0,47,167)", strokeWidth: 2 })
    .createXAxis({
      line: {},
      ticksAndLabels: {
        values: [
          631152000000, 788918400000, 946684800000, 1104537600000,
          1262304000000, 1420070400000, 1577836800000
        ],
        ticks: { length: 5 },
        labels: { fontSize: 10, fontFamily: "sans-serif", offset: 7, format: "%Y" }
      },
      title: false
    })
    .createYAxis({
      line: {},
      ticksAndLabels: {
        values: [0, 20, 40, 60, 80, 100, 120],
        ticks: { length: 5 },
        labels: { fontSize: 10, fontFamily: "sans-serif", offset: 7 }
      },
      title: { text: "pence", fontSize: 11, fontWeight: 700, offset: 26 }
    })
    .createTitle({
      text: "RPI: Ave price - Cucumber, each",
      titleStyle: { fontSize: 13, fontWeight: 700, color: "black" },
      subtitleStyle: { fontSize: 10, fontStyle: "italic", color: "black" }
    })
    .editTitle({ offset: -13, gap: 1, alongOffset: -38.7 })
    .editTitle({ subtitle: "Source: ONS" });
}