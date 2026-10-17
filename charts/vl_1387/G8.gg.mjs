// DOCS: doc-b11b4627b143730d, doc-8a4f6f06e0d37d5e, doc-f30bfed200b50a98
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({
      width: 246,
      height: 242,
      margin: { top: 5, right: 7, bottom: 37, left: 39 }
    })
    .createData({ values: data })
    .createComputedData({
      id: "dateParsed",
      as: "dateVal",
      expression: { op: "parseTime", operand: { field: "Date" }, format: "auto" }
    })
    .createComputedData({
      id: "timeNumber",
      as: "timeNum",
      expression: { op: "toNumber", operand: { field: "Time" } }
    })
    .createLinePlot({
      x: {
        field: "dateVal",
        fieldType: "temporal"
      },
      y: {
        field: "timeNum"
      },
      guides: false
    })
    .editXScale({ domain: [-1814227200000, 1250380800000], nice: false })
    .editYScale({ domain: [0, 11] })
    .editLineMark({ stroke: "#4c78a8", strokeWidth: 2 })
    .createXAxis({
      line: {},
      ticksAndLabels: {
        values: [-1577923200000, -757382400000, -315619200000, 315532800000, 946684800000],
        ticks: {},
        labels: { fontSize: 10, offset: 7 }
      },
      title: { text: "Date", fontSize: 11, offset: 28 }
    })
    .createYAxis({
      line: {},
      ticksAndLabels: {
        values: [0, 2, 4, 6, 8, 10],
        ticks: {},
        labels: { fontSize: 10, offset: 7 }
      },
      title: { text: "Time", fontSize: 11, offset: 24 }
    })
    .editXAxisLine({ color: "#888" })
    .editXAxisTicks({ color: "#888" })
    .editXAxisLabels({ fontFamily: "sans-serif" })
    .editXAxisTitle({ fontWeight: 700, fontFamily: "sans-serif" })
    .editYAxisLine({ color: "#888" })
    .editYAxisTicks({ color: "#888" })
    .editYAxisLabels({ fontFamily: "sans-serif" })
    .editYAxisTitle({ fontWeight: 700, fontFamily: "sans-serif" })
    .createGrid({ horizontal: true, vertical: true })
    .editHorizontalGrid({ color: "#ddd" })
    .editVerticalGrid({ color: "#ddd" });
}