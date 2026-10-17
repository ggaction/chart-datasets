import { chart } from "ggaction";
import data from "./data.json";

// DOCS: doc-b11b4627b143730d doc-c2eafbbd16fe3c71 doc-a929fd81abd909f8
export function buildChart() {
  return chart()
    .createCanvas({
      width: 561,
      height: 347,
      margin: { left: 41, top: 10, right: 120, bottom: 37 }
    })
    .createData({ values: data })
    .createLinePlot({
      x: { field: "depth", fieldType: "quantitative", scale: { domain: [0, 20], zero: false, nice: false } },
      y: { field: "accuracy", fieldType: "quantitative", scale: { domain: [0, 1], zero: false, nice: false } },
      guides: false
    })
    .encodeColor({
      field: "score_type",
      fieldType: "nominal",
      scale: { domain: ["mean_train_score", "mean_cv_score"], range: ["teal", "gold"] }
    })
    .editLineMark({ strokeWidth: 2 })
    .createAxes({
      x: {
        line: { color: "#888", lineWidth: 1 },
        ticksAndLabels: {
          values: [0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20],
          ticks: { length: 5, color: "#888", lineWidth: 1 },
          labels: { fontSize: 10, fontFamily: "sans-serif", offset: 7 }
        },
        title: { text: "Tree Depth", fontSize: 11, fontWeight: 700, fontFamily: "sans-serif", offset: 28 }
      },
      y: {
        line: { color: "#888", lineWidth: 1 },
        ticksAndLabels: {
          values: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1],
          ticks: { length: 5, color: "#888", lineWidth: 1 },
          labels: { fontSize: 10, fontFamily: "sans-serif", offset: 7 }
        },
        title: { text: "accuracy", fontSize: 11, fontWeight: 700, fontFamily: "sans-serif", offset: 33 }
      }
    })
    .createGrid({ horizontal: { color: "#ddd" }, vertical: { color: "#ddd" } })
    .createGuides({
      axes: false,
      grid: false,
      legend: {
        titleStyle: { fontSize: 11, fontWeight: 700, fontFamily: "sans-serif" },
        labels: { fontSize: 10, fontFamily: "sans-serif" },
        symbol: { length: 15, lineWidth: 2 }
      }
    });
}