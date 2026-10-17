import { chart } from "ggaction";
import data from "./data.json";

// DOCS: doc-b11b4627b143730d, doc-76573a465e2b6a33, doc-071c93dff3a5ea2e

export function buildChart() {
  return chart()
    .createCanvas({ width: 347, height: 362, margin: { left: 18, top: 40, right: 29, bottom: 22 } })
    .createData({ values: data })
    .createComputedData({ id: "typed", as: "valueNum", expression: { op: "toNumber", operand: { field: "value" } } })
    .createLinePlot({ x: { field: "date", fieldType: "temporal" }, y: "valueNum", guides: false })
    .editLineMark({ stroke: "#00BFFF", strokeWidth: 2 })
    .createWindowData({ id: "ranked", sortBy: [{ field: "date", order: "descending" }], operations: [{ op: "rowNumber", as: "rank" }] })
    .filterData({ id: "latest", field: "rank", oneOf: [1] })
    .createPointMark({ data: "latest", fill: "#00BFFF", stroke: "none" })
    .encodePointRadius({ value: 5 })
    .encodeX({ field: "date", fieldType: "temporal" })
    .encodeY({ field: "valueNum" })
    .createTextMark({ data: "latest", fontSize: 11, fill: "#00BFFF" })
    .editTextMark({ align: "left", baseline: "middle", dx: 8 })
    .encodeText({ field: "value" })
    .encodeX({ target: "text", field: "date", fieldType: "temporal" })
    .encodeY({ target: "text", field: "valueNum" })
    .editXScale({ domain: [599616000000, 1577836800000], nice: false })
    .editYScale({ domain: [0, 8] })
    .applyTextMetrics({
      profile: {
        schemaVersion: 1,
        id: "source-actual-font-metrics",
        measurements: [
          { text: "1990", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 22.25 },
          { text: "1995", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 22.25 },
          { text: "2000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 22.24999237060547 },
          { text: "2005", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 22.25 },
          { text: "2010", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 22.25 },
          { text: "2015", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 22.25 },
          { text: "2020", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 22.25 },
          { text: "0", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 5.5625 },
          { text: "1", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 5.5625 },
          { text: "2", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 5.5625 },
          { text: "3", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 5.5625 },
          { text: "4", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 5.5625 },
          { text: "5", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 5.5625 },
          { text: "6", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 5.5625 },
          { text: "7", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 5.5625 },
          { text: "8", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 5.5625 },
          { text: "Inflation - official target", fontFamily: "sans-serif", fontSize: 13, fontWeight: 700, fontStyle: "normal", width: 143.734375 },
          { text: "CPI, % change over 12 months", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "italic", width: 138.779296875 }
        ]
      }
    })
    .createGrid({ horizontal: { values: [0, 1, 2, 3, 4, 5, 6, 7, 8], color: "#ddd", lineWidth: 1 }, vertical: { values: [631152000000, 788918400000, 946684800000, 1104537600000, 1262304000000, 1420070400000, 1577836800000], color: "#ddd", lineWidth: 1 } })
    .createAxes({
      x: {
        line: { color: "#888" },
        ticksAndLabels: {
          values: [631152000000, 788918400000, 946684800000, 1104537600000, 1262304000000, 1420070400000, 1577836800000],
          ticks: { length: 5, color: "#888" },
          labels: { fontSize: 10, offset: 7, color: "black", format: "%Y", flush: true }
        },
        title: false
      },
      y: {
        line: { color: "#888" },
        ticksAndLabels: {
          values: [0, 1, 2, 3, 4, 5, 6, 7, 8],
          ticks: { length: 5, color: "#888" },
          labels: { fontSize: 10, offset: 7, color: "black" }
        },
        title: false
      }
    })
    .createTitle({ text: "Inflation - official target", alongOffset: -12.5615234375, titleStyle: { fontSize: 13, fontWeight: 700, color: "black" } })
    .editTitle({ offset: -10.953125, gap: 3.34375 })
    .editTitle({ subtitle: "CPI, % change over 12 months", subtitleStyle: { fontSize: 10, fontStyle: "italic", color: "black" } });
}