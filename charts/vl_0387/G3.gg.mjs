import { chart } from "ggaction";
import data from "./data.json";

// DOCS: doc-9be42ac1ab803c31
// DOCS: doc-4caf8f5e4552a6b2
export function buildChart() {
  return chart()
    .createCanvas({ plot: { width: 100, height: 75 }, margin: { left: 34, top: 26, right: 6, bottom: 23 } })
    .editCanvas({ plotBorder: { color: "#ddd", lineWidth: 1, underlay: true } })
    .applyTextMetrics({ profile: { schemaVersion: 1, id: "vl_0387-original-SVG-width", measurements: [{ text: "2020", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 22.25 }] } })
    .createData({ values: data })
    .createComputedData({ id: "typedYear", as: "sourceYear", expression: { op: "toNumber", operand: { field: "year" } } })
    .createFoldData({ id: "foldedEntry", fields: ["entryRate"], as: { key: "metric", value: "value" } })
    .createComputedData({ id: "namedEntry", as: "metricClean", expression: { op: "if", condition: { op: "eq", left: { field: "metric" }, right: { constant: "entryRate" } }, then: { constant: "Entry" }, else: { constant: null } } })
    .createComputedData({ id: "typedValue", as: "sourceValue", expression: { op: "toNumber", operand: { field: "value" } } })
    .filterData({ id: "visibleEntry", field: "sourceValue", predicate: { op: "lt", value: 0.2 } }).createLinePlot({x: {field: "sourceYear", scale: {domain: [1996, 2020], zero: false}}, y: {field: "sourceValue", scale: {domain: [0, 0.2]}}, guides: false}).createAxes({x: {line: {color: "#888"}, ticksAndLabels: {values: [2000, 2010, 2020], ticks: {length: 5, color: "#888", alongOffset: 0.5}, labels: {fontFamily: "sans-serif", fontSize: 10, color: "black", format: ".0f", flush: true, offset: 6.5, alongOffset: 0.5}}, title: false}, y: {line: {color: "#888"}, ticksAndLabels: {values: [0, 0.1, 0.2], ticks: {length: 5, color: "#888", alongOffset: 0.5}, labels: {fontFamily: "sans-serif", fontSize: 10, color: "black", format: ".0%", offset: 7.5, alongOffset: 0.890625}}, title: false}})
    .editLineMark({ strokeWidth: 1 })
    .encodeColor({ field: "metricClean", fieldType: "nominal", scale: { domain: ["Entry"], range: ["blue", "orange"] } })
    .facet({ field: "Industry", values: ["Automotive", "Construction", "Hospitality", "IT", "Manufacturing", "Other business", "Other service", "Recreation & culture", "Retail", "Transport", "Wholesale", "z. Others"], headers: { fontSize: 10, fontWeight: 400, color: "black", offset: 9.609375 } })
    .editCompositionLayout({ columns: 4 })
    .editFacetGuides({ axes: "outer", legend: false })
    // DOCS: doc-d8d22d3671e96045
    // DOCS: doc-8270cd43de503558
    .editCompositionLayout({ spacing: "plot", topLane: "shared", gap: { x: 22, y: 42 } });
}