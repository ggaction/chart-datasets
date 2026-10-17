// DOCS: doc-6c2c08869091f6a0, doc-fc11e9fb291905d1, doc-333a87e52954985d
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({ width: 260, height: 410, margin: { left: 58, top: 10, right: 5, bottom: 84 } })
    .createData({ values: data })
    .createBarPlot({
      x: { field: "value", fieldType: "ordinal" },
      y: { field: "count" },
      guides: false
    })
    .editBarMark({ fill: "#4c78a8" })
    .encodeBarWidth({ band: 1 })
    .editXScale({ domain: ["conventional", "organic"], paddingInner: 0.1, paddingOuter: 0.05 })
    .editYScale({ domain: [0, 10000] })
    .createGrid({ horizontal: { values: [0, 1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000, 10000], color: "#ddd", lineWidth: 1 } })
    .createXAxis({
      line: { color: "#888" },
      ticksAndLabels: {
        ticks: { color: "#888" },
        labels: { fontSize: 10, fontFamily: "sans-serif", color: "#000", offset: 7, rotation: { value: -90, unit: "degrees" } }
      },
      title: { text: "value", fontSize: 11, fontWeight: 700, fontFamily: "sans-serif", color: "#000", offset: 63 }
    })
    .createYAxis({
      line: { color: "#888" },
      ticksAndLabels: {
        values: [0, 1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000, 10000],
        ticks: { color: "#888" },
        labels: { fontSize: 10, fontFamily: "sans-serif", color: "#000", offset: 7, labelMap: [
          { value: 0, label: "0" },
          { value: 1000, label: "1,000" },
          { value: 2000, label: "2,000" },
          { value: 3000, label: "3,000" },
          { value: 4000, label: "4,000" },
          { value: 5000, label: "5,000" },
          { value: 6000, label: "6,000" },
          { value: 7000, label: "7,000" },
          { value: 8000, label: "8,000" },
          { value: 9000, label: "9,000" },
          { value: 10000, label: "10,000" }
        ] }
      },
      title: { text: "count", fontSize: 11, fontWeight: 700, fontFamily: "sans-serif", color: "#000", offset: 40 }
    });
}
