// DOCS: doc-6c2c08869091f6a0, doc-fc11e9fb291905d1, doc-5f9c35fbf79658cc
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({ width: 179, height: 253, margin: { left: 39, top: 5, right: 60, bottom: 48 } })
    .createData({ values: data })
    .createSummaryData({
      id: "dayStats",
      groupBy: ["day"],
      aggregates: [
        { field: "total_bill", op: "min", as: "min_total_bill" },
        { field: "total_bill", op: "q1", as: "q1_total_bill" },
        { field: "total_bill", op: "median", as: "median_total_bill" },
        { field: "total_bill", op: "q3", as: "q3_total_bill" },
        { field: "total_bill", op: "max", as: "max_total_bill" }
      ]
    })
    .createRuleMark({ id: "rangeRule", stroke: "black", strokeWidth: 1 })
    .encodeX({ field: "day", fieldType: "nominal", scale: { type: "band", domain: ["Fri", "Sat", "Sun", "Thur"], paddingInner: 0, paddingOuter: 0 } })
    .encodeYRange({ lower: "min_total_bill", upper: "max_total_bill", target: "rangeRule" })
    .createBarPlot({ x: "day", y: { lower: "q1_total_bill", upper: "q3_total_bill" }, guides: false })
    .encodeColor({ field: "day", layout: "overlay" })
    .encodeBarWidth({ pixels: 20 })
    .editYScale({ domain: [0, 55], nice: false })
    .editColorScale({ domain: ["Fri", "Sat", "Sun", "Thur"], range: ["rgba(49,115,161,1)", "rgba(224,128,44,1)", "rgba(58,145,58,1)", "rgba(192,60,61,1)", "rgba(147,113,178,1)", "rgba(131,91,83,1)", "rgba(213,132,188,1)", "rgba(127,127,127,1)", "rgba(168,169,53,1)", "rgba(45,171,184,1)"] })
    .editBarMark({ stroke: false })
    .createTickMark({ length: 18, stroke: "black", strokeWidth: 1 })
    .encodeX({ field: "day", fieldType: "nominal" })
    .encodeY({ field: "median_total_bill" })
    .encodeAngle({ value: 90 })
    .createGrid({ horizontal: { values: [0, 10, 20, 30, 40, 50] }, vertical: false })
    .editHorizontalGrid({ color: "#ddd" })
    .createXAxis({
      line: {},
      ticksAndLabels: {
        values: ["Fri", "Sat", "Sun", "Thur"],
        ticks: { length: 5 },
        labels: { fontSize: 10, offset: 7, rotation: { value: -90, unit: "degrees" } }
      },
      title: { text: "day", fontSize: 11 }
    })
    .createYAxis({
      line: {},
      ticksAndLabels: {
        values: [0, 10, 20, 30, 40, 50],
        ticks: { length: 5 },
        labels: { fontSize: 10, offset: 7 }
      },
      title: { text: "total_bill", fontSize: 11 }
    })
    .editXAxis({ line: { color: "#888" }, ticksAndLabels: { ticks: { color: "#888" }, labels: { color: "black" } }, title: { color: "black", fontWeight: 700 } })
    .editYAxis({ line: { color: "#888" }, ticksAndLabels: { ticks: { color: "#888" }, labels: { color: "black" } }, title: { color: "black", fontWeight: 700 } })
    .createLegend({
      title: "day",
      titleStyle: { fontSize: 11, fontWeight: 700, color: "black" },
      labels: { fontSize: 10, color: "black" }
    })
    .editLegendSymbols({ symbol: { layers: [{ type: "swatch", width: 10, height: 10 }] } });
}