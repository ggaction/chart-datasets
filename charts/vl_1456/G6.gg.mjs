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
      x: { field: "depth", fieldType: "quantitative" },
      y: { field: "accuracy", fieldType: "quantitative" },
      guides: false
    })
    .editXScale({ domain: [0, 20], zero: false, nice: false })
    .editYScale({ domain: [0, 1], zero: false, nice: false })
    .encodeColor({
      field: "score_type",
      fieldType: "nominal"
    })
    .editColorScale({ domain: ["mean_train_score", "mean_cv_score"], range: ["teal", "gold"] })
    .editLineMark({ strokeWidth: 2 })
    .createXAxis({
      line: {},
      ticksAndLabels: {
        values: [0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20],
        ticks: { length: 5 },
        labels: { fontSize: 10, offset: 7 }
      },
      title: { text: "Tree Depth", fontSize: 11, offset: 28 }
    })
    .editXAxisLine({ color: "#888", lineWidth: 1 })
    .editXAxisTicks({ color: "#888", lineWidth: 1 })
    .editXAxisLabels({ fontFamily: "sans-serif" })
    .editXAxisTitle({ fontWeight: 700, fontFamily: "sans-serif" })
    .createYAxis({
      line: {},
      ticksAndLabels: {
        values: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1],
        ticks: { length: 5 },
        labels: { fontSize: 10, offset: 7 }
      },
      title: { text: "accuracy", fontSize: 11, offset: 33 }
    })
    .editYAxisLine({ color: "#888", lineWidth: 1 })
    .editYAxisTicks({ color: "#888", lineWidth: 1 })
    .editYAxisLabels({ fontFamily: "sans-serif" })
    .editYAxisTitle({ fontWeight: 700, fontFamily: "sans-serif" })
    .createGrid({ horizontal: {}, vertical: {} })
    .editHorizontalGrid({ color: "#ddd" })
    .editVerticalGrid({ color: "#ddd" })
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