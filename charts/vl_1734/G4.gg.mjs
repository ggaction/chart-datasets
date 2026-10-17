import { chart } from "ggaction";
import data from "./data.json";
// DOCS: doc-e790db38fc2a278a, doc-2bd5de4bd99e314a
export function buildChart() {
  return chart()
    .createCanvas({
      width: 311,
      height: 249,
      margin: { left: 39, top: 12, right: 72, bottom: 37 }
    })
    .createData({ values: data })
    .filterData({
      id: "cars1970",
      field: "Year",
      predicate: { op: "eq", value: "1970-01-01" }
    })
    .filterData({ id: "validHp", field: "Horsepower", predicate: { op: "gte", value: 0 } })
    .filterData({ id: "validMpg", field: "Miles_per_Gallon", predicate: { op: "gte", value: 0 } })
    .createScatterPlot({ x: "Horsepower", y: "Miles_per_Gallon", guides: false })
    .editXScale({ domain: [0, 240] })
    .editYScale({ domain: [0, 28] })
    .encodeColor({ field: "Origin" })
    .editColorScale({ domain: ["Europe", "Japan", "USA"], palette: "tableau10" })
    .editPointMark({ shape: "square" })
    .encodePointRadius({ value: Math.sqrt(750 / Math.PI) })
    .encodeOpacity({ value: 0.6 })
    .createXAxis({
      line: {},
      ticksAndLabels: {
        values: [0, 50, 100, 150, 200],
        ticks: { length: 5 },
        labels: { fontSize: 10, offset: 7 }
      },
      title: { text: "Horsepower", fontSize: 11, offset: 28 }
    })
    .createYAxis({
      line: {},
      ticksAndLabels: {
        values: [0, 5, 10, 15, 20, 25],
        ticks: { length: 5 },
        labels: { fontSize: 10, offset: 7 }
      },
      title: { text: "Miles_per_Gallon", fontSize: 11, offset: 28 }
    })
    .editXAxisTitle({ fontWeight: 700 })
    .editYAxisTitle({ fontWeight: 700 })
    .createGrid({
      horizontal: { scale: "y", values: [0, 5, 10, 15, 20, 25] },
      vertical: { scale: "x", values: [0, 50, 100, 150, 200] }
    })
    .editGrid({ horizontal: { color: "#ddd" }, vertical: { color: "#ddd" } })
    .createLegend({ position: "right", channels: ["color"] })
    .editLegendTitle({ title: "Origin", fontSize: 11, fontWeight: 700 })
    .editLegendLabels({ fontSize: 10 });
}