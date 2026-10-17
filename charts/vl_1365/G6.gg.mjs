import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    // DOCS: doc-6c2c08869091f6a0, doc-fc11e9fb291905d1
    .createCanvas({ width: 333, height: 276, margin: { left: 53, top: 10, right: 60, bottom: 66 } })
    .createData({ values: data })
    .filterData({
      id: "filtered",
      field: "preferred color",
      oneOf: ["black", "blue", "gray", "green", "lavender", "orange", "purple", "red", "tan", "white", "yellow"]
    })
    .createSummaryData({
      id: "summary",
      groupBy: ["preferred color", "gender"],
      aggregates: [{ op: "sum", field: "COUNT", as: "sum_COUNT" }]
    })
    .createSortedData({ id: "stackOrder", sortBy: [{ field: "gender", order: "descending" }] })
    .createBarPlot({ x: "preferred color", y: "sum_COUNT", guides: false })
    .encodeColor({ field: "gender", layout: "stack", palette: "category10" })
    .editColorScale({
      domain: ["F", "M"],
      range: ["#4c78a8", "#f58518", "#e45756", "#72b7b2", "#54a24b", "#eeca3b", "#b279a2", "#ff9da6", "#9d755d", "#bab0ac"]
    })
    .encodeBarWidth({ pixels: 18 })
    .editBarMark({ stroke: false })
    .editXScale({
      domain: ["black", "blue", "gray", "green", "lavender", "orange", "purple", "red", "tan", "white", "yellow"],
      paddingInner: 0.1,
      paddingOuter: 0.05
    })
    .editYScale({ domain: [0, 3500], nice: false })
    .createXAxis({
      ticksAndLabels: {
        values: ["black", "blue", "gray", "green", "lavender", "orange", "purple", "red", "tan", "white", "yellow"],
        ticks: { length: 5 },
        labels: { fontSize: 10, offset: 7, rotation: { value: -90, unit: "degrees" } }
      },
      title: { text: "preferred color", fontSize: 11, offset: 56 }
    })
    .editXAxisLine({ color: "#888" })
    .editXAxisTicksAndLabels({
      ticks: { color: "#888" },
      labels: { color: "black" }
    })
    .editXAxisTitle({ fontWeight: 700, color: "black" })
    .createYAxis({
      ticksAndLabels: {
        values: [0, 500, 1000, 1500, 2000, 2500, 3000, 3500],
        ticks: { length: 5 },
        labels: { fontSize: 10, offset: 7, format: ",.0f" }
      },
      title: { text: "Sum of COUNT", fontSize: 11 }
    })
    .editYAxisLine({ color: "#888" })
    .editYAxisTicksAndLabels({
      ticks: { color: "#888" },
      labels: { color: "black" }
    })
    .editYAxisTitle({ fontWeight: 700, color: "black" })
    .createGrid({ horizontal: true })
    .editHorizontalGrid({ color: "#ddd" })
    .createLegend({
      title: "gender",
      titleStyle: { fontSize: 11 },
      labels: { fontSize: 10 }
    })
    .editLegendTitle({ fontWeight: 700, color: "black" })
    .editLegendLabels({ color: "black" })
    .editLegendSymbols({ symbol: { layers: [{ type: "swatch", width: 10, height: 10 }] } });
}