// DOCS: doc-6c2c08869091f6a0, doc-fc11e9fb291905d1 (createBarPlot, createTitle/createGuides family as delivered)
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({ width: 269, height: 227, margin: { left: 64, top: 40, right: 5, bottom: 37 } })
    .editCanvas({ background: "#fff0d8" })
    .createData({ values: data })
    .createComputedData({ id: "valueNum", as: "valueNum", expression: { op: "toNumber", operand: { field: "value" } } })
    .createComputedData({
      id: "stackSign",
      as: "stackSign",
      expression: {
        op: "if",
        condition: {
          op: "gte",
          left: { field: "valueNum" },
          right: { constant: 0 }
        },
        then: { constant: "positive" },
        else: { constant: "negative" }
      }
    })
    .createWindowData({
      id: "stackEnds",
      partitionBy: ["year", "stackSign"],
      operations: [
        { op: "cumulativeSum", field: "valueNum", as: "valueNum_end" }
      ]
    })
    .createComputedData({
      id: "stackStarts",
      as: "valueNum_start",
      expression: {
        op: "subtract",
        left: { field: "valueNum_end" },
        right: { field: "valueNum" }
      }
    })
    .createBarPlot({
      x: { field: "year", fieldType: "temporal" },
      y: { lower: "valueNum_start", upper: "valueNum_end", fieldType: "quantitative" },
      guides: false
    })
    .editBarMark({ fill: "#fe921f" })
    .encodeBarWidth({ pixels: 5 })
    .editXScale({ domain: [831315789473, 1661756210526], range: [64, 264], nice: false })
    .editYScale({ domain: [-50000, 60000] })
    .createTitle({ text: "Total Trade Balance in \u00a3m ", titleStyle: { fontSize: 13, fontFamily: "sans-serif" } })
    .editTitle({ titleStyle: { fontWeight: 700 }, offset: -4, alongOffset: -58.4 })
    .editTitle({ subtitle: "Source: ONS", subtitleStyle: { fontSize: 10, fontFamily: "sans-serif" }, gap: 1 })
    .createXAxis({
      line: false,
      ticksAndLabels: { count: 5, labels: { fontSize: 10, fontFamily: "sans-serif", offset: 7, format: "%Y", flush: true } },
      title: { text: "Year", fontSize: 11, fontWeight: 700, fontFamily: "sans-serif", offset: 28 }
    })
    .createYAxis({
      line: {},
      ticksAndLabels: { count: 6, labels: { fontSize: 10, fontFamily: "sans-serif", offset: 7, format: ",.0f" } },
      title: { text: "Total Trade Balance", fontSize: 11, fontWeight: 700, fontFamily: "sans-serif", offset: 54 }
    })
    .createGrid({ vertical: { color: "#00000017", count: 5 }, horizontal: { color: "#00000017", count: 6 } });
}