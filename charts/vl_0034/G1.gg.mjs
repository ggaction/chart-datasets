import { chart } from "ggaction";
import data from "./data.json";

// DOCS: doc-e790db38fc2a278a, doc-2e6240c00cb297cc, doc-2fcdfbdfb290e440

export function buildChart() {
  return chart()
    .createCanvas({ width: 250, height: 242, margin: { left: 44, top: 5, right: 6, bottom: 37 } })
    .createData({ values: data })
    .createComputedData({ id: "profitX", as: "ProfitNum", expression: { op: "toNumber", operand: { field: "Profit" } } })
    .createComputedData({ id: "salesY", as: "SalesNum", expression: { op: "toNumber", operand: { field: "Sales" } } })
    .createScatterPlot({
      x: { field: "ProfitNum", scale: { domain: [-8000, 10000], nice: false } },
      y: { field: "SalesNum", scale: { domain: [0, 18000], nice: false } },
      guides: false
    })
    .editPointMark({ fill: "transparent", stroke: "#4c78a8", strokeWidth: 2 })
    .encodeOpacity({ value: 0.7 })
    .encodePointRadius({ value: Math.sqrt(30) / 2 })
    
    
    .createGuides({
      grid: { horizontal: { color: "#ddd" }, vertical: { color: "#ddd" } },
      axes: {
        x: {
          line: { color: "#888" },
          ticksAndLabels: {
            values: [-5000, 0, 5000, 10000],
            ticks: { length: 5, color: "#888" },
            labels: {
              fontSize: 10,
              offset: 7,
              color: "black",
              flush: true,
              labelMap: [
                { value: -5000, label: "−5k" },
                { value: 0, label: "0k" },
                { value: 5000, label: "5k" },
                { value: 10000, label: "10k" }
              ]
            }
          },
          title: { text: "Profit", fontSize: 11, fontWeight: 700, color: "black" }
        },
        y: {
          line: { color: "#888" },
          ticksAndLabels: {
            values: [0, 5000, 10000, 15000],
            ticks: { length: 5, color: "#888" },
            labels: {
              fontSize: 10,
              offset: 7,
              color: "black",
              labelMap: [
                { value: 0, label: "0k" },
                { value: 5000, label: "5k" },
                { value: 10000, label: "10k" },
                { value: 15000, label: "15k" }
              ]
            }
          },
          title: { text: "Sales", fontSize: 11, fontWeight: 700, color: "black", rotation: { value: -90, unit: "degrees" } }
        }
      }
    });
}