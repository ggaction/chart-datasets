// DOCS: doc-e790db38fc2a278a, doc-76573a465e2b6a33, doc-00859dfc99a640de
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({ width: 650, height: 547, margin: { left: 44, top: 10, right: 6, bottom: 37 } })
    .createData({ values: data })
    .createScatterPlot({
      x: { field: "TSNE 1", fieldType: "quantitative" },
      y: { field: "TSNE 2", fieldType: "quantitative" },
      guides: false
    })
    .editXScale({ domain: [-40, 40], zero: false })
    .editYScale({ domain: [-30, 25], zero: false })
    .encodePointRadius({ value: 2.23606797749979 })
    .editPointMark({ fill: "#4c78a8", opacity: 0.8 })
    .createGrid({ horizontal: { color: "#ddd", lineWidth: 1 }, vertical: { color: "#ddd", lineWidth: 1 } })
    .createXAxis({
      ticksAndLabels: {
        values: [-40, -35, -30, -25, -20, -15, -10, -5, 0, 5, 10, 15, 20, 25, 30, 35, 40],
        ticks: { length: 5 },
        labels: { fontSize: 10, offset: 7, flush: true }
      },
      title: { text: "TSNE 1", fontSize: 11, offset: 28 }
    })
    .editXAxisLine({ color: "#888", lineWidth: 1 })
    .editXAxisTicks({ color: "#888" })
    .editXAxisTitle({ color: "#334155" })
    .createYAxis({
      ticksAndLabels: {
        values: [-30, -25, -20, -15, -10, -5, 0, 5, 10, 15, 20, 25],
        ticks: { length: 5 },
        labels: { fontSize: 10, offset: 7 }
      },
      title: { text: "TSNE 2", fontSize: 11, offset: 33 }
    })
    .editYAxisLine({ color: "#888", lineWidth: 1 })
    .editYAxisTicks({ color: "#888" })
    .editYAxisTitle({ color: "#334155" });
}