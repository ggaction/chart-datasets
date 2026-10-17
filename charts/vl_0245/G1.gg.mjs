// DOCS: doc-b11b4627b143730d, doc-071c93dff3a5ea2e — createLinePlot facade, line chart recipe
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({
      width: 281,
      height: 312,
      margin: { left: 24, top: 40, right: 7, bottom: 22 }
    })
    .createData({ values: data })
    .createComputedData({
      id: "hoursNum",
      as: "valueNum",
      expression: { op: "toNumber", operand: { field: "value" } }
    })
    .createLinePlot({
      x: {
        field: "date",
        fieldType: "temporal",
        scale: { type: "time", domain: [702086400000, 1656633600000] }
      },
      y: {
        field: "valueNum",
        fieldType: "quantitative",
        scale: { domain: [0, 35] }
      },
      guides: false
    })
    .editLineMark({ stroke: "turquoise", strokeWidth: 2, opacity: 1 })
    .createAxes({
      x: {
        line: {},
        ticksAndLabels: {
          values: [788918400000, 946684800000, 1104537600000, 1262304000000, 1420070400000, 1577836800000],
          ticks: {},
          labels: { fontSize: 10, fontFamily: "sans-serif", color: "black", offset: 7, format: "%Y" }
        },
        title: false
      },
      y: {
        line: {},
        ticksAndLabels: {
          values: [0, 5, 10, 15, 20, 25, 30, 35],
          ticks: {},
          labels: { fontSize: 10, fontFamily: "sans-serif", color: "black", offset: 7 }
        },
        title: false
      }
    })
    .createGrid({
      horizontal: { color: "#ddd", lineWidth: 1 },
      vertical: { color: "#ddd", lineWidth: 1 }
    })
    .createTitle({
      text: "Weekly hours worked",
      titleStyle: { fontSize: 13, fontWeight: 700 },
      offset: -13
    })
    .editTitle({
      subtitle: "Average for all workers, data: ONS",
      subtitleStyle: { fontSize: 10, fontStyle: "italic" },
      alongOffset: -18
    })
    .editTitle({ gap: 1 });
}
