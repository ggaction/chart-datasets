import { chart } from "ggaction";
import data from "./data.json";

// DOCS: doc-e790db38fc2a278a, doc-76573a465e2b6a33, doc-2fcdfbdfb290e440

export function buildChart() {
  return chart()
    .createCanvas({
      width: 700,
      height: 692,
      margin: { left: 94, top: 17, right: 6, bottom: 75 }
    })
    .createData({ values: data })
    .createScatterPlot({ x: { field: "x" }, y: { field: "y" }, guides: false })
    .editXScale({ domain: [0, 100] })
    .editYScale({ domain: [0, 100] })
    .encodePointRadius({ value: 4.7434 })
    .encodeStroke({ value: "#1b9e77" })
    .encodeOpacity({ value: 0.7 })
    .editPointMark({ fill: "none", strokeWidth: 4 })
    .createAxes({
      x: {
        line: { color: "#888" },
        ticksAndLabels: {
          values: [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100],
          ticks: { color: "#888" },
          labels: { fontSize: 24, fontFamily: "sans-serif", color: "black", offset: 4, flush: true }
        },
        title: { text: "x", fontSize: 36, fontWeight: 700, color: "black", offset: 57 }
      },
      y: {
        line: { color: "#888" },
        ticksAndLabels: {
          values: [0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100],
          ticks: { color: "#888" },
          labels: { fontSize: 24, fontFamily: "sans-serif", color: "black", offset: 8 }
        },
        title: { text: "y", fontSize: 36, fontWeight: 700, color: "black", offset: 71 }
      }
    })
    .createGrid({ horizontal: { color: "#ddd" }, vertical: { color: "#ddd" } });
}
