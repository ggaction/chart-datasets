import { chart } from "ggaction";
import data from "./data.json";
// DOCS: doc-e790db38fc2a278a, doc-2bd5de4bd99e314a, doc-7f2c254224fc4908, doc-2e6240c00cb297cc

export function buildChart() {
  return chart()
    .createCanvas({
      width: 776,
      height: 621,
      margin: { left: 39, top: 60, right: 437, bottom: 261 }
    })
    .createData({ values: data })
    .filterData({ id: "validHp", field: "Horsepower", predicate: { op: "gte", value: 0 } })
    .filterData({ id: "validMpg", field: "Miles_per_Gallon", predicate: { op: "gte", value: 0 } })
    .createScatterPlot({
      x: { field: "Horsepower", fieldType: "quantitative" },
      y: { field: "Miles_per_Gallon", fieldType: "quantitative" },
      guides: false
    })
    .editXScale({ domain: [0, 240] })
    .editYScale({ domain: [0, 50] })
    .encodeColor({ field: "Origin" })
    .editColorScale({ domain: ["Europe", "Japan", "USA"], range: ["#4c78a8", "#f58518", "#e45756"] })
    .encodeSize({ field: "Horsepower", fieldType: "quantitative" })
    .editSizeScale({ domain: [0, 230], range: [4 * Math.PI / 4, 361 * Math.PI / 4] })
    .editPointMark({ stroke: false })    .encodeOpacity({ field: "Weight_in_lbs", fieldType: "quantitative" })
    .editOpacityScale({ domain: [1613, 5140], range: [0.3, 0.8] })
    .createGrid({
      horizontal: { values: [0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50] },
      vertical: { values: [0, 20, 40, 60, 80, 100, 120, 140, 160, 180, 200, 220, 240] }
    })
    .editGrid({ horizontal: { color: "#ddd", lineWidth: 1 }, vertical: { color: "#ddd", lineWidth: 1 } })
    .createXAxis({
      line: {},
      ticksAndLabels: {
        values: [0, 20, 40, 60, 80, 100, 120, 140, 160, 180, 200, 220, 240],
        ticks: { length: 5 },
        labels: { fontSize: 10, offset: 7, flush: true, labelMap: [ { value: 0, label: "0" }, { value: 20, label: "" }, { value: 40, label: "40" }, { value: 60, label: "" }, { value: 80, label: "80" }, { value: 100, label: "" }, { value: 120, label: "120" }, { value: 140, label: "" }, { value: 160, label: "160" }, { value: 180, label: "" }, { value: 200, label: "200" }, { value: 220, label: "" }, { value: 240, label: "240" } ] }
      },
      title: { text: "Horsepower", fontSize: 11, offset: 31 }
    })
    .editXAxis({ line: { color: "#888" }, ticksAndLabels: { ticks: { color: "#888" }, labels: { fontFamily: "sans-serif" } }, title: { fontWeight: 700, fontFamily: "sans-serif" } })
    .createYAxis({
      line: {},
      ticksAndLabels: {
        values: [0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50],
        ticks: { length: 5 },
        labels: { fontSize: 10, offset: 7 }
      },
      title: { text: "Miles_per_Gallon", fontSize: 11, offset: 28 }
    })
    .editYAxis({ line: { color: "#888" }, ticksAndLabels: { ticks: { color: "#888" }, labels: { fontFamily: "sans-serif" } }, title: { fontWeight: 700, fontFamily: "sans-serif" } })
    .createLegend({
      channels: ["color", "size"],
      labels: { fontSize: 10 },
      titleStyle: { fontSize: 11, fontWeight: 700 }
    })
    .createLegend({
      channels: ["opacity"],
      labels: { fontSize: 10, format: ",.0f" },
      titleStyle: { fontSize: 11, fontWeight: 700 }
    })
    .editLegendSymbols({
      symbol: { layers: [{ type: "point", size: 5, stroke: "transparent" }] }
    })
    .editLegendBlock({
      target: "scatterPlot",
      channel: "size",
      values: [0, 50, 100, 150, 200]
    })
    .editLegendBlock({
      target: "scatterPlot",
      channel: "opacity",
      values: [2000, 2500, 3000, 3500, 4000, 4500, 5000]
    })
    .editLegendBlock({
      target: "scatterPlot",
      channel: "color",
      symbol: { size: 25 * Math.PI, stroke: "transparent", opacity: 0.7 }
    })
    .editLegendBlock({
      target: "scatterPlot",
      channel: "size",
      symbol: { fill: "rgba(0,0,0,.7)", stroke: "transparent", strokeWidth: 0, opacity: 0.7 }
    })
    .editLegendBlock({
      target: "scatterPlot",
      channel: "opacity",
      symbol: { size: 25 * Math.PI, fill: "rgba(0,0,0,.7)", stroke: "transparent", strokeWidth: 0 }
    })
    .editCanvas({ width: 996, height: 624, margin: { left: 39, right: 657, top: 63, bottom: 261 } })
    .editLegendLayout({ position: "top", blockLayout: "row", align: "left" })
    .editCanvas({ width: 996, height: 400, margin: { left: 39, top: 63, right: 657, bottom: 37 } });
}
