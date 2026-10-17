// DOCS: doc-b11b4627b143730d, doc-76573a465e2b6a33, doc-8a4f6f06e0d37d5e, doc-c2eafbbd16fe3c71
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({
      width: 224,
      height: 267,
      margin: { left: 18, top: 35, right: 6, bottom: 32 }
    })
    .createTitle({
      text: "Total female pop aged 16 and over ",
      titleStyle: { fontSize: 13, fontFamily: "sans-serif" },
      alongOffset: -12.5615234375
    })
    .editTitle({ offset: -13, gap: 1, titleStyle: { color: "black", fontWeight: 700 } })
    .editTitle({
      subtitle: "Unemployment rate, %, 1992-2022",
      subtitleStyle: { fontSize: 10, fontStyle: "italic", fontFamily: "sans-serif", color: "black" }
    })
    .createData({ values: data })
    .createComputedData({
      id: "valueNum",
      as: "valueNum",
      expression: { op: "toNumber", operand: { field: "value" } }
    })
    .createLinePlot({
      x: {
        field: "date",
        fieldType: "temporal",
        temporalUnit: "auto"
      },
      y: {
        field: "valueNum",
        fieldType: "quantitative"
      },
      guides: false
    })
    .editXScale({ domain: [631152000000, 1656633600000] })
    .editYScale({ domain: [0, 9] })
    .editLineMark({ stroke: "#344E41", strokeWidth: 1 })
    .createXAxis({
      line: { color: "#888" },
      ticksAndLabels: {
        values: [
          631152000000, 788918400000, 946684800000, 1104537600000,
          1262304000000, 1420070400000, 1577836800000
        ],
        ticks: { length: 0 },
        labels: {
          fontSize: 10,
          fontFamily: "sans-serif",
          offset: 7,
          color: "black",
          rotation: { value: 45, unit: "degrees" }
        }
      },
      title: false
    })
    .createYAxis({
      line: { color: "#888" },
      ticksAndLabels: {
        values: [0, 2, 4, 6, 8],
        ticks: {},
        labels: {
          fontSize: 10,
          fontFamily: "sans-serif",
          offset: 7,
          color: "black"
        }
      },
      title: false
    });
}
