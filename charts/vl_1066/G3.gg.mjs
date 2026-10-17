// DOCS: doc-6c2c08869091f6a0, doc-fc11e9fb291905d1, doc-2ba6dfbdbb611825
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({ width: 589, height: 545, margin: { left: 59, top: 10, right: 30, bottom: 35 } })
    .createData({ values: data })
    .createBarPlot({ x: "a", y: "b", guides: false })
    .encodeBarWidth({ band: 1 })
    .editXScale({ domain: ["A", "B", "C", "D", "E", "F", "G", "H", "I"], paddingInner: 0.1, paddingOuter: 0.05 })
    .editYScale({ domain: [0, 100] })
    .editBarMark({ cornerRadius: 1, fill: "#4c78a8" })
.createGrid({
      horizontal: { values: [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100] },
      vertical: false
    })
    .editHorizontalGrid({ color: "#ddd" })
    .createXAxis({
      ticksAndLabels: {
        values: ["A", "B", "C", "D", "E", "F", "G", "H", "I"],
      ticks: { length: 5 },
        labels: { fontSize: 10, fontFamily: "sans-serif", offset: 7, rotation: { value: -90, unit: "degrees" } }
      },
      title: { text: "category", fontSize: 11, fontFamily: "sans-serif", offset: 28 }
    })
    .createYAxis({
      ticksAndLabels: {
        values: [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100],
      ticks: { length: 5 },
        labels: { fontSize: 10, fontFamily: "sans-serif", offset: 7 }
      },
      title: { text: "Count", fontSize: 11, fontFamily: "sans-serif", offset: 33 }
    })
    .editXAxis({
      line: { color: "#888" },
      ticksAndLabels: { ticks: { color: "#888" }, labels: { color: "black" } },
      title: { fontWeight: 700, color: "black" }
    })
    .editYAxis({
      line: { color: "#888" },
      ticksAndLabels: { ticks: { color: "#888" }, labels: { color: "black" } },
      title: { fontWeight: 700, color: "black" }
    });
}
