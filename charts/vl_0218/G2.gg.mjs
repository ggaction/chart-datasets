// DOCS: doc-6c2c08869091f6a0, doc-fc11e9fb291905d1, doc-2ba6dfbdbb611825, doc-76573a465e2b6a33
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({ width: 485, height: 222, margin: { left: 79, top: 5, right: 6, bottom: 37 } })
    .createData({ values: data })
    .createBarPlot({ x: { field: "Linear Regression MAE", fieldType: "quantitative" }, y: "Crop", guides: false })
    .editBarMark({ fill: "#4c78a8" })
    .editXScale({ domain: [0, 65] })
    .editYScale({ domain: ["Asparagus", "Cabbage", "Carrots", "Cucumbers", "Onions", "Peppers", "Pumpkins", "Squash", "Tomatoes"], paddingInner: 0.1, paddingOuter: 0.05 })
    .encodeBarWidth({ band: 1 })
    .createXAxis({
      line: {},
      ticksAndLabels: {
        values: [0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65],
        ticks: { color: "#888" },
        labels: { fontSize: 10, fontFamily: "sans-serif", color: "black", offset: 7, flush: true }
      },
      title: { text: "MAE", fontSize: 11, fontWeight: 700, fontFamily: "sans-serif", color: "black", offset: 28 }
    })
    .createYAxis({
      line: {},
      ticksAndLabels: {
        ticks: { color: "#888" },
        labels: { fontSize: 10, fontFamily: "sans-serif", color: "black", offset: 7 }
      },
      title: { text: "Crop", fontSize: 11, fontFamily: "sans-serif", color: "black", offset: 64, rotation: { value: -90, unit: "degrees" } }
    })
    .editYAxis({ title: { fontWeight: 700 } })
    .createGrid({
      horizontal: false,
      vertical: { color: '#ddd', lineWidth: 1, values: [0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65] }
    });
}