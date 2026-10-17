import { chart } from "ggaction";
import data from "./data.json";

// DOCS: doc-e790db38fc2a278a, doc-bc26da5598d35bae, doc-2e6240c00cb297cc
export function buildChart() {
  return chart()
    .createCanvas({ width: 650, height: 547, margin: { left: 44, top: 10, right: 6, bottom: 37 } })
    .createData({ values: data })
    .createScatterPlot({
      x: { field: "TSNE 1", fieldType: "quantitative", scale: { domain: [-30, 35], zero: false } },
      y: { field: "TSNE 2", fieldType: "quantitative", scale: { domain: [-30, 30], zero: false } },
      guides: false
    })
    .encodePointRadius({ value: 2.236 })
    .encodeOpacity({ value: 0.8 })
    .editPointMark({ fill: "#4c78a8" })
    .createGrid({
      horizontal: { color: "#ddd", values: [-30, -25, -20, -15, -10, -5, 0, 5, 10, 15, 20, 25, 30] },
      vertical: { color: "#ddd", values: [-30, -25, -20, -15, -10, -5, 0, 5, 10, 15, 20, 25, 30, 35] }
    })
    .createXAxis({
      line: {},
      ticksAndLabels: {
        values: [-30, -25, -20, -15, -10, -5, 0, 5, 10, 15, 20, 25, 30, 35],
        ticks: { length: 5, color: "#888" },
        labels: { fontSize: 10, offset: 7, fontFamily: "sans-serif", flush: true }
      },
      title: { text: "TSNE 1", fontSize: 11, fontWeight: 700, offset: 28 }
    })
    .createYAxis({
      line: {},
      ticksAndLabels: {
        values: [-30, -25, -20, -15, -10, -5, 0, 5, 10, 15, 20, 25, 30],
        ticks: { length: 5, color: "#888" },
        labels: { fontSize: 10, offset: 7, fontFamily: "sans-serif" }
      },
      title: { text: "TSNE 2", fontSize: 11, fontWeight: 700, offset: 28 }
    });
}
