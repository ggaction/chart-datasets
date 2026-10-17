// DOCS: doc-2bd5de4bd99e314a, doc-e790db38fc2a278a, doc-2e6240c00cb297cc
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({
      width: 705,
      height: 692,
      margin: { left: 94, top: 17, right: 11, bottom: 75 }
    })
    .createData({ values: data })
    .createScatterPlot({
      x: { field: "x", fieldType: "quantitative", scale: { domain: [0, 90] } },
      y: { field: "y", fieldType: "quantitative", scale: { domain: [0, 100] } },
      guides: false
    })
    .editPointMark({ fill: "none", stroke: "#1b9e77", strokeWidth: 4 })
    .encodeOpacity({ value: 0.7 })
    .encodePointRadius({ value: 4.743416490252569 })
    .createGrid({ horizontal: { color: "#ddd", values: [0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100] }, vertical: { color: "#ddd", values: [0, 10, 20, 30, 40, 50, 60, 70, 80, 90] } })
    .createXAxis({
      line: {},
      ticksAndLabels: {
        values: [0, 10, 20, 30, 40, 50, 60, 70, 80, 90],
        ticks: {},
        labels: { fontSize: 24, offset: 4.5, flush: true }
      },
      title: { text: "x", fontSize: 36, fontWeight: 700, offset: 57 }
    })
    .createYAxis({
      line: {},
      ticksAndLabels: {
        values: [0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100],
        ticks: {},
        labels: { fontSize: 24, offset: 7 }
      },
      title: { text: "y", fontSize: 36, fontWeight: 700, offset: 70 }
    });
}
