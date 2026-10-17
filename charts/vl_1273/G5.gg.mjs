// DOCS: doc-e790db38fc2a278a, doc-2e6240c00cb297cc, doc-76573a465e2b6a33
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({
      width: 700,
      height: 702,
      margin: { left: 94, top: 17, right: 6, bottom: 85 }
    })
    .createData({ values: data })
    .createScatterPlot({
      x: {
        field: "x",
        fieldType: "quantitative"
      },
      y: {
        field: "y",
        fieldType: "quantitative"
      },
      guides: false
    })
    .editXScale({ domain: [0, 100], nice: false, zero: false })
    .editYScale({ domain: [0, 100], nice: false, zero: false })
    .encodeStroke({ value: "#1b9e77" })
    .editPointMark({ fill: "none", strokeWidth: 4 })
    .encodeOpacity({ value: 0.7 })
    .encodePointRadius({ value: Math.sqrt(90) / 2 })
    .createXAxis({
      line: {},
      ticksAndLabels: {
        values: [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100],
        ticks: {},
        labels: { fontSize: 24, offset: 7, flush: true }
      },
      title: { text: "x", fontSize: 36, fontWeight: 700, offset: 63.5 }
    })
    .createYAxis({
      line: {},
      ticksAndLabels: {
        values: [0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100],
        ticks: {},
        labels: { fontSize: 24, offset: 7 }
      },
      title: { text: "y", fontSize: 36, fontWeight: 700, offset: 58.5 }
    })
    .createGrid({ horizontal: { color: "#ddd", lineWidth: 1 }, vertical: { color: "#ddd", lineWidth: 1 } });
}
