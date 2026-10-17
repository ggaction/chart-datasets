// DOCS: doc-b11b4627b143730d, doc-a929fd81abd909f8, doc-76573a465e2b6a33
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({
      width: 183,
      height: 212,
      margin: { left: 24, top: 40, right: 9, bottom: 22 }
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
    .editYScale({ domain: [0, 12] })
    .editLineMark({ strokeWidth: 2 })
    .encodeStroke({ value: "#314686" })
    .editCanvas({ background: "whitesmoke" })
    .createGrid({ horizontal: { scale: "y" } })
    .editHorizontalGrid({ color: "#ddd" })
    .createXAxis({
      ticksAndLabels: {
        values: [
          315532800000,
          631152000000,
          946684800000,
          1262304000000,
          1577836800000
        ],
        ticks: {},
        labels: {
          fontSize: 10,
          offset: 5.5,
          flush: true,
          labelMap: [
            { value: 631152000000, label: "" },
            { value: 1262304000000, label: "" }
          ]
        }
      },
      title: false
    })
    .editXAxis({ line: { color: "dimgrey" }, ticksAndLabels: { ticks: { color: "pink" }, labels: { color: "black" } } })
    .createYAxis({

      ticksAndLabels: {
        values: [0, 2, 4, 6, 8, 10, 12],
        ticks: {},
        labels: { fontSize: 10, offset: 6.5 }
      },
      title: false
    })
    .editYAxis({ line: { color: "#888888" }, ticksAndLabels: { ticks: { color: "#888888" }, labels: { color: "black" } } })
    .createTitle({
      text: "Women aged 16-64",
      titleStyle: { fontSize: 13 },
      subtitleStyle: { fontSize: 10, fontStyle: "italic" }
    })
    .editTitle({ offset: -4, alongOffset: -18.12, gap: 1 })
    .editTitle({ subtitle: " Source: ONS" })
    .editTitle({ titleStyle: { fontWeight: 700 } });
}
