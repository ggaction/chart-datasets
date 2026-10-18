// DOCS: doc-b9261a4b2909a353, doc-76573a465e2b6a33, doc-203db321ccc2e60f
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({ width: 332, height: 357, margin: { left: 24, top: 40, right: 8, bottom: 17 } })
    .editCanvas({ plotBorder: { color: "#ddd", lineWidth: 1 } })
    .applyTextMetrics({ profile: { schemaVersion: 1, id: "vl_0343-original-source-font-widths", measurements: [
      { text: "1970", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 22.25 },
      { text: "1980", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 22.25 },
      { text: "1990", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 22.25 },
      { text: "2000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 22.25 },
      { text: "2010", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 22.25 },
      { text: "2020", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 22.25 },
      { text: "0", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 5.5625 },
      { text: "2", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 5.5625 },
      { text: "4", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 5.5625 },
      { text: "6", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 5.5625 },
      { text: "8", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 5.5625 },
      { text: "10", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 11.125 },
      { text: "12", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 11.125 },
      { text: "14", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 11.125 },
      { text: "16", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 11.125 },
      { text: "Bond yield (government)", fontFamily: "sans-serif", fontSize: 13, fontWeight: 700, fontStyle: "normal", width: 153.125 },
      { text: "10-Year Treasury Constant Maturity Rate (FRED: DGS10)", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "italic", width: 256.40625 }
    ] } })
    .createData({ values: data })
    .createComputedData({ id: "timestamp", as: "timestamp", expression: { op: "parseTime", operand: { field: "date" }, format: "%Y-%m-%d" } })
    .createComputedData({ id: "missingFlag", as: "missingFlag", expression: { op: "if", condition: { op: "eq", left: { field: "value" }, right: { constant: "." } }, then: { constant: 1 }, else: { constant: 0 } } })
    .createWindowData({ id: "gapSegmentSource", sortBy: [{ field: "timestamp" }], operations: [{ op: "cumulativeSum", field: "missingFlag", as: "gapSegment" }] })
    .filterData({ id: "validRows", field: "value", noneOf: ["."] })
    .createComputedData({ id: "yieldValue", as: "yield", expression: { op: "toNumber", operand: { field: "value" } } })
    .createLinePlot({ x: { field: "timestamp", fieldType: "temporal", temporalUnit: "timestamp" }, y: { field: "yield" }, guides: false })
    .encodeGroup({ field: "gapSegment" })
    .editLineMark({ curve: "monotone", stroke: "blue", strokeWidth: 2 })
    .editXScale({ domain: [-252374400000, 1629676800000], nice: false })
    .editYScale({ domain: [0, 16], nice: false })
    .createXAxis({
      title: false,
      ticksAndLabels: { values: [0, 315532800000, 631152000000, 946684800000, 1262304000000, 1577836800000],
        ticks: { length: 0, lineWidth: 1 },
        labels: { fontSize: 10, offset: 0.5, alongOffset: 0.5, flush: true } }
    })
    .editXAxisLine({ color: "#888", lineWidth: 1 })
    .editXAxisTicksAndLabels({
      ticks: { color: "#888" },
      labels: { color: "black", format: "%Y" }
    })
    .createYAxis({
      title: false,
      ticksAndLabels: { values: [0, 2, 4, 6, 8, 10, 12, 14, 16],
        ticks: { length: 5, lineWidth: 1 },
        labels: { fontSize: 10, offset: 6.5, alongOffset: 0.890625 } }
    })
    .editYAxisLine({ color: "#888", lineWidth: 1 })
    .editYAxisTicksAndLabels({
      ticks: { color: "#888" },
      labels: { color: "black" }
    })
    .createTitle({ text: "Bond yield (government)", titleStyle: { fontSize: 13, fontWeight: 700, color: "black" }, subtitleStyle: { fontSize: 10, fontStyle: "italic", fontWeight: 400, color: "black" } })
    .editTitle({ offset: -10.953125, alongOffset: -18.123046875, gap: 3.34 })
    .editTitle({ subtitle: "10-Year Treasury Constant Maturity Rate (FRED: DGS10)" });
}