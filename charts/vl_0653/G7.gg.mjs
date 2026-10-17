// DOCS: doc-b11b4627b143730d
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({
      width: 346,
      height: 357,
      margin: { left: 49, top: 35, right: 7, bottom: 22 }
    })
    .editCanvas({ background: "#122b39" })
    .createData({ id: "btc", values: data })
    .createComputedData({
      id: "btcDated",
      as: "date",
      expression: { op: "parseTime", operand: { field: "DATE" }, format: "%d/%m/%Y" }
    })
    .createTimeUnitData({ id: "btcYearly", field: "date", unit: "year" })
    .filterData({
      id: "btcYearRange",
      field: "date_year",
      range: { min: 1451606400000, max: 1609459200000, inclusive: true }
    })
    .createSortedData({ id: "btcSorted", sortBy: [{ field: "date", order: "ascending" }] })
    .createComputedData({
      id: "btcGapFlag",
      as: "gapFlag",
      expression: {
        op: "if",
        condition: { op: "eq", left: { field: "CBBTCUSD" }, right: { constant: "." } },
        then: { constant: 1 },
        else: { constant: 0 }
      }
    })
    .createWindowData({
      id: "btcSegment",
      operations: [{ op: "cumulativeSum", field: "gapFlag", as: "segment" }]
    })
    .filterData({ id: "btcNoGap", field: "gapFlag", predicate: { op: "eq", value: 0 } })
    .createComputedData({
      id: "btcFinal",
      as: "price",
      expression: {
        op: "if",
        condition: { op: "eq", left: { field: "gapFlag" }, right: { constant: 1 } },
        then: { constant: null },
        else: { op: "toNumber", operand: { field: "CBBTCUSD" } }
      }
    })
    .createLinePlot({
      x: {
        field: "date",
        fieldType: "temporal"
      },
      y: {
        field: "price",
        fieldType: "quantitative"
      },
      guides: false
    })
    .editXScale({ domain: [1471392000000, 1629158400000], nice: false })
    .editYScale({ domain: [0, 65000] })
    .encodeGroup({ field: "segment" })
    .encodeStroke({ value: "#f4c245" })
    .encodeStrokeWidth({ value: 2 })
    .createXAxis({
      line: {},
      ticksAndLabels: {
        ticks: { length: 5 },
        labels: { fontSize: 10, fontFamily: "sans-serif", offset: 7 },
        values: [1483228800000, 1514764800000, 1546300800000, 1577836800000, 1609459200000]
      },
      title: false
    })
    .editXAxisLine({ color: "dimgrey" })
    .editXAxisTicks({ color: "pink" })
    .editXAxisLabels({ color: "#00a767", format: "%Y" })
    .createYAxis({
      line: {},
      ticksAndLabels: {
        ticks: { length: 5 },
        labels: { fontSize: 10, fontFamily: "sans-serif", offset: 7 },
        values: [0, 10000, 20000, 30000, 40000, 50000, 60000]
      },
      title: false
    })
    .editYAxisLine({ color: "dimgrey" })
    .editYAxisTicks({ color: "pink" })
    .editYAxisLabels({ color: "#00a767", labelMap: [{ value: 0, label: "$0" }, { value: 10000, label: "$10,000" }, { value: 20000, label: "$20,000" }, { value: 30000, label: "$30,000" }, { value: 40000, label: "$40,000" }, { value: 50000, label: "$50,000" }, { value: 60000, label: "$60,000" }] })
    .createTitle({
      text: "Bitcoin: long run",
      titleStyle: { fontSize: 13, fontFamily: "sans-serif" },
      subtitleStyle: { fontSize: 10, fontStyle: "italic", fontFamily: "sans-serif" }
    })
    .editTitle({ subtitle: "Daily BTC price in USD. Source: Coinbase via FRED", gap: 1, offset: -13 })
    .editTitle({ titleStyle: { fontWeight: 700, color: "#179fdb" }, subtitleStyle: { color: "#179fdb" } });
}