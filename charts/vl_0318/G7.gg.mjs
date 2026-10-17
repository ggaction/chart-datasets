// DOCS: doc-b11b4627b143730d (createLinePlot), doc-76573a465e2b6a33 (basic charts)
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({
      width: 187,
      height: 212,
      margin: { left: 24, top: 40, right: 13, bottom: 22 }
    })
    .editCanvas({ background: "whitesmoke" })
    .createData({ values: data })
    .createComputedData({
      id: "valueNum",
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
    .editXScale({ domain: [702086400000, 1656633600000] })
    .editYScale({ domain: [0, 12] })
    .encodeStroke({ value: "#314686" })
    .encodeStrokeWidth({ value: 2 })
    .createTitle({
      text: "Employment rate:  Aged 65+",
      titleStyle: { fontSize: 13, fontFamily: "sans-serif" },
      alongOffset: -18
    })
    .editTitle({ offset: -13, gap: 1 })
    .editTitle({
      subtitle: " Source: ONS",
      subtitleStyle: { fontSize: 10, fontStyle: "italic", color: "black", fontFamily: "sans-serif" },
      titleStyle: { color: "black", fontWeight: 700 }
    })
    .createXAxis({
      line: {},
      ticksAndLabels: {
        values: [946684800000, 1262304000000, 1577836800000],
        ticks: { length: 5 },
        labels: { fontSize: 10, offset: 7, flush: true }
      },
      title: false
    })
    .editXAxis({
      line: { color: "dimgrey" },
      ticksAndLabels: {
        ticks: { color: "pink" },
        labels: { format: "%Y", color: "black", fontFamily: "sans-serif" }
      }
    })
    .createYAxis({
      line: {},
      ticksAndLabels: {
        values: [0, 2, 4, 6, 8, 10, 12],
        ticks: { length: 5 },
        labels: { fontSize: 10, offset: 7 }
      },
      title: false
    })
    .editYAxis({
      line: { color: "#888" },
      ticksAndLabels: {
        ticks: { color: "#888" },
        labels: { color: "black", fontFamily: "sans-serif" }
      }
    })
    .createGrid({ horizontal: {}, vertical: false })
    .editHorizontalGrid({ color: "#ddd", lineWidth: 1 });
}