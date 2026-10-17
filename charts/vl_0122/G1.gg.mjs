import { chart } from "ggaction";
import data from "./data.json";

// DOCS: doc-6c2c08869091f6a0, doc-fc11e9fb291905d1, doc-bedf05337affd6f4

export function buildChart() {
  return chart()
    .createCanvas({
      width: 463,
      height: 351,
      margin: { left: 57, top: 5, right: 6, bottom: 46 }
    })
    .createData({ values: data })
    .createWindowData({
      id: "observationIdentity",
      operations: [{ op: "rowNumber", as: "sourceObservation" }]
    })
    .createStackData({
      category: "G3",
      group: "sourceObservation",
      value: "Walc"
    })
    .createBarPlot({
      x: { field: "G3", fieldType: "quantitative" },
      y: { field: "Walc", fieldType: "quantitative" },
      guides: false
    })
    .encodeBarWidth({ pixels: 5 })
    .encodeYRange({ lower: "Walc_start", upper: "Walc_end" })
    .editBarMark({ stroke: false })
    .editXScale({ domain: [-2, 20], nice: false })
    .editYScale({ domain: [0, 260], nice: false })
    .createGrid({
      vertical: { values: [-2, 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20], color: "#ddd" },
      horizontal: { values: [0, 50, 100, 150, 200, 250], color: "#ddd" }
    })
    .createAxes({
      x: {
        line: { color: "#888" },
        ticksAndLabels: {
          values: [-2, 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20],
          ticks: { length: 5, color: "#888" },
          labels: { fontSize: 15, offset: 7, color: "black", flush: true }
        },
        title: { text: "Portuguese Final Grade (0-20)", fontSize: 15, fontWeight: 700, color: "black" }
      },
      y: {
        line: { color: "#888" },
        ticksAndLabels: {
          values: [0, 50, 100, 150, 200, 250],
          ticks: { length: 5, color: "#888" },
          labels: { fontSize: 15, offset: 7, color: "black" }
        },
        title: { text: "Weekend Alcohol Consumption (1-5)", fontSize: 15, fontWeight: 700, color: "black" }
      }
    });
}