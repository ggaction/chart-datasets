import { chart } from "ggaction";
import data from "./data.json";
export function buildChart() {
  return chart()
    .createCanvas({ plot: { width: 200, height: 300 }, margin: { left: 30, right: 0, top: 68, bottom: 38 } })
    .editCanvas({ plotBorder: { color: "#ddd", lineWidth: 1, underlay: true } })
    .applyTextMetrics({ profile: { schemaVersion: 1, id: "vl_0399-own-original-SVG-0", measurements: [{ text: "0", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 5.5625 }] } })
    .createData({ values: data })
    .createFoldData({ id: "folded", fields: ["rlp10", "rlp25", "rlp50", "rlp75", "rlp90"], as: { key: "metric", value: "value" } })
    .createComputedData({ id: "labelled", as: "metricClean", expression: { op: "if", condition: { op: "eq", left: { field: "metric" }, right: { constant: "rlp10" } }, then: { constant: "10th" }, else: { op: "if", condition: { op: "eq", left: { field: "metric" }, right: { constant: "rlp25" } }, then: { constant: "25th" }, else: { op: "if", condition: { op: "eq", left: { field: "metric" }, right: { constant: "rlp50" } }, then: { constant: "50th" }, else: { op: "if", condition: { op: "eq", left: { field: "metric" }, right: { constant: "rlp75" } }, then: { constant: "75th" }, else: { constant: "90th" } } } } } })
    .createComputedData({ id: "numericX", as: "sourceSize", expression: { op: "toNumber", operand: { field: "Size" } } })
    .createComputedData({ id: "typed", as: "sourceValue", expression: { op: "toNumber", operand: { field: "value" } } }).createScatterPlot({x: {field: "sourceSize", scale: {domain: [0, 26]}}, y: {field: "sourceValue", scale: {domain: [0, 280]}}, guides: false}).createXAxis({offset: 1, ticksAndLabels: {values: [0, 5, 10, 15, 20, 25], ticks: {length: 5}, labels: {fontFamily: "sans-serif", fontSize: 10, color: "black", format: ".0f", offset: 5.5, alongOffset: 0.5, flush: true, flushThreshold: 1}}, title: {text: "Employees", fontSize: 11, fontWeight: 700, color: "black", offset: 27.578125, alongOffset: 0.5}}).editXAxisTicksAndLabels({ticks: {color: "#888", alongOffset: 0.5}}).editXAxisLine({color: "#888"}).createYAxis({offset: 1, ticksAndLabels: {values: [0, 50, 100, 150, 200, 250], ticks: {length: 5}, labels: {fontFamily: "sans-serif", fontSize: 10, color: "black", format: ".0f", offset: 6.5, alongOffset: 0.890625}}, title: false}).editYAxisTicksAndLabels({ticks: {color: "#888", alongOffset: 0.5}}).editYAxisLine({color: "#888"})
    .encodePointRadius({ value: 2.7386127875258306 })
    .encodeStroke({ field: "metricClean", scale: { domain: ["10th", "25th", "50th", "75th", "90th"], range: ["rgb(51, 10, 95)", "rgb(120, 28, 109)", "rgb(187, 55, 85)", "rgb(237, 105, 37)", "rgb(252, 181, 25)"] } })
    .editPointMark({ fill: "transparent", strokeWidth: 2, opacity: 0.7 })
    .facet({ field: "Year", data: "folded", values: ["2000", "2010", "2020"] })
    .editFacetGuides({ axes: { x: "each", y: "outer" }, legend: false })
    .editCompositionLayout({ columns: 4, gap: 22, spacing: "plot" })
    .editCompositionLayout({ topLane: "shared", padding: { right: 6, bottom: 8 } })
    .editFacetHeaders({ fontFamily: "sans-serif", fontSize: 10, fontWeight: 400 })
    .editFacetHeaders({ offset: 9.609375, anchor: "plot", color: "black" })
    .editFacetGuides({
      axes: { x: "each", y: "outer" },
      legend: {
        target: "scatterPlot",
        channels: ["stroke"],
        position: "bottom",
        direction: "horizontal",
        columns: 5,
        title: "Percentiles (estimated)",
        symbol: { layers: [{ type: "point", size: 5, fill: "transparent", strokeWidth: 1.5, opacity: 0.7 }] },
        labels: { fontFamily: "sans-serif", fontSize: 10, color: "black" },
        titleStyle: { fontFamily: "sans-serif", fontSize: 11, fontWeight: 700, color: "black", align: "left" },
        align: "left"
      }
    })
    .createTitle({ text: "Productivity distribution, by firm size", titleStyle: { fontFamily: "sans-serif", fontSize: 13, fontWeight: 700, color: "black" }, offset: -2.953125 })
    .editTitle({ subtitle: "Estimates of porductivity distribution, firms with 1-25 employees", subtitleStyle: { fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "italic", color: "black" }, gap: 3.34375 })
    .editTitle({ align: "left", alongOffset: -24.6845703125 });
}
// DOCS: doc-2dc8568cdadd5a99