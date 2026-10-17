// DOCS: doc-fc11e9fb291905d1, doc-bedf05337affd6f4, doc-333a87e52954985d
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({ width: 709, height: 375, margin: { left: 53, top: 38, right: 6, bottom: 37 } })
    .createData({ values: data })
    .createBarPlot({
      x: { field: "n_revs type", fieldType: "quantitative" },
      y: { field: "count", fieldType: "quantitative" },
      guides: false
    })
    .encodeBarWidth({ pixels: 5 })
    .editXScale({ domain: [0, 18] })
    .editYScale({ domain: [0, 6000] })
    .createXAxis({
      line: {},
      ticksAndLabels: {
        values: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18],
        ticks: { length: 5 },
        labels: { fontSize: 10, offset: 7, flush: true }
      },
      title: { text: "n_revs type", fontSize: 11, offset: 28 }
    })
    .createYAxis({
      line: {},
      ticksAndLabels: {
        values: [0, 1000, 2000, 3000, 4000, 5000, 6000],
        ticks: { length: 5 },
        labels: { fontSize: 10, offset: 7, format: ",.0f" }
      },
      title: { text: "count", fontSize: 11, offset: 45 }
    })
    .createGrid({ horizontal: { color: "#ddd" }, vertical: { color: "#ddd" } })
    .editXAxisLabels({ color: "black", fontFamily: "sans-serif" })
    .editXAxisTitle({ color: "black", fontFamily: "sans-serif", fontWeight: 700 })
    .editYAxisLabels({ color: "black", fontFamily: "sans-serif" })
    .editYAxisTitle({ color: "black", fontFamily: "sans-serif", fontWeight: 700 })
    .createTitle({
      text: "Year and Month Of Update (Sidewalks)",
      titleStyle: { fontSize: 24 },
      offset: -6
    })
    .editTitle({ titleStyle: { color: "black", fontFamily: "sans-serif", fontWeight: 700 } });
}
