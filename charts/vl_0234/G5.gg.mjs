// DOCS: doc-b11b4627b143730d, doc-8a4f6f06e0d37d5e, doc-c2eafbbd16fe3c71
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({
      width: 300,
      height: 312,
      margin: { left: 43, top: 40, right: 7, bottom: 22 }
    })
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
    .editXScale({ domain: [34214400000, 1656633600000], nice: false })
    .editYScale({ domain: [0, 35000], nice: false })
    .encodeStroke({ value: "darkturquoise" })
    .encodeStrokeWidth({ value: 2 })
    .editLineMark({ opacity: 1 })
    .createXAxis({
      line: {},
      ticksAndLabels: {
        values: [315532800000, 631152000000, 946684800000, 1262304000000, 1577836800000],
        ticks: {},
        labels: { fontSize: 10, fontFamily: "sans-serif", offset: 7, format: "%Y" }
      },
      title: false
    })
    .createYAxis({
      line: {},
      ticksAndLabels: {
        values: [0, 5000, 10000, 15000, 20000, 25000, 30000, 35000],
        ticks: {},
        labels: { fontSize: 10, fontFamily: "sans-serif", offset: 7, format: "," }
      },
      title: false
    })
    .createGrid({ horizontal: true, vertical: true })
    .editHorizontalGrid({ color: "#ddd" })
    .editVerticalGrid({ color: "#ddd" })
    .createTitle({
      text: "Number of people in employment",
      alongOffset: -37.6,
      titleStyle: { fontSize: 13, fontWeight: 700, fontFamily: "sans-serif", color: "black" }
    })
    .editTitle({
      subtitle: "Thousands, Aged 16+, seasonally adjusted, data: ONS",
      subtitleStyle: { fontSize: 10, fontWeight: 400, fontStyle: "italic", fontFamily: "sans-serif", color: "black" },
      gap: 1
    })
    .editTitle({ offset: -4 });
}
