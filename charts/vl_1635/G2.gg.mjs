// DOCS: doc-6c2c08869091f6a0, doc-fc11e9fb291905d1
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({
      width: 339,
      height: 247,
      margin: { left: 33, top: 10, right: 6, bottom: 37 }
    })
    .createData({ values: data })
    .createHistogram({
      field: "x",
      binBoundaries: [7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17],
      guides: false
    })
    .createGrid({
      horizontal: { scale: "y", color: "#ddd" },
      vertical: false
    })
    .createXAxis({
      ticksAndLabels: {
        values: [7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17],
        ticks: { length: 5 },
        labels: { fontSize: 10, offset: 7, flush: true, format: ".1f", overlap: "allow" }
      },
      title: { text: "x (binned)", fontSize: 11, fontWeight: 700, offset: 28 }
    })
    .createYAxis({
      ticksAndLabels: {
        values: [0, 2, 4, 6, 8],
        ticks: { length: 5 },
        labels: { fontSize: 10, offset: 7 }
      },
      title: { text: "Count of Records", fontSize: 11, fontWeight: 700, offset: 21.5 }
    });
}