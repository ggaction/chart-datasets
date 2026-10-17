import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({ width: 411, height: 375, margin: { left: 58, top: 40, right: 8, bottom: 35 } })
    .createData({ values: data })
    .createComputedData({ id: "dateNumber", as: "dateNumber", expression: { op: "if", condition: { op: "lt", left: { field: "DATE" }, right: { constant: "13/" } }, then: { op: "parseTime", operand: { field: "DATE" }, format: "auto" }, else: { constant: null } } })
    .createComputedData({ id: "priceNumber", as: "priceNumber", expression: { op: "if", condition: { op: "eq", left: { field: "CBBTCUSD" }, right: { constant: "." } }, then: { constant: null }, else: { op: "toNumber", operand: { field: "CBBTCUSD" } } } })
    .createComputedData({ id: "gapFlag", as: "gapFlag", expression: { op: "if", condition: { op: "or", operands: [{ op: "isNull", operand: { field: "dateNumber" } }, { op: "isNull", operand: { field: "priceNumber" } }] }, then: { constant: 1 }, else: { constant: 0 } } })
    .createWindowData({ id: "btcRuns", sortBy: [{ field: "dateNumber", order: "ascending" }], operations: [{ op: "cumulativeSum", field: "gapFlag", as: "run" }] })
    .filterData({ id: "btcValidDates", field: "dateNumber", predicate: { op: "neq", value: null } })
    .filterData({ id: "btcClean", field: "priceNumber", predicate: { op: "neq", value: null } })
    .createLinePlot({
      x: { field: "dateNumber", fieldType: "temporal" },
      y: { field: "priceNumber" },
      guides: false
    })
    .encodeGroup({ field: "run", target: "linePlot" })
    .editLineMark({ curve: "monotone", stroke: "blueviolet", strokeWidth: 2 })
    .editXScale({ domain: [1514764800000, 1670803200000], nice: false })
    .editYScale({ domain: [0, 70000] })
    .applyTextMetrics({ profile: { schemaVersion: 1, id: "source-1040-axis-widths", measurements: [{ text: "0", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 5.5625 }, { text: "10,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 30.59375 }, { text: "20,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 30.59375 }, { text: "30,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 30.59375 }, { text: "40,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 30.59375 }, { text: "50,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 30.59375 }, { text: "60,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 30.59375 }, { text: "70,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 30.59375 }] } })
    .createXAxis({
      title: false,
      line: { color: "#888" },
      ticksAndLabels: {
        values: [1514764800000, 1546300800000, 1577836800000, 1609459200000, 1640995200000],
        ticks: { length: 5, color: "#888" },
        labels: { format: "%Y", fontSize: 10, color: "black", offset: 7, rotation: { value: 45, unit: "degrees" } }
      }
    })
    .createYAxis({
      line: { color: "#888" },
      ticksAndLabels: {
        values: [0, 10000, 20000, 30000, 40000, 50000, 60000, 70000],
        ticks: { length: 5, color: "#888" },
        labels: { format: ",.0f", fontSize: 10, color: "black", offset: 7 }
      },
      title: { text: "Bitcoin US Dollar", fontSize: 11, fontWeight: 700, offset: 45, rotation: { value: -90, unit: "degrees" } }
    })
    .createTitle({ text: "Bitcoin", titleStyle: { fontSize: 13, fontWeight: 700, color: "black" }, gap: 1 })
    .editTitle({ subtitleStyle: { fontSize: 10, fontStyle: "italic", color: "black" }, offset: -13, alongOffset: -52.586 })
    .editTitle({ subtitle: "Source Yahoo Finance" })
    .createPointMark({ id: "transparentPoints", fill: "#4c78a8", opacity: 0 })
    .encodeX({ target: "transparentPoints", field: "dateNumber", fieldType: "temporal" })
    .encodeY({ target: "transparentPoints", field: "priceNumber" })
    .encodePointRadius({ value: Math.sqrt(30) / 2, target: "transparentPoints" });
}

// DOCS: doc-76573a465e2b6a33, doc-b11b4627b143730d, doc-8a4f6f06e0d37d5e