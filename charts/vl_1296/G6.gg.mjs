// DOCS: doc-e790db38fc2a278a, doc-76573a465e2b6a33, doc-bc26da5598d35bae
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
    .createScatterPlot({
      x: { field: "x", fieldType: "quantitative" },
      y: { field: "y", fieldType: "quantitative" },
      guides: false
    })
    .editXScale({ domain: [0, 100], nice: false, zero: false })
    .editYScale({ domain: [0, 100], nice: false, zero: false })
    .editPointMark({
      fill: "transparent",
      stroke: "#1b9e77",
      strokeWidth: 4
    })
    .editPointMark({ opacity: 0.7 })
    .encodePointRadius({ value: 4.743416490252569 })
    .createXAxis({
      line: {},
      ticksAndLabels: {
        values: [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100],
        ticks: {},
        labels: { flush: true, fontSize: 24, offset: 4.5 }
      },
      title: { text: "x", fontSize: 36, offset: 62 }
    })
    .editXAxisLabels({ fontFamily: "sans-serif" })
    .createYAxis({
      line: {},
      ticksAndLabels: {
        values: [0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100],
        ticks: {},
        labels: { fontSize: 24, offset: 6.5 }
      },
      title: { text: "y", fontSize: 36, offset: 70.5 }
    })
    .editYAxisLabels({ fontFamily: "sans-serif" })
    .createGrid({
        horizontal: {
          values: [0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100],
        },
        vertical: {
          values: [0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100],
        }
    })
    .editGrid({ horizontal: { color: "#ddd", lineWidth: 1 }, vertical: { color: "#ddd", lineWidth: 1 } })
    .editXAxis({ title: { fontWeight: 700 } })
    .editYAxis({ title: { fontWeight: 700 } });
}
