// DOCS: doc-b11b4627b143730d, doc-76573a465e2b6a33, doc-9bb354f4e2d46693, doc-ba092ec842bafcc1
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({
      width: 181,
      height: 212,
      margin: { left: 24, top: 40, right: 7, bottom: 22 }
    })
    .editCanvas({ background: "whitesmoke" })
    .createData({ id: "raw", values: data })
    .createComputedData({
      id: "dated",
      as: "dateMs",
      expression: { op: "parseTime", operand: { field: "date" }, format: "auto" }
    })
    .createComputedData({
      id: "num",
      as: "valueNum",
      expression: { op: "toNumber", operand: { field: "value" } }
    })
    .createLinePlot({
      x: { field: "dateMs", fieldType: "temporal", temporalUnit: "timestamp" },
      y: { field: "valueNum", fieldType: "quantitative" },
      guides: false
    })
    .editXScale({ domain: [702086400000, 1656633600000], nice: false })
    .editYScale({ domain: [0, 10], zero: true })
    .encodeStroke({ value: "#314686" })
    .encodeStrokeWidth({ value: 2 })
    .createXAxis({
      line: {},
      ticksAndLabels: {
        values: [946684800000, 1262304000000, 1577836800000],
        ticks: {},
        labels: {
          fontSize: 10,
          fontFamily: "sans-serif",
          offset: 7,
          flush: true
        }
      },
      title: false
    })
    .createYAxis({
      line: {},
      ticksAndLabels: {
        values: [0, 2, 4, 6, 8, 10],
        ticks: {},
        labels: { fontSize: 10, fontFamily: "sans-serif", offset: 7 }
      },
      title: false
    })
    .editXAxis({
      line: { color: "dimgrey" },
      ticksAndLabels: {
        ticks: { color: "pink" },
        labels: { color: "black", format: "%Y" }
      }
    })
    .editYAxis({
      line: { color: "#888" },
      ticksAndLabels: { labels: { color: "black" } }
    })
    .createGrid({ horizontal: true })
    .editHorizontalGrid({ color: "#ddd" })
    .createTitle({
      text: "Aged 50-64",
      titleStyle: { fontSize: 13, fontFamily: "sans-serif" },
      subtitleStyle: { fontSize: 10, fontStyle: "italic", fontFamily: "sans-serif" }
    })
    .editTitle({ offset: -13, gap: 1, alongOffset: -18.123046875 })
    .editTitle({
      subtitle: " Source: ONS",
      titleStyle: { fontWeight: 700, color: "black" },
      subtitleStyle: { color: "black" }
    });
}