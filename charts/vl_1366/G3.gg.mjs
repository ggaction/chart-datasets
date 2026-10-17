import { chart } from "ggaction";
import data from "./data.json";

// DOCS: doc-6c2c08869091f6a0, doc-fc11e9fb291905d1
export function buildChart() {
  return chart()
    .createCanvas({ width: 638, height: 248, margin: { left: 58, top: 5, right: 60, bottom: 43 } })
    .editCanvas({ background: "white" })
    .createData({ values: data })
    .createSummaryData({
      id: "summary",
      groupBy: ["country", "gender"],
      aggregates: [{ op: "sum", field: "COUNT", as: "sum_COUNT" }]
    })
    .createSortedData({ id: "stackOrder", source: "summary", sortBy: [{ field: "gender", order: "descending" }] })
    .createStackData({
      category: "country",
      group: "gender",
      value: "sum_COUNT"
    })
    .createBarPlot({ x: "country", y: { lower: "sum_COUNT_start", upper: "sum_COUNT_end" }, guides: false })
    .encodeColor({ field: "gender", layout: "overlay" })
    .editColorScale({ domain: ["F", "M"], range: ["#4c78a8", "#f58518", "#e45756", "#72b7b2", "#54a24b", "#eeca3b", "#b279a2", "#ff9da6", "#9d755d", "#bab0ac"] })
    .editBarMark({ stroke: false })
    .encodeBarWidth({ pixels: 18 })
    .editXScale({
      domain: ["US", "UK", "TW", "SG", "SE", "RS", "RO", "PL", "NL", "KR", "JP", "IT", "IN", "IE", "HK", "FR", "ES", "DK", "DE", "CZ", "CR", "CH", "CA", "BR", "BE", "AU"],
      paddingInner: 0.1,
      paddingOuter: 0.05
    })
    .editYScale({ domain: [0, 24000], nice: false })
    .createGrid({ horizontal: { scale: "y", values: [0, 5000, 10000, 15000, 20000], color: "#ddd" } })
    .createXAxis({
      line: {},
      ticksAndLabels: {
        ticks: { length: 5 },
        labels: { fontSize: 10, offset: 7, fontFamily: "sans-serif", rotation: { value: -90, unit: "degrees" } }
      },
      title: { text: "country", fontSize: 11, fontFamily: "sans-serif" }
    })
    .editXAxis({
      line: { color: "#888", lineWidth: 1 },
      ticksAndLabels: {
        ticks: { color: "#888" },
        labels: { color: "black" }
      },
      title: { color: "black", fontWeight: 700 }
    })
    .createYAxis({
      line: {},
      ticksAndLabels: {
        values: [0, 5000, 10000, 15000, 20000],
        ticks: { length: 5 },
        labels: { fontSize: 10, offset: 7, fontFamily: "sans-serif", format: ",.0f" }
      },
      title: { text: "Sum of COUNT", fontSize: 11, fontFamily: "sans-serif", rotation: { value: -90, unit: "degrees" } }
    })
    .editYAxis({
      line: { color: "#888", lineWidth: 1 },
      ticksAndLabels: {
        ticks: { color: "#888" },
        labels: { color: "black" }
      },
      title: { color: "black", fontWeight: 700 }
    })
    .createGuides({
      axes: false,
      grid: false,
      legend: {
        channels: ["color"],
        position: "right",
        title: "gender",
        titleStyle: { fontSize: 11, fontWeight: 700, color: "black", fontFamily: "sans-serif" },
        labels: { fontSize: 10, color: "black", fontFamily: "sans-serif" },
        symbol: { width: 10, height: 10 }
      }
    });
}