// DOCS: doc-b11b4627b143730d, doc-071c93dff3a5ea2e, doc-8a4f6f06e0d37d5e, doc-f30bfed200b50a98
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({ width: 230, height: 272, margin: { left: 24, top: 40, right: 6, bottom: 32 } })
    .createData({ id: "lms", values: data })
    .createComputedData({ id: "valueNum", as: "valueNum", expression: { op: "toNumber", operand: { field: "value" } } })
    .createTitle({
      text: "Total population aged 50-64",
      alongOffset: -18,
      titleStyle: { fontSize: 13, fontWeight: 700, fontFamily: "sans-serif", color: "black" }
    })
    .editTitle({ offset: -13 })
    .editTitle({ subtitle: "Unemployment rate (%), 1992-2022", subtitleStyle: { fontSize: 10, fontStyle: "italic", fontFamily: "sans-serif", color: "black" }, gap: 1 })
    .createLinePlot({
      x: { field: "date", fieldType: "temporal" },
      y: { field: "valueNum" },
      guides: false
    })
    .editXScale({ domain: [702086400000, 1656633600000] })
    .editYScale({ domain: [0, 10] })
    .editLineMark({ stroke: "#BFC4AC", strokeWidth: 1 })
    .createXAxis({
      line: {},
      ticksAndLabels: {
        count: 6,
        ticks: { length: 0 },
        labels: { fontSize: 10, offset: 7, format: "%Y", rotation: { value: 45, unit: "degrees" } }
      },
      title: false
    })
    .editXAxis({ line: { color: "#888" }, ticksAndLabels: { labels: { fontFamily: "sans-serif", color: "black" } } })
    .createYAxis({
      line: {},
      ticksAndLabels: {
        count: 6,
        ticks: { length: 5 },
        labels: { fontSize: 10, offset: 6 }
      },
      title: false
    })
    .editYAxis({ line: { color: "#888" }, ticksAndLabels: { labels: { fontFamily: "sans-serif", color: "black" } } });
}