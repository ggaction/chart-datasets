import { chart } from "ggaction";
import data from "./data.json";

// DOCS: doc-6c2c08869091f6a0, doc-fc11e9fb291905d1, doc-333a87e52954985d, doc-7a5eff3c73a7e7f9

export function buildChart() {
  return chart()
    .createCanvas({
      width: 241,
      height: 142,
      margin: { top: 5, right: 6, bottom: 37, left: 35 }
    })
    .createData({ id: "scores", values: data })
    .createWindowData({
      id: "ranked",
      sortBy: [{ field: "score", order: "descending" }],
      operations: [{ op: "rank", as: "rank" }]
    })
    .filterData({ id: "top5", field: "rank", range: { min: 1, max: 5 } })
    .createBarPlot({
      x: { field: "score", fieldType: "quantitative", scale: { domain: [0, 100] } },
      y: {
        field: "student",
        fieldType: "nominal",
        scale: { type: "band", domain: ["A", "O", "C", "L", "T"], paddingInner: 0.1, paddingOuter: 0.05 }
      },
      guides: false
    })
    .encodeBarWidth({ band: 1 })
    .createGrid({ horizontal: false, vertical: { color: "#ddd" } })
    .createXAxis({
      ticksAndLabels: {
        values: [0, 20, 40, 60, 80, 100],
        labels: { fontSize: 10, offset: 7, flush: true }
      },
      title: { text: "score", fontSize: 11, fontWeight: 700, offset: 28 }
    })
    .createYAxis({
      ticksAndLabels: {
        values: ["A", "O", "C", "L", "T"],
        labels: { fontSize: 10, offset: 7 }
      },
      title: { text: "student", fontSize: 11, fontWeight: 700, offset: 28 }
    });
}