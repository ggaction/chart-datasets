// DOCS: doc-e790db38fc2a278a, doc-2e6240c00cb297cc, doc-d9e3b1b7add0d2c6
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({ width: 748, height: 464, margin: { left: 56, top: 27, right: 92, bottom: 37 } })
    .editCanvas({ background: "#FcFdFd" })
    .applyTextMetrics({ profile: {
      schemaVersion: 1,
      id: "source-actual-font-metrics",
      measurements: [
        { text: "0.0%", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 22.79296875 },
        { text: "0.5%", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 22.79296875 },
        { text: "1.0%", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 22.79296875 },
        { text: "1.5%", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 22.79296875 },
        { text: "2.0%", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 22.79296875 },
        { text: "2.5%", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 22.79296875 },
        { text: "3.0%", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 22.79296875 },
        { text: "3.5%", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 22.79296875 },
        { text: "4.0%", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 22.79296875 },
        { text: "4.5%", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 22.79296875 },
        { text: "5.0%", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 22.79296875 },
        { text: "5.5%", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 22.79296875 },
        { text: "6.0%", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 22.79296875 },
        { text: "6.5%", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 22.79296875 },
        { text: "7.0%", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 22.79296875 },
        { text: "7.5%", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 22.79296875 },
        { text: "8.0%", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 22.79296875 },
        { text: "8.5%", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 22.79296875 },
        { text: "9.0%", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 22.79296875 },
        { text: "Cases / Population", fontFamily: "sans-serif", fontSize: 11, fontWeight: 700, fontStyle: "normal", width: 98.4091796875 },
        { text: "0.00%", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 28.3544921875 },
        { text: "0.02%", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 28.3544921875 },
        { text: "0.04%", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 28.3544921875 },
        { text: "0.06%", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 28.3544921875 },
        { text: "0.08%", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 28.3544921875 },
        { text: "0.10%", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 28.3544921875 },
        { text: "0.12%", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 28.3544921875 },
        { text: "0.14%", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 28.3544921875 },
        { text: "0.16%", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 28.3544921875 },
        { text: "Deaths / Population", fontFamily: "sans-serif", fontSize: 11, fontWeight: 700, fontStyle: "normal", width: 102.673828125 },
        { text: "Africa", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 25.5615234375 },
        { text: "America", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 36.6748046875 },
        { text: "Asia", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 19.453125 },
        { text: "Europe", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 32.24609375 },
        { text: "Oceania", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 37.24609375 },
        { text: "continentexp", fontFamily: "sans-serif", fontSize: 11, fontWeight: 700, fontStyle: "normal", width: 68.44921875 },
        { text: "COVID-19 - CASES AND DEATHS PER CAPITA", fontFamily: "sans-serif", fontSize: 13, fontWeight: 700, fontStyle: "normal", width: 285.56201171875 }
      ]
    } })
    .createData({ values: data })
    .filterData({ id: "selectedDate", field: "date", oneOf: ["20201130"] })
    .createComputedData({ id: "deathsTyped", as: "sourceDeaths", expression: { op: "toNumber", operand: { field: "deaths_cml" } } })
    .filterData({ id: "sourceLowDeaths", field: "sourceDeaths", predicate: { op: "lt", value: 30000 } })
    .createComputedData({ id: "typedX", as: "sourceX", expression: { op: "if", condition: { op: "eq", left: { field: "cases_cml_pop" }, right: { constant: "" } }, then: { constant: 0 }, else: { op: "toNumber", operand: { field: "cases_cml_pop" } } } })
    .createComputedData({ id: "typedY", as: "sourceY", expression: { op: "if", condition: { op: "eq", left: { field: "deaths_cml_pop" }, right: { constant: "" } }, then: { constant: 0 }, else: { op: "toNumber", operand: { field: "deaths_cml_pop" } } } })
    .createScatterPlot({ x: { field: "sourceX" }, y: { field: "sourceY" }, guides: false })
    .editXScale({ target: "scatterPlot", domain: [0, 0.09], nice: false })
    .editYScale({ target: "scatterPlot", domain: [0, 0.0016], nice: false })
    .encodeStroke({ field: "continentexp" })
    .editPointMark({ fill: "transparent", strokeWidth: 2, opacity: 1 })
    .encodePointRadius({ value: Math.sqrt(300) / 2 })
    .editStrokeScale({ target: "scatterPlot", domain: ["Africa", "America", "Asia", "Europe", "Oceania"], palette: "category10" })
    .createAxes({
      x: {
        position: "bottom",
        line: { color: "#888" },
        ticksAndLabels: {
          values: [0, 0.005, 0.01, 0.015, 0.02, 0.025, 0.03, 0.035, 0.04, 0.045, 0.05, 0.055, 0.06, 0.065, 0.07, 0.075, 0.08, 0.085, 0.09],
          ticks: { length: 5, color: "#888" },
          labels: {
            fontSize: 10, color: "black", offset: 7, flush: true,
            labelMap: [
              { value: 0, label: "0.0%" }, { value: 0.005, label: "" }, { value: 0.01, label: "1.0%" },
              { value: 0.015, label: "1.5%" }, { value: 0.02, label: "2.0%" }, { value: 0.025, label: "2.5%" },
              { value: 0.03, label: "3.0%" }, { value: 0.035, label: "3.5%" }, { value: 0.04, label: "4.0%" },
              { value: 0.045, label: "4.5%" }, { value: 0.05, label: "5.0%" }, { value: 0.055, label: "5.5%" },
              { value: 0.06, label: "6.0%" }, { value: 0.065, label: "6.5%" }, { value: 0.07, label: "7.0%" },
              { value: 0.075, label: "7.5%" }, { value: 0.08, label: "8.0%" }, { value: 0.085, label: "8.5%" },
              { value: 0.09, label: "" }
            ]
          }
        },
        title: { text: "Cases / Population", fontSize: 11, fontWeight: 700, color: "black", offset: 27.578125 }
      },
      y: {
        position: "left",
        line: { color: "#888" },
        ticksAndLabels: {
          values: [0, 0.0002, 0.0004, 0.0006, 0.0008, 0.001, 0.0012, 0.0014, 0.0016],
          ticks: { length: 5, color: "#888" },
          labels: {
            fontSize: 10, color: "black", offset: 7,
            labelMap: [
              { value: 0, label: "0.00%" }, { value: 0.0002, label: "0.02%" }, { value: 0.0004, label: "0.04%" },
              { value: 0.0006, label: "0.06%" }, { value: 0.0008, label: "0.08%" }, { value: 0.001, label: "0.10%" },
              { value: 0.0012, label: "0.12%" }, { value: 0.0014, label: "0.14%" }, { value: 0.0016, label: "0.16%" }
            ]
          }
        },
        title: { text: "Deaths / Population", fontSize: 11, fontWeight: 700, color: "black", offset: 43.7763671875, rotation: { value: -90, unit: "degrees" } }
      }
    })
    .createGuides({
      axes: false,
      grid: false,
      legend: {
        channels: ["stroke"],
        position: "right",
        title: "continentexp",
        titleStyle: { fontSize: 11, fontWeight: 700, color: "black" },
        labels: { fontSize: 10, color: "black" },
        symbol: { layers: [{ type: "point", shape: "circle", size: 5, fill: "transparent", strokeWidth: 1.5 }] }
      }
    })
    .createTitle({ text: "COVID-19 - CASES AND DEATHS PER CAPITA", titleStyle: { fontSize: 13, fontWeight: 700, color: "black" }, offset: -10.953125 })
    .editTitle({ alongOffset: -50.3544921875 });
}