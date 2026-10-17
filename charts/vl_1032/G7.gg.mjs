// DOCS: doc-b11b4627b143730d, doc-071c93dff3a5ea2e
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({ width: 183, height: 207, margin: { left: 24, top: 35, right: 9, bottom: 22 } })
    .createData({ values: data })
    .createComputedData({ id: "srsValue", as: "valueNum", expression: { op: "if", condition: { op: "eq", left: { field: "value" }, right: { constant: "" } }, then: { constant: 0 }, else: { op: "toNumber", operand: { field: "value" } } } })
    .createLinePlot({
      x: { field: "date", fieldType: "temporal", temporalUnit: "year" },
      y: { field: "valueNum" },
      guides: false
    })
    .editXScale({ domain: [883612800000, 1577836800000], nice: false })
    .editYScale({ domain: [0, 24] })
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
      line: {},
      ticksAndLabels: {
        values: [946684800000, 1104537600000, 1262304000000, 1420070400000, 1577836800000],
        ticks: { length: 5 },
        labels: { fontSize: 10, fontFamily: "sans-serif", offset: 7, flush: true }
      },
      title: false
    })
    .editXAxis({ line: { color: "#888" }, ticksAndLabels: { ticks: { color: "#888" } } })
    .createYAxis({
      line: {},
      ticksAndLabels: {
        values: [0, 5, 10, 15, 20],
        ticks: { length: 5 },
        labels: { fontSize: 10, fontFamily: "sans-serif", offset: 7 }
      },
      title: false
    })
    .editYAxis({ line: { color: "#888" }, ticksAndLabels: { ticks: { color: "#888" } } })
    .createGrid({
      horizontal: { values: [0, 5, 10, 15, 20] },
      vertical: { values: [946684800000, 1104537600000, 1262304000000, 1420070400000, 1577836800000] }
    })
    .editHorizontalGrid({ color: "#ddd" })
    .editVerticalGrid({ color: "#ddd" })
    .createTitle({ text: "Bank Manufacturing Shares", titleStyle: { fontSize: 13, fontFamily: "sans-serif" }, alongOffset: -18.12 })
    .editTitle({ offset: -9, gap: 3, titleStyle: { fontWeight: 700 } })
    .editTitle({ subtitle: "Source: ONS", subtitleStyle: { fontSize: 10, fontFamily: "sans-serif", fontStyle: "italic" } });
}
