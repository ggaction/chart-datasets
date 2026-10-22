import { chart } from "ggaction";
import data from "./data.json";

// DOCS: doc-2b2e3149e57e859d
export function buildChart() {
  return chart()
    .createCanvas({ plot: { width: 200, height: 200 }, margin: { left: 39, right: 72, top: 5, bottom: 37 }, plotBorder: { color: "#ddd", lineWidth: 1, underlay: true } })
    .applyTextMetrics({ profile: { schemaVersion: 1, id: "source1735-original-svg-text", measurements: [{ text: "0", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 5.5625 }] } })
    .createData({ values: data })
    .createComputedData({ id: "withYear", as: "YearOfManufacture", expression: { op: "datePart", part: "year", operand: { op: "parseTime", operand: { field: "Year" } } } })
    .filterData({ id: "year1970", field: "YearOfManufacture", predicate: { op: "eq", value: 1970 } })
    .filterData({ id: "eligiblePositions", field: "Miles_per_Gallon", noneOf: [null] })
    .createPointMark({ id: "scatterPlot" })
    .encodeX({ field: "Horsepower", fieldType: "quantitative", scale: { domain: [0, 240] } })
    .encodeY({ field: "Miles_per_Gallon", fieldType: "quantitative", scale: { domain: [0, 28] } })
    .createXAxis({ ticksAndLabels: { values: [0, 50, 100, 150, 200], ticks: { length: 5, alongOffset: 0.5 }, labels: { fontFamily: "sans-serif", fontSize: 10, color: "black", format: ".0f", offset: 5.5, alongOffset: 0.5, flush: true } }, title: { fontFamily: "sans-serif", fontSize: 11, fontWeight: 700, color: "black", offset: 27.578125, alongOffset: 0.5 } })
    .createYAxis({ ticksAndLabels: { values: [0, 5, 10, 15, 20, 25], ticks: { length: 5, alongOffset: 0.5 }, labels: { fontFamily: "sans-serif", fontSize: 10, color: "black", format: ".0f", offset: 6.5, alongOffset: 0.890625 } }, title: { fontFamily: "sans-serif", fontSize: 11, fontWeight: 700, color: "black", offset: 26.544921875, alongOffset: 0.5 } })
    .editXAxis({ line: { color: "#888" } })
    .editYAxis({ line: { color: "#888" } }).editXAxisTicks({ color: "#888" }).editYAxisTicks({ color: "#888" })
    .createHorizontalGrid({ color: "#ddd" }).createVerticalGrid({ color: "#ddd" })
    .editPointMark({ fill: "#4c78a8", opacity: 0.6, stroke: false })
    .encodePointRadius({ value: 2.7386127875258306 })
    .encodeShape({ field: "Origin", scale: { domain: ["Europe", "Japan", "USA"], range: [{ polygon: [{ x: -1.5, y: -1.5 }, { x: 1.5, y: -1.5 }, { x: 1.5, y: 1.5 }, { x: -1.5, y: 1.5 }], normalization: "radius" }, { polygon: [{ x: -0.5, y: -1.5 }, { x: 0.5, y: -1.5 }, { x: 0.5, y: -0.5 }, { x: 1.5, y: -0.5 }, { x: 1.5, y: 0.5 }, { x: 0.5, y: 0.5 }, { x: 0.5, y: 1.5 }, { x: -0.5, y: 1.5 }, { x: -0.5, y: 0.5 }, { x: -1.5, y: 0.5 }, { x: -1.5, y: -0.5 }, { x: -0.5, y: -0.5 }], normalization: "radius" }, { polygon: [{ x: -1.5, y: -1.5 }, { x: 1.5, y: -1.5 }, { x: 0, y: 1.5 }], normalization: "radius" }] } })
    .createLegend({ symbol: { layers: [{ type: "point", size: 5, fill: "#4c78a8", opacity: 0.6 }] }, labels: { fontFamily: "sans-serif", fontSize: 10, color: "black" }, titleStyle: { fontFamily: "sans-serif", fontSize: 11, fontWeight: 700, color: "black" } });
}