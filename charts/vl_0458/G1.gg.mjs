import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    // DOCS: doc-cffb363a4b862ced
    .createCanvas({ width: 359, height: 389, margin: { left: 47, top: 52, right: 12, bottom: 37 } })
    .editCanvas({ plotBorder: { color: "#ddd", lineWidth: 1, underlay: true } })
    .createData({ values: data })
    .createComputedData({ id: "numericShare", as: "sourceShare", expression: { op: "if", condition: { op: "eq", left: { field: "change_sh" }, right: { constant: "" } }, then: { constant: null }, else: { op: "toNumber", operand: { field: "change_sh" } } } })
    .createComputedData({ id: "dated", as: "date4", expression: { op: "parseTime", format: "%d/%m/%Y", operand: { op: "replaceLiteral", search: "-", replacement: "/", operand: { op: "replaceLiteral", search: "-", replacement: "/", operand: { field: "date3" } } } } })
    .filterData({ id: "positive", field: "sourceShare", predicate: { op: "gt", value: 0 } })
    .filterData({ id: "filtered", field: "sourceShare", predicate: { op: "lt", value: 0.31 } })
    // DOCS: doc-ef5a28c0c3f3c920
    .createLinePlot({ x: { field: "date4", fieldType: "temporal", scale: { domain: [573177600000, 1661990400000] } }, y: { field: "sourceShare", scale: { domain: [0, 0.35] } }, guides: { axes: { x: { line: { color: "#888" }, ticksAndLabels: { values: [631152000000, 788918400000, 946684800000, 1104537600000, 1262304000000, 1420070400000, 1577836800000], ticks: { length: 5, color: "#888", alongOffset: 0.5 }, labels: { fontFamily: "sans-serif", fontSize: 10, color: "black", format: "%Y", offset: 5.5, alongOffset: 0.5, flush: true, flushThreshold: 0 } }, title: { text: "date4", fontFamily: "sans-serif", fontSize: 11, fontWeight: 700, color: "black", offset: 27.578125, alongOffset: 0.5 } }, y: { line: { color: "#888" }, ticksAndLabels: { values: [0, 0.05, 0.1, 0.15, 0.2, 0.25, 0.3, 0.35], ticks: { length: 5, color: "#888", alongOffset: 0.5 }, labels: { fontFamily: "sans-serif", fontSize: 10, color: "black", format: ".2f", offset: 6.5, alongOffset: 0.890625 } }, title: { text: "change_sh", fontFamily: "sans-serif", fontSize: 11, fontWeight: 700, color: "black", offset: 34.884765625, alongOffset: 0.5 } } }, grid: { vertical: { values: [631152000000, 788918400000, 946684800000, 1104537600000, 1262304000000, 1420070400000, 1577836800000], color: "#ddd", alongOffset: 0.5 }, horizontal: { values: [0, 0.05, 0.1, 0.15, 0.2, 0.25, 0.3, 0.35], color: "#ddd", alongOffset: 0.5 } }, legend: false } })
    .editLineMark({ stroke: "rgb(0,67,167)", strokeWidth: 1 })
    // DOCS: doc-7ddf91b1585f3d44
    .createScatterPlot({ x: { field: "date4", fieldType: "temporal", scale: { domain: [573177600000, 1661990400000] } }, y: { field: "sourceShare", scale: { domain: [0, 0.35] } }, guides: false })
    .encodePointRadius({ value: 6.123724356957945 })
    .editPointMark({ fill: "rgb(0,67,167)", stroke: "transparent", opacity: 0.7 })
    .createRuleMark({ data: "filtered", strokeWidth: 1, opacity: 0.2 })
    .encodeX({ field: "date4", fieldType: "temporal", scale: { domain: [573177600000, 1661990400000] } })
    .editRuleMark({ stroke: "black" })
    .createTitle({ text: "Price adjustment", titleStyle: { fontFamily: "sans-serif", fontSize: 13, fontWeight: 700, color: "black" }, offset: -10.953125 })
    .editTitle({ subtitle: "Share of prices changing month-on-month\n", subtitleStyle: { fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "italic", color: "black" }, gap: 3.34375 })
    .editTitle({ align: "left", alongOffset: -41.462890625 });
}