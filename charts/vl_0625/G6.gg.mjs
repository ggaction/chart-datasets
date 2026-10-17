// DOCS: doc-b11b4627b143730d, doc-76573a465e2b6a33, doc-9bb354f4e2d46693
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({ width: 470, height: 374, margin: { left: 24, top: 52, right: 46, bottom: 22 } })
    .createData({ id: "raw", values: data })
    .createFoldData({ id: "folded", fields: ["y", "s"], as: { key: "variable", value: "value" } })
    .createComputedData({ id: "kNumber", as: "kNum", expression: { op: "toNumber", operand: { field: "k" } } })
    .createComputedData({ id: "lineRows", as: "valueNum", expression: { op: "toNumber", operand: { field: "value" } } })
    .createLinePlot({
      x: { field: "kNum", fieldType: "quantitative" },
      y: { field: "valueNum", fieldType: "quantitative" },
      guides: false
    })
    .encodeGroup({ field: "variable" })
    .encodeColor({ field: "variable" })
    .editColorScale({ domain: ["s", "y"], range: ["green", "rgb(128,0,0)"] })
    .encodeStrokeWidth({ value: 2 })
    .editXScale({ domain: [0, 100], nice: false })
    .editYScale({ domain: [0, 10] })
    .createComputedData({ id: "ruleRows", as: "ruleX", expression: { constant: 64 } })
    .createRuleMark({ id: "rule", data: "ruleRows", stroke: "darkgray" })
    .editRuleMark({ strokeWidth: 0, strokeDash: [6, 3] })
    .encodeX({ target: "rule", field: "ruleX", fieldType: "quantitative" })
    .createXAxis({
      line: {},
      ticksAndLabels: { ticks: {}, labels: { fontSize: 10, offset: 7 }, values: [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100] },
      title: false
    })
    .editXAxisLine({ color: "#888" })
    .editXAxisTicks({ color: "#888" })
    .editXAxisLabels({ color: "black" })
    .createYAxis({
      line: {},
      ticksAndLabels: { ticks: {}, labels: { fontSize: 10, offset: 7 }, values: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10] },
      title: false
    })
    .editYAxisLine({ color: "#888" })
    .editYAxisTicks({ color: "#888" })
    .editYAxisLabels({ color: "black" })
    .createGrid({ horizontal: true, vertical: false })
    .editHorizontalGrid({ color: "#ddd" })
    .createLegend({
      title: false,
      labels: { fontSize: 10, color: "black" },
      symbol: { layers: [{ type: "line", length: 10, lineWidth: 1.5 }] }
    }).createTitle({
      text: "Solow Swann Model",
      titleStyle: { fontSize: 13, fontWeight: 700, color: "black" },
      offset: -10.953125
    })
    .editTitle({
      subtitle: "Simple graphical version\n",
      subtitleStyle: { fontSize: 10, fontStyle: "italic", color: "black" },
      gap: 3.34375
    })
    .editTitle({ alongOffset: -18.123046875 });
}