import { chart } from "ggaction";
import data from "./data.json";
// DOCS: doc-fb3b01cca895bdad (complete axes/labels)
export function buildChart() {
  return chart()
    .createCanvas({ width: 449, height: 385, margin: { left: 44, top: 40, right: 5, bottom: 45 } })
    .createData({ values: data })
    .filterData({ id: "rows", field: "Year", noneOf: [""] })
    .createComputedData({ id: "yr", as: "YearNum", expression: { op: "toNumber", operand: { field: "Year" } } })
    .createComputedData({ id: "tb", as: "TotalsBn", expression: { op: "toNumber", operand: { field: "Totals(Bn)" } } })
    .createBarPlot({
      x: { field: "YearNum", fieldType: "temporal", temporalUnit: "year" },
      y: { field: "TotalsBn", fieldType: "quantitative" },
      guides: false
    })
    .editXScale({ domain: [426388430769, 1656369969230], nice: false })
    .editYScale({ domain: [0, 110] })
    .editBarMark({ fill: "#f4c2c2" })
    .encodeBarWidth({ pixels: 5 })
    .createXAxis({
      line: {},
      ticksAndLabels: {
        ticks: { length: 0 },
        values: [473385600000, 631152000000, 788918400000, 946684800000, 1104537600000, 1262304000000, 1420070400000, 1577836800000],
        labels: { fontSize: 10, offset: 2, rotation: { value: 45, unit: "degrees" } }
      },
      title: { text: "Year", fontSize: 11, offset: 34.8 }
    })
    .createYAxis({
      line: {},
      ticksAndLabels: {
        ticks: { length: 5 },
        values: [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110],
        labels: { fontSize: 10, offset: 7 }
      },
      title: { text: "Lending Outstanding (Billions)", fontSize: 11, offset: 32.7 }
    })
    .editXAxis({ title: { fontWeight: 700 } })
    .editYAxis({ title: { fontWeight: 700 } })
    .createTitle({
      text: "IMF Lending Outstanding",
      titleStyle: { fontSize: 13, fontWeight: 700 },
      subtitleStyle: { fontSize: 10, fontStyle: "italic" }
    })
.editTitle({ offset: -13, gap: 1, alongOffset: -38.7 })
    .editTitle({ subtitle: "Source: IMF" });
}