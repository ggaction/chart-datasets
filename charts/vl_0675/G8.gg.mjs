// DOCS: doc-b11b4627b143730d, doc-76573a465e2b6a33, doc-c2eafbbd16fe3c71, doc-ba092ec842bafcc1
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({
      width: 345,
      height: 270,
      margin: { top: 48, right: 7, bottom: 22, left: 38 }
    })
    .editCanvas({
      background: "#122b39"
    })
    .createData({ id: "netdebt", values: data })
    .createComputedData({
      id: "valueNum",
      as: "valueNum",
      expression: {
        op: "if",
        condition: { op: "eq", left: { field: "value" }, right: { constant: "" } },
        then: { constant: 0 },
        else: { op: "toNumber", operand: { field: "value" } }
      }
    })
    .createLinePlot({
      x: { field: "date", fieldType: "temporal" },
      y: { field: "valueNum", fieldType: "quantitative" },
      guides: false
    })
    .editXScale({ domain: [162864000000, 1661990400000], nice: false })
    .editYScale({ domain: [0, 2800] })
    .encodeStroke({ value: "#ff9a00" })
    .encodeStrokeWidth({ value: 2 })
    .editLineMark({ curve: "step" })
    .createXAxis({
      line: {},
      ticksAndLabels: {
        values: [
          315532800000, 473385600000, 631152000000, 788918400000,
          946684800000, 1104537600000, 1262304000000, 1420070400000,
          1577836800000
        ],
        ticks: {},
        labels: {
          fontSize: 10,
          fontFamily: "sans-serif",
          fontWeight: 400,
          offset: 7,
          flush: true
        }
      },
      title: false
    })
    .editXAxisLabels({
      color: "#cbc7cf",
      format: "%Y"
    })
    .createYAxis({
      line: {},
      ticksAndLabels: {
        values: [0, 500, 1000, 1500, 2000, 2500],
        ticks: {},
        labels: {
          fontSize: 10,
          fontFamily: "sans-serif",
          fontWeight: 400,
          offset: 7
        }
      },
      title: false
    })
    .editYAxisLabels({
      color: "#cbc7cf",
      format: ","
    })
    .createTitle({
      text: "Net Debt (including public sector banks)",
      titleStyle: { fontSize: 13, fontFamily: "sans-serif" },
      subtitleStyle: { fontSize: 10, fontStyle: "italic", fontFamily: "sans-serif" }
    })
    .editTitle({ align: "left", alongOffset: -32, offset: -12 })
    .editTitle({
      gap: 1,
      titleStyle: { fontWeight: 700, color: "#cbc7cf" },
      subtitleStyle: { fontWeight: 400, color: "#cbc7cf" }
    })
    .editTitle({ subtitle: "\u00a3bn. Source: ONS.\n" });
}