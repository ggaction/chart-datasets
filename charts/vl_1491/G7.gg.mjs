// DOCS: doc-efeaafa6e2ebce18 (npm/types/program.d.ts), doc-6ec4a063402ed0e0 (docs/api/box-plots.md), doc-406d8d9a4b70f402 (docs/api/encodings.md)
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createData({ id: "tips", values: data })
    .createSummaryData({
      id: "dayStats",
      groupBy: ["day", "weekend"],
      aggregates: [
        { field: "total_bill", op: "min", as: "min_total_bill" },
        { field: "total_bill", op: "q1", as: "q1_total_bill" },
        { field: "total_bill", op: "median", as: "median_total_bill" },
        { field: "total_bill", op: "q3", as: "q3_total_bill" },
        { field: "total_bill", op: "max", as: "max_total_bill" }
      ]
    })
    .createCanvas({ width: 189, height: 253, margin: { left: 39, top: 5, right: 70, bottom: 48 } })
    .createRuleMark({ id: "rangeRule", stroke: "black", strokeWidth: 1 })
    .encodeX({ field: "day", fieldType: "nominal", scale: { type: "band", domain: ["Fri", "Sat", "Sun", "Thur"], paddingInner: 0, paddingOuter: 0 } })
    .encodeYRange({ lower: "min_total_bill", upper: "max_total_bill" })
    .editYScale({ domain: [0, 55], nice: false })
    .createBarPlot({
      x: "day",
      y: { lower: "q1_total_bill", upper: "q3_total_bill" },
      guides: false
    })
    .encodeColor({ field: "weekend", layout: "overlay" })
    .encodeBarWidth({ pixels: 20 })
    .editColorScale({ target: "barPlot", domain: [false, true], range: ["rgba(49,115,161,1)", "rgba(224,128,44,1)"] })
    .createTickMark({ length: 18, stroke: "black", strokeWidth: 1 })
    .encodeX({ field: "day" })
    .encodeY({ field: "median_total_bill" })
    .encodeAngle({ value: 90 })
    .createGrid({
      horizontal: { scale: "y", values: [0, 10, 20, 30, 40, 50] },
      vertical: false
    })
    .editHorizontalGrid({ color: "#ddd" })
    .createXAxis({
      line: { lineWidth: 1 },
      ticksAndLabels: {
        values: ["Fri", "Sat", "Sun", "Thur"],
        ticks: { length: 5 },
        labels: { fontSize: 10, offset: 7, rotation: { value: -90, unit: "degrees" } }
      },
      title: { text: "day", fontSize: 11 }
    })
    .editXAxisLine({ color: "#888" })
    .editXAxisTicks({ color: "#888" })
    .editXAxisLabels({ color: "black" })
    .editXAxisTitle({ color: "black", fontWeight: 700 })
    .createYAxis({
      line: { lineWidth: 1 },
      ticksAndLabels: {
        values: [0, 10, 20, 30, 40, 50],
        ticks: { length: 5 },
        labels: { fontSize: 10, offset: 7 }
      },
      title: { text: "total_bill", fontSize: 11, rotation: { value: -90, unit: "degrees" } }
    })
    .editYAxisLine({ color: "#888" })
    .editYAxisTicks({ color: "#888" })
    .editYAxisLabels({ color: "black" })
    .editYAxisTitle({ color: "black", fontWeight: 700 })
    .createLegend({
      symbol: { width: 10, height: 10 },
      labels: { fontSize: 10 },
      titleStyle: { fontSize: 11, fontWeight: 700 }
    });
}