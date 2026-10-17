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
    .editLineMark({ stroke: "#314686", strokeWidth: 2 })
    .createTitle({
      text: "Employment rate:  Aged 65+",
      titleStyle: { fontSize: 13, fontWeight: 700, color: "black", fontFamily: "sans-serif" },
      alongOffset: -18
    })
    .editTitle({ offset: -13, gap: 1 })
    .editTitle({
      subtitle: " Source: ONS",
      subtitleStyle: { fontSize: 10, fontStyle: "italic", color: "black", fontFamily: "sans-serif" }
    })
    .createXAxis({
      line: { color: "dimgrey" },
      ticksAndLabels: {
        values: [946684800000, 1262304000000, 1577836800000],
        ticks: { color: "pink", length: 5 },
        labels: { format: "%Y", fontSize: 10, offset: 7, color: "black", fontFamily: "sans-serif", flush: true }
      },
      title: false
    })
    .createYAxis({
      line: { color: "#888" },
      ticksAndLabels: {
        values: [0, 2, 4, 6, 8, 10, 12],
        ticks: { color: "#888", length: 5 },
        labels: { fontSize: 10, offset: 7, color: "black", fontFamily: "sans-serif" }
      },
      title: false
    })
    .createGrid({ horizontal: { color: "#ddd", lineWidth: 1 }, vertical: false });
}