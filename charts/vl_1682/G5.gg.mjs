// DOCS: doc-fc11e9fb291905d1, doc-6c2c08869091f6a0, doc-bedf05337affd6f4
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({
      width: 241,
      height: 142,
      margin: { left: 35, top: 5, right: 6, bottom: 37 }
    })
    .createData({ id: "raw", values: data })
    .createWindowData({
      id: "ranked",
      sortBy: [{ field: "score", order: "descending" }],
      operations: [{ op: "rank", as: "rank" }]
    })
    .filterData({
      id: "top5",
      field: "rank",
      predicate: { op: "lte", value: 5 }
    })
    .createBarPlot({
      x: { field: "score", fieldType: "quantitative" },
      y: { field: "student", fieldType: "nominal" },
      guides: false
    })
    .editXScale({ domain: [0, 100] })
    .editYScale({ domain: ["A", "O", "C", "L", "T"], paddingInner: 0.1, paddingOuter: 0.05 })
    .encodeBarWidth({ band: 1 })
    .editBarMark({ fill: "#4c78a8" })
    .createXAxis({
      line: {},
      ticksAndLabels: {
        values: [0, 20, 40, 60, 80, 100],
        ticks: { length: 5 },
        labels: { fontSize: 10, offset: 7, flush: true }
      },
      title: { text: "score", fontSize: 11, offset: 30 }
    })
    .editXAxis({
      ticksAndLabels: { labels: { fontFamily: "sans-serif" } },
      title: { fontFamily: "sans-serif", fontWeight: 700 }
    })
    .createYAxis({
      line: {},
      ticksAndLabels: {
        values: ["A", "O", "C", "L", "T"],
        ticks: { length: 5 },
        labels: { fontSize: 10, offset: 7 }
      },
      title: {
        text: "student",
        fontSize: 11,
        offset: 22,
        rotation: { value: -90, unit: "degrees" }
      }
    })
    .editYAxis({
      ticksAndLabels: { labels: { fontFamily: "sans-serif" } },
      title: { fontFamily: "sans-serif", fontWeight: 700 }
    })
    .createGrid({ horizontal: false, vertical: {} })
    .editVerticalGrid({ color: "#ddd" });
}
