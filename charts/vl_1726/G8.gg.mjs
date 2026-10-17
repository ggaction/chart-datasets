import { chart } from "ggaction";
import data from "./data.json";

// DOCS: doc-e790db38fc2a278a, doc-76573a465e2b6a33, doc-2e6240c00cb297cc
export function buildChart() {
  return chart()
    .createCanvas({
      width: 776,
      height: 571,
      margin: { left: 39, top: 10, right: 437, bottom: 261 }
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
    .encodeColor({
      field: "Origin"
    })
    .editColorScale({ domain: ["Europe", "Japan", "USA"], range: ["#4c78a8", "#f58518", "#e45756"] })
    .encodeSize({
      field: "Horsepower",
      fieldType: "quantitative"
    })
    .editSizeScale({ domain: [0, 230], range: [Math.PI, 361 * Math.PI / 4] })
    .encodeOpacity({
      field: "Weight_in_lbs",
      fieldType: "quantitative"
    })
    .editOpacityScale({ domain: [1613, 5140], range: [0.3, 0.8] })
    .createXAxis({
      line: {},
      ticksAndLabels: {
        values: [0, 40, 80, 120, 160, 200, 240],
        ticks: { length: 5 },
        labels: { fontSize: 10, offset: 7, flush: true }
      },
      title: { text: "Horsepower", fontSize: 11, offset: 31 }
    })
    .editXAxisLine({ color: "#888" })
    .editXAxisTicks({ color: "#888" })
    .editXAxisLabels({ color: "black" })
    .editXAxisTitle({ fontWeight: 700 })
    .createYAxis({
      line: {},
      ticksAndLabels: {
        values: [0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50],
        ticks: { length: 5 },
        labels: { fontSize: 10, offset: 7 }
      },
      title: { text: "Miles_per_Gallon", fontSize: 11, offset: 28 }
    })
    .editYAxisLine({ color: "#888" })
    .editYAxisTicks({ color: "#888" })
    .editYAxisLabels({ color: "black" })
    .editYAxisTitle({ fontWeight: 700 })
    .createHorizontalGrid({ color: "#ddd", lineWidth: 1 })
    .createVerticalGrid({ color: "#ddd", lineWidth: 1 })
    .createLegend({
      channels: ["color", "size"],
      labels: { fontSize: 10 },
      titleStyle: { fontSize: 11 }
    })
    .editLegendTitle({ fontWeight: 700 })
    .createLegend({
      channels: ["opacity"],
      labels: { fontSize: 10, format: ",.0f" },
      titleStyle: { fontSize: 11, fontWeight: 700 }
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
    .editCanvas({
      width: 1009,
      height: 571,
      margin: { left: 39, right: 670, top: 10, bottom: 261 }
    })
    .editLegendLayout({
      position: "bottom",
      blockLayout: "row",
      align: "left",
      offset: 49
    })
    .editCanvas({
      width: 1009,
      height: 420,
      margin: { left: 39, top: 10, right: 670, bottom: 110 }
    });
}