import { chart } from "ggaction";
import data from "./data.json";

// DOCS: doc-b11b4627b143730d, doc-76573a465e2b6a33, doc-c2eafbbd16fe3c71

export function buildChart() {
  return chart()
    .createCanvas({ width: 471, height: 374, margin: { left: 24, top: 52, right: 47, bottom: 22 } })
    .createData({ id: "raw", values: data })
    .createFoldData({ id: "folded", fields: ["y", "d", "s"], as: { key: "variable", value: "value" } })
    .createComputedData({ id: "lineRows", as: "valueNum", expression: { op: "toNumber", operand: { field: "value" } } })
.createComputedData({ id: "kNumber", as: "kNum", expression: { op: "toNumber", operand: { field: "k" } } })
    .createLinePlot({ x: { field: "kNum", fieldType: "quantitative" }, y: { field: "valueNum", fieldType: "quantitative" }, guides: false })
    .encodeGroup({ field: "variable" })
    .encodeColor({ field: "variable" })
    .editColorScale({ domain: ["d", "s", "y"], range: ["#4c78a8", "#f58518", "#e45756", "#72b7b2", "#54a24b", "#eeca3b", "#b279a2", "#ff9da6", "#9d755d", "#bab0ac"] })
    .editLineMark({ strokeWidth: 2 })
    .editXScale({ domain: [0, 100], nice: false })
    .editYScale({ domain: [0, 10] })
    .createComputedData({ id: "ruleRows", as: "ruleX", expression: { constant: 64 } })
    .createRuleMark({ id: "rule", data: "ruleRows", stroke: "darkgray" })
    .editRuleMark({ strokeWidth: 1, strokeDash: [6, 3] })
    .encodeX({ target: "rule", field: "ruleX", fieldType: "quantitative" })
    .createXAxis({
      line: { color: "#888" },
      ticksAndLabels: { ticks: { color: "#888" }, labels: { fontSize: 10, color: "black", offset: 7 }, values: [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100] },
      title: false,
    })
    .createYAxis({
      line: { color: "#888" },
      ticksAndLabels: { ticks: { color: "#888" }, labels: { fontSize: 10, color: "black", offset: 7 }, values: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10] },
      title: false,
    })
    .createGrid({ horizontal: { color: "#ddd" }, vertical: false })
    .createLegend({ title: false, labels: { fontSize: 10, color: "black" }, symbol: { layers: [{ type: "line", length: 10, lineWidth: 1.5 }] } })
    .createTitle({ text: "Solow Swann Model", titleStyle: { fontSize: 13, fontWeight: 700, color: "black" }, offset: -10.953125 })
    .editTitle({ subtitle: "Simple graphical version\n", subtitleStyle: { fontSize: 10, fontStyle: "italic", color: "black" }, gap: 3.34375 })
    .editTitle({ alongOffset: -18.123046875 });
}