// DOCS: doc-6c2c08869091f6a0 doc-fc11e9fb291905d1
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({ width: 489, height: 403, margin: { left: 33, top: 52, right: 6, bottom: 51 } })
    .createData({ values: data })
    .createFoldData({ id: "reallocationFold", fields: ["entryReallocate", "growReallocate", "exitReallocate", "shrinkReallocate"], as: { key: "metric", value: "value" } })
    .createComputedData({ id: "metricCleanComputed", as: "metricClean", expression: { op: "if", condition: { op: "eq", left: { field: "metric" }, right: { constant: "entryReallocate" } }, then: { constant: "Entry" }, else: { op: "if", condition: { op: "eq", left: { field: "metric" }, right: { constant: "growReallocate" } }, then: { constant: "Hires" }, else: { op: "if", condition: { op: "eq", left: { field: "metric" }, right: { constant: "exitReallocate" } }, then: { constant: "Exit" }, else: { constant: "Fires" } } } } })
    .createComputedData({ id: "yearNumComputed", as: "yearNum", expression: { op: "toNumber", operand: { field: "year" } } })
    .createComputedData({ id: "valueNumComputed", as: "valueNum", expression: { op: "toNumber", operand: { field: "value" } } })
    .createSortedData({ id: "reallocateSorted", sortBy: [{ field: "metricClean", order: "descending" }] })
    .createStackData({ category: "yearNum", group: "metricClean", value: "valueNum" })
    .createBarPlot({
      x: { field: "yearNum", fieldType: "quantitative" },
      y: { lower: "valueNum_start", upper: "valueNum_end", fieldType: "quantitative" },
      guides: false
    })
    .encodeBarWidth({ pixels: 15 })
    .encodeColor({ field: "metricClean", layout: "overlay" })
    .editColorScale({ target: "barPlot", domain: ["Entry", "Exit", "Fires", "Hires"], range: ["rgb(66, 10, 104)", "rgb(147, 38, 103)", "rgb(221, 81, 58)", "rgb(252, 165, 10)"] })
    .editBarMark({ stroke: false })
    .editXScale({ domain: [1996, 2020] })
    .editYScale({ domain: [0, 0.35] })
    .createXAxis({
      title: false,
      line: {},
      ticksAndLabels: {
        values: [1996, 1998, 2000, 2002, 2004, 2006, 2008, 2010, 2012, 2014, 2016, 2018, 2020],
        ticks: { length: 5 },
        labels: { fontSize: 10, offset: 7, flush: true }
      }
    })
    .editXAxisLine({ color: "#888" })
    .editXAxisTicksAndLabels({
      ticks: { color: "#888" },
      labels: { color: "black", format: ".0f" }
    })
    .createYAxis({
      title: false,
      line: {},
      ticksAndLabels: {
        values: [0, 0.05, 0.1, 0.15, 0.2, 0.25, 0.3, 0.35],
        ticks: { length: 5 },
        labels: { fontSize: 10, offset: 7 }
      }
    })
    .editYAxisLine({ color: "#888" })
    .editYAxisTicksAndLabels({
      ticks: { color: "#888" },
      labels: { color: "black", format: ".0%" }
    })
    .createLegend({
      title: false,
      position: "bottom",
      labels: { fontSize: 10, color: "black" }
    })
    .editLegendSymbols({
      symbol: { layers: [{ type: "swatch", width: 10, height: 10 }] }
    })
    .createTitle({
      text: "Job reallocation, 1997-2020",
      titleStyle: { fontSize: 13 },
      alongOffset: -27.0146484375
    })
    .editTitle({ offset: -12, gap: 3, titleStyle: { fontWeight: 700, color: "black" } })
    .editTitle({ subtitle: "Jobs created and destroyed, productivity weighted.\n", subtitleStyle: { fontSize: 10, fontStyle: "italic", color: "black" } });
}