import { chart } from "ggaction";
import data from "./data.json";

// DOCS: doc-6c2c08869091f6a0, doc-fc11e9fb291905d1, doc-333a87e52954985d

export function buildChart() {
  return chart()
    .createCanvas({
      width: 347,
      height: 357,
      margin: { left: 86, top: 35, right: 6, bottom: 22 }
    })
    .createData({ id: "cbi", values: data })
    .createComputedData({
      id: "cbiValueNum",
      as: "ValueNum",
      expression: { op: "toNumber", operand: { field: "Value" } }
    })
    .createSortedData({ id: "cbiSorted", sortBy: [{ field: "ValueNum", order: "descending" }] })
    .createBarPlot({
      x: { field: "ValueNum", aggregate: "sum" },
      y: { field: "Country", fieldType: "nominal", scale: { paddingInner: 0.1, paddingOuter: 0.05 } },
      guides: false
    })
    .editYScale({ target: "barPlot", domain: ["Austria", "Belgium", "Finland", "France", "Germany", "Italy", "The Netherlands", "Spain", "Switzerland", "UK", "Denmark", "US", "Canada", "Norway", "Japan", "New Zealand", "Sweden", "Australia"] })
    .editXScale({ target: "barPlot", domain: [0, 0.9] })
    .encodeBarWidth({ target: "barPlot", band: 1 })
    .editBarMark({ target: "barPlot", fill: "darkblue" })
    .createXAxis({
      ticksAndLabels: {
        values: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9],
        ticks: { length: 5 },
        labels: { fontSize: 10, offset: 7, flush: true }
      },
      title: false
    })
    .editXAxisLine({ color: "#888", lineWidth: 1 })
    .editXAxisTicks({ color: "#888", lineWidth: 1 })
    .editXAxisLabels({ fontFamily: "sans-serif", format: ".1f" })
    .createYAxis({
      ticksAndLabels: {
        ticks: { length: 5 },
        labels: { fontSize: 10, offset: 7 }
      },
      title: false
    })
    .editYAxisLine({ color: "#888", lineWidth: 1 })
    .editYAxisTicks({ color: "#888", lineWidth: 1 })
    .editYAxisLabels({ fontFamily: "sans-serif" })
    .createTitle({
      text: "Central bank independence",
      titleStyle: { fontSize: 13, fontFamily: "sans-serif", fontWeight: 700, color: "black" },
      subtitleStyle: { fontSize: 10, fontFamily: "sans-serif", fontStyle: "italic", color: "black" }
    })
    .editTitle({ subtitle: "Source: BoE", offset: -13, gap: 1 })
    .editTitle({ alongOffset: -80.9 });
}