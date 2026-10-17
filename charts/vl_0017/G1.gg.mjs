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
        fieldType: "temporal",
        scale: { type: "time", domain: [1325458800000, 1325473200000] }
      },
      y: {
        field: "price",
        fieldType: "quantitative",
        scale: { domain: [0, 200] }
      },
      guides: false
    })
    .editLineMark({ strokeWidth: 2 })
    .createGrid({
      horizontal: { color: "#ddd" },
      vertical: { color: "#ddd" }
    })
    .createAxes({
      x: {
        line: {"color":"#888"},
        ticksAndLabels: {
          values: [1325462400000, 1325466000000, 1325469600000],
          ticks: { length: 5 },
          labels: { fontSize: 10, fontFamily: "sans-serif", color: "black", offset: 7, format: "%H:%M" }
        },
        title: { text: "date (year-month-date-hours-minutes)", fontSize: 11, fontWeight: "bold", fontFamily: "sans-serif", color: "black", offset: 28 }
      },
      y: {
        line: {"color":"#888"},
        ticksAndLabels: {
          count: 5,
          ticks: { length: 5 },
          labels: { fontSize: 10, fontFamily: "sans-serif", color: "black", offset: 7 }
        },
        title: { text: "price", fontSize: 11, fontWeight: "bold", fontFamily: "sans-serif", color: "black", offset: 33 }
      }
    });
}