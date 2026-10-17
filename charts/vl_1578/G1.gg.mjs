// DOCS: doc-e790db38fc2a278a, doc-2e6240c00cb297cc, doc-00859dfc99a640de
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({ width: 269, height: 252, margin: { left: 61, top: 5, right: 8, bottom: 47 } })
    .createData({ values: data })
    .createScatterPlot({
      x: { field: "x", fieldType: "quantitative", scale: { domain: [0, 0.5] } },
      y: { field: "y", fieldType: "quantitative", scale: { domain: [0, 110] } },
      guides: false
    })
    .editPointMark({ fill: "#4c78a8", opacity: 0.7 })
    .encodePointRadius({ value: 2.7386 })
    .createAxes({
      x: {
        line: {},
        ticksAndLabels: {
          values: [0, 0.2, 0.4],
          ticks: { length: 5 },
          labels: { fontSize: 20, fontFamily: "sans-serif", offset: 7, flush: true, overlap: "allow" }
        },
        title: { text: "x", fontSize: 11, fontWeight: 700, offset: 40 }
      },
      y: {
        line: {},
        ticksAndLabels: {
          values: [0, 20, 40, 60, 80, 100],
          ticks: { length: 5 },
          labels: { fontSize: 20, fontFamily: "sans-serif", offset: 7, overlap: "allow" }
        },
        title: { text: "y", fontSize: 11, fontWeight: 700, offset: 54 }
      }
    })
    .createGrid({
      horizontal: { color: "#ddd", lineWidth: 1 },
      vertical: { color: "#ddd", lineWidth: 1 }
    });
}
