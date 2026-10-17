// DOCS: doc-b11b4627b143730d
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({
      width: 449,
      height: 259,
      margin: { left: 39, top: 22, right: 10, bottom: 37 }
    })
    .createData({ id: "raw", values: data })
    .createWindowData({
      id: "cum",
      sortBy: [{ field: "interaction_createdAt" }],
      operations: [{ op: "rowNumber", as: "cumulative_count" }]
    })
    .createLinePlot({
      x: {
        field: "interaction_createdAt",
        fieldType: "temporal"
      },
      y: {
        field: "cumulative_count",
        fieldType: "quantitative"
      },
      guides: false
    })
    .editXScale({ domain: [1616012499000, 1685610674000] })
    .editYScale({ domain: [0, 45] })
    .editLineMark({ stroke: "#4c78a8", strokeWidth: 2 })
    .createGrid({
      vertical: { scale: "x", values: [1617235200000, 1625097600000, 1633046400000, 1640995200000, 1648771200000, 1656633600000, 1664582400000, 1672531200000, 1680307200000], color: "#ddd" },
      horizontal: { scale: "y", count: 5, color: "#ddd" }
    })
    .createXAxis({
      line: { color: "#888" },
      ticksAndLabels: {
        values: [
          1617235200000,
          1625097600000,
          1633046400000,
          1640995200000,
          1648771200000,
          1656633600000,
          1664582400000,
          1672531200000,
          1680307200000
        ],
        ticks: { length: 5, color: "#888" },
        labels: {
          fontSize: 10,
          offset: 7,
          flush: true,
          labelMap: [
            { value: 1617235200000, label: "April" },
            { value: 1625097600000, label: "July" },
            { value: 1633046400000, label: "October" },
            { value: 1640995200000, label: "2022" },
            { value: 1648771200000, label: "April" },
            { value: 1656633600000, label: "July" },
            { value: 1664582400000, label: "October" },
            { value: 1672531200000, label: "2023" },
            { value: 1680307200000, label: "April" }
          ]
        }
      },
      title: { text: "Date", fontSize: 11, fontWeight: 700, offset: 28 }
    })
    .createYAxis({
      line: { color: "#888" },
      ticksAndLabels: {
        count: 5,
        ticks: { length: 5, color: "#888" },
        labels: { fontSize: 10, offset: 7 }
      },
      title: { text: "Count", fontSize: 11, fontWeight: 700, offset: 28 }
    })
    .createTitle({
      text: "Cumulative code contributions (pull requests) from external users",
      titleStyle: { fontSize: 13, fontWeight: 700 },
      offset: -13
    })
    .editTitle({ alongOffset: -4 });
}
