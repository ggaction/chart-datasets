// DOCS: doc-e790db38fc2a278a, doc-2e6240c00cb297cc
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({ width: 547, height: 447, margin: { left: 39, top: 10, right: 8, bottom: 37 } })
    .createData({ values: data })
    .filterData({ id: "mpgFiltered", field: "Miles_per_Gallon", predicate: { op: "neq", value: null } })
    .createTimeUnitData({ id: "years", field: "Year", unit: "year" })
    .createWindowData({
      id: "prefix",
      sortBy: [{ field: "Year_year", order: "ascending" }],
      operations: [
        { op: "cumulativeSum", field: "Miles_per_Gallon", as: "prefixSum" },
        { op: "rowNumber", as: "prefixN" },
        { op: "lead", field: "Year_year", as: "nextYear", offset: 1, default: -1 }
      ]
    })
    .createComputedData({
      id: "lastPeer",
      as: "lastPeerMean",
      expression: {
        op: "if",
        condition: { op: "neq", left: { field: "Year_year" }, right: { field: "nextYear" } },
        then: { op: "divide", left: { field: "prefixSum" }, right: { field: "prefixN" } },
        else: { constant: 0 }
      }
    })
    .createWindowData({
      id: "mpgAvg",
      partitionBy: "Year_year",
      operations: [
        {
          op: "movingSum",
          field: "lastPeerMean",
          as: "Average_MPG",
          frame: { preceding: 406, following: 406 },
          minPeriods: 1,
          missing: "skip"
        }
      ]
    })
    .createScatterPlot({
      x: { field: "Year_year", fieldType: "temporal" },
      y: { field: "Miles_per_Gallon" },
      guides: false
    })
    .encodeOpacity({ target: "scatterPlot", value: 0.7 })
    .editPointMark({ fill: "#4c78a8", stroke: false })
    .encodePointRadius({ value: 2.7386 })
    .createLineMark({ id: "meanLine", data: "mpgAvg" })
    .encodeStroke({ target: "meanLine", value: "red" })
    .encodeStrokeWidth({ target: "meanLine", value: 2 })
    .encodeX({ target: "meanLine", field: "Year_year", fieldType: "temporal" })
    .encodeY({ target: "meanLine", field: "Average_MPG" })
    .editXScale({ domain: [0, 378691200000], nice: false })
    .editYScale({ domain: [0, 50] })
    .createAxes({
      x: {
        line: { color: "#888" },
        ticksAndLabels: {
          values: [0, 31536000000, 63072000000, 94694400000, 126230400000, 157766400000, 189302400000, 220924800000, 252460800000, 283996800000, 315532800000, 347155200000, 378691200000],
          ticks: { length: 5, color: "#888" },
          labels: {
            format: "%Y",
            flush: true,
            fontSize: 10,
            color: "black",
            offset: 7
          }
        },
        title: { text: "Year (year)", fontSize: 11, fontWeight: 700, offset: 28 }
      },
      y: {
        line: { color: "#888" },
        ticksAndLabels: {
          values: [0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50],
          ticks: { length: 5, color: "#888" },
          labels: {
            fontSize: 10,
            color: "black",
            offset: 7
          }
        },
        title: { text: "Miles per gallon", fontSize: 11, fontWeight: 700, offset: 27, rotation: { value: -90, unit: "degrees" } }
      }
    })
    .createGrid({
      horizontal: { color: "#ddd" },
      vertical: { color: "#ddd" }
    });
}