// DOCS: doc-b11b4627b143730d, doc-071c93dff3a5ea2e
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({
      width: 255,
      height: 274,
      margin: { left: 33, top: 24, right: 22, bottom: 50 }
    })
    .createData({ values: data })
    .createComputedData({
      id: "main",
      as: "valueNum",
      expression: { op: "toNumber", operand: { field: "value" } }
    })
    .createLinePlot({
      x: { field: "date", fieldType: "temporal", temporalUnit: "year" },
      y: { field: "valueNum" },
      guides: false
    })
    .editLineMark({ stroke: "#4c78a8", strokeWidth: 2 })
    .editXScale({ domain: [694224000000, 1609459200000] })
    .editYScale({ domain: [0, 9] })
    .createXAxis({
      ticksAndLabels: {
        values: [788918400000, 946684800000, 1104537600000, 1262304000000, 1420070400000, 1577836800000],
        ticks: { length: 5 },
        labels: { fontSize: 10, offset: 4, rotation: { value: -90, unit: "degrees" } }
      },
      title: { text: "date", fontSize: 11, offset: 36 }
    })
    .editXAxis({ title: { fontWeight: 700 } })
    .createYAxis({
      ticksAndLabels: {
        count: 5,
        ticks: { length: 5 },
        labels: { fontSize: 10, offset: 7 }
      },
      title: { text: "Unemployment Rate (%)", fontSize: 11 }
    })
    .editYAxis({ title: { fontWeight: 700 } })
    .createGrid({
      horizontal: { color: "#ddd", lineWidth: 1 },
      vertical: { color: "#ddd", lineWidth: 1 }
    })
    .applyTextMetrics({
      profile: {
        schemaVersion: 1,
        id: "title-metrics",
        measurements: [
          {
            text: "Unemployment Rate for 50-64 year olds",
            fontFamily: "sans-serif",
            fontSize: 13,
            fontWeight: 700,
            width: 244.203125
          }
        ]
      }
    })
    .createTitle({
      text: "Unemployment Rate for 50-64 year olds",
      titleStyle: { fontSize: 13, fontWeight: 700, fontFamily: "sans-serif", color: "black" },
      offset: -12,
      alongOffset: -27.5615234375
    })
  .editYAxis({ title: { offset: 20.983398437499996 } })
}
