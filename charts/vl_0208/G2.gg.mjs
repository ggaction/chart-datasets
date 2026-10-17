// DOCS: doc-b11b4627b143730d, doc-76573a465e2b6a33, doc-a929fd81abd909f8, doc-c2eafbbd16fe3c71
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({ width: 387, height: 253, margin: { left: 53, top: 10, right: 134, bottom: 43 } })
    .createData({ values: data })
    .createComputedData({ id: "grossNum", as: "grossNum", expression: { op: "toNumber", operand: { field: "Worldwide Gross" } } })
    .createSummaryData({
      id: "meanGrossByYearGenre",
      groupBy: ["Release Year", "Genre"],
      aggregates: [{ op: "mean", field: "grossNum", as: "meanGross" }]
    })
    .createLinePlot({
      x: { field: "Release Year", fieldType: "temporal", temporalUnit: "year" },
      y: { field: "meanGross", fieldType: "quantitative" },
      guides: false
    })
    .editXScale({ domain: [820454400000, 1262304000000], nice: false })
    .editYScale({ domain: [0, 800000000] })
    .encodeColor({ field: "Genre" })
    .editColorScale({
      domain: ["Action", "Adventure", "Black Comedy", "Comedy", "Concert", "Documentary", "Drama", "Horror", "Musical", "Romantic Comedy", "Thriller", "Western"],
      range: ["#4c78a8", "#f58518", "#e45756", "#72b7b2", "#54a24b", "#eeca3b", "#b279a2", "#ff9da6", "#9d755d", "#bab0ac"]
    })
    .editLineMark({ target: "linePlot", strokeWidth: 2 })
    .createAxes({
      x: {
        title: { text: "Release Year", fontSize: 11, fontWeight: 700, offset: 28 },
        ticksAndLabels: {
          values: [820454400000, 883612800000, 946684800000, 1009843200000, 1072915200000, 1136073600000, 1199145600000, 1262304000000],
          labels: {
            fontSize: 10,
            offset: 7,
            flush: true,
            labelMap: [
              { value: 820454400000, label: "1996" },
              { value: 883612800000, label: "" },
              { value: 946684800000, label: "2000" },
              { value: 1009843200000, label: "" },
              { value: 1072915200000, label: "2004" },
              { value: 1136073600000, label: "" },
              { value: 1199145600000, label: "2008" },
              { value: 1262304000000, label: "" }
            ]
          }
        }
      },
      y: {
        title: { text: "Mean of Worldwide Gross", fontSize: 11, fontWeight: 700, offset: 41.0146484375 },
        ticksAndLabels: {
          values: [0, 200000000, 400000000, 600000000, 800000000],
          labels: {
            fontSize: 10,
            offset: 7,
            labelMap: [
              { value: 0, label: "0M" },
              { value: 200000000, label: "200M" },
              { value: 400000000, label: "400M" },
              { value: 600000000, label: "600M" },
              { value: 800000000, label: "800M" }
            ]
          }
        }
      }
    })
    .createGrid({ horizontal: { color: "#ddd" }, vertical: { color: "#ddd" } })
    .createLegend({
      position: "right",
      title: "Genre",
      labels: { fontSize: 10 }
    })
    .editLegend({
      titleStyle: { fontSize: 11, fontWeight: 700 },
      symbol: { layers: [{ type: "line", lineWidth: 1.5 }] }
    });
}