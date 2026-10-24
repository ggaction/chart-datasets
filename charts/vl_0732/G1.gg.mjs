import { chart } from "ggaction";
import data from "./data.json";
export function buildChart() {
  return chart()
    // DOCS: doc-b2d0eb8c5f214d93
    .createCanvas({ width: 429, height: 297, margin: { left: 45, top: 59, right: 184, bottom: 38 } })
    .editCanvas({ plotBorder: { color: "#ddd", lineWidth: 1, underlay: true } })
    .applyTextMetrics({ profile: { schemaVersion: 1, id: "vl_0732-original-SVG-diagnostic-full", measurements: [ { text: "2000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 22.25 }, { text: "−30", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 16.96875 }, { text: "−20", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 16.96875 }, { text: "−10", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 16.96875 } ] } })
    // DOCS: doc-76573a465e2b6a33
    .createData({ values: data })
    .createComputedData({ id: "dated", as: "sourceYear", expression: { op: "parseTime", operand: { field: "Year" } } })
    .createComputedData({ id: "numeric", as: "sourceValue", expression: { op: "toNumber", operand: { field: "General_government_deficit" } } })
    // DOCS: doc-0b94bbb9d58de4ad
    .createLinePlot({ x: { field: "sourceYear", fieldType: "temporal", scale: { domain: [946684800000, 1609459200000] } }, y: { field: "sourceValue", scale: { domain: [-35, 20] } }, guides: { axes: { x: { line: { color: "#888" }, ticksAndLabels: { values: [946684800000, 1104537600000, 1262304000000, 1420070400000, 1577836800000], ticks: { length: 5, color: "#888", alongOffset: 0.5 }, labels: { fontSize: 10, color: "black", format: "%Y", offset: 5.5, alongOffset: 0.5, flush: true, flushThreshold: 1 } }, title: { text: "Year", fontSize: 11, fontWeight: 700, color: "black", offset: 27.578125, alongOffset: 0.5 } }, y: { line: { color: "#888" }, ticksAndLabels: { values: [-30, -20, -10, 0, 10, 20], ticks: { length: 5, color: "#888", alongOffset: 0.5 }, labels: { fontSize: 10, color: "black", offset: 6.5, alongOffset: 0.890625, labelMap: [ { value: -30, label: "−30" }, { value: -20, label: "−20" }, { value: -10, label: "−10" } ] } }, title: { text: "Government Deficit (% of GDP)", fontSize: 11, fontWeight: 700, color: "black", offset: 32.384765625, alongOffset: 0.5 } } }, grid: { horizontal: { values: [-30, -20, -10, 0, 10, 20], color: "#ddd", lineWidth: 1, alongOffset: 0.5 }, vertical: false }, legend: false } })
    .encodeGroup({ field: "Country" })
    .encodeStroke({ field: "Country", scale: { domain: ["United States", "Indonesia", "Brazil", "Russia", "Mexico", "Japan", "Türkiye", "Germany", "France", "United Kingdom"], range: ["#4c78a8", "#f58518", "#e45756", "#72b7b2", "#54a24b", "#eeca3b", "#b279a2", "#ff9da6", "#9d755d", "#bab0ac"], unknown: "none" } })
    // DOCS: doc-38764e122fbcf9c6
    .createLegend({ channels: ["stroke"], title: "Country", symbol: { layers: [ { type: "line", length: 5, lineWidth: 1.5 } ] } })
    .editLegend({ labels: { fontSize: 10, color: "black" }, titleStyle: { fontSize: 11, fontWeight: 700, color: "black" } })
    // DOCS: doc-1ef852966df13aa6
    .createTitle({ text: "General Government Deficit (% of GDP), 2000-2021", align: "left", titleStyle: { fontSize: 13, fontWeight: 700, color: "black" } })
    .editTitle({ offset: -9.953125, alongOffset: -38.962890625, gap: 3.046875 })
    .editTitle({ subtitle: "Source: OECD\n", subtitleStyle: { fontSize: 13, fontStyle: "italic", color: "black" } });
}