import { chart } from "ggaction";
import data from "./data.json";

// DOCS: doc-76573a465e2b6a33
// DOCS: doc-0c53e96a226e8a16
// DOCS: doc-5d1932fc53b5becc
// DOCS: doc-fa139e70c69bcebd
// DOCS: doc-2c912465a1515bd5
export function buildChart() {
  return chart()
    .createCanvas({ width: 520, height: 314, margin: { left: 63, top: 27, right: 7, bottom: 37 } })
    .editCanvas({ background: "#ff000000" })
    .applyTextMetrics({ profile: { schemaVersion: 1, id: "source0279-own-original-svg", measurements: [ { text: "2010", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 22.25 }, { text: "2021", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 22.25 } ] } })
    .createData({ values: data })
    .createComputedData({ id: "numeric", as: "sourceValue", expression: { op: "toNumber", operand: { field: "Value" } } })
    .createComputedData({ id: "dated", as: "sourceDate", expression: { op: "parseTime", operand: { field: "year" } } })
    .createComputedData({ id: "categoryPivot0", as: "Asylum Seekers", expression: { op: "if", condition: { op: "eq", left: { field: "DP type" }, right: { constant: "Asylum Seekers" } }, then: { field: "sourceValue" }, else: { constant: 0 } } })
    .createComputedData({ id: "categoryPivot1", as: "Internally Displaced People", expression: { op: "if", condition: { op: "eq", left: { field: "DP type" }, right: { constant: "Internally Displaced People" } }, then: { field: "sourceValue" }, else: { constant: 0 } } })
    .createComputedData({ id: "typedData", as: "Refugees", expression: { op: "if", condition: { op: "eq", left: { field: "DP type" }, right: { constant: "Refugees" } }, then: { field: "sourceValue" }, else: { constant: 0 } } }).createLinePlot({ x: { field: "sourceDate", fieldType: "temporal", scale: { id: "x", domain: [1262304000000, 1609459200000] } }, y: { field: "sourceValue", scale: { id: "y", domain: [0, 55000000] } }, guides: false }).createAxes({ x: { line: { color: "#888" }, ticksAndLabels: { values: [1262304000000, 1293840000000, 1325376000000, 1356998400000, 1388534400000, 1420070400000, 1451606400000, 1483228800000, 1514764800000, 1546300800000, 1577836800000, 1609459200000], ticks: { color: "#888", length: 5, alongOffset: 0.5 }, labels: { fontFamily: "sans-serif", fontSize: 10, color: "black", format: "%Y", offset: 5.5, alongOffset: 0.5, flush: true } }, title: { text: "Year", fontFamily: "sans-serif", fontSize: 11, fontWeight: 700, color: "black", offset: 27.578125, alongOffset: 0.5 } }, y: { line: { color: "#888" }, ticksAndLabels: { values: [0, 5000000, 10000000, 15000000, 20000000, 25000000, 30000000, 35000000, 40000000, 45000000, 50000000, 55000000], ticks: { color: "#888", length: 5, alongOffset: 0.5 }, labels: { fontFamily: "sans-serif", fontSize: 10, color: "black", offset: 6.5, format: ",.0f", alongOffset: 0.890625 } }, title: false } })
    .encodeColor({ field: "DP type", scale: { domain: ["Asylum Seekers", "Internally Displaced People", "Refugees"], range: ["#4c78a8", "#f58518", "#e45756"] } })
    .editLineMark({ curve: "natural", strokeWidth: 2, lineCap: "butt" })
    .filterData({ id: "hoverEmpty", field: "year", noneOf: ["2010", "2011", "2012", "2013", "2014", "2015", "2016", "2017", "2018", "2019", "2020", "2021"] })
    .createScatterPlot({ x: { field: "sourceDate", fieldType: "temporal", scale: { id: "x", domain: [1262304000000, 1609459200000] } }, y: { field: "sourceValue", scale: { id: "y", domain: [0, 55000000] } }, guides: false })
    .encodeColor({ field: "DP type", scale: { domain: ["Asylum Seekers", "Internally Displaced People", "Refugees"], range: ["#4c78a8", "#f58518", "#e45756"] } })
    .encodeStroke({ field: "DP type", scale: { domain: ["Asylum Seekers", "Internally Displaced People", "Refugees"], range: ["#4c78a8", "#f58518", "#e45756"] } })
    .editPointMark({ opacity: 1 })
    .encodePointRadius({ value: 5 })
    .createLineMark({ id: "lineRepeat", data: "typedData", curve: "natural" })
    .encodeX({ field: "sourceDate", fieldType: "temporal", scale: { id: "x", domain: [1262304000000, 1609459200000] } })
    .encodeY({ field: "sourceValue", scale: { id: "y", domain: [0, 55000000] } })
    .encodeColor({ field: "DP type", scale: { domain: ["Asylum Seekers", "Internally Displaced People", "Refugees"], range: ["#4c78a8", "#f58518", "#e45756"] } })
    .editLineMark({ strokeWidth: 2, lineCap: "butt" })
    .createPointMark({ id: "openHover", data: "hoverEmpty" })
    .encodeX({ field: "sourceDate", fieldType: "temporal", scale: { id: "x", domain: [1262304000000, 1609459200000] } })
    .encodeY({ field: "sourceValue", scale: { id: "y", domain: [0, 55000000] } })
    .encodeStroke({ field: "DP type", scale: { domain: ["Asylum Seekers", "Internally Displaced People", "Refugees"], range: ["#4c78a8", "#f58518", "#e45756"] } })
    .editPointMark({ fill: "transparent", strokeWidth: 2, opacity: 1 })
    .encodePointRadius({ value: 11.180339887498949 })
    .createSummaryData({ id: "ruleDates", source: "typedData", aggregates: [ { op: "sum", field: "Asylum Seekers", as: "Asylum Seekers" }, { op: "sum", field: "Internally Displaced People", as: "Internally Displaced People" }, { op: "sum", field: "Refugees", as: "Refugees" } ] })
    .editSummaryData({ target: "ruleDates", groupBy: ["sourceDate"] })
    .createRuleMark({ data: "ruleDates", strokeWidth: 1, opacity: 0 })
    .encodeX({ field: "sourceDate", fieldType: "temporal", scale: { id: "x", domain: [1262304000000, 1609459200000] } })
    .editRuleMark({ stroke: "black" })
    .createGrid({ horizontal: { color: "#6e564b71", values: [0, 5000000, 10000000, 15000000, 20000000, 25000000, 30000000, 35000000, 40000000, 45000000, 50000000, 55000000], alongOffset: 0.5 }, vertical: { color: "#6e564b71", values: [1262304000000, 1293840000000, 1325376000000, 1356998400000, 1388534400000, 1420070400000, 1451606400000, 1483228800000, 1514764800000, 1546300800000, 1577836800000, 1609459200000], alongOffset: 0.5 } })
    .createLegend({ target: "scatterPlot", position: "top-left", channels: ["color", "stroke"] })
    .editLegend({ labels: { fontFamily: "sans-serif", fontSize: 10, fontWeight: 700, color: "black" }, symbol: { layers: [ { type: "point", size: 5, strokeWidth: 1.5, opacity: 1 } ] }, title: false })
    .createTitle({ text: "Global Forcibly Displaced Population", titleStyle: { fontFamily: "sans-serif", fontSize: 13, fontWeight: 700, color: "black" }, offset: -10.953125 })
    .editTitle({ align: "center" });
}