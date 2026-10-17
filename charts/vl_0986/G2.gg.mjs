// DOCS: doc-b11b4627b143730d doc-071c93dff3a5ea2e doc-76573a465e2b6a33
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({
      width: 258,
      height: 262,
      margin: { left: 44, top: 40, right: 39, bottom: 22 }
    })
    .createData({ id: "cpi", values: data })
    .createComputedData({
      id: "cpiYear",
      as: "yearNum",
      expression: { op: "toNumber", operand: { field: "year" } }
    })
    .filterData({
      id: "cpiLo",
      field: "yearNum",
      predicate: { op: "gt", value: 1999 }
    })
    .filterData({
      id: "cpiHi",
      field: "yearNum",
      predicate: { op: "lt", value: 2022 }
    })
    .createComputedData({
      id: "cpiFinal",
      as: "valueNum",
      expression: { op: "toNumber", operand: { field: "value" } }
    })
    .createLinePlot({
      x: { field: "date", fieldType: "temporal" },
      y: { field: "valueNum", fieldType: "quantitative" },
      guides: false
    })
    .editXScale({ domain: [946684800000, 1638316800000], nice: false })
    .editYScale({ domain: [0, 140] })
    .editLineMark({ stroke: "#86d0bb", strokeWidth: 1.5 })
    .createGuides({
      grid: false,
      axes: {
        x: {
          line: {},
          ticksAndLabels: {
            values: [
              946684800000,
              1104537600000,
              1262304000000,
              1420070400000,
              1577836800000
            ],
            labels: {
              fontSize: 10,
              fontFamily: "sans-serif",
              offset: 7,
              format: "%Y"
            }
          },
          title: false
        },
        y: {
          line: {},
          ticksAndLabels: {
            labels: { fontSize: 10, fontFamily: "sans-serif", offset: 7 }
          },
          title: {
            text: "Index",
            fontSize: 11,
            fontWeight: 700,
            offset: 35
          }
        }
      }
    })
    .createTitle({
      text: "CPI",
      titleStyle: {
        fontSize: 13,
        fontWeight: 700,
        color: "black",
        fontFamily: "sans-serif"
      },
      subtitleStyle: {
        fontSize: 10,
        fontStyle: "italic",
        color: "black",
        fontFamily: "sans-serif"
      }
    })
    .editTitle({ offset: -4, alongOffset: -38.7 })
    .editTitle({
      subtitle: "CPIH index: Medical services 2015 = 100. Source: ONS",
      gap: 1
    });
}
