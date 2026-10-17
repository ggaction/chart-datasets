// DOCS: doc-6c2c08869091f6a0, doc-fc11e9fb291905d1, doc-2bd5de4bd99e314a
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({ width: 109, height: 270, margin: { top: 10, right: 5, bottom: 60, left: 64 } })
    .createData({ values: data })
    .createBarPlot({
      x: { field: "x", fieldType: "nominal" },
      y: { field: "y", fieldType: "quantitative" },
      guides: false
    })
    .editXScale({ domain: ["fake", "reliable"], paddingInner: 0.1, paddingOuter: 0.05 })
    .editYScale({ domain: [0, 350000], zero: true })
    .encodeBarWidth({ band: 1 })
    .editBarMark({ fill: "#4c78a8" })
    .createGrid({ horizontal: { color: "#ddd" }, vertical: false })
    .createXAxis({
      line: { color: "#888" },
      ticksAndLabels: {
        ticks: { length: 5, color: "#888" },
        labels: { fontSize: 10, fontFamily: "sans-serif", color: "black", offset: 7, rotation: { value: -90, unit: "degrees" } }
      },
      title: { text: "type", fontSize: 11, fontFamily: "sans-serif", fontWeight: 700, color: "black", offset: 52 }
    })
    .createYAxis({
      line: { color: "#888" },
      ticksAndLabels: {
        ticks: { length: 5, color: "#888" },
        labels: { fontSize: 10, fontFamily: "sans-serif", color: "black", offset: 7 }
      },
      title: { text: "Count", fontSize: 11, fontFamily: "sans-serif", fontWeight: 700, color: "black", offset: 50 }
    });
}
