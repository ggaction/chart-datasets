// DOCS: doc-fc11e9fb291905d1, doc-bedf05337affd6f4
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
  .createCanvas({
    width: 398,
    height: 321,
    margin: { top: 11, right: 5, bottom: 60, left: 43 }
  })
  .createData({ values: data })
  .createBarPlot({
    x: { field: "date", fieldType: "nominal", scale: { paddingInner: 0.1, paddingOuter: 0.05 } },
    y: { field: "hours slept", fieldType: "quantitative", scale: { domain: [0, 10] } },
    guides: false
  })
  .editBarMark({ fill: "#4c78a8" })
  .encodeBarWidth({ pixels: 20 })
  .createGrid({ horizontal: { color: "#ddd" } })
  .createXAxis({
    line: { color: "#888" },
    ticksAndLabels: {
      values: ["2/15", "2/16", "2/17", "2/18", "2/19", "2/20", "Today"],
      ticks: { color: "#888", length: 5 },
      labels: { fontSize: 12, offset: 7, rotation: { value: -90, unit: "degrees" } }
    },
    title: { text: "date", fontSize: 12, fontWeight: 700, offset: 46 }
  })
  .createYAxis({
    line: { color: "#888" },
    ticksAndLabels: {
      values: [0, 2, 4, 6, 8, 10],
      ticks: { color: "#888", length: 5 },
      labels: { fontSize: 12, offset: 7 }
    },
    title: { text: "hours slept", fontSize: 12, fontWeight: 700, offset: 31 }
  });
}