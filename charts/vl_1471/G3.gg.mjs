import { chart } from "ggaction";
import data from "./data.json";

// DOCS: doc-6c2c08869091f6a0, doc-fc11e9fb291905d1, doc-bedf05337affd6f4, doc-333a87e52954985d, doc-76573a465e2b6a33

export function buildChart() {
  return chart()
    .createCanvas({
      width: 709,
      height: 375,
      margin: { left: 53, top: 38, right: 6, bottom: 37 }
    })
    .createData({ values: data })
    .createBarPlot({
      x: { field: "n_revs type", fieldType: "quantitative" },
      y: { field: "count", fieldType: "quantitative" },
      guides: false
    })
    .editXScale({ domain: [0, 14] })
    .editYScale({ domain: [0, 1200] })
    .encodeBarWidth({ pixels: 5 })
    .editBarMark({ fill: "#4c78a8" })
    .createTitle({
      text: "Year and Month Of Update (crossings)",
      offset: -6,
      titleStyle: { fontSize: 24, fontWeight: 700, fontFamily: "sans-serif" }
    })
    .createGrid({ horizontal: { color: "#ddd" }, vertical: { color: "#ddd" } })
    .createXAxis({
      ticksAndLabels: {
        values: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14],
        ticks: { length: 5 },
        labels: { fontSize: 10, fontFamily: "sans-serif", offset: 7, flush: true }
      },
      title: { text: "n_revs type", fontSize: 11, fontWeight: 700, fontFamily: "sans-serif", offset: 28 }
    })
    .createYAxis({
      ticksAndLabels: {
        values: [0, 200, 400, 600, 800, 1000, 1200],
        ticks: { length: 5 },
        labels: { fontSize: 10, fontFamily: "sans-serif", offset: 7 }
      },
      title: { text: "count", fontSize: 11, fontWeight: 700, fontFamily: "sans-serif", offset: 42 }
    });
}