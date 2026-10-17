// DOCS: doc-b11b4627b143730d doc-76573a465e2b6a33 doc-c2eafbbd16fe3c71 doc-8a4f6f06e0d37d5e doc-ba092ec842bafcc1
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
      id: "valueNum",
      as: "valueNum",
      expression: { op: "toNumber", operand: { field: "value" } }
    })
    .createLinePlot({
      x: {
        field: "date",
        fieldType: "temporal"
      },
      y: {
        field: "valueNum",
        fieldType: "quantitative"
      },
      guides: false
    })
    .editXScale({ domain: [702086400000, 1656633600000] })
    .editYScale({ domain: [0, 22] })
    .encodeStroke({ value: "#314686" })
    .encodeStrokeWidth({ value: 2 })
    .createGrid({ horizontal: true })
    .editHorizontalGrid({ color: "#ddd" })
    .createXAxis({
      line: {},
      ticksAndLabels: {
        values: [946684800000, 1262304000000, 1577836800000],
        ticks: {},
        labels: { fontSize: 10, fontFamily: "sans-serif", offset: 7 }
      },
      title: false
    })
    .editXAxisLine({ color: "dimgrey" })
    .editXAxisTicks({ color: "pink" })
    .editXAxisLabels({ format: "%Y" })
    .createYAxis({
      line: {},
      ticksAndLabels: {
        values: [0, 5, 10, 15, 20],
        labels: { fontSize: 10, fontFamily: "sans-serif", offset: 7 }
      },
      title: false
    })
    .createTitle({
      text: "Aged 18-24",
      titleStyle: { fontSize: 13, fontWeight: 700, fontFamily: "sans-serif", color: "black" },
      offset: -9
    })
    .editTitle({
      alongOffset: -18,
      gap: 1,
      subtitleStyle: { fontStyle: "italic", fontSize: 10, color: "black", fontFamily: "sans-serif" }
    })
    .editTitle({ subtitle: " Source: ONS" });
}