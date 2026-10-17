// DOCS: doc-b11b4627b143730d, doc-76573a465e2b6a33, doc-c2eafbbd16fe3c71
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({ width: 845, height: 247, margin: { left: 39, top: 10, right: 6, bottom: 37 } })
    .createData({ id: "raw", values: data })
    .createComputedData({
      id: "numeric",
      as: "proofTemperature",
      expression: { op: "toNumber", operand: { field: "temperature" } }
    })
    .createTimeUnitData({
      id: "time0",
      field: "date",
      unit: "day"
    })
    .createTimeUnitData({
      id: "time1",
      field: "date",
      unit: "year"
    })
    .createComputedData({
      id: "bucket",
      as: "proofBucket",
      expression: {
        op: "add",
        left: { op: "add", left: { constant: 1325376000000 }, right: { op: "subtract", left: { field: "date_day" }, right: { field: "date_year" } } },
        right: {
          op: "if",
          condition: { op: "and", operands: [
            { op: "neq", left: { field: "date_year" }, right: { constant: 1325376000000 } },
            { op: "gte", left: { op: "subtract", left: { field: "date_day" }, right: { field: "date_year" } }, right: { constant: 5097600000 } }
          ] },
          then: { constant: 86400000 },
          else: { constant: 0 }
        }
      }
    })
    .createSummaryData({
      id: "summary",
      groupBy: "proofBucket",
      aggregates: [{ op: "mean", field: "proofTemperature", as: "proofMean" }]
    })
    .createLinePlot({
      x: { field: "proofBucket", fieldType: "temporal", temporalUnit: "timestamp" },
      y: { field: "proofMean" },
      guides: false
    })
    .encodeStroke({ value: "#4c78a8" })
    .encodeStrokeWidth({ value: 0.2 })
    .editXScale({ domain: [1325376000000, 1356912000000], nice: false })
    .editYScale({ domain: [42, 70], nice: false })
    .createGrid({ horizontal: { color: "#ddd" }, vertical: { color: "#ddd" } })
    .createXAxis({
      line: { color: "#888" },
      ticksAndLabels: {
        values: [1325376000000, 1328054400000, 1330560000000, 1333238400000, 1335830400000, 1338508800000, 1341100800000, 1343779200000, 1346457600000, 1349049600000, 1351728000000, 1354320000000],
        ticks: { length: 5, color: "#888" },
        labels: {
          offset: 7, fontSize: 10, color: "black", flush: true,
          labelMap: [
            { value: 1325376000000, label: "Jan 01" },
            { value: 1328054400000, label: "Feb 01" },
            { value: 1330560000000, label: "Mar 01" },
            { value: 1333238400000, label: "Apr 01" },
            { value: 1335830400000, label: "May 01" },
            { value: 1338508800000, label: "Jun 01" },
            { value: 1341100800000, label: "Jul 01" },
            { value: 1343779200000, label: "Aug 01" },
            { value: 1346457600000, label: "Sep 01" },
            { value: 1349049600000, label: "Oct 01" },
            { value: 1351728000000, label: "Nov 01" },
            { value: 1354320000000, label: "Dec 01" }
          ]
        }
      },
      title: { text: "date (month-date)", fontSize: 11, fontWeight: 700, color: "black" }
    })
    .createYAxis({
      line: { color: "#888" },
      ticksAndLabels: {
        values: [45, 50, 55, 60, 65, 70],
        ticks: { length: 5, color: "#888" },
        labels: { offset: 7, fontSize: 10, color: "black" }
      },
      title: { text: "Mean of temperature", fontSize: 11, fontWeight: 700, color: "black", rotation: { value: -90, unit: "degrees" } }
    });
}