import { chart } from "ggaction";
import data from "./data.json";

// DOCS: doc-dfae58344d5a524e, doc-2a31551f1566fc6b

export function buildChart() {
  return chart()
    .createCanvas({
      width: 853,
      height: 242,
      margin: { left: 47, top: 5, right: 6, bottom: 37 }
    })
    .createData({ values: data })
    .createTimeUnitData({ id: "tMin", field: "date", unit: "minute" })
    .createTimeUnitData({ id: "tHour", field: "date", unit: "hour" })
    .createComputedData({
      id: "tempNum",
      as: "tempNum",
      expression: { op: "toNumber", operand: { field: "temperature" } }
    })
    .createComputedData({
      id: "bucket",
      as: "proofBucket",
      expression: {
        op: "add",
        left: { constant: 1325376000000 },
        right: {
          op: "subtract",
          left: { field: "date_minute" },
          right: { field: "date_hour" }
        }
      }
    })
    .createSummaryData({
      id: "summary",
      groupBy: "proofBucket",
      aggregates: [{ op: "mean", field: "tempNum", as: "proofMean" }]
    })
    .createLinePlot({
      x: { field: "proofBucket", fieldType: "temporal", temporalUnit: "timestamp" },
      y: { field: "proofMean" },
      guides: false
    })
    .editLineMark({ strokeWidth: 0.2 })
    .editXScale({ domain: [1325376000000, 1325379540000], nice: false })
    .editYScale({ domain: [54, 56.6], zero: false, nice: false })
    .createGrid({
      vertical: {
        values: [
          1325376000000, 1325376300000, 1325376600000, 1325376900000,
          1325377200000, 1325377500000, 1325377800000, 1325378100000,
          1325378400000, 1325378700000, 1325379000000, 1325379300000
        ],
        color: "#ddd"
      },
      horizontal: { values: [54, 54.5, 55, 55.5, 56, 56.5], color: "#ddd" }
    })
    .createXAxis({
      line: { color: "#888" },
      ticksAndLabels: {
        values: [
          1325376000000, 1325376300000, 1325376600000, 1325376900000,
          1325377200000, 1325377500000, 1325377800000, 1325378100000,
          1325378400000, 1325378700000, 1325379000000, 1325379300000
        ],
        ticks: { length: 5, color: "#888" },
        labels: { fontSize: 10, offset: 7, color: "black", format: "%H:%M", flush: true }
      },
      title: { text: "date (minutes)", fontSize: 11, fontWeight: 700, color: "black" }
    })
    .createYAxis({
      line: { color: "#888" },
      ticksAndLabels: {
        values: [54, 54.5, 55, 55.5, 56, 56.5],
        ticks: { length: 5, color: "#888" },
        labels: { fontSize: 10, offset: 7, color: "black", format: ".1f" }
      },
      title: { text: "Mean of temperature", fontSize: 11, fontWeight: 700, color: "black" }
    });
}