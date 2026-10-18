// DOCS: doc-2b2e3149e57e859d, doc-8c1e8e710e83918a, doc-76573a465e2b6a33
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({ width: 747, height: 144, margin: { left: 113, top: 5, right: 154, bottom: 39 } })
    .createData({ values: data })
    .createComputedData({ id: "hourNum", as: "HOUR_numeric", expression: { op: "toNumber", operand: { field: "HOUR" } } })
    .createComputedData({ id: "countNum", as: "purchase count num", expression: { op: "toNumber", operand: { field: "purchase count" } } })
    .createSummaryData({
      id: "summarized",
      groupBy: ["HOUR_numeric", "referrer channel"],
      aggregates: [{ op: "sum", field: "purchase count num", as: "sum_purchase count" }]
    })
    .createScatterPlot({
      x: { field: "HOUR_numeric", fieldType: "ordinal" },
      y: { field: "referrer channel", fieldType: "ordinal" },
      guides: false
    })
    .encodeColor({ field: "sum_purchase count", fieldType: "quantitative" })
    .encodeSize({ field: "sum_purchase count", fieldType: "quantitative" })
    .editPointMark({ stroke: "none", opacity: 1 })
    .editXScale({ type: "point", domain: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23], padding: 0.5 })
    .editYScale({ type: "point", domain: ["external", "internal", "search_engine", "social", "typed_bookmarked"], padding: 0.5 })
    .editColorScale({ domain: [0, 204], range: { palette: "blues" } })
    .editColorScale({ interpolate: "hcl", whitePoint: "d50" })
    .editSizeScale({ domain: [0, 204], range: [3.141592653589793, 283.5287369864788] })
    .createXAxis({
      line: { color: "#888" },
      ticksAndLabels: {
        ticks: { length: 5, color: "#888" },
        labels: { fontSize: 10, offset: 7, color: "black", rotation: { value: -90, unit: "degrees" } }
      },
      title: { text: "HOUR", fontSize: 11, fontWeight: 700, color: "black", offset: 28 }
    })
    .createYAxis({
      line: { color: "#888" },
      ticksAndLabels: {
        ticks: { length: 5, color: "#888" },
        labels: { fontSize: 10, offset: 7, color: "black" }
      },
      title: { text: "referrer channel", fontSize: 11, fontWeight: 700, color: "black", rotation: { value: -90, unit: "degrees" }, offset: 102 }
    })
    .createLegend({ combine: "color-size", values: [0, 50, 100, 150, 200] })
    .editLegend({
      titleStyle: { fontSize: 11 },
      labels: { fontSize: 10 }
    })
    .editLegendTitle({ title: "Sum of purchase count", color: "black", fontWeight: 700 })
    .editLegendLabels({ color: "black" })
    .editLegendSymbols({ symbol: { stroke: "transparent", strokeWidth: 1.5, opacity: 1 } });
}