import { chart } from "ggaction";
import data from "./data.json";
// DOCS: actual delivered doc-8a4f6f06e0d37d5e, doc-a929fd81abd909f8

export function buildChart() {
  return chart()
    .createCanvas({ width: 295, height: 307, margin: { left: 38, top: 35, right: 7, bottom: 22 } })
    .createData({ values: data })
    .createComputedData({ id: "valueNum", as: "valueNum", expression: { op: "toNumber", operand: { field: "value" } } })
    .createLinePlot({
      x: { field: "date", fieldType: "temporal" },
      y: { field: "valueNum", fieldType: "quantitative" },
      guides: false
    })
    .editXScale({ domain: [702086400000, 1656633600000] })
    .editYScale({ domain: [0, 6500] })
    .editLineMark({ stroke: "turquoise", strokeWidth: 2, opacity: 1 })
    .createXAxis({
      ticksAndLabels: { count: 7, labels: { fontSize: 10, offset: 7, format: "%Y" } },
      title: false
    })
    .createYAxis({
      ticksAndLabels: {
        count: 7,
        labels: {
          fontSize: 10,
          offset: 7,
          labelMap: [
            { value: 0, label: "0" },
            { value: 1000, label: "1,000" },
            { value: 2000, label: "2,000" },
            { value: 3000, label: "3,000" },
            { value: 4000, label: "4,000" },
            { value: 5000, label: "5,000" },
            { value: 6000, label: "6,000" }
          ]
        }
      },
      title: false
    })
    .createGrid({ horizontal: {}, vertical: {} })
    .editGrid({ horizontal: { color: '#ddd', lineWidth: 1 }, vertical: { color: '#ddd', lineWidth: 1 } })
    .createTitle({
      text: "Female part-time workers",
      titleStyle: { fontSize: 13 },
      subtitleStyle: { fontSize: 10, fontStyle: "italic" }
    })
    .editTitle({ titleStyle: { fontWeight: 700 }, alongOffset: -32.0244140625 })
    .editTitle({ subtitle: "Thousands, data: ONS", offset: -13, gap: 3 });
}
