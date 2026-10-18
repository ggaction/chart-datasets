// DOCS: doc-6c2c08869091f6a0, doc-fc11e9fb291905d1, doc-fb3b01cca895bdad
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({ width: 444, height: 262, margin: { left: 39, top: 10, right: 5, bottom: 52 } })
    .createData({ values: data })
    .createComputedData({
      id: "candleColor",
      as: "candleColor",
      expression: {
        op: "if",
        condition: { op: "lt", left: { field: "open" }, right: { field: "close" } },
        then: { constant: "#06982d" },
        else: { constant: "#ae1325" }
      }
    })
    .createRuleMark({ id: "ruleMark", strokeWidth: 1 })
    .encodeX({ target: "ruleMark", field: "date", fieldType: "temporal" })
    .editXScale({ target: "ruleMark", domain: [1243747938461, 1249064861538], nice: false })
    .encodeYRange({ target: "ruleMark", lower: "low", upper: "high" })
    .editYScale({ target: "ruleMark", domain: [23, 34], zero: false })
    .encodeStroke({ target: "ruleMark", field: "candleColor" })
    .editStrokeScale({
      target: "ruleMark",
      domain: ["#06982d", "#ae1325"],
      range: ["#06982d", "#ae1325"]
    })
    .createBarPlot({
      x: { field: "date", fieldType: "temporal" },
      y: { lower: "open", upper: "close" },
      guides: false
    })
    .encodeBarWidth({ pixels: 5 })
    .encodeColor({ field: "candleColor", layout: "overlay" })
    .editColorScale({
      target: "barPlot",
      domain: ["#06982d", "#ae1325"],
      range: ["#06982d", "#ae1325"]
    })
    .editBarMark({ stroke: false })
    .createAxes({
      x: {
        line: {},
        ticksAndLabels: {
          values: [
            1244332800000, 1244937600000, 1245542400000, 1246147200000,
            1246752000000, 1247356800000, 1247961600000, 1248566400000
          ],
          ticks: {},
          labels: { fontSize: 10, offset: 7, format: "%m/%d", rotation: { value: -45, unit: "degrees" } }
        },
        title: { text: "Date in 2009", fontSize: 11, fontWeight: 700, offset: 42.3441162109375 }
      },
      y: {
        line: {},
        ticksAndLabels: {
          values: [24, 26, 28, 30, 32, 34],
          ticks: {},
          labels: { fontSize: 10, offset: 7 }
        },
        title: { text: "Price", fontSize: 11, fontWeight: 700, offset: 26.544921875 }
      }
    })
    .createGrid({ horizontal: { color: "#ddd" }, vertical: { color: "#ddd" } });
}
