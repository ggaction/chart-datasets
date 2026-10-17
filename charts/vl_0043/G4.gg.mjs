// DOCS: doc-b5d175b70fd88857, doc-e8ae96262e1b8c19
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({
      width: 239,
      height: 247,
      margin: { left: 33, top: 10, right: 6, bottom: 37 }
    })
    .createData({ id: "src", values: data })
    .createComputedData({
      id: "logdata",
      as: "log_x",
      expression: {
        op: "divide",
        left: { op: "log", operand: { field: "x" } },
        right: { op: "log", operand: { constant: 10 } }
      }
    })
    .createHistogram({
      field: "log_x",
      binStep: 0.5,
      guides: false
    })
    .editXScale({ domain: [-3, 4], nice: false })
    .editYScale({ domain: [0, 4], nice: false })
    .editBarMark({ fill: "#4c78a8", stroke: false })
    .createGrid({
      horizontal: { scale: "y" },
      vertical: { scale: "x" }
    })
    .editGrid({
      horizontal: { color: "#ddd" },
      vertical: { color: "#ddd" }
    })
    .createXAxis({
      line: {},
      ticksAndLabels: {
        values: [-3, -2, -1, 0, 1, 2, 3, 4],
        ticks: { length: 5 },
        labels: {
          fontSize: 10,
          offset: 7,
          flush: true,
          labelMap: [
            { value: -3, label: "0.001" },
            { value: -2, label: "" },
            { value: -1, label: "0.1" },
            { value: 0, label: "1" },
            { value: 1, label: "10" },
            { value: 2, label: "100" },
            { value: 3, label: "1,000" },
            { value: 4, label: "" }
          ]
        }
      },
      title: { text: "x1, x2", fontSize: 11, offset: 28 }
    })
    .editXAxis({
      line: { color: "#888" },
      ticksAndLabels: { labels: { fontFamily: "sans-serif" } },
      title: { fontWeight: 700 }
    })
    .createYAxis({
      line: {},
      ticksAndLabels: {
        values: [0, 1, 2, 3, 4],
        ticks: { length: 5 },
        labels: { fontSize: 10, offset: 7 }
      },
      title: { text: "Count of Records", fontSize: 11, offset: 22 }
    })
    .editYAxis({
      line: { color: "#888" },
      ticksAndLabels: { labels: { fontFamily: "sans-serif" } },
      title: { fontWeight: 700 }
    });
}