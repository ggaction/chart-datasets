import { chart } from "ggaction";
import data from "./data.json";

// DOCS: doc-b11b4627b143730d, doc-76573a465e2b6a33, doc-dfae58344d5a524e

export function buildChart() {
  return chart()
    .createCanvas({ width: 859, height: 242, margin: { left: 53, top: 5, right: 6, bottom: 37 } })
    .createData({ values: data })
    .createComputedData({ id: "temperatureNumber", as: "temperatureNum", expression: { op: "toNumber", operand: { field: "temperature" } } })
    .createTimeUnitData({ id: "dayWeekday", field: "date", unit: "weekday" })
    .createComputedData({
      id: "dayBucket",
      as: "proofBucket",
      expression: {
        op: "add",
        left: { constant: 1325376000000 },
        right: { op: "multiply", left: { field: "date_weekday" }, right: { constant: 86400000 } }
      }
    })
    .createSummaryData({
      id: "dayMean",
      groupBy: ["proofBucket"],
      aggregates: [{ op: "mean", field: "temperatureNum", as: "mean_temperature" }]
    })
    .createSortedData({ id: "dayMeanSorted", sortBy: [{ field: "proofBucket", order: "ascending" }] })
    .createLinePlot({
      x: { field: "proofBucket", fieldType: "temporal", temporalUnit: "timestamp" },
      y: { field: "mean_temperature" },
      guides: false
    })
    .editXScale({ domain: [1325376000000, 1325894400000], nice: false })
    .editYScale({ domain: [55.03, 55.17], zero: false, nice: false })
    .encodeStroke({ value: "#4c78a8" })
    .encodeStrokeWidth({ value: 0.2 })
    .createGrid({
      vertical: {
        values: [
          1325376000000, 1325419200000, 1325462400000, 1325505600000, 1325548800000,
          1325592000000, 1325635200000, 1325678400000, 1325721600000, 1325764800000,
          1325808000000, 1325851200000, 1325894400000
        ]
      },
      horizontal: {
        values: [55.04, 55.06, 55.08, 55.1, 55.12, 55.14, 55.16]
      }
    })
    .editHorizontalGrid({ color: "#ddd" })
    .editVerticalGrid({ color: "#ddd" })
    .createXAxis({
        ticksAndLabels: {
          values: [
            1325376000000, 1325419200000, 1325462400000, 1325505600000, 1325548800000,
            1325592000000, 1325635200000, 1325678400000, 1325721600000, 1325764800000,
            1325808000000, 1325851200000, 1325894400000
          ],
          ticks: { length: 5 },
          labels: {
            fontSize: 10,
            offset: 7,
            flush: true,
            labelMap: [
              { value: 1325376000000, label: "Sun" },
              { value: 1325419200000, label: "Sun" },
              { value: 1325462400000, label: "Mon" },
              { value: 1325505600000, label: "Mon" },
              { value: 1325548800000, label: "Tue" },
              { value: 1325592000000, label: "Tue" },
              { value: 1325635200000, label: "Wed" },
              { value: 1325678400000, label: "Wed" },
              { value: 1325721600000, label: "Thu" },
              { value: 1325764800000, label: "Thu" },
              { value: 1325808000000, label: "Fri" },
              { value: 1325851200000, label: "Fri" },
              { value: 1325894400000, label: "Sat" }
            ]
          }
        },
        title: { text: "date (day)", fontSize: 11 }
    })
    .editXAxisLine({ color: "#888" })
    .editXAxisTicksAndLabels({
      ticks: { color: "#888" },
      labels: { color: "black" }
    })
    .editXAxisTitle({ fontWeight: 700, color: "black" })
    .createYAxis({
        ticksAndLabels: {
          values: [55.04, 55.06, 55.08, 55.1, 55.12, 55.14, 55.16],
          ticks: { length: 5 },
          labels: { fontSize: 10, offset: 7, format: ".2f" }
        },
        title: {
          text: "Mean of temperature",
          fontSize: 11,
          rotation: { value: -90, unit: "degrees" }
        }
    })
    .editYAxisLine({ color: "#888" })
    .editYAxisTicksAndLabels({
      ticks: { color: "#888" },
      labels: { color: "black" }
    })
    .editYAxisTitle({ fontWeight: 700, color: "black" });
}