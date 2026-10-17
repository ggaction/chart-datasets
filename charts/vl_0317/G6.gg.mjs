// DOCS: doc-b11b4627b143730d, doc-8a4f6f06e0d37d5e, doc-c2eafbbd16fe3c71
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({
      width: 181,
      height: 207,
      margin: { left: 24, top: 35, right: 7, bottom: 22 }
    })
    .editCanvas({ background: "whitesmoke" })
    .createData({ values: data })
    .createComputedData({
      id: "xDate",
      as: "x",
      expression: { op: "parseTime", operand: { field: "date" }, format: "auto" }
    })
    .createComputedData({
      id: "yVal",
      as: "y",
      expression: { op: "toNumber", operand: { field: "value" } }
    })
    .createLinePlot({
      x: { field: "x", fieldType: "temporal" },
      y: { field: "y", fieldType: "quantitative" },
      guides: false
    })
    .encodeStroke({ value: "#314686" })
    .encodeStrokeWidth({ value: 2 })
    .editXScale({ domain: [702086400000, 1656633600000], nice: false })
    .editYScale({ domain: [0, 45] })
    .createTitle({
      text: "Aged 16-17",
      titleStyle: { fontSize: 13 },
      subtitleStyle: { fontSize: 10, fontStyle: "italic" }
    })
    .editTitle({ offset: -9, gap: 1, alongOffset: -18.123046875 })
    .editTitle({ subtitle: " Source: ONS" })
    .editTitle({ titleStyle: { fontWeight: 700, color: "black" }, subtitleStyle: { color: "black" } })
    .createXAxis({
      line: {},
      ticksAndLabels: {
        values: [946684800000, 1262304000000, 1577836800000],
        ticks: {},
        labels: { fontSize: 10, offset: 7, fontFamily: "sans-serif" }
      },
      title: false
    })
    .createYAxis({
      line: {},
      ticksAndLabels: {
        values: [0, 10, 20, 30, 40],
        labels: { fontSize: 10, offset: 7, fontFamily: "sans-serif" }
      },
      title: false
    })
    .editXAxisLine({ color: "dimgrey" })
    .editXAxisTicks({ color: "pink" })
    .editXAxisLabels({ color: "black", format: "%Y" })
    .editYAxisLabels({ color: "black" })
    .createGrid({ horizontal: true })
    .editGrid({ horizontal: { color: "#ddd" } })
}
