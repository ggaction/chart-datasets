// DOCS: doc-e790db38fc2a278a, doc-2bd5de4bd99e314a, doc-2e6240c00cb297cc, doc-80198e379a34e5ab, doc-76573a465e2b6a33
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({ width: 263, height: 242, margin: { left: 58, top: 5, right: 5, bottom: 37 } })
    .createData({ id: "raw", values: data })
    
    .createComputedData({
      id: "px", as: "px",
      expression: {
        op: "if",
        condition: { op: "eq", left: { field: "profits (millions USD)" }, right: { constant: "" } },
        then: { constant: 0 },
        else: { op: "toNumber", operand: { field: "profits (millions USD)" } }
      }
    })
    .createComputedData({
      id: "py", as: "py",
      expression: {
        op: "if",
        condition: { op: "eq", left: { field: "Investment into R&D (millions USD)" }, right: { constant: "" } },
        then: { constant: 0 },
        else: { op: "toNumber", operand: { field: "Investment into R&D (millions USD)" } }
      }
    })
    .createScatterPlot({
      x: { field: "px", fieldType: "quantitative" },
      y: { field: "py", fieldType: "quantitative" },
      guides: false
    })
    .editXScale({ domain: [0, 180000] })
    .editYScale({ domain: [0, 28000] })
    .encodePointRadius({ value: 2.7386127875258306 })
    .encodeStroke({ value: "#4c78a8" })
    .editPointMark({ fill: "none", opacity: 0.7, strokeWidth: 2 })
    .createXAxis({
      line: { color: "#888" },
      ticksAndLabels: {
        values: [0, 50000, 100000, 150000],
        ticks: { length: 5, color: "#888" },
        labels: { fontSize: 10, fontFamily: "sans-serif", offset: 7, format: ",.0f" }
      },
      title: { text: "profits (millions USD)", fontSize: 11, fontWeight: 700, fontFamily: "sans-serif", offset: 30 }
    })
    .createYAxis({
      line: { color: "#888" },
      ticksAndLabels: {
        values: [0, 5000, 10000, 15000, 20000, 25000],
        ticks: { length: 5, color: "#888" },
        labels: { fontSize: 10, fontFamily: "sans-serif", offset: 7, format: ",.0f" }
      },
      title: { text: "Investment into R&D (millions USD)", fontSize: 11, fontWeight: 700, fontFamily: "sans-serif", offset: 48 }
    })
    .createGrid({ horizontal: { color: "#ddd" }, vertical: { color: "#ddd" } });
}