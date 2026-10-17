// DOCS: doc-6c2c08869091f6a0, doc-fc11e9fb291905d1, doc-dfae58344d5a524e, doc-333a87e52954985d, doc-e7f2fa9f88cd79b5
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({
      width: 202,
      height: 423,
      margin: { left: 81, top: 27, right: 81, bottom: 96 }
    })
    .createData({ values: data })
    .createTitle({
      text: "Merged PRs in the last 10 days",
      titleStyle: { fontSize: 13 },
      offset: -11,
      alongOffset: -75.3671875
    })
    .editTitle({ titleStyle: { fontWeight: 700 } })
    .createBarPlot({
      x: { field: "repo", fieldType: "nominal" },
      y: { field: "author", fieldType: "quantitative" },
      guides: false
    })
    .editXScale({ domain: ["numpy", "numpy-tutorials"], paddingInner: 0.1, paddingOuter: 0.05 })
    .editYScale({ domain: [0, 40], zero: true })
    .encodeColor({ field: "org", fieldType: "nominal" })
    .editColorScale({
      domain: ["numpy"],
      range: ["#4c78a8", "#f58518", "#e45756", "#72b7b2", "#54a24b", "#eeca3b", "#b279a2", "#ff9da6", "#9d755d", "#bab0ac"]
    })
    .encodeBarWidth({ band: 1 })
    .createXAxis({
      line: {},
      ticksAndLabels: {
        ticks: { length: 5 },
        labels: { fontSize: 10, offset: 7, rotation: { value: -90, unit: "degrees" } }
      },
      title: { text: "repo", fontSize: 11, fontWeight: 700, offset: 89 }
    })
    .createYAxis({
      line: {},
      ticksAndLabels: {
        count: 8,
        ticks: { length: 5 },
        labels: { fontSize: 10, offset: 7 }
      },
      title: { text: "author", fontSize: 11, fontWeight: 700, offset: 27 }
    })
    .createGrid({ horizontal: { color: "#ddd" }, vertical: false })
    .createLegend({
      title: "org",
      titleStyle: { fontSize: 11, fontWeight: 700 },
      labels: { fontSize: 10 }
    });
}