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
      x: { field: "Accuracy", fieldType: "quantitative" },
      y: { field: "Experiment", fieldType: "nominal" }
    })
    .editXScale({ domain: [0, 1] })
    .editYScale({ paddingInner: 0.1, paddingOuter: 0.05 })
    .encodeBarWidth({ band: 1 })
    .createXAxis({
      line: {},
      ticksAndLabels: {
        count: 21,
        labels: { fontSize: 10, offset: 7, flush: true }
      },
      title: { text: "Accuracy", fontSize: 11, offset: 28 }
    })
    .createYAxis({
      line: {},
      ticksAndLabels: {
        labels: { fontSize: 10, offset: 7 }
      },
      title: { text: "Experiment", fontSize: 11, offset: 66 }
    })
    .editXAxisLabels({ format: ".2f" })
    .editXAxisTitle({ fontWeight: 700 })
    .editYAxisTitle({ fontWeight: 700 })
    .createGrid({ horizontal: false, vertical: true })
    .editVerticalGrid({ color: "#ddd", lineWidth: 1 });
}