// DOCS: doc-6c2c08869091f6a0, doc-fc11e9fb291905d1, doc-2ba6dfbdbb611825
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({
      width: 581,
      height: 542,
      margin: { left: 50, top: 37, right: 31, bottom: 5 }
    })
    .createData({ values: data })
    .createBarPlot({
      x: { field: "b", fieldType: "quantitative" },
      y: { field: "a", fieldType: "ordinal" },
      guides: false
    })
    .editXScale({ domain: [0, 100] })
    .editYScale({
      domain: ["A", "B", "C", "D", "E", "F", "G", "H", "I"],
      paddingInner: 0.1,
      paddingOuter: 0.05
    })
    .encodeBarWidth({ band: 1 })
    .editBarMark({ fill: "#4c78a8", opacity: 1, cornerRadius: 1 })
    .createXAxis({
      position: "top",
      ticksAndLabels: {
        values: [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100],
        ticks: { length: 5, color: "#888888" },
        labels: { fontSize: 10, fontFamily: "sans-serif", fontWeight: 400, color: "black", offset: 7, flush: true }
      },
      title: { text: "Count", fontSize: 11, fontWeight: 700, fontFamily: "sans-serif", color: "black", offset: 30 }
    })
    .editXAxis({ line: { color: "#888888" } })
    .createYAxis({
      line: { color: "#888888" },
      ticksAndLabels: {
        ticks: { length: 5, color: "#888888" },
        labels: { fontSize: 10, fontFamily: "sans-serif", fontWeight: 400, color: "black", offset: 7 }
      },
      title: {
        text: "category",
        fontSize: 11,
        fontWeight: 700,
        fontFamily: "sans-serif",
        color: "black",
        offset: 24,
        rotation: { value: -90, unit: "degrees" }
      }
    })
    .createGrid({ horizontal: false, vertical: { color: "#dddddd", lineWidth: 1 } });
}
