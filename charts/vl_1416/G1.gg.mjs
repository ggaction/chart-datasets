import { chart } from "ggaction";
import data from "./data.json";

// DOCS: doc-6c2c08869091f6a0, doc-bedf05337affd6f4, doc-fc11e9fb291905d1, doc-8a4f6f06e0d37d5e

export function buildChart() {
  return chart()
    .createCanvas({ width: 786, height: 442, margin: { left: 80, top: 5, right: 6, bottom: 37 } })
    .createData({ values: data })
    .createSortedData({ id: "sorted", sortBy: [{ field: "Accuracy", order: "ascending" }] })
    .createBarPlot({
      guides: false,
      x: { field: "Accuracy", fieldType: "quantitative", scale: { domain: [0, 1] } },
      y: { field: "Experiment", fieldType: "nominal", scale: { paddingInner: 0.1, paddingOuter: 0.05 } }
    })
    .encodeBarWidth({ band: 1 })
    .createAxes({
      x: {
        line: {},
        ticksAndLabels: {
          count: 21,
          labels: { format: ".2f", fontSize: 10, offset: 7, flush: true }
        },
        title: { text: "Accuracy", fontSize: 11, fontWeight: 700, offset: 28 }
      },
      y: {
        line: {},
        ticksAndLabels: {
          labels: { fontSize: 10, offset: 7 }
        },
        title: { text: "Experiment", fontSize: 11, fontWeight: 700, offset: 66 }
      }
    })
    .createGrid({ horizontal: false, vertical: { color: "#ddd", lineWidth: 1 } });
}