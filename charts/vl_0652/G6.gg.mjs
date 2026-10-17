// DOCS: doc-0a1e48878a814143, doc-b7f1bdfb89789cd6, doc-ef5a28c0c3f3c920
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({
      width: 343,
      height: 362,
      margin: { left: 43, top: 40, right: 5, bottom: 22 }
    })
    .editCanvas({ background: "#122b39" })
    .createData({ id: "eth", values: data })
    .createComputedData({
      id: "ethTs",
      as: "dateMs",
      expression: { op: "parseTime", operand: { field: "Date" }, format: "auto" }
    })
    .createComputedData({
      id: "ethYear",
      as: "yearNum",
            expression: { op: "toNumber", operand: { field: "Year" } }
    })
    .filterData({
      id: "ethRange",
      field: "yearNum",
      range: { min: 2016, max: 2021 }
    })
    .createSortedData({
      id: "ethSorted",
      sortBy: [{ field: "dateMs", order: "ascending" }]
    })
    .createComputedData({
      id: "ethFlag",
      as: "missing",
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
    .createComputedData({
      id: "ethPrice",
      as: "priceNum",
      expression: {
        op: "if",
        condition: { op: "eq", left: { field: "missing" }, right: { constant: 1 } },
        then: { constant: null },
        else: { op: "toNumber", operand: { field: "Price" } }
      }
    })
    .createWindowData({
      id: "ethSeg",
      operations: [{ op: "cumulativeSum", field: "missing", as: "segment" }]
    })
    .filterData({
      id: "ethDefined",
      field: "missing",
      predicate: { op: "eq", value: 0 }
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
    .editXScale({ domain: [1457568000000, 1629244800000] })
    .editYScale({ domain: [0, 1000] })
    .encodeStroke({ value: "hotpink", target: "linePlot" })
    .encodeStrokeWidth({ value: 2, target: "linePlot" })
    .encodeGroup({ field: "segment" })
    .createXAxis({
        line: {},
        ticksAndLabels: {
          values: [1483228800000, 1514764800000, 1546300800000, 1577836800000, 1609459200000],
          ticks: { length: 5 },
          labels: {
            fontSize: 10,
            fontFamily: "sans-serif",
            offset: 7,
            flush: true
          }
        },
        title: false
      })
      .editXAxisLine({ color: "dimgrey" })
      .editXAxisTicksAndLabels({
        ticks: { color: "pink" },
        labels: { color: "#00a767", format: "%Y" }
      })
      .createYAxis({
        line: {},
        ticksAndLabels: {
          values: [0, 100, 200, 300, 400, 500, 600, 700, 800, 900, 1000],
          ticks: { length: 5 },
          labels: {
            fontSize: 10,
            fontFamily: "sans-serif",
            offset: 7,

          }
        },
        title: false
      })
      .editYAxisLine({ color: "dimgrey" })
      .editYAxisTicksAndLabels({
        ticks: { color: "pink" },
        labels: { color: "#00a767", labelMap: [
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
        ] }
      })
    .createTitle({
      text: "Ether: long run",
      titleStyle: { fontSize: 13, fontWeight: 700, color: "#179fdb", fontFamily: "sans-serif" },
      subtitleStyle: { fontSize: 10, fontStyle: "italic", color: "#179fdb", fontFamily: "sans-serif" }
    })
    .editTitle({
      subtitle: "Daily ETH price in USD. Source: Investing.com",
      gap: 1,
      offset: -13
    })
    .editTitle({ alongOffset: -37.586 });
}