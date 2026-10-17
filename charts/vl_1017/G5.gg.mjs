import { chart } from "ggaction";
import data from "./data.json";

// DOCS: doc-b11b4627b143730d, doc-8a4f6f06e0d37d5e, doc-c2eafbbd16fe3c71
export function buildChart() {
  return chart()
    .createCanvas({
      width: 231,
      height: 242,
      margin: { left: 29, top: 40, right: 22, bottom: 22 }
    })
    .createData({ values: data })
    .createComputedData({
      id: "ts",
      as: "ts",
      expression: {
        op: "parseTime",
        operand: { op: "concat", operands: [{ field: "date" }, { constant: "-01-01" }] },
        format: "%Y-%m-%d"
      }
    })
    .createComputedData({
      id: "valueNum",
      as: "valueNum",
      expression: { op: "toNumber", operand: { field: "value" } }
    })
    .createTitle({
      text: "Unemployed up to 6 Months (50+)",
      titleStyle: { fontSize: 13, fontWeight: 700, fontFamily: "sans-serif", color: "black" },
      subtitleStyle: { fontSize: 10, fontStyle: "italic", color: "black" }
    })
    .editTitle({
      offset: -13,
      gap: 1,
      alongOffset: -23.68
    })
    .editTitle({
      subtitle: "United Kingdom (thousands), seasonally adjusted"
    })
    .createLinePlot({
      x: { field: "ts", fieldType: "temporal" },
      y: { field: "valueNum", fieldType: "quantitative" },
      guides: false
    })
    .editXScale({ domain: [694224000000, 1609459200000], nice: false })
    .editYScale({ domain: [0, 200] })
    .encodeStroke({ value: "#3662f1", target: "linePlot" })
    .encodeStrokeWidth({ value: 2, target: "linePlot" })
    .encodeOpacity({ value: 1, target: "linePlot" })
    .createXAxis({
      line: { color: "#888" },
      ticksAndLabels: {
        values: [788918400000, 946684800000, 1104537600000, 1262304000000, 1420070400000, 1577836800000],
        ticks: { color: "#888", length: 5 },
        labels: { fontSize: 10, offset: 7, color: "black", fontFamily: "sans-serif" }
      },
      title: false
    })
    .createYAxis({
      line: { color: "#888" },
      ticksAndLabels: {
        values: [0, 50, 100, 150, 200],
        ticks: { color: "#888", length: 5 },
        labels: { fontSize: 10, offset: 7, color: "black", fontFamily: "sans-serif" }
      },
      title: false
    })
    .createGrid({
      horizontal: { color: "#ddd", lineWidth: 1 },
      vertical: { color: "#ddd", lineWidth: 1 }
    });
}