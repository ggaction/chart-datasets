// DOCS: doc-6c2c08869091f6a0 doc-fc11e9fb291905d1 doc-bedf05337affd6f4
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({
      width: 799,
      height: 449,
      margin: { left: 44, top: 27, right: 5, bottom: 22 }
    })
    .createData({ values: data })
  .filterData({ id: "finiteOil", field: "Crude Oil", predicate: { op: "neq", value: null } })
    .createComputedData({
      id: "crudeOilSign",
      as: "sign",
      expression: {
        op: "if",
        condition: { op: "lt", left: { field: "Crude Oil" }, right: { constant: 0 } },
        then: { constant: "neg" },
        else: { constant: "pos" }
      }
    })
    .createBarPlot({
      x: {
        field: "dt",
        fieldType: "temporal",
        temporalUnit: "auto",
        scale: { type: "time", domain: [1354622983783, 1685015416216], nice: false, range: [44, 794] }
      },
      y: {
        field: "Crude Oil",
        fieldType: "quantitative",
        scale: { domain: [-25, 15] }
      },
      guides: false
    })
    .encodeColor({ field: "sign", layout: "overlay" })
    .editBarMark({ stroke: false })
  .encodeBarWidth({ pixels: 1 })
    .editColorScale({ domain: ["pos", "neg"], range: ["royalblue", "darkred"] })
    .createGrid({
      horizontal: {
        scale: "y",
        color: "#ddd",
        lineWidth: 1,
        values: [-25, -20, -15, -10, -5, 0, 5, 10, 15]
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
    .createAxes({
      x: {
        line: {},
        ticksAndLabels: {
          ticks: {},
          labels: { fontSize: 10, offset: 7, format: "%Y" },
          values: [
            1356998400000, 1388534400000, 1420070400000, 1451606400000,
            1483228800000, 1514764800000, 1546300800000, 1577836800000,
            1609459200000, 1640995200000, 1672531200000
          ]
        },
        title: false
      },
      y: {
        line: {},
        ticksAndLabels: {
          ticks: {},
          labels: { fontSize: 10, offset: 7 },
          values: [-25, -20, -15, -10, -5, 0, 5, 10, 15]
        },
        title: { text: "Year-over-year Change [%]", fontSize: 11, fontWeight: "700", offset: 36 }
      }
    })
    .createTitle({
      text: "Year over Year change in Crude Oil stock",
      titleStyle: { fontSize: 13, fontWeight: "700" },
      offset: -13
    })
    .editTitle({ align: "center" });
}
