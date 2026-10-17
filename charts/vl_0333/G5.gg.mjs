// DOCS: doc-b30469a9489ccd34, doc-0a1e48878a814143, doc-2bd5de4bd99e314a, doc-88a431a4ce6a169c
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({
      width: 321,
      height: 357,
      margin: { left: 49, top: 35, right: 7, bottom: 22 }
    })
    .editCanvas({ background: "whitesmoke" })
    .createData({ values: data })
    // Source transform: timeParse(datum.DATE, '%d/%m/%Y') as date
    .createComputedData({
      id: "dated",
      as: "date",
      expression: {
        op: "parseTime",
        operand: { field: "DATE" },
        format: "%d/%m/%Y"
      }
    })
    // Source transform: materialize source year partition (UTC year start)
    .createTimeUnitData({ id: "dateYear", field: "date", unit: "year" })
    // Source transform: initial source bounds 2016..2021 on date_year timestamps
    .filterData({
      id: "btcWindow",
      field: "date_year",
      range: { min: 1451606400000, max: 1609459200000 }
    })
    // Source transform: sort date ascending before gap counter
    .createSortedData({
      id: "btcSorted",
      sortBy: [{ field: "date", order: "ascending" }]
    })
    // CBBTCUSD raw string "." marks the source-undefined dot: derive gap flag
    .createComputedData({
      id: "gapFlagged",
      as: "gapFlag",
      expression: {
        op: "if",
        condition: {
          op: "eq",
          left: { field: "CBBTCUSD" },
          right: { constant: "." }
        },
        then: { constant: 1 },
        else: { constant: 0 }
      }
    })
    // Numeric price: lazy conditional, flag 1 -> null else toNumber of raw string
    .createComputedData({
      id: "btcPriced",
      as: "price",
      expression: {
        op: "if",
        condition: {
          op: "eq",
          left: { field: "gapFlag" },
          right: { constant: 1 }
        },
        then: { constant: null },
        else: { op: "toNumber", operand: { field: "CBBTCUSD" } }
      }
    })
    // Source transform: cumulativeSum gapFlag into segment BEFORE filtering flag 0
    .createWindowData({
      id: "btcSegments",
      sortBy: [{ field: "date", order: "ascending" }],
      operations: [{ op: "cumulativeSum", field: "gapFlag", as: "segment" }]
    })
    // Source transform: keep only defined vertices (gapFlag 0)
    .filterData({
      id: "btcValid",
      field: "gapFlag",
      predicate: { op: "eq", value: 0 }
    })
    .createTitle({
      text: "Bitcoin: long run",
      titleStyle: {
        fontSize: 13,
        fontWeight: 700,
        color: "#0d0d0d",
        fontFamily: "sans-serif"
      },
      subtitleStyle: {
        fontSize: 10,
        fontStyle: "italic",
        color: "#0d0e0e",
        fontFamily: "sans-serif"
      }
    })
    .editTitle({ offset: -13, gap: 1, alongOffset: -43.15 })
    .editTitle({ subtitle: "Daily BTC price in USD. Source: Coinbase via FRED" })
    .createLinePlot({
      x: {
        field: "date",
        fieldType: "temporal",
        temporalUnit: "auto"
      },
      y: {
        field: "price",
        fieldType: "quantitative"
      },
      guides: false
    })
    .editXScale({ domain: [1471392000000, 1629158400000], nice: false })
    .editYScale({ domain: [0, 65000], zero: true, nice: false })
    .encodeGroup({ field: "segment" })
    .encodeStroke({ value: "#314686" })
    .encodeStrokeWidth({ value: 2 })
    .createXAxis({
      line: {},
      ticksAndLabels: {
        values: [
          1483228800000,
          1514764800000,
          1546300800000,
          1577836800000,
          1609459200000
        ],
        ticks: { length: 5 },
        labels: {
          fontSize: 10,
          fontFamily: "sans-serif",
          offset: 7,
          flush: true
        }
      },
      title: false
    })
    .editXAxis({
      line: { color: "dimgrey" },
      ticksAndLabels: {
        ticks: { color: "pink" },
        labels: { color: "#0a0e0c", format: "%Y" }
      }
    })
    .createYAxis({
      line: {},
      ticksAndLabels: {
        values: [0, 10000, 20000, 30000, 40000, 50000, 60000],
        ticks: { length: 5 },
        labels: {
          fontSize: 10,
          fontFamily: "sans-serif",
          offset: 7
        }
      },
      title: false
    })
    .editYAxis({
      line: { color: "dimgrey" },
      ticksAndLabels: {
        ticks: { color: "pink" },
        labels: {
          color: "#0b0b0b",
          labelMap: [
            { value: 0, label: "$0" },
            { value: 10000, label: "$10,000" },
            { value: 20000, label: "$20,000" },
            { value: 30000, label: "$30,000" },
            { value: 40000, label: "$40,000" },
            { value: 50000, label: "$50,000" },
            { value: 60000, label: "$60,000" }
          ]
        }
      }
    });
}