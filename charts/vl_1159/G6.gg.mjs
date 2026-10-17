import { chart } from "ggaction";
import data from "./data.json";

// DOCS: doc-dfae58344d5a524e, doc-b11b4627b143730d, doc-8a4f6f06e0d37d5e, doc-76573a465e2b6a33, doc-e8d8c6aef74192f0

export function buildChart() {
  return chart()
    .createCanvas({ width: 240, height: 277, margin: { left: 33, top: 27, right: 7, bottom: 50 } })
    .createData({ id: "lms", values: data })
    .createComputedData({
      id: "lmsNum",
      as: "valueNum",
      expression: { op: "toNumber", operand: { field: "value" } }
    })
    .createTitle({ text: "Unemployment rate aged 35-49", offset: -3, titleStyle: { fontSize: 13 } })
    .createLinePlot({
      guides: false,
      x: {
        field: "date",
        fieldType: "temporal",
      },
      y: {
        field: "valueNum",
        fieldType: "quantitative",
      }
    })
        .editXScale({ domain: [694224000000, 1609459200000] })
    .editYScale({ domain: [0, 8] })
    .editLineMark({ target: "linePlot", stroke: "#4c78a8", strokeWidth: 2 })
    .createXAxis({
      ticksAndLabels: {
        values: [
          788918400000, 946684800000, 1104537600000,
          1262304000000, 1420070400000, 1577836800000
        ],
        ticks: { length: 5 },
        labels: {
          fontSize: 10,
          offset: 7,
          rotation: { value: -Math.PI / 2, unit: "radians" }
        }
      },
      title: { text: "date", fontSize: 11, offset: 44 }
    })
    .editXAxisTitle({ fontWeight: 700 })
    .createYAxis({
      ticksAndLabels: {
        count: 5,
        ticks: { length: 5 },
        labels: { fontSize: 10, offset: 7 }
      },
      title: {
        text: "Unemployment Rate (%)",
        fontSize: 11,
        rotation: { value: -Math.PI / 2, unit: "radians" },
        offset: 26
      }
    })
    .editYAxisTitle({ fontWeight: 700 })
    .createHorizontalGrid({ color: "#ddd", lineWidth: 1 })
    .createVerticalGrid({ color: "#ddd", lineWidth: 1 });
}