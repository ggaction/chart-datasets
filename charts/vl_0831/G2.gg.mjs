// DOCS: doc-b11b4627b143730d, doc-8a4f6f06e0d37d5e
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({
      width: 346,
      height: 242,
      margin: { left: 39, top: 40, right: 7, bottom: 22 }
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
    .editXScale({ domain: [567993600000, 1640995200000], nice: false })
    .editYScale({ domain: [0, 35], zero: true })
    .editLineMark({ stroke: "rgb(0,47,167", strokeWidth: 2 })
    .createGuides({
      axes: {
        x: {
          line: { color: "#888" },
          ticksAndLabels: {
            values: [
              631152000000, 788918400000, 946684800000, 1104537600000,
              1262304000000, 1420070400000, 1577836800000
            ],
            ticks: { color: "#888", length: 4 },
            labels: { fontSize: 10, fontFamily: "sans-serif", offset: 7 }
          },
          title: false
        },
        y: {
          line: { color: "#888" },
          ticksAndLabels: {
            values: [0, 5, 10, 15, 20, 25, 30, 35],
            ticks: { color: "#888", length: 4 },
            labels: { fontSize: 10, fontFamily: "sans-serif", offset: 7 }
          },
          title: {
            text: "Parts per 1000",
            fontSize: 11,
            fontWeight: "bold",
            fontFamily: "sans-serif",
            offset: 28
          }
        }
      },
      grid: false,
      legend: false
    })
    .createTitle({
      text: "Annual CPIH weights: Tobacco",
      titleStyle: {
        fontSize: 13,
        fontWeight: 700,
        fontFamily: "sans-serif",
        color: "black"
      },
      subtitleStyle: {
        fontSize: 10,
        fontStyle: "italic",
        fontFamily: "sans-serif",
        color: "black"
      }
    })
    .editTitle({ gap: 3, offset: -4, alongOffset: -33.12 })
    .editTitle({ subtitle: "Source: ONS" });
}
