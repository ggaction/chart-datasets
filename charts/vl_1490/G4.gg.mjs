// DOCS: doc-6c2c08869091f6a0, doc-fc11e9fb291905d1, doc-333a87e52954985d
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({ width: 380, height: 122, margin: { left: 84, top: 5, right: 96, bottom: 37 } })
    .createData({ values: data })
    .createSummaryData({
      id: "summary",
      groupBy: ["column"],
      aggregates: [
        { field: "value", op: "min", as: "min_value" },
        { field: "value", op: "q1", as: "q1_value" },
        { field: "value", op: "median", as: "median_value" },
        { field: "value", op: "q3", as: "q3_value" },
        { field: "value", op: "max", as: "max_value" }
      ]
    })
    .createRuleMark({ id: "rule", stroke: "black", strokeWidth: 1 })
    .encodeY({ field: "column", fieldType: "nominal", scale: { type: "band", domain: ["petal_length", "petal_width", "sepal_length", "sepal_width"], paddingInner: 0, paddingOuter: 0 } })
    .encodeXRange({ lower: "min_value", upper: "max_value" })
    .createBarPlot({ x: { lower: "q1_value", upper: "q3_value" }, y: "column", guides: false })
    .encodeColor({ field: "column", fieldType: "nominal" })
    .encodeBarWidth({ pixels: 20 })
    .editColorScale({
      domain: ["petal_length", "petal_width", "sepal_length", "sepal_width"],
      range: [
        "rgba(113,182,160,1)", "rgba(232,149,117,1)", "rgba(148,163,195,1)", "rgba(219,149,192,1)",
        "rgba(162,199,100,1)", "rgba(229,200,72,1)", "rgba(218,194,158,1)", "rgba(179,179,179,1)"
      ]
    })
    .editBarMark({ stroke: false })
    .editXScale({ domain: [0, 8], nice: false })
    .applyTextMetrics({ profile: { schemaVersion: 1, id: "vl_1490_actual_source_y_labels", measurements: [
        { text: "petal_length", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 54.5 },
        { text: "petal_width", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 50.59375 },
        { text: "sepal_length", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 56.71875 },
        { text: "sepal_width", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 52.8125 }
      ] } })
    .createTickMark({ id: "tick", length: 18, stroke: "black" })
    .editTickMark({ strokeWidth: 1 })
    .encodeX({ target: "tick", field: "median_value" })
    .encodeY({ target: "tick", field: "column", fieldType: "nominal" })
    .createGrid({ vertical: { values: [0, 2, 4, 6, 8] } })
    .editVerticalGrid({ color: "#ddd" })
    .createXAxis({
      ticksAndLabels: {
        values: [0, 2, 4, 6, 8],
        ticks: { length: 5 },
        labels: { fontSize: 10, offset: 7, flush: true }
      },
      title: { text: "value", fontSize: 11 }
    })
    .createYAxis({
      ticksAndLabels: {
        ticks: { length: 5 },
        labels: { fontSize: 10, offset: 7 }
      },
      title: { text: "column", fontSize: 11 }
    })
    .editXAxis({
      line: { color: "#888" },
      ticksAndLabels: {
        ticks: { color: "#888" },
        labels: { color: "black" }
      },
      title: { fontWeight: 700, color: "black" }
    })
    .editYAxis({
      line: { color: "#888" },
      ticksAndLabels: {
        ticks: { color: "#888" },
        labels: { color: "black" }
      },
      title: { fontWeight: 700, color: "black" }
    })
    .createGuides({
      axes: false,
      grid: false,
      legend: {
        position: "right",
        title: "column",
        titleStyle: { fontSize: 11, fontWeight: 700, color: "black" },
        labels: { fontSize: 10, color: "black" },
        symbol: { layers: [{ type: "swatch", width: 10, height: 10 }] }
      }
    });
}