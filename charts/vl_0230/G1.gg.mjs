// DOCS: doc-6c2c08869091f6a0, doc-fc11e9fb291905d1, doc-bedf05337affd6f4
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({ width: 430, height: 377, margin: { left: 24, top: 55, right: 6, bottom: 22 } })
    .createData({ id: "players", values: data })
    .createComputedData({ id: "g", as: "GxG", expression: { op: "toNumber", operand: { field: "G-xG" } } })
    .createHistogram({ field: "GxG", binStep: 0.02, guides: false })
    .editXScale({ domain: [-0.22, 0.24], nice: false })
    .editYScale({ domain: [0, 80] })
    .editBarMark({ fill: "#f4c2c2" })
    
    .createGrid({ horizontal: { color: "#ddd", lineWidth: 1 }, vertical: false })
    .createXAxis({
      line: { color: "#888" },
      ticksAndLabels: {
        values: [-0.22, -0.14, -0.06, 0.02, 0.1, 0.18],
        ticks: { color: "#888" },
        labels: { fontSize: 10, fontFamily: "sans-serif", offset: 7, format: ".2f" }
      },
      title: false
    })
    .createYAxis({
      line: { color: "#888" },
      ticksAndLabels: {
        values: [0, 10, 20, 30, 40, 50, 60, 70, 80],
        ticks: { color: "#888" },
        labels: { fontSize: 10, fontFamily: "sans-serif", offset: 7 }
      },
      title: false
    })
    .createTitle({
      text: "Distribution of player difference between\nNon-Penalty Goals and Expected Goals",
      titleStyle: { fontSize: 13, fontWeight: 700, fontFamily: "sans-serif", color: "black" },
      subtitleStyle: { fontSize: 10, fontStyle: "italic", fontFamily: "sans-serif", color: "black" }
    })
.editTitle({ offset: -13, gap: 1, alongOffset: -18.12 })
    .editTitle({ subtitle: "Europe's Top 5 Leagues, all stats normalised per 90mins, data: FBref" });
}