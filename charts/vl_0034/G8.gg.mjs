import { chart } from "ggaction";
import data from "./data.json";

// DOCS: doc-e790db38fc2a278a, doc-2e6240c00cb297cc, doc-2fcdfbdfb290e440

export function buildChart() {
  return chart()
    .createCanvas({ width: 250, height: 242, margin: { left: 44, top: 5, right: 6, bottom: 37 } })
    .createData({ values: data })
    .createComputedData({ id: "profitX", as: "ProfitNum", expression: { op: "toNumber", operand: { field: "Profit" } } })
    .createComputedData({ id: "salesY", as: "SalesNum", expression: { op: "toNumber", operand: { field: "Sales" } } })
    .createScatterPlot({ x: { field: "ProfitNum" }, y: { field: "SalesNum" }, guides: false })
    .editXScale({ domain: [-8000, 10000], nice: false })
    .editYScale({ domain: [0, 18000], nice: false })
    .encodeStroke({ value: "#4c78a8" })
    .editPointMark({ fill: "transparent", strokeWidth: 2 })
    .encodeOpacity({ value: 0.7 })
    .encodePointRadius({ value: Math.sqrt(30) / 2 })
    
    
    .createXAxis({
      ticksAndLabels: {
        values: [-5000, 0, 5000, 10000],
        ticks: { length: 5 },
        labels: { fontSize: 10, offset: 7, flush: true }
      },
      title: { text: "Profit", fontSize: 11 }
    })
    .editXAxisLine({ color: "#888" })
    .editXAxisTicks({ color: "#888" })
    .editXAxisLabels({ color: "black", labelMap: [
      { value: -5000, label: "−5k" },
      { value: 0, label: "0k" },
      { value: 5000, label: "5k" },
      { value: 10000, label: "10k" }
    ] })
    .editXAxisTitle({ fontWeight: 700, color: "black" })
    .createYAxis({
      ticksAndLabels: {
        values: [0, 5000, 10000, 15000],
        ticks: { length: 5 },
        labels: {
          fontSize: 10,
          offset: 7,
          labelMap: [
            { value: 0, label: "0k" },
            { value: 5000, label: "5k" },
            { value: 10000, label: "10k" },
            { value: 15000, label: "15k" }
          ]
        }
      },
      title: { text: "Sales", fontSize: 11, rotation: { value: -90, unit: "degrees" } }
    })
    .editYAxisLine({ color: "#888" })
    .editYAxisTicks({ color: "#888" })
    .editYAxisLabels({ color: "black" })
    .editYAxisTitle({ fontWeight: 700, color: "black" })
    .createGrid({ horizontal: true, vertical: true })
    .editGrid({ horizontal: { color: "#ddd" }, vertical: { color: "#ddd" } });
}