import { chart } from "ggaction";
import data from "./data.json";
import hours from "./labels-data.json";

// DOCS: doc-8a4f6f06e0d37d5e
export function buildChart() {
  return chart()
    .createCanvas({
      plot: { width: 400, height: 300 },
      margin: { left: 41, right: 5, top: 11, bottom: 54 },
      plotBorder: { underlay: true }
    })
    .createData({ values: data })
    .createComputedData({
      id: "sleepCondition",
      as: "sourceSleepEnough",
      expression: {
        op: "gte",
        left: { op: "subtract", left: { field: "end" }, right: { field: "start" } },
        right: { constant: 8 }
      }
    })
    .createComputedData({
      id: "sleepValues",
      as: "sourceNumericSleep",
      expression: {
        op: "if",
        condition: { op: "eq", left: { field: "total_sleep_hours" }, right: { constant: "" } },
        then: { constant: 0 },
        else: { op: "toNumber", operand: { field: "total_sleep_hours" } }
      }
    })
    .createBarPlot({
      x: {
        field: "date",
        fieldType: "nominal",
        scale: {
          paddingInner: 0.1,
          paddingOuter: 0.05
        }
      },
      y: { lower: "start", upper: "end" },
      guides: false
    })
    .editXScale({
      domain: ["07-26", "07-27", "07-28", "07-29", "07-30", "07-31", "08-01", "08-02", "08-03", "08-04", "08-05", "08-06", "08-07", "Today"]
    })
    .editYScale({
      target: "barPlot",
      domain: [0, 18]
    })
    .encodeBarWidth({ band: 1 })
    .editBarMark({ stroke: false })
    .encodeColor({
      field: "sourceSleepEnough"
    })
    .editColorScale({
      domain: [false, true],
      range: ["#BB0000", "#006600"]
    })
    .createData({ id: "hourLabels", values: hours })
    .createTextMark({ data: "hourLabels", fontSize: 11, fill: "black" })
    .encodeText({ field: "hour_labels" })
    .encodeX({ datum: -3, scale: { id: "pixelX", domain: [0, 400] } })
    .encodeY({ field: "y_labels", scale: { id: "y" } })
    .editTextMark({ align: "right", baseline: "middle", dy: 0.125 })
    .createTextMark({ id: "sleepLabels", data: "sleepValues", fill: "white" })
    .encodeText({ field: "sourceNumericSleep" })
    .encodeX({ field: "date", fieldType: "nominal", scale: { id: "x" } })
    .encodeY({ field: "start", scale: { id: "y" } })
    .editTextMark({ fontSize: 11, align: "center", baseline: "middle" })
    .editTextMark({ dy: -14.875 })
    .createAxes({
      x: {
        scale: "x",
        line: {},
        ticksAndLabels: {
          values: ["07-26", "07-27", "07-28", "07-29", "07-30", "07-31", "08-01", "08-02", "08-03", "08-04", "08-05", "08-06", "08-07", "Today"],
          ticks: { length: 5, alongOffset: 0.5 },
          labels: { fontSize: 10, rotation: { value: -90, unit: "degrees" }, align: "right", offset: 7.5, alongOffset: 0.390625 }
        },
        title: { text: "date", fontSize: 11, fontWeight: 700, color: "#000", offset: 44.2626953125, alongOffset: 0.5 },
        underlay: true
      },
      y: {
        scale: "y",
        line: {},
        ticksAndLabels: {
          values: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18],
          ticks: { length: 5, alongOffset: 0.5 },
          labels: {
            labelMap: [
              { value: 0, label: "" },
              { value: 1, label: "" },
              { value: 2, label: "" },
              { value: 3, label: "" },
              { value: 4, label: "" },
              { value: 5, label: "" },
              { value: 6, label: "" },
              { value: 7, label: "" },
              { value: 8, label: "" },
              { value: 9, label: "" },
              { value: 10, label: "" },
              { value: 11, label: "" },
              { value: 12, label: "" },
              { value: 13, label: "" },
              { value: 14, label: "" },
              { value: 15, label: "" },
              { value: 16, label: "" },
              { value: 17, label: "" },
              { value: 18, label: "" }
            ]
          }
        },
        title: { text: "sleep time", fontSize: 11, fontWeight: 700, color: "#000", offset: 29.421875, alongOffset: 0.5, rotation: { value: -90, unit: "degrees" } },
        underlay: true
      }
    })
    .editXAxis({
      ticksAndLabels: { labels: { color: "#000" } }
    })
    .editXAxisLine({
      color: "#888"
    })
    .editXAxisTicks({
      color: "#888"
    })
    .editYAxisLine({
      color: "#888"
    })
    .editYAxisTicks({
      color: "#888"
    })
    .createGrid({
      horizontal: { scale: "y", color: "#ddd", values: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18] },
      vertical: false
    });
}