// DOCS: doc-071c93dff3a5ea2e, doc-8a4f6f06e0d37d5e, doc-2bd5de4bd99e314a
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({
      width: 395,
      height: 360,
      margin: { left: 43, top: 40, right: 7, bottom: 20 }
    })
    .createData({ values: data })
    .createComputedData({
      id: "tsCalc",
      as: "ts",
      expression: { op: "parseTime", operand: { field: "Date" }, format: "%Y-%m-%d" }
    })
    .createComputedData({
      id: "valueNum",
      as: "ValueN",
      expression: { op: "toNumber", operand: { field: "Value" } }
    })
    .createLinePlot({
      x: {
        field: "ts",
        fieldType: "temporal"
      },
      y: {
        field: "ValueN",
        fieldType: "quantitative"
      },
      guides: false
    })
    .editXScale({ domain: [859852800000, 1609459200000], nice: false })
    .editYScale({ domain: [0, 90000], zero: true })
    .editLineMark({ stroke: "mediumvioletred", strokeWidth: 2, curve: "monotone" })
    .createXAxis({
      line: {},
      ticksAndLabels: {
        ticks: { length: 0 },
        values: [
          883612800000, 946684800000, 1009843200000, 1073001600000,
          1136073600000, 1199145600000, 1262304000000, 1325376000000,
          1388534400000, 1451606400000, 1514764800000, 1577836800000
        ],
        labels: { fontSize: 10, offset: 7, flush: true }
      },
      title: false
    })
    .editXAxisLabels({ fontFamily: "sans-serif", color: "black" })
    .createYAxis({
      line: {},
      ticksAndLabels: {
        ticks: { length: 5 },
        labels: {
          fontSize: 10,
          offset: 7
        }
      },
      title: false
    })
    .editYAxisLabels({ format: ",", fontFamily: "sans-serif", color: "black" })
    .createTitle({
      text: "Tax revenue",
      titleStyle: { fontSize: 13, fontWeight: 700, color: "black", fontFamily: "sans-serif" },
      subtitleStyle: { fontSize: 10, fontStyle: "italic", color: "black", fontFamily: "sans-serif" }
    })
    .editTitle({ offset: -13, gap: 3 })
    .editTitle({ subtitle: "\u00A3 million. Source: ONS", alongOffset: -37.6 });
}
