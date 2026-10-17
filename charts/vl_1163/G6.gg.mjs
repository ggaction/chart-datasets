import { chart } from "ggaction";
import data from "./data.json";
// DOCS: doc-6c2c08869091f6a0, doc-bedf05337affd6f4, doc-fc11e9fb291905d1

export function buildChart() {
  return chart()
    .createCanvas({ width: 353, height: 372, margin: { left: 32, top: 40, right: 21, bottom: 32 } })
    .createData({ values: data })
    .createComputedData({
      id: "parsedYears",
      as: "YearTime",
      expression: { op: "parseTime", operand: { field: "Year" }, format: "auto" }
    })
    .filterData({ id: "datedRows", field: "YearTime", noneOf: [null] })
    .createComputedData({
      id: "gdpPct",
      as: "totals_as_pct_of_GDP_num",
      expression: { op: "toNumber", operand: { field: "totals_as%ofGDP" } }
    })
    .createBarPlot({
      x: { field: "YearTime", fieldType: "temporal", temporalUnit: "timestamp" },
      y: { field: "totals_as_pct_of_GDP_num" },
      guides: false
    })
    .editBarMark({ fill: "lightskyblue" })
    .encodeBarWidth({ pixels: 5 })
    .editXScale({ domain: [421086786206, 1661671613793] })
    .editYScale({ domain: [0, 0.35] })
    .createTitle({
      text: "IMF lending outstanding as a percentage of global GDP",
      titleStyle: { fontSize: 13, fontFamily: "sans-serif" },
      alongOffset: -26.46
    })
    .editTitle({
      subtitleStyle: { fontSize: 10, fontStyle: "italic", fontFamily: "sans-serif", color: "black" },
      titleStyle: { fontWeight: 700, color: "black" }
    })
    .editTitle({ align: "left", offset: -13, alongOffset: -26.46 })
    .editTitle({
      subtitle: "Credit outstanding to all members, SDRs in billions, sources: IMF, Worldbank",
      gap: 1
    })
    .createXAxis({
        ticksAndLabels: {
          values: [
            473385600000, 631152000000, 788918400000, 946684800000,
            1104537600000, 1262304000000, 1420070400000, 1577836800000
          ],
          ticks: { length: 0 },
          labels: {
            fontSize: 10,
            fontFamily: "sans-serif",
            offset: 7,
            rotation: { value: 45, unit: "degrees" }
          }
        },
        title: false
    })
    .createYAxis({
        ticksAndLabels: {
          values: [0, 0.05, 0.1, 0.15, 0.2, 0.25, 0.3, 0.35],
          ticks: { length: 5 },
          labels: { fontSize: 10, fontFamily: "sans-serif", offset: 7 }
        },
        title: false
    })
    .editXAxis({ line: { color: "#888", lineWidth: 1 } })
    .editYAxis({ line: { color: "#888", lineWidth: 1 }, ticks: { color: "#888", lineWidth: 1 } })
    .editXAxisLabels({ format: "%Y" })
    .editYAxisLabels({ format: ".2f" });
}