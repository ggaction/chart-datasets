// DOCS: doc-b11b4627b143730d
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({ width: 253, height: 262, margin: { left: 39, top: 40, right: 39, bottom: 22 } })
    .createData({ values: data })
    .createComputedData({ id: "yearNum", as: "yearNum", expression: { op: "toNumber", operand: { field: "year" } } })
    .filterData({ id: "rowsMin", field: "yearNum", predicate: { op: "gt", value: 1988 } })
    .filterData({ id: "rowsMax", field: "yearNum", predicate: { op: "lt", value: 2022 } })
    
    .createComputedData({ id: "valueNum", as: "valueNum", expression: { op: "toNumber", operand: { field: "value" } } })
    .createLinePlot({
      x: { field: "date", fieldType: "temporal", scale: { domain: [599616000000, 1638316800000], nice: false } },
      y: { field: "valueNum", fieldType: "quantitative", scale: { domain: [-2, 3], nice: false } },
      guides: false
    })
    .editLineMark({ stroke: "#86d0bb", strokeWidth: 1, opacity: 1 })
    .createAxes({
      x: {
        line: {},
        ticksAndLabels: {
          values: [631152000000, 788918400000, 946684800000, 1104537600000, 1262304000000, 1420070400000, 1577836800000],
          ticks: {},
          labels: { format: "%Y", fontSize: 10, offset: 6 }
        },
        title: false
      },
      y: {
        line: {},
        ticksAndLabels: {
          ticks: {},
          labels: {
            fontSize: 10,
            offset: 7,
            labelMap: [
              { value: -2, label: "\u22122" },
              { value: -1, label: "\u22121" },
              { value: 0, label: "0" },
              { value: 1, label: "1" },
              { value: 2, label: "2" },
              { value: 3, label: "3" }
            ]
          }
        },
        title: { text: "Monthly rate %", fontSize: 11, fontWeight: 700, offset: 21 }
      }
    })
    .createTitle({
      text: "CPI",
      titleStyle: { fontSize: 13, fontWeight: 700, color: "black" },
      subtitleStyle: { fontSize: 10, fontStyle: "italic", color: "black" }
    })
    .editTitle({ offset: -13, gap: 1, alongOffset: -33.4 })
    .editTitle({ subtitle: "CPIH monthly rate: all items 2015 = 100. Source: ONS" });
}