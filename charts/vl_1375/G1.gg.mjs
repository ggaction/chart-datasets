// DOCS: doc-6c2c08869091f6a0, doc-fc11e9fb291905d1
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({ width: 373, height: 142, margin: { left: 113, top: 5, right: 60, bottom: 37 } })
    .createData({ values: data })
    .createComputedData({ id: "numeric0", as: "proofNumeric0", expression: { op: "toNumber", operand: { field: "purchase count" } } })
    .createSummaryData({ id: "summary", groupBy: ["referrer channel", "gender"], aggregates: [{ op: "sum", field: "proofNumeric0", as: "sum_purchase count" }] })
    .createSortedData({ id: "stackOrder", sortBy: [{ field: "gender", order: "ascending" }] })
    .createStackData({ category: "referrer channel", group: "gender", value: "sum_purchase count" })
    .createBarPlot({ x: { lower: "sum_purchase count_start", upper: "sum_purchase count_end" }, y: "referrer channel", guides: false })
    .encodeColor({ field: "gender", layout: "overlay" })
    .editColorScale({ domain: ["F", "M"], range: ["#4c78a8", "#f58518"] })
    .editBarMark({ stroke: false })
    .encodeBarWidth({ pixels: 18 })
    .editXScale({ domain: [0, 1800] })
    .editYScale({ domain: ["external", "internal", "search_engine", "social", "typed_bookmarked"], paddingInner: 0.1, paddingOuter: 0.05 })
    .createGrid({ vertical: { values: [0, 500, 1000, 1500], color: "#ddd" }, horizontal: false })
    .createAxes({
      x: {
        line: { color: "#888" },
        ticksAndLabels: { values: [0, 500, 1000, 1500], ticks: { length: 5, color: "#888" }, labels: { fontSize: 10, offset: 7, color: "black", format: ",.0f", flush: true } },
        title: { text: "Sum of purchase count", fontSize: 11, fontWeight: 700, color: "black" }
      },
      y: {
        line: { color: "#888" },
        ticksAndLabels: { ticks: { length: 5, color: "#888" }, labels: { fontSize: 10, offset: 7, color: "black" } },
        title: { text: "referrer channel", fontSize: 11, fontWeight: 700, color: "black", rotation: { value: -90, unit: "degrees" }, offset: 100.47558631896975 }
      }
    })
    .createGuides({
      axes: false,
      grid: false,
      legend: {
        title: "gender",
        titleStyle: { fontSize: 11, fontWeight: 700, color: "black" },
        labels: { fontSize: 10, color: "black" },
        symbol: { width: 10, height: 10 }
      }
    });
}