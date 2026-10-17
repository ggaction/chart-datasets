// DOCS: doc-2bd5de4bd99e314a, doc-333a87e52954985d, doc-a4c4c34417abdd05
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({
      width: 853,
      height: 499,
      margin: { top: 27, right: 5, bottom: 22, left: 48 }
    })
    .createData({ values: data })
    .filterData({
      id: "cassDates",
      field: "Date",
      predicate: { op: "neq", value: "" }
    })
    .createComputedData({
      id: "barFill",
      as: "fill",
      expression: {
        op: "if",
        condition: { op: "lt", left: { field: "YoY" }, right: { constant: 0 } },
        then: { constant: "darkorange" },
        else: { constant: "blue" }
      }
    })
    .createBarPlot({
      x: { field: "Date", fieldType: "temporal" },
      y: { field: "YoY" },
      guides: false
    })
    .encodeColor({ field: "fill", layout: "overlay" })
    .editColorScale({ type: "ordinal", domain: ["darkorange", "blue"], range: ["darkorange", "blue"] })
    .encodeBarWidth({ pixels: 3 })
    .editXScale({ domain: [1132845630379, 1649320769620], nice: false, range: [48, 848] })
    .editYScale({ domain: [-0.08, 0.16] })
    .createGuides({
      axes: {
        x: {
          line: {},
          ticksAndLabels: { ticks: { length: 5 }, labels: { fontSize: 10, offset: 7, format: "%Y" } },
          title: false
        },
        y: {
          line: {},
          ticksAndLabels: { ticks: { length: 5 }, labels: { fontSize: 10, offset: 7, format: ".0%" } },
          title: { text: "Year-over-year Index Growth [%]", fontSize: 11, fontWeight: 700, offset: 36 }
        }
      },
      grid: { horizontal: { color: "#ddd" }, vertical: { color: "#ddd" } },
      legend: false
    })
    .createTitle({
      text: "CASS per-mile Truckload Pricing Index",
      titleStyle: { fontSize: 13, fontWeight: 700 },
      offset: -13
    })
    .editTitle({ align: "center" });
}