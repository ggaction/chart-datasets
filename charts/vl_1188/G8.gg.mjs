// DOCS: doc-b11b4627b143730d (createLinePlot); doc-8a4f6f06e0d37d5e (line chart authoring)
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({
      width: 370,
      height: 242,
      margin: { left: 44, top: 40, right: 126, bottom: 22 }
    })
    .createData({ id: "employment", values: data })
    .createComputedData({
      id: "employmentValueNum",
      as: "valueNum",
      expression: { op: "if",
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
    .editXScale({ domain: [852076800000, 1609459200000], nice: false })
    .editYScale({ domain: [0, 100], zero: true, nice: false })
    .encodeStroke({ value: "darkblue" })
    .encodeStrokeWidth({ value: 2 })
    .createXAxis({
      line: {},
      ticksAndLabels: {
        values: [
          946684800000,
          1104537600000,
          1262304000000,
          1420070400000,
          1577836800000
        ],
        ticks: {},
        labels: { fontSize: 10, offset: 7, flush: true }
      },
      title: false
    })
    .editXAxis({
      line: { color: "#888" },
      ticksAndLabels: {
        ticks: { color: "#888" },
        labels: { color: "black", format: "%Y" }
      }
    })
    .createYAxis({
      line: {},
      ticksAndLabels: {
        values: [0, 20, 40, 60, 80, 100],
        ticks: {},
        labels: { fontSize: 10, offset: 7 }
      },
      title: {
        text: "Economically Inactive (%)",
        fontSize: 11,
        offset: 28
      }
    })
    .editYAxis({
      line: { color: "#888" },
      ticksAndLabels: {
        ticks: { color: "#888" },
        labels: { color: "black" }
      },
      title: { fontWeight: 700 }
    })
    .createGrid({ horizontal: true, vertical: true })
    .editHorizontalGrid({ color: "#ddd", lineWidth: 1 })
    .editVerticalGrid({ color: "#ddd", lineWidth: 1 })
    .createTitle({
      text: "Australia & New Zealand employment rate NSA nationality",
      titleStyle: { fontSize: 13 },
      alongOffset: -39
    })
    .editTitle({ subtitleStyle: { fontSize: 10, fontStyle: "italic", color: "black" }, gap: 3, offset: -13 })
    .editTitle({ subtitle: "Source ONS", titleStyle: { fontWeight: 700, color: "black" } });
}