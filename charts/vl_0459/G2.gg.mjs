// DOCS: doc-2b2e3149e57e859d, doc-5deedd38b1bd8474, doc-8c1e8e710e83918a
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({ width: 349, height: 572, margin: { left: 41, top: 40, right: 8, bottom: 232 } })
    .applyTextMetrics({
      profile: {
        schemaVersion: 1,
        id: "vl_0459-original-source-font-widths",
        measurements: [
          { text: "0.0", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 13.90625 },
          { text: "0.1", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 13.90625 },
          { text: "0.2", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 13.90625 },
          { text: "0.3", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 13.90625 },
          { text: "0.4", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 13.90625 },
          { text: "0.5", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 13.90625 },
          { text: "0.6", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 13.90625 },
          { text: "0.7", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 13.90625 },
          { text: "0.8", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 13.90625 },
          { text: "0.9", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 13.90625 },
          { text: "1.0", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 13.90625 },
          { text: "Prices cut", fontFamily: "sans-serif", fontSize: 11, fontWeight: 700, fontStyle: "normal", width: 52.59375 },
          { text: "Prices rising", fontFamily: "sans-serif", fontSize: 11, fontWeight: 700, fontStyle: "normal", width: 66.046875 },
          { text: "", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 0 },
          { text: "Alcohol and tobacco", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 90.078125 },
          { text: "Cars and transport", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 82.828125 },
          { text: "Clothes and shoes", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 82.84375 },
          { text: "Eating out and hotels", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 93.96875 },
          { text: "Food and drink", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 66.71875 },
          { text: "Household", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 47.8125 },
          { text: "Housing and utilities", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 89.5 },
          { text: "Medical and health", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 83.953125 },
          { text: "Other goods and services", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 113.953125 },
          { text: "Relaxing, culture and hobbies", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 131.765625 },
          { text: "Telphones and post", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 86.734375 },
          { text: "Item type", fontFamily: "sans-serif", fontSize: 11, fontWeight: 700, fontStyle: "normal", width: 48.296875 },
          { text: "0", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 5.5625 },
          { text: "500", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 16.6875 },
          { text: "1,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 25.03125 },
          { text: "1,500", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 25.03125 },
          { text: "2,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 25.03125 },
          { text: "2,500", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 25.03125 },
          { text: "Price", fontFamily: "sans-serif", fontSize: 11, fontWeight: 700, fontStyle: "normal", width: 26.921875 },
          { text: "All items - price rises and cuts - [Hover for detail]", fontFamily: "sans-serif", fontSize: 13, fontWeight: 700, fontStyle: "normal", width: 303.421875 },
          { text: "Share of prices rising and falling for each consumer item", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "italic", width: 249.578125 }
        ]
      }
    })
    .createData({ values: data })
    .createComputedData({ id: "DownShareN", as: "DownShareN", expression: { op: "toNumber", operand: { field: "down_sh" } } })
    .createComputedData({ id: "UpShareN", as: "UpShareN", expression: { op: "toNumber", operand: { field: "up_sh" } } })
    .createComputedData({ id: "PriceN", as: "PriceN", expression: { op: "toNumber", operand: { field: "p" } } })
    .createScatterPlot({
      guides: false,
      x: { field: "DownShareN", fieldType: "quantitative" },
      y: { field: "UpShareN", fieldType: "quantitative" }
    })
    .editXScale({ domain: [0, 1], nice: false })
    .editYScale({ domain: [0, 0.9], nice: false })
    .encodeChannels({
      target: "scatterPlot",
      channels: {
        color: {
          field: "name1",
          fieldType: "ordinal",
          scale: {
            domain: ["", "Alcohol and tobacco", "Cars and transport", "Clothes and shoes", "Eating out and hotels", "Food and drink", "Household", "Housing and utilities", "Medical and health", "Other goods and services", "Relaxing, culture and hobbies", "Telphones and post"],
            range: ["#e41a1c", "#377eb8", "#4daf4a", "#984ea3", "#ff7f00", "#ffff33", "#a65628", "#f781bf", "#999999"]
          }
        },
        size: { field: "PriceN", fieldType: "quantitative", scale: { type: "linear", domain: [0, 2809], range: [20 * Math.PI / 4, 500 * Math.PI / 4] } }
      }
    })
    .editPointMark({ target: "scatterPlot", stroke: false, opacity: 0.8 })
    .createAxes({
      x: {
        line: { color: "#888", lineWidth: 1 },
        ticksAndLabels: {
          values: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1],
          ticks: { length: 5, color: "#888" },
          labels: { fontSize: 10, color: "black", format: ".1f", offset: 5.5, alongOffset: 0.5, flush: true }
        },
        title: { text: "Prices cut", fontSize: 11, fontWeight: 700, color: "black", offset: 27.578125, alongOffset: 0.5 }
      },
      y: {
        line: { color: "#888", lineWidth: 1 },
        ticksAndLabels: {
          values: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9],
          ticks: { length: 5, color: "#888" },
          labels: { fontSize: 10, color: "black", format: ".1f", offset: 6.5, alongOffset: 0.890625 }
        },
        title: { text: "Prices rising", fontSize: 11, fontWeight: 700, color: "black", offset: 29.3232421875, alongOffset: 0.5, rotation: { value: -90, unit: "degrees" } }
      }
    })
    .createTitle({ text: "All items - price rises and cuts - [Hover for detail]", titleStyle: { fontSize: 13, fontWeight: 700, color: "black" }, alongOffset: -35.9013671875 })
    .editTitle({ offset: -10.953125 })
    .editTitle({ subtitle: "Share of prices rising and falling for each consumer item", subtitleStyle: { fontSize: 10, fontWeight: 400, fontStyle: "italic", color: "black" }, gap: 3.34375 })
    .createGuides({
      axes: false,
      grid: false,
      legend: {
        channels: ["color"],
        position: "bottom",
        columns: 2,
        title: "Item type",
        titleStyle: { fontSize: 11, fontWeight: 700, color: "black" },
        labels: { fontSize: 10, color: "black" },
        symbol: { layers: [{ type: "point", size: 5, stroke: "transparent", strokeWidth: 0, opacity: 0.8 }] }
      }
    })
    .editLegendBlock({ target: "scatterPlot", channel: "color", position: "bottom" })
    .editLegendBlock({
      target: "scatterPlot",
      channel: "color",
      labelMap: [{ value: "", label: "" }]
    })
    .createGuides({
      axes: false,
      grid: false,
      legend: {
        channels: ["size"],
        position: "top-right",
        title: "Price",
        titleStyle: { fontSize: 11, fontWeight: 700, color: "black" },
        labels: { fontSize: 10, color: "black" }
      }
    })
    .editLegendBlock({
      target: "scatterPlot",
      channel: "size",
      symbol: { fill: "black", stroke: "transparent", opacity: 0.64 }
    });
}