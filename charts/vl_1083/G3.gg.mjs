// DOCS: doc-b11b4627b143730d, doc-76573a465e2b6a33, doc-071c93dff3a5ea2e, doc-8a4f6f06e0d37d5e, doc-c2eafbbd16fe3c71
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({
      width: 284,
      height: 237,
      margin: { left: 38, top: 35, right: 46, bottom: 22 }
    })
    .createData({ values: data })
    .createComputedData({
      id: "employmentValue",
      as: "valueNum",
      expression: { op: "toNumber", operand: { field: "value" } }
    })
    .createTitle({
      text: "Employment: Information & Communication",
      titleStyle: { fontSize: 13, fontWeight: 700 },
      alongOffset: -32
    })
    .editTitle({
      offset: -13,
      subtitleStyle: { fontSize: 10, fontStyle: "italic" }
    })
    .editTitle({
      subtitle: "(aged 16 and over, in Thousands)",
      gap: 1
    })
    .createLinePlot({
      x: { field: "date", fieldType: "temporal" },
      y: { field: "valueNum", fieldType: "quantitative" },
      guides: false
    })
    .editLineMark({ stroke: "seagreen", strokeWidth: 2, opacity: 1 })
    .editXScale({ domain: [852076800000, 1609459200000] })
    .editYScale({ domain: [0, 1600], zero: true })
    .createXAxis({
      line: {},
      ticksAndLabels: {
        values: [
          946684800000, 1104537600000, 1262304000000,
          1420070400000, 1577836800000
        ],
        ticks: { length: 4, color: "#888" },
        labels: {
          fontSize: 10,
          fontFamily: "sans-serif",
          offset: 7,
          format: "%Y"
        }
      },
      title: false
    })
    .createYAxis({
      line: {},
      ticksAndLabels: {
        values: [0, 500, 1000, 1500],
        ticks: { length: 4, color: "#888" },
        labels: {
          fontSize: 10,
          fontFamily: "sans-serif",
          offset: 7
        }
      },
      title: false
    })
    .createGrid({
      horizontal: { values: [0, 500, 1000, 1500], color: "#ddd" },
      vertical: {
        color: "#ddd",
        values: [
          946684800000, 1104537600000, 1262304000000,
          1420070400000, 1577836800000
        ]
      }
    });
}
