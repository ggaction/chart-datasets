// DOCS: doc-b11b4627b143730d
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({
      width: 284,
      height: 224,
      margin: { left: 72, top: 37, right: 12, bottom: 37 }
    })
    .editCanvas({ background: "#fff0d8" })
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
      x: {
        field: "date",
        fieldType: "temporal",
        temporalUnit: "year"
      },
      y: {
        field: "valueNum",
        fieldType: "quantitative"
      },
      guides: false
    })
    .editXScale({ domain: [157766400000, 1609459200000], nice: false })
    .editYScale({ domain: [0, 2400000], nice: false })
    .encodeStroke({ target: "linePlot", value: "#fe921f" })
    .encodeStrokeWidth({ target: "linePlot", value: 2 })
    .applyTextMetrics({
      profile: {
        schemaVersion: 1,
        id: "source-y-labels",
        measurements: [
          { text: "0", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 5.5625 },
          { text: "500,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 36.15625 },
          { text: "1,000,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 44.5 },
          { text: "1,500,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 44.5 },
          { text: "2,000,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 44.5 }
        ]
      }
    })
    .createGrid({ horizontal: true, vertical: true })
    .editGrid({ horizontal: { color: "#00000017" }, vertical: { color: "#00000017" } })
    .createXAxis({
      line: { color: "#fffff" },
      ticksAndLabels: {
        values: [
          315532800000,
          631152000000,
          946684800000,
          1262304000000,
          1577836800000
        ],
        labels: {
          fontSize: 10,
          fontFamily: "sans-serif",
          offset: 7,
          format: "%Y",
          flush: true
        }
      },
      title: {
        text: "Year",
        fontSize: 11,
        fontWeight: 700,
        fontFamily: "sans-serif",
        offset: 28
      }
    })
    .createYAxis({
      line: {},
      ticksAndLabels: {
        values: [0, 500000, 1000000, 1500000, 2000000],
        labels: {
          fontSize: 10,
          fontFamily: "sans-serif",
          offset: 7,
          format: ","
        }
      },
      title: {
        text: "Debt Billions \u00a3",
        fontSize: 11,
        fontWeight: 700,
        fontFamily: "sans-serif",
        offset: 60
      }
    })
    .createTitle({
      text: "Total Government Gross Debt",
      titleStyle: { fontSize: 13, fontWeight: 700, fontFamily: "sans-serif" },
      subtitleStyle: { fontSize: 10, fontFamily: "sans-serif" }
    })
    .editTitle({ subtitle: "Source: ONS", gap: 1, offset: -12 })
    .editTitle({ alongOffset: -66.5 });
}