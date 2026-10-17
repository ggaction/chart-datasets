// DOCS: doc-6c2c08869091f6a0, doc-fc11e9fb291905d1, doc-ba092ec842bafcc1
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({ width: 326, height: 385, margin: { left: 47, top: 40, right: 19, bottom: 45 } })
    .createData({ values: data })
    .createComputedData({ id: "gdp", as: "DebtGdp", expression: { op: "toNumber", operand: { field: "Debt/GDP" } } })
    .createBarPlot({
      x: { field: "Years", fieldType: "temporal", temporalUnit: "year" },
      y: { field: "DebtGdp", fieldType: "quantitative" },
      guides: false
    })
    .editXScale({ domain: [418409280000, 1632813120000], nice: false, range: [47, 307] })
    .editYScale({ domain: [0, 0.35] })
    .editBarMark({ fill: "#245ace" })
    .encodeBarWidth({ pixels: 5 })
    .createTitle({
      text: "Debt as a percentage of GDP-World",
      titleStyle: { fontSize: 13, fontFamily: "sans-serif" },
      subtitleStyle: { fontSize: 10, fontStyle: "italic", fontFamily: "sans-serif" }
    })
    .editTitle({
      subtitle: "The following chart shows Debt/GDP (%) for the whole world",
      offset: -13,
      alongOffset: -41.5
    })
    .editTitle({ titleStyle: { fontWeight: 700, color: "black" }, subtitleStyle: { color: "black" } })
    .createXAxis({
      line: {},
      ticksAndLabels: {
        values: [473385600000, 631152000000, 788918400000, 946684800000, 1104537600000, 1262304000000, 1420070400000, 1577836800000],
        ticks: { length: 0 },
        labels: { fontSize: 10, offset: 7, rotation: { value: 45, unit: "degrees" } }
      },
      title: { text: "Years", fontSize: 11, offset: 38 }
    })
    .createYAxis({
      line: {},
      ticksAndLabels: {
        values: [0, 0.05, 0.1, 0.15, 0.2, 0.25, 0.3, 0.35],
        labels: { fontSize: 10, offset: 7 }
      },
      title: { text: "Debt/GDP (%)", fontSize: 11, offset: 38 }
    })
    .editXAxisLine({ color: "#888" })
    .editYAxisLine({ color: "#888" })
    .editXAxisLabels({ fontFamily: "sans-serif", color: "black", format: "%Y" })
    .editYAxisLabels({ fontFamily: "sans-serif", color: "black", format: ".2f" })
    .editXAxisTitle({ fontWeight: 700, fontFamily: "sans-serif", color: "black" })
    .editYAxisTitle({ fontWeight: 700, fontFamily: "sans-serif", color: "black" });
}