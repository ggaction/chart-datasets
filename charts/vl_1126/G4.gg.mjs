// DOCS: doc-b11b4627b143730d, doc-8a4f6f06e0d37d5e, doc-76573a465e2b6a33
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({
      width: 1280,
      height: 357,
      margin: { left: 29, top: 40, right: 7, bottom: 17 }
    })
    .createData({ values: data })
    .createComputedData({
      id: "valueNum",
      as: "Value_num",
      expression: {
        op: "if",
        condition: { op: "eq", left: { field: "Value" }, right: { constant: "" } },
        then: { constant: null },
        else: { op: "toNumber", operand: { field: "Value" } }
      }
    })
    .filterData({
      id: "validSourceDate",
      field: "Date",
      noneOf: [""]
    })
    .createLinePlot({
      x: { field: "Date", fieldType: "temporal" },
      y: { field: "Value_num", fieldType: "quantitative" },
      guides: false
    })
    .editXScale({ domain: [31536000000, 1593561600000] })
    .editYScale({ domain: [0, 110] })
    .encodeStroke({ value: "blueviolet" })
    .encodeStrokeWidth({ value: 2 })
    .editLineMark({ curve: "monotone" })
    .createXAxis({
      line: {},
      ticksAndLabels: {
        ticks: { length: 0 },
        values: [63072000000, 126230400000, 189302400000, 252460800000, 315532800000, 378691200000, 441763200000, 504921600000, 567993600000, 631152000000, 694224000000, 757382400000, 820454400000, 883612800000, 946684800000, 1009843200000, 1072915200000, 1136073600000, 1199145600000, 1262304000000, 1325376000000, 1388534400000, 1451606400000, 1514764800000, 1577836800000],
        labels: { fontSize: 10, fontFamily: "sans-serif", color: "black", format: "%Y", offset: 2 }
      },
      title: false
    })
    .createYAxis({
      line: {},
      ticksAndLabels: {
        ticks: { length: 5 },
        labels: { fontSize: 10, fontFamily: "sans-serif", color: "black", offset: 7 }
      },
      title: false
    })
    .createTitle({
      text: "UK productivity, 1971-2021",
      titleStyle: { fontSize: 13, fontWeight: 700, color: "black", fontFamily: "sans-serif" },
      subtitleStyle: { fontSize: 10, fontStyle: "italic", color: "black", fontFamily: "sans-serif" }
    })
    .editTitle({
      subtitle: "Labour productivity. Output per hour worked, 2018==100. Source: ONS",
      offset: -13,
      gap: 1
    })
    .editTitle({
      alongOffset: -23.7
    });
}
