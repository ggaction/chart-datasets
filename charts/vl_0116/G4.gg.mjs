// DOCS: doc-e790db38fc2a278a, doc-2e6240c00cb297cc, doc-2bd5de4bd99e314a, doc-eacb474f181ce5c3
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({
      width: 477,
      height: 347,
      margin: { left: 36, top: 10, right: 141, bottom: 37 }
    })
    .createData({ values: data })
    .createComputedData({
      id: "betaNum",
      as: "betaNum",
      expression: { op: "toNumber", operand: { field: "beta" } }
    })
    .createComputedData({
      id: "alphaNum",
      as: "alphaNum",
      expression: { op: "toNumber", operand: { field: "alpha" } }
    })
    .createScatterPlot({ x: "betaNum", y: "alphaNum", guides: false })
    .editXScale({ domain: [0, 35] })
    .editYScale({ domain: [0, 9] })
    .encodeColor({ field: "exit_code", fieldType: "ordinal" })
    .editColorScale({
      target: "scatterPlot",
      domain: ["1", "4"],
      range: ["rgb(251, 202, 139)", "rgb(175, 211, 230)"]
    })
    .encodePointRadius({ value: 3.873 })
    .encodeStroke({ value: "black" })
    .editPointMark({ strokeWidth: 0.5, opacity: 0.7 })
    .createGrid({ horizontal: true, vertical: true })
    .editHorizontalGrid({ color: "#ddd" })
    .editVerticalGrid({ color: "#ddd" })
    .createXAxis({
      line: { color: "#888" },
      ticksAndLabels: {
        values: [0, 5, 10, 15, 20, 25, 30, 35],
        ticks: { color: "#888", length: 5 },
        labels: { fontSize: 10, fontFamily: "sans-serif", offset: 7 }
      },
      title: { text: "Beta", fontSize: 11, fontWeight: 700, fontFamily: "sans-serif", offset: 28 }
    })
    .createYAxis({
      line: { color: "#888" },
      ticksAndLabels: {
        values: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
        ticks: { color: "#888", length: 5 },
        labels: { fontSize: 10, fontFamily: "sans-serif", offset: 7 }
      },
      title: { text: "Alpha", fontSize: 11, fontWeight: 700, fontFamily: "sans-serif", offset: 28 }
    })
    .createLegend({ position: "right", title: "Optimisation exit code" })
    .editLegendSymbols({
      target: "scatterPlot",
      symbol: { layers: [{ type: "point", shape: "circle", stroke: "black", strokeWidth: 1.5 }] }
    })
    .editLegendBlock({ target: "scatterPlot", channel: "color", symbol: { opacity: 0.7 } })
    .editLegendLabels({ fontSize: 10, fontFamily: "sans-serif" })
    .editLegendTitle({ fontSize: 11, fontWeight: 700, fontFamily: "sans-serif" });
}