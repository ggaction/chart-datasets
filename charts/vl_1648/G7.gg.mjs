// DOCS: doc-dfae58344d5a524e (createCanvas), doc-2a31551f1566fc6b (Canvas bounds), doc-769ade76f0b7e70a (createGuides axes/legend)
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({
      width: 303,
      height: 247,
      margin: { top: 10, right: 59, bottom: 37, left: 44 }
    })
    .createData({ values: data })
    .createCompleteData({
      id: "keyGrid",
      key: "a",
      groupBy: "c"
    })
    .editCompleteData({
      target: "keyGrid",
      sequence: { start: 0, end: 5, step: 1 }
    })
    .createImputedData({
      id: "bFilled",
      fields: "b",
      groupBy: "c"
    })
    .editImputedData({
      target: "bFilled",
      method: "constant",
      value: 100
    })
    .createLinePlot({
      x: { field: "a" },
      y: { field: "b" },
      guides: false
    })
    .encodeColor({
      field: "c",
      fieldType: "nominal"
    })
    .editXScale({ domain: [0, 5], nice: true })
    .editYScale({ domain: [0, 100] })
    .editColorScale({ target: "linePlot", domain: [0, 1], range: ["#4c78a8", "#f58518", "#e45756", "#72b7b2", "#54a24b", "#eeca3b", "#b279a2", "#ff9da6", "#9d755d", "#bab0ac"] })
    .editLineMark({ strokeWidth: 2 })
    .createXAxis({
      line: {},
      ticksAndLabels: {
        ticks: {},
        labels: { fontSize: 10, offset: 7 },
        values: [0, 1, 2, 3, 4, 5]
      },
      title: { text: "a", fontSize: 11, offset: 28 }
    })
    .editXAxis({ title: { fontWeight: 700 } })
    .createYAxis({
      line: {},
      ticksAndLabels: {
        ticks: {},
        labels: { fontSize: 10, offset: 7 },
        values: [0, 20, 40, 60, 80, 100]
      },
      title: { text: "b", fontSize: 11 }
    })
    .editYAxis({ title: { fontWeight: 700 } })
    .createHorizontalGrid({ color: "#ddd", lineWidth: 1 })
    .createVerticalGrid({ color: "#ddd", lineWidth: 1 })
    .createLegend({ channels: ["color"], labels: { fontSize: 10 }, titleStyle: { fontSize: 11, fontWeight: 700 } })
    .editLegendSymbols({ symbol: { length: 16 } })
  .editYAxis({title:{offset:32.1064453125}});
}