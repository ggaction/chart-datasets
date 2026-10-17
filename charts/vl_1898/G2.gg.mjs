import { chart } from "ggaction";
import data from "./data.json";

// DOCS: doc-b30469a9489ccd34, doc-2c912465a1515bd5, doc-fcd78d0ac00f884e
export function buildChart() {
  return chart()
    .createData({ id: "raw", values: data })
    .createComputedData({
      id: "prep",
      as: "Value_n",
      expression: { op: "toNumber", operand: { field: "Value" } }
    })
    .createCanvas({ width: 401, height: 357, margin: { left: 49, top: 40, right: 7, bottom: 17 } })
    .createLinePlot({
      x: { field: "Date", fieldType: "temporal" },
      y: { field: "Value_n" },
      guides: false
    })
    .editXScale({ domain: [859852800000, 1609459200000], nice: false })
    .editYScale({ domain: [0, 120000] })
    .editLineMark({ stroke: "mediumvioletred", strokeWidth: 2, curve: "monotone" })
    .createTitle({
      text: "Expenditure",
      titleStyle: { fontSize: 13, fontWeight: 700 },
      subtitleStyle: { fontSize: 10, fontStyle: "italic" }
    })
    .editTitle({ align: "left", offset: -13, alongOffset: -43 })
    .editTitle({ gap: 1 })
    .editTitle({ subtitle: "\u00A3 million. Source: ONS" })
    .createXAxis({
      line: {},
      ticksAndLabels: {
        values: [883612800000, 1009843200000, 1136073600000, 1262304000000, 1388534400000, 1514764800000],
        ticks: { length: 0 },
        labels: { fontSize: 10, offset: 2, format: "%Y" }
      },
      title: false
    })
    .createYAxis({
      line: {},
      ticksAndLabels: {
        count: 8,
        ticks: {},
        labels: { fontSize: 10, offset: 7, format: ",.0f" }
      },
      title: false
    });
}