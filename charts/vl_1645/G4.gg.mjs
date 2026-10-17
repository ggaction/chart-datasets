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
    .createAxes({
      x: {
        line: {},
        ticksAndLabels: {
          values: [0, 1, 2, 3, 4, 5],
          ticks: { length: 5, color: "#888" },
          labels: { fontSize: 10, fontFamily: "sans-serif", offset: 7 }
        },
        title: { text: "a", fontSize: 11, fontWeight: "bold", offset: 28 }
      },
      y: {
        line: {},
        ticksAndLabels: {
          values: [0, 20, 40, 60, 80, 100],
          ticks: { length: 5, color: "#888" },
          labels: { fontSize: 10, fontFamily: "sans-serif", offset: 7 }
        },
        title: { text: "b", fontSize: 11, fontWeight: "bold", offset: 33 }
      }
    })
    .createGrid({
      vertical: { values: [0, 1, 2, 3, 4, 5] , color: '#ddd'},
      horizontal: { values: [0, 20, 40, 60, 80, 100] , color: '#ddd'}
    })
    .createGuides({
      axes: false,
      grid: false,
      legend: {
        title: "c",
        symbol: { length: 10, lineWidth: 1.5 },
        labels: { fontSize: 10 },
        titleStyle: { fontSize: 11 }
      }
    });
}