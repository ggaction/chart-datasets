import { chart } from "ggaction";
import data from "./data.json";

// DOCS: doc-b11b4627b143730d, doc-76573a465e2b6a33, doc-c2eafbbd16fe3c71

export function buildChart() {
  return chart()
    .createCanvas({ width: 431, height: 364, margin: { left: 44, top: 27, right: 87, bottom: 37 } })
    .createData({ id: "raw", values: data })
    .createComputedData({ id: "numStep", as: "step_num", expression: { op: "toNumber", operand: { field: "step" } } })
    .createComputedData({ id: "num", as: "loss_num", expression: { op: "toNumber", operand: { field: "loss" } } })
    .createLinePlot({ x: { field: "step_num" }, y: { field: "loss_num" }, guides: false })
    .createRegressionData({ id: "fit", x: "step_num", y: "loss_num" })
    .editRegressionData({ target: "fit", method: "loess", groupBy: "rev" })
    .editRegressionData({ target: "fit", span: 0.3, robustIterations: 2 })
    .bindMarkData({ target: "linePlot", data: "fit" })
    .encodeColor({ target: "linePlot", field: "rev" })
    .encodeStrokeWidth({ target: "linePlot", value: 2 })
    .createLineMark({ id: "rawLine", data: "num", strokeWidth: 2 })
    .encodeOpacity({ target: "rawLine", value: 0.2 })
    .encodeX({ target: "rawLine", field: "step_num", fieldType: "quantitative" })
    .encodeY({ target: "rawLine", field: "loss_num", fieldType: "quantitative" })
    .encodeColor({ target: "rawLine", field: "rev", fieldType: "nominal" })
    .encodeGroup({ target: "rawLine", field: "rev", fieldType: "nominal" })
    .encodePathOrder({ target: "rawLine", field: "step_num", fieldType: "quantitative" })
    .createWindowData({ id: "endpointWindow", source: "num", sortBy: [{ field: "step_num", order: "descending" }], operations: [{ op: "rowNumber", as: "rn" }] })
    .filterData({ id: "endpoint", field: "rn", predicate: { op: "eq", value: 1 } })
    .createPointMark({ id: "endpointPoint", data: "endpoint" })
    .encodeX({ target: "endpointPoint", field: "step_num", fieldType: "quantitative" })
    .encodeY({ target: "endpointPoint", field: "loss_num", fieldType: "quantitative" })
    .encodeColor({ target: "endpointPoint", field: "rev", fieldType: "nominal" })
    .editPointMark({ target: "endpointPoint", stroke: false })
    .encodeOpacity({ target: "endpointPoint", value: 1 })
    .encodePointRadius({ target: "endpointPoint", value: Math.sqrt(10) / 2 })
    .editXScale({ domain: [0, 11000], nice: false })
    .editYScale({ domain: [360, 500], nice: false })
    .editColorScale({ target: "linePlot", domain: ["workspace"], range: ["#4c78a8"] })
    .createGrid({ horizontal: { color: "#ddd" }, vertical: { color: "#ddd" } })
    .createXAxis({
      title: { text: "step", fontSize: 11, offset: 27.578125 },
      line: {},
      ticksAndLabels: { count: 8, ticks: { length: 5 }, labels: { fontSize: 10, fontFamily: "sans-serif", offset: 7 } }
    })
    .editXAxis({ line: { color: "#888" }, ticksAndLabels: { ticks: { color: "#888" }, labels: { format: ",.0f" } }, title: { fontWeight: 700 } })
    .createYAxis({
      title: { text: "loss", fontSize: 11, offset: 32.6845703125 },
      line: {},
      ticksAndLabels: { count: 8, ticks: { length: 5 }, labels: { fontSize: 10, fontFamily: "sans-serif", offset: 7 } }
    })
    .editYAxis({ line: { color: "#888" }, ticksAndLabels: { ticks: { color: "#888" } }, title: { fontWeight: 700 } })
    .createLegend({ target: "endpointPoint", labels: { fontSize: 10 }, titleStyle: { fontSize: 11, fontWeight: 700 } })
    .editLegend({ title: "rev", symbol: { layers: [{ type: "point", shape: "circle", size: 5, fill: "#4c78a8", stroke: "#4c78a8", strokeWidth: 1.5 }] } })
    .editLegendBlock({ target: "endpointPoint", channel: "color", symbol: { opacity: 0.2 } })
    .createTitle({ text: "train/loss", titleStyle: { fontSize: 13, fontWeight: 700, fontFamily: "sans-serif" }, offset: -13 })
    .editTitle({ align: "center" });
}