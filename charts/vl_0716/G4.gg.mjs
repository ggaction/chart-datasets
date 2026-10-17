// DOCS: doc-0a1e48878a814143, doc-74fc341a49e892f8, doc-b30469a9489ccd34
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({ width: 334, height: 370, margin: { left: 29, top: 40, right: 5, bottom: 30 } })
    .createData({ id: "source", values: data })
    .filterData({
      id: "valid",
      field: "Year",
      noneOf: ["", null]
    })
    .createComputedData({
      id: "billions",
      as: "billions",
      expression: {
        op: "if",
        condition: {
          op: "or",
          operands: [
            { op: "isNull", operand: { field: "Totals" } },
            { op: "eq", left: { field: "Totals" }, right: { constant: "" } }
          ]
        },
        then: { constant: 0 },
        else: {
          op: "divide",
          left: { op: "toNumber", operand: { field: "Totals" } },
          right: { constant: 1000000000 }
        }
      }
    })
    .createBarPlot({
      x: { field: "Year", fieldType: "temporal", temporalUnit: "year" },
      y: { field: "billions" },
      guides: false
    })
    .encodeBarWidth({ pixels: 5 })
    .editBarMark({ fill: "#6b788c" })
    .editXScale({ domain: [421086786206, 1661671613793], range: [29, 329], nice: false })
    .editYScale({ domain: [0, 110] })
    .createTitle({
      text: "IMF Lending Outstanding",
      titleStyle: { fontSize: 13 },
      offset: -13
    })
    .editTitle({
      subtitle: "Credit outstanding to all members, SDRs (billions). Source: IMF",
      subtitleStyle: { fontSize: 10, fontStyle: "italic", color: "black", fontFamily: "sans-serif" },
      gap: 3
    })
    .editTitle({
      alongOffset: -23.6845703125,
      titleStyle: { color: "black", fontWeight: 700, fontFamily: "sans-serif" }
    })
    .createXAxis({
      line: {},
      ticksAndLabels: {
        values: [
          473385600000, 631152000000, 788918400000, 946684800000,
          1104537600000, 1262304000000, 1420070400000, 1577836800000
        ],
        ticks: { length: 0 },
        labels: { fontSize: 10, offset: 5, rotation: { value: 45, unit: "degrees" } }
      },
      title: false
    })
    .createYAxis({
      line: {},
      ticksAndLabels: {
        count: 8,
        ticks: {},
        labels: { fontSize: 10, offset: 7 }
      },
      title: false
    })
    .editYAxisLine({ color: "#888" })
    .editYAxisTicks({ color: "#888" });
}