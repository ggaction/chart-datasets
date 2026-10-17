// DOCS: doc-b11b4627b143730d (createLinePlot), doc-dfae58344d5a524e (createCanvas)
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({ width: 232, height: 237, margin: { left: 38, top: 35, right: 14, bottom: 22 } })
    .createData({ id: "raw", values: data })
    .createComputedData({ id: "valueNum", as: "valueNum", expression: { op: "toNumber", operand: { field: "value" } } })
    .createLinePlot({
      x: { field: "date", fieldType: "temporal" },
      y: { field: "valueNum" },
      guides: false
    })
    .editXScale({ domain: [694224000000, 1609459200000] })
    .editYScale({ domain: [0, 1300] })
    .encodeStroke({ value: "#3662f1" })
    .encodeStrokeWidth({ value: 2 })
    .createXAxis({
      line: {},
      ticksAndLabels: {
        values: [788918400000, 946684800000, 1104537600000, 1262304000000, 1420070400000, 1577836800000],
        ticks: {},
        labels: { fontSize: 10, fontFamily: "sans-serif", offset: 7, format: "%Y", flush: true }
      },
      title: false
    })
    .createYAxis({
      line: {},
      ticksAndLabels: {
        values: [0, 200, 400, 600, 800, 1000, 1200],
        ticks: {},
        labels: { fontSize: 10, fontFamily: "sans-serif", offset: 7, format: "," }
      },
      title: false
    })
    .createGrid({ horizontal: { count: 5, color: "#ddd", lineWidth: 1 }, vertical: { count: 5, color: "#ddd", lineWidth: 1 } })
    .createTitle({ text: "Unemployed up to 6 Months (25-49)", titleStyle: { fontSize: 13, fontWeight: 700, fontFamily: "sans-serif" }, alongOffset: -32 })
    .editTitle({ offset: -13 })
    .editTitle({ subtitle: "United Kingdom (thousands), seasonally adjusted", subtitleStyle: { fontSize: 10, fontStyle: "italic", fontFamily: "sans-serif" }, gap: 1 });
}
