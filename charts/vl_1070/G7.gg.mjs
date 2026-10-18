import { chart } from "ggaction";
import data from "./data.json";

// DOCS: doc-2b2e3149e57e859d, doc-8c1e8e710e83918a, doc-c5bc90785877509b

export function buildChart() {
  return chart()
    .createCanvas({
      width: 543,
      height: 377,
      margin: { left: 44, top: 40, right: 199, bottom: 37 }
    })
    .editCanvas({ plotBorder: { color: "#ddd", lineWidth: 1 } })
    .applyTextMetrics({
      profile: {
        schemaVersion: 1,
        id: "vl_1070-original-source-font-widths",
        measurements: [
          { text: "−25", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 16.96875 },
          { text: "−20", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 16.96875 },
          { text: "−15", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 16.96875 },
          { text: "−10", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 16.96875 },
          { text: "−5", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 11.40625 },
          { text: "0", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 5.5625 },
          { text: "5", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 5.5625 },
          { text: "10", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 11.125 },
          { text: "15", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 11.125 },
          { text: "20", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 11.125 },
          { text: "25", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 11.125 },
          { text: "% price rise from previous year", fontFamily: "sans-serif", fontSize: 11, fontWeight: 700, fontStyle: "normal", width: 163.859375 },
          { text: "40", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 11.125 },
          { text: "60", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 11.125 },
          { text: "80", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 11.125 },
          { text: "100", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 16.6875 },
          { text: "120", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 16.6875 },
          { text: "140", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 16.6875 },
          { text: "160", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 16.6875 },
          { text: "Weekly private rent", fontFamily: "sans-serif", fontSize: 11, fontWeight: 700, fontStyle: "normal", width: 100.6875 },
          { text: "East Midlands", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 62.8125 },
          { text: "East of England", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 70.609375 },
          { text: "London", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 33.375 },
          { text: "North East", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 47.25 },
          { text: "North West", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 49.84375 },
          { text: "South East", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 48.921875 },
          { text: "South West", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 51.515625 },
          { text: "West Midlands", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 65.40625 },
          { text: "Yorkshire and The Humber", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 118.96875 },
          { text: "Area", fontFamily: "sans-serif", fontSize: 11, fontWeight: 700, fontStyle: "normal", width: 24.46875 },
          { text: "undefined", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 43.9375 },
          { text: "up_ch12_longRunMean", fontFamily: "sans-serif", fontSize: 11, fontWeight: 700, fontStyle: "normal", width: 123.46875 },
          { text: "UK Weekly rent vs price rise 2020-21", fontFamily: "sans-serif", fontSize: 13, fontWeight: 700, fontStyle: "normal", width: 225.953125 },
          { text: "Source: 0NS and own calculations", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "italic", width: 152.3125 }
        ]
      }
    })
    .createData({ values: data })
    .createComputedData({
      id: "priceRiseN",
      as: "PriceRiseN",
      expression: { op: "toNumber", operand: { field: "Price rise " } }
    })
    .createComputedData({
      id: "rentN",
      as: "RentN",
      expression: { op: "toNumber", operand: { field: "2020-21" } }
    })
    .createComputedData({
      id: "missingSizeCategory",
      as: "__missingSizeCategory",
      expression: { constant: "undefined" }
    })
    .createScatterPlot({
      x: "PriceRiseN",
      y: "RentN",
      guides: false
    })
    .editXScale({
      domain: [-25, 25],
      nice: false
    })
    .editYScale({
      domain: [0, 160],
      nice: false
    })
    .encodeChannels({
      target: "scatterPlot",
      channels: {
        color: {
          field: "Area",
          fieldType: "ordinal",
          scale: {
            domain: ["East Midlands", "East of England", "London", "North East", "North West", "South East", "South West", "West Midlands", "Yorkshire and The Humber"],
            range: ["rgb(73, 86, 219)", "rgb(48, 155, 245)", "rgb(39, 212, 199)", "rgb(73, 247, 135)", "rgb(143, 252, 84)", "rgb(216, 225, 53)", "rgb(255, 172, 36)", "rgb(251, 104, 25)", "rgb(195, 41, 11)"]
          }
        },
        size: {
          field: "__missingSizeCategory",
          fieldType: "nominal",
          scale: { type: "ordinal", domain: ["undefined"], range: [182.5 * Math.PI / 4] }
        }
      }
    })
    .editPointMark({ target: "scatterPlot", stroke: false, opacity: 0.7 })
    .createXAxis({
      ticksAndLabels: {
        values: [-25, -20, -15, -10, -5, 0, 5, 10, 15, 20, 25],
        ticks: { length: 5 },
        labels: {
          fontSize: 10,
          offset: 5.5,
          alongOffset: 0.5,
          flush: true,
          labelMap: [
            { value: -25, label: "−25" },
            { value: -20, label: "−20" },
            { value: -15, label: "−15" },
            { value: -10, label: "−10" },
            { value: -5, label: "−5" }
          ]
        }
      },
      title: {
        text: "% price rise from previous year",
        fontSize: 11,
        fontWeight: 700,
        align: "center",
        offset: 27.578125,
        alongOffset: 0.5
      }
    })
    .editXAxisLine({ color: "#888", lineWidth: 1 })
    .editXAxisTicks({
      color: "#888"
    })
    .editXAxisLabels({
      color: "black"
    })
    .editXAxisTitle({ color: "black" })
    .createYAxis({
      ticksAndLabels: {
        values: [0, 20, 40, 60, 80, 100, 120, 140, 160],
        ticks: { length: 5 },
        labels: {
          fontSize: 10,
          offset: 6.5,
          alongOffset: 0.890625,
          align: "right"
        }
      },
      title: {
        text: "Weekly private rent",
        fontSize: 11,
        fontWeight: 700,
        align: "center",
        offset: 32.1064453125,
        alongOffset: 0.5,
        rotation: { value: -90, unit: "degrees" }
      }
    })
    .editYAxisLine({ color: "#888", lineWidth: 1 })
    .editYAxisTicks({
      color: "#888"
    })
    .editYAxisLabels({
      color: "black"
    })
    .editYAxisTitle({ color: "black" })
    .createGrid({
      horizontal: { color: "#ddd", lineWidth: 1, values: [0, 20, 40, 60, 80, 100, 120, 140, 160] },
      vertical: { color: "#ddd", lineWidth: 1, values: [-25, -20, -15, -10, -5, 0, 5, 10, 15, 20, 25] }
    })
    .createTitle({
      text: "UK Weekly rent vs price rise 2020-21",
      titleStyle: { fontSize: 13, fontWeight: 700, color: "black" },
      alongOffset: -38.6845703125
    })
    .editTitle({ offset: -10.953125 })
    .editTitle({
      subtitle: "Source: 0NS and own calculations",
      subtitleStyle: { fontSize: 10, fontWeight: 400, fontStyle: "italic", color: "black" },
      gap: 3.34375
    })
    .createGuides({
      axes: false,
      grid: false,
      legend: {
        channels: ["color"],
        titleStyle: { fontSize: 11, fontWeight: 700 },
        labels: { fontSize: 10 },
        symbol: { layers: [{ type: "point", size: 5, stroke: "transparent", strokeWidth: 0, opacity: 0.7 }] }
      }
    })
    .editLegend({
      channel: "color",
      titleStyle: { color: "black" },
      labels: { color: "black" }
    })
    .createGuides({
      axes: false,
      grid: false,
      legend: {
        channels: ["size"],
        title: "up_ch12_longRunMean",
        titleStyle: { fontSize: 11, fontWeight: 700 },
        labels: { fontSize: 10 }
      }
    })
    .editLegend({
      channel: "size",
      titleStyle: { color: "black" },
      labels: { color: "black" }
    })
    .editLegendBlock({
      target: "scatterPlot",
      channel: "size",
      symbol: { fill: "black", stroke: "transparent", opacity: 0.49 }
    });
}