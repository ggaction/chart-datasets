import { chart } from "ggaction";
import data from "./data.json";

// DOCS: doc-e790db38fc2a278a, doc-2e6240c00cb297cc, doc-76573a465e2b6a33

export function buildChart() {
  return chart()
    .createCanvas({ width: 316, height: 247, margin: { left: 44, top: 10, right: 72, bottom: 37 } })
    .createData({ values: data })
    .createComputedData({ id: "salesNumeric", as: "SalesNum", expression: { op: "toNumber", operand: { field: "Sales" } } })
    .createComputedData({ id: "profitNumeric", as: "ProfitNum", expression: { op: "toNumber", operand: { field: "Profit" } } })
    .createScatterPlot({ x: { field: "SalesNum" }, y: { field: "ProfitNum" }, guides: false })
    .encodeStroke({ field: "Region", fieldType: "nominal" })
    .editStrokeScale({ target: "scatterPlot", domain: ["Central", "East", "South", "West"], range: ["#4c78a8", "#f58518", "#e45756", "#72b7b2"] })
    .encodePointRadius({ value: Math.sqrt(30) / 2 })
    .editPointMark({ opacity: 0.7, fill: "transparent", strokeWidth: 2 })
    .editXScale({ domain: [0, 18000] })
    .editYScale({ domain: [-8000, 10000] })
    .createGrid({
      vertical: { values: [0, 5000, 10000, 15000] },
      horizontal: { values: [-5000, 0, 5000, 10000] }
    })
    .editHorizontalGrid({ color: "#ddd", lineWidth: 1 })
    .editVerticalGrid({ color: "#ddd", lineWidth: 1 })
    .createXAxis({
      line: { color: "#888" },
      ticksAndLabels: {
        values: [0, 5000, 10000, 15000],
        ticks: { length: 5, color: "#888" },
        labels: {
          fontSize: 10, offset: 7, color: "black", flush: true,
          labelMap: [
            { value: 0, label: "0k" },
            { value: 5000, label: "5k" },
            { value: 10000, label: "10k" },
            { value: 15000, label: "15k" }
          ]
        }
      },
      title: { text: "Sales", fontSize: 11, fontWeight: 700, color: "black" }
    })
    .createYAxis({
      line: { color: "#888" },
      ticksAndLabels: {
        values: [-5000, 0, 5000, 10000],
        ticks: { length: 5, color: "#888" },
        labels: {
          fontSize: 10, offset: 7, color: "black",
          labelMap: [
            { value: -5000, label: "−5k" },
            { value: 0, label: "0k" },
            { value: 5000, label: "5k" },
            { value: 10000, label: "10k" }
          ]
        }
      },
      title: { text: "Profit", fontSize: 11, fontWeight: 700, color: "black", rotation: { value: -90, unit: "degrees" } }
    })
    .createLegend({ title: "Region", titleStyle: { fontSize: 11, fontWeight: 700, color: "black" }, labels: { fontSize: 10, color: "black" } })
    .editLegendSymbols({ symbol: { layers: [{ type: "point", shape: "circle", size: 5, fill: "transparent", strokeWidth: 1.5 }] } })
    .editLegendBlock({ target: "scatterPlot", channel: "stroke", symbol: { opacity: 0.7 } });
}