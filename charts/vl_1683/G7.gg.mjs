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
    .encodeStroke({ target: "scatterPlot", value: "#4c78a8" })
    .editPointMark({ target: "scatterPlot", fill: "transparent" })
    .editPointMark({ target: "scatterPlot", strokeWidth: 2 })
    .encodeOpacity({ target: "scatterPlot", value: 0.3 })
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
    .encodeStroke({ target: "linePlot", value: "#4c78a8" })
    .encodeStrokeWidth({ target: "linePlot", value: 2 })
    .editXScale({ domain: [1072915200000, 1262304000000] })
    .editYScale({ domain: [0, 800] })
    .createGrid({
      vertical: true,
      horizontal: true
    })
    .editHorizontalGrid({ color: "#ddd" })
    .editVerticalGrid({ color: "#ddd" })
    .createXAxis({
      line: {},
      ticksAndLabels: {
        values: [
          1072915200000,
          1136073600000,
          1199145600000,
          1262304000000
        ],
        ticks: { length: 5 },
        labels: { fontSize: 10, offset: 7, flush: true }
      },
      title: { text: "date (year)", fontSize: 11, offset: 28 }
    })
    .editXAxisLine({ color: "#888" })
    .editXAxisTicks({ color: "#888" })
    .editXAxisLabels({ color: "black", format: "%Y" })
    .editXAxisTitle({ fontWeight: 700 })
    .createYAxis({
      line: {},
      ticksAndLabels: {
        values: [0, 200, 400, 600, 800],
        ticks: { length: 5 },
        labels: { fontSize: 10, offset: 7 }
      },
      title: { text: "price, Mean of price", fontSize: 11, offset: 32 }
    })
    .editYAxisLine({ color: "#888" })
    .editYAxisTicks({ color: "#888" })
    .editYAxisLabels({ color: "black" })
    .editYAxisTitle({ fontWeight: 700 });
}