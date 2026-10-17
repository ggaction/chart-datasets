// DOCS: doc-7f2c254224fc4908 (hierarchical authoring; complete-axes/grid/title decomposition)
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({ width: 799, height: 449, margin: { left: 44, top: 27, right: 5, bottom: 22 } })
    .createData({ values: data })
    .createComputedData({
      id: "ethanolColorGroup",
      as: "colorGroup",
      expression: {
        op: "if",
        condition: {
          op: "and",
          operands: [
            { op: "not", operand: { op: "isNull", operand: { field: "Fuel Ethanol" } } },
            { op: "lt", left: { field: "Fuel Ethanol" }, right: { constant: 0 } }
          ]
        },
        then: { constant: "negative" },
        else: { constant: "positive" }
      }
    })
    .createBarPlot({
      x: { field: "dt", fieldType: "temporal" },
      y: "Fuel Ethanol",
      guides: false
    })
    .editXScale({ domain: [1354622983783, 1685015416216], range: [44, 794], nice: false })
    .editYScale({ domain: [-30, 40] })
    .encodeBarWidth({ pixels: 1 })
    .encodeColor({ field: "colorGroup", layout: "overlay" })
    .editColorScale({ domain: ["positive", "negative"], range: ["royalblue", "darkred"] })
    .editBarMark({ missing: "skip", stroke: false })
    .createGrid({ horizontal: { scale: "y", color: "#ddd", lineWidth: 1 }, vertical: { scale: "x", color: "#ddd", lineWidth: 1 } })
    .createXAxis({
      line: {},
      ticksAndLabels: {
        values: [
          1356998400000, 1388534400000, 1420070400000, 1451606400000, 1483228800000,
          1514764800000, 1546300800000, 1577836800000, 1609459200000, 1640995200000,
          1672531200000
        ],
        ticks: {},
        labels: { fontSize: 10, offset: 7, format: "%Y", flush: true }
      },
      title: false
    })
    .createYAxis({
      line: {},
      ticksAndLabels: {
        values: [-30, -25, -20, -15, -10, -5, 0, 5, 10, 15, 20, 25, 30, 35, 40],
        ticks: {},
        labels: {
          fontSize: 10,
          offset: 7,
          labelMap: [
            { value: -30, label: "\u221230" },
            { value: -25, label: "\u221225" },
            { value: -20, label: "\u221220" },
            { value: -15, label: "\u221215" },
            { value: -10, label: "\u221210" },
            { value: -5, label: "\u22125" },
            { value: 0, label: "0" },
            { value: 5, label: "5" },
            { value: 10, label: "10" },
            { value: 15, label: "15" },
            { value: 20, label: "20" },
            { value: 25, label: "25" },
            { value: 30, label: "30" },
            { value: 35, label: "35" },
            { value: 40, label: "40" }
          ]
        }
      },
      title: { text: "Year-over-year Change [%]", fontSize: 11, fontWeight: 700, offset: 33 }
    })
    .createTitle({
      text: "Year over Year change in Fuel Ethanol stock",
      titleStyle: { fontSize: 13, fontWeight: 700 },
      offset: -3
    })
    .editTitle({ alongOffset: 238.55 });
}