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
      line: { color: "#888" },
      ticksAndLabels: {
        ticks: { length: 5, color: "#888" },
        labels: { fontSize: 10, fontFamily: "sans-serif", fontWeight: 400, color: "black", offset: 7, format: "%Y", flush: true },
        values: [631152000000, 788918400000, 946684800000, 1104537600000, 1262304000000, 1420070400000, 1577836800000]
      },
      title: { text: "Date", fontSize: 11, fontWeight: 700, fontFamily: "sans-serif", color: "black", offset: 28 }
    })
    .createYAxis({
      line: { color: "#888" },
      ticksAndLabels: {
        ticks: { length: 5, color: "#888" },
        labels: { fontSize: 10, fontFamily: "sans-serif", fontWeight: 400, color: "black", offset: 7 },
        values: [-4, -2, 0, 2, 4, 6, 8, 10, 12, 14, 16]
      },
      title: { text: "Inflation", fontSize: 11, fontWeight: 700, fontFamily: "sans-serif", color: "black", offset: 26 }
    })
    .createTitle({
      text: "CPI ANNUAL RATE: Goods 2015=100",
      titleStyle: { fontSize: 13, fontWeight: 700, fontFamily: "sans-serif", fontStyle: "normal", color: "black" },
      subtitleStyle: { fontSize: 10, fontWeight: 400, fontFamily: "sans-serif", fontStyle: "italic", color: "black" }
    })
    .editTitle({ offset: -13, gap: 1, alongOffset: -33.4 })
    .editTitle({ subtitle: "(£million, Source: ONS)" });
}