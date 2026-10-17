// DOCS: doc-6c2c08869091f6a0 (createBarPlot), doc-fc11e9fb291905d1 (createBarPlot basic-charts), doc-76573a465e2b6a33 (basic-charts context)
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({ width: 148, height: 267, margin: { left: 39, top: 10, right: 69, bottom: 57 } })
    .createData({ values: data })
    .createSummaryData({
      id: "tipSummary",
      groupBy: ["time"],
      aggregates: [
        { field: "tip", op: "min", as: "min_tip" },
        { field: "tip", op: "q1", as: "q1_tip" },
        { field: "tip", op: "median", as: "median_tip" },
        { field: "tip", op: "q3", as: "q3_tip" },
        { field: "tip", op: "max", as: "max_tip" }
      ]
    })
    // layer 0: rule min–max (painted first)
    .createRuleMark({ id: "minMaxRule" })
    .encodeX({ field: "time", fieldType: "nominal", scale: { type: "band", domain: ["Dinner", "Lunch"], paddingInner: 0, paddingOuter: 0 } })
    .encodeYRange({ target: "minMaxRule", lower: "min_tip", upper: "max_tip" })
    .editRuleMark({ stroke: "black", strokeWidth: 1 })
    // layer 1: bar q1–q3, colored by time (primary facade)
    .createBarPlot({ x: "time", y: { lower: "q1_tip", upper: "q3_tip" }, guides: false })
    .encodeBarWidth({ pixels: 20 })
    .editBarMark({ stroke: false })
    .encodeColor({ field: "time", layout: "overlay" })
    .editColorScale({
      domain: ["Dinner", "Lunch"],
      range: [
        "rgba(49,115,161,1)", "rgba(224,128,44,1)", "rgba(58,145,58,1)", "rgba(192,60,61,1)",
        "rgba(147,113,178,1)", "rgba(131,91,83,1)", "rgba(213,132,188,1)", "rgba(127,127,127,1)",
        "rgba(168,169,53,1)", "rgba(45,171,184,1)"
      ]
    })
    .editYScale({ domain: [0, 10] })
    .editXScale({ paddingInner: 0, paddingOuter: 0 })
    // layer 2: median tick, 18x1 centered on band (painted last)
    .createTickMark({ length: 18, stroke: "black", strokeWidth: 1 })
    .encodeX({ field: "time", fieldType: "nominal" })
    .encodeY({ field: "median_tip" })
    .encodeAngle({ value: 90 })
    // source grid: horizontal lines at y values, #ddd; no vertical grid
    .createHorizontalGrid({ values: [0, 2, 4, 6, 8, 10], color: "#ddd" })
    .createAxes({
      x: {
        line: { color: "#888" },
        ticksAndLabels: {
          ticks: { length: 5, color: "#888" },
          labels: { fontSize: 10, offset: 7, color: "black", rotation: { value: -90, unit: "degrees" } }
        },
        title: { text: "time", fontSize: 11, fontWeight: 700, color: "black" }
      },
      y: {
        line: { color: "#888" },
        ticksAndLabels: {
          values: [0, 2, 4, 6, 8, 10],
          ticks: { length: 5, color: "#888" },
          labels: { fontSize: 10, offset: 7, color: "black" }
        },
        title: { text: "tip", fontSize: 11, fontWeight: 700, color: "black" }
      }
    })
    .createGuides({
      axes: false,
      grid: false,
      legend: {
        channels: ["color"],
        title: "time",
        symbol: { layers: [{ type: "swatch", width: 10, height: 10, stroke: "none" }] },
        labels: { fontSize: 10, color: "black" },
        titleStyle: { fontSize: 11, fontWeight: 700, color: "black" }
      }
    });
}