import { chart } from "ggaction";
import data from "./data.json";

// DOCS: doc-ef5a28c0c3f3c920, doc-b30469a9489ccd34, doc-0a1e48878a814143
export function buildChart() {
  return chart()
    .createCanvas({ width: 352, height: 382, margin: { left: 47, top: 52, right: 5, bottom: 30 } })
    .createData({ values: data })
    .filterData({ id: "yearFilter", field: "Year", predicate: { op: "neq", value: "" } })
    .createComputedData({
      id: "yearDate",
      as: "YearDate",
      expression: { op: "parseTime", operand: { field: "Year" }, format: "auto" }
    })
    .createComputedData({
      id: "pct",
      as: "percentage",
      expression: {
        op: "if",
        condition: { op: "eq", left: { field: "GDP1" }, right: { constant: "" } },
        then: { constant: 0 },
        else: {
          op: "multiply",
          left: { op: "toNumber", operand: { field: "GDP1" } },
          right: { constant: 100 }
        }
      }
    })
    .createBarPlot({
      x: { field: "YearDate", fieldType: "temporal" },
      y: { field: "percentage", fieldType: "quantitative" },
      guides: false
    })
    .editXScale({ domain: [421086786206, 1661671613793], range: [47, 347] })
    .editYScale({ domain: [0, 0.35], zero: true })
    .encodeBarWidth({ pixels: 5 })
    .editBarMark({ fill: "rgb(0,47,167" })
    .createXAxis({
      line: {},
      ticksAndLabels: {
        values: [473385600000, 631152000000, 788918400000, 946684800000, 1104537600000, 1262304000000, 1420070400000, 1577836800000],
        ticks: { length: 0 },
        labels: { fontSize: 10, offset: 5, rotation: { value: 45, unit: "degrees" } }
      },
      title: false
    })
    .editXAxisLabels({ format: "%Y" })
    .createYAxis({
      line: {},
      ticksAndLabels: {
        count: 8,
        ticks: { length: 5 },
        labels: { fontSize: 10, offset: 7 }
      },
      title: { text: "Credit oustanding as a percentage of world GDP", fontSize: 11, fontWeight: 700, offset: 40 }
    })
    .editYAxisLabels({ format: { decimals: 2 } })
    .createTitle({
      text: "IMF Leading Outstanding",
      titleStyle: { fontSize: 13, fontWeight: 700, color: "black" },
      subtitleStyle: { fontSize: 10, fontStyle: "italic", color: "black" }
    })
    .editTitle({
      subtitle: "Credit outstanding to all members as a percentage of world GDP\nSource: IMF and World Bank",
      offset: -13,
      alongOffset: -41.5
    });
}
