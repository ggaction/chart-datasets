import { chart } from "ggaction";
import data from "./data.json";

// DOCS: doc-2b2e3149e57e859d, doc-8c1e8e710e83918a, doc-76573a465e2b6a33

export function buildChart() {
  return chart()
    .createCanvas({ width: 583, height: 432, margin: { left: 39, top: 41, right: 144, bottom: 91 } })
    .editCanvas({ plotBorder: { color: "#ddd", lineWidth: 1 } })
    .applyTextMetrics({ profile: { schemaVersion: 1, id: "vl_0757-original-source-font-widths", measurements: [
      { text: "0", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 5.5625 },
      { text: "10", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 11.125 },
      { text: "20", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 11.125 },
      { text: "30", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 11.125 },
      { text: "40", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 11.125 },
      { text: "50", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 11.125 },
      { text: "60", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 11.125 },
      { text: "70", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 11.125 },
      { text: "80", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 11.125 },
      { text: "90", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 11.125 },
      { text: "100", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 16.6875 },
      { text: "Religiosity (%)", fontFamily: "sans-serif", fontSize: 11, fontWeight: 700, fontStyle: "normal", width: 75.796875 },
      { text: "5", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 5.5625 },
      { text: "15", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 11.125 },
      { text: "25", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 11.125 },
      { text: "35", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 11.125 },
      { text: "45", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 11.125 },
      { text: "Median Age (years)", fontFamily: "sans-serif", fontSize: 11, fontWeight: 700, fontStyle: "normal", width: 100.46875 },
      { text: "Median_Age", fontFamily: "sans-serif", fontSize: 11, fontWeight: 700, fontStyle: "normal", width: 64.796875 },
      { text: "200,000,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 55.625 },
      { text: "400,000,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 55.625 },
      { text: "600,000,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 55.625 },
      { text: "800,000,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 55.625 },
      { text: "1,000,000,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 63.953125 },
      { text: "1,200,000,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 63.953125 },
      { text: "Population", fontFamily: "sans-serif", fontSize: 11, fontWeight: 700, fontStyle: "normal", width: 56.828125 },
      { text: "Is there a relationship between a country's religiosity level and the median age of its population?", fontFamily: "sans-serif", fontSize: 12, fontWeight: 700, fontStyle: "normal", width: 551.640625 },
      { text: "Source: Worldometers and Wikipedia", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "italic", width: 164.90625 }
    ] } })
    .createData({ values: data })
    .createComputedData({ id: "religiosityNum", as: "religiosityNum", expression: { op: "toNumber", operand: { field: "Religiosity" } } })
    .createComputedData({ id: "ageNum", as: "ageNum", expression: { op: "if", condition: { op: "eq", left: { field: "Median_Age" }, right: { constant: "" } }, then: { constant: 0 }, else: { op: "toNumber", operand: { field: "Median_Age" } } } })
    .createComputedData({ id: "populationNum", as: "populationNum", expression: { op: "if", condition: { op: "eq", left: { field: "Total_Population" }, right: { constant: "" } }, then: { constant: 0 }, else: { op: "toNumber", operand: { field: "Total_Population" } } } })
    .createScatterPlot({
      x: { field: "religiosityNum", fieldType: "quantitative", scale: { type: "linear", domain: [0, 100], nice: false } },
      y: { field: "ageNum", fieldType: "quantitative", scale: { type: "linear", domain: [0, 50], nice: false } },
      guides: false
    })
    .encodeChannels({
      target: "scatterPlot",
      channels: {
        stroke: { field: "ageNum", fieldType: "quantitative", scale: { type: "sequential", domain: [16, 48], clamp: false, palette: { name: "turbo", count: 64 }, interpolate: "rgb" } },
        size: { field: "populationNum", fieldType: "quantitative", scale: { type: "linear", domain: [0, 1380004385], range: [4 * Math.PI / 4, 361 * Math.PI / 4] } }
      }
    })
    .editPointMark({ fill: "transparent", strokeWidth: 2, opacity: 0.7 })
    .createGrid({
      horizontal: { values: [0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50], color: "#ddd", lineWidth: 1 },
      vertical: { values: [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100], color: "#ddd", lineWidth: 1 }
    })
    .createAxes({
      x: {
        line: { color: "#888", lineWidth: 1 },
        ticksAndLabels: { values: [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100], ticks: { length: 5, color: "#888", lineWidth: 1 }, labels: { fontSize: 10, color: "black", offset: 5.5, alongOffset: 0.5, flush: true } },
        title: { text: "Religiosity (%)", fontSize: 11, fontWeight: 700, color: "black", offset: 27.578125, alongOffset: 0.5 }
      },
      y: {
        line: { color: "#888", lineWidth: 1 },
        ticksAndLabels: { values: [0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50], ticks: { length: 5, color: "#888", lineWidth: 1 }, labels: { fontSize: 10, color: "black", offset: 6.5, alongOffset: 0.890625 } },
        title: { text: "Median Age (years)", fontSize: 11, fontWeight: 700, color: "black", offset: 26.544921875, alongOffset: 0.5, rotation: { value: -90, unit: "degrees" } }
      }
    })
    .createGuides({ axes: false, grid: false, legend: { channels: ["stroke"], title: "Median_Age", gradient: { length: 200, opacity: 0.7 }, titleStyle: { fontSize: 11, fontWeight: 700, color: "black" }, labels: { fontSize: 10, color: "black" } } })
    .createGuides({ axes: false, grid: false, legend: { channels: ["size"], title: "Population", labels: { format: ",.0f", fontSize: 10, color: "black" }, titleStyle: { fontSize: 11, fontWeight: 700, color: "black" } } })
    .editLegendBlock({ target: "scatterPlot", channel: "size", symbol: { fill: "transparent", stroke: "#888", strokeWidth: 1.5, opacity: 0.7 } })
    .createTitle({ text: "Is there a relationship between a country's religiosity level and the median age of its population?", titleStyle: { fontSize: 12, fontWeight: 700, color: "black" }, alongOffset: -33.123046875 })
    .editTitle({ offset: -10.1875 })
    .editTitle({ subtitle: "Source: Worldometers and Wikipedia", subtitleStyle: { fontSize: 10, fontStyle: "italic", color: "black" }, gap: 3.578125 });
}