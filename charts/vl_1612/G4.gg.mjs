// DOCS: doc-f9bdba511759fd0a, doc-471cb9289c01f96c, doc-c13dce37065883df
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({ width: 463, height: 249, margin: { left: 78, top: 10, right: 5, bottom: 39 } })
    .editCanvas({ plotBorder: { color: "#ddd", lineWidth: 1 } })
    .createData({ id: "raw", values: data })
    .createWindowData({ id: "indexed", operations: [{ op: "rowNumber", as: "originalOrder" }] })
    .createSortedData({ id: "sortedAge", sortBy: [{ field: "age" }, { field: "people" }] })
    .createWindowData({ id: "ranked", partitionBy: "age", operations: [{ op: "rowNumber", as: "rank" }] })
    .createComputedData({
      id: "q1Part",
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
      id: "q3Part",
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
      id: "quartiles",
      partitionBy: "age",
      operations: [
        { op: "movingSum", field: "q1Part", as: "q1", frame: { preceding: 30, following: 30 } },
        { op: "movingSum", field: "q3Part", as: "q3", frame: { preceding: 30, following: 30 } }
      ]
    })
    .createComputedData({
      id: "isOutlier",
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
              right: { op: "multiply", left: { constant: 0.5 }, right: { op: "subtract", left: { field: "q3" }, right: { field: "q1" } } }
            }
          },
          {
            op: "gt",
            left: { field: "people" },
            right: {
              op: "add",
              left: { field: "q3" },
              right: { op: "multiply", left: { constant: 0.5 }, right: { op: "subtract", left: { field: "q3" }, right: { field: "q1" } } }
            }
          }
        ]
      }
    })
    .filterData({ id: "outliers", field: "isOutlier", predicate: { op: "eq", value: true } })
    .createSortedData({ id: "outlierSorted", sortBy: [{ field: "originalOrder" }] })
    .createScatterPlot({
      x: { field: "age", fieldType: "ordinal", scale: { id: "x" } },
      y: { field: "people", fieldType: "quantitative", scale: { id: "y" } },
      guides: false
    })
    .editXScale({
      domain: [0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90],
      paddingInner: 0,
      paddingOuter: 0
    })
    .editYScale({ id: "y", domain: [0, 12000000] })
    .editPointMark({ fill: "transparent", stroke: "#4c78a8", strokeWidth: 2 })
    .encodePointRadius({ value: Math.sqrt(30) / 2 })
    .editPointMark({ opacity: 0.7 })
    .createBoxPlot({
      data: "raw",
      x: { field: "age", fieldType: "ordinal", scale: { id: "x" } },
      y: { field: "people", fieldType: "quantitative", scale: { id: "y" } }
    })
    .editBoxPlot({
      outliers: false,
      whisker: { type: "tukey", factor: 0.5, caps: true, capSize: 20, stroke: "black", strokeWidth: 1 },
      width: { pixels: 14 }
    })
    .editBoxPlot({
      box: { fill: "#4c78a8", stroke: "transparent", strokeWidth: 0 },
      median: { stroke: "white", strokeWidth: 1, width: { pixels: 14 } }
    })
    .editRuleMark({ target: "boxPlotWhisker", stroke: "transparent" })
    .encodeOpacity({ value: 0.7, target: "boxPlotMedian" })
    .applyTextMetrics({
      profile: {
        schemaVersion: 1,
        id: "source-full28-fonts",
        measurements: [
          { text: "0", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 5.5625 },
          { text: "5", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 5.5625 },
          { text: "10", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 11.125 },
          { text: "15", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 11.125 },
          { text: "20", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 11.125 },
          { text: "25", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 11.125 },
          { text: "30", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 11.125 },
          { text: "35", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 11.125 },
          { text: "40", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 11.125 },
          { text: "45", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 11.125 },
          { text: "50", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 11.125 },
          { text: "55", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 11.125 },
          { text: "60", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 11.125 },
          { text: "65", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 11.125 },
          { text: "70", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 11.125 },
          { text: "75", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 11.125 },
          { text: "80", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 11.125 },
          { text: "85", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 11.125 },
          { text: "90", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 11.125 },
          { text: "age", fontFamily: "sans-serif", fontSize: 11, fontWeight: 700, fontStyle: "normal", width: 18.96875 },
          { text: "2,000,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 44.5 },
          { text: "4,000,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 44.5 },
          { text: "6,000,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 44.5 },
          { text: "8,000,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 44.5 },
          { text: "10,000,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 50.0625 },
          { text: "12,000,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 50.0625 },
          { text: "people, Population, Population", fontFamily: "sans-serif", fontSize: 11, fontWeight: 700, fontStyle: "normal", width: 161.328125 }
        ]
      }
    })
    .createXAxis({
      line: { color: "#888" },
      ticksAndLabels: {
        values: [0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90],
        ticks: { length: 5, color: "#888" },
        labels: { fontSize: 10, offset: 7, color: "black", rotation: { value: -90, unit: "degrees" } }
      },
      title: { text: "age", fontSize: 11, fontWeight: 700, color: "black", offset: 30 }
    })
    .createYAxis({
      line: { color: "#888" },
      ticksAndLabels: {
        values: [0, 2000000, 4000000, 6000000, 8000000, 10000000, 12000000],
        ticks: { length: 5, color: "#888" },
        labels: { fontSize: 10, offset: 6.5, alongOffset: 0.890625, color: "black", format: ",.0f" }
      },
      title: { text: "people, Population, Population", fontSize: 11, fontWeight: 700, color: "black", offset: 66, rotation: { value: -90, unit: "degrees" } }
    })
    .createGrid({
      vertical: false,
      horizontal: { values: [0, 2000000, 4000000, 6000000, 8000000, 10000000, 12000000], color: "#ddd", scale: "y" }
    });
}