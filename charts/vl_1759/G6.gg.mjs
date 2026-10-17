// DOCS: doc-b11b4627b143730d, doc-071c93dff3a5ea2e, doc-76573a465e2b6a33
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({
      width: 251,
      height: 247,
      margin: { left: 44, top: 10, right: 7, bottom: 37 }
    })
    .createData({ values: data })
    .createLinePlot({
      x: { field: "date", fieldType: "temporal" },
      y: { field: "price" },
      guides: false
    })
    .editXScale({ type: "time", domain: [1325462400000, 1325473200000] })
    .editYScale({ type: "linear", domain: [0, 200] })
    .editLineMark({ stroke: "#4c78a8", strokeWidth: 2 })
    .createXAxis({
      line: {},
      ticksAndLabels: {
        values: [1325462400000, 1325466000000, 1325469600000, 1325473200000],
        ticks: { length: 5 },
        labels: {
          fontSize: 10,
          offset: 7,
          flush: true,
          overlap: "error",
          labelMap: [
            { value: 1325462400000, label: "Jan 02, 2012 00:00" },
            { value: 1325466000000, label: "" },
            { value: 1325469600000, label: "" },
            { value: 1325473200000, label: "Jan 02, 2012 03:00" }
          ]
        }
      },
      title: {
        text: "date (year-month-date-hours-minutes)",
        fontSize: 11,
        offset: 28
      }
    })
    .createYAxis({
      line: {},
      ticksAndLabels: {
        count: 5,
        ticks: { length: 5 },
        labels: { fontSize: 10, offset: 7 }
      },
      title: { text: "price", fontSize: 11, offset: 35 }
    })
    .createGrid({ horizontal: true, vertical: true })
    .editGrid({
      horizontal: { color: "#ddd", lineWidth: 1 },
      vertical: { color: "#ddd", lineWidth: 1 }
    })
    .editXAxis({
      line: { color: "#888", lineWidth: 1 },
      ticksAndLabels: { ticks: { color: "#888" } },
      title: { fontWeight: 700 }
    })
    .editYAxis({
      line: { color: "#888", lineWidth: 1 },
      ticksAndLabels: { ticks: { color: "#888" } },
      title: { fontWeight: 700 }
    });
}
