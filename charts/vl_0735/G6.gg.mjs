// DOCS: doc-2bd5de4bd99e314a, doc-7f2c254224fc4908
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({ width: 639, height: 420, margin: { left: 132, top: 83, right: 7, bottom: 37 } })
    .createData({ values: data })
    .createComputedData({ id: "democracyNum", as: "democracy_eiu_num", expression: { op: "toNumber", operand: { field: "democracy_eiu" } } })
    .createSummaryData({ id: "regimeSummary", groupBy: ["Region", "Regime"], aggregates: [{ op: "mean", field: "democracy_eiu_num", as: "meanDemocracy" }] })
    .createSortedData({ id: "sortedRegimes", sortBy: [{ field: "Regime", order: "ascending" }] })
    .createBarPlot({ x: { field: "meanDemocracy", stack: "zero" }, y: { field: "Region" }, guides: false })
    .encodeColor({
      field: "Regime",
      layout: "stack"
    })
    .editColorScale({
      target: "barPlot",
      domain: ["Authoritarian Regime", "Flawed Democracy", "Full Democracy", "Hybrid Regime"],
      range: ["#4c78a8", "#f58518", "#e45756", "#72b7b2", "#54a24b", "#eeca3b", "#b279a2", "#ff9da6", "#9d755d", "#bab0ac"]
    })
    .encodeBarWidth({ band: 1 })
    .editXScale({ domain: [0, 24] })
    .editYScale({
      domain: ["Middle East & North Africa", "Sub-Saharan Africa", "South Asia", "East Asia & Pacific", "Latin America & Caribbean", "Europe & Central Asia", "North America"],
      paddingInner: 0.1,
      paddingOuter: 0.05
    })
    .createTitle({ text: "Stacked Bar Chart: Democracy Index by Region", titleStyle: { fontSize: 13 }, alongOffset: -126.5 })
    .editTitle({ offset: -13, gap: 3, titleStyle: { fontWeight: 700 } })
    .editTitle({ subtitle: "Source: The Economist", subtitleStyle: { fontSize: 13, fontWeight: 400 } })
    .createXAxis({
      line: {},
      ticksAndLabels: {
        values: [0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24],
        ticks: {},
        labels: { fontSize: 10, offset: 7 }
      },
      title: { text: "Democracy Index", fontSize: 11, offset: 28 }
    })
    .editXAxisLine({ color: "#888" })
    .editXAxisTicks({ color: "#888" })
    .editXAxisTitle({ fontWeight: 700 })
    .createYAxis({
      line: {},
      ticksAndLabels: { ticks: {}, labels: { fontSize: 10, offset: 7 } },
      title: false
    })
    .editYAxisLine({ color: "#888" })
    .editYAxisTicks({ color: "#888" })
    .createGrid({ horizontal: false, vertical: { scale: "x" } })
    .editVerticalGrid({ color: "#ddd", lineWidth: 1 })
    .createLegend({
      at: { x: -99, y: -31 },
      title: false,
      labels: { fontSize: 10 }
    })
    .editLegendLayout({ columns: 13 });
}