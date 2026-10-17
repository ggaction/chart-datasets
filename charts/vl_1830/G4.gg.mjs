import { chart } from "ggaction";
import data from "./data.json";
// DOCS: doc-dfae58344d5a524e doc-fc11e9fb291905d1 doc-6c2c08869091f6a0

export function buildChart() {
  return chart()
    .createCanvas({
      width: 536,
      height: 446,
      margin: { left: 44, top: 10, right: 92, bottom: 37 }
    })
    .createData({ values: data })
    .filterData({
      id: "weekRange",
      field: "Week",
      range: { min: "2010-12-01", max: "2020-12-30" }
    })
    .createComputedData({
      id: "valueNum",
      as: "ValueNum",
      expression: { op: "toNumber", operand: { field: "Value" } }
    })
    .createSortedData({
      id: "sourceStackOrder",
      sortBy: [{ field: "Measure", order: "descending" }]
    })
    .createBarPlot({
      x: { field: "Week", fieldType: "temporal" },
      y: { field: "ValueNum", fieldType: "quantitative" },
      guides: false
    })
    .editXScale({ domain: [1450988307692, 1611027692307], nice: false })
    .editYScale({ domain: [0, 220] })
    .encodeColor({ field: "Measure", layout: "stack" })
    .editColorScale({
      domain: ["Bird Bath", "Bird Feeder", "Bird Seed"],
      range: [
        "#4c78a8", "#f58518", "#e45756", "#72b7b2", "#54a24b",
        "#eeca3b", "#b279a2", "#ff9da6", "#9d755d", "#bab0ac"
      ]
    })
    .encodeBarWidth({ pixels: 5 })
    .applyTextMetrics({
      profile: {
        id: "source-axis-glyphs",
        schemaVersion: 1,
        measurements: [
          { text: "2016", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 22.25 },
          { text: "2017", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 22.24999237060547 },
          { text: "2018", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 22.25 },
          { text: "2019", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 22.25 },
          { text: "2020", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 22.25 },
          { text: "2021", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 22.25 },
          { text: "0", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 5.5625 },
          { text: "20", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 11.125 },
          { text: "40", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 11.125 },
          { text: "60", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 11.125 },
          { text: "80", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 11.125 },
          { text: "100", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 16.6875 },
          { text: "120", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 16.6875 },
          { text: "140", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 16.6875 },
          { text: "160", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 16.6875 },
          { text: "180", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 16.6875 },
          { text: "200", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 16.6875 },
          { text: "220", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 16.6875 }
        ]
      }
    })
    .createAxes({
      x: {
        line: { color: "#888" },
        ticksAndLabels: {
          values: [
            1451606400000, 1483228800000, 1514764800000,
            1546300800000, 1577836800000, 1609459200000
          ],
          ticks: { length: 5, color: "#888" },
          labels: { fontSize: 10, offset: 7, format: "%Y" }
        },
        title: { text: "Week", fontSize: 11, fontWeight: 700, offset: 30 }
      },
      y: {
        line: { color: "#888" },
        ticksAndLabels: {
          values: [0, 20, 40, 60, 80, 100, 120, 140, 160, 180, 200, 220],
          ticks: { length: 5, color: "#888" },
          labels: { fontSize: 10, offset: 7 }
        },
        title: { text: "Search index", fontSize: 11, fontWeight: 700, offset: 35 }
      }
    })
    .createGrid({
      horizontal: { color: "#ddd" },
      vertical: { color: "#ddd" }
    })
    .createLegend({
      title: "Search term",
      titleStyle: { fontSize: 11, fontWeight: 700 },
      labels: { fontSize: 10 }
    })
    .editLegend({
      symbol: { layers: [{ type: "swatch", width: 10, height: 10 }] }
    });
}