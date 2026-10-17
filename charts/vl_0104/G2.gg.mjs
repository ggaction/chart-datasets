// DOCS: doc-b11b4627b143730d, doc-8a4f6f06e0d37d5e
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({
      width: 451,
      height: 264,
      margin: { left: 44, top: 27, right: 7, bottom: 37 }
    })
    .createData({ id: "stars", values: data })
    .createWindowData({
      id: "starsCumulative",
      sortBy: [{ field: "starredAt" }],
      operations: [{ op: "rowNumber", as: "cumulative_count" }]
    })
    .createLinePlot({
      guides: false,
      x: {
        field: "starredAt",
        fieldType: "temporal"
      },
      y: {
        field: "cumulative_count",
        fieldType: "quantitative"
      }
    })
    .editXScale({ domain: [1574596429000, 1685788962000], nice: false })
    .editYScale({ domain: [0, 700] })
    .editLineMark({ stroke: "#4c78a8", strokeWidth: 2 })
    .createXAxis({
      line: { color: "#888" },
      ticksAndLabels: {
        ticks: { color: "#888" },
        labels: {
          fontSize: 10,
          offset: 7,
          labelMap: [
            { value: 1577836800000, label: "2020" },
            { value: 1593561600000, label: "July" },
            { value: 1609459200000, label: "2021" },
            { value: 1625097600000, label: "July" },
            { value: 1640995200000, label: "2022" },
            { value: 1656633600000, label: "July" },
            { value: 1672531200000, label: "2023" }
          ]
        }
      },
      title: { text: "Starred Date", fontSize: 11, fontWeight: 700, offset: 30 }
    })
    .createYAxis({
      line: { color: "#888" },
      ticksAndLabels: {
        ticks: { color: "#888" },
        values: [0, 100, 200, 300, 400, 500, 600, 700],
        labels: {
          fontSize: 10,
          offset: 7
        }
      },
      title: {
        text: "Cumulative Star Count",
        fontSize: 11,
        fontWeight: 700,
        offset: 32.6845703125,
        rotation: { value: -90, unit: "degrees" }
      }
    })
    .createGrid({
      horizontal: { color: "#ddd", count: 5 },
      vertical: { color: "#ddd", count: 10 }
    })
    .createTitle({
      text: "Cumulative Count of GitHub Stars",
      titleStyle: { fontSize: 13, fontWeight: 700 },
      offset: -3
    })
    .editTitle({ align: "center" });
}