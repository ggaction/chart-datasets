// DOCS: doc-fc11e9fb291905d1
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({ width: 452, height: 385, margin: { left: 47, top: 40, right: 5, bottom: 45 } })
    .createData({ values: data })
    .filterData({ id: "validYear", field: "Year", noneOf: [""] })
    .createComputedData({
      id: "pct_num",
      as: "Totals_pct",
      expression: {
        op: "if",
        condition: { op: "eq", left: { field: "Totals%" }, right: { constant: "" } },
        then: { constant: 0 },
        else: { op: "toNumber", operand: { field: "Totals%" } }
      }
    })
    .createBarPlot({
      x: {
        field: "Year",
        fieldType: "temporal",
        temporalUnit: "year"
      },
      y: {
        field: "Totals_pct",
        fieldType: "quantitative"
      },
      guides: false
    })
    .editXScale({ domain: [426388430769, 1656369969230], nice: false })
    .editYScale({ domain: [0, 0.35], zero: true })
    .encodeBarWidth({ pixels: 5 })
    .editBarMark({ fill: "#f4c2c2" })
    .createTitle({
      text: "IMF Lending Outstanding compared to World GDP",
      titleStyle: { fontSize: 13 },
      subtitleStyle: { fontSize: 10, fontStyle: "italic" }
    })
    .editTitle({ gap: 1, offset: -13, alongOffset: -41.463 })
    .editTitle({ subtitle: "Source: IMF and World Bank", titleStyle: { fontWeight: 700, color: "black" }, subtitleStyle: { color: "black" } })
    .createXAxis({
      line: {},
      ticksAndLabels: {
        values: [
          473385600000, 631152000000, 788918400000, 946684800000,
          1104537600000, 1262304000000, 1420070400000, 1577836800000
        ],
        ticks: { length: 0 },
        labels: {
          fontSize: 10,
          fontFamily: "sans-serif",
          offset: 2,
          rotation: { value: 45, unit: "degrees" }
        }
      },
      title: { text: "Year", fontSize: 11, fontWeight: 700, offset: 38 }
    })
    .createYAxis({
      line: {},
      ticksAndLabels: {
        values: [0, 0.05, 0.1, 0.15, 0.2, 0.25, 0.3, 0.35],
        ticks: { length: 5 },
        labels: { fontSize: 10, fontFamily: "sans-serif", offset: 7, format: ".2f" }
      },
      title: {
        text: "IMF Lending Outstanding as a Fraction of World GDP (%)\u0020",
        fontSize: 11,
        fontWeight: 700,
        offset: 35
      }
    });
}