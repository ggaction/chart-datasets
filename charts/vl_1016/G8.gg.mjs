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
      line: {},
      ticksAndLabels: {
        values: [788918400000, 946684800000, 1104537600000, 1262304000000, 1420070400000, 1577836800000],
        ticks: {},
        labels: { fontSize: 10, offset: 7 }
      },
      title: false
    })
    .editXAxisLine({ color: "#888" })
    .editXAxisTicks({ color: "#888" })
    .editXAxisLabels({ fontFamily: "sans-serif" })
    .createYAxis({
      line: {},
      ticksAndLabels: {
        values: [0, 50, 100, 150],
        ticks: {},
        labels: { fontSize: 10, offset: 7 }
      },
      title: false
    })
    .editYAxisLine({ color: "#888" })
    .editYAxisTicks({ color: "#888" })
    .editYAxisLabels({ fontFamily: "sans-serif" })
    .createHorizontalGrid()
    .createVerticalGrid()
    .editHorizontalGrid({ color: "#ddd" })
    .editVerticalGrid({ color: "#ddd" })
    .createTitle({ text: "Unemploymed over 24 Months (50+)", titleStyle: { fontSize: 13 }, alongOffset: -23.7 })
    .editTitle({ offset: -12 })
    .editTitle({ subtitle: "United Kingdom (thousands), seasonally adjusted", subtitleStyle: { fontSize: 10, fontStyle: "italic" }, gap: 1 })
    .editTitle({ titleStyle: { fontWeight: 700 } });
}