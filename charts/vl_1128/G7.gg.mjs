// DOCS: doc-b11b4627b143730d, doc-071c93dff3a5ea2e, doc-d9e3b1b7add0d2c6, doc-99b0513458edff76
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({
      width: 287,
      height: 252,
      margin: { left: 33, top: 35, right: 54, bottom: 37 }
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
        field: "valueNum",
        fieldType: "quantitative"
      },
      guides: false
    })
    .editLineMark({ stroke: "rgb(0,47,167", strokeWidth: 2 })
    .editXScale({ domain: [694224000000, 1609459200000] })
    .editYScale({ domain: [0, 9] })
    .createXAxis({
      ticksAndLabels: {
        values: [
          788918400000, 946684800000, 1104537600000,
          1262304000000, 1420070400000, 1577836800000
        ],
        ticks: { length: 5 },
        labels: { fontSize: 10, offset: 7 }
      },
      title: { text: "date", fontSize: 11, offset: 30 },
      line: {}
    })
    .createYAxis({
      ticksAndLabels: {
        values: [0, 2, 4, 6, 8],
        ticks: { length: 5 },
        labels: { fontSize: 10, offset: 7 }
      },
      title: { text: "Unemployment rate (%)", fontSize: 11, offset: 22 },
      line: {}
    })
    .editXAxisLine({ color: "#888" })
    .editYAxisLine({ color: "#888" })
    .editXAxisTicks({ color: "#888" })
    .editXAxisLabels({ color: "black", fontFamily: "sans-serif" })
    .editYAxisTicks({ color: "#888" })
    .editYAxisLabels({ color: "black", fontFamily: "sans-serif" })
    .editXAxisTitle({
      color: "black",
      fontFamily: "sans-serif",
      fontWeight: "bold"
    })
    .editYAxisTitle({
      color: "black",
      fontFamily: "sans-serif",
      fontWeight: "bold"
    })
    .createTitle({
      text: "UK Female unemployment rate  (Aged 25-34) ",
      alongOffset: -27.5,
      titleStyle: { fontSize: 13 }
    })
    .editTitle({ offset: -13, gap: 3, titleStyle: { fontWeight: 700, fontFamily: "sans-serif", color: "black" } })
    .editTitle({
      subtitle: "Seasonally adjusted from 1992-2022 , Source: ONS",
      subtitleStyle: { fontSize: 10, fontStyle: "italic", fontFamily: "sans-serif", color: "black" }
    });
}
