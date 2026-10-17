// DOCS: doc-6c2c08869091f6a0, doc-fc11e9fb291905d1, doc-ba092ec842bafcc1
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({ width: 474, height: 249, margin: { left: 78, top: 10, right: 73, bottom: 39 } })
    .createData({ values: data })
    .filterData({ id: "year2000", field: "year", predicate: { op: "eq", value: 2000 } })
    .createComputedData({
      id: "genderData",
      as: "gender",
      expression: {
        op: "if",
        condition: { op: "eq", left: { field: "sex" }, right: { constant: 2 } },
        then: { constant: "Female" },
        else: { constant: "Male" }
      }
    })
    .createBarPlot({
      x: { field: "age", fieldType: "ordinal" },
      y: { field: "people", aggregate: "sum" },
      guides: false
    })
    .encodeColor({
      field: "gender",
      layout: "overlay"
    })
    .editColorScale({
      domain: ["Female", "Male"],
      range: ["#e377c2", "#1f77b4"]
    })
    .editBarMark({ opacity: 0.7 })
    .encodeBarWidth({ band: 1 })
    .editXScale({
      domain: [0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90],
      paddingInner: 0.1,
      paddingOuter: 0.05
    })
    .editYScale({ domain: [0, 12000000], nice: false })
    .createXAxis({
      line: { color: "#888" },
      ticksAndLabels: {
        ticks: { color: "#888" },
        labels: { fontSize: 10, offset: 7, rotation: { value: -90, unit: "degrees" } }
      },
      title: { text: "age", fontSize: 11, fontWeight: 700, offset: 28 }
    })
    .createYAxis({
      line: { color: "#888" },
      ticksAndLabels: {
        values: [0, 2000000, 4000000, 6000000, 8000000, 10000000, 12000000],
        ticks: { color: "#888" },
        labels: {
          fontSize: 10,
          offset: 7,
          labelMap: [
            { value: 0, label: "0" },
            { value: 2000000, label: "2,000,000" },
            { value: 4000000, label: "4,000,000" },
            { value: 6000000, label: "6,000,000" },
            { value: 8000000, label: "8,000,000" },
            { value: 10000000, label: "10,000,000" },
            { value: 12000000, label: "12,000,000" }
          ]
        }
      },
      title: { text: "Population", fontSize: 11, fontWeight: 700, offset: 66 }
    })
    .createGrid({
      horizontal: {
        color: "#ddd",
        values: [0, 2000000, 4000000, 6000000, 8000000, 10000000, 12000000]
      },
      vertical: false
    })
    .createLegend({
      channels: ["color"],
      titleStyle: { fontSize: 11, fontWeight: 700 },
      labels: { fontSize: 10 }
    })
    .editLegendSymbols({
      symbol: { width: 10, height: 10, stroke: "none" }
    });
}
