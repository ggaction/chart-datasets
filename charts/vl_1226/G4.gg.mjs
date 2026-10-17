// DOCS: doc-b11b4627b143730d, doc-76573a465e2b6a33, doc-c2eafbbd16fe3c71
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({ width: 285, height: 217, margin: { left: 43, top: 40, right: 87, bottom: 22 } })
    .createData({ values: data })
    .createComputedData({
      id: "dated",
      as: "ts",
      expression: {
        op: "parseTime",
        operand: { op: "concat", operands: [{ field: "date" }, { constant: "-01-01" }] },
        format: "%Y-%m-%d"
      }
    })
    .createComputedData({
      id: "num",
      as: "v",
      expression: { op: "toNumber", operand: { field: "value" } }
    })
    .createLinePlot({
      x: { field: "ts", fieldType: "temporal" },
      y: { field: "v", fieldType: "quantitative" },
      guides: false
    })
    .editXScale({ domain: [852076800000, 1609459200000] })
    .editYScale({ domain: [0, 10000] })
    .encodeStroke({ value: "rgb(0,47,167)" })
    .encodeStrokeWidth({ value: 2 })
    .createXAxis({
      line: { color: "#888" },
      ticksAndLabels: {
        values: [946684800000, 1104537600000, 1262304000000, 1420070400000, 1577836800000],
        ticks: { color: "#888", length: 5 },
        labels: { fontSize: 10, fontFamily: "sans-serif", color: "black", offset: 7, format: "%Y", flush: true }
      },
      title: false
    })
    .createYAxis({
      line: { color: "#888" },
      ticksAndLabels: {
        ticks: { color: "#888", length: 5 },
        labels: { fontSize: 10, fontFamily: "sans-serif", color: "black", offset: 7, format: "," }
      },
      title: false
    })
    .createTitle({
      text: "Imports from EU: Other transport equipment",
      titleStyle: { fontSize: 13, fontWeight: 700, fontFamily: "sans-serif", color: "black" },
      alongOffset: -37.6
    })
    .editTitle({ subtitleStyle: { fontSize: 10, fontStyle: "italic", fontWeight: 400, fontFamily: "sans-serif", color: "black" }, gap: 3, offset: -4 })
    .editTitle({ subtitle: "Data source: ONS (2022)" });
}