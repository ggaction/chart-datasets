// DOCS: doc-6c2c08869091f6a0 (createBarPlot), doc-fc11e9fb291905d1 (createBarPlot basic-charts)
// G1 — integrated high-level declaration: numeric-center bars, quantitative y.
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    // Source config padding: 50 on all sides; default continuous view 200x200.
    .createCanvas({
      width: 360,
      height: 354,
      margin: { top: 72, right: 76, bottom: 82, left: 84 }
    })
    // Raw data in ./data.json is complete and immutable; no schema invented.
    .createData({ values: data })
    .createBarPlot({
      x: { field: "Amount", fieldType: "quantitative" },
      y: { field: "count", fieldType: "quantitative" },
      guides: false
    })
    .editBarMark({ fill: "#4c78a8", opacity: 1 })
    .encodeBarWidth({ pixels: 70 })
    .editXScale({ domain: [0, 3000] })
    .editYScale({ domain: [0, 50] })
    .createXAxis({
      ticksAndLabels: {
        values: [0, 500, 1000, 1500, 2000, 2500, 3000],
        labels: { fontSize: 10, offset: 7, format: ",.0f" }
      },
      title: { text: "Amount", fontSize: 11 }
    })
    .createYAxis({
      ticksAndLabels: {
        values: [0, 10, 20, 30, 40, 50],
        labels: { fontSize: 10, offset: 7 }
      },
      title: { text: "# Donations", fontSize: 11, offset: 33 }
    })
    .editXAxis({
      line: { color: "black" },
      ticksAndLabels: {
        ticks: { color: "#888" },
        labels: { color: "black" }
      },
      title: { fontWeight: "bold" }
    })
    .editYAxis({
      line: { color: "black" },
      ticksAndLabels: {
        ticks: { color: "#888" },
        labels: { color: "black" }
      },
      title: { fontWeight: "bold" }
    })
    .createGrid({
      horizontal: { color: "#ddd" },
      vertical: { color: "#ddd" }
    })
    .createTitle({
      text: "Angry Democrats Donations (\u003c$3000)",
      offset: -3,
      titleStyle: { fontSize: 13 }
    });
}