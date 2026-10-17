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
      x: { field: "n_neighbors", fieldType: "quantitative", scale: { domain: [0, 50] } },
      y: { field: "accuracy", fieldType: "quantitative", scale: { domain: [0.67, 1] } },
      guides: false
    })
    .encodeColor({ field: "score_type", fieldType: "nominal", scale: { domain: ["mean_cv_score", "mean_train_score"], range: ["#4c78a8", "#f58518"] } })
    .editLineMark({ strokeWidth: 2 })
    .createAxes({
      x: {
        line: { color: "#888" },
        ticksAndLabels: {
          values: [0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50],
          ticks: { color: "#888" },
          labels: { fontSize: 10, fontFamily: "sans-serif", color: "black", offset: 7 }
        },
        title: { text: "n_neighbors", fontSize: 11, fontWeight: 700, fontFamily: "sans-serif", color: "black", offset: 30 }
      },
      y: {
        line: { color: "#888" },
        ticksAndLabels: {
          values: [0.7, 0.75, 0.8, 0.85, 0.9, 0.95, 1],
          ticks: { color: "#888" },
          labels: { fontSize: 10, fontFamily: "sans-serif", color: "black", offset: 7, format: ".2f" }
        },
        title: { text: "accuracy", fontSize: 11, fontWeight: 700, fontFamily: "sans-serif", color: "black", offset: 36 }
      }
    })
    .createGuides({
      axes: false,
      grid: { horizontal: { color: "#ddd", lineWidth: 1 }, vertical: { color: "#ddd", lineWidth: 1 } },
      legend: {
        channels: ["color"],
        title: "score_type",
        symbol: { length: 12, lineWidth: 2 },
        titleStyle: { fontSize: 11, fontWeight: 700, fontFamily: "sans-serif", color: "black" },
        labels: { fontSize: 10, fontFamily: "sans-serif", color: "black", offset: 3 }
      }
    })
    .createTitle({
      text: "Accuracies of n_neighbors for KNeighborsClassifier",
      offset: -13,
      titleStyle: { fontSize: 13, fontWeight: 700, fontFamily: "sans-serif", color: "black" }
    })
    .editTitle({ align: "center" });
}