// DOCS: doc-6c2c08869091f6a0, doc-fc11e9fb291905d1, doc-333a87e52954985d
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({
      width: 320,
      height: 418,
      margin: { left: 130, top: 22, right: 130, bottom: 96 }
    })
    .createData({ values: data })
    .createBarPlot({
      x: { field: "repo", fieldType: "nominal" },
      y: { field: "time_open", fieldType: "quantitative" },
      guides: false
    })
    .editXScale({
      domain: ["numpy-tutorials", "numpydoc", "numpy"],
      paddingInner: 0.1,
      paddingOuter: 0.05
    })
    .editYScale({ domain: [0, 65], zero: true })
    .encodeBarWidth({ band: 1 })
    .editBarMark({ fill: "#4c78a8" })
    .createGuides({
      legend: false,
      grid: { horizontal: { color: "#ddd" } },
      axes: {
        x: {
          line: { color: "#888" },
          ticksAndLabels: {
            ticks: { length: 5, color: "#888" },
            labels: {
              fontSize: 10,
              offset: 7,
              fontFamily: "sans-serif",
              rotation: { value: -90, unit: "degrees" }
            }
          },
          title: {
            text: "repo",
            fontSize: 11,
            fontWeight: 700,
            fontFamily: "sans-serif",
            offset: 86
          }
        },
        y: {
          line: { color: "#888" },
          ticksAndLabels: {
            ticks: { length: 5, color: "#888" },
            labels: {
              fontSize: 10,
              offset: 7,
              fontFamily: "sans-serif"
            },
            values: [0, 10, 20, 30, 40, 50, 60]
          },
          title: {
            text: "Median Days Open",
            fontSize: 11,
            fontWeight: 700,
            fontFamily: "sans-serif",
            offset: 27,
            rotation: { value: -90, unit: "degrees" }
          }
        }
      }
    })
    .createTitle({
      text: "Time to close for issues closed in the last 10 days",
      titleStyle: { fontSize: 13, fontWeight: 700, fontFamily: "sans-serif" },
      offset: -9,
      alongOffset: -124.140625
    });
}
