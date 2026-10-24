import { chart } from "ggaction";
import data from "./data.json";
export function buildChart() {
  return chart()
    // DOCS: doc-ba092ec842bafcc1
    .createCanvas({ plot: { width: 200, height: 200 }, margin: { left: 57, right: 0, top: 57, bottom: 38 } })
    .editCanvas({ plotBorder: { color: "#ddd", lineWidth: 1, underlay: true } })
    .applyTextMetrics({ profile: { schemaVersion: 1, id: "vl_1543-own-original-SVG-2020", measurements: [{ text: "2020", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 22.25 }] } })
    // DOCS: doc-b2d0eb8c5f214d93
    .createData({ values: data })
    .filterData({ id: "selected", field: "region", oneOf: ["England", "Scotland", "Wales", "Northern Ireland"] })
    .createComputedData({ id: "dated", as: "sourceYear", expression: { op: "parseTime", operand: { field: "year" } } })
    .createComputedData({ id: "numeric", as: "sourceValue", expression: { op: "toNumber", operand: { field: "wage" } } }).createLinePlot({ x: { field: "sourceYear", fieldType: "temporal", scale: { domain: [852076800000, 1577836800000] } }, y: { field: "sourceValue", scale: { domain: [5, 16] } }, guides: false }).createGuides({ axes: { x: { offset: 1, line: { color: "#888" }, ticksAndLabels: { values: [946684800000, 1104537600000, 1262304000000, 1420070400000, 1577836800000], ticks: { length: 5, color: "#888", alongOffset: 0.5 }, labels: { fontSize: 10, color: "black", format: "%Y", offset: 5.5, alongOffset: 0.5, flush: true, flushThreshold: 1, overlap: "allow" } }, title: { text: "Date", fontSize: 11, fontWeight: 700, color: "black", offset: 27.578125, alongOffset: 0.5 } }, y: { offset: 4, line: { color: "#888" }, ticksAndLabels: { values: [6, 8, 10, 12, 14, 16], ticks: { length: 5, color: "#888", alongOffset: 0.5 }, labels: { fontSize: 10, color: "black", format: ".2f", offset: 6.5, alongOffset: 0.890625 } }, title: { text: "Hourly wage (£) (median)", fontSize: 11, fontWeight: 700, color: "black", offset: 40.4462890625, alongOffset: 0.5 } } }, grid: false, legend: false })
    .encodeGroup({ field: "region" })
    .encodeStroke({ field: "region", scale: { domain: ["England", "Northern Ireland", "Scotland", "Wales"], range: ["#e41a1c", "#377eb8", "#4daf4a", "#984ea3", "#ff7f00", "#ffff33", "#a65628", "#f781bf", "#999999"] } })
    .createScatterPlot({ x: { field: "sourceYear", fieldType: "temporal", scale: { domain: [852076800000, 1577836800000] } }, y: { field: "sourceValue", scale: { domain: [5, 16] } }, guides: false })
    .encodePointRadius({ value: 2.7386127875258306 })
    .editPointMark({ stroke: false, opacity: 1 })
    .encodeColor({ field: "region", scale: { domain: ["England", "Northern Ireland", "Scotland", "Wales"], range: ["#e41a1c", "#377eb8", "#4daf4a", "#984ea3", "#ff7f00", "#ffff33", "#a65628", "#f781bf", "#999999"] } })
    .encodeStroke({ field: "region", scale: { domain: ["England", "Northern Ireland", "Scotland", "Wales"], range: ["#e41a1c", "#377eb8", "#4daf4a", "#984ea3", "#ff7f00", "#ffff33", "#a65628", "#f781bf", "#999999"] } })
    .editPointMark({ strokeWidth: 0 })
    // DOCS: doc-8270cd43de503558
    .facet({ field: "type", data: "selected", values: ["Annual values", "Wages adjusted: 1997 prices"] })
    // DOCS: doc-69327e6cf9f1c185
    .editFacetGuides({ axes: { x: "each", y: "outer" }, legend: false })
    .editCompositionLayout({ columns: 2, gap: 28, spacing: "plot" })
    .editCompositionLayout({ topLane: "shared", padding: { right: 15 } })
    .editFacetHeaders({ fontSize: 10, fontWeight: 400, color: "black" })
    .editFacetHeaders({ offset: 10.609375, anchor: "plot" })
    .editFacetHeaders({ role: "column", title: { text: "type", fontSize: 11, fontWeight: 700, offset: 40.421875 } })
    // DOCS: doc-f84a6354ad5070da
    .editFacetGuides({ axes: { x: "each", y: "outer" }, legend: { target: "scatterPlot", channels: ["color", "stroke"], title: "Country", symbol: { layers: [{ type: "point", size: 5, strokeWidth: 1.5 }] }, labels: { fontSize: 10, color: "black" }, titleStyle: { fontSize: 11, fontWeight: 700, color: "black" } } });
}