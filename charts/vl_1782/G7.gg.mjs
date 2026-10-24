import { chart } from "ggaction";
import data from "./data.json";
export function buildChart() {
  return chart()
    // DOCS: doc-d8d22d3671e96045
    .createCanvas({ plot: { width: 323, height: 200 }, margin: { left: 79, top: 10, right: 115, bottom: 40 } })
    .editCanvas({ plotBorder: { color: "#ddd", lineWidth: 1, underlay: true } })
    .createData({ values: data })
    .filterData({ id: "year2000", field: "year", predicate: { op: "eq", value: 2000 } })
    .createComputedData({ id: "gender", as: "gender", expression: { op: "if", condition: { op: "eq", left: { field: "sex" }, right: { constant: 2 } }, then: { constant: "Female" }, else: { constant: "Male" } } })
    .createSummaryData({ id: "totals", groupBy: ["age", "gender"], aggregates: [{ op: "sum", field: "people", as: "totalPopulation" }] })
    // DOCS: doc-9be42ac1ab803c31
    .createBarPlot({ x: { field: "age", fieldType: "ordinal", scale: { domain: [0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90], paddingInner: 0.1, paddingOuter: 0.05 } }, y: { field: "totalPopulation", scale: { domain: [0, 12000000] } }, guides: false })
    .createXAxis({ line: {}, ticksAndLabels: { values: [0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90], ticks: { length: 5, color: "#334155", alongOffset: 0.5 }, labels: { fontFamily: "sans-serif", fontSize: 10, color: "#334155", rotation: { value: 270, unit: "degrees" }, align: "right", offset: 8.5, alongOffset: 0.390625 } }, title: { text: "age", fontFamily: "sans-serif", fontSize: 11, fontWeight: 400, offset: 29.701171875, alongOffset: 0.5 } })
    .createYAxis({ line: {}, ticksAndLabels: { values: [0, 2000000, 4000000, 6000000, 8000000, 10000000, 12000000], ticks: { length: 5, color: "#334155", alongOffset: 0.5 }, labels: { fontFamily: "sans-serif", fontSize: 10, color: "#334155", format: ",.0f", offset: 7.5, alongOffset: 0.890625 } }, title: { text: "Population", fontFamily: "sans-serif", fontSize: 11, fontWeight: 400, offset: 66.470703125, alongOffset: 0.5 } })
    .createGrid({ horizontal: { color: "#ddd", values: [0, 2000000, 4000000, 6000000, 8000000, 10000000, 12000000] } })
    .editXAxis({ line: { color: "#888" } })
    .editYAxis({ line: { color: "#888" } })
    .editXAxisTicksAndLabels({ values: [0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90], ticks: { length: 5, color: "#888", alongOffset: 0.5 }, labels: { fontFamily: "sans-serif", fontSize: 10, color: "black", rotation: { value: 270, unit: "degrees" }, align: "right", offset: 8.5, alongOffset: 0.390625 } })
    .editYAxisTicksAndLabels({ values: [0, 2000000, 4000000, 6000000, 8000000, 10000000, 12000000], ticks: { length: 5, color: "#888", alongOffset: 0.5 }, labels: { fontFamily: "sans-serif", fontSize: 10, color: "black", format: ",.0f", offset: 7.5, alongOffset: 0.890625 } })
    .editXAxisTitle({ fontWeight: 700, color: "black", offset: 29.701171875 })
    .editYAxisTitle({ fontWeight: 700, color: "black", offset: 66.470703125 })
    .encodeColor({ field: "gender", scale: { domain: ["Female", "Male"], range: ["#CC9933", "#3399CC"] }, layout: "overlay" })
    .encodeBarWidth({ band: 1 })
    .editBarMark({ stroke: false, opacity: 1 })
    // DOCS: doc-4caf8f5e4552a6b2
    .facet({ field: "gender", values: ["Female", "Male"], headers: { column: { side: "right", fontSize: 10, fontWeight: 400, color: "black", rotation: { value: 90, unit: "degrees" }, offset: 9.609375 } } })
    .editFacetHeaders({ fontSize: 10, fontWeight: 400, color: "black" })
    .editFacetHeaders({ role: "column", side: "right", offset: 9.609375 })
    .editFacetHeaders({ role: "column", title: { text: "gender", fontSize: 11, fontWeight: 700, offset: 30.421875 } })
    // DOCS: doc-8c1e8e710e83918a
    .editFacetGuides({ axes: "outer", legend: false })
    // DOCS: doc-69327e6cf9f1c185
    .editCompositionLayout({ columns: 2, gap: 22, spacing: "plot" })
    .editCompositionLayout({ topLane: "shared" })
    .editFacetGuides({ axes: "outer", legend: { title: "gender" } })
    .editLegend({ symbol: { layers: [{ type: "swatch", width: 10, height: 10, stroke: "transparent", strokeWidth: 0 }] }, labels: { fontFamily: "sans-serif", fontSize: 10, color: "black" }, titleStyle: { fontFamily: "sans-serif", fontSize: 11, fontWeight: 700, color: "black" } });
}