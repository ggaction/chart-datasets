// DOCS: doc-e790db38fc2a278a, doc-76573a465e2b6a33, doc-2e6240c00cb297cc
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({ width: 451, height: 571, margin: { left: 39, top: 10, right: 112, bottom: 261 } })
    .createData({ values: data })
    .filterData({ id: "validHp", field: "Horsepower", predicate: { op: "gte", value: 0 } })
    .filterData({ id: "validMpg", field: "Miles_per_Gallon", predicate: { op: "gte", value: 0 } })
    .createScatterPlot({
      x: { field: "Horsepower", fieldType: "quantitative" },
      y: { field: "Miles_per_Gallon", fieldType: "quantitative" },
      guides: false
    })
    .editXScale({ domain: [0, 240] })
    .editYScale({ domain: [0, 50] })
    .encodeColor({
      field: "Origin",
      scale: {
        type: "ordinal",
        domain: ["Europe", "Japan", "USA"],
        range: ["#4c78a8", "#f58518", "#e45756", "#72b7b2", "#54a24b", "#eeca3b", "#b279a2", "#ff9da6", "#9d755d", "#bab0ac"]
      }
    })
    .encodeSize({
      field: "Horsepower",
      scale: { type: "linear", domain: [0, 230], range: [4 * Math.PI / 4, 361 * Math.PI / 4] }
    })
    .encodeOpacity({
      field: "Weight_in_lbs",
      scale: { type: "linear", domain: [1613, 5140], range: [0.3, 0.8] }
    })
    .createGuides({
      axes: {
        x: {
          line: { color: "#888" },
          ticksAndLabels: {
            values: [0, 40, 80, 120, 160, 200, 240],
            ticks: { length: 5, color: "#888" },
            labels: { fontSize: 10, offset: 7 }
          },
          title: { text: "Horsepower", fontSize: 11, fontWeight: 700, offset: 31 }
        },
        y: {
          line: { color: "#888" },
          ticksAndLabels: {
            values: [0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50],
            ticks: { length: 5, color: "#888" },
            labels: { fontSize: 10, offset: 7 }
          },
          title: { text: "Miles_per_Gallon", fontSize: 11, fontWeight: 700, offset: 28 }
        }
      },
      grid: { horizontal: { color: "#ddd", lineWidth: 1 }, vertical: { color: "#ddd", lineWidth: 1 } },
      legend: false
    })
    .createLegend({ channels: ["color", "size"], labels: { fontSize: 10 }, titleStyle: { fontSize: 11, fontWeight: 700 } })
    .createLegend({ channels: ["opacity"], labels: { fontSize: 10, format: ",.0f" }, titleStyle: { fontSize: 11, fontWeight: 700 } })
    .editLegendBlock({ target: "scatterPlot", channel: "size", values: [0, 50, 100, 150, 200] })
    .editLegendBlock({ target: "scatterPlot", channel: "opacity", values: [2000, 2500, 3000, 3500, 4000, 4500, 5000] })    .editLegendLayout({ position: "top-left", blockLayout: "row" })
    .editCanvas({ width: 349, height: 347, margin: { left: 39, top: 10, right: 10, bottom: 37 } })
;
;
}