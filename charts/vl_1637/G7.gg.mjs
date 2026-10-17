// DOCS: actual delivered doc-* IDs.
// DOCS: doc-6c2c08869091f6a0 (createBarPlot), doc-fc11e9fb291905d1 (createBarPlot)
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({
      width: 104,
      height: 238,
      margin: { left: 39, top: 5, right: 5, bottom: 33 }
    })
    .createData({ id: "source", values: data })
    .createBarPlot({
      x: { field: "cat", fieldType: "nominal" },
      y: { field: "val", fieldType: "quantitative" },
      guides: false
    })
    .editXScale({ domain: ["a", "b", "c"], paddingInner: 0.1, paddingOuter: 0.05 })
    .editYScale({ domain: [0, 18] })
    .encodeBarWidth({ pixels: 18 })
    .editBarMark({ fill: "#4c78a8" })
    .createHorizontalGrid({ scale: "y", color: "#ddd" })
    .createXAxis({
      line: {},
      ticksAndLabels: {
        ticks: { length: 5 },
        labels: {
          fontSize: 10,
          fontFamily: "sans-serif",
          offset: 7,
          rotation: -Math.PI / 2
        }
      },
      title: {
        text: "cat",
        fontSize: 11,
        fontWeight: "bold",
        offset: 26
      }
    })
    .editXAxisLine({ color: "#888" })
    .editXAxisTicks({ color: "#888" })
    .createYAxis({
      line: {},
      ticksAndLabels: {
        ticks: { length: 5 },
        values: [0, 5, 10, 15],
        labels: {
          fontSize: 10,
          fontFamily: "sans-serif",
          offset: 7
        }
      },
      title: {
        text: "val",
        fontSize: 11,
        fontWeight: "bold",
        offset: 28
      }
    })
    .editYAxisLine({ color: "#888" });
}