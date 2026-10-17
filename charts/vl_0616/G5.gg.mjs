// DOCS: doc-b11b4627b143730d, doc-76573a465e2b6a33, doc-071c93dff3a5ea2e
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({ width: 476, height: 374, margin: { left: 24, top: 52, right: 52, bottom: 22 } })
    .createData({ id: "raw", values: data })
    .createFoldData({ id: "folded", fields: ["y2", "s2", "d"], as: { key: "variable", value: "value" } })
    .createComputedData({ id: "kNumber", as: "kNum", expression: { op: "toNumber", operand: { field: "k" } } })
    .createComputedData({ id: "lineRows", as: "valueNum", expression: { op: "toNumber", operand: { field: "value" } } })
    .createLinePlot({ x: { field: "kNum", fieldType: "quantitative" }, y: { field: "valueNum", fieldType: "quantitative" }, guides: false })
    .encodeGroup({ field: "variable" })
    .encodeColor({ field: "variable" })
    .editColorScale({ domain: ["d", "s2", "y2"], range: ["red", "green", "rgb(128,0,0)"] })
    .encodeStrokeWidth({ value: 2 })
    .editXScale({ domain: [0, 100], nice: false })
    .editYScale({ domain: [0, 24] })
    .createComputedData({ id: "ruleRows", as: "ruleX", expression: { constant: 72 } })
    .createRuleMark({ id: "rule", data: "ruleRows", stroke: "darkgray" })
    .editRuleMark({ strokeWidth: 1, strokeDash: [6, 3] })
    .encodeX({ target: "rule", field: "ruleX", fieldType: "quantitative" })
    .createXAxis({
      line: {},
      ticksAndLabels: { values: [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100], ticks: {}, labels: { fontSize: 10, offset: 7 } },
      title: false
    })
    .createYAxis({
      line: {},
      ticksAndLabels: { values: [0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24], ticks: {}, labels: { fontSize: 10, offset: 7 } },
      title: false
    })
    .editXAxis({ line: { color: "#888" }, ticksAndLabels: { ticks: { color: "#888" }, labels: { color: "black" } } })
    .editYAxis({ line: { color: "#888" }, ticksAndLabels: { ticks: { color: "#888" }, labels: { color: "black" } } })
    .createGrid({ horizontal: true, vertical: false })
    .editHorizontalGrid({ color: "#ddd" })
    .createLegend({ title: false, labels: { fontSize: 10, color: "black" }, symbol: { layers: [{ type: "line", length: 10, lineWidth: 1.5 }] } })
    .createTitle({ text: "Middle income, but unstable", titleStyle: { fontSize: 13, fontWeight: 700, color: "black" }, offset: -10.953125 })
    .editTitle({ subtitle: "Equilibrium\n", subtitleStyle: { fontSize: 10, fontStyle: "italic", color: "black" }, gap: 3.34375 })
    .editTitle({ alongOffset: -18.123046875 });
}