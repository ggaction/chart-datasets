import { chart } from "ggaction";
import data from "./data.json";

// DOCS: doc-f30bfed200b50a98, doc-de8d0ae0cb55c5f3, doc-fb3b01cca895bdad

export function buildChart() {
  return chart()
    .createCanvas({
      width: 351,
      height: 367,
      margin: { left: 44, top: 40, right: 7, bottom: 37 }
    })
    .createData({ values: data })
    .createComputedData({
      id: "valueNum",
      as: "value_num",
      expression: { op: "toNumber", operand: { field: "value" } }
    })
    .createLinePlot({
      x: { field: "date", fieldType: "temporal" },
      y: { field: "value_num", fieldType: "quantitative" },
      guides: false
    })
    .editXScale({ domain: [599616000000, 1667260800000] })
    .editYScale({ domain: [-10, 12] })
    .encodeStroke({ value: "#002199" })
    .encodeStrokeWidth({ value: 2 })
    .createTitle({
      text: "CPI ANNUAL RATE 08 : COMMUNICATION 2015=100",
      titleStyle: { fontSize: 13 },
      alongOffset: -39
    })
    .editTitle({ offset: -13, gap: 1, subtitleStyle: { fontSize: 10, fontStyle: "italic", color: "black" } })
    .editTitle({ subtitle: "(£million, Source: ONS)", titleStyle: { fontWeight: 700, color: "black" } })
    .createXAxis({
      line: {},
      ticksAndLabels: {
        values: [
          631152000000, 788918400000, 946684800000, 1104537600000,
          1262304000000, 1420070400000, 1577836800000
        ],
        ticks: {},
        labels: { fontSize: 10, offset: 7, fontFamily: "sans-serif" }
      },
      title: { text: "Date", fontSize: 11, offset: 30, fontFamily: "sans-serif" }
    })
    .createYAxis({
      line: {},
      ticksAndLabels: {
        values: [-10, -8, -6, -4, -2, 0, 2, 4, 6, 8, 10, 12],
        ticks: {},
        labels: { fontSize: 10, offset: 7, fontFamily: "sans-serif" }
      },
      title: {
        text: "Inflation",
        fontSize: 11,
        offset: 26,
        rotation: { value: -90, unit: "degrees" },
        fontFamily: "sans-serif"
      }
    })
    .editXAxisLabels({ format: "%Y" })
    .editXAxisTitle({ fontWeight: "bold" })
    .editYAxisTitle({ fontWeight: "bold" });
}