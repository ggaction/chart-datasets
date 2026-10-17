// DOCS: doc-b11b4627b143730d, doc-c2eafbbd16fe3c71, doc-76573a465e2b6a33
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({ width: 346, height: 367, margin: { left: 39, top: 40, right: 7, bottom: 37 } })
    .createData({ values: data })
    .createComputedData({
      id: "valueNum",
      as: "valueNum",
      expression: { op: "toNumber", operand: { field: "value" } }
    })
    .createLinePlot({
      x: { field: "date", fieldType: "temporal" },
      y: { field: "valueNum", fieldType: "quantitative" },
      guides: false
    })
    .editXScale({ domain: [599616000000, 1667260800000] })
    .editYScale({ domain: [-4, 16] })
    .encodeStroke({ value: "#002199" })
    .encodeStrokeWidth({ value: 2 })
    .createXAxis({
      line: {},
      ticksAndLabels: {
        ticks: { length: 5 },
        labels: { fontSize: 10, fontFamily: "sans-serif", fontWeight: 400, offset: 7, flush: true },
        values: [631152000000, 788918400000, 946684800000, 1104537600000, 1262304000000, 1420070400000, 1577836800000]
      },
      title: { text: "Date", fontSize: 11, fontFamily: "sans-serif", offset: 28 }
    })
    .createYAxis({
      line: {},
      ticksAndLabels: {
        ticks: { length: 5 },
        labels: { fontSize: 10, fontFamily: "sans-serif", fontWeight: 400, offset: 7 },
        values: [-4, -2, 0, 2, 4, 6, 8, 10, 12, 14, 16]
      },
      title: { text: "Inflation", fontSize: 11, fontFamily: "sans-serif", offset: 26 }
    })
    .editXAxisLine({ color: "#888" })
    .editXAxisTicks({ color: "#888" })
    .editXAxisLabels({ color: "black", format: "%Y" })
    .editXAxisTitle({ color: "black", fontWeight: 700 })
    .editYAxisLine({ color: "#888" })
    .editYAxisTicks({ color: "#888" })
    .editYAxisLabels({ color: "black" })
    .editYAxisTitle({ color: "black", fontWeight: 700 })
    .createTitle({
      text: "CPI ANNUAL RATE: Goods 2015=100",
      titleStyle: { fontSize: 13, fontFamily: "sans-serif", fontStyle: "normal" },
      subtitleStyle: { fontSize: 10, fontFamily: "sans-serif", fontStyle: "italic" }
    })
    .editTitle({ offset: -13, gap: 1, alongOffset: -33.4 })
    .editTitle({ subtitle: "(£million, Source: ONS)", titleStyle: { color: "black", fontWeight: 700 }, subtitleStyle: { color: "black", fontWeight: 400 } });
}