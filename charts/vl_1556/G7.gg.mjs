import { chart } from "ggaction";
import data from "./data.json";

// DOCS: doc-e790db38fc2a278a doc-2e6240c00cb297cc doc-76573a465e2b6a33
export function buildChart() {
  return chart()
    .createCanvas({ width: 249, height: 242, margin: { left: 39, top: 5, right: 10, bottom: 37 } })
    .createData({ values: data })
    .createComputedData({ id: "goalsNum", as: "goalsNum", expression: { op: "toNumber", operand: { field: "Goals" } } })
    .createComputedData({ id: "assistsNum", as: "assistsNum", expression: { op: "toNumber", operand: { field: "Assists" } } })
    .createScatterPlot({
      x: { field: "goalsNum" },
      y: { field: "assistsNum" },
      guides: false
    })
    .editXScale({ target: "scatterPlot", domain: [0, 65] })
    .editYScale({ target: "scatterPlot", domain: [0, 45] })
    .encodePointRadius({ value: 2.7386 })
    .encodeOpacity({ value: 0.7 })
    .encodeStroke({ target: "scatterPlot", value: "#4c78a8" })
    .editPointMark({ fill: "none", strokeWidth: 2 })
    .createXAxis({
      line: {},
      ticksAndLabels: {
        values: [0, 10, 20, 30, 40, 50, 60],
        ticks: { length: 5 },
        labels: { fontSize: 10, fontFamily: "sans-serif", offset: 7 }
      },
      title: { text: "Goals", fontSize: 11, offset: 28 }
    })
    .createYAxis({
      line: {},
      ticksAndLabels: {
        values: [0, 10, 20, 30, 40],
        ticks: { length: 5 },
        labels: { fontSize: 10, fontFamily: "sans-serif", offset: 7 }
      },
      title: { text: "Assists", fontSize: 11, offset: 28 }
    })
    .editXAxisLine({ color: "#888" })
    .editXAxisTicks({ color: "#888" })
    .editXAxisTitle({ color: "#000", fontWeight: 700 })
    .editYAxisLine({ color: "#888" })
    .editYAxisTicks({ color: "#888" })
    .editYAxisTitle({ color: "#000", fontWeight: 700 })
    .createGrid({ horizontal: true, vertical: true })
    .editGrid({ horizontal: { color: "#ddd" }, vertical: { color: "#ddd" } });
}
