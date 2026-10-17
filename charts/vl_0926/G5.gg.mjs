import { chart } from "ggaction";
// DOCS: doc-b11b4627b143730d, doc-071c93dff3a5ea2e, doc-8a4f6f06e0d37d5e
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({ width: 230, height: 265, margin: { left: 24, top: 35, right: 6, bottom: 30 } })
    .createData({ values: data })
    .createComputedData({ id: "rated", as: "valueNum", expression: { op: "toNumber", operand: { field: "value" } } })
    .createLinePlot({
      x: { field: "date", fieldType: "temporal" },
      y: { field: "valueNum", fieldType: "quantitative" },
      guides: false
    })
    .editXScale({ domain: [631152000000, 1656633600000], nice: false })
    .editYScale({ domain: [0, 13] })
    .encodeStroke({ value: "#375441" })
    .encodeStrokeWidth({ value: 1 })
    .createXAxis({
      line: {},
      title: false,
      ticksAndLabels: {
        ticks: { length: 0 },
        values: [631152000000, 788918400000, 946684800000, 1104537600000, 1262304000000, 1420070400000, 1577836800000],
        labels: {
          fontSize: 10,
          fontFamily: "sans-serif",
          offset: 2,
          rotation: { value: 45, unit: "degrees" }
        }
      }
    })
    .createYAxis({
      line: {},
      title: false,
      ticksAndLabels: {
        values: [0, 2, 4, 6, 8, 10, 12],
        labels: { fontSize: 10, fontFamily: "sans-serif", offset: 7 }
      }
    })
    .createTitle({
      text: "Total male pop aged 16 and over ",
      titleStyle: { fontSize: 13 },
      offset: -13
    })
    .editTitle({ gap: 1, alongOffset: -18, titleStyle: { fontWeight: 700, fontFamily: "sans-serif", color: "black" } })
    .editTitle({
      subtitle: "Unemployment rate, %, 1990-2022",
      subtitleStyle: { fontSize: 10, fontStyle: "italic", fontFamily: "sans-serif", color: "black" }
    });
}