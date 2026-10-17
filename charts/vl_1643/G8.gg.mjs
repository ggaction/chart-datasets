// DOCS: doc-b11b4627b143730d, doc-76573a465e2b6a33, doc-8a4f6f06e0d37d5e, doc-5134693c6a279d8c, doc-3f9dd1bf375cdb54
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({
      width: 303,
      height: 247,
      margin: { left: 44, top: 10, right: 59, bottom: 37 }
    })
    .createData({ id: "src", values: data })
    .createCompleteData({ id: "imputed", key: "a", groupBy: "c" })
    .editCompleteData({ target: "imputed", fill: { b: 0 } })
    .createLinePlot({
      x: { field: "a", fieldType: "quantitative" },
      y: { field: "b", fieldType: "quantitative" },
      guides: false
    })
    .editXScale({ domain: [0, 5], nice: true })
    .editYScale({ domain: [0, 100], zero: true })
    .encodeColor({ field: "c", fieldType: "nominal" })
    .editColorScale({
      domain: [0, 1],
      range: ["#4c78a8", "#f58518", "#e45756", "#72b7b2", "#54a24b", "#eeca3b", "#b279a2", "#ff9da6", "#9d755d", "#bab0ac"]
    })
    .editLineMark({ strokeWidth: 2 })
    .createXAxis({
      title: { text: "a", fontSize: 11, offset: 31 },
      ticksAndLabels: { ticks: { length: 5 }, labels: { fontSize: 10, fontFamily: "sans-serif", offset: 7 } },
      line: {}
    })
    .createYAxis({
      title: { text: "b", fontSize: 11, offset: 35 },
      ticksAndLabels: { ticks: { length: 5 }, labels: { fontSize: 10, fontFamily: "sans-serif", offset: 7 } },
      line: {}
    })
    .editXAxisLine({ color: "#888" })
    .editXAxisTicksAndLabels({ ticks: { color: "#888" }, labels: { color: "black" } })
    .editXAxisTitle({ color: "black", fontWeight: 700 })
    .editYAxisLine({ color: "#888" })
    .editYAxisTicksAndLabels({ ticks: { color: "#888" }, labels: { color: "black" } })
    .editYAxisTitle({ color: "black", fontWeight: 700 })
    .createGrid({ horizontal: { color: "#ddd" }, vertical: { color: "#ddd" } })
    .createLegend({
      symbol: { layers: [{ type: "line", lineWidth: 2 }] },
      titleStyle: { fontSize: 11, fontFamily: "sans-serif" },
      labels: { fontSize: 10, fontFamily: "sans-serif" }
    })
    .editLegendTitle({ color: "black", fontWeight: 700 })
    .editLegendLabels({ color: "black" });
}