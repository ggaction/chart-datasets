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
        fieldType: "temporal",
        scale: { domain: [-631152000000, 1577836800000] }
      },
      y: {
        field: "giniNum",
        fieldType: "quantitative",
        scale: { domain: [0, 100] }
      },
      guides: false
    })
    .createAxes({
      x: {
        line: {},
        ticksAndLabels: {
          values: [
            -631152000000, -315619200000, 0, 315532800000, 631152000000,
            946684800000, 1262304000000, 1577836800000
          ],
          ticks: {},
          labels: { fontSize: 10, fontFamily: "sans-serif", offset: 7, flush: true }
        },
        title: { text: "Year", fontSize: 11, fontWeight: 700, fontFamily: "sans-serif", offset: 28 }
      },
      y: {
        line: {},
        ticksAndLabels: {
          values: [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100],
          ticks: {},
          labels: { fontSize: 10, fontFamily: "sans-serif", offset: 7 }
        },
        title: { text: "Gini coefficient", fontSize: 11, fontWeight: 700, fontFamily: "sans-serif", offset: 33 }
      }
    })
    .createGrid({
      vertical: {
        color: "#ddd",
        values: [
          -631152000000, -315619200000, 0, 315532800000, 631152000000,
          946684800000, 1262304000000, 1577836800000
        ]
      },
      horizontal: {
        color: "#ddd",
        values: [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
      }
    });
}
