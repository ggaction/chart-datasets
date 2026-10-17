// DOCS: doc-e790db38fc2a278a, doc-2e6240c00cb297cc, doc-2bd5de4bd99e314a
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({
      width: 346,
      height: 301,
      margin: { left: 39, top: 64, right: 107, bottom: 37 }
    })
    .createData({ values: data })
    .createComputedData({
      id: "numMatches",
      as: "matches",
      expression: { op: "toNumber", operand: { field: "Matches_Played" } }
    })
    .createComputedData({
      id: "numGoals",
      as: "goals",
      expression: { op: "toNumber", operand: { field: "Goals" } }
    })
    .createComputedData({
      id: "numShots",
      as: "shotsPer",
      expression: { op: "toNumber", operand: { field: "Shots Per Avg Match" } }
    })
    .createScatterPlot({
      x: { field: "matches", fieldType: "quantitative" },
      y: { field: "goals", fieldType: "quantitative" },
      guides: false
    })
    .editXScale({ domain: [0, 40] })
    .editYScale({ domain: [0, 30] })
    .encodeSize({ field: "shotsPer" })
    .editSizeScale({ domain: [0, 5.4], range: [Math.PI, (Math.PI * 361) / 4] })
    .encodeOpacity({ value: 0.8 })
    .editPointMark({ stroke: "black", strokeWidth: 1 })
    .createAxes({
      x: {
        line: { color: "#888" },
        ticksAndLabels: {
          ticks: { length: 5, color: "#888" },
          labels: { fontSize: 10, offset: 7 },
          values: [0, 10, 20, 30, 40]
        },
        title: { text: "Matchs Played", fontSize: 11, fontWeight: 700, offset: 28 }
      },
      y: {
        line: { color: "#888" },
        ticksAndLabels: {
          ticks: { length: 5, color: "#888" },
          labels: { fontSize: 10, offset: 7 },
          values: [0, 5, 10, 15, 20, 25, 30]
        },
        title: { text: "Goals Scored", fontSize: 11, fontWeight: 700, offset: 31 }
      }
    })
    .createGuides({
      axes: false,
      grid: {
        horizontal: { values: [0, 5, 10, 15, 20, 25, 30], color: "#ddd" },
        vertical: { values: [0, 10, 20, 30, 40], color: "#ddd" }
      },
      legend: {
        title: "Average Shots\nPer Match",
        values: [0, 1, 2, 3, 4, 5],
        labels: { fontSize: 10 },
        titleStyle: { fontSize: 11, fontWeight: 700 }
      }
    })
    .editLegendBlock({ target: "scatterPlot", channel: "size", symbol: { opacity: 0.8, stroke: "black", strokeWidth: 1.5 } })
    .createTitle({
      text: "Top Goalscorers in Premier League in 2016",
      titleStyle: { fontSize: 13, fontWeight: 700 },
      subtitleStyle: { fontSize: 10, fontStyle: "italic" }
    })
    .editTitle({
      subtitle:
        "A Bubble plot showing the relationship between\nGoals, Matches Played and Average Shots per Match\nSource:Opta",
      offset: -13,
      alongOffset: -33.12
    })
    .editTitle({ gap: 1 });
}
