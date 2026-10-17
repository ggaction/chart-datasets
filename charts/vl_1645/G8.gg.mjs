// DOCS: doc-b11b4627b143730d createLinePlot; doc-76573a465e2b6a33 createScatterPlot point;
// DOCS: doc-c2eafbbd16fe3c71 createLinePlot options; createImputedData for encoding.y.impute mean grouped by c.

import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({
      width: 296,
      height: 247,
      margin: { left: 44, top: 10, right: 52, bottom: 37 }
    })
    .createData({ id: "raw", values: data })
    .createCompleteData({ id: "complete", key: "a", groupBy: "c" })
    .createImputedData({
      id: "imputed",
      fields: ["b"],
      groupBy: "c"
    })
    .createLinePlot({
      x: { field: "a", fieldType: "quantitative" },
      y: { field: "b", fieldType: "quantitative" },
      guides: false
    })
    .editYScale({ domain: [0, 100] })
    .editXScale({ domain: [0, 5] })
    .encodeColor({ field: "c", fieldType: "nominal" })
    .editColorScale({
      domain: [0, 1],
      range: ["#4c78a8", "#f58518"]
    })
    .editLineMark({ strokeWidth: 2 })
    .createXAxis({
      line: {},
      ticksAndLabels: {
        values: [0, 1, 2, 3, 4, 5],
        ticks: { length: 5 },
        labels: { fontSize: 10, offset: 7 }
      },
      title: { text: "a", fontSize: 11, offset: 28 }
    })
    .createYAxis({
      line: {},
      ticksAndLabels: {
        values: [0, 20, 40, 60, 80, 100],
        ticks: { length: 5 },
        labels: { fontSize: 10, offset: 7 }
      },
      title: { text: "b", fontSize: 11, offset: 33 }
    })
    .editXAxisTicksAndLabels({
      ticks: { color: "#888" },
      labels: { fontFamily: "sans-serif" }
    })
    .editXAxisTitle({ fontWeight: "bold" })
    .editYAxisTicksAndLabels({
      ticks: { color: "#888" },
      labels: { fontFamily: "sans-serif" }
    })
    .editYAxisTitle({ fontWeight: "bold" })
    .createGrid({
      vertical: { values: [0, 1, 2, 3, 4, 5] , color: '#ddd'},
      horizontal: { values: [0, 20, 40, 60, 80, 100] , color: '#ddd'}
    })
    .createGuides({
      axes: false,
      grid: false,
      legend: {
        title: "c",
        symbol: { length: 10, lineWidth: 1.5 }
      }
    })
    .editLegendLabels({ fontSize: 10 })
    .editLegendTitle({ fontSize: 11 });
}