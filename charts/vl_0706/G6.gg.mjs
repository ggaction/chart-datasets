// DOCS: doc-071c93dff3a5ea2e, doc-b11b4627b143730d, doc-9bb354f4e2d46693
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({
      width: 339,
      height: 357,
      margin: { left: 29, top: 40, right: 10, bottom: 17 }
    })
    .createData({ id: "productivity", values: data })
    .filterData({
      id: "validDates",
      field: "Date",
      predicate: { op: "neq", value: "" }
    })
    .createComputedData({
      id: "productivityNum",
      as: "ValueNum",
      expression: { op: "toNumber", operand: { field: "Value" } }
    })
    .createLinePlot({
      x: { field: "Date", fieldType: "temporal" },
      y: { field: "ValueNum", fieldType: "quantitative" },
      guides: false
    })
    .editXScale({ domain: [31536000000, 1593561600000], nice: false })
    .editYScale({ domain: [0, 110] })
    .encodeStroke({ value: "blueviolet" })
    .encodeStrokeWidth({ value: 2 })
    .editLineMark({ curve: "monotone" })
    .createXAxis({
      line: {},
      ticksAndLabels: {
        ticks: { length: 0 },
        values: [
          157766400000,
          315532800000,
          473385600000,
          631152000000,
          788918400000,
          946684800000,
          1104537600000,
          1262304000000,
          1420070400000,
          1577836800000
        ],
        labels: { fontSize: 10, offset: 2 }
      },
      title: false
    })
    .createYAxis({
      line: {},
      ticksAndLabels: {
        ticks: {},
        values: [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110],
        labels: { fontSize: 10, offset: 7 }
      },
      title: false
    })
    .editXAxisLabels({ format: "%Y" })
    .createTitle({
      text: "UK productivity, 1971-2021",
      alongOffset: -23.7,
      titleStyle: { fontSize: 13 }
    })
    .editTitle({ offset: -13, titleStyle: { color: "black", fontWeight: 700 } })
    .editTitle({
      subtitle:
        "Labour productivity. Output per hour worked, 2018==100. Source: ONS",
      subtitleStyle: { fontSize: 10, fontStyle: "italic", color: "black" },
      gap: 3
    });
}