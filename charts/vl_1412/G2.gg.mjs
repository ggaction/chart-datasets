// DOCS: doc-b11b4627b143730d doc-76573a465e2b6a33 doc-c2eafbbd16fe3c71

import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({ width: 426, height: 364, margin: { left: 39, top: 27, right: 87, bottom: 37 } })
    .createData({ values: data })
    .createComputedData({ id: "numStep", as: "step_num", expression: { op: "toNumber", operand: { field: "step" } } })
    .createComputedData({ id: "num", as: "epoch_num", expression: { op: "toNumber", operand: { field: "epoch" } } })
    .createLinePlot({ x: "step_num", y: "epoch_num", guides: false })
    .createRegressionData({ id: "fit", x: "step_num", y: "epoch_num" })
    .editRegressionData({ target: "fit", method: "loess", groupBy: "rev" })
    .editRegressionData({ target: "fit", span: 0.3, robustIterations: 2 })
    .bindMarkData({ target: "linePlot", data: "fit" })
    .encodeColor({ field: "rev", target: "linePlot" })
    .editLineMark({ target: "linePlot", strokeWidth: 2, opacity: 1 })
    .editXScale({ domain: [0, 11000], nice: false })
    .editYScale({ domain: [-2, 20], nice: false })
    .createLineMark({ id: "rawLine", data: "num", strokeWidth: 2 })
    .encodeX({ field: "step_num", target: "rawLine", fieldType: "quantitative" })
    .encodeY({ field: "epoch_num", target: "rawLine", fieldType: "quantitative" })
    .encodeColor({ field: "rev", target: "rawLine" })
    .encodeGroup({ field: "rev", target: "rawLine" })
    .encodePathOrder({ field: "step_num", target: "rawLine" })
    .editLineMark({ target: "rawLine", opacity: 0.2 })
    .createWindowData({
      id: "endpointWindow",
      source: "num",
      sortBy: [{ field: "step_num", order: "descending" }],
      operations: [{ op: "rowNumber", as: "rn" }]
    })
    .filterData({ id: "endpoint", field: "rn", predicate: { op: "eq", value: 1 } })
    .createPointMark({ id: "endpointPoint", data: "endpoint" })
    .encodeX({ field: "step_num", target: "endpointPoint", fieldType: "quantitative" })
    .encodeY({ field: "epoch_num", target: "endpointPoint", fieldType: "quantitative" })
    .encodeColor({ field: "rev", target: "endpointPoint" })
    .editPointMark({ target: "endpointPoint", stroke: false, opacity: 1 })
    .encodePointRadius({ value: Math.sqrt(10) / 2, target: "endpointPoint" })
    .createXAxis({
      line: { color: "#888" },
      ticksAndLabels: {
        values: [0, 2000, 4000, 6000, 8000, 10000],
        ticks: { length: 5, color: "#888" },
        labels: { format: ",.0f", fontSize: 10, offset: 7 }
      },
      title: { text: "step", fontSize: 11, fontWeight: 700, offset: 27.6 }
    })
    .createYAxis({
      line: { color: "#888" },
      ticksAndLabels: {
        values: [-2, 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20],
        ticks: { length: 5, color: "#888" },
        labels: { fontSize: 10, offset: 7, labelMap: [{ value: -2, label: "−2" }] }
      },
      title: { text: "epoch", fontSize: 11, fontWeight: 700, offset: 28.9, rotation: { value: -90, unit: "degrees" } }
    })
    .createGrid({ horizontal: { color: "#ddd" }, vertical: { color: "#ddd" } })
    .createLegend({ target: "endpointPoint", labels: { fontSize: 10 }, titleStyle: { fontSize: 11, fontWeight: 700 } })
    .editLegend({ title: "rev", symbol: { layers: [{ type: "point", shape: "circle", size: 5, fill: "#4c78a8", stroke: "#4c78a8", strokeWidth: 1.5 }] } })
    .editLegendBlock({ target: "endpointPoint", channel: "color", symbol: { opacity: 0.2 } })
    .createTitle({ text: "epoch", titleStyle: { fontSize: 13, fontWeight: 700, fontFamily: "sans-serif" }, offset: -13 })
    .editTitle({ align: "center" });
}