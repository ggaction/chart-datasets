// DOCS: doc-fc11e9fb291905d1, doc-6c2c08869091f6a0, doc-2bd5de4bd99e314a
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({ width: 860, height: 499, margin: { left: 53, top: 27, right: 7, bottom: 22 } })
    .createData({ values: data })
.filterData({ id: "finiteValue", field: "value", predicate: { op: "neq", value: null } })
    .createComputedData({
      id: "valence",
      as: "valence",
      expression: {
        op: "if",
        condition: { op: "lt", left: { field: "value" }, right: { constant: 0 } },
        then: { constant: "negative" },
        else: { constant: "positive" }
      }
    })
    .createBarPlot({
      x: { field: "date", fieldType: "temporal" },
      y: { field: "value" },
      guides: false
    })
    .encodeColor({ field: "valence", layout: "overlay" })
    .editColorScale({ domain: ["negative", "positive"], range: ["orange", "indigo"] })
    .editBarMark({ stroke: false })
.encodeBarWidth({ pixels: 1.8 })
    .editXScale({ domain: [688199513924, 1652117286075], nice: false, range: [53, 853] })
    .editYScale({ domain: [-0.3, 0.4] })
    .createXAxis({
      line: {},
      ticksAndLabels: {
        ticks: { length: 5 },
        labels: { fontSize: 10, offset: 7 },
        values: [694224000000, 757382400000, 820454400000, 883612800000, 946684800000,
          1009843200000, 1072915200000, 1136073600000, 1199145600000, 1262304000000,
          1325376000000, 1388534400000, 1451606400000, 1514764800000, 1577836800000,
          1640995200000]
      },
      title: false
    })
    .editXAxis({ line: { color: "#888" }, ticksAndLabels: { ticks: { color: "#888" }, labels: { fontFamily: "sans-serif", format: "%Y" } } })
    .createYAxis({
      line: {},
      ticksAndLabels: {
        ticks: { length: 5 },
        labels: { fontSize: 10, offset: 7 },
        values: [-0.3, -0.25, -0.2, -0.15, -0.1, -0.05, 0, 0.05, 0.1, 0.15, 0.2, 0.25, 0.3, 0.35, 0.4]
      },
      title: { text: "Year of Year Growth [%]", fontSize: 11, offset: 40 }
    })
    .editYAxis({ line: { color: "#888" }, ticksAndLabels: { ticks: { color: "#888" }, labels: { fontFamily: "sans-serif", format: ".0%" } }, title: { fontWeight: 700 } })
    .createGrid({ horizontal: true, vertical: true })
    .editGrid({ horizontal: { color: "#ddd" }, vertical: { color: "#ddd" } })
    .createTitle({
      text: "CASS Freight Index",
      titleStyle: { fontSize: 13, fontWeight: 700, fontFamily: "sans-serif" },
      offset: -13
    })
    .editTitle({ align: "center" });
}