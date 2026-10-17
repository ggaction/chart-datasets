import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({ width: 205, height: 206, margin: { left: 44, top: 34, right: 11, bottom: 22 } })
    .createData({ values: data })
    .createComputedData({
      id: "epoch",
      as: "dateEpoch",
      expression: {
        op: "parseTime",
        format: "%Y-%m-%d",
        operand: { op: "concat", operands: [{ field: "date" }, { constant: "-01-01" }] }
      }
    })
    .createComputedData({ id: "valueNum", as: "valueNum", expression: { op: "toNumber", operand: { field: "value" } } })
    .createLinePlot({
      x: { field: "dateEpoch", fieldType: "temporal" },
      y: { field: "valueNum", fieldType: "quantitative" },
      guides: false
    })
    .editXScale({ domain: [694224000000, 1609459200000], nice: false })
    .editYScale({ domain: [0, 500] })
    .encodeStroke({ value: "rgb(8,123,102" })
    .encodeStrokeWidth({ value: 2 }) // DOCS: doc-071c93dff3a5ea2e
    .createTitle({
      text: "Econ. inactive females in FT educ aged 16-17",
      titleStyle: { fontSize: 9 },
      alongOffset: -38.68
    })
    .editTitle({
      gap: 3,
      offset: -3
    })
    .editTitle({
      titleStyle: { fontWeight: 700, color: "black", fontFamily: "sans-serif" },
      subtitle: "Seasonally Adjusted, Source: ONS",
      subtitleStyle: { fontSize: 8, fontStyle: "italic", color: "black", fontFamily: "sans-serif" }
    })
    .createXAxis({
      line: {},
      ticksAndLabels: {
        values: [946684800000, 1262304000000, 1577836800000],
        ticks: { length: 5 },
        labels: { fontSize: 10, fontFamily: "sans-serif", color: "black", offset: 8 }
      },
      title: false
    })
    .createYAxis({
      line: {},
      ticksAndLabels: {
        values: [0, 100, 200, 300, 400, 500],
        ticks: { length: 5 },
        labels: { fontSize: 10, fontFamily: "sans-serif", color: "black", offset: 7 }
      },
      title: { text: "000's", fontSize: 11, fontWeight: 700, color: "black", fontFamily: "sans-serif", offset: 33 }
    });
}
