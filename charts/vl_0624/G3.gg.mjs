// DOCS: doc-b11b4627b143730d, doc-76573a465e2b6a33, doc-c2eafbbd16fe3c71
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({ width: 471, height: 374, margin: { left: 24, top: 52, right: 47, bottom: 22 } })
    .createData({ id: "raw", values: data })
    .createFoldData({ id: "folded", fields: ["y", "s", "d"], as: { key: "variable", value: "value" } })
    .createComputedData({ id: "kNumber", as: "kNum", expression: { op: "toNumber", operand: { field: "k" } } })
    .createComputedData({ id: "lineRows", as: "valueNum", expression: { op: "toNumber", operand: { field: "value" } } })
    .createLinePlot({ x: { field: "kNum", fieldType: "quantitative" }, y: { field: "valueNum", fieldType: "quantitative" }, guides: false })
    .encodeGroup({ field: "variable" })
    .encodeColor({ field: "variable" })
    .editColorScale({ domain: ["d", "s", "y"], range: ["red", "green", "rgb(128,0,0)"] })
    .encodeStrokeWidth({ value: 2 })
    .editXScale({ domain: [0, 100], nice: false })
    .editYScale({ domain: [0, 10] })
    .createComputedData({ id: "ruleRows", as: "ruleX", expression: { constant: 64 } })
    .createRuleMark({ id: "rule", data: "ruleRows", stroke: "darkgray" })
    .editRuleMark({ strokeWidth: 0, strokeDash: [6, 3] })
    .encodeX({ target: "rule", field: "ruleX", fieldType: "quantitative" })
    .createXAxis({ title: false, line: { color: "#888" }, ticksAndLabels: { ticks: { color: "#888" }, labels: { fontSize: 10, color: "black", offset: 7 }, values: [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100] } })
    .createYAxis({ title: false, line: { color: "#888" }, ticksAndLabels: { ticks: { color: "#888" }, labels: { fontSize: 10, color: "black", offset: 7 }, values: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10] } })
    .createGrid({ horizontal: { color: "#ddd" }, vertical: false })
    .createLegend({ title: false, labels: { fontSize: 10, color: "black" }, symbol: { layers: [{ type: "line", length: 10, lineWidth: 1.5 }] } })
    .createTitle({ text: "Solow Swann Model", titleStyle: { fontSize: 13, fontWeight: 700, color: "black" }, offset: -10.953125 })
    .editTitle({ subtitle: "Simple graphical version\n", subtitleStyle: { fontSize: 10, fontStyle: "italic", color: "black" }, gap: 3.34375 })
    .editTitle({ alongOffset: -18.123046875 });
}