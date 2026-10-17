// DOCS: doc-8677e2a82d3e344b (docs/advanced/axis-components.md — labels/axis typography), doc-e59305e450ad74de
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({ width: 352, height: 385, margin: { left: 47, top: 40, right: 5, bottom: 45 } })
    .createData({ values: data })
    .createComputedData({
      id: "pctNum",
      as: "Pct",
      expression: {
        op: "if",
        condition: { op: "eq", left: { field: "Percentage" }, right: { constant: "" } },
        then: { constant: 0 },
        else: { op: "toNumber", operand: { field: "Percentage" } }
      }
    })
    .createBarPlot({
      x: {
        field: "Year",
        fieldType: "temporal",
        temporalUnit: "year"
      },
      y: { field: "Pct", fieldType: "quantitative" },
      guides: false
    })
    .editXScale({ domain: [421086786206, 1661671613793], nice: false })
    .editYScale({ domain: [0, 0.2] })
    .editBarMark({ fill: "darkslateblue" })
    .encodeBarWidth({ pixels: 5 })
    .createXAxis({
      line: {},
      ticksAndLabels: {
        values: [473385600000, 631152000000, 788918400000, 946684800000, 1104537600000, 1262304000000, 1420070400000, 1577836800000],
        ticks: { length: 0 },
        labels: { fontSize: 10, offset: 7, rotation: { value: 45, unit: "degrees" } }
      },
      title: { text: "Year", fontSize: 11, offset: 38 }
    })
    .createYAxis({
      line: {},
      ticksAndLabels: {
        values: [0, 0.02, 0.04, 0.06, 0.08, 0.1, 0.12, 0.14, 0.16, 0.18, 0.2],
        ticks: { length: 5 },
        labels: { fontSize: 10, offset: 7 }
      },
      title: { text: "Total as % of GDP)", fontSize: 11, offset: 34 }
    })
    .editXAxisLabels({ format: "%Y", fontFamily: "sans-serif" })
    .editXAxis({
      title: { fontWeight: 700, fontFamily: "sans-serif" }
    })
    .editYAxisLabels({ format: ".2f", fontFamily: "sans-serif" })
    .editYAxis({
      title: { fontWeight: 700, fontFamily: "sans-serif" }
    })
    .createTitle({
      text: "IMF Lending as Percentage of World GDP",
      titleStyle: { fontSize: 13, fontFamily: "sans-serif" },
      offset: -13
    })
    .editTitle({ titleStyle: { fontWeight: 700, color: "black" } })
    .editTitle({
      alongOffset: -41.46,
      subtitleStyle: { fontSize: 10, fontStyle: "italic", fontFamily: "sans-serif", color: "black" },
      gap: 1
    })
    .editTitle({ subtitle: "Credit oustanding for all members, 1984-2021. Source: IMF, World Bank" });
}