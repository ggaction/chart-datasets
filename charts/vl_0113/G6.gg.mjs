// DOCS: doc-2b2e3149e57e859d, doc-c5bc90785877509b, doc-8c1e8e710e83918a
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({ width: 800, height: 577, margin: { left: 59, top: 20, right: 141, bottom: 57 } })
    .applyTextMetrics({ profile: { schemaVersion: 1, id: "vl_0113-original-source-font-widths", measurements: [
      { text: "0", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 5.5625 },
      { text: "1", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 5.5625 },
      { text: "2", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 5.5625 },
      { text: "3", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 5.5625 },
      { text: "4", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 5.5625 },
      { text: "5", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 5.5625 },
      { text: "6", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 5.5625 },
      { text: "7", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 5.5625 },
      { text: "8", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 5.5625 },
      { text: "9", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 5.5625 },
      { text: "10", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 11.125 },
      { text: "11", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 10.390625 },
      { text: "12", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 11.125 },
      { text: "13", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 11.125 },
      { text: "14", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 11.125 },
      { text: "15", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 11.125 },
      { text: "16", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 11.125 },
      { text: "17", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 11.125 },
      { text: "18", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 11.125 },
      { text: "19", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 11.125 },
      { text: "20", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 11.125 },
      { text: "Alpha", fontFamily: "sans-serif", fontSize: 11, fontWeight: 700, fontStyle: "normal", width: 30.5625 },
      { text: "25", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 11.125 },
      { text: "30", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 11.125 },
      { text: "35", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 11.125 },
      { text: "40", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 11.125 },
      { text: "45", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 11.125 },
      { text: "50", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 11.125 },
      { text: "Beta", fontFamily: "sans-serif", fontSize: 11, fontWeight: 700, fontStyle: "normal", width: 23.84375 },
      { text: "−5,400", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 30.875 },
      { text: "−5,200", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 30.875 },
      { text: "−5,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 30.875 },
      { text: "−4,800", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 30.875 },
      { text: "Log-likelihood", fontFamily: "sans-serif", fontSize: 11, fontWeight: 700, fontStyle: "normal", width: 75.171875 },
      { text: "< -5200", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 34.203125 },
      { text: "-5200 – -5000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 62.28125 },
      { text: "-5000 – -4800", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 62.28125 },
      { text: "≥ -4800", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 33.84375 }
    ] } })
    .createData({ id: "source", values: data })
    .createComputedData({ id: "alphaNum", as: "alphaNum", expression: { op: "toNumber", operand: { field: "alpha" } } })
    .createComputedData({ id: "betaNum", as: "betaNum", expression: { op: "toNumber", operand: { field: "beta" } } })
    .createComputedData({ id: "llhdNum", as: "llhdNum", expression: { op: "toNumber", operand: { field: "llhd" } } })
    .createScatterPlot({ x: "alphaNum", y: "betaNum", guides: false })
    .editXScale({ domain: [0, 20], nice: false })
    .editYScale({ domain: [0, 50], nice: false })
    .encodeStroke({ field: "llhdNum", fieldType: "quantitative", scale: { type: "sequential", domain: [-5498.03028299919, -4745.15806714006], range: ["green", "yellow", "orange", "red"], interpolate: "hcl", whitePoint: "d50" } })
    .encodeSize({ field: "llhdNum", fieldType: "quantitative", scale: { type: "threshold", domain: [-5200, -5000, -4800], range: [5 * Math.PI / 4, 25 * Math.PI / 4, 125 * Math.PI / 4, 625 * Math.PI / 4] } })
    .editPointMark({ fill: "transparent", opacity: 0.7, strokeWidth: 2 })
    .createXAxis({
      offset: 20,
      ticksAndLabels: { values: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20], ticks: { length: 5 }, labels: { fontSize: 10, offset: 5.5, alongOffset: 0.5, flush: true } },
      title: { text: "Alpha", fontSize: 11, fontWeight: 700, offset: 27.578125, alongOffset: 0.5 }
    })
    .editXAxisLine({ color: "#888", lineWidth: 1 })
    .editXAxisTicks({ color: "#888" })
    .editXAxisLabels({ color: "black" })
    .editXAxisTitle({ color: "black" })
    .createYAxis({
      offset: 20,
      ticksAndLabels: { values: [0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50], ticks: { length: 5 }, labels: { fontSize: 10, offset: 6.5, alongOffset: 0.890625 } },
      title: { text: "Beta", fontSize: 11, fontWeight: 700, offset: 26.544921875, alongOffset: 0.5, rotation: { value: -90, unit: "degrees" } }
    })
    .editYAxisLine({ color: "#888", lineWidth: 1 })
    .editYAxisTicks({ color: "#888" })
    .editYAxisLabels({ color: "black" })
    .editYAxisTitle({ color: "black" })
    .createGuides({ axes: false, grid: false, legend: { target: "scatterPlot", channels: ["stroke"], title: "Log-likelihood", titleStyle: { fontSize: 11, fontWeight: 700, color: "black" }, labels: { fontSize: 10, color: "black", format: ",.0f" }, gradient: { length: 200, opacity: 0.7 } } })
    .createGuides({ axes: false, grid: false, legend: { target: "scatterPlot", channels: ["size"], title: "Log-likelihood", titleStyle: { fontSize: 11, fontWeight: 700, color: "black" }, labels: { fontSize: 10, color: "black" } } })
    .editLegendBlock({ target: "scatterPlot", channel: "size", symbol: { fill: "transparent", stroke: "#888", strokeWidth: 1.5, opacity: 0.7 } });
}