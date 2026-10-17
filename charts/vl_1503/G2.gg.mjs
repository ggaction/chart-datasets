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
    .createGuides({
      axes: {
        x: {
          line: { color: "#888" },
          ticksAndLabels: {
            ticks: { color: "#888", length: 5 },
            labels: {
              fontSize: 10,
              fontFamily: "sans-serif",
              offset: 7,
              rotation: { value: -90, unit: "degrees" }
            }
          },
          title: { text: "repo", fontSize: 11, fontWeight: 700, fontFamily: "sans-serif", color: "#000", offset: 85 }
        },
        y: {
          line: { color: "#888" },
          ticksAndLabels: {
            values: [0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20],
            ticks: { color: "#888", length: 5 },
            labels: { fontSize: 10, fontFamily: "sans-serif", offset: 7 }
          },
          title: { text: "number", fontSize: 11, fontWeight: 700, fontFamily: "sans-serif", color: "#000", offset: 26 }
        }
      },
      grid: { horizontal: { color: "#ddd" } }
    })
    .createTitle({
      text: "Issues closed in the last 10 days",
      offset: -3,
      alongOffset: -70.4375,
      titleStyle: { fontSize: 13, fontWeight: 700, fontFamily: "sans-serif", color: "#000" }
    });
}
