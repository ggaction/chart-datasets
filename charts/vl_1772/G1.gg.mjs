import { chart } from "ggaction";
import data from "./data.json";

// DOCS: doc-b11b4627b143730d, doc-76573a465e2b6a33, doc-c2eafbbd16fe3c71
export function buildChart() {
  return chart()
    .createCanvas({
      width: 845,
      height: 242,
      margin: { left: 39, top: 5, right: 6, bottom: 37 }
    })
    .createData({ values: data })
    .createTimeUnitData({ id: "timeYear", field: "date", unit: "year" })
    .createComputedData({
      id: "tempNum",
      as: "tempNum",
      expression: { op: "toNumber", operand: { field: "temperature" } }
    })
    .createComputedData({
      id: "yearBucket",
      as: "yearBucket",
      expression: { field: "date_year" }
    })
    .createSummaryData({
      id: "yearMean",
      groupBy: ["yearBucket"],
      aggregates: [{ op: "mean", field: "tempNum", as: "meanTemp" }]
    })
    .createLinePlot({
      x: { field: "yearBucket", fieldType: "temporal", temporalUnit: "timestamp" },
      y: { field: "meanTemp", fieldType: "quantitative", scale: { zero: false } },
      guides: false
    })
    .editLineMark({ target: "linePlot", strokeWidth: 0.2 })
    .editXScale({
      type: "time",
      domain: [1262304000000, 1325376000000],
      nice: false
    })
    .editYScale({ domain: [52, 58.5], zero: false, nice: false })
    .createGuides({
      grid: { horizontal: { color: "#ddd" }, vertical: { color: "#ddd" } },
      axes: {
        x: {
          line: { color: "#888" },
          ticksAndLabels: {
            values: [1262304000000, 1293840000000, 1325376000000],
            ticks: { length: 5, color: "#888" },
            labels: { fontSize: 10, offset: 7, color: "black", format: "%Y", flush: true }
          },
          title: {
            text: "date (year)",
            fontSize: 11,
            fontWeight: 700,
            color: "black"
          }
        },
        y: {
          line: { color: "#888" },
          ticksAndLabels: {
            values: [52, 53, 54, 55, 56, 57, 58],
            ticks: { length: 5, color: "#888" },
            labels: { fontSize: 10, offset: 7, color: "black" }
          },
          title: {
            text: "Mean of temperature",
            fontSize: 11,
            fontWeight: 700,
            color: "black"
          }
        }
      }
    });
}