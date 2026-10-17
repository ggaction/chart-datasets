import { chart } from "ggaction";
import data from "./data.json";

// DOCS: doc-6c2c08869091f6a0, doc-fc11e9fb291905d1, doc-bedf05337affd6f4
export function buildChart() {
  return chart()
    .createCanvas({ width: 799, height: 449, margin: { left: 44, top: 27, right: 5, bottom: 22 } })
    .createData({ values: data })
    .filterData({ id: "validLower48", field: "Lower48", noneOf: [null] })
    .createComputedData({
      id: "d2",
      as: "c",
      expression: {
        op: "if",
        condition: { op: "lt", left: { field: "Lower48" }, right: { constant: 0 } },
        then: { constant: "darkred" },
        else: { constant: "royalblue" }
      }
    })
    .createBarPlot({
      x: { field: "dt", fieldType: "temporal", temporalUnit: "auto" },
      y: "Lower48",
      guides: false
    })
    .encodeColor({ field: "c", layout: "overlay" })
    .editColorScale({ domain: ["darkred", "royalblue"], range: ["darkred", "royalblue"] })
    .editBarMark({ stroke: false }).encodeBarWidth({ pixels: 1 })
    .editXScale({ domain: [1291125989189, 1685267610810], range: [44, 794], nice: false })
    .editYScale({ domain: [-60, 100], nice: false })
    .createXAxis({
      line: { color: "#888" },
      ticksAndLabels: {
        values: [1293840000000, 1325376000000, 1356998400000, 1388534400000, 1420070400000, 1451606400000, 1483228800000, 1514764800000, 1546300800000, 1577836800000, 1609459200000, 1640995200000, 1672531200000],
        ticks: { color: "#888" },
        labels: { fontSize: 10, offset: 7, flush: true, format: "%Y" }
      },
      title: false
    })
    .createYAxis({
      line: { color: "#888" },
      ticksAndLabels: {
        count: 10,
        ticks: { color: "#888" },
        labels: { fontSize: 10, offset: 7 }
      },
      title: { text: "Year-over-year Change [%]", fontSize: 11, fontWeight: 700, offset: 31 }
    })
    .createGrid({
      horizontal: { color: "#ddd", lineWidth: 1 },
      vertical: { values: [1293840000000, 1325376000000, 1356998400000, 1388534400000, 1420070400000, 1451606400000, 1483228800000, 1514764800000, 1546300800000, 1577836800000, 1609459200000, 1640995200000, 1672531200000], color: "#ddd", lineWidth: 1 }
    })
    .createTitle({
      text: "Year over Year change in Lower48 Natural Gas storage",
      offset: -3,
      titleStyle: { fontSize: 13, fontWeight: 700 }
    })
    .editTitle({ align: "center" });
}