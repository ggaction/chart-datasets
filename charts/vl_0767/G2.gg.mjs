// DOCS: doc-fc11e9fb291905d1, doc-6c2c08869091f6a0, doc-bedf05337affd6f4
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({ width: 611, height: 435, margin: { left: 105, top: 98, right: 6, bottom: 37 } })
    .createData({ id: "raw", values: data })
    .createComputedData({ id: "Value_num", as: "Value_num", expression: { op: "toNumber", operand: { field: "Value" } } })
    .createSortedData({
      id: "budgetTypeOrder",
      sortBy: [{ field: "Type2", order: "ascending" }]
    })
    .createBarPlot({
      x: { field: "Value_num", aggregate: "sum" },
      y: { field: "Type3", fieldType: "ordinal" },
      guides: false
    })
    .encodeColor({ field: "Type2", fieldType: "nominal", layout: "stack" })
    .encodeBarWidth({ band: 1 })
    .editXScale({ domain: [0, 26] })
    .editYScale({ domain: ["Average, 1973-2022", "Actual, 2022", "2033"], paddingInner: 0.1, paddingOuter: 0.05 })
    .editColorScale({
      domain: ["Defense", "Major Health Care programs", "Net interest", "Nondefense", "Other", "Social Security"],
      range: ["#4c78a8", "#f58518", "#e45756", "#72b7b2", "#54a24b", "#eeca3b"]
    })
    .createAxes({
      x: {
        line: { color: "#888888" },
        ticksAndLabels: { values: [0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26], labels: { fontSize: 10, offset: 7, flush: true } },
        title: { text: "% of GDP", fontSize: 11, fontWeight: "700", offset: 28 }
      },
      y: {
        line: { color: "#888888" },
        ticksAndLabels: { labels: { fontSize: 10, offset: 7 } },
        title: false
      }
    })
    .createGrid({ horizontal: false, vertical: { color: "#dddddd" } })
    .createLegend({ labels: { fontSize: 10 }, title: false, at: { x: -99, y: -31 } })
    .editLegend({ symbol: { layers: [{ type: "swatch", width: 10, height: 10 }] }, columns: 13 })
    .createTitle({ text: "US Government expenditure: past, present and future", titleStyle: { fontSize: 13 }, subtitleStyle: { fontSize: 13 } })
    .editTitle({ subtitle: "Historic, 2022, and 2033 Outlays\nSource: Congressional Budget Office", alongOffset: -100, offset: -11 });
}