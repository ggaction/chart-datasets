import { chart } from "ggaction";
// DOCS: doc-6c2c08869091f6a0, doc-fc11e9fb291905d1
import data from "./data.json";

export function buildChart() {
  return chart().createCanvas({ width: 449, height: 372, margin: { left: 44, top: 10, right: 5, bottom: 62 } })
    .createData({ values: data })
    .createComputedData({ id: "dated", as: "dateMs", expression: { op: "parseTime", operand: { field: "Date" }, format: "auto" } })
    .createComputedData({ id: "priced", as: "dir", expression: { op: "if", condition: { op: "lt", left: { field: "Open" }, right: { field: "Close" } }, then: { constant: "up" }, else: { constant: "down" } } })
    .createRuleMark({ id: "wick", strokeWidth: 1 })
    .encodeX({ field: "dateMs", fieldType: "temporal", temporalUnit: "timestamp" })
    .editXScale({ domain: [1634371200000, 1666627200000], nice: false })
    .encodeYRange({ lower: "Low", upper: "High" })
    .editYScale({ domain: [120, 360], nice: false })
    .encodeStroke({ field: "dir", fieldType: "nominal", scale: { domain: ["up", "down"], range: ["#06982d", "#ae1325"] } })
    .createBarPlot({
      x: { field: "dateMs", fieldType: "temporal", temporalUnit: "timestamp" },
      y: { lower: "Open", upper: "Close" },
      guides: false
    })
    .encodeBarWidth({ pixels: 3 })
    .encodeColor({ field: "dir", fieldType: "nominal", scale: { domain: ["up", "down"], range: ["#06982d", "#ae1325"] } })
    .editBarMark({ stroke: false })
    .createAxes({
      x: {
        line: { color: "#888" },
        ticksAndLabels: {
          values: [1635724800000, 1638316800000, 1640995200000, 1643673600000, 1646092800000, 1648771200000, 1651363200000, 1654041600000, 1656633600000, 1659312000000, 1661990400000, 1664582400000],
          ticks: { color: "#888" },
          labels: {
            labelMap: [
              { value: 1635724800000, label: "01/11/21" },
              { value: 1638316800000, label: "" },
              { value: 1640995200000, label: "01/01/22" },
              { value: 1643673600000, label: "" },
              { value: 1646092800000, label: "01/03/22" },
              { value: 1648771200000, label: "" },
              { value: 1651363200000, label: "01/05/22" },
              { value: 1654041600000, label: "" },
              { value: 1656633600000, label: "01/07/22" },
              { value: 1659312000000, label: "" },
              { value: 1661990400000, label: "01/09/22" },
              { value: 1664582400000, label: "" }
            ],
            fontSize: 10,
            offset: 7,
            rotation: { value: -45, unit: "degrees" },
            color: "black"
          }
        },
        title: { text: "Date", fontSize: 11, fontWeight: 700, color: "black" }
      },
      y: {
        line: { color: "#888" },
        ticksAndLabels: {
          values: [120, 140, 160, 180, 200, 220, 240, 260, 280, 300, 320, 340, 360],
          ticks: { color: "#888" },
          labels: { fontSize: 10, offset: 7, color: "black" }
        },
        title: { text: "Price", fontSize: 11, fontWeight: 700, color: "black", offset: 32.1064453125 }
      }
    })
    .createGrid({
      horizontal: { values: [120, 140, 160, 180, 200, 220, 240, 260, 280, 300, 320, 340, 360], color: "#ddd" },
      vertical: { values: [1635724800000, 1638316800000, 1640995200000, 1643673600000, 1646092800000, 1648771200000, 1651363200000, 1654041600000, 1656633600000, 1659312000000, 1661990400000, 1664582400000], color: "#ddd" }
    });
}