// DOCS: doc-6c2c08869091f6a0, doc-fc11e9fb291905d1, doc-333a87e52954985d
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({ width: 330, height: 374, margin: { left: 24, top: 52, right: 6, bottom: 22 } })
    .createData({ values: data })
    .createComputedData({ id: "yearNum", as: "year_num", expression: { op: "toNumber", operand: { field: "year" } } })
    .createFoldData({ id: "folded", fields: ["wages", "asset2"], as: { key: "asset", value: "value" } })
    .createComputedData({ id: "valueNum", as: "value_num", expression: { op: "if", condition: { op: "eq", left: { field: "value" }, right: { constant: "" } }, then: { constant: 0 }, else: { op: "toNumber", operand: { field: "value" } } } })
    .createSortedData({ id: "sorted", sortBy: [{ field: "asset", order: "descending" }] })
    .createComputedData({ id: "stackGroupComputed", as: "stackGroup", expression: { op: "concat", operands: [{ field: "asset" }, { constant: "|" }, { field: "riskFreeRate" }] } })
    .createStackData({ category: "year_num", group: "stackGroup", value: "value_num" })
    .createBarPlot({
      x: { field: "year_num", fieldType: "quantitative" },
      y: { lower: "value_num_start", upper: "value_num_end", fieldType: "quantitative" },
      guides: false
    })
    .editXScale({ domain: [-5, 35], nice: false })
    .editYScale({ domain: [0, 16], nice: false })
    .encodeColor({ field: "asset", layout: "overlay" })
    .editColorScale({ domain: ["asset2", "wages"], range: ["blue", "rgb(128,0,0)"] })
    .encodeBarWidth({ pixels: 5 })
    .createXAxis({
      line: {},
      ticksAndLabels: {
        values: [-5, 0, 5, 10, 15, 20, 25, 30, 35],
        ticks: { length: 5 },
        labels: { fontSize: 10, offset: 7, flush: true }
      },
      title: false
    })
    .editXAxisLine({ color: "#888" })
    .editXAxisTicks({ color: "#888" })
    .editXAxisLabels({ color: "black" })
    .createYAxis({
      line: {},
      ticksAndLabels: {
        values: [0, 2, 4, 6, 8, 10, 12, 14, 16],
        ticks: { length: 5 },
        labels: { fontSize: 10, offset: 7 }
      },
      title: false
    })
    .editYAxisLine({ color: "#888" })
    .editYAxisTicks({ color: "#888" })
    .editYAxisLabels({ color: "black" })
    .createHorizontalGrid({ values: [0, 2, 4, 6, 8, 10, 12, 14, 16], color: "#ddd", lineWidth: 1 })
    .createVerticalGrid({ values: [-5, 0, 5, 10, 15, 20, 25, 30, 35], color: "#ddd", lineWidth: 1 })
    .createTitle({
      text: "Assets and wages",
      titleStyle: { fontSize: 13, fontStyle: "normal" },
      offset: -13
    })
    .editTitle({ titleStyle: { fontWeight: 700, color: "black" }, alongOffset: -18.123046875, gap: 3 })
    .editTitle({
      subtitle: "Correlation",
      subtitleStyle: { fontSize: 10, fontStyle: "italic", color: "black" }
    });
}
