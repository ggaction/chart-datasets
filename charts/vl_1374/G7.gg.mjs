import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({ width: 393, height: 247, margin: { left: 53, top: 5, right: 60, bottom: 42 } })
    .createData({ values: data })
    .filterData({ id: "filtered", field: "cloth size", oneOf: ["28", "29", "30", "31", "32", "33", "34", "36", "l", "m", "s", "xl", "xs", "xxs"] })
    .createSummaryData({ id: "summary", groupBy: ["cloth size", "gender"], aggregates: [{ op: "sum", field: "COUNT", as: "sum_COUNT" }] })
    .createSortedData({ id: "stackOrder", sortBy: [{ field: "gender", order: "descending" }] })
    .createStackData({ category: "cloth size", group: "gender", value: "sum_COUNT" })
    .createBarPlot({ x: "cloth size", y: { lower: "sum_COUNT_start", upper: "sum_COUNT_end" }, guides: false })
    .encodeColor({ field: "gender", layout: "overlay" })
    .encodeBarWidth({ band: 1 })
    .editXScale({ domain: ["28", "29", "30", "31", "32", "33", "34", "36", "l", "m", "s", "xl", "xs", "xxs"], paddingInner: 0.1, paddingOuter: 0.05 })
    .editYScale({ domain: [0, 5500] })
    .editColorScale({ domain: ["F", "M"] })
    .createXAxis({
      ticksAndLabels: {
        ticks: { length: 5 },
        labels: { fontSize: 10, offset: 7, rotation: { value: -90, unit: "degrees" } }
      },
      title: { text: "cloth size", fontSize: 11 }
    })
    .editXAxis({
      line: { color: "#888" },
      ticksAndLabels: { ticks: { color: "#888" }, labels: { color: "black" } },
      title: { fontWeight: 700 }
    })
    .createYAxis({
      ticksAndLabels: {
        values: [0, 1000, 2000, 3000, 4000, 5000],
        ticks: { length: 5 },
        labels: { fontSize: 10, offset: 7, format: ",.0f" }
      },
      title: { text: "Sum of COUNT", fontSize: 11 }
    })
    .editYAxis({
      line: { color: "#888" },
      ticksAndLabels: { ticks: { color: "#888" }, labels: { color: "black" } },
      title: { fontWeight: 700 }
    })
    .createGrid({ horizontal: true, vertical: false })
    .editHorizontalGrid({ color: "#ddd" })
    
    .createLegend({ title: "gender", titleStyle: { fontSize: 11, fontWeight: 700 }, labels: { fontSize: 10 } })
    .editLegendSymbols({ symbol: { layers: [{ type: "swatch", width: 10, height: 10 }] } });;
}

// DOCS: doc-6c2c08869091f6a0, doc-fc11e9fb291905d1, doc-5f9c35fbf79658cc