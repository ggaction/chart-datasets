// DOCS: doc-2bd5de4bd99e314a
// DOCS: doc-76573a465e2b6a33
// DOCS: doc-a7d421980af3b87a
// DOCS: doc-8616e98b108a6a1d
import { chart } from "ggaction";
import data from "./data.json";
export function buildChart() {
  return chart()
    .createCanvas({ width: 540, height: 412, margin: { left: 33, top: 40, right: 7, bottom: 22 } })
    .createData({ values: data })
    .createComputedData({ id: "numeric", as: "sourceValue", expression: { op: "toNumber", operand: { field: "Value" } } })
    .createComputedData({ id: "unemploymentAlias", as: "Unemployment", expression: { op: "if", condition: { op: "eq", left: { field: "Metric" }, right: { constant: "Unemployment" } }, then: { field: "sourceValue" }, else: { constant: null } } })
    .createComputedData({ id: "metricAliases", as: "Persons Unemployed", expression: { op: "if", condition: { op: "eq", left: { field: "Metric" }, right: { constant: "Persons Unemployed" } }, then: { field: "sourceValue" }, else: { constant: null } } })
    .createSummaryData({ id: "pivot", groupBy: ["Date"], aggregates: [{ op: "sum", field: "Unemployment", as: "Unemployment" }, { op: "sum", field: "Persons Unemployed", as: "Persons Unemployed" }] })
    .createComputedData({ id: "dated", as: "sourceDate", expression: { op: "parseTime", operand: { field: "Date" } } })
    .createComputedData({ id: "yearTyped", as: "sourceYear", expression: { op: "datePart", part: "year", operand: { field: "sourceDate" } } })
    .filterData({ id: "initialYears", field: "sourceYear", range: { min: 1948, max: 2023 } })
    .createLinePlot({ x: { field: "sourceDate", fieldType: "temporal", scale: { id: "x", domain: [-694310400000, 1672531200000] } }, y: { field: "Unemployment", scale: { id: "y", domain: [0, 0.16] } }, guides: { axes: { x: { line: { color: "#888" }, ticksAndLabels: { values: [-631152000000, -473385600000, -315619200000, -157766400000, 0, 157766400000, 315532800000, 473385600000, 631152000000, 788918400000, 946684800000, 1104537600000, 1262304000000, 1420070400000, 1577836800000], ticks: { color: "#888", length: 5, alongOffset: 0.5 }, labels: { fontFamily: "sans-serif", fontSize: 10, color: "black", format: "%Y", offset: 5.5, alongOffset: 0.5 } }, title: false }, y: { line: { color: "#888" }, ticksAndLabels: { values: [0, 0.02, 0.04, 0.06, 0.08, 0.1, 0.12, 0.14, 0.16], ticks: { color: "#888", length: 5, alongOffset: 0.5 }, labels: { fontFamily: "sans-serif", fontSize: 10, color: "black", format: ".0%", offset: 6.5, alongOffset: 0.890625 } }, title: false } }, grid: false, legend: false } })
    .editLineMark({ stroke: "rgb(128,0,0)" })
    .filterData({ id: "hoverEmpty", field: "Date", predicate: { op: "eq", value: null } })
    .createScatterPlot({ x: { field: "sourceDate", fieldType: "temporal", scale: { id: "x", domain: [-694310400000, 1672531200000] } }, y: { field: "Unemployment", scale: { id: "y", domain: [0, 0.16] } }, guides: false })
    .editPointMark({ fill: "transparent", stroke: "#4c78a8", opacity: 0.7 })
    .editPointMark({ strokeWidth: 2 })
    .encodePointRadius({ value: 2.7386127875258306 })
    .createRuleMark({ data: "initialYears", strokeWidth: 1, opacity: 0 })
    .encodeX({ field: "sourceDate", fieldType: "temporal", scale: { id: "x", domain: [-694310400000, 1672531200000] } })
    .editRuleMark({ stroke: "black" })
    .createGrid({ horizontal: { values: [0, 0.02, 0.04, 0.06, 0.08, 0.1, 0.12, 0.14, 0.16], color: "rgba(221,221,221,0.6)", alongOffset: 0.5 } })
    .createTitle({ text: "Unemployment, US", titleStyle: { fontFamily: "sans-serif", fontSize: 13, fontWeight: 700, color: "black" }, offset: -10.953125 })
    .editTitle({ subtitle: "Monthly rate, 16+ yrs, seasonally adjusted, source: FRED", subtitleStyle: { fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "italic", color: "black" }, gap: 3.34375 })
    .editTitle({ align: "left", alongOffset: -27.0146484375 });
}