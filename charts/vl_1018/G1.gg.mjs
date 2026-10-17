// DOCS: doc-76573a465e2b6a33, doc-dfae58344d5a524e
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({
      width: 233,
      height: 242,
      margin: { left: 29, top: 40, right: 24, bottom: 22 }
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
        temporalUnit: "year",
        scale: { domain: [694224000000, 1609459200000], nice: false }
      },
      y: {
        field: "valueNum",
        scale: { domain: [0, 120], nice: false }
      },
      guides: false
    })
    .editLineMark({ stroke: "#3662f1", strokeWidth: 2, opacity: 1 })
    .createTitle({
      text: "Unemployed over 24 Months (18-24)",
      alongOffset: -23.7,
      titleStyle: { fontSize: 13, fontWeight: 700, fontFamily: "sans-serif" }
    })
    .editTitle({
      subtitleStyle: { fontSize: 10, fontStyle: "italic", fontFamily: "sans-serif" }
    })
    .editTitle({
      subtitle: "United Kingdom (thousands), seasonally adjusted",
      offset: -13,
      gap: 1
    })
    .createGuides({
      axes: {
        x: {
          line: { color: "#888" },
          ticksAndLabels: {
            values: [788918400000, 946684800000, 1104537600000, 1262304000000, 1420070400000, 1577836800000],
            ticks: { color: "#888" },
            labels: { fontSize: 10, fontFamily: "sans-serif", offset: 7 }
          },
          title: false
        },
        y: {
          line: { color: "#888" },
          ticksAndLabels: {
            values: [0, 20, 40, 60, 80, 100, 120],
            ticks: { color: "#888" },
            labels: { fontSize: 10, fontFamily: "sans-serif", offset: 7 }
          },
          title: false
        }
      },
      grid: {
        horizontal: { values: [0, 20, 40, 60, 80, 100, 120], color: "#ddd", lineWidth: 1 },
        vertical: { values: [788918400000, 946684800000, 1104537600000, 1262304000000, 1420070400000, 1577836800000], color: "#ddd", lineWidth: 1 }
      },
      legend: false
    });
}
