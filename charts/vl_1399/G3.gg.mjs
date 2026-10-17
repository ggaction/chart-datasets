// DOCS: doc-fc11e9fb291905d1, doc-6c2c08869091f6a0, doc-dfae58344d5a524e
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({
      width: 448,
      height: 354,
      margin: { top: 72, right: 124, bottom: 82, left: 124 }
    })
    .createData({ values: data })
    .createBarPlot({
      x: {
        field: "candidate_diff_spend",
        fieldType: "quantitative"
      },
      y: {
        field: "count",
        fieldType: "quantitative"
      },
      guides: false
    })
    .editXScale({ domain: [0, 100], zero: true })
    .editYScale({ domain: [0, 7], zero: true })
    .editBarMark({ fill: "#4c78a8" })
    .encodeBarWidth({ pixels: 70 })
    .createTitle({
      text: "Distribution of Differential Spending (8/1/2018-11/6/2018)",
      titleStyle: { fontSize: 13, fontWeight: 700 },
      offset: 41,
      alongOffset: -73.7421875
    })
    .createXAxis({
      line: {},
      ticksAndLabels: {
        values: [0, 20, 40, 60, 80, 100],
        ticks: { length: 5 },
        labels: { fontSize: 10, offset: 7, flush: true, overlap: "allow" }
      },
      title: {
        text: "candidate_diff_spend",
        fontSize: 11,
        fontWeight: 700,
        offset: 30
      }
    })
    .createYAxis({
      line: {},
      ticksAndLabels: {
        values: [0, 1, 2, 3, 4, 5, 6, 7],
        ticks: { length: 5 },
        labels: { fontSize: 10, offset: 7 }
      },
      title: {
        text: "# Candidates",
        fontSize: 11,
        fontWeight: 700,
        offset: 21
      }
    })
    .createGrid({
      horizontal: { color: "#ddd", lineWidth: 1 },
      vertical: { color: "#ddd", lineWidth: 1 }
    });
}