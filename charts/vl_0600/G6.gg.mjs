import { chart } from "ggaction";
import data from "./data.json";
export function buildChart() {
  return chart()
    .createCanvas({ width: 445, height: 362, margin: { left: 38, top: 40, right: 7, bottom: 22 } })
    .applyTextMetrics({ profile: { schemaVersion: 1, id: "source0600-own-original-svg", measurements: [{ text: "Female", fontFamily: "sans-serif", fontSize: 12, fontWeight: 400, fontStyle: "normal", width: 40.015625 }] } })
    .createData({ values: data })
    .createComputedData({ id: "employmentRatio", as: "sourceValue", expression: { op: "divide", left: { op: "toNumber", operand: { field: "Employment" } }, right: { constant: 100 } } })
    .createComputedData({ id: "dated", as: "sourceDate", expression: { op: "parseTime", operand: { field: "Date" } } })
    .createComputedData({ id: "metricPivot0", as: "Female", expression: { op: "if", condition: { op: "eq", left: { field: "Metric" }, right: { constant: "Female" } }, then: { field: "sourceValue" }, else: { constant: 0 } } })
    .createComputedData({ id: "metricPivot1", as: "Male", expression: { op: "if", condition: { op: "eq", left: { field: "Metric" }, right: { constant: "Male" } }, then: { field: "sourceValue" }, else: { constant: 0 } } })
    .createComputedData({ id: "typedData", as: "Total", expression: { op: "if", condition: { op: "eq", left: { field: "Metric" }, right: { constant: "Total" } }, then: { field: "sourceValue" }, else: { constant: 0 } } })
    // DOCS: doc-cffb363a4b862ced doc-76573a465e2b6a33 doc-ba092ec842bafcc1 doc-38764e122fbcf9c6 doc-a7e245c04b6a2ed2 doc-b2d0eb8c5f214d93
    .createLinePlot({ x: { field: "sourceDate", fieldType: "temporal", scale: { id: "x", domain: [34214400000, 1667260800000] } }, y: { field: "sourceValue", scale: { id: "y", domain: [0, 1] } }, guides: false }).createXAxis({coordinate: "main", ticksAndLabels: {values: [157766400000, 315532800000, 473385600000, 631152000000, 788918400000, 946684800000, 1104537600000, 1262304000000, 1420070400000, 1577836800000], ticks: {color: "#888", length: 5, alongOffset: 0.5}, labels: {fontFamily: "sans-serif", fontSize: 10, color: "black", format: "%Y", offset: 5.5, alongOffset: 0.5, flush: false}}, title: false}).createYAxis({coordinate: "main", ticksAndLabels: {values: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1], ticks: {color: "#888", length: 5, alongOffset: 0.5}, labels: {fontFamily: "sans-serif", fontSize: 10, color: "black", offset: 6.5, format: ".0%", alongOffset: 0.890625}}, title: false}).editXAxisLine({color: "#888"}).editYAxisLine({color: "#888"})
    .encodeColor({ field: "Metric", scale: { domain: ["Total", "Female", "Male"], range: ["grey", "#008080", "rgb(128,0,0)"] } })
    .encodeStrokeDash({ field: "Metric", scale: { domain: ["Female", "Male", "Total"], range: [[1, 0], [1, 0], [4, 2]] } })
    .editLineMark({ strokeWidth: 2, lineCap: "butt", lineJoin: "miter" })
    .filterData({ id: "hoverEmpty", field: "sourceDate", range: { max: 0 } })
    .createScatterPlot({ x: { field: "sourceDate", fieldType: "temporal", scale: { id: "x", domain: [34214400000, 1667260800000] } }, y: { field: "sourceValue", scale: { id: "y", domain: [0, 1] } }, guides: false })
    .encodeStroke({ field: "Metric", scale: { domain: ["Total", "Female", "Male"], range: ["grey", "#008080", "rgb(128,0,0)"] } })
    .editPointMark({ fill: "transparent", strokeWidth: 2, opacity: 0.7 })
    .encodePointRadius({ value: 2.7386127875258306 })
    .createSummaryData({ id: "ruleDates", source: "typedData", aggregates: [{ op: "sum", field: "Female", as: "Female" }, { op: "sum", field: "Male", as: "Male" }, { op: "sum", field: "Total", as: "Total" }] })
    .editSummaryData({ target: "ruleDates", groupBy: ["sourceDate"] })
    .createRuleMark({ data: "ruleDates", strokeWidth: 1, opacity: 0 })
    .encodeX({ field: "sourceDate", fieldType: "temporal", scale: { id: "x", domain: [34214400000, 1667260800000] } })
    .editRuleMark({ stroke: "black" })
    .createGrid({ horizontal: { color: "rgba(221,221,221,0.6)", values: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1], alongOffset: 0.5 }, vertical: false })
    .createLegend({ target: "scatterPlot", position: "bottom-right", title: false })
    .editLegend({ labels: { fontFamily: "sans-serif", fontSize: 12, color: "black" }, symbol: { layers: [{ type: "point", size: 5, fill: "transparent", strokeWidth: 1.5, opacity: 0.7 }] } })
    .createTitle({ text: "Employment by gender, UK", titleStyle: { fontFamily: "sans-serif", fontSize: 13, fontWeight: 700, color: "black" }, offset: -10.953125 })
    .editTitle({ subtitle: "Aged 16-64 yrs, seasonally adjusted, source: ONS", subtitleStyle: { fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "italic", color: "black" }, gap: 3.34375 })
    .editTitle({ align: "left", alongOffset: -32.576171875 });
}