// DOCS: doc-6c2c08869091f6a0, doc-fc11e9fb291905d1
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({ width: 799, height: 449, margin: { left: 44, top: 27, right: 5, bottom: 22 } })
    .createData({ values: data })
    .filterData({ id: "validGas", field: "Total Motor Gasoline", noneOf: [null] })
    .createComputedData({
      id: "gasBarColor",
      as: "barColor",
      expression: {
        op: "if",
        condition: { op: "isNull", operand: { field: "Total Motor Gasoline" } },
        then: { constant: "royalblue" },
        else: {
          op: "if",
          condition: { op: "lt", left: { field: "Total Motor Gasoline" }, right: { constant: 0 } },
          then: { constant: "darkred" },
          else: { constant: "royalblue" }
        }
      }
    })
    .createBarPlot({
      x: {
        field: "dt",
        fieldType: "temporal",
        temporalUnit: "auto",
        scale: { domain: [1354622983783, 1685015416216], nice: false, range: [44, 794] }
      },
      y: {
        field: "Total Motor Gasoline",
        fieldType: "quantitative",
        scale: { type: "linear", domain: [-12, 18], zero: false, nice: false }
      },
      guides: false
    })
    .editBarMark({ stroke: false }).encodeBarWidth({ pixels: 1 })
    .encodeColor({ field: "barColor", layout: "overlay" })
    .editColorScale({ domain: ["royalblue", "darkred"], range: ["royalblue", "darkred"] })
    .createXAxis({
      line: {},
      ticksAndLabels: {
        values: [
          1356998400000, 1388534400000, 1420070400000, 1451606400000,
          1483228800000, 1514764800000, 1546300800000, 1577836800000,
          1609459200000, 1640995200000, 1672531200000
        ],
        ticks: {},
        labels: { fontSize: 10, offset: 7, format: "%Y", flush: true }
      },
      title: false
    })
    .createYAxis({
      line: {},
      ticksAndLabels: {
        values: [-12, -10, -8, -6, -4, -2, 0, 2, 4, 6, 8, 10, 12, 14, 16, 18],
        labels: { fontSize: 10, offset: 7 }
      },
      title: { text: "Year-over-year Change [%]", fontSize: 11, fontWeight: 700, offset: 31 }
    })
    .createGrid({
      horizontal: {
        scale: "y",
        color: "#ddd",
        lineWidth: 1,
        values: [-12, -10, -8, -6, -4, -2, 0, 2, 4, 6, 8, 10, 12, 14, 16, 18]
      },
      vertical: {
        scale: "x",
        color: "#ddd",
        lineWidth: 1,
        values: [
          1356998400000, 1388534400000, 1420070400000, 1451606400000,
          1483228800000, 1514764800000, 1546300800000, 1577836800000,
          1609459200000, 1640995200000, 1672531200000
        ]
      }
    })
    .createTitle({
      text: "Year over Year change in Total Motor Gasoline stock",
      titleStyle: { fontSize: 13, fontWeight: 700 },
      offset: -4
    })
    .editTitle({ alongOffset: 213.390625 });
}