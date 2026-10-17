// DOCS: doc-b11b4627b143730d, doc-8a4f6f06e0d37d5e, doc-071c93dff3a5ea2e
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({ width: 186, height: 208, margin: { left: 29, top: 36, right: 7, bottom: 22 } })
    .createData({ values: data })
    .createComputedData({
      id: "valueNum",
      as: "valueNum",
      expression: {
        op: "if",
        condition: { op: "eq", left: { field: "value" }, right: { constant: "" } },
        then: { constant: 0 },
        else: { op: "toNumber", operand: { field: "value" } }
      }
    })
    .createLinePlot({
      x: { field: "date", fieldType: "temporal", temporalUnit: "year" },
      y: { field: "valueNum", fieldType: "quantitative" },
      guides: false
    })
    .editXScale({ domain: [883612800000, 1577836800000], nice: false })
    .editYScale({ domain: [0, 280] })
    .encodeStroke({ value: "#7aa1b8" })
    .encodeStrokeWidth({ value: 2 })
    .encodeOpacity({ value: 1 })
    .applyTextMetrics({
      profile: {
        schemaVersion: 1,
        id: "source-year-labels",
        measurements: [
          { text: "2000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 22.25 },
          { text: "2005", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 22.25 },
          { text: "2010", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 22.25 },
          { text: "2015", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 22.25 },
          { text: "2020", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 22.25 }
        ]
      }
    })
    .createAxes({
      x: {
        line: { color: "#888" },
        ticksAndLabels: {
          values: [946684800000, 1104537600000, 1262304000000, 1420070400000, 1577836800000],
          ticks: { length: 5 },
          labels: { fontSize: 10, fontFamily: "sans-serif", offset: 7, format: "%Y", flush: true }
        },
        title: false
      },
      y: {
        line: { color: "#888" },
        ticksAndLabels: {
          values: [0, 50, 100, 150, 200, 250],
          ticks: { length: 5 },
          labels: { fontSize: 10, fontFamily: "sans-serif", offset: 7 }
        },
        title: false
      }
    })
    .createGrid({
      horizontal: { color: "#ddd", lineWidth: 1 },
      vertical: { color: "#ddd", lineWidth: 1 }
    })
    .createTitle({
      text: "FTSE 100 Pension Funds",
      titleStyle: { fontSize: 13, fontFamily: "sans-serif", fontWeight: 700, color: "black" },
      subtitleStyle: { fontSize: 10, fontFamily: "sans-serif", fontStyle: "italic", color: "black" }
    })
    .editTitle({ offset: -13, alongOffset: -23.7 })
    .editTitle({ gap: 1 })
    .editTitle({ subtitle: "Source: ONS" });
}
