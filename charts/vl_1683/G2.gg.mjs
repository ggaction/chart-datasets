// DOCS: doc-e790db38fc2a278a, doc-2e6240c00cb297cc, doc-e8d8c6aef74192f0
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({
      width: 254,
      height: 247,
      margin: { left: 44, top: 10, right: 10, bottom: 37 }
    })
    .createData({ values: data })
    .filterData({
      id: "goog",
      field: "symbol",
      predicate: { op: "eq", value: "GOOG" }
    })
    .createTimeUnitData({
      id: "googYear",
      field: "date",
      unit: "year"
    })
    .createComputedData({
      id: "googNum",
      as: "price_num",
      expression: { op: "toNumber", operand: { field: "price" } }
    })
    .createScatterPlot({
      x: { field: "date_year", fieldType: "temporal" },
      y: "price_num",
      guides: false
    })
    .editPointMark({ target: "scatterPlot", fill: "transparent", stroke: "#4c78a8" })
    .editPointMark({ target: "scatterPlot", strokeWidth: 2 })
    .editPointMark({ target: "scatterPlot", opacity: 0.3 })
    .encodePointRadius({ target: "scatterPlot", value: Math.sqrt(30) / 2 })
    .createSummaryData({
      id: "googMean",
      groupBy: "date_year",
      aggregates: [{ field: "price_num", op: "mean", as: "mean_price" }]
    })
    .createLinePlot({
      x: { field: "date_year", fieldType: "temporal" },
      y: "mean_price",
      guides: false
    })
    .editLineMark({ target: "linePlot", stroke: "#4c78a8", strokeWidth: 2 })
    .editXScale({ domain: [1072915200000, 1262304000000] })
    .editYScale({ domain: [0, 800] })
    .createGrid({
      vertical: { color: "#ddd" },
      horizontal: { color: "#ddd" }
    })
    .createXAxis({
      line: { color: "#888" },
      ticksAndLabels: {
        values: [
          1072915200000,
          1136073600000,
          1199145600000,
          1262304000000
        ],
        ticks: { length: 5, color: "#888" },
        labels: { fontSize: 10, offset: 7, color: "black", format: "%Y", flush: true }
      },
      title: { text: "date (year)", fontWeight: 700, fontSize: 11, offset: 28 }
    })
    .createYAxis({
      line: { color: "#888" },
      ticksAndLabels: {
        values: [0, 200, 400, 600, 800],
        ticks: { length: 5, color: "#888" },
        labels: { fontSize: 10, offset: 7, color: "black" }
      },
      title: { text: "price, Mean of price", fontWeight: 700, fontSize: 11, offset: 32 }
    });
}