// DOCS: doc-6c2c08869091f6a0, doc-fc11e9fb291905d1, doc-ba092ec842bafcc1
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({
      width: 335,
      height: 374,
      margin: { left: 30, top: 52, right: 5, bottom: 22 }
    })
    .editCanvas({ background: "#122b39" })
    .createData({ id: "raw", values: data })
    .filterData({ id: "value1Rows", field: "value1", noneOf: ["null"] })
    .createComputedData({
      id: "value1Num",
      as: "value1Num",
      expression: { op: "toNumber", operand: { field: "value1" } }
    })
    .createBarPlot({
      x: {
        field: "date",
        fieldType: "temporal"
      },
      y: { field: "value1Num" },
      guides: false
    })
    .editXScale({ domain: [739427586206, 1816716413793], nice: false })
    .editYScale({ domain: [-50, 350] })
    .editBarMark({ fill: "rgba(255,255,200, 0.8)" })
    .encodeBarWidth({ pixels: 8 })
    .filterData({ id: "value2Rows", source: "raw", field: "value2", noneOf: ["null"] })
    .createComputedData({
      id: "value2Num",
      as: "value2Num",
      expression: { op: "toNumber", operand: { field: "value2" } }
    })
    .createBarMark({ id: "barPlot2", fill: "orange" })
    .encodeY({ target: "barPlot2", field: "value2Num" })
    .encodeX({ target: "barPlot2", field: "date", fieldType: "temporal" })
    .encodeBarWidth({ target: "barPlot2", pixels: 8 })
    .createTitle({
      text: "UK government - annual borrowing",
      titleStyle: {
        fontSize: 13,
        fontStyle: "normal",
        fontFamily: "sans-serif"
      },
      subtitleStyle: {
        fontSize: 10,
        fontStyle: "italic",
        fontFamily: "sans-serif"
      }
    })
    .editTitle({
      gap: 1,
      titleStyle: { fontWeight: 700, color: "#cbc7cf" },
      subtitleStyle: { fontWeight: 400, color: "#cbc7cf" }
    })
    .editTitle({
      subtitle: "PSNB, £ billions. Actual and forecast. Source: ONS and IFS\n",
      offset: -13,
      alongOffset: -24
    })
    .createXAxis({
      ticksAndLabels: {
        values: [
          788918400000, 946684800000, 1104537600000, 1262304000000,
          1420070400000, 1577836800000, 1735689600000
        ],
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
    .editXAxis({
      line: { color: "#888" },
      ticksAndLabels: { ticks: { color: "#888" }, labels: { color: "#cbc7cf", format: "%Y" } }
    })
    .createYAxis({
      ticksAndLabels: {
        values: [-50, 0, 50, 100, 150, 200, 250, 300, 350],
        labels: {
          fontSize: 10,
          fontFamily: "sans-serif",
          fontWeight: 400,
          offset: 7
        }
      },
      title: false
    })
    .editYAxis({
      line: { color: "#888" },
      ticksAndLabels: {
        ticks: { color: "#888" },
        labels: { color: "#cbc7cf", labelMap: [{ value: -50, label: "−50" }] }
      }
    })
    .createGrid({
      horizontal: {
        values: [-50, 0, 50, 100, 150, 200, 250, 300, 350]
      },
      vertical: false
    })
    .editHorizontalGrid({ color: "aliceblue", lineWidth: 0.5, strokeDash: [1, 1] });
}