// DOCS: doc-b11b4627b143730d, doc-4aba5fb850bbed9c, doc-16c583350443cc93
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({ width: 234, height: 238, margin: { left: 29, top: 36, right: 25, bottom: 22 } })
    .createData({ values: data })
    .createComputedData({ id: "unempNum", as: "valueNum", expression: { op: "toNumber", operand: { field: "value" } } })
    .createLinePlot({
      x: { field: "date", fieldType: "temporal", temporalUnit: "year" },
      y: { field: "valueNum" },
      guides: false
    })
    .editXScale({ domain: [694224000000, 1609459200000], nice: false })
    .editYScale({ domain: [0, 180] })
    .encodeStroke({ value: "#3662f1" })
    .encodeStrokeWidth({ value: 2 })
    .encodeOpacity({ value: 1 })
    .createXAxis({
      line: { color: "#888" },
      ticksAndLabels: {
        values: [788918400000, 946684800000, 1104537600000, 1262304000000, 1420070400000, 1577836800000],
        ticks: { color: "#888" },
        labels: { fontSize: 10, fontFamily: "sans-serif", offset: 7 }
      },
      title: false
    })
    .createYAxis({
      line: { color: "#888" },
      ticksAndLabels: {
        values: [0, 50, 100, 150],
        ticks: { color: "#888" },
        labels: { fontSize: 10, fontFamily: "sans-serif", offset: 7 }
      },
      title: false
    })
    .createGrid({ horizontal: { color: "#ddd" }, vertical: { color: "#ddd" } })
    .createTitle({ text: "Unemploymed over 24 Months (50+)", titleStyle: { fontSize: 13, fontWeight: 700 }, alongOffset: -23.7 })
    .editTitle({ offset: -12 })
    .editTitle({ subtitle: "United Kingdom (thousands), seasonally adjusted", subtitleStyle: { fontSize: 10, fontStyle: "italic" }, gap: 1 });
}