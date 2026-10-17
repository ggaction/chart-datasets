// DOCS: doc-6c2c08869091f6a0, doc-fc11e9fb291905d1
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({ width: 334, height: 372, margin: { left: 29, top: 40, right: 5, bottom: 32 } })
    .createData({ values: data })
    .createComputedData({
      id: "sourceBillions",
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
    .createComputedData({ id: "parsedYears", as: "YearTime", expression: { op: "parseTime", operand: { field: "Year" }, format: "auto" } })
    .filterData({ id: "rowsValid", field: "YearTime", noneOf: [null] })
    .createComputedData({
      id: "numTotals",
      as: "billion",
      expression: { op: "toNumber", operand: { field: "Total_billion" } }
    })
    .createBarPlot({
      x: {
        field: "YearTime",
        fieldType: "temporal",
        temporalUnit: "timestamp",
      },
      y: { field: "billion" },
      guides: false
    })
    .editXScale({ type: "time", domain: [421086786206, 1661671613793], nice: false })
    .editYScale({ type: "linear", domain: [0, 110] })
    .editBarMark({ fill: "lightskyblue" })
    .encodeBarWidth({ pixels: 5 })
    .createXAxis({
      ticksAndLabels: {
        values: [473385600000, 631152000000, 788918400000, 946684800000, 1104537600000, 1262304000000, 1420070400000, 1577836800000],
        ticks: { length: 0 },
        labels: { fontSize: 10, offset: 7, rotation: { value: 45, unit: "degrees" } }
      },
      title: false
    })
    .editXAxisLine({ color: "#888" })
    .editXAxisLabels({ format: "%Y" })
    .createYAxis({
      ticksAndLabels: {
        values: [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110],
        ticks: { length: 5 },
        labels: { fontSize: 10, offset: 7 }
      },
      title: false
    })
    .editYAxisLine({ color: "#888" })
    .createTitle({
      text: "IMF lending outstanding",
      titleStyle: { fontSize: 13 },
      subtitleStyle: { fontSize: 10, fontStyle: "italic" }
    })
    .editTitle({ offset: -4, gap: 1, alongOffset: -23.7 })
    .editTitle({ subtitle: "Credit outstanding to all members, SDRs in billions, source: IMF", titleStyle: { color: "black", fontWeight: 700 }, subtitleStyle: { color: "black" } });
}
