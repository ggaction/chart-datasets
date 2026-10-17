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
    .createGrid({ horizontal: true, vertical: true })
    .editHorizontalGrid({ color: "#ddd", lineWidth: 1 })
    .editVerticalGrid({ color: "#ddd", lineWidth: 1 })
    .createXAxis({
      line: {},
      ticksAndLabels: {
        values: [0, 0.2, 0.4, 0.6, 0.8, 1, 1.2, 1.4, 1.6, 1.8, 2, 2.2],
        ticks: { length: 5 },
        labels: { fontSize: 10, offset: 7, flush: true }
      },
      title: { text: "points", fontSize: 11, offset: 27 }
    })
    .createYAxis({
      line: {},
      ticksAndLabels: {
        values: [0, 500000, 1000000, 1500000, 2000000, 2500000, 3000000, 3500000, 4000000, 4500000],
        ticks: { length: 5 },
        labels: { fontSize: 10, offset: 7 }
      },
      title: { text: "gdp", fontSize: 11, offset: 60 }
    })
    .editXAxisLine({ color: "#888" })
    .editXAxisTicks({ color: "#888" })
    .editXAxis({
      ticksAndLabels: { labels: { format: ".1f" } },
      title: { fontWeight: 700 }
    })
    .editYAxisLine({ color: "#888" })
    .editYAxisTicks({ color: "#888" })
    .editYAxis({
      ticksAndLabels: { labels: { format: ",.0f" } },
      title: { fontWeight: 700 }
    });
}
