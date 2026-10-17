// DOCS: doc-b11b4627b143730d doc-76573a465e2b6a33 doc-4aba5fb850bbed9c
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({ width: 471, height: 374, margin: { left: 24, top: 52, right: 47, bottom: 22 } })
    .createData({ id: "source", values: data })
    .createComputedData({ id: "kNumber", as: "kNum", expression: { op: "toNumber", operand: { field: "k" } } })
    .createFoldData({ id: "folded", fields: ["y", "s", "d"], as: { key: "variable", value: "value" } })
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
    .editRuleMark({ strokeWidth: 1, strokeDash: [6, 3] })
    .encodeX({ target: "rule", field: "ruleX", fieldType: "quantitative" })
    .createXAxis({ ticksAndLabels: { values: [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100], labels: { fontSize: 10, fontFamily: "sans-serif", offset: 7 } }, title: false })
    .createYAxis({ ticksAndLabels: { values: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10], labels: { fontSize: 10, fontFamily: "sans-serif", offset: 7 } }, title: false })
    .editXAxis({ line: { color: "#888" }, ticksAndLabels: { ticks: { color: "#888" }, labels: { color: "black" } } })
    .editYAxis({ line: { color: "#888" }, ticksAndLabels: { ticks: { color: "#888" }, labels: { color: "black" } } })
    .createGrid({ horizontal: true, vertical: false })
    .editHorizontalGrid({ color: "#ddd" })
    .createLegend({ title: false, labels: { fontSize: 10 }, symbol: { layers: [{ type: "line", length: 10, lineWidth: 1.5 }] } })
    .editLegendLabels({ color: "black" })
    .createTitle({ text: "Solow Swann Model", titleStyle: { fontSize: 13 }, offset: -10.953125 })
    .editTitle({ subtitle: "Simple graphical version\n", subtitleStyle: { fontSize: 10, fontStyle: "italic", color: "black" }, gap: 3.34375 })
    .editTitle({ alongOffset: -18.123046875, titleStyle: { fontWeight: 700, color: "black" } });
}