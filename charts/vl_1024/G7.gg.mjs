// DOCS: doc-6c2c08869091f6a0, doc-fc11e9fb291905d1
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({ width: 544, height: 272, margin: { left: 39, top: 10, right: 5, bottom: 62 } })
    .createData({ values: data })
    .createComputedData({ id: "dated", as: "DateMs", expression: { op: "parseTime", operand: { field: "Date" }, format: "auto" } })
    .createComputedData({ id: "direction", as: "Direction", expression: { op: "if", condition: { op: "lt", left: { field: "Open" }, right: { field: "Close" } }, then: { constant: "up" }, else: { constant: "down" } } })
    .createRuleMark({ id: "wick", strokeWidth: 1 })
    .encodeX({ field: "DateMs", fieldType: "temporal", temporalUnit: "timestamp" })
    .editXScale({ domain: [1634453485714, 1666544914285], nice: false })
    .encodeYRange({ lower: "Low", upper: "High" })
    .editYScale({ domain: [5, 50], nice: false })
    .encodeStroke({ field: "Direction", fieldType: "nominal" })
    .editStrokeScale({ target: "wick", domain: ["up", "down"], range: ["#06982d", "#ae1325"] })
    .createBarPlot({
      x: { field: "DateMs", fieldType: "temporal", temporalUnit: "timestamp" },
      y: { lower: "Open", upper: "Close" },
      guides: false
    })
    .encodeBarWidth({ pixels: 5 })
    .encodeColor({ field: "Direction", fieldType: "nominal" })
    .editColorScale({ target: "barPlot", domain: ["up", "down"], range: ["#06982d", "#ae1325"] })
    .editBarMark({ stroke: false })
    .createGrid({
      horizontal: { values: [10, 20, 30, 40, 50] },
      vertical: { values: [1635724800000, 1638316800000, 1640995200000, 1643673600000, 1646092800000, 1648771200000, 1651363200000, 1654041600000, 1656633600000, 1659312000000, 1661990400000, 1664582400000] }
    })
    .editHorizontalGrid({ color: "#ddd" })
    .editVerticalGrid({ color: "#ddd" })
    .createXAxis({
      line: {},
      ticksAndLabels: {
        values: [1635724800000, 1638316800000, 1640995200000, 1643673600000, 1646092800000, 1648771200000, 1651363200000, 1654041600000, 1656633600000, 1659312000000, 1661990400000, 1664582400000],
        ticks: {},
        labels: {
          fontSize: 10,
          offset: 7,
          rotation: { value: -45, unit: "degrees" }
        }
      },
      title: { text: "Date", fontSize: 11 }
    })
    .editXAxisLine({ color: "#888" })
    .editXAxisTicks({ color: "#888" })
    .editXAxisLabels({
      color: "black",
      labelMap: [
        { value: 1635724800000, label: "01/11/21" },
        { value: 1638316800000, label: "01/12/21" },
        { value: 1640995200000, label: "01/01/22" },
        { value: 1643673600000, label: "01/02/22" },
        { value: 1646092800000, label: "01/03/22" },
        { value: 1648771200000, label: "01/04/22" },
        { value: 1651363200000, label: "01/05/22" },
        { value: 1654041600000, label: "01/06/22" },
        { value: 1656633600000, label: "01/07/22" },
        { value: 1659312000000, label: "01/08/22" },
        { value: 1661990400000, label: "01/09/22" },
        { value: 1664582400000, label: "01/10/22" }
      ]
    })
    .editXAxisTitle({ color: "black", fontWeight: 700 })
    .createYAxis({
      line: {},
      ticksAndLabels: {
        values: [10, 20, 30, 40, 50],
        ticks: {},
        labels: { fontSize: 10, offset: 7 }
      },
      title: { text: "Price", fontSize: 11, offset: 26.544921875 }
    })
    .editYAxisLine({ color: "#888" })
    .editYAxisTicks({ color: "#888" })
    .editYAxisLabels({ color: "black" })
    .editYAxisTitle({ color: "black", fontWeight: 700 });
}