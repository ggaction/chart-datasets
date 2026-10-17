import { chart } from "ggaction";
import data from "./data.json";
// DOCS: doc-b11b4627b143730d

export function buildChart() {
  return chart()
    .createCanvas({ width: 175, height: 212, margin: { left: 18, top: 40, right: 7, bottom: 22 } })
    .editCanvas({ background: "whitesmoke" })
    .createData({ values: data })
    .createComputedData({ id: "xDate", as: "dateMs", expression: { op: "parseTime", operand: { field: "date" }, format: "auto" } })
    .createComputedData({ id: "yNum", as: "valueNum", expression: { op: "toNumber", operand: { field: "value" } } })
    .createLinePlot({
      x: { field: "dateMs", fieldType: "temporal" },
      y: { field: "valueNum" },
      guides: false
    })
    .editXScale({ domain: [702086400000, 1656633600000] })
    .editYScale({ domain: [0, 8] })
    .encodeStroke({ value: "#314686" })
    .encodeStrokeWidth({ value: 2 })
    .createTitle({
      text: "Aged 35-49",
      titleStyle: { fontSize: 13, fontWeight: 700, fontFamily: "sans-serif" },
      subtitleStyle: { fontSize: 10, fontStyle: "italic", fontFamily: "sans-serif" }
    })
    .editTitle({ titleStyle: { color: "black" }, subtitleStyle: { color: "black" } })
    .editTitle({ subtitle: "Source: ONS", offset: -13, gap: 1 })
    .editTitle({ alongOffset: -12.56 })
    .createAxes({
      x: {
        line: { color: "dimgrey" },
        ticksAndLabels: {
          values: [946684800000, 1262304000000, 1577836800000],
          ticks: { color: "pink", length: 5 },
          labels: { fontSize: 10, fontFamily: "sans-serif", color: "black", offset: 7, flush: true, format: "%Y" }
        },
        title: false
      },
      y: {
        line: {},
        ticksAndLabels: {
          values: [0, 2, 4, 6, 8],
          ticks: { length: 5 },
          labels: { fontSize: 10, fontFamily: "sans-serif", color: "black", offset: 7 }
        },
        title: false
      }
    })
    .createGrid({ horizontal: { color: "#ddd" } });
}