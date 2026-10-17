import { chart } from "ggaction";
import data from "./data.json";

// DOCS: doc-b11b4627b143730d, doc-071c93dff3a5ea2e, doc-8a4f6f06e0d37d5e

export function buildChart() {
  return chart()
    .createCanvas({
      width: 254,
      height: 237,
      margin: { left: 44, top: 35, right: 10, bottom: 22 }
    })
    .createData({ values: data })
    .createComputedData({
      id: "valuesNum",
      as: "valueNum",
      expression: { op: "toNumber", operand: { field: "value" } }
    })
    .createLinePlot({
      x: { field: "date", fieldType: "temporal", temporalUnit: "year" },
      y: { field: "valueNum" },
      guides: false
    })
    .editXScale({ domain: [694224000000, 1609459200000], nice: false })
    .editYScale({ domain: [0, 110], zero: true })
    .encodeStroke({ value: "darkblue" })
    .encodeStrokeWidth({ value: 2 })
    .createXAxis({
      line: {},
      ticksAndLabels: {
        values: [
          788918400000,
          946684800000,
          1104537600000,
          1262304000000,
          1420070400000,
          1577836800000
        ],
        ticks: { length: 5, color: "#888" },
        labels: { fontSize: 10, fontFamily: "sans-serif", offset: 7 }
      },
      title: false
    })
    .createYAxis({
      line: {},
      ticksAndLabels: {
        values: [0, 20, 40, 60, 80, 100],
        ticks: { length: 5, color: "#888" },
        labels: { fontSize: 10, fontFamily: "sans-serif", offset: 7 }
      },
      title: {
        text: "Economically Inactive (%)",
        fontSize: 11,
        fontWeight: 700,
        fontFamily: "sans-serif",
        offset: 28
      }
    })
    .createGrid({
      horizontal: { color: "#ddd" },
      vertical: { color: "#ddd" }
    })
    .createTitle({
      text: "LFS: Part-time workers: Ill or disabled",
      alongOffset: -38.68,
      titleStyle: { fontSize: 13, fontWeight: 700, fontFamily: "sans-serif" }
    })
    .editTitle({ offset: -13 })
    .editTitle({ gap: 1 })
    .editTitle({
      subtitle: "UK: Male: Thousands: SA, Source ONS",
      subtitleStyle: { fontSize: 10, fontStyle: "italic", fontFamily: "sans-serif" }
    });
}