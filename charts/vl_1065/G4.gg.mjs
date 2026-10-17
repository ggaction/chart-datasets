// DOCS: doc-6c2c08869091f6a0, doc-fc11e9fb291905d1, doc-bedf05337affd6f4, doc-99b0513458edff76
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({
      width: 545,
      height: 487,
      margin: { left: 39, top: 50, right: 6, bottom: 37 }
    })
    .createData({ values: data })
    .filterData({ id: "pyr2000", field: "year", predicate: { op: "eq", value: 2000 } })
    .createComputedData({
      id: "pyrGender",
      as: "gender",
      expression: {
        op: "if",
        condition: { op: "eq", left: { field: "sex" }, right: { constant: 2 } },
        then: { constant: "Female" },
        else: { constant: "Male" }
      }
    })
    .createComputedData({
      id: "pyrSigned",
      as: "signed_people",
      expression: {
        op: "if",
        condition: { op: "eq", left: { field: "sex" }, right: { constant: 2 } },
        then: { op: "negate", operand: { field: "people" } },
        else: { field: "people" }
      }
    })
    .createBarPlot({
      x: {
        field: "signed_people",
        aggregate: "sum"
      },
      y: {
        field: "age",
        fieldType: "ordinal"
      },
      guides: false
    })
    .editXScale({ domain: [-12000000, 12000000] })
    .editYScale({
      domain: [90, 85, 80, 75, 70, 65, 60, 55, 50, 45, 40, 35, 30, 25, 20, 15, 10, 5, 0],
      paddingInner: 0.1,
      paddingOuter: 0.05
    })
    .encodeColor({ field: "gender", layout: "overlay" })
    .editColorScale({ domain: ["Female", "Male"], range: ["#675193", "#ca8861"] })
    .encodeBarWidth({ band: 1 })
    .applyTextMetrics({
      profile: {
        schemaVersion: 1,
        id: "actual-source-pyramid-x-labels-1065",
        measurements: [
          { text: "\u221212M", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 25.296875 },
          { text: "\u221210M", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 25.296875 },
          { text: "\u22128M", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 19.73438262939453 },
          { text: "\u22126M", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 19.734375 },
          { text: "\u22124M", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 19.734375 },
          { text: "\u22122M", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 19.734359741210938 },
          { text: "0M", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 13.90625 },
          { text: "2M", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 13.90625 },
          { text: "4M", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 13.90625 },
          { text: "6M", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 13.90625 },
          { text: "8M", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 13.90625 },
          { text: "10M", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 19.453155517578125 },
          { text: "12M", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 19.453125 }
        ]
      }
    })
    .createXAxis({
      ticksAndLabels: {
        values: [-12000000, -10000000, -8000000, -6000000, -4000000, -2000000, 0, 2000000, 4000000, 6000000, 8000000, 10000000, 12000000],
        labels: {
          fontSize: 10,
          offset: 7,
          flush: true,
          labelMap: [
            { value: -12000000, label: "\u221212M" },
            { value: -10000000, label: "\u221210M" },
            { value: -8000000, label: "\u22128M" },
            { value: -6000000, label: "\u22126M" },
            { value: -4000000, label: "\u22124M" },
            { value: -2000000, label: "\u22122M" },
            { value: 0, label: "0M" },
            { value: 2000000, label: "2M" },
            { value: 4000000, label: "4M" },
            { value: 6000000, label: "6M" },
            { value: 8000000, label: "8M" },
            { value: 10000000, label: "10M" },
            { value: 12000000, label: "12M" }
          ]
        }
      },
      title: { text: "population", fontSize: 11, offset: 27 }
    })
    .editXAxis({
      line: { color: "#888" },
      ticks: { color: "#888" },
      title: { fontWeight: 700 }
    })
    
    .createYAxis({
      ticksAndLabels: { labels: { fontSize: 10, offset: 7 } },
      title: { text: "age", fontSize: 11, offset: 27 }
    })
    .editYAxis({
      line: { color: "#888" },
      ticks: { color: "#888" },
      title: { fontWeight: 700 }
    })
    .createGrid({ vertical: { color: "#ddd" } })
    .createLegend({ position: "top", labels: { fontSize: 10 }, titleStyle: { fontSize: 11, fontWeight: 700 } });
}