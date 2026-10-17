// DOCS: doc-8a4f6f06e0d37d5e
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({ width: 346, height: 242, margin: { left: 39, top: 40, right: 7, bottom: 22 } })
    .createData({ id: "rpi", values: data })
    .createComputedData({
      id: "rpiVal",
      as: "valueNum",
      expression: { op: "toNumber", operand: { field: "value" } }
    })
    .createLinePlot({
      x: {
        field: "date",
        fieldType: "temporal",
        scale: { domain: [539136000000, 1661990400000], nice: false }
      },
      y: {
        field: "valueNum",
        fieldType: "quantitative",
        scale: { domain: [-4, 4] }
      },
      guides: false
    })
    .editLineMark({ stroke: "rgb(0,47,167)", strokeWidth: 2 })
    .createGuides({
      axes: {
        x: {
          line: {},
          ticksAndLabels: {
            values: [631152000000, 788918400000, 946684800000, 1104537600000, 1262304000000, 1420070400000, 1577836800000],
            ticks: { length: 5 },
            labels: { fontSize: 10, fontFamily: "sans-serif", offset: 7, format: "%Y" }
          },
          title: false
        },
        y: {
          line: {},
          ticksAndLabels: {
            values: [-4, -2, 0, 2, 4],
            ticks: { length: 5 },
            labels: {
              fontSize: 10,
              fontFamily: "sans-serif",
              offset: 7,
              labelMap: [
                { value: -4, label: "\u22124" },
                { value: -2, label: "\u22122" },
                { value: 0, label: "0" },
                { value: 2, label: "2" },
                { value: 4, label: "4" }
              ]
            }
          },
          title: { text: "%", fontSize: 11, fontWeight: 700, offset: 28 }
        }
      },
      grid: false,
      legend: false
    })
    .createTitle({
      text: "RPI: Monthly % change - Soft Drinks",
      titleStyle: { fontSize: 13, fontWeight: 700, color: "black", fontFamily: "sans-serif" },
      subtitleStyle: { fontSize: 10, fontStyle: "italic", color: "black", fontFamily: "sans-serif" }
    })
    .editTitle({ offset: -13, gap: 1, alongOffset: -33.4 })
    .editTitle({ subtitle: "Source: ONS" });
}