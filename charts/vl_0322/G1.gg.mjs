import { chart } from "ggaction";
import data from "./data.json";
// DOCS: doc-b11b4627b143730d, doc-8a4f6f06e0d37d5e, doc-4437cfb4813d728a

export function buildChart() {
  return chart()
    .createCanvas({ width: 183, height: 207, margin: { left: 24, top: 35, right: 9, bottom: 22 } })
    .createData({ values: data })
    .editCanvas({ background: "whitesmoke" })
    .createComputedData({
      id: "valueNum",
      as: "valueNum",
      expression: { op: "toNumber", operand: { field: "value" } }
    })
    .createLinePlot({
      x: {
        field: "date",
        fieldType: "temporal",
        scale: { domain: [34214400000, 1656633600000], nice: false }
      },
      y: {
        field: "valueNum",
        fieldType: "quantitative",
        scale: { domain: [0, 13], nice: false, zero: true }
      },
      guides: false
    })
    .editLineMark({ stroke: "#314686", strokeWidth: 2 })
    .createGrid({
      horizontal: {
        color: "#ddd",
        values: [0, 5, 10]
      },
      vertical: false
    })
    .createXAxis({
      line: { color: "dimgrey" },
      ticksAndLabels: {
        values: [315532800000, 631152000000, 946684800000, 1262304000000, 1577836800000],
        ticks: { color: "pink", length: 5 },
        labels: { fontSize: 10, offset: 7, color: "black", flush: true, labelMap: [{ value: 631152000000, label: "" }, { value: 1262304000000, label: "" }] }
      },
      title: false
    })
    .createYAxis({
      line: {},
      ticksAndLabels: {
        values: [0, 5, 10],
        ticks: {},
        labels: { fontSize: 10, offset: 7, color: "black" }
      },
      title: false
    })
    .createTitle({
      text: "Men aged 16-64",
      titleStyle: { fontSize: 13, fontWeight: 700, color: "black", fontFamily: "sans-serif" },
      subtitleStyle: { fontSize: 10, fontStyle: "italic", color: "black", fontFamily: "sans-serif" }
    })
    .editTitle({ offset: -9, gap: 1, alongOffset: -18 })
    .editTitle({ subtitle: " Source: ONS" });
}
