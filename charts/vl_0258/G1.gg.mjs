import { chart } from "ggaction";
import data from "./data.json";

// DOCS: doc-8c1e8e710e83918a, doc-2b2e3149e57e859d, doc-47b88b4604be8ddd

export function buildChart() {
  return chart()
    .createCanvas({
      width: 871,
      height: 455,
      margin: { left: 109, top: 18, right: 162, bottom: 37 }
    })
    .applyTextMetrics({
      profile: {
        schemaVersion: 1,
        id: "vl_0258-original-source-font-widths",
        measurements: [
          { text: "1900", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 22.25 },
          { text: "1910", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 22.25 },
          { text: "1920", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 22.25 },
          { text: "1930", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 22.25 },
          { text: "1940", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 22.25 },
          { text: "1950", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 22.25 },
          { text: "1960", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 22.25 },
          { text: "1970", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 22.25 },
          { text: "1980", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 22.25 },
          { text: "1990", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 22.25 },
          { text: "2000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 22.25 },
          { text: "2010", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 22.25 },
          { text: "Year", fontFamily: "sans-serif", fontSize: 11, fontWeight: 700, fontStyle: "normal", width: 23.265625 },
          { text: "Drought", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 35.578125 },
          { text: "Earthquake", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 51.15625 },
          { text: "Epidemic", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 41.140625 },
          { text: "Extreme temperature", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 93.9375 },
          { text: "Extreme weather", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 75.59375 },
          { text: "Flood", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 25.015625 },
          { text: "Landslide", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 42.8125 },
          { text: "Mass movement (dry)", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 96.6875 },
          { text: "Volcanic activity", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 70.59375 },
          { text: "Wildfire", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 33.34375 },
          { text: "0", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 5.5625 },
          { text: "1,000,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 44.5 },
          { text: "2,000,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 44.5 },
          { text: "3,000,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 44.5 },
          { text: "Annual Global Deaths", fontFamily: "sans-serif", fontSize: 11, fontWeight: 700, fontStyle: "normal", width: 114.296875 }
        ]
      }
    })
    .createData({ values: data })
    .createComputedData({
      id: "yearMs",
      as: "YearMs",
      expression: { op: "parseTime", operand: { field: "Year" }, format: "auto" }
    })
    .createComputedData({
      id: "deathsN",
      as: "DeathsN",
      expression: { op: "toNumber", operand: { field: "Deaths" } }
    })
    .filterData({
      id: "disasterRows",
      field: "Entity",
      noneOf: ["All natural disasters"]
    })
    .createScatterPlot({
      x: {
        field: "YearMs",
        fieldType: "temporal",
        scale: { type: "time", domain: [-2208988800000, 1483228800000], nice: false }
      },
      y: {
        field: "Entity",
        fieldType: "nominal",
        scale: {
          type: "point",
          domain: ["Drought", "Earthquake", "Epidemic", "Extreme temperature", "Extreme weather", "Flood", "Landslide", "Mass movement (dry)", "Volcanic activity", "Wildfire"],
          padding: 0.5
        }
      },
      guides: false
    })
    .encodeChannels({
      target: "scatterPlot",
      channels: {
        color: {
          field: "Entity",
          fieldType: "nominal",
          scale: {
            domain: ["Drought", "Earthquake", "Epidemic", "Extreme temperature", "Extreme weather", "Flood", "Landslide", "Mass movement (dry)", "Volcanic activity", "Wildfire"],
            range: ["#4c78a8", "#f58518", "#e45756", "#72b7b2", "#54a24b", "#eeca3b", "#b279a2", "#ff9da6", "#9d755d", "#bab0ac"]
          }
        },
        size: {
          field: "DeathsN",
          fieldType: "quantitative",
          scale: { type: "linear", domain: [0, 3700000], range: [Math.PI, 5000 * Math.PI / 4] }
        }
      }
    })
    .editPointMark({ stroke: "black", strokeWidth: 1, opacity: 0.8 })
    .editCanvas({ plotBorder: { color: "#ddd", lineWidth: 1 } })
    .createAxes({
      x: {
        line: { color: "#888", lineWidth: 1 },
        ticksAndLabels: {
          values: [-2208988800000, -1893456000000, -1577923200000, -1262304000000, -946771200000, -631152000000, -315619200000, 0, 315532800000, 631152000000, 946684800000, 1262304000000],
          ticks: { length: 5, color: "#888" },
          labels: { fontSize: 10, color: "black", offset: 5.5, alongOffset: 0.5, format: "%Y", flush: true }
        },
        title: { text: "Year", fontSize: 11, fontWeight: 700, color: "black", offset: 27.578125, alongOffset: 0.5 }
      },
      y: {
        line: { color: "#888", lineWidth: 1 },
        ticksAndLabels: {
          values: ["Drought", "Earthquake", "Epidemic", "Extreme temperature", "Extreme weather", "Flood", "Landslide", "Mass movement (dry)", "Volcanic activity", "Wildfire"],
          ticks: { length: 5, color: "#888" },
          labels: { fontSize: 10, color: "black", offset: 6.5, alongOffset: 0.890625 }
        },
        title: false
      }
    })
    .createGuides({
      axes: false,
      grid: false,
      legend: {
        channels: ["size"],
        title: "Annual Global Deaths",
        titleStyle: { fontSize: 11, fontWeight: 700, color: "black" },
        labels: { fontSize: 10, color: "black", format: ",.0f" },
        clipHeight: 30
      }
    })
    .editLegendBlock({
      target: "scatterPlot",
      channel: "size",
      symbol: { fill: "rgba(0,0,0,0.8)", stroke: "black", strokeWidth: 1, opacity: 0.8 }
    });
}