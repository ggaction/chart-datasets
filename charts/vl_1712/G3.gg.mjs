// DOCS: doc-e790db38fc2a278a, doc-bc26da5598d35bae
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({ width: 606, height: 247, margin: { top: 10, right: 8, bottom: 37, left: 58 } })
    .createData({ values: data })
    .createComputedData({
      id: "monthDate",
      as: "monthDate",
      expression: { op: "parseTime", operand: { field: "month" }, format: "auto" }
    })
    .createComputedData({
      id: "crimesNum",
      as: "reportedCrimesNum",
      expression: { op: "toNumber", operand: { field: "reportedCrimes" } }
    })
    .createScatterPlot({
      x: {
        field: "monthDate",
        fieldType: "temporal",
      },
      y: {
        field: "reportedCrimesNum",
        fieldType: "quantitative",
      },
      guides: false
    })
    .editXScale({ type: "time", domain: [1293840000000, 1480550400000], nice: false })
    .editYScale({ domain: [0, 14000] })
    .encodePointRadius({ value: 2.7386127875258306 })
    .editPointMark({ fill: "#4c78a8", opacity: 1, stroke: false })
    .createXAxis({
      line: { color: "#888" },
      ticksAndLabels: {
        values: [
          1293840000000, 1309478400000, 1325376000000, 1341100800000,
          1356998400000, 1372636800000, 1388534400000, 1404172800000,
          1420070400000, 1435708800000, 1451606400000, 1467331200000
        ],
        ticks: { length: 5, color: "#888" },
        labels: {
          fontSize: 10,
          offset: 7,
          fontFamily: "sans-serif",
          labelMap: [
            { value: 1293840000000, label: "2011" },
            { value: 1309478400000, label: "July" },
            { value: 1325376000000, label: "2012" },
            { value: 1341100800000, label: "July" },
            { value: 1356998400000, label: "2013" },
            { value: 1372636800000, label: "July" },
            { value: 1388534400000, label: "2014" },
            { value: 1404172800000, label: "July" },
            { value: 1420070400000, label: "2015" },
            { value: 1435708800000, label: "July" },
            { value: 1451606400000, label: "2016" },
            { value: 1467331200000, label: "July" }
          ]
        }
      },
      title: { text: "month", fontSize: 11, fontWeight: 700, offset: 28 }
    })
    .createYAxis({
      line: { color: "#888" },
      ticksAndLabels: {
        count: 8,
        ticks: { length: 5, color: "#888" },
        labels: { fontSize: 10, offset: 7, format: ",.0f", fontFamily: "sans-serif" }
      },
      title: { text: "Reported crimes", fontSize: 11, fontWeight: 700, offset: 47, rotation: { value: -90, unit: "degrees" } }
    })
    .createGrid({
      horizontal: { color: "#ddd", lineWidth: 1 },
      vertical: { color: "#ddd", lineWidth: 1 }
    });
}