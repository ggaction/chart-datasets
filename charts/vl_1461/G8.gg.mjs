// DOCS: doc-dfae58344d5a524e, doc-b11b4627b143730d, doc-76573a465e2b6a33
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({
      width: 667,
      height: 364,
      margin: { left: 47, top: 27, right: 120, bottom: 37 }
    })
    .createData({ values: data })
    .createLinePlot({
      x: { field: "n_neighbors", fieldType: "quantitative" },
      y: { field: "accuracy", fieldType: "quantitative" },
      guides: false
    })
    .encodeColor({ field: "score_type", fieldType: "nominal" })
    .editColorScale({ target: "linePlot", domain: ["mean_cv_score", "mean_train_score"], range: ["#4c78a8", "#f58518"] })
    .editLineMark({ strokeWidth: 2 })
    .editXScale({ domain: [0, 50] })
    .editYScale({ domain: [0.67, 1] })
    .createXAxis({
      line: {},
      ticksAndLabels: {
        values: [0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50],
        ticks: {},
        labels: { fontSize: 10, fontFamily: "sans-serif", offset: 7 }
      },
      title: { text: "n_neighbors", fontSize: 11, fontWeight: 700, fontFamily: "sans-serif", offset: 30 }
    })
    .createYAxis({
      line: {},
      ticksAndLabels: {
        values: [0.7, 0.75, 0.8, 0.85, 0.9, 0.95, 1],
        ticks: {},
        labels: { fontSize: 10, fontFamily: "sans-serif", offset: 7, format: ".2f" }
      },
      title: { text: "accuracy", fontSize: 11, fontWeight: 700, fontFamily: "sans-serif", offset: 36 }
    })
    .editXAxisLine({ color: "#888" })
    .editXAxisTicks({ color: "#888" })
    .editXAxisLabels({ color: "black" })
    .editXAxisTitle({ color: "black" })
    .editYAxisLine({ color: "#888" })
    .editYAxisTicks({ color: "#888" })
    .editYAxisLabels({ color: "black" })
    .editYAxisTitle({ color: "black" })
    .createGrid({
      horizontal: { color: "#ddd", lineWidth: 1 },
      vertical: { color: "#ddd", lineWidth: 1 }
    })
    .createLegend({
      channels: ["color"],
      labels: { fontSize: 10, fontFamily: "sans-serif", color: "black", offset: 3 },
      titleStyle: { fontSize: 11, fontWeight: 700, fontFamily: "sans-serif", color: "black" }
    })
    .editLegendSymbols({
      symbol: { length: 12, lineWidth: 2 }
    })
    .createTitle({
      text: "Accuracies of n_neighbors for KNeighborsClassifier",
      offset: -13,
      titleStyle: { fontSize: 13, fontWeight: 700, fontFamily: "sans-serif", color: "black" }
    })
    .editTitle({ align: "center" });
}