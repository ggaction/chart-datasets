import { chart } from "ggaction";
import data from "./data.json";
export function buildChart() {
  return chart()
    // DOCS: doc-2bd5de4bd99e314a Basic Charts — create a Canvas and dataset first, then basic facades
    .createCanvas({ width: 740, height: 387, margin: { left: 39, top: 65, right: 201, bottom: 22 } })
    .editCanvas({ plotBorder: { color: "#ddd", lineWidth: 1, underlay: true } })
    .applyTextMetrics({ profile: { schemaVersion: 1, id: "source0721-own-original-SVG", measurements: [{ text: "1820", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 22.25 }] } })
    .createData({ values: data })
    .createComputedData({ id: "numeric", as: "sourceValue", expression: { op: "toNumber", operand: { field: "Value" } } })
    .createComputedData({ id: "dated", as: "sourceYear", expression: { op: "parseTime", operand: { field: "Year" } } })
    .createComputedData({ id: "pivotAlias0", as: "Trade openness (share of exports and imports in GDP)", expression: { op: "if", condition: { op: "eq", left: { field: "Type" }, right: { constant: "Trade openness (share of exports and imports in GDP)" } }, then: { field: "sourceValue" }, else: { constant: null } } })
    .createComputedData({ id: "pivotAlias1", as: "World trade - lower bound (% of GDP) (Estevadeordal, Frantz, and Taylor (2003))", expression: { op: "if", condition: { op: "eq", left: { field: "Type" }, right: { constant: "World trade - lower bound (% of GDP) (Estevadeordal, Frantz, and Taylor (2003))" } }, then: { field: "sourceValue" }, else: { constant: null } } })
    .createComputedData({ id: "pivotAlias2", as: "World trade - upper bound (% of GDP) (Estevadeordal, Frantz, and Taylor (2003))", expression: { op: "if", condition: { op: "eq", left: { field: "Type" }, right: { constant: "World trade - upper bound (% of GDP) (Estevadeordal, Frantz, and Taylor (2003))" } }, then: { field: "sourceValue" }, else: { constant: null } } })
    .createComputedData({ id: "typedData", as: "World trade based on own estimates (% of GDP) (Klasing and Milionis (2014)) ", expression: { op: "if", condition: { op: "eq", left: { field: "Type" }, right: { constant: "World trade based on own estimates (% of GDP) (Klasing and Milionis (2014)) " } }, then: { field: "sourceValue" }, else: { constant: null } } })
    // DOCS: doc-76573a465e2b6a33 createLinePlot
    .createLinePlot({ x: { field: "sourceYear", fieldType: "temporal", scale: { id: "x", domain: [-4733596800000, 1546300800000] } }, y: { field: "sourceValue", scale: { id: "y", domain: [0, 65] } }, guides: false })
    // DOCS: doc-48c72317a1a99e17 createGuides
    .createGuides({ axes: { x: { line: { color: "#888" }, ticksAndLabels: { values: [-4733596800000, -4102444800000, -3471292800000, -2840140800000, -2208988800000, -1577923200000, -946771200000, -315619200000, 315532800000, 946684800000], ticks: { color: "#888", length: 5, alongOffset: 0.5 }, labels: { fontFamily: "sans-serif", fontSize: 10, color: "black", format: "%Y", offset: 5.5, alongOffset: 0.5, flush: true, flushThreshold: 0 } }, title: false }, y: { line: { color: "#888" }, ticksAndLabels: { values: [0, 10, 20, 30, 40, 50, 60], ticks: { color: "#888", length: 5, alongOffset: 0.5 }, labels: { fontFamily: "sans-serif", fontSize: 10, color: "black", format: ".0f", offset: 6.5, alongOffset: 0.890625 } }, title: { text: "Trade Openness Index, %", fontFamily: "sans-serif", fontSize: 11, fontWeight: 700, color: "black", offset: 26.544921875, alongOffset: 0.5 } } }, grid: false, legend: false })
    .encodeColor({ field: "Type", scale: { domain: ["Trade openness (share of exports and imports in GDP)", "World trade - lower bound (% of GDP) (Estevadeordal, Frantz, and Taylor (2003))", "World trade - upper bound (% of GDP) (Estevadeordal, Frantz, and Taylor (2003))", "World trade based on own estimates (% of GDP) (Klasing and Milionis (2014)) "], range: ["#880000", "#ee9719", "#0d9719", "#ff0303"] } })
    .editLineMark({ curve: "monotone-steffen" })
    // DOCS: doc-0c53e96a226e8a16 createScatterPlot
    .createScatterPlot({ x: { field: "sourceYear", fieldType: "temporal", scale: { id: "x", domain: [-4733596800000, 1546300800000] } }, y: { field: "sourceValue", scale: { id: "y", domain: [0, 65] } }, guides: false })
    .encodeStroke({ field: "Type", scale: { domain: ["Trade openness (share of exports and imports in GDP)", "World trade - lower bound (% of GDP) (Estevadeordal, Frantz, and Taylor (2003))", "World trade - upper bound (% of GDP) (Estevadeordal, Frantz, and Taylor (2003))", "World trade based on own estimates (% of GDP) (Klasing and Milionis (2014)) "], range: ["#880000", "#ee9719", "#0d9719", "#ff0303"] } })
    .editPointMark({ fill: "transparent", strokeWidth: 2, opacity: 0.7 })
    .encodePointRadius({ value: 2.7386127875258306 })
    .createSummaryData({ id: "ruleYears", source: "typedData", aggregates: [{ op: "sum", field: "Trade openness (share of exports and imports in GDP)", as: "Trade openness (share of exports and imports in GDP)" }, { op: "sum", field: "World trade - lower bound (% of GDP) (Estevadeordal, Frantz, and Taylor (2003))", as: "World trade - lower bound (% of GDP) (Estevadeordal, Frantz, and Taylor (2003))" }, { op: "sum", field: "World trade - upper bound (% of GDP) (Estevadeordal, Frantz, and Taylor (2003))", as: "World trade - upper bound (% of GDP) (Estevadeordal, Frantz, and Taylor (2003))" }, { op: "sum", field: "World trade based on own estimates (% of GDP) (Klasing and Milionis (2014)) ", as: "World trade based on own estimates (% of GDP) (Klasing and Milionis (2014)) " }] })
    .editSummaryData({ target: "ruleYears", groupBy: ["sourceYear"] })
    .createRuleMark({ data: "ruleYears", strokeWidth: 1, opacity: 0 })
    .encodeX({ field: "sourceYear", fieldType: "temporal", scale: { id: "x", domain: [-4733596800000, 1546300800000] } })
    .editRuleMark({ stroke: "black" })
    .createGrid({ vertical: { color: "rgba(221,221,221,0)", values: [-4733596800000, -4102444800000, -3471292800000, -2840140800000, -2208988800000, -1577923200000, -946771200000, -315619200000, 315532800000, 946684800000], alongOffset: 0.5 }, horizontal: { color: "#ddd", values: [0, 10, 20, 30, 40, 50, 60], alongOffset: 0.5 } })
    .createLegend({ target: "scatterPlot", position: "bottom-right", labels: { fontFamily: "sans-serif", fontSize: 10, color: "black" } })
    .editLegendBlock({ target: "scatterPlot", channel: "stroke", labelMap: [{ value: "Trade openness (share of exports and imports in GDP)", label: "Trade openness (share of exports…" }, { value: "World trade - lower bound (% of GDP) (Estevadeordal, Frantz, and Taylor (2003))", label: "World trade - lower bound (% of …" }, { value: "World trade - upper bound (% of GDP) (Estevadeordal, Frantz, and Taylor (2003))", label: "World trade - upper bound (% of …" }, { value: "World trade based on own estimates (% of GDP) (Klasing and Milionis (2014)) ", label: "World trade based on own estima…" }] })
    .editLegend({ position: "right", title: false, symbol: { layers: [{ type: "point", size: 5, fill: "transparent", strokeWidth: 1.5, opacity: 0.7 }] } })
    .createTitle({ text: "Trade Openness Index", titleStyle: { fontFamily: "sans-serif", fontSize: 13, fontWeight: 700, color: "black" }, offset: -10.653125762939453 })
    .editTitle({ maxWidth: 500, lineHeight: 14 })
    .editTitle({ subtitle: "History of Globalisation\nSource: Our World in Data\n", subtitleStyle: { fontFamily: "sans-serif", fontSize: 12, fontWeight: 400, fontStyle: "normal", color: "black" }, gap: 2.8125 })
    .editTitle({ align: "left", alongOffset: -33.123046875 })
    .editCanvas({ width: 740, height: 387, margin: { left: 39, top: 65, right: 201, bottom: 22 } });
}