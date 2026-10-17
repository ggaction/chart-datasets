import { chart } from "ggaction";
import data from "./data.json";
// DOCS: doc-b11b4627b143730d doc-76573a465e2b6a33 doc-a929fd81abd909f8

export function buildChart() {
  return chart()
    .createCanvas({ width: 845, height: 247, margin: { left: 39, top: 10, right: 6, bottom: 37 } })
    .createData({ values: data })
    .createTimeUnitData({ id: "time0", field: "date", unit: "month" })
    .createTimeUnitData({ id: "time1", field: "date", unit: "year" })
    .createComputedData({ id: "num", as: "proofTemperature", expression: { op: "toNumber", operand: { field: "temperature" } } })
    .createComputedData({
      id: "bucket",
      as: "proofBucket",
      expression: {
        op: "add",
        left: {
          op: "add",
          left: { constant: 1325376000000 },
          right: { op: "subtract", left: { field: "date_month" }, right: { field: "date_year" } }
        },
        right: {
          op: "if",
          condition: {
            op: "and",
            operands: [
              { op: "neq", left: { field: "date_year" }, right: { constant: 1325376000000 } },
              { op: "gte", left: { op: "subtract", left: { field: "date_month" }, right: { field: "date_year" } }, right: { constant: 5097600000 } }
            ]
          },
          then: { constant: 86400000 },
          else: { constant: 0 }
        }
      }
    })
    .createSummaryData({ id: "summary", groupBy: "proofBucket", aggregates: [{ op: "mean", field: "proofTemperature", as: "proofMean" }] })
    .createLinePlot({
      x: { field: "proofBucket", fieldType: "temporal", temporalUnit: "timestamp" },
      y: { field: "proofMean" },
      guides: false
    })
    .editLineMark({ strokeWidth: 0.2 })
    .editXScale({ domain: [1325376000000, 1354320000000], nice: false })
    .editYScale({ domain: [42, 70], zero: false, nice: false })
    .createGrid({
      horizontal: { values: [45, 50, 55, 60, 65, 70], color: "#ddd" },
      vertical: { values: [1325376000000, 1328054400000, 1330560000000, 1333238400000, 1335830400000, 1338508800000, 1341100800000, 1343788800000, 1346467200000, 1349059200000, 1351747200000, 1354320000000], color: "#ddd" }
    })
    .createXAxis({
      ticksAndLabels: {
        values: [1325376000000, 1328054400000, 1330560000000, 1333238400000, 1335830400000, 1338508800000, 1341100800000, 1343788800000, 1346467200000, 1349059200000, 1351747200000, 1354320000000],
        ticks: { length: 5 },
        labels: {
          fontSize: 10,
          offset: 7,
          flush: true,
          labelMap: [
            { value: 1325376000000, label: "Jan" },
            { value: 1328054400000, label: "Feb" },
            { value: 1330560000000, label: "Mar" },
            { value: 1333238400000, label: "Apr" },
            { value: 1335830400000, label: "May" },
            { value: 1338508800000, label: "Jun" },
            { value: 1341100800000, label: "Jul" },
            { value: 1343788800000, label: "Aug" },
            { value: 1346467200000, label: "Sep" },
            { value: 1349059200000, label: "Oct" },
            { value: 1351747200000, label: "Nov" },
            { value: 1354320000000, label: "Dec" }
          ]
        }
      },
      title: { text: "date (month)", fontSize: 11 }
    })
    .editXAxis({
      line: { color: "#888" },
      ticksAndLabels: {
        ticks: { color: "#888" },
        labels: { color: "black" }
      },
      title: { color: "black", fontWeight: 700 }
    })
    .createYAxis({
      ticksAndLabels: {
        values: [45, 50, 55, 60, 65, 70],
        ticks: { length: 5 },
        labels: { fontSize: 10, offset: 7 }
      },
      title: { text: "Mean of temperature", fontSize: 11, rotation: { value: -90, unit: "degrees" } }
    })
    .editYAxis({
      line: { color: "#888" },
      ticksAndLabels: {
        ticks: { color: "#888" },
        labels: { color: "black" }
      },
      title: { color: "black", fontWeight: 700 }
    });
}