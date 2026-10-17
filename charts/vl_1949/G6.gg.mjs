// DOCS: doc-e790db38fc2a278a, doc-2e6240c00cb297cc, doc-48c72317a1a99e17, doc-aff0694302d3fc9f
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({ width: 1280, height: 421, margin: { left: 47, top: 34, right: 6, bottom: 37 } })
    .createData({ values: data })
    .createComputedData({ id: "incomeNum", as: "medIncome", expression: { op: "toNumber", operand: { field: "Med income" } } })
    .createComputedData({ id: "firearmNum", as: "firearmDeaths", expression: { op: "toNumber", operand: { field: "Firearm deaths" } } })
    .createScatterPlot({
      x: { field: "medIncome", fieldType: "quantitative" },
      y: { field: "firearmDeaths", fieldType: "quantitative" },
      guides: false
    })
    .editXScale({ target: "scatterPlot", domain: [40000, 80000] })
    .editYScale({ target: "scatterPlot", domain: [0, 0.24] })
    .encodeColor({ field: "Division", fieldType: "nominal" })
    .editColorScale({ target: "scatterPlot", domain: ["Midwest", "Northeast", "South", "West"], palette: "set1" })
    .encodePointRadius({ value: 8.6603 })
    .encodeOpacity({ value: 0.7 })
    .createXAxis({
        line: {},
        ticksAndLabels: {
          values: [40000, 42000, 44000, 46000, 48000, 50000, 52000, 54000, 56000, 58000, 60000, 62000, 64000, 66000, 68000, 70000, 72000, 74000, 76000, 78000, 80000],
          ticks: {},
          labels: { fontSize: 10, fontFamily: "sans-serif", offset: 7, format: ",", flush: true }
        },
        title: { text: "Median income, $", fontSize: 11, fontWeight: 700, offset: 28 }
      })
    .createYAxis({
        line: {},
        ticksAndLabels: {
          values: [0, 0.02, 0.04, 0.06, 0.08, 0.1, 0.12, 0.14, 0.16, 0.18, 0.2, 0.22, 0.24],
          ticks: {},
          labels: { fontSize: 10, fontFamily: "sans-serif", offset: 7, format: ".2f" }
        },
        title: { text: "Firearm deaths, per 100k", fontSize: 11, fontWeight: 700, offset: 35.462890625 }
      })
    .createGrid({ horizontal: true, vertical: true })
    .editHorizontalGrid({ color: "#ddd" })
    .editVerticalGrid({ color: "#ddd" })
    .createLegend({
      title: false,
      position: "top",
      labels: { fontSize: 10, fontFamily: "sans-serif" }
    })
    .editLegend({ direction: "horizontal" })
    .editLegendSymbols({ target: "scatterPlot", symbol: { layers: [{ type: "point", shape: "circle" }] } })
    .editLegendBlock({ target: "scatterPlot", channel: "color", symbol: { opacity: 0.7 } });
}