// DOCS: doc-fc11e9fb291905d1 (createBarPlot), doc-7a5eff3c73a7e7f9, doc-dfae58344d5a524e
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({ width: 334, height: 372, margin: { left: 29, top: 40, right: 5, bottom: 32 } })
    .createData({ values: data })
    .createComputedData({
      id: "rowsYearMs",
      as: "YearMs",
      expression: {
        op: "if",
        condition: { op: "eq", left: { field: "Year" }, right: { constant: "" } },
        then: { constant: null },
        else: { op: "toNumber", operand: { field: "Year" } }
      }
    })
    .createComputedData({
      id: "rowsBillions",
      as: "billions",
      expression: {
        op: "if",
        condition: { op: "eq", left: { field: "Totals" }, right: { constant: "" } },
        then: { constant: 0 },
        else: {
          op: "divide",
          left: { op: "toNumber", operand: { field: "Totals" } },
          right: { constant: 1000000000 }
        }
      }
    })
    .filterData({ id: "validYears", field: "YearMs", noneOf: [null] }).createBarPlot({
      x: {
        field: "YearMs",
        fieldType: "temporal",
        temporalUnit: "year"
      },
      y: { field: "billions", fieldType: "quantitative" },
      guides: false
    })
    .editXScale({ domain: [421086786206, 1661671613793], nice: false })
    .editYScale({ domain: [0, 110] })
    .encodeBarWidth({ pixels: 5 })
    .editBarMark({ fill: "#86d0bb" })
    .createAxes({
      x: {
        line: { color: "#888" },
        ticksAndLabels: {
          values: [473385600000, 631152000000, 788918400000, 946684800000, 1104537600000, 1262304000000, 1420070400000, 1577836800000],
          ticks: { length: 0, color: "#888" },
          labels: { fontSize: 10, offset: 7, format: "%Y", rotation: { value: 45, unit: "degrees" } }
        },
        title: false
      },
      y: {
        line: { color: "#888" },
        ticksAndLabels: {
          values: [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110],
          ticks: { length: 5, color: "#888" },
          labels: { fontSize: 10, offset: 7 }
        },
        title: false
      }
    })
    .createTitle({
      text: "IMF lending outstanding ",
      titleStyle: { fontSize: 13, fontWeight: 700, color: "black" },
      subtitleStyle: { fontSize: 10, fontStyle: "italic", color: "black" }
    })
    .editTitle({ offset: -13, gap: 1 })
    .editTitle({ subtitle: "Credit outstanding to all members, SDRs (billions), Source: IMF", alongOffset: -23.7 });
}