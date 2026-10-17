// DOCS: doc-6c2c08869091f6a0, doc-fc11e9fb291905d1 — createBarPlot with raw {lower,upper} interval bars; rule layer via createRuleMark + encodeYRange sharing positional scales.
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({ width: 364, height: 242, margin: { left: 39, top: 5, right: 5, bottom: 37 } })
    .createData({ id: "candles", values: data })
    .createComputedData({
      id: "fillColor",
      as: "fill",
      expression: {
        op: "if",
        condition: { op: "lt", left: { field: "open" }, right: { field: "close" } },
        then: { constant: "#06982d" },
        else: { constant: "#ae1325" }
      }
    })
    .createRuleMark({ id: "rule", data: "fillColor" })
    .encodeX({ field: "date", fieldType: "temporal" })
    .encodeYRange({ lower: "low", upper: "high" })
    .encodeStroke({ target: "rule", field: "fill" })
    .editStrokeScale({ target: "rule", domain: ["#06982d", "#ae1325"], range: ["#06982d", "#ae1325"] })
    .createBarPlot({
      x: { field: "date", fieldType: "temporal" },
      y: { lower: "open", upper: "close" },
      guides: false
    })
    .editXScale({ domain: [1243773987096, 1246360412903], nice: false })
    .editYScale({ domain: [25, 33], zero: false })
    .encodeBarWidth({ target: "barPlot", pixels: 5 })
    .encodeColor({ field: "fill", layout: "overlay" })
    .editColorScale({ domain: ["#06982d", "#ae1325"], range: ["#06982d", "#ae1325"] })
    .editBarMark({ target: "barPlot", stroke: false })
    .createXAxis({
      ticksAndLabels: {
        values: [1244332800000, 1244937600000, 1245542400000, 1246147200000],
        ticks: { length: 5 },
        labels: { fontSize: 10, offset: 7 }
      },
      title: { text: "Date in 2009", fontSize: 11, offset: 27.578125 }
    })
    .editXAxisLabels({ format: "%b %d" })
    .editXAxisLine({ color: "#888" })
    .editXAxisTicks({ color: "#888" })
    .editXAxisTitle({ fontWeight: 700 })
    .createYAxis({
      ticksAndLabels: {
        values: [26, 28, 30, 32],
        ticks: { length: 5 },
        labels: { fontSize: 10, offset: 7 }
      },
      title: { text: "low, high, open, close", fontSize: 11, offset: 26.544921875, rotation: { value: -90, unit: "degrees" } }
    })
    .editYAxisLine({ color: "#888" })
    .editYAxisTicks({ color: "#888" })
    .editYAxisTitle({ fontWeight: 700 })
    .createGrid({ horizontal: true, vertical: true })
    .editHorizontalGrid({ color: "#ddd" })
    .editVerticalGrid({ color: "#ddd" });
}