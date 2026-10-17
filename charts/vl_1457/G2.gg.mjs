// DOCS: doc-b11b4627b143730d, doc-76573a465e2b6a33, doc-f30bfed200b50a98
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({
      width: 580,
      height: 347,
      margin: { top: 10, right: 133, bottom: 37, left: 47 }
    })
    .createData({ values: data })
    .createLinePlot({
      x: { field: "depth", fieldType: "quantitative" },
      y: { field: "accuracy", fieldType: "quantitative" },
      guides: false
    })
    .encodeColor({
      field: "score_type",
      fieldType: "nominal"
    })
    .editXScale({ domain: [0, 20] })
    .editYScale({ domain: [0.8, 1], zero: false })
    .editColorScale({
      domain: ["mean_train_score", "mean_cv_score"],
      range: ["teal", "gold"]
    })
    .editLineMark({ strokeWidth: 2 })
    .createGuides({
      axes: {
        x: {
          line: { color: "#888" },
          ticksAndLabels: {
            values: [0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20],
            ticks: { length: 5, color: "#888" },
            labels: { fontSize: 10, offset: 7, fontFamily: "sans-serif" }
          },
          title: {
            text: "Tree Depth",
            fontSize: 11,
            fontWeight: "bold",
            fontFamily: "sans-serif",
            offset: 26
          }
        },
        y: {
          line: { color: "#888" },
          ticksAndLabels: {
            values: [0.8, 0.82, 0.84, 0.86, 0.88, 0.9, 0.92, 0.94, 0.96, 0.98, 1],
            ticks: { length: 5, color: "#888" },
            labels: { fontSize: 10, offset: 7, fontFamily: "sans-serif", format: ".2f" }
          },
          title: {
            text: "accuracy",
            fontSize: 11,
            fontWeight: "bold",
            fontFamily: "sans-serif",
            offset: 35
          }
        }
      },
      grid: { horizontal: { color: "#ddd" }, vertical: { color: "#ddd" } },
      legend: {
        channels: ["color"],
        position: "right",
        title: "score_type",

        titleStyle: { fontSize: 11, fontWeight: "bold", fontFamily: "sans-serif" },
        labels: { fontSize: 10, fontFamily: "sans-serif" },
        symbol: { layers: [{ type: "line", lineWidth: 2 }] }
      }
    });
}
