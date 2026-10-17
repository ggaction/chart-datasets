// DOCS: doc-e790db38fc2a278a, doc-2bd5de4bd99e314a
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({ width: 278, height: 267, margin: { left: 33, top: 30, right: 45, bottom: 37 } })
    .createData({ values: data })
    .createScatterPlot({
      x: { field: "x", fieldType: "quantitative" },
      y: { field: "y", fieldType: "quantitative" },
      guides: false
    })
    .encodeColor({ field: "cat", fieldType: "nominal", palette: "tableau10" })
    .encodePointRadius({ value: 22.360679774997898 })
    .editPointMark({ stroke: "black", strokeWidth: 2, opacity: 0.7 })
    .editXScale({ domain: [0, 40] })
    .editYScale({ domain: [0, 4] })
    .createAxes({
      x: {
        line: {},
        ticksAndLabels: { count: 5, labels: { fontSize: 10, offset: 7 } },
        title: { text: "x", fontSize: 11, fontWeight: 700, offset: 28 }
      },
      y: {
        line: {},
        ticksAndLabels: { count: 5, labels: { fontSize: 10, offset: 7 } }
      }
    })
    .createGrid({
      horizontal: { color: "#ddd", lineWidth: 1 },
      vertical: { color: "#ddd", lineWidth: 1 }
    })
    .createLegend({
      labels: { fontSize: 10 },
      titleStyle: { fontSize: 11, fontWeight: 700 }
    })
  .editYAxis({
    title: { offset: 19.5146484375 },
    ticksAndLabels: { labels: { offset: 6.5 } }
  });
}