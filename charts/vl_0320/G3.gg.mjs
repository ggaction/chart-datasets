// DOCS: doc-ef5a28c0c3f3c920, doc-b30469a9489ccd34
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({ width: 183, height: 212, margin: { left: 24, top: 40, right: 9, bottom: 22 } })
    .editCanvas({ background: "whitesmoke" })
    .createData({ values: data })
    .createComputedData({ id: "valueNum", as: "valueNum", expression: { op: "toNumber", operand: { field: "value" } } })
    .createLinePlot({
      x: { field: "date", fieldType: "temporal" },
      y: { field: "valueNum", fieldType: "quantitative" },
      guides: false
    })
    .editXScale({ domain: [34214400000, 1656633600000], nice: false })
    .editYScale({ domain: [0, 12] })
    .editLineMark({ stroke: "#314686", strokeWidth: 2 })
    .createTitle({
      text: "Aged 16-64",
      titleStyle: { fontSize: 13, fontWeight: 700, color: "black", fontFamily: "sans-serif" },
      subtitleStyle: { fontSize: 10, fontStyle: "italic", color: "black", fontFamily: "sans-serif" }
    })
    .editTitle({ offset: -4, gap: 3, alongOffset: -18.123 })
    .editTitle({ subtitle: " Source: ONS" })
    .createXAxis({
      line: {},
      ticksAndLabels: {
        values: [315532800000, 631152000000, 946684800000, 1262304000000, 1577836800000],
        ticks: {},
        labels: { fontSize: 10, fontFamily: "sans-serif", offset: 6, flush: true, labelMap: [{ value: 631152000000, label: "" }, { value: 1262304000000, label: "" }] }
      },
      title: false
    })
    .editXAxis({ line: { color: "dimgrey" }, ticksAndLabels: { ticks: { color: "pink" }, labels: { color: "black" } } })
    .createYAxis({
      line: {},
      ticksAndLabels: {
        values: [0, 2, 4, 6, 8, 10, 12],
        ticks: {},
        labels: { fontSize: 10, fontFamily: "sans-serif", offset: 7 }
      },
      title: false
    })
    .editYAxis({ line: { color: "#888" }, ticksAndLabels: { ticks: { color: "#888" }, labels: { color: "black" } } })
    .createGrid({ horizontal: { color: "#ddd", lineWidth: 1 }, vertical: false });
}