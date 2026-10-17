// DOCS: doc-b11b4627b143730d, doc-a929fd81abd909f8, doc-76573a465e2b6a33
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({ width: 211, height: 212, margin: { left: 24, top: 40, right: 37, bottom: 22 } })
    .createData({ values: data })
    .createComputedData({
      id: "srsValueNum",
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
      y: { field: "valueNum" },
      guides: false
    })
    .editXScale({ domain: [883612800000, 1577836800000], nice: false })
    .editYScale({ domain: [0, 40] })
    .encodeStroke({ target: "linePlot", value: "#7aa1b8" })
    .encodeStrokeWidth({ target: "linePlot", value: 2 })
    .encodeOpacity({ target: "linePlot", value: 1 })
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
        ticks: { length: 5, color: "#888" },
        labels: { fontSize: 10, fontFamily: "sans-serif", offset: 7, flush: true, format: "%Y" }
      },
      title: false
    })
    .createYAxis({
      line: { color: "#888" },
      ticksAndLabels: {
        values: [0, 10, 20, 30, 40],
        ticks: { length: 5, color: "#888" },
        labels: { fontSize: 10, fontFamily: "sans-serif", offset: 7 }
      },
      title: false
    })
    .createGrid({
      horizontal: { values: [0, 10, 20, 30, 40], color: "#ddd" },
      vertical: { values: [946684800000, 1104537600000, 1262304000000, 1420070400000, 1577836800000], color: "#ddd" }
    })
    .createTitle({
      text: "Bank Non-Manufacturing shares",
      titleStyle: { fontSize: 13, fontWeight: 700, color: "black" },
      subtitleStyle: { fontSize: 10, fontStyle: "italic", fontWeight: 400, color: "black" }
    })
    .editTitle({ offset: -13, alongOffset: -18.123, gap: 1 })
    .editTitle({
      subtitle: "Source: ONS",
      subtitleStyle: { fontSize: 10, fontStyle: "italic", fontWeight: 400, color: "black" }
    });
}