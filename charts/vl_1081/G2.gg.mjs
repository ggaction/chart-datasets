import { chart } from "ggaction";
import data from "./data.json";

// DOCS: doc-b11b4627b143730d, doc-8a4f6f06e0d37d5e, doc-c2eafbbd16fe3c71
export function buildChart() {
  return chart()
    .createCanvas({
      width: 245,
      height: 237,
      margin: { left: 29, top: 35, right: 36, bottom: 22 }
    })
    .createData({ values: data })
    .createComputedData({
      id: "lmsNum",
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
    .editXScale({ domain: [694224000000, 1609459200000] })
    .editYScale({ domain: [0, 110] })
    .editLineMark({ stroke: "seagreen", strokeWidth: 2 })
    .createAxes({
      x: {
        line: { color: "#888" },
        ticksAndLabels: {
          values: [
            788918400000, 946684800000, 1104537600000, 1262304000000,
            1420070400000, 1577836800000
          ],
          ticks: { length: 5, color: "#888" },
          labels: { fontSize: 10, fontFamily: "sans-serif", offset: 7, flush: true }
        },
        title: false
      },
      y: {
        line: { color: "#888" },
        ticksAndLabels: {
          values: [0, 20, 40, 60, 80, 100],
          ticks: { length: 5, color: "#888" },
          labels: { fontSize: 10, fontFamily: "sans-serif", offset: 7 }
        },
        title: false
      }
    })
    .createGrid({
      horizontal: { color: "#ddd" },
      vertical: { color: "#ddd" }
    })
    .createTitle({
      text: "LFS: Part-time workers: Ill or disabled",
      titleStyle: { fontSize: 13, fontWeight: 700, fontFamily: "sans-serif" },
      alongOffset: -23.6845703125
    })
    .editTitle({
      offset: -13
    })
    .editTitle({
      subtitle: "UK: Male: Thousands: SA",
      subtitleStyle: { fontSize: 10, fontStyle: "italic", fontFamily: "sans-serif" },
      gap: 1
    });
}
