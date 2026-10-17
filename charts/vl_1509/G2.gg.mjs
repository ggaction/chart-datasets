// DOCS: doc-6c2c08869091f6a0, doc-fc11e9fb291905d1, doc-2ba6dfbdbb611825, doc-4218dc37ed9c42ec
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({ width: 555, height: 413, margin: { left: 33, top: 10, right: 122, bottom: 103 } })
    .createData({ values: data })
    .createSummaryData({
      id: "summary",
      groupBy: ["real", "predicted"],
      aggregates: [{ op: "count", as: "count" }]
    })
    .createSortedData({ id: "sorted", source: "summary", sortBy: [{ field: "predicted", order: "descending" }] })
    .createStackData({ category: "real", group: "predicted", value: "count" })
    .createBarPlot({
      x: { field: "real", fieldType: "nominal" },
      y: { lower: "count_start", upper: "count_end" },
      guides: false
    })
    .editXScale({ domain: ["colorectal cancer", "healthy"], paddingInner: 0.1, paddingOuter: 0.05 })
    .editYScale({ domain: [0, 8] })
    .encodeColor({ field: "predicted", fieldType: "nominal" })
    .editColorScale({ domain: ["colorectal cancer", "healthy"], range: ["#4c78a8", "#f58518"] })
    .encodeBarWidth({ band: 1 })
    .createAxes({
      x: {
        line: { color: "#888" },
        ticksAndLabels: {
          ticks: { color: "#888" },
          labels: { color: "#000", fontSize: 10, offset: 7.5, rotation: { value: -90, unit: "degrees" } }
        },
        title: { text: "real value", color: "#000", fontSize: 11, fontWeight: "bold", offset: 96 }
      },
      y: {
        line: { color: "#888" },
        ticksAndLabels: {
          values: [0, 1, 2, 3, 4, 5, 6, 7, 8],
          ticks: { color: "#888" },
          labels: { color: "#000", fontSize: 10, offset: 6.5 }
        },
        title: { text: "count", color: "#000", fontSize: 11, fontWeight: "bold", offset: 24 }
      }
    })
    .createGrid({ horizontal: { color: "#ddd" }, vertical: false })
    .createLegend({ title: "predicted", channels: ["color"] });
}
