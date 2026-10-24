import { chart } from "ggaction";
import data from "./data.json";
export function buildChart() {
  return chart()
    // DOCS: doc-38764e122fbcf9c6
    .createCanvas({ width: 447, height: 370, margin: { left: 41, top: 33, right: 106, bottom: 37 } })
    .editCanvas({ plotBorder: { color: "#ddd", lineWidth: 1 } })
    .applyTextMetrics({ profile: { schemaVersion: 1, id: "source1408-own-two-endpoint-SVG-widths", measurements: [ { text: "0.0", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 13.90625 }, { text: "1.0", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 13.90625 } ] } })
    .createData({ values: data }).createLineMark({id: "linePlot"}).encodeX({field: "fpr", fieldType: "quantitative", scale: {id: "x", domain: [0, 1]}}).encodeY({field: "tpr", scale: {id: "y", domain: [0, 1]}}).createXAxis({coordinate: "main", ticksAndLabels: {values: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1], ticks: {color: "#888", length: 5, alongOffset: 0.5}, labels: {fontFamily: "sans-serif", fontSize: 10, color: "black", format: ".1f", offset: 5.5, alongOffset: 0.5, flush: true}}, title: {text: "fpr", fontFamily: "sans-serif", fontSize: 11, fontWeight: 700, color: "black", offset: 20.5, alongOffset: 0.5, baseline: "top"}}).createYAxis({coordinate: "main", ticksAndLabels: {values: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1], ticks: {color: "#888", length: 5, alongOffset: 0.5}, labels: {fontFamily: "sans-serif", fontSize: 10, color: "black", format: ".1f", offset: 6.5, alongOffset: 0.890625}}, title: {text: "tpr", fontFamily: "sans-serif", fontSize: 11, fontWeight: 700, color: "black", offset: 23.4013671875, alongOffset: 0.5, baseline: "bottom"}}).editXAxisLine({color: "#888"}).editYAxisLine({color: "#888"}).createGrid({vertical: {values: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1], color: "#ddd", alongOffset: 0.5}, horizontal: {values: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1], color: "#ddd", alongOffset: 0.5}})
    .encodeColor({ field: "rev", scale: { id: "color", domain: ["lightgbm", "nn_fc", "random_forest"], range: ["#4c78a8", "#f58518", "#e45756", "#72b7b2", "#54a24b", "#eeca3b", "#b279a2", "#ff9da6", "#9d755d", "#bab0ac"] } })
    .encodeStroke({ field: "rev", scale: { id: "colorStroke", domain: ["lightgbm", "nn_fc", "random_forest"], range: ["#4c78a8", "#f58518", "#e45756", "#72b7b2", "#54a24b", "#eeca3b", "#b279a2", "#ff9da6", "#9d755d", "#bab0ac"] } }).createPointMark({ id: "scatterPlot" }).encodeX({ field: "fpr", fieldType: "quantitative", scale: { id: "x", domain: [0, 1] } }).encodeY({ field: "tpr", scale: { id: "y", domain: [0, 1] } })
    .encodeStroke({ field: "rev", scale: { id: "colorStroke", domain: ["lightgbm", "nn_fc", "random_forest"], range: ["#4c78a8", "#f58518", "#e45756", "#72b7b2", "#54a24b", "#eeca3b", "#b279a2", "#ff9da6", "#9d755d", "#bab0ac"] } })
    .editPointMark({ fill: "transparent", strokeWidth: 2, opacity: 1 })
    .encodePointRadius({ value: 2.7386127875258306 })
    .createRuleMark({ data: "data", stroke: "gray", strokeWidth: 1 })
    .encodeX({ field: "fpr", fieldType: "quantitative", scale: { id: "x", domain: [0, 1] } })
    .createComputedData({ id: "displayRows", as: "tprDisplay", expression: { op: "divide", left: { op: "floor", operand: { op: "add", left: { op: "multiply", left: { field: "tpr" }, right: { op: "if", condition: { op: "lt", left: { field: "tpr" }, right: { constant: 0.1 } }, then: { constant: 10000000000000 }, else: { constant: 1000000000000 } } }, right: { constant: 0.5 } } }, right: { op: "if", condition: { op: "lt", left: { field: "tpr" }, right: { constant: 0.1 } }, then: { constant: 10000000000000 }, else: { constant: 1000000000000 } } } })
    .createTextPlot({ x: { field: "fpr", fieldType: "quantitative", scale: { id: "x", domain: [0, 1] } }, y: { field: "tpr", scale: { id: "y", domain: [0, 1] } }, text: { field: "tprDisplay" } })
    .editTextMark({ fontSize: 11, baseline: "middle" })
    .editTextMark({ dx: 5, dy: -4.875 })
    .encodeColor({ field: "rev", scale: { id: "color", domain: ["lightgbm", "nn_fc", "random_forest"], range: ["#4c78a8", "#f58518", "#e45756", "#72b7b2", "#54a24b", "#eeca3b", "#b279a2", "#ff9da6", "#9d755d", "#bab0ac"] } })
    // DOCS: doc-7f2c254224fc4908
    .createLegend({ target: "linePlot", position: "right", symbol: { layers: [ { type: "point", size: 5, strokeWidth: 1.5 } ] } })
    .editLegend({ title: "rev", labels: { fontFamily: "sans-serif", fontSize: 10, color: "black" }, titleStyle: { fontFamily: "sans-serif", fontSize: 11, fontWeight: 700, color: "black" } })
    .createTitle({ text: "ROC Curve", titleStyle: { fontFamily: "sans-serif", fontSize: 13, fontWeight: 700, color: "black" }, offset: -10.953125 })
    .editTitle({ align: "center" });
}