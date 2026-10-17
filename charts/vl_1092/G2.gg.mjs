// DOCS: doc-b11b4627b143730d, doc-76573a465e2b6a33, doc-7f2c254224fc4908
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({ width: 214, height: 242, margin: { left: 24, top: 40, right: 10, bottom: 22 } })
    .createData({ values: data })
    .createComputedData({ id: "valueNum", as: "valueNum", expression: { op: "toNumber", operand: { field: "value" } } })
    .createLinePlot({
      x: { field: "date", fieldType: "temporal", temporalUnit: "year" },
      y: { field: "valueNum" },
      guides: false
    })
    .editXScale({ domain: [694224000000, 1609459200000], nice: false })
    .editYScale({ domain: [0, 40] })
    .editLineMark({ stroke: "seagreen", strokeWidth: 2 })
    .createAxes({
      x: {
        line: { color: "#888" },
        ticksAndLabels: {
          values: [788918400000, 946684800000, 1104537600000, 1262304000000, 1420070400000, 1577836800000],
          ticks: { color: "#888" },
          labels: { fontSize: 10, offset: 7, format: "%Y", flush: true }
        },
        title: false
      },
      y: {
        line: { color: "#888" },
        ticksAndLabels: {
          values: [0, 10, 20, 30, 40],
          ticks: { color: "#888" },
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
      text: "Average actual weekly hours",
      titleStyle: { fontSize: 13, fontWeight: 700 },
      subtitleStyle: { fontSize: 10, fontStyle: "italic" }
    })
    .editTitle({ offset: -13, alongOffset: -18.12, gap: 3 })
    .editTitle({ subtitle: "Full-time workers (Seasonally adjusted)" });
}