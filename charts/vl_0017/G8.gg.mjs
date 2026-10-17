// DOCS: doc-b11b4627b143730d createLinePlot; doc-76573a465e2b6a33 scatter point overlay;
// DOCS: doc-f30bfed200b50a98 createCanvas/createData/createTitle pattern.
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({
      width: 251,
      height: 247,
      margin: { top: 10, right: 7, bottom: 37, left: 44 }
    })
    .createData({ values: data })
    .createLinePlot({
      x: {
        field: "date",
        fieldType: "temporal"
      },
      y: {
        field: "price",
        fieldType: "quantitative"
      },
      guides: false
    })
    .editXScale({ type: "time", domain: [1325458800000, 1325473200000] })
    .editYScale({ domain: [0, 200] })
    .editLineMark({ strokeWidth: 2 })
    .createGrid({
      horizontal: { color: "#ddd" },
      vertical: { color: "#ddd" }
    })
    .createXAxis({
      line: {},
      ticksAndLabels: {
        values: [1325462400000, 1325466000000, 1325469600000],
        ticks: { length: 5 },
        labels: { fontSize: 10, fontFamily: "sans-serif", offset: 7, format: "%H:%M" }
      },
      title: { text: "date (year-month-date-hours-minutes)", fontSize: 11, fontFamily: "sans-serif", offset: 28 }
    })
    .editXAxisLine({ color: "#888" })
    .editXAxisLabels({ color: "black" })
    .editXAxisTitle({ color: "black", fontWeight: "bold" })
    .createYAxis({
      line: {},
      ticksAndLabels: {
        count: 5,
        ticks: { length: 5 },
        labels: { fontSize: 10, fontFamily: "sans-serif", offset: 7 }
      },
      title: { text: "price", fontSize: 11, fontFamily: "sans-serif", offset: 33 }
    })
    .editYAxisLine({ color: "#888" })
    .editYAxisLabels({ color: "black" })
    .editYAxisTitle({ color: "black", fontWeight: "bold" });
}