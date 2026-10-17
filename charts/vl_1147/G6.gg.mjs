// DOCS: doc-b11b4627b143730d, doc-8a4f6f06e0d37d5e
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({
      width: 391,
      height: 387,
      margin: { left: 44, top: 10, right: 7, bottom: 37 }
    })
    .createData({ id: "d0", values: data })
  .filterData({ id: "validYear", field: "year", noneOf: [""] })
    .createComputedData({
      id: "tData",
      as: "t",
      expression: { op: "parseTime", operand: { field: "year" }, format: "auto" }
    })
    .createComputedData({
      id: "giniData",
      as: "giniNum",
      expression: { op: "toNumber", operand: { field: "gini" } }
    })
    .createLinePlot({
      x: {
        field: "t",
        fieldType: "temporal"
      },
      y: {
        field: "giniNum",
        fieldType: "quantitative"
      },
      guides: false
    })
    .editXScale({ domain: [-631152000000, 1577836800000] })
    .editYScale({ domain: [0, 100] })
    .createXAxis({
      line: {},
      ticksAndLabels: {
        values: [
          -631152000000, -315619200000, 0, 315532800000, 631152000000,
          946684800000, 1262304000000, 1577836800000
        ],
        ticks: {},
        labels: { fontSize: 10, fontFamily: "sans-serif", offset: 7, flush: true }
      },
      title: { text: "Year", fontSize: 11, offset: 28, fontFamily: "sans-serif" }
    })
    .createYAxis({
      line: {},
      ticksAndLabels: {
        values: [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100],
        ticks: {},
        labels: { fontSize: 10, fontFamily: "sans-serif", offset: 7 }
      },
      title: { text: "Gini coefficient", fontSize: 11, offset: 33, fontFamily: "sans-serif" }
    })
    .editXAxisTitle({ fontWeight: 700 })
    .editYAxisTitle({ fontWeight: 700 })
    .createHorizontalGrid({
      color: "#ddd",
      values: [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
    })
    .createVerticalGrid({
      color: "#ddd",
      values: [
        -631152000000, -315619200000, 0, 315532800000, 631152000000,
        946684800000, 1262304000000, 1577836800000
      ]
    });
}
