// DOCS: doc-b11b4627b143730d
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({ width: 230, height: 262, margin: { left: 44, top: 40, right: 11, bottom: 22 } })
    .createData({ values: data })
    .filterData({ id: "cpiMinYear", field: "year", predicate: { op: "gt", value: "1988" } })
    .filterData({ id: "cpiMaxYear", field: "year", predicate: { op: "lt", value: "2022" } })
    .createComputedData({ id: "cpiValue", as: "valueNum", expression: { op: "toNumber", operand: { field: "value" } } })
    .createLinePlot({
      x: { field: "date", fieldType: "temporal", temporalUnit: "year" },
      y: { field: "valueNum" },
      guides: false
    })
    .editLineMark({ stroke: "#86d0bb", strokeWidth: 2, opacity: 1 })
    .editXScale({ domain: [599616000000, 1609459200000] })
    .editYScale({ domain: [0, 120] })
    .createAxes({
      x: {
        line: {},
        ticksAndLabels: {
          values: [631152000000, 788918400000, 946684800000, 1104537600000, 1262304000000, 1420070400000, 1577836800000],
          ticks: {},
          labels: {
            fontSize: 10,
            fontFamily: "sans-serif",
            offset: 7
          }
        },
        title: false
      },
      y: {
        line: {},
        ticksAndLabels: {
          values: [0, 20, 40, 60, 80, 100, 120],
          ticks: {},
          labels: { fontSize: 10, fontFamily: "sans-serif", offset: 7 }
        },
        title: { text: "Index", fontSize: 11, fontWeight: 700, fontFamily: "sans-serif", offset: 28 }
      }
    })
    .createTitle({ text: "CPI", titleStyle: { fontSize: 13, fontWeight: 700, fontFamily: "sans-serif", color: "black" } })
    .editTitle({ offset: -13, alongOffset: -38.6846 })
    .editTitle({ subtitle: "CPIH index: all items 2015 = 100. Source: ONS", subtitleStyle: { fontSize: 10, fontStyle: "italic" }, gap: 3 });
}