import { chart } from "ggaction";
import data from "./data.json";

// DOCS: doc-b7f1bdfb89789cd6, doc-43945b96d1a9cce2, doc-fb3b01cca895bdad

export function buildChart() {
  return chart()
    .createCanvas({ width: 845, height: 242, margin: { left: 39, top: 5, right: 6, bottom: 37 } })
    .createData({ values: data })
    .createTimeUnitData({ id: "timeHour", field: "date", unit: "hour" })
    .createTimeUnitData({ id: "timeDay", field: "date", unit: "day" })
    .createComputedData({ id: "bucket", as: "proofBucket", expression: { op: "add", left: { constant: 1325376000000 }, right: { op: "subtract", left: { field: "date_hour" }, right: { field: "date_day" } } } })
    .createComputedData({ id: "numeric", as: "proofTemperature", expression: { op: "toNumber", operand: { field: "temperature" } } })
    .createSummaryData({ id: "summary", groupBy: ["proofBucket"], aggregates: [{ op: "mean", field: "proofTemperature", as: "proofMean" }] })
    .createLinePlot({ x: { field: "proofBucket", fieldType: "temporal", temporalUnit: "timestamp" }, y: { field: "proofMean" }, guides: false })
    .editXScale({ domain: [1325376000000, 1325455200000], nice: false })
    .editYScale({ domain: [38, 58], zero: false, nice: false })
    .editLineMark({ strokeWidth: 0.2 })
    .createGrid({ horizontal: { color: "#ddd" }, vertical: { color: "#ddd" } })
    .createXAxis({
      line: {},
      ticksAndLabels: {
        values: [1325376000000, 1325386800000, 1325397600000, 1325408400000, 1325419200000, 1325430000000, 1325440800000, 1325451600000],
        ticks: { length: 5 },
        labels: { fontSize: 10, offset: 7, format: "%H:%M", flush: true }
      },
      title: { text: "date (hours)", fontSize: 11 }
    })
    .editXAxisLine({ color: "#888" })
    .editXAxisTicks({ color: "#888" })
    .editXAxisLabels({ color: "black" })
    .editXAxisTitle({ color: "black", fontWeight: 700 })
    .createYAxis({
      line: {},
      ticksAndLabels: {
        values: [40, 45, 50, 55],
        ticks: { length: 5 },
        labels: { fontSize: 10, offset: 7 }
      },
      title: { text: "Mean of temperature", fontSize: 11, rotation: { value: -90, unit: "degrees" } }
    })
    .editYAxisLine({ color: "#888" })
    .editYAxisTicks({ color: "#888" })
    .editYAxisLabels({ color: "black" })
    .editYAxisTitle({ color: "black", fontWeight: 700 });
}