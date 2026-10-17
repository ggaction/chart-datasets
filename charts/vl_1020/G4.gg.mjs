// DOCS: doc-b11b4627b143730d doc-071c93dff3a5ea2e doc-8a4f6f06e0d37d5e doc-76573a465e2b6a33
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({
      width: 232,
      height: 237,
      margin: { left: 38, top: 35, right: 14, bottom: 22 }
    })
    .createData({ values: data })
    .createComputedData({
      id: "lmsParsed",
      as: "dateMs",
      expression: { op: "parseTime", operand: { field: "date" }, format: "auto" }
    })
    .createComputedData({
      id: "valueNumComputed",
      as: "valueNum",
      expression: { op: "toNumber", operand: { field: "value" } }
    })
    .createLinePlot({
      x: { field: "dateMs", fieldType: "temporal" },
      y: { field: "valueNum", fieldType: "quantitative" },
      guides: false
    })
    .editXScale({ domain: [694224000000, 1609459200000] })
    .editYScale({ domain: [0, 1100], zero: true })
    .editLineMark({ stroke: "#3662f1", strokeWidth: 2, opacity: 1 })
    .createTitle({
      text: "Number of Unemployed(16-24)",
      titleStyle: { fontSize: 13, fontWeight: 700 },
      subtitleStyle: { fontSize: 10, fontStyle: "italic" }
    })
    .editTitle({
      subtitle: "United Kingdom (thousands), seasonally adjusted",
      offset: -12,
      alongOffset: -32
    })
    .createXAxis({
      line: {},
      ticksAndLabels: {
        values: [
          788918400000, 946684800000, 1104537600000,
          1262304000000, 1420070400000, 1577836800000
        ],
        ticks: { length: 5 },
        labels: { flush: true, fontSize: 10, offset: 7 }
      },
      title: false
    })
    .createYAxis({
      line: {},
      ticksAndLabels: {
        values: [0, 200, 400, 600, 800, 1000],
        ticks: { length: 5 },
        labels: { fontSize: 10, offset: 7 }
      },
      title: false
    })
    .editXAxis({
      line: { color: "#888" },
      ticksAndLabels: {
        ticks: { color: "#888" },
        labels: { format: "%Y" }
      }
    })
    .editYAxis({
      line: { color: "#888" },
      ticksAndLabels: {
        ticks: { color: "#888" },
        labels: { format: "," }
      }
    })
    .createGrid({
      horizontal: { color: "#ddd", values: [0, 200, 400, 600, 800, 1000] },
      vertical: {
        color: "#ddd",
        values: [
          788918400000, 946684800000, 1104537600000,
          1262304000000, 1420070400000, 1577836800000
        ]
      }
    });
}
