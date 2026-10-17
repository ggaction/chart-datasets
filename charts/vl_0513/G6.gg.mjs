// DOCS: doc-e790db38fc2a278a, doc-2e6240c00cb297cc, doc-2bd5de4bd99e314a
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({ width: 401, height: 423, margin: { left: 32, top: 52, right: 119, bottom: 71 } })
    .createData({ values: data })
    .createComputedData({ id: "medIncomeN", as: "medIncomeN", expression: { op: "toNumber", operand: { field: "medIncome" } } })
    .createComputedData({ id: "FirearmDeathsN", as: "FirearmDeathsN", expression: { op: "toNumber", operand: { field: "FirearmDeaths" } } })
    .createComputedData({ id: "PrisonRateN", as: "PrisonRateN", expression: { op: "toNumber", operand: { field: "PrisonRate" } } })
    .createScatterPlot({
      x: { field: "medIncomeN" },
      y: { field: "FirearmDeathsN" },
      guides: false
    })
    .editXScale({ target: "scatterPlot", domain: [40000, 80000] })
    .editYScale({ target: "scatterPlot", domain: [0, 0.24] })
    .encodeColor({ field: "GeographicDivision" })
    .editColorScale({ target: "scatterPlot", domain: ["Midwest", "Northeast", "South", "West"], range: ["#e41a1c", "#377eb8", "#4daf4a", "#984ea3", "#ff7f00", "#ffff33", "#a65628", "#f781bf", "#999999"] })
    .encodeSize({ field: "PrisonRateN" })
    .editSizeScale({ target: "scatterPlot", domain: [0, 1.713058419], range: [3.9269908169872414, 235.61944901923448] })
    .editPointMark({ opacity: 0.6 })
    .createTitle({
      text: "Gun deaths and income - US states",
      titleStyle: { fontSize: 13, fontWeight: 700, fontFamily: "sans-serif", color: "black" },
      subtitleStyle: { fontSize: 10, fontStyle: "italic", fontFamily: "sans-serif", color: "black" }
    })
    .editTitle({
      subtitle: "Median income (x), and firearm deaths per 100k population (y)",
      offset: -13,
      alongOffset: -26.5
    })
        .createXAxis({
      line: {},
      title: false,
      ticksAndLabels: {
        values: [40000, 50000, 60000, 70000, 80000],
        ticks: { length: 5 },
        labels: { fontSize: 10, offset: 7, flush: true }
      }
    })
    .editXAxis({ line: { color: "#888" }, ticks: { color: "#888" }, labels: { fontFamily: "sans-serif", format: "," } })
    .createYAxis({
      line: {},
      title: false,
      ticksAndLabels: {
        values: [0, 0.02, 0.04, 0.06, 0.08, 0.1, 0.12, 0.14, 0.16, 0.18, 0.2, 0.22, 0.24],
        ticks: { length: 5 },
        labels: { fontSize: 10, offset: 7 }
      }
    })
    .editYAxis({ line: { color: "#888" }, ticks: { color: "#888" }, labels: { fontFamily: "sans-serif", format: ".2f" } })
    .createGrid({
      vertical: { values: [40000, 50000, 60000, 70000, 80000], color: "#ddd" },
      horizontal: { values: [0, 0.02, 0.04, 0.06, 0.08, 0.1, 0.12, 0.14, 0.16, 0.18, 0.2, 0.22, 0.24], color: "#ddd" }
    })
    .createGuides({ axes: false, legend: { channels: ["color"], title: false, labels: { fontSize: 10 }, position: "bottom", direction: "horizontal", layout: "legacy-bottom" } })
    
    .createGuides({ axes: false, legend: { channels: ["size"], title: "Prison Rate", values: [0, 0.5, 1, 1.5], labels: { fontSize: 10, format: ".1f" }, titleStyle: { fontSize: 11, fontWeight: 700 }, position: "right" } }).editCanvas({ width: 374, margin: { right: 92 } });
}