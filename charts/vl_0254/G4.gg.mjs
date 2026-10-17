// DOCS: doc-e790db38fc2a278a, doc-2bd5de4bd99e314a, doc-2e6240c00cb297cc
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({ width: 483, height: 389, margin: { left: 26, top: 67, right: 157, bottom: 22 } })
    .createData({ values: data })
    .createComputedData({ id: "pointsNum", as: "pointsNum", expression: { op: "toNumber", operand: { field: "Points per Game" } } })
    .createComputedData({ id: "xgdNum", as: "xgdNum", expression: { op: "toNumber", operand: { field: "Expected Goal Difference per Game" } } })
    .createScatterPlot({
      x: { field: "xgdNum" },
      y: { field: "pointsNum" },
      guides: false
    })
    .editXScale({ domain: [-1.8, 1.8] })
    .editYScale({ domain: [0.2, 3] })
    .encodeColor({ field: "Country", fieldType: "ordinal" })
    .editColorScale({ domain: ["Bundesliga (Germany)", "La Liga (Spain)", "Ligue 1 (France)", "Premier League (England)", "Serie A (Italy)"], palette: "set1" })
    .encodePointRadius({ value: 2.7386 })
    .editPointMark({ opacity: 0.7 })
    .createXAxis({ line: {}, ticksAndLabels: { ticks: {}, values: [-1.5, -1, -0.5, 0, 0.5, 1, 1.5], labels: { fontSize: 10, offset: 7 } }, title: false })
    .createYAxis({ line: {}, ticksAndLabels: { ticks: {}, values: [0.5, 1, 1.5, 2, 2.5, 3], labels: { fontSize: 10, offset: 7 } }, title: false })
    .editXAxis({ ticksAndLabels: { labels: { format: ".1f" } } })
    .editYAxis({ ticksAndLabels: { labels: { format: ".1f" } } })
    .createLegend({ title: "League", titleStyle: { fontSize: 11, fontWeight: 700 }, labels: { fontSize: 10 } })
    .editLegendBlock({ target: "scatterPlot", channel: "color", symbol: { opacity: 0.7 } })
    .createTitle({
      text: "Teams points and expected goal difference\nin Europe's Top 5 Leagues 2022-23",
      titleStyle: { fontSize: 13, fontWeight: 700, color: "black" },
      subtitleStyle: { fontSize: 10, fontStyle: "italic", color: "black" }
    })
    .editTitle({ offset: -13, alongOffset: -21 })
    .editTitle({ subtitle: "Expected Goal Difference (x), Points (y).\nData from Fbref, all stats normalised per game.", gap: 1 });
}