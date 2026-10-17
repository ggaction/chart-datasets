// DOCS: doc-b11b4627b143730d, doc-76573a465e2b6a33, doc-071c93dff3a5ea2e
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({
      width: 209,
      height: 212,
      margin: { left: 26, top: 40, right: 33, bottom: 22 }
    })
    .createData({ values: data })
    .createComputedData({
      id: "srsValue",
      as: "v",
      expression: { op: "if", condition: { op: "eq", left: { field: "value" }, right: { constant: "" } }, then: { constant: 0 }, else: { op: "toNumber", operand: { field: "value" } } }
    })
    .createLinePlot({
      x: { field: "date", fieldType: "temporal", temporalUnit: "year" },
      y: { field: "v", fieldType: "quantitative" },
      guides: false
    })
    .editXScale({ domain: [883612800000, 1577836800000], nice: false })
    .editYScale({ domain: [0, 0.4], nice: false })
    .encodeStroke({ value: "#7aa1b8" })
    .encodeStrokeWidth({ value: 2 })
    .encodeOpacity({ value: 1 })
    .createXAxis({
      line: {},
      ticksAndLabels: {
        values: [946684800000, 1104537600000, 1262304000000, 1420070400000, 1577836800000],
        ticks: { length: 5 },
        labels: { fontSize: 10, fontFamily: "sans-serif", offset: 7 }
      },
      title: false
    })
    .editXAxis({
      line: { color: "#888" },
      ticksAndLabels: { ticks: { color: "#888" }, labels: { color: "black", format: "%Y" } }
    })
    .createYAxis({
      line: {},
      ticksAndLabels: {
        count: 5,
        ticks: { length: 5 },
        labels: { fontSize: 10, fontFamily: "sans-serif", offset: 7 }
      },
      title: false
    })
    .editYAxis({
      line: { color: "#888" },
      ticksAndLabels: { ticks: { color: "#888" }, labels: { color: "black", format: ".1f" } }
    })
    .createGrid({
      horizontal: true,
      vertical: true
    })
    .editHorizontalGrid({ color: "#ddd", lineWidth: 1 })
    .editVerticalGrid({ color: "#ddd", lineWidth: 1 })
    .createTitle({
      text: "Investment Trusts Public Sector",
      titleStyle: { fontSize: 13, fontFamily: "sans-serif", fontWeight: 700, color: "black" },
      alongOffset: -20.9
    })
    .editTitle({
      offset: -4,
      gap: 3
    })
    .editTitle({
      subtitle: "Source: ONS",
      subtitleStyle: { fontSize: 10, fontFamily: "sans-serif", fontWeight: 400, fontStyle: "italic", color: "black" }
    });
}