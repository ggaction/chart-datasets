import { chart } from "ggaction";
import data from "./data.json";
// DOCS: doc-e790db38fc2a278a, doc-48c72317a1a99e17, doc-76573a465e2b6a33

export function buildChart() {
  return chart()
    .createCanvas({ width: 417, height: 242, margin: { left: 72, top: 5, right: 145, bottom: 37 } })
    .createData({ values: data, id: "raw" })
    .createComputedData({ id: "dPoints", as: "pointsNum", expression: { op: "toNumber", operand: { field: "points" } } })
    .createComputedData({ id: "dGdp", as: "gdpNum", expression: { op: "toNumber", operand: { field: "gdp" } } })
    .createComputedData({ id: "dPop", as: "popNum", expression: { op: "toNumber", operand: { field: "pop" } } })
    .createScatterPlot({
      x: { field: "pointsNum" },
      y: { field: "gdpNum" },
      guides: false
    })
    .editXScale({ domain: [0, 2.2], nice: false })
    .editYScale({ domain: [0, 4500000], nice: false })
    .encodeSize({ field: "popNum", target: "scatterPlot" })
    .editSizeScale({ target: "scatterPlot", domain: [0, 1411944971], range: [3.141592653589793, 283.52980274369835] })
    .encodeStroke({ target: "scatterPlot", value: "#4c78a8" })
    .editPointMark({ target: "scatterPlot", fill: "none", strokeWidth: 2 })
    .editPointMark({ target: "scatterPlot", opacity: 0.7 })
    .createXAxis({
      line: {},
      ticksAndLabels: {
        values: [0, 0.5, 1, 1.5, 2],
        ticks: { length: 5 },
        labels: { fontSize: 10, fontFamily: "sans-serif", offset: 6, flush: true }
      },
      title: { text: "Average points", fontSize: 11, fontFamily: "sans-serif", offset: 27 }
    })
    .createYAxis({
      line: {},
      ticksAndLabels: {
        values: [0, 1000000, 2000000, 3000000, 4000000],
        ticks: { length: 5 },
        labels: { fontSize: 10, fontFamily: "sans-serif", offset: 7 }
      },
      title: { text: "GDP per capita", fontSize: 11, fontFamily: "sans-serif", offset: 61 }
    })
    .editXAxis({ ticksAndLabels: { labels: { format: ".1f" } }, title: { fontWeight: 700 } })
    .editYAxis({ ticksAndLabels: { labels: { format: ",.0f" } }, title: { fontWeight: 700 } })
    .createGrid({ horizontal: { lineWidth: 1 }, vertical: { lineWidth: 1 } })
    .editHorizontalGrid({ color: "#ddd" })
    .editVerticalGrid({ color: "#ddd" })
    .createGuides({
      axes: false,
      grid: false,
      legend: {
        target: "scatterPlot",
        channels: ["size"],
        position: "right",
        title: "Population",
        titleStyle: { fontSize: 11, fontWeight: 700, fontFamily: "sans-serif" },
        labels: { fontSize: 10, fontFamily: "sans-serif", format: ",.0f" },
        values: [0, 200000000, 400000000, 600000000, 800000000, 1000000000, 1200000000, 1400000000]
      }
    })
    .editLegendBlock({ target: "scatterPlot", channel: "size", symbol: { fill: "none", stroke: "#4c78a8", strokeWidth: 1.5, opacity: 0.7 } });
}