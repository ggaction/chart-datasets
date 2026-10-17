import { chart } from "ggaction";
import data from "./data.json";
// DOCS: doc-b11b4627b143730d, doc-071c93dff3a5ea2e, doc-074cfcd2d7c62d4a

export function buildChart() {
  return chart()
    .createCanvas({ width: 217, height: 242, margin: { left: 24, top: 40, right: 13, bottom: 22 } })
    .createData({ values: data })
    .createComputedData({ id: "lmsNum", as: "valueNum", expression: { op: "toNumber", operand: { field: "value" } } })
    .createLinePlot({
      x: { field: "date", fieldType: "temporal", temporalUnit: "year" },
      y: { field: "valueNum" },
      guides: false
    })
    .editXScale({ domain: [31536000000, 1609459200000], nice: false })
    .editYScale({ domain: [0, 12] })
    .encodeStroke({ value: "seagreen" })
    .encodeStrokeWidth({ value: 2 })
    .encodeOpacity({ value: 1 })
    .createXAxis({
      ticksAndLabels: {
        values: [315532800000, 631152000000, 946684800000, 1262304000000, 1577836800000],
        ticks: {},
        labels: { fontFamily: "sans-serif", fontSize: 10, offset: 7 }
      },
      title: false
    })
    .editXAxisLine({ color: "#888" })
    .editXAxisTicksAndLabels({ ticks: {}, labels: { color: "black" } })
    .createYAxis({
      ticksAndLabels: {
        values: [0, 2, 4, 6, 8, 10, 12],
        ticks: {},
        labels: { fontFamily: "sans-serif", fontSize: 10, offset: 7 }
      },
      title: false
    })
    .editYAxisLine({ color: "#888" })
    .editYAxisTicksAndLabels({ ticks: {}, labels: { color: "black" } })

    .createHorizontalGrid({ color: "#ddd", values: [0, 2, 4, 6, 8, 10, 12] })
    .createVerticalGrid({ color: "#ddd", values: [315532800000, 631152000000, 946684800000, 1262304000000, 1577836800000] })
    .createTitle({
      text: "Unemployment rate %",
      titleStyle: { fontFamily: "sans-serif", fontSize: 13 },
      subtitleStyle: { fontFamily: "sans-serif", fontSize: 10, fontStyle: "italic" }
    })
    .editTitle({ offset: -13, alongOffset: -18, titleStyle: { fontWeight: 700, color: "black" } })
    .editTitle({ subtitle: "(aged 16 and over, seasonally adjusted)", gap: 3, subtitleStyle: { color: "black" } });
}