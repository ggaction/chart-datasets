import { chart } from "ggaction";
import data from "./data.json";

// DOCS: doc-fc11e9fb291905d1, doc-dfae58344d5a524e, doc-6c2c08869091f6a0

export function buildChart() {
  return chart()
    .createCanvas({
      width: 246,
      height: 247,
      margin: { left: 41, top: 10, right: 5, bottom: 37 }
    })
    .createData({ values: data })
    .createComputedData({
      id: "dated",
      as: "dateMs",
      expression: { op: "parseTime", operand: { field: "date" }, format: "auto" }
    })
    .filterData({ id: "valid", field: "dateMs", predicate: { op: "gt", value: 0 } })
    .createBarPlot({
      x: { field: "dateMs", fieldType: "temporal" },
      y: "Approve",
      guides: false
    })
    .encodeBarWidth({ pixels: 5 })
    .editXScale({ type: "time", domain: [1284370105263, 1680445894736], nice: false })
    .editXScale({ range: [41, 241] })
    .editYScale({ domain: [0, 0.5] })
    .createXAxis({
      ticksAndLabels: {
        ticks: { length: 6 },
        labels: { fontSize: 10, offset: 7, flush: true }
      },
      title: { text: "date", fontSize: 11, offset: 31 }
    })
    .editXAxisLabels({ fontFamily: "sans-serif" })
    .editXAxisTitle({ fontFamily: "sans-serif", fontWeight: 700 })
    .createYAxis({
      ticksAndLabels: {
        ticks: { length: 6 },
        labels: { fontSize: 10, offset: 7, format: ".1f" }
      },
      title: { text: "Approve", fontSize: 11, offset: 29 }
    })
    .editYAxisLabels({ fontFamily: "sans-serif" })
    .editYAxisTitle({ fontFamily: "sans-serif", fontWeight: 700 })
    .createGrid({ horizontal: {}, vertical: {} })
    .editHorizontalGrid({ color: "#ddd" })
    .editVerticalGrid({ color: "#ddd" });
}
