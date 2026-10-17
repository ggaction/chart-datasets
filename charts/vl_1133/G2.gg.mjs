// DOCS: doc-b11b4627b143730d, doc-071c93dff3a5ea2e
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({
      width: 311,
      height: 257,
      margin: { left: 39, top: 40, right: 72, bottom: 37 }
    })
    .createData({ values: data })
    .createComputedData({
      id: "numValue",
      as: "numValue",
      expression: { op: "toNumber", operand: { field: "value" } }
    })
    .createLinePlot({
      x: {
        field: "date",
        fieldType: "temporal",
        temporalUnit: "year"
      },
      y: {
        field: "numValue"
      },
      guides: false
    })
    .editXScale({ domain: [31536000000, 1609459200000] })
    .editYScale({ domain: [0, 12] })
    .editLineMark({ stroke: "rgb(0,47,167)", strokeWidth: 2 })
    .createGuides({
      grid: false,
      legend: false,
      axes: {
        x: {
          line: { color: "#888" },
          ticksAndLabels: {
            values: [315532800000, 631152000000, 946684800000, 1262304000000, 1577836800000],
            ticks: { length: 4, color: "#888" },
            labels: { fontSize: 10, fontFamily: "sans-serif", offset: 7 }
          },
          title: { text: "date", fontSize: 11, fontWeight: 700, fontFamily: "sans-serif", offset: 28 }
        },
        y: {
          line: { color: "#888" },
          ticksAndLabels: {
            values: [0, 2, 4, 6, 8, 10, 12],
            ticks: { length: 4, color: "#888" },
            labels: { fontSize: 10, fontFamily: "sans-serif", offset: 7 }
          },
          title: { text: "Unemployment rate (%)", fontSize: 11, fontWeight: 700, fontFamily: "sans-serif", offset: 26 }
        }
      }
    })
    .createTitle({
      text: "Female unemployment rate in the UK (Aged 16+)",
      titleStyle: { fontSize: 13, fontWeight: 700, fontFamily: "sans-serif" },
      alongOffset: -33
    })
    .editTitle({
      offset: -13
    })
    .editTitle({
      gap: 3,
      subtitleStyle: { fontSize: 10, fontStyle: "italic", fontFamily: "sans-serif" }
    })
    .editTitle({
      subtitle: "Seasonally adjusted from 1992-2022 , Source: ONS"
    });
}