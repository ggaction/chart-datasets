// DOCS: doc-dfae58344d5a524e, doc-b11b4627b143730d, doc-76573a465e2b6a33, doc-fa74f8dc4aeb7499, doc-b3b7b00a33d5bddb
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({
      width: 303,
      height: 247,
      margin: { left: 44, top: 10, right: 59, bottom: 37 }
    })
    .createData({ values: data })
    .createCompleteData({
      id: "filled",
      key: "a",
      groupBy: "c"
    })
    .editCompleteData({
      target: "filled",
      fill: { b: 100 }
    })
    .createLinePlot({
      x: { field: "a", fieldType: "quantitative" },
      y: { field: "b", fieldType: "quantitative" },
      guides: false
    })
    .encodeColor({ field: "c", fieldType: "nominal" })
    .editColorScale({
      target: "linePlot",
      domain: [0, 1],
      range: [
        "#4c78a8", "#f58518", "#e45756", "#72b7b2", "#54a24b",
        "#eeca3b", "#b279a2", "#ff9da6", "#9d755d", "#bab0ac"
      ]
    })
    .encodeGroup({ field: "c" })
    .editLineMark({ strokeWidth: 2 })
    .editXScale({ domain: [0, 5], nice: true })
    .editYScale({ domain: [0, 100], zero: true })
    .createGuides({
      axes: {
        x: {
          line: { color: "#888" },
          ticksAndLabels: {
            values: [0, 1, 2, 3, 4, 5],
            ticks: { length: 5, color: "#888" },
            labels: { fontSize: 10, fontFamily: "sans-serif", offset: 7, color: "black", flush: true }
          },
          title: { text: "a", fontSize: 11, fontFamily: "sans-serif", fontWeight: 700, color: "black", offset: 31 }
        },
        y: {
          line: { color: "#888" },
          ticksAndLabels: {
            values: [0, 20, 40, 60, 80, 100],
            ticks: { length: 5, color: "#888" },
            labels: { fontSize: 10, fontFamily: "sans-serif", offset: 7, color: "black" }
          },
          title: { text: "b", fontSize: 11, fontFamily: "sans-serif", fontWeight: 700, color: "black", offset: 35 }
        }
      },
      grid: { horizontal: { color: "#ddd" }, vertical: { color: "#ddd" } },
      legend: {
        title: "c",
        channels: ["color"],
        position: "right",
        symbol: { layers: [{ type: "line", lineWidth: 2 }] },
        labels: { fontSize: 10, fontFamily: "sans-serif", color: "black" },
        titleStyle: { fontSize: 11, fontFamily: "sans-serif", fontWeight: 700, color: "black" }
      }
    });
}
