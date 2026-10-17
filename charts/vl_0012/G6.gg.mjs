// DOCS: doc-6c2c08869091f6a0, doc-fc11e9fb291905d1, doc-bedf05337affd6f4, doc-333a87e52954985d
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({
      width: 272,
      height: 102,
      margin: { left: 66, top: 5, right: 6, bottom: 37 }
    })
    .createData({ id: "day", values: data })
    .createWindowData({
      id: "totals",
      source: "day",
      operations: [
        {
          op: "movingSum",
          field: "Time",
          as: "TotalTime",
          frame: { preceding: 4, following: 4 }
        }
      ]
    })
    .createComputedData({
      id: "dayPct",
      as: "PercentOfTotal",
      expression: {
        op: "multiply",
        left: { op: "divide", left: { field: "Time" }, right: { field: "TotalTime" } },
        right: { constant: 100 }
      }
    })
    .createBarPlot({
      x: { field: "PercentOfTotal", fieldType: "quantitative" },
      y: { field: "Activity", fieldType: "nominal" },
      guides: false
    })
    .encodeBarWidth({ band: 1 })
    .editXScale({ domain: [0, 35], zero: true })
    .editYScale({ domain: ["Eating", "Exercise", "Sleeping", "TV", "Work"], paddingInner: 0.1, paddingOuter: 0.05 })
    .createXAxis({
      title: { text: "% of total Time", fontSize: 11, offset: 28 },
      ticksAndLabels: {
        values: [0, 5, 10, 15, 20, 25, 30, 35],
        ticks: { length: 5 },
        labels: { fontSize: 10, fontFamily: "sans-serif", offset: 7, flush: true, overlap: "allow" }
      },
      line: {}
    })
    .createYAxis({
      title: { text: "Activity", fontSize: 11, offset: 55 },
      ticksAndLabels: {
        ticks: { length: 5 },
        labels: { fontSize: 10, fontFamily: "sans-serif", offset: 7 }
      },
      line: {}
    })
    .createGrid({ vertical: { color: "#ddd" }, horizontal: false })
    .editXAxisLine({ color: "#888", lineWidth: 1 })
    .editYAxisLine({ color: "#888", lineWidth: 1 })
    .editXAxisTicks({ color: "#888", lineWidth: 1 })
    .editYAxisTicks({ color: "#888", lineWidth: 1 })
    .editXAxisLabels({ color: "black" })
    .editYAxisLabels({ color: "black" })
    .editXAxisTitle({ color: "black", fontWeight: 700 })
    .editYAxisTitle({ color: "black", fontWeight: 700 });
}