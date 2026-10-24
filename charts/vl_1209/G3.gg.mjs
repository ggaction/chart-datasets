import { chart } from "ggaction";
import data from "./data.json";
export function buildChart() {
  return chart()
    // DOCS: doc-071c93dff3a5ea2e line chart recipe establishes temporal x, quantitative y, color grouping
    .createCanvas({ width: 590, height: 361, margin: { left: 29, top: 39, right: 161, bottom: 22 } })
    .editCanvas({ plotBorder: { color: "#ddd", lineWidth: 1, underlay: true } })
    .applyTextMetrics({ profile: { schemaVersion: 1, id: "source1209-own-source-SVG-axis-metrics", measurements: [{ text: "2020", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 22.25 }] } })
    .createData({ values: data })
    .createComputedData({ id: "numeric", as: "sourceValue", expression: { op: "toNumber", operand: { field: "value" } } })
    .createComputedData({ id: "dated", as: "sourceDate", expression: { op: "parseTime", operand: { field: "date" } } })
    .createComputedData({ id: "yearTyped", as: "year", expression: { op: "datePart", part: "year", operand: { field: "sourceDate" } } })
    .filterData({ id: "initialYears", field: "year", range: { min: 2003, max: 2022 } })
    .createComputedData({ id: "regionPivot0", as: "East Asia & Pacific", expression: { op: "if", condition: { op: "eq", left: { field: "Region" }, right: { constant: "East Asia & Pacific" } }, then: { field: "sourceValue" }, else: { constant: 0 } } })
    .createComputedData({ id: "regionPivot1", as: "Europe & Central Asia", expression: { op: "if", condition: { op: "eq", left: { field: "Region" }, right: { constant: "Europe & Central Asia" } }, then: { field: "sourceValue" }, else: { constant: 0 } } })
    .createComputedData({ id: "regionPivot2", as: "Latin America & Caribbean", expression: { op: "if", condition: { op: "eq", left: { field: "Region" }, right: { constant: "Latin America & Caribbean" } }, then: { field: "sourceValue" }, else: { constant: 0 } } })
    .createComputedData({ id: "regionPivot3", as: "Middle East & North Africa", expression: { op: "if", condition: { op: "eq", left: { field: "Region" }, right: { constant: "Middle East & North Africa" } }, then: { field: "sourceValue" }, else: { constant: 0 } } })
    .createComputedData({ id: "regionPivot4", as: "North America", expression: { op: "if", condition: { op: "eq", left: { field: "Region" }, right: { constant: "North America" } }, then: { field: "sourceValue" }, else: { constant: 0 } } })
    .createComputedData({ id: "regionPivot5", as: "South Asia", expression: { op: "if", condition: { op: "eq", left: { field: "Region" }, right: { constant: "South Asia" } }, then: { field: "sourceValue" }, else: { constant: 0 } } })
    .createComputedData({ id: "typedData", as: "Sub-Saharan Africa", expression: { op: "if", condition: { op: "eq", left: { field: "Region" }, right: { constant: "Sub-Saharan Africa" } }, then: { field: "sourceValue" }, else: { constant: 0 } } }).createLinePlot({ x: { field: "sourceDate", fieldType: "temporal", scale: { id: "x", domain: [1041379200000, 1577836800000] } }, y: { field: "sourceValue", scale: { id: "y", domain: [50, 101.810882568359] } }, guides: false }).createAxes({ x: { line: { color: "#888" }, ticksAndLabels: { values: [1072915200000, 1136073600000, 1199145600000, 1262304000000, 1325376000000, 1388534400000, 1451606400000, 1514764800000, 1577836800000], ticks: { color: "#888", length: 5, alongOffset: 0.5 }, labels: { fontFamily: "sans-serif", fontSize: 10, color: "black", format: "%Y", offset: 5.5, alongOffset: 0.5, flush: true } }, title: false }, y: { line: { color: "#888" }, ticksAndLabels: { values: [50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100], ticks: { color: "#888", length: 5, alongOffset: 0.5 }, labels: { fontFamily: "sans-serif", fontSize: 10, color: "black", offset: 6.5, alongOffset: 0.890625 } }, title: false } })
    .encodeColor({ field: "Region", scale: { domain: ["East Asia & Pacific", "Europe & Central Asia", "Latin America & Caribbean", "Middle East & North Africa", "North America", "South Asia", "Sub-Saharan Africa"], range: ["#4c78a8", "#f58518", "#e45756", "#72b7b2", "#eeca3b", "#b279a2", "#ff9da6"] } })
    // DOCS: doc-7f9a19c76a29a115 editLineMark adjusts appearance without changing field encodings
    .editLineMark({ strokeWidth: 2, lineCap: "butt", lineJoin: "miter" })
    .filterData({ id: "hoverEmpty", field: "date", noneOf: ["2020", "2019", "2018", "2017", "2016", "2015", "2014", "2013", "2012", "2011", "2010", "2009", "2008", "2007", "2006", "2005", "2004", "2003", "2002", "2001", "2000", "1999", "1998", "1997", "1996", "1995", "1994", "1993", "1992", "1991", "1990", "1989", "1988", "1987", "1986", "1985", "1984", "1983", "1982", "1981", "1980", "1979", "1978", "1977", "1976", "1975", "1974", "1973", "1972"] })
    .createScatterPlot({ x: { field: "sourceDate", fieldType: "temporal", scale: { id: "x", domain: [1041379200000, 1577836800000] } }, y: { field: "sourceValue", scale: { id: "y", domain: [50, 101.810882568359] } }, guides: false })
    .encodeStroke({ field: "Region", scale: { domain: ["East Asia & Pacific", "Europe & Central Asia", "Latin America & Caribbean", "Middle East & North Africa", "North America", "South Asia", "Sub-Saharan Africa"], range: ["#4c78a8", "#f58518", "#e45756", "#72b7b2", "#eeca3b", "#b279a2", "#ff9da6"] } })
    .editPointMark({ fill: "transparent", strokeWidth: 2, opacity: 0.7 })
    .encodePointRadius({ value: 2.7386127875258306 })
    .createSummaryData({ id: "ruleDates", source: "typedData", aggregates: [{ op: "sum", field: "East Asia & Pacific", as: "East Asia & Pacific" }, { op: "sum", field: "Europe & Central Asia", as: "Europe & Central Asia" }, { op: "sum", field: "Latin America & Caribbean", as: "Latin America & Caribbean" }, { op: "sum", field: "Middle East & North Africa", as: "Middle East & North Africa" }, { op: "sum", field: "North America", as: "North America" }, { op: "sum", field: "South Asia", as: "South Asia" }, { op: "sum", field: "Sub-Saharan Africa", as: "Sub-Saharan Africa" }] })
    .editSummaryData({ target: "ruleDates", groupBy: ["sourceDate"] })
    .createRuleMark({ data: "ruleDates", strokeWidth: 1, opacity: 0 })
    .encodeX({ field: "sourceDate", fieldType: "temporal", scale: { id: "x", domain: [1041379200000, 1577836800000] } })
    .editRuleMark({ stroke: "black" })
    .createGrid({ horizontal: { color: "#ddd", values: [50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100], alongOffset: 0.5 }, vertical: { color: "#ddd", values: [1072915200000, 1136073600000, 1199145600000, 1262304000000, 1325376000000, 1388534400000, 1451606400000, 1514764800000, 1577836800000], alongOffset: 0.5 } })
    .createLegend({ target: "scatterPlot", labels: { fontFamily: "sans-serif", fontSize: 10, color: "black" }, symbol: { layers: [{ type: "point", size: 5, fill: "transparent", strokeWidth: 1.5, opacity: 0.7 }] } })
    .editLegend({ titleStyle: { fontFamily: "sans-serif", fontSize: 11, fontWeight: 700, color: "black" } })
    // DOCS: doc-1ef852966df13aa6 createTitle with subtitle; alignment edited via editTitle
    .createTitle({ text: "Primary completion rate in different regions", titleStyle: { fontFamily: "sans-serif", fontSize: 15, fontWeight: 700, color: "black" }, offset: -10.484375 })
    .editTitle({ subtitle: "Source: World Bank", subtitleStyle: { fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "italic", color: "black" }, gap: 2.875 })
    .editTitle({ align: "left", alongOffset: -23.6845703125 });
}