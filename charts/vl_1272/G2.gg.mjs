// DOCS: doc-e790db38fc2a278a doc-2bd5de4bd99e314a doc-e8d8c6aef74192f0
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({
      width: 700,
      height: 700,
      margin: { left: 94, top: 17, right: 6, bottom: 83 }
    })
    .createData({ values: data })
    .createScatterPlot({ x: { field: "x" }, y: { field: "y" }, guides: false })
    .editXScale({ domain: [0, 100] })
    .editYScale({ domain: [0, 100] })
    .encodeStroke({ value: "#1b9e77" })
    .editPointMark({ fill: "none", strokeWidth: 4 })
    .encodeOpacity({ value: 0.7 })
    .encodePointRadius({ value: 4.7434 })
    .createGrid({ horizontal: true, vertical: true })
    .editHorizontalGrid({ color: "#ddd", lineWidth: 1 })
    .editVerticalGrid({ color: "#ddd", lineWidth: 1 })
    .createXAxis({
      line: { color: "#888" },
      ticksAndLabels: {
        values: [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100],
        ticks: { length: 5, color: "#888" },
        labels: { fontSize: 24, offset: 7, flush: true }
      },
      title: { text: "x", fontSize: 36, fontWeight: 700, offset: 62 }
    })
    .createYAxis({
      line: { color: "#888" },
      ticksAndLabels: {
        values: [0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100],
        ticks: { length: 5, color: "#888" },
        labels: { fontSize: 24, offset: 7 }
      },
      title: { text: "y", fontSize: 36, fontWeight: 700, offset: 71 }
    });
}