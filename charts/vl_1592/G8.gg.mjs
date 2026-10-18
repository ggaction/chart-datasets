import { chart } from "ggaction";
import data from "./data.json";
// DOCS: doc-2b2e3149e57e859d, doc-8c1e8e710e83918a, doc-48c72317a1a99e17

export function buildChart() {
  return chart()
    .createCanvas({ width: 336, height: 249, margin: { left: 39, top: 10, right: 97, bottom: 39 } })
    .editCanvas({ plotBorder: { color: "#ddd", lineWidth: 1 } })
    .applyTextMetrics({ profile: { schemaVersion: 1, id: "vl_1592-original-source-font-widths", measurements: [
      { text: "0", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 5.5625 },
      { text: "50", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 11.125 },
      { text: "100", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 16.6875 },
      { text: "150", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 16.6875 },
      { text: "200", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 16.6875 },
      { text: "Horsepower", fontFamily: "sans-serif", fontSize: 11, fontWeight: 700, fontStyle: "normal", width: 63.578125 },
      { text: "10", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 11.125 },
      { text: "20", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 11.125 },
      { text: "30", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 11.125 },
      { text: "40", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 11.125 },
      { text: "Miles_per_Gallon", fontFamily: "sans-serif", fontSize: 11, fontWeight: 700, fontStyle: "normal", width: 91.09375 },
      { text: "15", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 11.125 },
      { text: "Acceleration", fontFamily: "sans-serif", fontSize: 11, fontWeight: 700, fontStyle: "normal", width: 66.03125 }
    ] } })
    .createData({ values: data })
    .createComputedData({ id: "vl1592z", as: "accelerationZScore", expression: { op: "divide", left: { op: "subtract", left: { field: "Acceleration" }, right: { constant: 15.52 } }, right: { constant: 2.8 } } })
    .filterData({ id: "vl1592hp", field: "Horsepower", noneOf: [null] })
    .filterData({ id: "vl1592mpg", field: "Miles_per_Gallon", noneOf: [null] })
    .createScatterPlot({ x: "Horsepower", y: "Miles_per_Gallon", guides: false })
    .editXScale({ domain: [0, 240], nice: false })
    .editYScale({ domain: [0, 50], nice: false })
    .encodeColor({ field: "Acceleration", fieldType: "quantitative", scale: { domain: [8, 24.8], range: ["yellow", "red"], interpolate: "cubehelix-long", gamma: 10 } })
    .encodePointRadius({ value: Math.sqrt(60) / 2 })
    .editPointMark({ opacity: 1, stroke: "none" })
    .createXAxis({
      ticksAndLabels: { values: [0, 50, 100, 150, 200], ticks: { length: 5 }, labels: { fontSize: 10, offset: 5.5, alongOffset: 0.5, flush: true } },
      title: { text: "Horsepower", fontSize: 11, fontWeight: 700, offset: 27.578125, alongOffset: 0.5 }
    })
    .editXAxisLine({ color: "#888", lineWidth: 1 })
    .editXAxisTicks({ color: "#888" })
    .editXAxisLabels({ color: "black" })
    .editXAxisTitle({ color: "black" })
    .createYAxis({
      ticksAndLabels: { values: [0, 10, 20, 30, 40, 50], ticks: { length: 5 }, labels: { fontSize: 10, offset: 6.5, alongOffset: 0.890625 } },
      title: { text: "Miles_per_Gallon", fontSize: 11, fontWeight: 700, offset: 26.544921875, alongOffset: 0.5, rotation: { value: -90, unit: "degrees" } }
    })
    .editYAxisLine({ color: "#888", lineWidth: 1 })
    .editYAxisTicks({ color: "#888" })
    .editYAxisLabels({ color: "black" })
    .editYAxisTitle({ color: "black" })
    .createGrid({
      horizontal: { values: [0, 10, 20, 30, 40, 50] },
      vertical: { values: [0, 50, 100, 150, 200] }
    })
    .editHorizontalGrid({ color: "#ddd", lineWidth: 1 })
    .editVerticalGrid({ color: "#ddd", lineWidth: 1 })
    .createLegend({
      gradient: { length: 200 },
      labels: { fontSize: 10, color: "black" },
      titleStyle: { fontSize: 11, fontWeight: 700, color: "black" }
    });
}