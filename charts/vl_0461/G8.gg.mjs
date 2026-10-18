// DOCS: doc-2b2e3149e57e859d, doc-8c1e8e710e83918a, doc-76573a465e2b6a33
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({ width: 338, height: 473, margin: { left: 26, top: 36, right: 12, bottom: 37 } })
    .applyTextMetrics({ profile: { schemaVersion: 1, id: "vl_0461-original-source-font-widths", measurements: [
      { text: "0%", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 14.453125 },
      { text: "10%", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 20.015625 },
      { text: "20%", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 20.015625 },
      { text: "30%", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 20.015625 },
      { text: "40%", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 20.015625 },
      { text: "50%", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 20.015625 },
      { text: "60%", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 20.015625 },
      { text: "70%", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 20.015625 },
      { text: "80%", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 20.015625 },
      { text: "90%", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 20.015625 },
      { text: "Share of prices rising", fontFamily: "sans-serif", fontSize: 11, fontWeight: 700, fontStyle: "normal", width: 112.484375 },
      { text: "upRank", fontFamily: "sans-serif", fontSize: 11, fontWeight: 700, fontStyle: "normal", width: 40.34375 },
      { text: "", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 0 },
      { text: "Alcohol and tobacco", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 90.078125 },
      { text: "Clothes and shoes", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 82.84375 },
      { text: "Food and drink", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 66.71875 },
      { text: "Other goods and services", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 113.953125 },
      { text: "Relaxing, culture and hobbies", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 131.765625 },
      { text: "Item type", fontFamily: "sans-serif", fontSize: 11, fontWeight: 700, fontStyle: "normal", width: 48.296875 },
      { text: "0", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 5.5625 },
      { text: "10", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 11.125 },
      { text: "20", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 11.125 },
      { text: "30", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 11.125 },
      { text: "Price", fontFamily: "sans-serif", fontSize: 11, fontWeight: 700, fontStyle: "normal", width: 26.921875 },
      { text: "This month - top risers", fontFamily: "sans-serif", fontSize: 13, fontWeight: 700, fontStyle: "normal", width: 140.84375 },
      { text: "Hover for item detail. Bubble size based on median price", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "italic", width: 250.703125 }
    ] } })
    .createData({ values: data })
    .createComputedData({ id: "down", as: "down", expression: { op: "multiply", left: { op: "toNumber", operand: { field: "down_sh" } }, right: { constant: -1 } } })
    .createComputedData({ id: "RankN", as: "RankN", expression: { op: "toNumber", operand: { field: "upRank" } } })
    .createComputedData({ id: "ShareN", as: "ShareN", expression: { op: "toNumber", operand: { field: "up_sh" } } })
    .createComputedData({ id: "PriceN", as: "PriceN", expression: { op: "toNumber", operand: { field: "p" } } })
    .filterData({ id: "topRisers", field: "RankN", range: { min: 550, minInclusive: false } })
    .createScatterPlot({
      x: "ShareN",
      y: "RankN",
      guides: false
    })
    .editXScale({ target: "scatterPlot", domain: [0, 0.9], nice: false })
    .editYScale({ target: "scatterPlot", domain: [550, 590], nice: false })
    .encodeChannels({
      target: "scatterPlot",
      channels: {
        color: { field: "name1", fieldType: "ordinal", scale: { domain: ["", "Alcohol and tobacco", "Clothes and shoes", "Food and drink", "Other goods and services", "Relaxing, culture and hobbies"], range: ["#e41a1c", "#377eb8", "#4daf4a", "#984ea3", "#ff7f00", "#ffff33", "#a65628", "#f781bf", "#999999"] } },
        size: { field: "PriceN", fieldType: "quantitative", scale: { type: "linear", domain: [0, 39], range: [Math.PI, 361 * Math.PI / 4] } }
      }
    })
    .editPointMark({ stroke: false, opacity: 0.8 })
    .createTitle({ text: "This month - top risers", titleStyle: { fontSize: 13, fontWeight: 700, color: "black" }, alongOffset: -21 })
    .editTitle({ offset: -10.953125 })
    .editTitle({ subtitle: "Hover for item detail. Bubble size based on median price", subtitleStyle: { fontSize: 10, fontWeight: 400, fontStyle: "italic", color: "black" }, gap: 3.34375 })
    .createXAxis({
      ticksAndLabels: { values: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9], ticks: { length: 5 }, labels: { fontSize: 10, format: ".0%", offset: 5.5, alongOffset: 0.5, flush: true } },
      title: { text: "Share of prices rising", fontSize: 11, fontWeight: 700, offset: 27.578125, alongOffset: 0.5 }
    })
    .editXAxisLine({ color: "#888", lineWidth: 1 })
    .editXAxisTicks({ color: "#888" })
    .editXAxisLabels({ color: "black" })
    .editXAxisTitle({ color: "black" })
    .createYAxis({
      ticksAndLabels: { values: [550, 555, 560, 565, 570, 575, 580, 585, 590], ticks: { length: 5 }, labels: { labelMap: [
          { value: 550, label: "" }, { value: 555, label: "" }, { value: 560, label: "" }, { value: 565, label: "" }, { value: 570, label: "" },
          { value: 575, label: "" }, { value: 580, label: "" }, { value: 585, label: "" }, { value: 590, label: "" }
        ] } },
      title: { text: "upRank", fontSize: 11, fontWeight: 700, offset: 14.421875, alongOffset: 0.5, rotation: { value: -90, unit: "degrees" } }
    })
    .editYAxisLine({ color: "#888", lineWidth: 1 })
    .editYAxisTicks({ color: "#888" })
    .editYAxisTitle({ color: "black" })
    .createGuides({
      axes: false,
      grid: false,
      legend: { channels: ["color"], position: "top-left", title: "Item type", titleStyle: { fontSize: 11, fontWeight: 700 }, labels: { fontSize: 10 }, symbol: { layers: [{ type: "point", size: 5, stroke: "transparent", strokeWidth: 0, opacity: 0.8 }] } }
    })
    .editLegendTitle({ target: "scatterPlot", channel: "color", color: "black" })
    .editLegendLabels({ target: "scatterPlot", channel: "color", color: "black" })
    .editLegendBlock({ target: "scatterPlot", channel: "color", position: "top-left" })
    .editLegendBlock({ target: "scatterPlot", channel: "color", labelMap: [{ value: "", label: "" }] })
    .createGuides({
      axes: false,
      grid: false,
      legend: { channels: ["size"], position: "bottom-left", title: "Price", titleStyle: { fontSize: 11, fontWeight: 700 }, labels: { fontSize: 10 } }
    })
    .editLegendTitle({ channel: "size", color: "black" })
    .editLegendLabels({ channel: "size", color: "black" })
    .editLegendBlock({ target: "scatterPlot", channel: "size", symbol: { fill: "black", stroke: "transparent", opacity: 0.64 } });
}