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
    .createGuides({
      grid: false,
      axes: {
        x: {
          ticksAndLabels: {
            values: [
              788918400000, 946684800000, 1104537600000,
              1262304000000, 1420070400000, 1577836800000
            ],
            ticks: { length: 5, color: "#888" },
            labels: { fontSize: 10, offset: 7, fontFamily: "sans-serif", color: "black" }
          },
          title: { text: "date", fontSize: 11, fontWeight: "bold", offset: 30, color: "black" },
          line: { color: "#888" }
        },
        y: {
          ticksAndLabels: {
            values: [0, 2, 4, 6, 8],
            ticks: { length: 5, color: "#888" },
            labels: { fontSize: 10, offset: 7, fontFamily: "sans-serif", color: "black" }
          },
          title: { text: "Unemployment rate (%)", fontSize: 11, fontWeight: "bold", offset: 22, color: "black" },
          line: { color: "#888" }
        }
      }
    })
    .createTitle({
      text: "UK Female unemployment rate  (Aged 25-34) ",
      alongOffset: -27.5,
      titleStyle: { fontSize: 13, fontWeight: 700, fontFamily: "sans-serif", color: "black" }
    })
    .editTitle({ offset: -13, gap: 3 })
    .editTitle({
      subtitle: "Seasonally adjusted from 1992-2022 , Source: ONS",
      subtitleStyle: { fontSize: 10, fontStyle: "italic", fontFamily: "sans-serif", color: "black" }
    });
}
