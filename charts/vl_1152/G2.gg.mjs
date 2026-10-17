import { chart } from "ggaction";
import data from "./data.json";

// DOCS: doc-b11b4627b143730d, doc-76573a465e2b6a33, doc-eacb474f181ce5c3,
// doc-071c93dff3a5ea2e, doc-8a4f6f06e0d37d5e, doc-c2eafbbd16fe3c71,
// doc-dfae58344d5a524e, doc-7f2c254224fc4908, doc-81f3b4da1bfe0908,
// doc-d9e3b1b7add0d2c6, doc-f84a6354ad5070da, doc-a7bc9c7281841264.
// G1 compact integrated first render of the
// settled source: line chart of Approve over date, fixed canvas 248x242 with
// margins {left:41, top:5, right:7, bottom:37}, x time scale domain
// [1294272000000,1670544000000] derived via parseTime into dateMs with null rows
// filtered, y linear domain [0,0.55], source line stroke
// #4c78a8 width 2, grid in both directions, complete axes with source
// typography (labels 10px offset 7, titles 11px bold offset 28) for the tight
// margins. No source chart title exists, so no createTitle.
export function buildChart() {
  return chart()
    .createCanvas({
      width: 248,
      height: 242,
      margin: { left: 41, top: 5, right: 7, bottom: 37 }
    })
    .createData({ values: data })
    .createComputedData({
      id: "dateMs",
      as: "dateMs",
      expression: { op: "parseTime", operand: { field: "date" } }
    })
    .filterData({ id: "validRows", field: "dateMs", noneOf: [null] })
    .createLinePlot({
      x: {
        field: "dateMs",
        fieldType: "temporal",
        temporalUnit: "timestamp"
      },
      y: {
        field: "Approve",
        fieldType: "quantitative"
      },
      guides: false
    })
    .editXScale({ domain: [1294272000000, 1670544000000] })
    .editYScale({ domain: [0, 0.55] })
    .editLineMark({ stroke: "#4c78a8", strokeWidth: 2 })
    .createGuides({
      grid: {
        horizontal: {
          values: [0, 0.1, 0.2, 0.3, 0.4, 0.5],
          color: "#ddd"
        },
        vertical: {
          values: [1325376000000, 1388534400000, 1451606400000, 1514764800000, 1577836800000, 1640995200000],
          color: "#ddd"
        }
      },
      axes: {
        x: {
          line: {},
          ticksAndLabels: {
            values: [1325376000000, 1388534400000, 1451606400000, 1514764800000, 1577836800000, 1640995200000],
            ticks: {},
            labels: { fontSize: 10, offset: 7, format: "%Y" }
          },
          title: { text: "date", fontSize: 11, fontWeight: "bold", offset: 28 }
        },
        y: {
          line: {},
          ticksAndLabels: {
            values: [0, 0.1, 0.2, 0.3, 0.4, 0.5],
            ticks: {},
            labels: { fontSize: 10, offset: 7, format: ".1f" }
          },
          title: { text: "Approve", fontSize: 11, fontWeight: "bold", offset: 28 }
        }
      }
    });
}