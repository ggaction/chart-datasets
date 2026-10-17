// DOCS: doc-6c2c08869091f6a0, doc-fc11e9fb291905d1, doc-2c912465a1515bd5, doc-1be85afa2f68c40a
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({ width: 395, height: 375, margin: { left: 43, top: 40, right: 7, bottom: 35 } })
    .createData({ id: "raw", values: data })
    .createComputedData({ id: "imf", as: "TotalsNum",
      expression: { op: "toNumber", operand: { field: "Totals" } } })
    .createBarPlot({
      x: { field: "Year", fieldType: "temporal" },
      y: { field: "TotalsNum", fieldType: "quantitative" },
      guides: false
    })
    .encodeBarWidth({ pixels: 5 })
    .editBarMark({ fill: "blueviolet" })
    .editXScale({ domain: [424334901492, 1626887498507], range: [43, 388], nice: false })
    .editYScale({ domain: [0, 0.0035] })
    .createXAxis({
      line: {},
      ticksAndLabels: {
        values: [473328000000, 631152000000, 788918400000, 946684800000,
                 1104537600000, 1262304000000, 1420070400000, 1577836800000],
        ticks: {},
        labels: { rotation: { value: 45, unit: "degrees" }, offset: 7, fontSize: 10 }
      },
      title: false
    })
    .createYAxis({
      line: {},
      ticksAndLabels: {
        count: 8,
        ticks: {},
        labels: { offset: 7, fontSize: 10 }
      },
      title: false
    })
    .createTitle({ text: "IMF Lending", alongOffset: -38, titleStyle: { fontSize: 13 } })
    .editTitle({ subtitle: "credit outstanding (billions), source IMF",
      subtitleStyle: { fontSize: 10, fontStyle: "italic" }, offset: -13 })
    .editTitle({ titleStyle: { fontWeight: 700, color: "black" } })
    .editXAxisLine({ color: "#888" })
    .editXAxis({ ticks: { color: "#888" } })
    .editXAxisLabels({ format: "%Y" })
    .editYAxisLine({ color: "#888" })
    .editYAxis({ ticks: { color: "#888" } })
    .editYAxisLabels({ format: ".4f" });
}