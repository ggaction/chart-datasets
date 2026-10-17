import { chart } from "ggaction";
import data from "./data.json";
// DOCS: doc-b11b4627b143730d, doc-8a4f6f06e0d37d5e, doc-9bb354f4e2d46693, doc-76573a465e2b6a33, doc-c2eafbbd16fe3c71

export function buildChart() {
  return chart()
    .createCanvas({
      width: 283,
      height: 252,
      margin: { top: 35, right: 50, bottom: 37, left: 33 }
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
        temporalUnit: "year"
      },
      y: {
        field: "valueNum"
      },
      guides: false
    })
    .editXScale({ domain: [725846400000, 1546300800000], nice: false })
    .editYScale({ domain: [0, 5.5] })
    .encodeStroke({ value: "rgb(0,47,167" })
    .encodeStrokeWidth({ value: 2 })
    .createTitle({
      text: "Standardised Japan ILO unemployment rate",
      titleStyle: { fontSize: 13, fontFamily: "sans-serif" },
      alongOffset: -27.6
    })
    .editTitle({
      subtitleStyle: { fontSize: 10, fontStyle: "italic", fontFamily: "sans-serif", color: "black" },
      gap: 3,
      offset: -12
    })
    .editTitle({
      subtitle: "Seasonally adjusted from 1992-2022 , Source: ONS",
      titleStyle: { fontWeight: 700, color: "black" }
    })
    .createXAxis({
      ticksAndLabels: {
        values: [788918400000, 946684800000, 1104537600000, 1262304000000, 1420070400000],
        ticks: { length: 5 },
        labels: { fontSize: 10, fontFamily: "sans-serif", offset: 7, flush: true }
      },
      title: { text: "date", fontSize: 11, offset: 28 }
    })
    .editXAxis({ title: { fontWeight: 700 } })
    .createYAxis({
      ticksAndLabels: {
        count: 6,
        ticks: { length: 5 },
        labels: { fontSize: 10, fontFamily: "sans-serif", offset: 7 }
      },
      title: {
        text: "Unemployment rate (%)",
        fontSize: 11,
        offset: 25.5,
        rotation: { value: -90, unit: "degrees" }
      }
    })
    .editYAxis({ title: { fontWeight: 700 } });
}