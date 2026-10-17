// DOCS: doc-b11b4627b143730d, doc-76573a465e2b6a33, doc-c2eafbbd16fe3c71
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({ width: 845, height: 247, margin: { left: 39, top: 10, right: 6, bottom: 37 } })
    .createData({ values: data })
    .createComputedData({ id: "numeric", as: "temperatureNum", expression: { op: "toNumber", operand: { field: "temperature" } } })
    .createTimeUnitData({ id: "time0", field: "date", unit: "second" })
    .createTimeUnitData({ id: "time1", field: "date", unit: "hour" })
    .createComputedData({ id: "bucket", as: "proofBucket", expression: { op: "add", left: { constant: 1325376000000 }, right: { op: "subtract", left: { field: "date_second" }, right: { field: "date_hour" } } } })
    .createSummaryData({ id: "summary", groupBy: ["proofBucket"], aggregates: [{ op: "mean", field: "temperatureNum", as: "meanTemperature" }] })
    .createSortedData({ id: "sorted", sortBy: [{ field: "proofBucket", order: "ascending" }] })
    .createLinePlot({
      x: { field: "proofBucket", fieldType: "temporal", temporalUnit: "timestamp" },
      y: { field: "meanTemperature", fieldType: "quantitative" },
      guides: false
    })
    .encodeStroke({ target: "linePlot", value: "#4c78a8" })
    .encodeStrokeWidth({ target: "linePlot", value: 0.2 })
    .editXScale({ domain: [1325376000000, 1325379598000], nice: false })
    .editYScale({ domain: [40, 75], zero: false, nice: false })
    .createGrid({
      horizontal: { values: [40, 45, 50, 55, 60, 65, 70, 75] },
      vertical: { values: [1325376000000, 1325376300000, 1325376600000, 1325376900000, 1325377200000, 1325377500000, 1325377800000, 1325378100000, 1325378400000, 1325378700000, 1325379000000, 1325379300000] }
    })
    .editHorizontalGrid({ color: "#ddd" })
    .editVerticalGrid({ color: "#ddd" })
    .createXAxis({
      line: {},
      ticksAndLabels: {
          values: [1325376000000, 1325376300000, 1325376600000, 1325376900000, 1325377200000, 1325377500000, 1325377800000, 1325378100000, 1325378400000, 1325378700000, 1325379000000, 1325379300000],
          ticks: { length: 5 },
          labels: { fontSize: 10, offset: 7, flush: true, labelMap: [
  { value: 1325376000000, label: "00:00:00" },
  { value: 1325376300000, label: "00:05:00" },
  { value: 1325376600000, label: "00:10:00" },
  { value: 1325376900000, label: "00:15:00" },
  { value: 1325377200000, label: "00:20:00" },
  { value: 1325377500000, label: "00:25:00" },
  { value: 1325377800000, label: "00:30:00" },
  { value: 1325378100000, label: "00:35:00" },
  { value: 1325378400000, label: "00:40:00" },
  { value: 1325378700000, label: "00:45:00" },
  { value: 1325379000000, label: "00:50:00" },
  { value: 1325379300000, label: "00:55:00" }
] }
        },
        title: { text: "date (minutes-seconds)", fontSize: 11 }
    })
    .editXAxisLine({ color: "#888" })
    .editXAxisTicks({ color: "#888" })
    .editXAxisLabels({ color: "black" })
    .createYAxis({
        line: {},
        ticksAndLabels: {
          values: [40, 45, 50, 55, 60, 65, 70, 75],
          ticks: { length: 5 },
          labels: { fontSize: 10, offset: 7 }
        },
        title: { text: "Mean of temperature", fontSize: 11, rotation: { value: -90, unit: "degrees" } }
    })
    .editXAxisTitle({ color: "black", fontWeight: 700 })
    .editYAxisLine({ color: "#888" })
    .editYAxisTicks({ color: "#888" })
    .editYAxisLabels({ color: "black" })
    .editYAxisTitle({ color: "black", fontWeight: 700 });
}