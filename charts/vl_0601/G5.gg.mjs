import { chart } from "ggaction";
import data from "./data.json";
export function buildChart() {
  return chart()
    // DOCS: doc-76573a465e2b6a33
    .createCanvas({ width: 445, height: 362, margin: { left: 38, top: 40, right: 7, bottom: 22 } })
    .createData({ values: data })
    .createComputedData({ id: "numeric", as: "sourceValue", expression: { op: "toNumber", operand: { field: "Employment" } } })
    .createComputedData({ id: "dateTyped", as: "sourceDate", expression: { op: "parseTime", operand: { field: "Date" } } })
    .createComputedData({ id: "femaleAlias", as: "Female", expression: { op: "if", condition: { op: "eq", left: { field: "Gender" }, right: { constant: "Female" } }, then: { field: "sourceValue" }, else: { constant: 0 } } })
    .createComputedData({ id: "typedData", as: "Male", expression: { op: "if", condition: { op: "eq", left: { field: "Gender" }, right: { constant: "Male" } }, then: { field: "sourceValue" }, else: { constant: 0 } } })
    .createLinePlot({ x: { field: "sourceDate", fieldType: "temporal", scale: { id: "x", domain: [220924800000, 1672531200000] } }, y: { field: "sourceValue", scale: { id: "y", domain: [0.4, 1] } }, guides: false }).createAxes({x: {ticksAndLabels: {values: [315532800000, 473385600000, 631152000000, 788918400000, 946684800000, 1104537600000, 1262304000000, 1420070400000, 1577836800000], ticks: {color: "#888", length: 5, alongOffset: 0.5}, labels: {fontFamily: "sans-serif", fontSize: 10, color: "black", format: "%Y", offset: 5.5, alongOffset: 0.5}}, title: false}, y: {ticksAndLabels: {values: [0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1], ticks: {color: "#888", length: 5, alongOffset: 0.5}, labels: {fontFamily: "sans-serif", fontSize: 10, color: "black", format: ".0%", offset: 6.5, alongOffset: 0.890625}}, title: false}}).editXAxisLine({color: "#888"}).editYAxisLine({color: "#888"})
    .encodeColor({ field: "Gender", scale: { domain: ["Female", "Male"], range: ["rgb(128,0,0)", "#008080"] } })
    .filterData({ id: "hoverEmpty", field: "Date", predicate: { op: "eq", value: null } })
    .createScatterPlot({ x: { field: "sourceDate", fieldType: "temporal", scale: { id: "x", domain: [220924800000, 1672531200000] } }, y: { field: "sourceValue", scale: { id: "y", domain: [0.4, 1] } }, guides: false })
    .encodeStroke({ field: "Gender", scale: { domain: ["Female", "Male"], range: ["rgb(128,0,0)", "#008080"] } })
    .editPointMark({ fill: "transparent", strokeWidth: 2, opacity: 0.7 })
    .encodePointRadius({ value: 2.7386127875258306 })
    .createSummaryData({ id: "ruleDates", source: "typedData", aggregates: [{ op: "sum", field: "Female", as: "Female" }, { op: "sum", field: "Male", as: "Male" }] })
    .editSummaryData({ target: "ruleDates", groupBy: ["sourceDate"] })
    .createRuleMark({ data: "ruleDates", strokeWidth: 1, opacity: 0 })
    .encodeX({ field: "sourceDate", fieldType: "temporal", scale: { id: "x", domain: [220924800000, 1672531200000] } })
    .editRuleMark({ stroke: "black" })
    .createGrid({ horizontal: { values: [0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1], color: "rgba(221,221,221,0.6)", alongOffset: 0.5 } })
    .createLegend({ target: "scatterPlot", position: "bottom-right", labels: { fontFamily: "sans-serif", fontSize: 12, color: "black" } })
    .editLegend({ title: false, symbol: { layers: [{ type: "point", size: 5, fill: "transparent", strokeWidth: 1.5, opacity: 0.7 }] } })
    .createTitle({ text: "Employment by gender, US", titleStyle: { fontFamily: "sans-serif", fontSize: 13, fontWeight: 700, color: "black" }, offset: -10.953125 })
    .editTitle({ subtitle: "Prime working age (25-54 yrs), seasonally adjusted, source: FRED", subtitleStyle: { fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "italic", color: "rgb(0, 0, 0)" }, gap: 3.34375 })
    .editTitle({ align: "left", alongOffset: -32.576171875 });
}