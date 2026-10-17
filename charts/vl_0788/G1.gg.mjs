// DOCS: doc-6c2c08869091f6a0, doc-fc11e9fb291905d1, doc-dfae58344d5a524e
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({ width: 294, height: 363, margin: { left: 29, top: 27, right: 5, bottom: 36 } })
    .createData({ id: "raw", values: data })
  .filterData({ id: "validDates", field: "Date", predicate: { op: "neq", value: "" } })
    .createComputedData({
      id: "dated", as: "date",
      expression: { op: "parseTime", operand: { field: "Date" }, format: "%m/%d/%Y" }
    })
    .createComputedData({
      id: "billions", as: "billions",
      expression: { op: "divide", left: { op: "toNumber", operand: { field: "Totals" } }, right: { constant: 1000000000 } }
    })
    .createBarPlot({
      x: { field: "date", fieldType: "temporal" },
      y: { field: "billions", scale: { domain: [0, 110] } },
      guides: false
    })
    .editXScale({ domain: [449527104000, 1685676096000], nice: false, range: [29, 289] })
    .encodeBarWidth({ pixels: 5 })
    .editBarMark({ fill: "#86d0bb" })
    .createTitle({ text: "Total IMF outstanding debt overtime ", offset: -3, titleStyle: { fontSize: 13, fontWeight: 700 } })
    .editTitle({ alongOffset: -23.7 })
    .createAxes({
      x: {
        line: {},
        ticksAndLabels: {
          values: [473385600000, 631152000000, 788918400000, 946684800000, 1104537600000, 1262304000000, 1420070400000, 1577836800000],
          ticks: { length: 0 },
          labels: { fontSize: 10, fontFamily: "sans-serif", color: "black", offset: 7, rotation: { value: 45, unit: "degrees" } }
        },
        title: false
      },
      y: {
        line: {},
        ticksAndLabels: {
          values: [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110],
          labels: { fontSize: 10, fontFamily: "sans-serif", color: "black", offset: 7 }
        },
        title: false
      }
    });
}
