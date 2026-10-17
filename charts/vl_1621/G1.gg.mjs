import { chart } from "ggaction";
import data from "./data.json";
// DOCS: doc-f01ccf8db52e44f7, doc-971cf09cd16e8b4a, doc-074cfcd2d7c62d4a

export function buildChart() {
  return chart()
    .createCanvas({ width: 310, height: 242, margin: { left: 105, top: 5, right: 5, bottom: 37 } })
    .editCanvas({ plotBorder: { color: "#ddd", lineWidth: 1 } })
    .createData({ id: "barley", values: data })
    .createIntervalPlot({
      x: { field: "yield", extent: "stderr", scale: { domain: [26, 44], nice: false } },
      y: { field: "variety", fieldType: "ordinal", scale: { domain: ["Glabron", "Manchuria", "No. 457", "No. 462", "No. 475", "Peatland", "Svansota", "Trebi", "Velvet", "Wisconsin No. 38"], paddingInner: 0, paddingOuter: 0 } },
      guides: false
    })
    .editErrorBar({ caps: false, stroke: "#4682b4", strokeWidth: 1 })
    .editPointMark({ fill: "black", stroke: "none" })
    .encodePointRadius({ value: Math.sqrt(30) / 2 })
    .createGuides({
      axes: {
        x: {
          scale: "intervalPlotX",
          line: { color: "#888" },
          ticksAndLabels: {
            values: [30, 35, 40],
            ticks: { color: "#888", length: 5 },
            labels: { fontSize: 10, color: "black", offset: 5.5, alongOffset: 0.5, flush: true }
          },
          title: { text: "yield", fontSize: 11, fontWeight: 700, color: "black", offset: 27.578125 }
        },
        y: {
          scale: "intervalPlotY",
          line: { color: "#888" },
          ticksAndLabels: {
            values: ["Glabron", "Manchuria", "No. 457", "No. 462", "No. 475", "Peatland", "Svansota", "Trebi", "Velvet", "Wisconsin No. 38"],
            ticks: { color: "#888", length: 5 },
            labels: { fontSize: 10, color: "black", offset: 6.5, alongOffset: 0.890625 }
          },
          title: { text: "variety", fontSize: 11, fontWeight: 700, color: "black", offset: 93.2294921875, rotation: { value: -90, unit: "degrees" } }
        }
      },
      grid: { horizontal: false, vertical: { values: [30, 35, 40], color: "#ddd" } }
    });
}