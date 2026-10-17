// DOCS: doc-b11b4627b143730d, doc-8a4f6f06e0d37d5e, doc-76573a465e2b6a33
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({
      width: 195,
      height: 207,
      margin: { top: 35, right: 7, bottom: 22, left: 38 }
    })
    .editCanvas({ background: "whitesmoke" })
    .createData({ id: "srs", values: data })
    .createComputedData({ id: "srsValue", as: "valueNum", expression: { op: "if", condition: { op: "eq", left: { field: "value" }, right: { constant: "" } }, then: { constant: 0 }, else: { op: "toNumber", operand: { field: "value" } } } })
    .createLinePlot({
      x: { field: "date", fieldType: "temporal", temporalUnit: "year" },
      y: { field: "valueNum", fieldType: "quantitative" },
      guides: false
    })
    .editXScale({ domain: [599616000000, 1577836800000] })
    .editYScale({ domain: [0, 1300], zero: true })
    .editLineMark({ target: "linePlot", stroke: "#314686", strokeWidth: 2 })
    .createGrid({ horizontal: {}, vertical: false })
    .editHorizontalGrid({ color: "#ddd" })
    .createTitle({
      text: "Aged 16-64",
      alongOffset: -32,
      titleStyle: { fontSize: 13, fontFamily: "sans-serif" }
    })
    .editTitle({
      offset: -9,
      gap: 3,
      titleStyle: { fontWeight: 700, color: "black" }
    })
    .editTitle({
      subtitle: " Source: ONS",
      subtitleStyle: { fontSize: 10, fontStyle: "italic", color: "black", fontFamily: "sans-serif" }
    })
    .createXAxis({
      line: {},
      ticksAndLabels: {
        count: 4,
        ticks: {},
        labels: { fontSize: 10, offset: 7, format: "%Y", flush: true }
      },
      title: false
    })
    .createYAxis({
      line: {},
      ticksAndLabels: {
        values: [0, 500, 1000],
        ticks: {},
        labels: { fontSize: 10, offset: 7, format: ",.0f" }
      },
      title: false
    })
    .editXAxis({ line: { color: "dimgrey" }, ticksAndLabels: { ticks: { color: "pink" }, labels: { fontFamily: "sans-serif", color: "black" } } })
    .editYAxis({ ticksAndLabels: { labels: { fontFamily: "sans-serif", color: "black" } } });
}
