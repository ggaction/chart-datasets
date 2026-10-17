// DOCS: doc-b11b4627b143730d (createLinePlot)
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({ width: 281, height: 312, margin: { left: 24, top: 40, right: 7, bottom: 22 } })
    .createData({ values: data })
    .createComputedData({
      id: "valueNum",
      as: "valueNum",
      expression: { op: "toNumber", operand: { field: "value" } }
    })
    .createComputedData({
      id: "xdate",
      as: "xdate",
      expression: { op: "parseTime", operand: { field: "date" }, format: "auto" }
    })
    .createLinePlot({
      x: { field: "xdate", fieldType: "temporal", temporalUnit: "timestamp" },
      y: { field: "valueNum", fieldType: "quantitative" },
      guides: false
    })
    .editXScale({ domain: [702086400000, 1656633600000], nice: false })
    .editYScale({ domain: [0, 14] })
    .encodeStroke({ value: "turquoise" })
    .encodeStrokeWidth({ value: 2 })
    .encodeOpacity({ value: 1 })
    .createGrid({ horizontal: true, vertical: true })
    .editHorizontalGrid({ color: "#ddd" })
    .editVerticalGrid({ color: "#ddd" })
    .createXAxis({
      ticksAndLabels: {
        ticks: {},
        labels: { fontSize: 10, fontFamily: "sans-serif", offset: 7, format: "%Y" }
      },
      line: {},
      title: false
    })
    .editXAxisLine({ color: "#888" })
    .editXAxisTicksAndLabels({ ticks: { color: "#888" }, labels: { color: "black" } })
    .createYAxis({
      ticksAndLabels: {
        ticks: {},
        labels: { fontSize: 10, fontFamily: "sans-serif", offset: 7 }
      },
      line: {},
      title: false
    })
    .editYAxisLine({ color: "#888" })
    .editYAxisTicksAndLabels({ ticks: { color: "#888" }, labels: { color: "black" } })
    .createTitle({
      text: "Male Unemployment Rate",
      titleStyle: { fontSize: 13, fontWeight: 700, fontFamily: "sans-serif" },
      subtitleStyle: { fontSize: 10, fontStyle: "italic", fontFamily: "sans-serif" }
    })
    .editTitle({ gap: 1, offset: -13, alongOffset: -18.123046875 })
    .editTitle({ subtitle: "Aged 16-64 and economically active, data: ONS", titleStyle: { color: "black" }, subtitleStyle: { color: "black" } });
}