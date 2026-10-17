// DOCS: doc-6c2c08869091f6a0, doc-fc11e9fb291905d1, doc-bedf05337affd6f4
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({
      width: 389,
      height: 422,
      margin: { left: 34, top: 40, right: 5, bottom: 32 }
    })
    .editCanvas({ background: "#fff0d8" })
    .createData({ values: data })
    .createComputedData({ id: "d", as: "dateMs", expression: { op: "parseTime", operand: { field: "\uFEFFDate" }, format: "%m/%d/%Y" } })
    .createComputedData({ id: "billions", as: "billions", expression: { op: "divide", left: { op: "toNumber", operand: { field: "Total" } }, right: { constant: 1000000000 } } })
    .createBarPlot({
      x: { field: "dateMs", fieldType: "temporal" },
      y: { field: "billions", fieldType: "quantitative" },
      guides: false
    })
    .editXScale({ domain: [455664705882, 1690079294117], range: [34, 384], nice: false })
    .editYScale({ domain: [0, 55] })
    .encodeBarWidth({ pixels: 5 })
    .editBarMark({ fill: "#fe921f", stroke: false })
    .createTitle({
      text: "IMF Lending outsanding GDP Adjusted",
      titleStyle: { fontSize: 13, fontWeight: 700, fontFamily: "sans-serif", color: "black" },
      subtitleStyle: { fontSize: 10, fontStyle: "italic", fontFamily: "sans-serif", color: "black" }
    })
    .editTitle({ subtitle: "Inflation adjusted  credit outstanding to all members of the IMF in USD: source (IMF)", offset: -13, alongOffset: -28 })
    .createXAxis({
      line: {}, ticksAndLabels: { values: [473385600000, 631152000000, 788918400000, 946684800000, 1104537600000, 1262304000000, 1420070400000, 1577836800000], ticks: { length: 0 }, labels: { fontSize: 10, offset: 2, format: "%Y" } }, title: { text: "Year", fontSize: 11, offset: 22 }
    })
    .editXAxis({ labels: { fontFamily: "sans-serif" }, title: { fontWeight: 700, fontFamily: "sans-serif" } })
    .createYAxis({
      line: {}, ticksAndLabels: { values: [0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55], ticks: { length: 0 }, labels: { fontSize: 10, offset: 2 } }, title: { text: "Billions Of USD", fontSize: 11, offset: 22 }
    })
    .editYAxis({ labels: { fontFamily: "sans-serif" }, title: { fontWeight: 700, fontFamily: "sans-serif" } });
}