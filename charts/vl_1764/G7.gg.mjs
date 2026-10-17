import {chart} from "ggaction";
import data from "./data.json";

// DOCS: doc-b11b4627b143730d, doc-76573a465e2b6a33, doc-c2eafbbd16fe3c71

export function buildChart() {
  return chart()
    .createCanvas({width: 845, height: 242, margin: {left: 39, top: 5, right: 6, bottom: 37}})
    .createData({values: data})
    .createComputedData({id: "numeric", as: "proofTemperature", expression: {op: "toNumber", operand: {field: "temperature"}}})
    .createTimeUnitData({id: "time0", field: "date", unit: "minute"})
    .createTimeUnitData({id: "time1", field: "date", unit: "day"})
    .createComputedData({
      id: "bucket",
      as: "proofBucket",
      expression: {
        op: "add",
        left: {constant: 1325376000000},
        right: {op: "subtract", left: {field: "date_minute"}, right: {field: "date_day"}}
      }
    })
    .createSummaryData({
      id: "summary",
      groupBy: "proofBucket",
      aggregates: [{op: "mean", field: "proofTemperature", as: "mean_temperature"}]
    })
    .createLinePlot({
      x: {field: "proofBucket", fieldType: "temporal", temporalUnit: "timestamp"},
      y: {field: "mean_temperature", fieldType: "quantitative"},
      guides: false
    })
    .encodeStroke({value: "#4c78a8"})
    .encodeStrokeWidth({value: 0.2})
    .editXScale({domain: [1325376000000, 1325458740000], nice: false})
    .editYScale({domain: [38, 62], nice: false})
    .createGrid({
      horizontal: {values: [40, 45, 50, 55, 60]},
      vertical: {values: [1325376000000, 1325383200000, 1325390400000, 1325397600000, 1325404800000, 1325412000000, 1325419200000, 1325426400000, 1325433600000, 1325440800000, 1325448000000, 1325455200000]}
    })
    .editHorizontalGrid({color: "#ddd"})
    .editVerticalGrid({color: "#ddd"})
    .createXAxis({
      ticksAndLabels: {
        values: [1325376000000, 1325383200000, 1325390400000, 1325397600000, 1325404800000, 1325412000000, 1325419200000, 1325426400000, 1325433600000, 1325440800000, 1325448000000, 1325455200000],
        ticks: {length: 5},
        labels: {
          fontSize: 10,
          offset: 7,
          flush: true,
          labelMap: [
            {value: 1325376000000, label: "00:00"},
            {value: 1325383200000, label: "02:00"},
            {value: 1325390400000, label: "04:00"},
            {value: 1325397600000, label: "06:00"},
            {value: 1325404800000, label: "08:00"},
            {value: 1325412000000, label: "10:00"},
            {value: 1325419200000, label: "12:00"},
            {value: 1325426400000, label: "14:00"},
            {value: 1325433600000, label: "16:00"},
            {value: 1325440800000, label: "18:00"},
            {value: 1325448000000, label: "20:00"},
            {value: 1325455200000, label: "22:00"}
          ]
        }
      },
      title: {text: "date (hours-minutes)", fontSize: 11}
    })
    .editXAxisLine({color: "#888"})
    .editXAxisTicks({color: "#888"})
    .editXAxisLabels({color: "black"})
    .editXAxisTitle({color: "black", fontWeight: 700})
    .createYAxis({
      ticksAndLabels: {
        values: [40, 45, 50, 55, 60],
        ticks: {length: 5},
        labels: {fontSize: 10, offset: 7}
      },
      title: {text: "Mean of temperature", fontSize: 11, rotation: {value: -90, unit: "degrees"}}
    })
    .editYAxisLine({color: "#888"})
    .editYAxisTicks({color: "#888"})
    .editYAxisLabels({color: "black"})
    .editYAxisTitle({color: "black", fontWeight: 700});
}