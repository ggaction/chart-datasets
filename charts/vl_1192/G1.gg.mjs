// DOCS: doc-dfae58344d5a524e, doc-2a31551f1566fc6b, doc-f30bfed200b50a98
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({
      width: 247,
      height: 242,
      margin: { top: 40, right: 18, bottom: 22, left: 29 }
    })
    .createData({ values: data })
    .createComputedData({
      id: "lmsNum",
      as: "valueNum",
      expression: {
        op: "if",
        condition: { op: "eq", left: { field: "value" }, right: { constant: "" } },
        then: { constant: 0 },
        else: { op: "toNumber", operand: { field: "value" } }
      }
    })
    .createLinePlot({
      x: {
        field: "date",
        fieldType: "temporal",
        temporalUnit: "year",
        scale: { domain: [852076800000, 1609459200000], nice: false }
      },
      y: {
        field: "valueNum",
        scale: { domain: [0, 120], zero: true, nice: false }
      },
      guides: false
    })
    .editLineMark({ stroke: "darkblue", strokeWidth: 2 })
    .createTitle({
      text: "Employment levels by country of birth ",
      titleStyle: { fontSize: 13, fontWeight: 700, color: "black" },
      alongOffset: -23.685
    })
    .editTitle({
      subtitleStyle: { fontSize: 10, fontStyle: "italic", color: "black" },
      gap: 3,
      offset: -4
    })
    .editTitle({
      subtitle: "(16+) - USA born, Source ONS"
    })
    .createGuides({
      axes: {
        x: {
          line: { color: "#888" },
          ticksAndLabels: {
            values: [
              946684800000,
              1104537600000,
              1262304000000,
              1420070400000,
              1577836800000
            ],
            ticks: { color: "#888", length: 5 },
            labels: { fontSize: 10, offset: 7, format: "%Y" }
          },
          title: false
        },
        y: {
          line: { color: "#888" },
          ticksAndLabels: {
            values: [0, 20, 40, 60, 80, 100, 120],
            ticks: { color: "#888", length: 5 },
            labels: { fontSize: 10, offset: 7 }
          },
          title: false
        }
      },
      grid: { horizontal: { color: "#ddd", lineWidth: 1 }, vertical: { color: "#ddd", lineWidth: 1 } }
    });
}