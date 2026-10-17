// DOCS: doc-b11b4627b143730d, doc-8a4f6f06e0d37d5e, doc-76573a465e2b6a33
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({
      width: 246,
      height: 277,
      margin: { left: 39, top: 27, right: 7, bottom: 50 }
    })
    .createData({ id: "lms", values: data })
    .createComputedData({
      id: "lmsRate",
      as: "rate",
      expression: { op: "toNumber", operand: { field: "value" } }
    })
    .createLinePlot({
      x: {
        field: "date",
        fieldType: "temporal",
        temporalUnit: "year"
      },
      y: {
        field: "rate",
        fieldType: "quantitative"
      },
      guides: false
    })
    .editXScale({ domain: [31536000000, 1609459200000] })
    .editYScale({ domain: [0, 12] })
    .editLineMark({ stroke: "#4c78a8", strokeWidth: 2 })
    .createTitle({
      text: "Unemployment Rate 16 and over",
      titleStyle: { fontSize: 13, fontWeight: 700, fontFamily: "sans-serif", color: "black" },
      offset: -4
    })
    .createAxes({
      x: {
        line: {},
        ticksAndLabels: {
          values: [315532800000, 631152000000, 946684800000, 1262304000000, 1577836800000],
          ticks: { length: 5 },
          labels: {
            fontSize: 10,
            offset: 7,
            fontFamily: "sans-serif",
            color: "black",
            rotation: { value: -90, unit: "degrees" }
          }
        },
        title: { text: "date", fontSize: 11, fontWeight: 700, fontFamily: "sans-serif", offset: 43 }
      },
      y: {
        line: {},
        ticksAndLabels: {
          values: [0, 2, 4, 6, 8, 10, 12],
          ticks: { length: 5 },
          labels: { fontSize: 10, offset: 7, fontFamily: "sans-serif", color: "black" }
        },
        title: { text: "Unemployment Rate (%)", fontSize: 11, fontWeight: 700, fontFamily: "sans-serif", offset: 28 }
      }
    })
    .createGrid({
      horizontal: { color: '#ddd', lineWidth: 1 },
      vertical: { color: '#ddd', lineWidth: 1 }
    });
}
