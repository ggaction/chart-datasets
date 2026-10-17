import { chart } from "ggaction";
import data from "./data.json";
// DOCS: doc-dfae58344d5a524e doc-b11b4627b143730d doc-76573a465e2b6a33

export function buildChart() {
  return chart()
    .createCanvas({ width: 845, height: 242, margin: { left: 39, top: 5, right: 6, bottom: 37 } })
    .createData({ values: data })
    .createComputedData({
      id: "proofTemperatureData",
      as: "proofTemperature",
      expression: { op: "toNumber", operand: { field: "temperature" } }
    })
    .createTimeUnitData({ id: "proofQuarterData", field: "date", unit: "quarter" })
    .createTimeUnitData({ id: "proofYearData", field: "date", unit: "year" })
    .createComputedData({
      id: "proofBucketData",
      as: "proofBucket",
      expression: {
        op: "add",
        left: {
          op: "add",
          left: { constant: 1325376000000 },
          right: { op: "subtract", left: { field: "date_quarter" }, right: { field: "date_year" } }
        },
        right: {
          op: "if",
          condition: {
            op: "and",
            operands: [
              { op: "neq", left: { field: "date_year" }, right: { constant: 1325376000000 } },
              { op: "gte", left: { op: "subtract", left: { field: "date_quarter" }, right: { field: "date_year" } }, right: { constant: 5097600000 } }
            ]
          },
          then: { constant: 86400000 },
          else: { constant: 0 }
        }
      }
    })
    .createSummaryData({
      id: "proofSummaryData",
      groupBy: ["proofBucket"],
      aggregates: [{ op: "mean", field: "proofTemperature", as: "proofMean" }]
    })
    .createLinePlot({
      x: { field: "proofBucket", fieldType: "temporal", temporalUnit: "timestamp" },
      y: { field: "proofMean" },
      guides: false
    })
    .encodeStrokeWidth({ value: 0.2 })
    .editXScale({ domain: [1325376000000, 1349049600000], nice: false })
    .editYScale({ domain: [46, 68], zero: false, nice: false })
    .createXAxis({
      line: {},
      ticksAndLabels: {
        values: [1325376000000, 1333238400000, 1341100800000, 1349049600000],
        ticks: { length: 5 },
        labels: {
          fontSize: 10,
          offset: 7,
          flush: true
        }
      },
      title: { text: "date (quarter)", fontSize: 11 }
    })
    .editXAxis({
      line: { color: "#888" },
      ticksAndLabels: {
        ticks: { color: "#888" },
        labels: {
          color: "black",
          labelMap: [
            { value: 1325376000000, label: "Q1" },
            { value: 1333238400000, label: "Q2" },
            { value: 1341100800000, label: "Q3" },
            { value: 1349049600000, label: "Q4" }
          ]
        }
      },
      title: { fontWeight: 700, color: "black" }
    })
    .createYAxis({
      line: {},
      ticksAndLabels: {
        values: [50, 55, 60, 65],
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
      title: { fontWeight: 700, color: "black" }
    })
    .createGrid({
      vertical: { scale: "x", values: [1325376000000, 1333238400000, 1341100800000, 1349049600000] },
      horizontal: { scale: "y", values: [50, 55, 60, 65] }
    })
    .editGrid({
      vertical: { color: "#ddd" },
      horizontal: { color: "#ddd" }
    });
}