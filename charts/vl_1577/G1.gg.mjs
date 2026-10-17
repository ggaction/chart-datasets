// DOCS: doc-e790db38fc2a278a, doc-2e6240c00cb297cc, doc-00859dfc99a640de
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({ width: 269, height: 252, margin: { left: 61, top: 5, right: 8, bottom: 47 } })
    .createData({ values: data })
    .createScatterPlot({
      x: { field: "x", fieldType: "quantitative", scale: { domain: [0, 0.5], nice: false, zero: false } },
      y: { field: "y", fieldType: "quantitative", scale: { domain: [0, 110], nice: false, zero: false } },
      guides: false
    })
    .editPointMark({ fill: "#4c78a8", opacity: 0.7 })
    .encodePointRadius({ value: 2.7386127875258306 })
    .createGuides({
      axes: {
        x: {
          line: { color: "#888" },
          ticksAndLabels: {
            count: 5,
            ticks: { length: 5, color: "#888" },
            labels: { fontSize: 20, fontFamily: "sans-serif", color: "#000", flush: true, offset: 7, overlap: "allow" }
          },
          title: { text: "x", fontSize: 11, fontWeight: 700, color: "#000", offset: 40 }
        },
        y: {
          line: { color: "#888" },
          ticksAndLabels: {
            count: 5,
            ticks: { length: 5, color: "#888" },
            labels: { fontSize: 20, fontFamily: "sans-serif", color: "#000", offset: 7 }
          },
          title: { text: "y", fontSize: 11, fontWeight: 700, color: "#000", offset: 46, rotation: -Math.PI / 2 }
        }
      },
      grid: { horizontal: { color: "#ddd" }, vertical: { color: "#ddd" } },
      legend: false
    });
}
