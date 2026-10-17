// DOCS: doc-76573a465e2b6a33, doc-071c93dff3a5ea2e, doc-c2eafbbd16fe3c71
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({
      width: 261,
      height: 277,
      margin: { left: 39, top: 27, right: 22, bottom: 50 }
    })
    .createData({ values: data })
    .createComputedData({
      id: "dated",
      as: "dateMs",
      expression: { op: "parseTime", operand: { field: "date" } }
    })
    .createComputedData({
      id: "rated",
      as: "rate",
      expression: { op: "toNumber", operand: { field: "value" } }
    })
    .createTitle({
      text: "Female Unemployment Rate 16 and over",
      offset: -13,
      alongOffset: -33.123046875,
      titleStyle: { fontSize: 13, fontWeight: 700, color: "black" }
    })
    .createLinePlot({
      x: { field: "dateMs", fieldType: "temporal" },
      y: { field: "rate", fieldType: "quantitative" },
      guides: false
    })
    .editXScale({ domain: [31536000000, 1609459200000] })
    .editYScale({ type: "linear", domain: [0, 12] })
    .editLineMark({ stroke: "#4c78a8", strokeWidth: 2 })
    .createGuides({
      axes: {
        x: {
          ticksAndLabels: {
            values: [
              315532800000,
              631152000000,
              946684800000,
              1262304000000,
              1577836800000
            ],
            ticks: { length: 5 },
            labels: {
              fontSize: 10,
              offset: 7,
              rotation: { value: -Math.PI / 2, unit: "radians" }
            }
          },
          title: { text: "date", fontSize: 11, fontWeight: 700, offset: 40 }
        },
        y: {
          ticksAndLabels: {
            values: [0, 2, 4, 6, 8, 10, 12],
            ticks: { length: 5 },
            labels: { fontSize: 10, offset: 7 }
          },
          title: {
            text: "Unemployment Rate (%)",
            fontSize: 11,
            fontWeight: 700,
            offset: 28
          }
        }
      },
      grid: { horizontal: { color: '#ddd' }, vertical: { color: '#ddd' } }
    });
}