import { chart } from "ggaction";
// DOCS: doc-b11b4627b143730d, doc-c2eafbbd16fe3c71, doc-76573a465e2b6a33
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({ width: 487, height: 374, margin: { left: 24, top: 52, right: 63, bottom: 22 } })
    .createData({ id: "raw", values: data })
    .createFoldData({ id: "folded", fields: ["y2_a", "y2_b"], as: { key: "variable", value: "value" } })
    .createComputedData({ id: "kNumber", as: "kNum", expression: { op: "toNumber", operand: { field: "k" } } })
    .createComputedData({ id: "lineRows", as: "valueNum", expression: { op: "toNumber", operand: { field: "value" } } })
    .createLinePlot({ x: { field: "kNum", fieldType: "quantitative" }, y: { field: "valueNum", fieldType: "quantitative" }, guides: false })
    .encodeGroup({ field: "variable" })
    .encodeColor({ field: "variable" })
    .editColorScale({ domain: ["y2_a", "y2_b"], range: ["green", "blue"] })
    .editLineMark({ strokeWidth: 2 })
    .editXScale({ domain: [0, 100], nice: false })
    .editYScale({ domain: [0, 24] })
    .createComputedData({ id: "ruleRows", as: "ruleX", expression: { constant: 64 } })
    .createRuleMark({ id: "rule", data: "ruleRows", stroke: "darkgray" })
    .editRuleMark({ strokeWidth: 0, strokeDash: [6, 3] })
    .encodeX({ target: "rule", field: "ruleX", fieldType: "quantitative" })
    .createXAxis({
      line: {},
      ticksAndLabels: { values: [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100], ticks: {}, labels: { fontSize: 10, offset: 7 } },
      title: false
    })
    .editXAxis({ line: { color: "#888" }, ticks: { color: "#888" }, labels: { color: "black" } })
    .createYAxis({
      line: {},
      ticksAndLabels: { values: [0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24], ticks: {}, labels: { fontSize: 10, offset: 7 } },
      title: false
    })
    .editYAxis({ line: { color: "#888" }, ticks: { color: "#888" }, labels: { color: "black" } })
    .createGrid({ horizontal: true, vertical: false })
    .editHorizontalGrid({ color: "#ddd" })
    .createLegend({ title: false, labels: { fontSize: 10 }, symbol: { layers: [{ type: "line", length: 10, lineWidth: 1.5 }] } })
    .editLegendLabels({ color: "black" })
    .createTitle({ text: "Poverty traps", titleStyle: { fontSize: 13, fontWeight: 700, color: "black" }, offset: -10.953125 })
    .editTitle({ subtitle: "Kinked production function\n", subtitleStyle: { fontSize: 10, fontStyle: "italic", color: "black" }, gap: 3.34375 })
    .editTitle({ alongOffset: -18.123046875 });
}