// DOCS: doc-e790db38fc2a278a, doc-48c72317a1a99e17
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({
      width: 650,
      height: 547,
      margin: { left: 44, top: 10, right: 6, bottom: 37 }
    })
    .createData({ values: data })
    .createScatterPlot({
      x: { field: "TSNE 1", fieldType: "quantitative" },
      y: { field: "TSNE 2", fieldType: "quantitative" },
      guides: false
    })
    .editXScale({ domain: [-40, 50], zero: false })
    .editYScale({ domain: [-50, 40], zero: false })
    .encodePointRadius({ value: 2.2361 })
    .editPointMark({ fill: "#4c78a8" })
    .encodeOpacity({ value: 0.8 })
    .createGrid({ horizontal: { color: "#ddd" }, vertical: { color: "#ddd" } })
    .createXAxis({
      line: { color: "#888" },
      ticksAndLabels: {
        ticks: { color: "#888", length: 5 },
        labels: { fontSize: 10, offset: 7, flush: true },
        values: [-40, -35, -30, -25, -20, -15, -10, -5, 0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50]
      },
      title: { text: "TSNE 1", fontSize: 11, fontWeight: 700, offset: 28 }
    })
    .createYAxis({
      line: { color: "#888" },
      ticksAndLabels: {
        ticks: { color: "#888", length: 5 },
        labels: { fontSize: 10, offset: 7 },
        values: [-50, -45, -40, -35, -30, -25, -20, -15, -10, -5, 0, 5, 10, 15, 20, 25, 30, 35, 40]
      },
      title: { text: "TSNE 2", fontSize: 11, fontWeight: 700, offset: 28 }
    });
}