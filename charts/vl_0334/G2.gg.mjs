// DOCS: doc-b30469a9489ccd34, doc-0a1e48878a814143, doc-fcd78d0ac00f884e
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({
      width: 318,
      height: 362,
      margin: { left: 43, top: 40, right: 5, bottom: 22 }
    })
    .editCanvas({ background: "whitesmoke" })
    .createData({ id: "raw", values: data })
    .createComputedData({
      id: "yearNum",
      as: "yearNum",
      expression: { op: "toNumber", operand: { field: "Year" } }
    })
    .filterData({
      id: "initialYears",
      field: "yearNum",
      range: { min: 2016, max: 2021 }
    })
    .createComputedData({
      id: "dateMs",
      as: "dateMs",
      expression: { op: "parseTime", operand: { field: "Date" }, format: "auto" }
    })
    .createSortedData({
      id: "sortedDates",
      sortBy: [{ field: "dateMs", order: "ascending" }]
    })
    .createComputedData({
      id: "missingFlag",
      as: "flag",
      expression: {
        op: "if",
        condition: {
          op: "or",
          operands: [
            {
              op: "and",
              operands: [
                { op: "gte", left: { field: "Price" }, right: { constant: "1," } },
                { op: "lt", left: { field: "Price" }, right: { constant: "1-" } }
              ]
            },
            {
              op: "and",
              operands: [
                { op: "gte", left: { field: "Price" }, right: { constant: "2," } },
                { op: "lt", left: { field: "Price" }, right: { constant: "2-" } }
              ]
            },
            {
              op: "and",
              operands: [
                { op: "gte", left: { field: "Price" }, right: { constant: "3," } },
                { op: "lt", left: { field: "Price" }, right: { constant: "3-" } }
              ]
            },
            {
              op: "and",
              operands: [
                { op: "gte", left: { field: "Price" }, right: { constant: "4," } },
                { op: "lt", left: { field: "Price" }, right: { constant: "4-" } }
              ]
            }
          ]
        },
        then: { constant: 1 },
        else: { constant: 0 }
      }
    })
    .createWindowData({
      id: "segmented",
      operations: [{ op: "cumulativeSum", field: "flag", as: "segment" }]
    })
    .filterData({
      id: "definedRows",
      field: "flag",
      predicate: { op: "eq", value: 0 }
    })
    .createComputedData({
      id: "priceNum",
      as: "priceNum",
      expression: {
        op: "if",
        condition: { op: "eq", left: { field: "flag" }, right: { constant: 1 } },
        then: { constant: null },
        else: { op: "toNumber", operand: { field: "Price" } }
      }
    })
    .createLinePlot({
      x: {
        field: "dateMs",
        fieldType: "temporal",
        temporalUnit: "timestamp"
      },
      y: {
        field: "priceNum",
        fieldType: "quantitative"
      },
      guides: false
    })
    .editLineMark({ stroke: "#314686", strokeWidth: 2, curve: "linear" })
    .encodeGroup({ field: "segment", fieldType: "nominal" })
    .editXScale({ domain: [1457568000000, 1629244800000], nice: false })
    .editYScale({ domain: [0, 1000], zero: true })
    .createAxes({
      x: {
        line: { color: "dimgrey" },
        ticksAndLabels: {
          ticks: { color: "pink" },
          labels: { format: "%Y", fontSize: 10, offset: 7, color: "black" }
        },
        title: false
      },
      y: {
        line: { color: "dimgrey" },
        ticksAndLabels: {
          values: [0, 100, 200, 300, 400, 500, 600, 700, 800, 900, 1000],
          ticks: { color: "pink" },
          labels: {
            fontSize: 10,
            offset: 7,
            color: "black",
            labelMap: [
              { value: 0, label: "$0" },
              { value: 100, label: "$100" },
              { value: 200, label: "$200" },
              { value: 300, label: "$300" },
              { value: 400, label: "$400" },
              { value: 500, label: "$500" },
              { value: 600, label: "$600" },
              { value: 700, label: "$700" },
              { value: 800, label: "$800" },
              { value: 900, label: "$900" },
              { value: 1000, label: "$1,000" }
            ]
          }
        },
        title: false
      }
    })
    .createTitle({
      text: "Ether: long run",
      titleStyle: { fontSize: 13, fontWeight: 700, color: "black" },
      subtitleStyle: { fontSize: 10, fontStyle: "italic", color: "black" }
    })
    .editTitle({
      subtitle: "Daily ETH price in USD. Source: Investing.com",
      offset: -13,
      gap: 1
    })
    .editTitle({ alongOffset: -37.586 });
}