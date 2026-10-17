import { chart } from "ggaction";
import data from "./data.json";

// DOCS: doc-f01ccf8db52e44f7, doc-971cf09cd16e8b4a, doc-48c72317a1a99e17

export function buildChart() {
  return chart()
    .createCanvas({ width: 310, height: 242, margin: { left: 105, top: 5, right: 5, bottom: 37 } })
    .editCanvas({ plotBorder: { color: "#ddd", lineWidth: 1 } })
    .createData({ values: data })
    .createIntervalPlot({
      x: { field: "yield", extent: "stderr", scale: { domain: [26, 44], nice: false } },
      y: { field: "variety", fieldType: "ordinal", scale: { domain: ["Glabron", "Manchuria", "No. 457", "No. 462", "No. 475", "Peatland", "Svansota", "Trebi", "Velvet", "Wisconsin No. 38"], paddingInner: 0.25, paddingOuter: 0.125 } },
      guides: false
    })
    .editErrorBar({ stroke: "#4682b4", strokeWidth: 1, capSize: 15 })
    .editRuleMark({ target: "intervalPlotIntervalLowerCap", opacity: 0.7 })
    .editRuleMark({ target: "intervalPlotIntervalUpperCap", opacity: 0.7 })
    .encodePointRadius({ value: Math.sqrt(30) / 2, target: "intervalPlot" })
    .editPointMark({ fill: "black", stroke: "none" })
    .createGrid({ horizontal: false, vertical: { scale: "intervalPlotX", values: [30, 35, 40], color: "#ddd", lineWidth: 1 } })
    .createAxes({
      x: {
        scale: "intervalPlotX",
        ticksAndLabels: { values: [30, 35, 40], ticks: { length: 5 }, labels: { fontSize: 10, offset: 5.5, alongOffset: 0.5, flush: true } },
        title: { text: "yield", fontSize: 11, offset: 27.578125 }
      },
      y: {
        scale: "intervalPlotY",
        ticksAndLabels: { values: ["Glabron", "Manchuria", "No. 457", "No. 462", "No. 475", "Peatland", "Svansota", "Trebi", "Velvet", "Wisconsin No. 38"], ticks: { length: 5 }, labels: { fontSize: 10, offset: 6.5, alongOffset: 0.890625 } },
        title: { text: "variety", fontSize: 11, offset: 93.2294921875, rotation: { value: -90, unit: "degrees" } }
      }
    })
    .editXAxis({ line: { color: "#888" }, ticksAndLabels: { ticks: { color: "#888" }, labels: { color: "black" } }, title: { fontWeight: 700, color: "black" } })
    .editYAxis({ line: { color: "#888" }, ticksAndLabels: { ticks: { color: "#888" }, labels: { color: "black" } }, title: { fontWeight: 700, color: "black" } });
}