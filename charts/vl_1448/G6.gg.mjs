import { chart } from "ggaction";
import data from "./data.json";

// DOCS: doc-e790db38fc2a278a, doc-2e6240c00cb297cc, doc-2fcdfbdfb290e440

export function buildChart() {
  return chart()
    .createCanvas({ width: 650, height: 547, margin: { left: 44, top: 10, right: 6, bottom: 37 } })
    .createData({ values: data })
    .createScatterPlot({
      x: { field: "TSNE 1" },
      y: { field: "TSNE 2" },
      guides: false
    })
    .editXScale({ domain: [-50, 60], zero: false })
    .editYScale({ domain: [-25, 25], zero: false })
    .encodePointRadius({ value: 2.2360679774997896 })
    .editPointMark({ fill: "#4c78a8", opacity: 0.8 })
    .createXAxis({
      ticksAndLabels: {
        values: [-50, -40, -30, -20, -10, 0, 10, 20, 30, 40, 50, 60],
        labels: { fontSize: 10, offset: 7, flush: true }
      },
      title: { text: "TSNE 1", fontSize: 11, offset: 28 }
    })
    .editXAxisLabels({
      color: "black"
    })
    .editXAxisTitle({ color: "black", fontWeight: "bold" })
    .createYAxis({
      ticksAndLabels: {
        values: [-25, -20, -15, -10, -5, 0, 5, 10, 15, 20, 25],
        labels: { fontSize: 10, offset: 7 }
      },
      title: { text: "TSNE 2", fontSize: 11, offset: 35 }
    })
    .editYAxisLabels({
      color: "black"
    })
    .editYAxisTitle({ color: "black", fontWeight: "bold" })
    .createHorizontalGrid({ count: 11, color: "#ddd" })
.createVerticalGrid({ count: 12, color: "#ddd" });
}
