import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({ width: 346, height: 362, margin: { left: 39, top: 35, right: 7, bottom: 37 } })
    .createData({ values: data })
    .createComputedData({
      id: "dateMs",
      as: "dateNum",
      expression: { op: "parseTime", format: "auto", operand: { field: "date" } }
    })
    .createComputedData({ id: "valueNumData", as: "valueNum", expression: { op: "toNumber", operand: { field: "value" } } })
    // DOCS: doc-b11b4627b143730d
    .createLinePlot({
      x: { field: "dateNum", fieldType: "temporal", temporalUnit: "timestamp" },
      y: { field: "valueNum", fieldType: "quantitative" },
      guides: false
    })
    .editXScale({ domain: [599616000000, 1667260800000], nice: false })
    .editYScale({ domain: [0, 13], nice: false })
    .encodeStroke({ value: "#002199" })
    .encodeStrokeWidth({ value: 2 })
    // DOCS: doc-c23596878853c401
    .createXAxis({
      line: {},
      ticksAndLabels: {
        values: [631152000000, 788918400000, 946684800000, 1104537600000, 1262304000000, 1420070400000, 1577836800000],
        ticks: { length: 5 },
        labels: { fontSize: 10, fontFamily: "sans-serif", offset: 7 }
      },
      title: { text: "Date", fontSize: 11, fontFamily: "sans-serif", offset: 30 }
    })
    .createYAxis({
      line: {},
      ticksAndLabels: {
        values: [0, 2, 4, 6, 8, 10, 12],
        ticks: { length: 5 },
        labels: { fontSize: 10, fontFamily: "sans-serif", offset: 7 }
      },
      title: { text: "Inflation", fontSize: 11, fontFamily: "sans-serif", offset: 28 }
    })
    .editXAxis({ ticksAndLabels: { labels: { format: "%Y" } }, title: { fontWeight: 700 } })
    .editYAxis({ title: { fontWeight: 700 } })
    .createTitle({
      text: "CPI ANNUAL RATE: Services 2015=100",
      titleStyle: { fontSize: 13, fontFamily: "sans-serif" },
      subtitleStyle: { fontSize: 10, fontStyle: "italic", fontFamily: "sans-serif" }
    })
    .editTitle({ offset: -9, alongOffset: -33, gap: 1 })
    .editTitle({ subtitle: "(£million, Source: ONS)", titleStyle: { fontWeight: 700, color: "black" }, subtitleStyle: { color: "black" } });
}
