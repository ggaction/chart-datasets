// DOCS: doc-b11b4627b143730d, doc-9bb354f4e2d46693, doc-071c93dff3a5ea2e
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({ width: 194, height: 201, margin: { left: 33, top: 29, right: 11, bottom: 22 } })
    .createData({ values: data })
    .createComputedData({
      id: "valueNum",
      as: "valueNum",
      expression: { op: "toNumber", operand: { field: "value" } }
    })
    .createLinePlot({
      x: { field: "date", fieldType: "temporal", temporalUnit: "year" },
      y: { field: "valueNum", fieldType: "quantitative" },
      guides: false
    })
    .editXScale({ domain: [694224000000, 1609459200000], nice: false })
    .editYScale({ domain: [0, 7] })
    .editLineMark({ stroke: "rgb(8,123,102", strokeWidth: 2 })
    .createXAxis({
      line: {},
      ticksAndLabels: {
        values: [946684800000, 1262304000000, 1577836800000],
        ticks: { length: 5 },
        labels: { fontSize: 10, fontFamily: "sans-serif", offset: 7, flush: true }
      },
      title: false
    })
    .createYAxis({
      line: {},
      ticksAndLabels: {
        values: [0, 2, 4, 6],
        ticks: { length: 5 },
        labels: { fontSize: 10, fontFamily: "sans-serif", offset: 7 }
      },
      title: { text: "%", fontSize: 11, fontWeight: 700, offset: 15 }
    })
    .createTitle({
      text: "Female unemployment rate, aged 25-49",
      titleStyle: { fontSize: 9, fontWeight: 700, fontFamily: "sans-serif", color: "black" },
      subtitleStyle: { fontSize: 8, fontStyle: "italic", fontFamily: "sans-serif", color: "black" }
    })
    .editTitle({ subtitle: "Seasonally Adjusted, Source: ONS", offset: -8, gap: 2 })
    .editTitle({ alongOffset: -27.56 });
}
