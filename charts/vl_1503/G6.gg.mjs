// DOCS: doc-fc11e9fb291905d1, doc-dfae58344d5a524e, doc-6c2c08869091f6a0, doc-333a87e52954985d
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({
      width: 212,
      height: 423,
      margin: { left: 76, top: 27, right: 76, bottom: 96 }
    })
    .createData({ values: data })
    .createBarPlot({
      x: { field: "repo", fieldType: "nominal" },
      y: { field: "number" },
      guides: false
    })
    .encodeBarWidth({ band: 1 })
    .editXScale({ domain: ["numpy", "numpydoc", "numpy-tutorials"], paddingInner: 0.1, paddingOuter: 0.05 })
    .editYScale({ domain: [0, 20] })
    .editBarMark({ fill: "#4c78a8" })
    .createXAxis({
      line: {},
      ticksAndLabels: {
        ticks: { length: 5 },
        labels: {
          fontSize: 10,
          offset: 7,
          rotation: { value: -90, unit: "degrees" }
        }
      },
      title: { text: "repo", fontSize: 11, offset: 85 }
    })
    .createYAxis({
      line: {},
      ticksAndLabels: {
        values: [0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20],
        ticks: { length: 5 },
        labels: { fontSize: 10, offset: 7 }
      },
      title: { text: "number", fontSize: 11, offset: 26 }
    })
    .editXAxisLine({ color: "#888" })
    .editXAxisTicksAndLabels({
      ticks: { color: "#888" },
      labels: { fontFamily: "sans-serif" }
    })
    .editXAxisTitle({ fontWeight: 700, fontFamily: "sans-serif", color: "#000" })
    .editYAxisLine({ color: "#888" })
    .editYAxisTicksAndLabels({
      ticks: { color: "#888" },
      labels: { fontFamily: "sans-serif" }
    })
    .editYAxisTitle({ fontWeight: 700, fontFamily: "sans-serif", color: "#000" })
    .createGrid({ horizontal: { color: "#ddd" } })
    .createTitle({
      text: "Issues closed in the last 10 days",
      offset: -3,
      alongOffset: -70.4375,
      titleStyle: { fontSize: 13, fontWeight: 700, fontFamily: "sans-serif", color: "#000" }
    });
}
