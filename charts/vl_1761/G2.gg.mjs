// DOCS: doc-dfae58344d5a524e doc-2a31551f1566fc6b doc-9afe7f555707120e
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({ width: 853, height: 247, margin: { left: 47, top: 10, right: 6, bottom: 37 } })
    .createData({ values: data })
    .createComputedData({ id: "numeric", as: "proofTemperature", expression: { op: "toNumber", operand: { field: "temperature" } } })
    .createTimeUnitData({ id: "day", field: "date", unit: "day" })
    .createTimeUnitData({ id: "month", field: "date", unit: "month" })
    .createComputedData({ id: "bucket", as: "proofBucket", expression: { op: "add", left: { constant: 1325376000000 }, right: { op: "subtract", left: { field: "date_day" }, right: { field: "date_month" } } } })
    .createSummaryData({ id: "summary", groupBy: ["proofBucket"], aggregates: [{ op: "mean", field: "proofTemperature", as: "proofMean" }] })
    .createSortedData({ id: "sorted", sortBy: [{ field: "proofBucket", order: "ascending" }] })
    .createLinePlot({ x: { field: "proofBucket", fieldType: "temporal", temporalUnit: "timestamp" }, y: { field: "proofMean" }, guides: false })
    .editLineMark({ stroke: "#4c78a8", strokeWidth: 0.2 })
    .editXScale({ domain: [1325376000000, 1327968000000], nice: false })
    .editYScale({ domain: [54.9, 55.8], zero: false })
    .createGrid({ horizontal: { values: [55, 55.2, 55.4, 55.6, 55.8], color: "#ddd" }, vertical: { values: [1325376000000, 1325548800000, 1325721600000, 1325894400000, 1326067200000, 1326240000000, 1326412800000, 1326585600000, 1326758400000, 1326931200000, 1327104000000, 1327276800000, 1327449600000, 1327622400000, 1327795200000, 1327968000000], color: "#ddd" } })
    .createXAxis({
      line: { color: "#888" },
      ticksAndLabels: {
        values: [1325376000000, 1325548800000, 1325721600000, 1325894400000, 1326067200000, 1326240000000, 1326412800000, 1326585600000, 1326758400000, 1326931200000, 1327104000000, 1327276800000, 1327449600000, 1327622400000, 1327795200000, 1327968000000],
        ticks: { length: 5, color: "#888" },
        labels: {
          fontSize: 10, offset: 7, color: "black", flush: true,
          labelMap: [
            { value: 1325376000000, label: "01" },
            { value: 1325548800000, label: "03" },
            { value: 1325721600000, label: "05" },
            { value: 1325894400000, label: "07" },
            { value: 1326067200000, label: "09" },
            { value: 1326240000000, label: "11" },
            { value: 1326412800000, label: "13" },
            { value: 1326585600000, label: "15" },
            { value: 1326758400000, label: "17" },
            { value: 1326931200000, label: "19" },
            { value: 1327104000000, label: "21" },
            { value: 1327276800000, label: "23" },
            { value: 1327449600000, label: "25" },
            { value: 1327622400000, label: "27" },
            { value: 1327795200000, label: "29" },
            { value: 1327968000000, label: "31" }
          ]
        }
      },
      title: { text: "date (date)", fontSize: 11, fontWeight: 700, color: "black" }
    })
    .createYAxis({
      line: { color: "#888" },
      ticksAndLabels: {
        values: [55, 55.2, 55.4, 55.6, 55.8],
        ticks: { length: 5, color: "#888" },
        labels: { fontSize: 10, offset: 7, color: "black", format: ".1f" }
      },
      title: { text: "Mean of temperature", fontSize: 11, fontWeight: 700, color: "black", rotation: { value: -90, unit: "degrees" } }
    });
}