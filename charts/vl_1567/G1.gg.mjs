// DOCS: doc-b11b4627b143730d, doc-76573a465e2b6a33, doc-cf8d34fbc7d6684b
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({ width: 252, height: 247, margin: { left: 44, top: 10, right: 8, bottom: 37 } })
    .createData({ values: data })
    .createLinePlot({
      x: { field: "x", scale: { domain: [0, 100] } },
      y: { field: "y", scale: { domain: [0, 100] } },
      guides: false
    })
    .createScatterPlot({
      x: { field: "x", scale: { domain: [0, 100] } },
      y: { field: "y", scale: { domain: [0, 100] } },
      guides: false
    })
    .encodePointRadius({ value: 2.7386127875258306, target: "scatterPlot" })
    .editPointMark({ fill: "#4c78a8", opacity: 1 })
    .createAxes({
      x: {
        ticksAndLabels: { values: [1, 25, 39, 90], ticks: { length: 5 }, labels: { fontSize: 10, offset: 7 } },
        title: { text: "x", fontSize: 11, fontWeight: 700, offset: 28 }
      },
      y: {
        ticksAndLabels: { count: 5, ticks: { length: 5 }, labels: { fontSize: 10, offset: 7 } },
        title: { text: "y", fontSize: 11, fontWeight: 700, offset: 33 }
      }
    })
    .createGrid({ vertical: { values: [1, 25, 39, 90], scale: "x", color: "#ddd" }, horizontal: { count: 5, scale: "y", color: "#ddd" } });
}