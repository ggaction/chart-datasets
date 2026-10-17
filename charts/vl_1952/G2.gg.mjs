// DOCS: doc-b11b4627b143730d, doc-8a4f6f06e0d37d5e, doc-9bb354f4e2d46693
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({
      width: 654,
      height: 447,
      margin: { left: 39, top: 10, right: 15, bottom: 37 }
    })
    .createData({ values: data })
    .createComputedData({
      id: "missingFlag",
      as: "missing",
      expression: {
        op: "if",
        condition: {
          op: "eq",
          left: { field: "price" },
          right: { constant: "NA" }
        },
        then: { constant: 1 },
        else: { constant: 0 }
      }
    })
    .createWindowData({
      id: "segmented",
      operations: [
        { op: "cumulativeSum", field: "missing", as: "segment" }
      ]
    })
    .filterData({
      id: "visible",
      field: "price",
      noneOf: ["NA"]
    })
    .createComputedData({
      id: "priceNum",
      as: "priceNum",
      expression: { op: "toNumber", operand: { field: "price" } }
    })
    .createLinePlot({
      x: {
        field: "date",
        fieldType: "temporal"
      },
      y: {
        field: "priceNum",
        fieldType: "quantitative"
      },
      guides: false
    })
    .editXScale({ domain: [852508800000, 1579824000000], nice: false })
    .editYScale({ domain: [0, 20] })
    .encodeGroup({ field: "segment", fieldType: "nominal" })
    .editLineMark({ strokeWidth: 2 })
    .createGuides({
      axes: {
        x: {
          line: {},
          ticksAndLabels: {
            values: [
              883612800000, 946684800000, 1009843200000, 1073001600000,
              1136073600000, 1199145600000, 1262304000000, 1325376000000,
              1388505600000, 1451606400000, 1514764800000, 1577836800000
            ],
            ticks: { length: 5 },
            labels: { fontSize: 10, offset: 7 }
          },
          title: { text: "date", fontSize: 11, fontWeight: 700, offset: 28 }
        },
        y: {
          line: {},
          ticksAndLabels: {
            values: [0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20],
            ticks: { length: 5 },
            labels: { fontSize: 10, offset: 7 }
          },
          title: { text: "price", fontSize: 11, fontWeight: 700, offset: 28 }
        }
      },
      grid: {
        horizontal: { color: "#ddd", lineWidth: 1 },
        vertical: { color: "#ddd", lineWidth: 1 }
      }
    });
}