// DOCS: doc-b11b4627b143730d, doc-071c93dff3a5ea2e, doc-76573a465e2b6a33, doc-8a4f6f06e0d37d5e, doc-f30bfed200b50a98
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({
      width: 255,
      height: 247,
      margin: { left: 44, top: 10, right: 11, bottom: 37 }
    })
    .createData({ id: "stocks", values: data })
    .filterData({
      id: "goog",
      field: "symbol",
      predicate: { op: "eq", value: "GOOG" }
    })
    .createComputedData({
      id: "googTs",
      as: "ts",
      expression: { op: "parseTime", operand: { field: "date" }, format: "auto" }
    })
    .createComputedData({
      id: "googNum",
      as: "priceNum",
      expression: { op: "toNumber", operand: { field: "price" } }
    })
    .createLinePlot({
      x: {
        field: "ts",
        fieldType: "temporal"
      },
      y: {
        field: "priceNum"
      },
      guides: false
    })
    .editXScale({ target: "linePlot", domain: [1091318400000, 1267401600000], nice: false })
    .editYScale({ target: "linePlot", domain: [0, 800] })
    .editLineMark({ stroke: "green", strokeWidth: 2 })
    .createScatterPlot({
      x: { field: "ts", fieldType: "temporal" },
      y: { field: "priceNum" },
      guides: false,
    })
    .editXScale({ target: "scatterPlot", domain: [1091318400000, 1267401600000], nice: false })
    .editYScale({ target: "scatterPlot", domain: [0, 800] })
    .editPointMark({ target: "scatterPlot", fill: "purple", stroke: false })
    .encodePointRadius({ value: 2.7386127875258306 })
    .createXAxis({
      line: { color: "#888" },
      ticksAndLabels: {
        ticks: { color: "#888", length: 5 },
        labels: { format: "%Y", fontSize: 10, offset: 7, fontFamily: "sans-serif", flush: true }
      },
      title: { text: "date", fontSize: 11, fontWeight: "bold", offset: 28 }
    })
    .createYAxis({
      line: { color: "#888" },
      ticksAndLabels: {
        ticks: { color: "#888", length: 5 },
        labels: { fontSize: 10, offset: 7, fontFamily: "sans-serif" }
      },
      title: { text: "price", fontSize: 11, fontWeight: "bold", offset: 35 }
    })
    .createGrid({
      horizontal: { color: "#ddd", lineWidth: 1 },
      vertical: { color: "#ddd", lineWidth: 1 }
    });
}