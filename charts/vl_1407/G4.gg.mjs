// DOCS: doc-e790db38fc2a278a, doc-2e6240c00cb297cc, doc-7f2c254224fc4908
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({ width: 365, height: 247, margin: { left: 41, top: 10, right: 124, bottom: 37 } })
    .createData({ values: data })
    .createComputedData({ id: "povertyRNum", as: "povertyR_num", expression: { op: "toNumber", operand: { field: "povertyR" } } })
    .createComputedData({ id: "moneyPctNum", as: "moneyPct_num", expression: { op: "toNumber", operand: { field: "moneyPct" } } })
    .createComputedData({ id: "totalPopNum", as: "total_pop_num", expression: { op: "toNumber", operand: { field: "total_pop" } } })
    .createScatterPlot({ x: "povertyR_num", y: "moneyPct_num", guides: false })
    .editXScale({ domain: [0, 40] })
    .editYScale({ domain: [0, 1] })
    .encodeSize({ target: "scatterPlot", field: "total_pop_num" })
    .editSizeScale({ target: "scatterPlot", domain: [0, 1796843], range: [Math.PI, 361 * Math.PI / 4] })
    .encodeStroke({ target: "scatterPlot", value: "#4c78a8" })
    .editPointMark({ target: "scatterPlot", strokeWidth: 2 })
    .editPointMark({ target: "scatterPlot", fill: "none" })
    .encodeOpacity({ value: 0.7, target: "scatterPlot" })
    .createXAxis({
      line: {},
      ticksAndLabels: { ticks: {}, labels: { fontSize: 10, offset: 7 } },
      title: { text: "povertyR", fontSize: 11, fontWeight: 700, offset: 28 }
    })
    .createYAxis({
      line: {},
      ticksAndLabels: { ticks: {}, labels: { fontSize: 10, offset: 7 } },
      title: { text: "moneyPct", fontSize: 11, fontWeight: 700, offset: 28 }
    })
    .createGrid({ horizontal: { color: "#ddd" }, vertical: { color: "#ddd" } })
    .createGuides({
      axes: false,
      grid: false,
      legend: {
        target: "scatterPlot",
        channels: ["size"],
        values: [0, 500000, 1000000, 1500000],
        title: "total_pop",
        titleStyle: { fontSize: 11, fontWeight: 700 },
        labels: { fontSize: 10, format: "," }
      }
    })
    .editLegendBlock({
      target: "scatterPlot",
      channel: "size",
      symbol: { fill: "none", stroke: "#4c78a8", strokeWidth: 1.5 }
    });
}