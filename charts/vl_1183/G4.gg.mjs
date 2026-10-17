// DOCS: doc-b11b4627b143730d, doc-76573a465e2b6a33
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({
      width: 331,
      height: 362,
      margin: { left: 24, top: 40, right: 7, bottom: 22 }
    })
    .createData({ values: data })
    .createComputedData({
      id: "RateNum",
      as: "RateNum",
      expression: { op: "toNumber", operand: { field: "Rate" } }
    })
    .createLinePlot({
      x: {
        field: "Date",
        fieldType: "temporal"
      },
      y: {
        field: "RateNum",
        fieldType: "quantitative"
      },
      guides: false
    })
    .editLineMark({ stroke: "#4c78a8", strokeWidth: 2 })
    .editXScale({ type: "time", domain: [1420070400000, 1667260800000] })
    .editYScale({ domain: [0, 10], zero: false })
    .createXAxis({
      ticksAndLabels: {
        values: [
          1420070400000, 1451606400000, 1483228800000, 1514764800000,
          1546300800000, 1577836800000, 1609459200000, 1640995200000
        ],
        labels: { fontSize: 10, offset: 7 }
      },
      title: false
    })
    .createYAxis({
      ticksAndLabels: {
        values: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        labels: { fontSize: 10, offset: 7 }
      },
      title: false
    })
    .createGrid({
      horizontal: { color: "#ddd", lineWidth: 1 }
    })
    .createTitle({
      text: "CPI Inflation Rate (2015-2022)",
      titleStyle: { fontSize: 13 },
      alongOffset: -18.12
    })
    .editTitle({
      titleStyle: { fontWeight: 700 }
    })
    .editTitle({
      subtitle: "Source: ONS",
      subtitleStyle: { fontStyle: "italic", fontSize: 10 },
      offset: -13
    })
    .editTitle({
      gap: 3
    });
}
