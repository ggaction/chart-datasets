// DOCS: doc-a7656451baafecf6 — encodeDx: Move each independent Text glyph horizontally by finite signed logical pixels.
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({ plot: { width: 480, height: 126 }, margin: { left: 48, right: 94, top: 12, bottom: 37 }, plotBorder: { underlay: true } })
    .createData({ values: data })
    .createComputedData({
      id: "parsed",
      as: "timestamp",
      expression: {
        op: "parseTime",
        operand: {
          op: "concat",
          operands: [
            {
              op: "replaceLiteral",
              operand: {
                op: "replaceLiteral",
                operand: { op: "replaceLiteral", operand: { field: "time" }, search: "/", replacement: "-" },
                search: "/",
                replacement: "-",
              },
              search: " ",
              replacement: "T",
            },
            { constant: "Z" },
          ],
        },
      },
    })
    .createTimeUnitData({ id: "weekdays", field: "timestamp", unit: "weekday" })
    .createComputedData({
      id: "hours",
      as: "hour",
      expression: {
        op: "floor",
        operand: {
          op: "divide",
          left: {
            op: "subtract",
            left: { field: "timestamp" },
            right: {
              op: "multiply",
              left: { op: "floor", operand: { op: "divide", left: { field: "timestamp" }, right: { constant: 86400000 } } },
              right: { constant: 86400000 },
            },
          },
          right: { constant: 3600000 },
        },
      },
    })
    .createComputedData({ id: "counts", as: "numericCount", expression: { op: "toNumber", operand: { field: "count" } } })
    .createSummaryData({
      id: "calendar",
      groupBy: ["hour", "timestamp_weekday"],
      aggregates: [{ op: "sum", field: "numericCount", as: "total" }],
    })
    .createComputedData({
      id: "shifted",
      as: "shift",
      expression: {
        op: "if",
        condition: {
          op: "or",
          operands: [
            { op: "eq", left: { field: "timestamp_weekday" }, right: { constant: 1 } },
            { op: "eq", left: { field: "timestamp_weekday" }, right: { constant: 3 } },
            { op: "eq", left: { field: "timestamp_weekday" }, right: { constant: 5 } },
          ],
        },
        then: { constant: 10 },
        else: { constant: 0 },
      },
    })
    .createTextPlot({
      x: { field: "hour", fieldType: "ordinal", scale: { domain: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23] } },
      y: { field: "timestamp_weekday", fieldType: "ordinal", scale: { domain: [1, 2, 3, 4, 5, 6, 0] } },
      text: { value: "⬢" },
      guides: false,
    })
    .editTextMark({ fontSize: 32, align: "center", dy: 10 })
    .encodeDx({ field: "shift" })
    .encodeColor({
      field: "total",
      fieldType: "quantitative",
      scale: { palette: { name: "blues", count: 11 } },
    })
    .createAxes({
      x: {
        underlay: true,
        line: { color: "#888" },
        ticksAndLabels: {
          ticks: { length: 5, color: "#888", alongOffset: 0.5 },
          labels: {
            fontSize: 10,
            color: "#000",
            offset: 5.5,
            alongOffset: 0.5,
            labelMap: [
              { value: 0, label: "00:00" }, { value: 1, label: "" }, { value: 2, label: "02:00" },
              { value: 3, label: "" }, { value: 4, label: "04:00" }, { value: 5, label: "" },
              { value: 6, label: "06:00" }, { value: 7, label: "" }, { value: 8, label: "08:00" },
              { value: 9, label: "" }, { value: 10, label: "10:00" }, { value: 11, label: "" },
              { value: 12, label: "12:00" }, { value: 13, label: "" }, { value: 14, label: "14:00" },
              { value: 15, label: "" }, { value: 16, label: "16:00" }, { value: 17, label: "" },
              { value: 18, label: "18:00" }, { value: 19, label: "" }, { value: 20, label: "20:00" },
              { value: 21, label: "" }, { value: 22, label: "22:00" }, { value: 23, label: "" },
            ],
          },
        },
        title: { text: "time (hours)", fontSize: 11, fontWeight: "bold", color: "#000", offset: 30.5, alongOffset: 0.5, baseline: "alphabetic" },
      },
      y: {
        underlay: true,
        line: { color: "#888" },
        ticksAndLabels: {
          ticks: { length: 5, color: "#888", alongOffset: 0.5 },
          labels: {
            fontSize: 10,
            color: "#000",
            offset: 6.5,
            alongOffset: 0.890625,
            labelMap: [
              { value: 1, label: "Mon" }, { value: 2, label: "Tue" }, { value: 3, label: "Wed" },
              { value: 4, label: "Thu" }, { value: 5, label: "Fri" }, { value: 6, label: "Sat" },
              { value: 0, label: "Sun" },
            ],
          },
        },
        title: { text: "time (day)", fontSize: 11, fontWeight: "bold", color: "#000", offset: 32.8857421875, alongOffset: 0.5, baseline: "alphabetic" },
      },
    })
    .createLegend({
      offset: 18,
      titleStyle: { fontSize: 11, fontWeight: "bold", color: "#000" },
      labels: { fontSize: 10, color: "#000" },
    })
    .editLegend({
      values: [1, 56],
    })
    .editLegendSymbols({ gradient: { length: 126, thickness: 16 } })
    .editLegendLayout({ titlePadding: 3 })
    .editLegendTitle({ title: "Sum of count" });
}