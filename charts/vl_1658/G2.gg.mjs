// DOCS: doc-2bd5de4bd99e314a, doc-2e6240c00cb297cc, doc-48c72317a1a99e17
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({
      width: 243,
      height: 267,
      margin: { left: 33, top: 30, right: 10, bottom: 37 }
    })
    .createData({ values: data })
    .createScatterPlot({
      x: { field: "x", fieldType: "quantitative" },
      y: { field: "y", fieldType: "quantitative" },
      guides: false
    })
    .editXScale({ domain: [0, 40] })
    .editYScale({ domain: [0, 4] })
    .encodePointRadius({ value: 22.360679774997898 })
    .editPointMark({ fill: "#4c78a8", stroke: "black", strokeWidth: 2 })
    .editPointMark({ opacity: 0.7 })
    .createGrid({
      horizontal: { color: "#ddd", lineWidth: 1 },
      vertical: { color: "#ddd", lineWidth: 1 }
    })
    .createXAxis({
      ticksAndLabels: { labels: { fontSize: 10, offset: 7 } },
      title: { text: "x", fontSize: 11, fontWeight: 700, offset: 28 }
    })
    .createYAxis({
      ticksAndLabels: { labels: { fontSize: 10, offset: 7 } },
      title: { text: "y", fontSize: 11, fontWeight: 700, offset: 27 }
    })
  .editYAxis({ title: { offset: 20.9833984375 } });
}
