import { chart } from "ggaction";
import data from "./data.json";
// DOCS: doc-6c2c08869091f6a0, doc-fc11e9fb291905d1

export function buildChart() {
  return chart()
    .createCanvas({ width: 104, height: 247, margin: { left: 39, top: 10, right: 5, bottom: 37 } })
    .createData({ id: "raw", values: data })
    .createWindowData({
      id: "lag",
      partitionBy: ["xs"],
      operations: [
        { op: "rowNumber", as: "rank" },
        { op: "lag", field: "ys", as: "lag1", offset: 1, default: 1 },
        { op: "lag", field: "ys", as: "lag2", offset: 2, default: 1 }
      ]
    })
    .createComputedData({
      id: "product",
      as: "prefixProduct",
      expression: {
        op: "multiply",
        left: { op: "multiply", left: { field: "ys" }, right: { field: "lag1" } },
        right: { field: "lag2" }
      }
    })
    .createSummaryData({
      id: "summary",
      groupBy: ["xs"],
      aggregates: [
        { op: "sum", field: "ys", as: "sum_ys" },
        { op: "max", field: "ys", as: "max_ys" },
        { op: "distinct", field: "ys", as: "distinct_ys" },
        { op: { op: "last", orderBy: "rank", order: "ascending" }, field: "prefixProduct", as: "product_ys" }
      ]
    })
    .createBarPlot({ x: "xs", y: "sum_ys", guides: false })
    .encodeBarWidth({ pixels: 18 })
    .editBarMark({ fill: "#4c78a8", stroke: "black", strokeWidth: 1 })
    .createLineMark({ id: "line", data: "summary" })
    .editLineMark({ stroke: "brown", strokeWidth: 2 })
    .encodeX({ field: "xs", fieldType: "ordinal" })
    .encodeY({ field: "product_ys" })
    .createPointMark({ id: "point", data: "summary", shape: "circle" })
    .editPointMark({ fill: "transparent", stroke: "orange", strokeWidth: 2 })
    .encodePointRadius({ value: Math.sqrt(30) / 2, target: "point" })
    .encodeX({ field: "xs", fieldType: "ordinal" })
    .encodeY({ field: "max_ys" })
    .createPointMark({ id: "square", data: "summary", shape: "square" })
    .editPointMark({ fill: "cyan" })
    .encodePointRadius({ value: Math.sqrt(30 / Math.PI), target: "square" })
    .encodeX({ field: "xs", fieldType: "ordinal" })
    .encodeY({ field: "distinct_ys" })
    .editXScale({ type: "band", paddingInner: 0.1, paddingOuter: 0.05 })
    .editYScale({ domain: [0, 35], nice: false })
    .createHorizontalGrid({ values: [0, 5, 10, 15, 20, 25, 30, 35], color: "#ddd" })
    .createAxes({
      x: {
        line: { color: "#888" },
        ticksAndLabels: {
          values: ["A", "B", "C"],
          ticks: { length: 5, color: "#888" },
          labels: { fontSize: 10, offset: 7, color: "black" }
        },
        title: { text: "X", fontSize: 11, fontWeight: 700, color: "black" }
      },
      y: {
        line: { color: "#888" },
        ticksAndLabels: {
          values: [0, 5, 10, 15, 20, 25, 30, 35],
          ticks: { length: 5, color: "#888" },
          labels: { fontSize: 10, offset: 7, color: "black" }
        },
        title: { text: "Y", fontSize: 11, fontWeight: 700, color: "black", rotation: { value: -90, unit: "degrees" } }
      }
    });
}