// DOCS: doc-f9bdba511759fd0a, doc-471cb9289c01f96c, doc-dd737ee8f25890d1
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({ width: 463, height: 249, margin: { left: 78, top: 10, right: 5, bottom: 39 } })
    .editCanvas({ plotBorder: { color: "#ddd", lineWidth: 1 } })
    .applyTextMetrics({ profile: { schemaVersion: 1, id: "source-full28-fonts", measurements: [{ text: "0", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 5.5625 }, { text: "5", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 5.5625 }, { text: "10", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 11.125 }, { text: "15", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 11.125 }, { text: "20", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 11.125 }, { text: "25", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 11.125 }, { text: "30", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 11.125 }, { text: "35", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 11.125 }, { text: "40", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 11.125 }, { text: "45", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 11.125 }, { text: "50", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 11.125 }, { text: "55", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 11.125 }, { text: "60", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 11.125 }, { text: "65", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 11.125 }, { text: "70", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 11.125 }, { text: "75", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 11.125 }, { text: "80", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 11.125 }, { text: "85", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 11.125 }, { text: "90", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 11.125 }, { text: "age", fontFamily: "sans-serif", fontSize: 11, fontWeight: 700, fontStyle: "normal", width: 18.96875 }, { text: "2,000,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 44.5 }, { text: "4,000,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 44.5 }, { text: "6,000,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 44.5 }, { text: "8,000,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 44.5 }, { text: "10,000,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 50.0625 }, { text: "12,000,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 50.0625 }, { text: "people, Population, Population", fontFamily: "sans-serif", fontSize: 11, fontWeight: 700, fontStyle: "normal", width: 161.328125 }] } })
    .createData({ id: "raw", values: data })
    .createWindowData({ id: "orderedRaw", operations: [{ op: "rowNumber", as: "originalOrder" }] })
    .createSortedData({ id: "sortedAges", source: "orderedRaw", sortBy: [{ field: "age" }, { field: "people" }] })
    .createWindowData({ id: "classified", partitionBy: "age", operations: [{ op: "rowNumber", as: "rank" }] })
    .createComputedData({
      id: "q1Rows",
      as: "q1Part",
      expression: {
        op: "if",
        condition: { op: "eq", left: { field: "rank" }, right: { constant: 8 } },
        then: { op: "multiply", left: { field: "people" }, right: { constant: 0.75 } },
        else: {
          op: "if",
          condition: { op: "eq", left: { field: "rank" }, right: { constant: 9 } },
          then: { op: "multiply", left: { field: "people" }, right: { constant: 0.25 } },
          else: { constant: 0 }
        }
      }
    })
    .createComputedData({
      id: "q3Rows",
      as: "q3Part",
      expression: {
        op: "if",
        condition: { op: "eq", left: { field: "rank" }, right: { constant: 22 } },
        then: { op: "multiply", left: { field: "people" }, right: { constant: 0.25 } },
        else: {
          op: "if",
          condition: { op: "eq", left: { field: "rank" }, right: { constant: 23 } },
          then: { op: "multiply", left: { field: "people" }, right: { constant: 0.75 } },
          else: { constant: 0 }
        }
      }
    })
    .createWindowData({
      id: "classifiedStats",
      partitionBy: "age",
      operations: [
        { op: "movingSum", field: "q1Part", as: "q1", frame: { preceding: 30, following: 30 }, minPeriods: 30, missing: "skip" },
        { op: "movingSum", field: "q3Part", as: "q3", frame: { preceding: 30, following: 30 }, minPeriods: 30, missing: "skip" }
      ]
    })
    .createComputedData({
      id: "outlierRows",
      as: "isOutlier",
      expression: {
        op: "or",
        operands: [
          {
            op: "lt",
            left: { field: "people" },
            right: {
              op: "subtract",
              left: { field: "q1" },
              right: { op: "multiply", left: { op: "subtract", left: { field: "q3" }, right: { field: "q1" } }, right: { constant: 0.5 } }
            }
          },
          {
            op: "gt",
            left: { field: "people" },
            right: {
              op: "add",
              left: { field: "q3" },
              right: { op: "multiply", left: { op: "subtract", left: { field: "q3" }, right: { field: "q1" } }, right: { constant: 0.5 } }
            }
          }
        ]
      }
    })
    .filterData({ id: "outlierPoints", field: "isOutlier", predicate: { op: "eq", value: true } })
    .createSortedData({ id: "outliersOrdered", source: "outlierPoints", sortBy: [{ field: "originalOrder" }] })
    .createScatterPlot({ x: { field: "age", fieldType: "ordinal", scale: { id: "x" } }, y: { field: "people", fieldType: "quantitative", scale: { id: "y" } }, guides: false })
    .editXScale({ domain: [0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90], paddingInner: 0, paddingOuter: 0 })
    .editYScale({ domain: [0, 12000000] })
    .encodeStroke({ value: "#4c78a8" })
    .editPointMark({ fill: "transparent", strokeWidth: 2, opacity: 0.7 })
    .encodePointRadius({ value: 2.7386127875258306 })
    .createBoxPlot({ data: "raw", x: { field: "age", fieldType: "ordinal", scale: { id: "x" } }, y: { field: "people", fieldType: "quantitative", scale: { id: "y" } } })
    .editBoxPlot({ outliers: false, width: { pixels: 14 }, whisker: { type: "tukey", factor: 0.5, caps: true, capSize: 20, stroke: "black", strokeWidth: 1 } })
    .editBoxPlot({ box: { fill: "transparent", stroke: "transparent", strokeWidth: 0 }, median: { stroke: "transparent", strokeWidth: 1, width: { pixels: 14 } } })
    .editRuleMark({ target: "boxPlotWhisker", stroke: "transparent" })
    
    
    
    .createSortedData({ id: "classifiedOrdered", source: "outlierRows", sortBy: [{ field: "originalOrder" }] })
    .createComputedData({
      id: "medianPartRows",
      as: "medianPart",
      expression: {
        op: "if",
        condition: {
          op: "or",
          operands: [
            { op: "eq", left: { field: "rank" }, right: { constant: 15 } },
            { op: "eq", left: { field: "rank" }, right: { constant: 16 } }
          ]
        },
        then: { op: "multiply", left: { field: "people" }, right: { constant: 0.5 } },
        else: { constant: 0 }
      }
    })
    .createWindowData({
      id: "medianStats",
      partitionBy: "age",
      operations: [{ op: "movingSum", field: "medianPart", as: "median", frame: { preceding: 30, following: 30 }, minPeriods: 30, missing: "skip" }]
    })
    .filterData({ id: "medianClean", field: "isOutlier", predicate: { op: "eq", value: false } })
    .createSummaryData({
      id: "sourceBoxStats",
      groupBy: ["age"],
      aggregates: [
        { field: "people", op: "min", as: "lowerWhisker" },
        { field: "people", op: "max", as: "upperWhisker" },
        { field: "q1", op: "min", as: "q1" },
        { field: "q3", op: "min", as: "q3" },
        { field: "median", op: "min", as: "median" }
      ]
    })
    .createRuleMark({ id: "sourceLowerWhisker", data: "sourceBoxStats" })
    .encodeX({ field: "age", fieldType: "ordinal", target: "sourceLowerWhisker" })
    .encodeYRange({ lower: "lowerWhisker", upper: "q1", fieldType: "quantitative" })
    .encodeStroke({ value: "black", target: "sourceLowerWhisker" })
    .encodeStrokeWidth({ value: 1, target: "sourceLowerWhisker" })
    .createRuleMark({ id: "sourceUpperWhisker", data: "sourceBoxStats" })
    .encodeX({ field: "age", fieldType: "ordinal", target: "sourceUpperWhisker" })
    .encodeYRange({ lower: "q3", upper: "upperWhisker", fieldType: "quantitative" })
    .encodeStroke({ value: "black", target: "sourceUpperWhisker" })
    .encodeStrokeWidth({ value: 1, target: "sourceUpperWhisker" })
    .createTickMark({ id: "sourceMedian", data: "sourceBoxStats", length: 14 })
    .encodeX({ field: "age", fieldType: "ordinal", target: "sourceMedian" })
    .encodeY({ field: "median", fieldType: "quantitative", target: "sourceMedian" })
    .encodeAngle({ value: 90, target: "sourceMedian" })
    .editTickMark({ stroke: "white", strokeWidth: 1, opacity: 0.7 })
    .createGrid({ horizontal: { values: [0, 2000000, 4000000, 6000000, 8000000, 10000000, 12000000] } })
    .editHorizontalGrid({ color: "#ddd" })
    .createXAxis({
      line: { color: "#888", lineWidth: 1 },
      ticksAndLabels: {
        values: [0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90],
        ticks: { length: 5, color: "#888" },
        labels: { offset: 7, fontSize: 10, color: "black", rotation: { value: -90, unit: "degrees" } }
      },
      title: { text: "age", fontSize: 11, fontWeight: 700, color: "black", offset: 30 }
    })
    .createYAxis({
      line: { color: "#888", lineWidth: 1 },
      ticksAndLabels: {
        values: [0, 2000000, 4000000, 6000000, 8000000, 10000000, 12000000],
        ticks: { length: 5, color: "#888" },
        labels: { offset: 6.5, alongOffset: 0.890625, fontSize: 10, color: "black", format: ",.0f" }
      },
      title: { text: "people, Population, Population", fontSize: 11, fontWeight: 700, color: "black", rotation: { value: -90, unit: "degrees" }, offset: 66 }
    });
}