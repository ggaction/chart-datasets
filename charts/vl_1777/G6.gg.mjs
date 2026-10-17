// DOCS: doc-b11b4627b143730d, doc-9bb354f4e2d46693, doc-76573a465e2b6a33
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({
      width: 303,
      height: 247,
      margin: { left: 44, top: 10, right: 59, bottom: 37 }
    })
    .createData({ values: data })
    .createCompleteData({
      id: "imputed",
      key: "A",
      groupBy: "C"
    })
    .createWindowData({
      id: "windowed",
      partitionBy: "C",
      operations: [
        {
          op: "movingMean",
          field: "B",
          as: "b_moving_mean",
          frame: { preceding: 2, following: 2 },
          missing: "skip"
        }
      ]
    })
    .createComputedData({
      id: "plotData",
      as: "imputed_b_value",
      expression: {
        op: "coalesce",
        operands: [{ field: "B" }, { field: "b_moving_mean" }]
      }
    })
    .createLinePlot({
      x: { field: "A", fieldType: "quantitative" },
      y: { field: "imputed_b_value", fieldType: "quantitative" },
      guides: false
    })
    .editXScale({ domain: [0, 3] })
    .editYScale({ domain: [0, 100] })
    .encodeColor({ field: "C", fieldType: "nominal" })
    .editColorScale({
      domain: [0, 1],
      range: ["#4c78a8", "#f58518", "#e45756", "#72b7b2", "#54a24b", "#eeca3b", "#b279a2", "#ff9da6", "#9d755d", "#bab0ac"]
    })
    .encodeStrokeDash({ value: [5, 10, 5, 5, 10, 5] })
    .editLineMark({ strokeWidth: 2, opacity: 0.5 })
    .createXAxis({
      line: {},
      ticksAndLabels: {
        values: [0, 0.5, 1, 1.5, 2, 2.5, 3],
        ticks: {},
        labels: { offset: 7, fontSize: 10, format: ".1f" }
      },
      title: { text: "a", fontSize: 11, offset: 31 }
    })
    .editXAxis({
      ticksAndLabels: { labels: { fontFamily: "sans-serif" } },
      title: { fontWeight: 700 }
    })
    .createYAxis({
      line: {},
      ticksAndLabels: {
        values: [0, 20, 40, 60, 80, 100],
        ticks: {},
        labels: { offset: 7, fontSize: 10 }
      },
      title: { text: "b", fontSize: 11, offset: 28 }
    })
    .editYAxis({
      ticksAndLabels: { labels: { fontFamily: "sans-serif" } },
      title: { fontWeight: 700 }
    })
    .createGrid({
      horizontal: true,
      vertical: true
    })
    .editGrid({
      horizontal: { color: "#ddd", lineWidth: 1 },
      vertical: { color: "#ddd", lineWidth: 1 }
    })
    .createLegend({
      title: "c",
      labels: { fontSize: 10, fontFamily: "sans-serif" },
      titleStyle: { fontSize: 11, fontWeight: 700 }
    })
    .editLegendSymbols({ symbol: { length: 9, lineWidth: 2 } });
}