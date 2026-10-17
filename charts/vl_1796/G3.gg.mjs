// DOCS: doc-6c2c08869091f6a0, doc-fc11e9fb291905d1
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({ width: 466, height: 397, margin: { left: 21, top: 28, right: 5, bottom: 145 } })
    .createData({ id: "src", values: data })
    .createComputedData({ id: "colorKey", as: "actionKey", expression: { constant: "undefined" } })
    .createComputedData({ id: "dateKey", as: "dateKey", expression: { op: "parseTime", operand: { field: "date" }, format: "%Y-%m-%d" } })
    .createTitle({
      text: "Actions (Timeline)",
      offset: -3,
      titleStyle: { fontSize: 13, fontFamily: "sans-serif" }
    })
    .editTitle({ titleStyle: { fontWeight: 700 } })
    .createBarPlot({
      x: { field: "dateKey", fieldType: "nominal" },
      y: { field: "count", fieldType: "quantitative" },
      guides: false
    })
    .encodeColor({ field: "actionKey", fieldType: "nominal" })
    .editColorScale({ range: ["#4C66D6", "#38C396"] })
    .editXScale({ domain: [1600560000000, 1600646400000, 1600732800000, 1600819200000, 1600905600000, 1600992000000, 1601078400000], paddingInner: 0.1, paddingOuter: 0.05 })
    .editYScale({ domain: [0, 6] })
    .encodeBarWidth({ band: 1 })
    .editBarMark({ strokeWidth: 2 })
    .createAxes({
        x: {
          ticksAndLabels: {
            ticks: { length: 0 },
            labels: {
              offset: 45,
              fontSize: 12,
              fontFamily: "Inter",
              fontWeight: 500,
              color: "rgba(0, 0, 0, 0.4)",
              rotation: { value: 60, unit: "degrees" },
              labelMap: [
                { value: 1600560000000, label: "Sep 20 Su" },
                { value: 1600646400000, label: "Sep 21 Mo" },
                { value: 1600732800000, label: "Sep 22 Tu" },
                { value: 1600819200000, label: "Sep 23 We" },
                { value: 1600905600000, label: "Sep 24 Th" },
                { value: 1600992000000, label: "Sep 25 Fr" },
                { value: 1601078400000, label: "Sep 26 Sa" }
              ]
            }
          },
          title: { text: "date (year-month-date)", fontSize: 11, fontWeight: 700, offset: 112 }
        },
        y: {
          ticksAndLabels: {
            count: 6,
            ticks: { length: 0 },
            labels: { offset: 10, fontSize: 12, fontFamily: "Inter", fontWeight: 500, color: "rgba(0, 0, 0, 0.4)" }
          },
          title: false
        }
      })
    .createLegend({
        position: "bottom",
        offset: 103,
        align: "left"
      })
    .editLegendTitle({ title: "action", fontSize: 11, fontWeight: 700 })

    .editLegend({
        symbol: { layers: [{ type: "point", shape: "circle", size: 6.123724356957945 }] },
        columns: 2,
        labels: { color: "rgba(0, 0, 0, 0.75)", fontSize: 14, fontFamily: "Inter", fontWeight: 600 }
      });
}
