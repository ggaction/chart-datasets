// DOCS: actual delivered doc-6c2c08869091f6a0 (createBarPlot), doc-fc11e9fb291905d1 (createBarPlot basic-charts),
// doc-333a87e52954985d (grouped-bar tutorial provenance), doc-e8d8c6aef74192f0 (README canvas/data provenance)
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({
      width: 300,
      height: 200,
      margin: { left: 44, top: 10, right: 12, bottom: 35 }
    })
    .createData({ values: data })
    .createBarPlot({
      guides: false,
      x: { field: "a", fieldType: "nominal" },
      y: { field: "b", fieldType: "quantitative" }
    })
    .editXScale({
      domain: ["A", "B", "C", "D", "E", "F", "G", "H", "I"],
      paddingInner: 0.1,
      paddingOuter: 0.05
    })
    .editYScale({ domain: [0, 100] })
    .encodeBarWidth({ band: 1 })
    .editBarMark({ fill: "#4c78a8" })
    .createGrid({ horizontal: { scale: "y", color: "#ddd", lineWidth: 1 } })
    .createXAxis({
      position: "bottom",
      ticksAndLabels: {
        values: ["A", "B", "C", "D", "E", "F", "G", "H", "I"],
        labels: { fontSize: 10, fontFamily: "sans-serif", offset: 7, rotation: { value: 270, unit: "degrees" } }
      },
      title: { text: "a", fontSize: 11, fontWeight: "bold", fontFamily: "sans-serif", offset: 28 }
    })
    .createYAxis({
      position: "left",
      ticksAndLabels: {
        values: [0, 20, 40, 60, 80, 100],
        labels: { fontSize: 10, fontFamily: "sans-serif" }
      },
      title: { text: "b", fontSize: 11, fontWeight: "bold", fontFamily: "sans-serif" }
    })
  .editYAxis({
    title: { offset: 32.1064453125 },
    ticksAndLabels: { labels: { offset: 6.5 } }
  });
}
