import { chart } from "ggaction";
import data from "./data.json";

// DOCS: doc-e790db38fc2a278a, doc-dfae58344d5a524e, doc-964c0bc52c92a0d3, doc-bc26da5598d35bae

export function buildChart() {
  return chart()
    .createCanvas({ width: 418, height: 387, margin: { left: 72, top: 10, right: 6, bottom: 37 } })
    .createData({ id: "raw", values: data })
    .createComputedData({ id: "pts", as: "pointsNum", expression: { op: "toNumber", operand: { field: "points" } } })
    .createComputedData({ id: "gdpNum", as: "gdpNum", expression: { op: "toNumber", operand: { field: "gdp" } } })
    .createScatterPlot({ x: { field: "pointsNum" }, y: { field: "gdpNum" }, guides: false })
    .editXScale({ domain: [0, 2.2] })
    .editYScale({ domain: [0, 4500000] })
    .encodePointRadius({ value: 2.7386 })
    .editPointMark({ fill: "none", stroke: "#4c78a8", strokeWidth: 2 })
    .editPointMark({ opacity: 0.7 })
    .createGrid({
      horizontal: { color: "#ddd", lineWidth: 1 },
      vertical: { color: "#ddd", lineWidth: 1 }
    })
    .createXAxis({
      line: { color: "#888" },
      ticksAndLabels: {
        values: [0, 0.2, 0.4, 0.6, 0.8, 1, 1.2, 1.4, 1.6, 1.8, 2, 2.2],
        ticks: { length: 5, color: "#888" },
        labels: { fontSize: 10, offset: 7, format: ".1f", flush: true }
      },
      title: { text: "points", fontSize: 11, fontWeight: 700, offset: 27 }
    })
    .createYAxis({
      line: { color: "#888" },
      ticksAndLabels: {
        values: [0, 500000, 1000000, 1500000, 2000000, 2500000, 3000000, 3500000, 4000000, 4500000],
        ticks: { length: 5, color: "#888" },
        labels: { fontSize: 10, offset: 7, format: ",.0f" }
      },
      title: { text: "gdp", fontSize: 11, fontWeight: 700, offset: 60 }
    });
}
