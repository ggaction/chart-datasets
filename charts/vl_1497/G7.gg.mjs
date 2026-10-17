// DOCS: doc-fc11e9fb291905d1 (createBarPlot), doc-6c2c08869091f6a0 (createBarPlot)
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({
      width: 410,
      height: 364,
      margin: { left: 44, top: 27, right: 6, bottom: 37 }
    })
    .createData({ values: data })
    .createBarPlot({
      x: { field: "Number of Heads", fieldType: "quantitative" },
      y: { field: "Number of Ways", fieldType: "quantitative" },
      guides: false
    })
    .encodeBarWidth({ pixels: 5 })
    .editXScale({ domain: [-5, 45] })
    .editYScale({ domain: [0, 400] })
    .editBarMark({ fill: "#4c78a8" })
    .createTitle({ text: "Distribution of Heads", offset: -13, titleStyle: { fontSize: 13 } })
  .editTitle({ align: "center", titleStyle: { fontWeight: "bold" } })
    .createXAxis({
      ticksAndLabels: {
        values: [-5, 0, 5, 10, 15, 20, 25, 30, 35, 40, 45],
        labels: { fontSize: 10, offset: 7, flush: true }
      },
      title: { text: "Number of Heads", fontSize: 11, offset: 28 }
    })
    .editXAxisTitle({ fontWeight: 700 })
    .editXAxisLine({ color: "#888" })
    .editXAxisTicks({ color: "#888" })
    .createYAxis({
      ticksAndLabels: {
        values: [0, 50, 100, 150, 200, 250, 300, 350, 400],
        labels: { fontSize: 10, offset: 7 }
      },
      title: { text: "Number of Ways", fontSize: 11, offset: 33 }
    })
    .editYAxisTitle({ fontWeight: 700 })
    .editYAxisLine({ color: "#888" })
    .editYAxisTicks({ color: "#888" })
    .createGrid({ horizontal: true, vertical: true })
    .editGrid({
      horizontal: { color: "#ddd", lineWidth: 1 },
      vertical: { color: "#ddd", lineWidth: 1 }
    });
}
