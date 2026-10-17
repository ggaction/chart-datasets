// DOCS: doc-8a4f6f06e0d37d5e, doc-9bb354f4e2d46693, doc-b11b4627b143730d
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({
      width: 451,
      height: 259,
      margin: { left: 44, top: 22, right: 7, bottom: 37 }
    })
    .createData({ id: "raw", values: data })
    .createWindowData({
      id: "cum",
      sortBy: [{ field: "interaction_createdAt" }],
      operations: [{ op: "rowNumber", as: "cumulative_count" }]
    })
    .createLinePlot({
      x: { field: "interaction_createdAt", fieldType: "temporal" },
      y: { field: "cumulative_count" },
      guides: false
    })
    .editLineMark({ stroke: "#4c78a8", strokeWidth: 2 })
    .editXScale({ domain: [1592567042000, 1685773069000], nice: false })
    .editYScale({ domain: [0, 160] })
    .createXAxis({
      line: {},
      ticksAndLabels: {
        values: [1593561600000, 1601510400000, 1609459200000, 1617235200000, 1625097600000, 1633046400000, 1640995200000, 1648771200000, 1656633600000, 1664582400000, 1672531200000, 1680307200000],
        ticks: {},
        labels: { fontSize: 10, offset: 7, flush: true, labelMap: [{ "value": 1593561600000, "label": "July" }, { "value": 1601510400000, "label": "October" }, { "value": 1609459200000, "label": "2021" }, { "value": 1617235200000, "label": "April" }, { "value": 1625097600000, "label": "July" }, { "value": 1633046400000, "label": "October" }, { "value": 1640995200000, "label": "2022" }, { "value": 1648771200000, "label": "April" }, { "value": 1656633600000, "label": "July" }, { "value": 1664582400000, "label": "October" }, { "value": 1672531200000, "label": "2023" }, { "value": 1680307200000, "label": "April" }] }
      },
      title: { text: "Comment Date", fontSize: 11, offset: 28 }
    })
    .createYAxis({
      line: {},
      ticksAndLabels: {
        values: [0, 50, 100, 150],
        ticks: {},
        labels: { fontSize: 10, offset: 7 }
      },
      title: { text: "Count", fontSize: 11, offset: 26 }
    })
    .editXAxisLabels({ fontFamily: "sans-serif" })
    .editXAxisTitle({ fontWeight: 700 })
    .editYAxisLabels({ fontFamily: "sans-serif" })
    .editYAxisTitle({ fontWeight: 700 })
    .createGrid({ horizontal: { color: "#ddd" }, vertical: { color: "#ddd", values: [1593561600000, 1601510400000, 1609459200000, 1617235200000, 1625097600000, 1633046400000, 1640995200000, 1648771200000, 1656633600000, 1664582400000, 1672531200000, 1680307200000] } })
    .createTitle({
      text: "Cumulative distinct users commenting on the Splink repo",
      titleStyle: { fontSize: 13 },
      offset: -13
    })
    .editTitle({ align: "center", titleStyle: { fontWeight: 700 } });
}
