import { chart } from "ggaction";
import data from "./data.json";

// DOCS: doc-e790db38fc2a278a, doc-76573a465e2b6a33
export function buildChart() {
  return chart()
    .createCanvas({ width: 700, height: 692, margin: { left: 94, top: 17, right: 6, bottom: 75 } })
    .createData({ values: data })
    .createScatterPlot({
      x: { field: "x" },
      y: { field: "y" },
      guides: false
    })
    .editXScale({ domain: [0, 90] })
    .editYScale({ domain: [0, 100] })
    .encodeStroke({ value: "#7570b3" })
    .encodeOpacity({ value: 0.7 }).editPointMark({ fill: "none", strokeWidth: 4 })
    .encodePointRadius({ value: 4.743416490252569 })
    .createXAxis({
      line: {},
      ticksAndLabels: {
        values: [0, 10, 20, 30, 40, 50, 60, 70, 80, 90],
        ticks: { length: 5 },
        labels: { fontSize: 24, offset: 21, flush: true }
      },
      title: { text: "x", fontSize: 36, offset: 57 }
    })
    .createYAxis({
      line: {},
      ticksAndLabels: {
        values: [0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100],
        ticks: { length: 5 },
        labels: { fontSize: 24, offset: 7 }
      },
      title: { text: "y", fontSize: 36, offset: 58 }
    })
    .editXAxisTitle({ fontWeight: 700 })
    .editYAxisTitle({ fontWeight: 700 })
    .createGrid({ horizontal: true, vertical: true })
    .editHorizontalGrid({ color: "#ddd", lineWidth: 1 })
    .editVerticalGrid({ color: "#ddd", lineWidth: 1 });
}
