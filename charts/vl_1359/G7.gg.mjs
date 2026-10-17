// DOCS: doc-b11b4627b143730d (createLinePlot), doc-dfae58344d5a524e (createCanvas),
// doc-76573a465e2b6a33 (basic charts), doc-f30bfed200b50a98 (line example)
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({
      width: 246,
      height: 247,
      margin: { left: 39, top: 10, right: 7, bottom: 37 }
    })
    .createData({ values: data })
    .createLinePlot({
      x: {
        field: "date",
        fieldType: "temporal",
      },
      y: {
        field: "valA",
        fieldType: "quantitative"
      },
      guides: false
    })
    .editXScale({ domain: [978307200000, 978912000000] })
    .editYScale({ domain: [0, 40] })
    .editLineMark({ stroke: "#4c78a8", strokeWidth: 2 })
    .createGrid({
      horizontal: { scale: "y", count: 5 , color: '#ddd'},
      vertical: { scale: "x", count: 8 , color: '#ddd'}
    })
    .createXAxis({
      line: {},
      ticksAndLabels: {
        values: [978307200000, 978480000000, 978652800000, 978825600000],
        ticks: { length: 5 },
        labels: {
          fontSize: 10,
          offset: 7,
          format: "%m-%d"
        }
      },
      title: { text: "date", fontSize: 11, offset: 28 }
    })
    .createYAxis({
      line: {},
      ticksAndLabels: {
        count: 5,
        ticks: { length: 5 },
        labels: { fontSize: 10, offset: 7 }
      },
      title: { text: "valA", fontSize: 11, offset: 28 }
    })
    .editXAxisLine({ color: "#888" })
    .editXAxisTicksAndLabels({
      ticks: { color: "#888", lineWidth: 1 },
      labels: { color: "black", fontFamily: "sans-serif" }
    })
    .editXAxisTitle({ color: "black", fontWeight: "bold" })
    .editYAxisLine({ color: "#888" })
    .editYAxisTicksAndLabels({
      ticks: { color: "#888", lineWidth: 1 },
      labels: { color: "black", fontFamily: "sans-serif" }
    })
    .editYAxisTitle({ color: "black", fontWeight: "bold" });
}
