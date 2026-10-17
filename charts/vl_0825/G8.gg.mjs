// DOCS: doc-b11b4627b143730d, doc-76573a465e2b6a33, doc-8a4f6f06e0d37d5e
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({ width: 1280, height: 357, margin: { left: 43, top: 35, right: 7, bottom: 22 } })
    .createData({ values: data })
    .createComputedData({ id: "btcDated", as: "date", expression: { op: "parseTime", operand: { field: "DATE" }, format: "%d/%m/%Y" } })
    .createComputedData({ id: "btcGap", as: "gapFlag", expression: { op: "if", condition: { op: "eq", left: { field: "CBBTCUSD" }, right: { constant: "." } }, then: { constant: 1 }, else: { constant: 0 } } })
    .filterData({ id: "btcFiltered", field: "date", range: { min: 1451606400000, max: 1640995199999 } })
    .createSortedData({ id: "btcSorted", sortBy: [{ field: "date", order: "ascending" }] })
    .createWindowData({ id: "btcSegments", operations: [{ op: "cumulativeSum", field: "gapFlag", as: "segment" }] })
    .filterData({ id: "btcGapped", field: "gapFlag", predicate: { op: "eq", value: 0 } })
    .createComputedData({ id: "btcPriced", as: "price", expression: { op: "toNumber", operand: { field: "CBBTCUSD" } } })
    .createLinePlot({
      x: { field: "date", fieldType: "temporal" },
      y: { field: "price", fieldType: "quantitative" },
      guides: false
    })
    .editXScale({ domain: [1471392000000, 1629158400000] })
    .editYScale({ domain: [0, 65000] })
    .encodeStroke({ value: "red" })
    .encodeStrokeWidth({ value: 2 })
    .encodeOpacity({ value: 1 })
    .encodeGroup({ field: "segment", fieldType: "nominal" })
    .createTitle({
      text: "Bitcoin",
      titleStyle: { fontSize: 13, fontFamily: "sans-serif" },
      subtitleStyle: { fontSize: 10, fontStyle: "italic", fontFamily: "sans-serif" }
    })
    .editTitle({ subtitle: "Daily BTC price in USD. Source: Coinbase via FRED", offset: -9, gap: 1 })
    .editTitle({ titleStyle: { fontWeight: 700, color: "black" }, subtitleStyle: { color: "black" } })
    .createXAxis({
      ticksAndLabels: {
        values: [
          1475280000000, 1483228800000, 1490918400000, 1498867200000, 1506816000000,
          1514764800000, 1522540800000, 1530403200000, 1538352000000, 1546300800000,
          1554076800000, 1561939200000, 1569888000000, 1577836800000, 1585699200000,
          1593561600000, 1601510400000, 1609459200000, 1617235200000, 1625097600000
        ],
        ticks: {},
        labels: { fontSize: 10, fontFamily: "sans-serif", offset: 7, flush: true }
      },
      title: false
    })
    .createYAxis({
      ticksAndLabels: {
        values: [0, 10000, 20000, 30000, 40000, 50000, 60000],
        ticks: {},
        labels: { fontSize: 10, fontFamily: "sans-serif", offset: 7 }
      },
      title: false
    })
    .editXAxisLine({ color: "#888" })
    .editYAxisLine({ color: "#888" })
    .editXAxisTicks({ color: "#888" })
    .editYAxisTicks({ color: "#888" })
    .editXAxisLabels({
      color: "black",
      labelMap: [
        { value: 1475280000000, label: "October" },
        { value: 1483228800000, label: "2017" },
        { value: 1490918400000, label: "April" },
        { value: 1498867200000, label: "July" },
        { value: 1506816000000, label: "October" },
        { value: 1514764800000, label: "2018" },
        { value: 1522540800000, label: "April" },
        { value: 1530403200000, label: "July" },
        { value: 1538352000000, label: "October" },
        { value: 1546300800000, label: "2019" },
        { value: 1554076800000, label: "April" },
        { value: 1561939200000, label: "July" },
        { value: 1569888000000, label: "October" },
        { value: 1577836800000, label: "2020" },
        { value: 1585699200000, label: "April" },
        { value: 1593561600000, label: "July" },
        { value: 1601510400000, label: "October" },
        { value: 1609459200000, label: "2021" },
        { value: 1617235200000, label: "April" },
        { value: 1625097600000, label: "July" }
      ]
    })
    .editYAxisLabels({ color: "black", format: ",.0f" })
    .createGrid({ horizontal: true, vertical: true })
    .editHorizontalGrid({ color: "#ddd" })
    .editVerticalGrid({ color: "#ddd" });
}