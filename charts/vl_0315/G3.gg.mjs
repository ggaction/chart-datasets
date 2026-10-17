// DOCS: doc-b11b4627b143730d, doc-8a4f6f06e0d37d5e, doc-76573a465e2b6a33
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({ width: 181, height: 209, margin: { left: 24, top: 37, right: 7, bottom: 22 } })
    .editCanvas({ background: "whitesmoke" })
    .createData({ id: "lms", values: data })
    .createComputedData({
      id: "lmsValueNum",
      as: "valueNum",
      expression: { op: "toNumber", operand: { field: "value" } }
    })
    .createLinePlot({
      x: {
        field: "date",
        fieldType: "temporal",
        temporalUnit: "auto"
      },
      y: {
        field: "valueNum",
        fieldType: "quantitative"
      },
      guides: false
    })
    .editXScale({ domain: [702086400000, 1656633600000], nice: false })
    .editYScale({ domain: [0, 11] })
    .editLineMark({ stroke: "#314686", strokeWidth: 2 })
    .createTitle({
      text: "Aged 25-34",
      titleStyle: { fontSize: 13, fontWeight: "700", color: "black" },
      subtitleStyle: { fontSize: 10, fontStyle: "italic", color: "black" }
    })
    .editTitle({ offset: -13, alongOffset: -18, gap: 3 })
    .editTitle({ subtitle: " Source: ONS" })
    .createXAxis({
      line: { color: "dimgrey" },
      ticksAndLabels: {
        count: 4,
        ticks: { color: "pink", length: 5 },
        labels: { fontSize: 10, offset: 7, color: "black", flush: true, format: "%Y" }
      },
      title: false
    })
    .createYAxis({
      line: { color: "#888" },
      ticksAndLabels: {
        count: 4,
        ticks: { color: "#888", length: 5 },
        labels: { fontSize: 10, offset: 7, color: "black" }
      },
      title: false
    })
    .createGrid({ horizontal: { color: "#ddd" } });
}