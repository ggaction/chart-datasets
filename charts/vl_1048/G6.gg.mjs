// DOCS: doc-b11b4627b143730d, doc-071c93dff3a5ea2e, doc-074cfcd2d7c62d4a
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({
      width: 181,
      height: 207,
      margin: { left: 24, top: 35, right: 7, bottom: 22 }
    })
    .createData({ values: data })
    .createComputedData({
      id: "srsValueNum",
      as: "valueNum",
      expression: {
        op: "if",
        condition: {
          op: "eq",
          left: { field: "value" },
          right: { constant: "" }
        },
        then: { constant: 0 },
        else: { op: "toNumber", operand: { field: "value" } }
      }
    })
    .createLinePlot({
      x: {
        field: "date",
        fieldType: "temporal",
        temporalUnit: "year"
      },
      y: {
        field: "valueNum"
      },
      guides: false
    })
    .editXScale({ domain: [883612800000, 1577836800000], nice: false })
    .editYScale({ domain: [0, 70], nice: false })
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
    .createXAxis({
      line: { color: "#888" },
      ticksAndLabels: {
        values: [946684800000, 1104537600000, 1262304000000, 1420070400000, 1577836800000],
        labels: { fontSize: 10, fontFamily: "sans-serif", offset: 7, format: "%Y", flush: true }
      },
      title: false
    })
    .createYAxis({
      line: { color: "#888" },
      ticksAndLabels: {
        values: [0, 20, 40, 60],
        labels: { fontSize: 10, fontFamily: "sans-serif", offset: 7 }
      },
      title: false
    })
    .createGrid({ horizontal: true, vertical: true })
    .editGrid({ horizontal: { color: "#ddd" }, vertical: { color: "#ddd" } })
    .createTitle({
      text: "Finco shares",
      titleStyle: { fontSize: 13, fontWeight: 700, color: "black" },
      subtitleStyle: { fontSize: 10, fontStyle: "italic", color: "black" }
    })
    .editTitle({ offset: -13, alongOffset: -18.123047, gap: 1 })
    .editTitle({ subtitle: "Source: ONS" });
}