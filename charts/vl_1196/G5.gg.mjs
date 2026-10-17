// DOCS: doc-6c2c08869091f6a0, doc-fc11e9fb291905d1, doc-ca3e770693a924c8, doc-dfae58344d5a524e
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({ width: 337, height: 370, margin: { left: 29, top: 40, right: 8, bottom: 30 } })
    .createData({ id: "raw", values: data })
    .filterData({ id: "data_valid", field: "Year", noneOf: [""] })
    .createComputedData({
      id: "data_plot",
      as: "Total_billion_num",
      expression: { op: "toNumber", operand: { field: "Total_billion" } }
    })
    .createBarPlot({
      x: { field: "Year", fieldType: "temporal", temporalUnit: "year", },
      y: { field: "Total_billion_num" },
      guides: false
    })
    .editXScale({ domain: [421630510344, 1629591889655], nice: false })
    .editYScale({ domain: [0, 110] })
    .editBarMark({ fill: "rgb(0,47,167" })
    .encodeBarWidth({ pixels: 5 })
    .createXAxis({
      line: {},
      ticksAndLabels: {
        values: [473385600000, 631152000000, 788918400000, 946684800000, 1104537600000, 1262304000000, 1420070400000, 1577836800000],
        ticks: { length: 0 },
        labels: {
          fontSize: 10,
          offset: 2,
          rotation: { value: 45, unit: "degrees" }
        }
      },
      title: false
    })
    .editXAxisLabels({ format: "%Y" })
    .createYAxis({
      line: {},
      ticksAndLabels: {
        values: [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110],
        ticks: { length: 5 },
        labels: { fontSize: 10, offset: 7 }
      },
      title: false
    })
    .createTitle({
      text: "IMF lending outstanding",
      titleStyle: { fontSize: 13, fontFamily: "sans-serif" },
      subtitleStyle: { fontSize: 10, fontStyle: "italic", fontFamily: "sans-serif" }
    })
    .editTitle({ gap: 3, offset: -13, alongOffset: -23.68 })
    .editTitle({ subtitle: "Credit outstanding to all members, SDRs (billions), Source: IMF", titleStyle: { fontWeight: 700, color: "black" }, subtitleStyle: { fontWeight: 400, color: "black" } });
}
