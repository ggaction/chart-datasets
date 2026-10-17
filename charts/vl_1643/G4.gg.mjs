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
    .encodeColor({
      field: "c",
      fieldType: "nominal",
      scale: {
        domain: [0, 1],
        range: ["#4c78a8", "#f58518", "#e45756", "#72b7b2", "#54a24b", "#eeca3b", "#b279a2", "#ff9da6", "#9d755d", "#bab0ac"]
      }
    })
    .editLineMark({ strokeWidth: 2 })
    .createXAxis({
      title: { text: "a", fontSize: 11, fontWeight: 700, color: "black", offset: 31 },
      ticksAndLabels: { ticks: { length: 5, color: "#888" }, labels: { fontSize: 10, fontFamily: "sans-serif", offset: 7, color: "black" } },
      line: { color: "#888" }
    })
    .createYAxis({
      title: { text: "b", fontSize: 11, fontWeight: 700, color: "black", offset: 35 },
      ticksAndLabels: { ticks: { length: 5, color: "#888" }, labels: { fontSize: 10, fontFamily: "sans-serif", offset: 7, color: "black" } },
      line: { color: "#888" }
    })
    .createGrid({ horizontal: { color: "#ddd" }, vertical: { color: "#ddd" } })
    .createLegend({
      symbol: { layers: [{ type: "line", lineWidth: 2 }] },
      titleStyle: { fontSize: 11, fontWeight: 700, color: "black", fontFamily: "sans-serif" },
      labels: { fontSize: 10, fontFamily: "sans-serif", color: "black" }
    });
}