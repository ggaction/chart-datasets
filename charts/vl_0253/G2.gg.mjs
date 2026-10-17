import { chart } from "ggaction";
import data from "./data.json";

// DOCS: doc-b11b4627b143730d, doc-8a4f6f06e0d37d5e, doc-a929fd81abd909f8

export function buildChart() {
  return chart()
    .createCanvas({
      width: 281,
      height: 307,
      margin: { left: 24, top: 35, right: 7, bottom: 22 }
    })
    .createData({ values: data })
    .createComputedData({
      id: "valueNum",
      as: "valueNum",
      expression: { op: "toNumber", operand: { field: "value" } }
    })
    .createLinePlot({
      x: { field: "date", fieldType: "temporal" },
      y: { field: "valueNum", fieldType: "quantitative" },
      guides: false
    })
    .editXScale({ domain: [34214400000, 1656633600000], nice: false })
    .editYScale({ domain: [0, 75] })
    .editLineMark({ stroke: "turquoise", strokeWidth: 2, opacity: 1 })
    .createAxes({
      x: {
        ticksAndLabels: {
          values: [
            315532800000, 631152000000, 946684800000, 1262304000000, 1577836800000
          ],
          ticks: { length: 5 },
          labels: { fontSize: 10, offset: 7 }
        },
        title: false
      },
      y: {
        ticksAndLabels: {
          values: [0, 10, 20, 30, 40, 50, 60, 70],
          ticks: { length: 5 },
          labels: { fontSize: 10, offset: 7 }
        },
        title: false
      }
    })
    .createGrid({
      horizontal: { color: "#ddd" },
      vertical: { color: "#ddd" }
    })
    .createTitle({
      text: "Female Employment Rate (%)",
      offset: -13,
      titleStyle: { fontSize: 13, fontWeight: 700, color: "black" }
    })
    .editTitle({
      subtitle: "Aged 16-64, seasonally adjusted, data: ONS",
      subtitleStyle: { fontSize: 10, fontStyle: "italic", color: "black" },
      gap: 1
    })
    .editTitle({ alongOffset: -18.12 });
}
