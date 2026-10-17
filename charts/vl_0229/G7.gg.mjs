// DOCS: doc-b11b4627b143730d, doc-7f9a19c76a29a115, doc-c2eafbbd16fe3c71
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({
      width: 281,
      height: 312,
      margin: { left: 24, top: 40, right: 7, bottom: 22 }
    })
    .createData({ values: data })
    .createComputedData({
      id: "lmsNum",
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
      guides: false,
    })
    .editXScale({ domain: [702086400000, 1656633600000] })
    .editYScale({ domain: [0, 35] })
    .encodeStroke({ value: "turquoise" })
    .encodeStrokeWidth({ value: 2 })
    .encodeOpacity({ value: 1 })
    .createTitle({
      text: "Unemployment in ages 16-24 (%)",
      titleStyle: { fontSize: 13 },
      alongOffset: -18.123046875
    })
    .editTitle({ titleStyle: { fontWeight: 700 }, offset: -13, gap: 1 })
    .editTitle({
      subtitle: "data: ONS",
      subtitleStyle: { fontSize: 10, fontStyle: "italic" }
    })
    .createXAxis({
      line: {},
      ticksAndLabels: {
        values: [
          788918400000,
          946684800000,
          1104537600000,
          1262304000000,
          1420070400000,
          1577836800000
        ],
        labels: { fontSize: 10, offset: 7, format: "%Y", flush: true }
      },
      title: false
    })
    .createYAxis({
      line: {},
      ticksAndLabels: {
        values: [0, 5, 10, 15, 20, 25, 30, 35],
        labels: { fontSize: 10, offset: 7 }
      },
      title: false
    })
    .createGrid({
      horizontal: {
        values: [0, 5, 10, 15, 20, 25, 30, 35]
      },
      vertical: {
        values: [
          788918400000,
          946684800000,
          1104537600000,
          1262304000000,
          1420070400000,
          1577836800000
        ]
      }
    })
    .editHorizontalGrid({ color: "#ddd", lineWidth: 1 })
    .editVerticalGrid({ color: "#ddd", lineWidth: 1 });
}
