// DOCS: doc-b785fcba5a7e78ae doc-37b62edd4b20fb7d doc-fa74f8dc4aeb7499
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({ width: 357, height: 382, margin: { left: 39, top: 45, right: 18, bottom: 37 } })
    .applyTextMetrics({
      profile: {
        schemaVersion: 1,
        id: "0054-actual-source-browser-text",
        measurements: [
          { text: "1990", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 22.25 },
          { text: "1995", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 22.25 },
          { text: "2000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 22.25 },
          { text: "2005", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 22.25 },
          { text: "2010", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 22.25 },
          { text: "2015", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 22.25 },
          { text: "2020", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 22.25 },
          { text: "Date", fontFamily: "sans-serif", fontSize: 11, fontWeight: 700, fontStyle: "normal", width: 23.84375 },
          { text: "−2", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 11.40625 },
          { text: "0", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 5.5625 },
          { text: "2", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 5.5625 },
          { text: "4", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 5.5625 },
          { text: "6", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 5.5625 },
          { text: "8", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 5.5625 },
          { text: "10", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 11.125 },
          { text: "Value_s", fontFamily: "sans-serif", fontSize: 11, fontWeight: 700, fontStyle: "normal", width: 40.984375 },
          { text: "CPI", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 16.671875 },
          { text: "CPIH", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 23.90625 },
          { text: "RPI", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 16.671875 },
          { text: "Index", fontFamily: "sans-serif", fontSize: 11, fontWeight: 700, fontStyle: "normal", width: 28.734375 },
          { text: "CPI - three headline inidces", fontFamily: "sans-serif", fontSize: 13, fontWeight: 700, fontStyle: "normal", width: 169.78125 },
          { text: "RPI, CPI and CPIH", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "italic", width: 85.810546875 }
        ]
      }
    })
    .createData({ values: data })
    .createComputedData({ id: "dated", as: "dateUtc", expression: { op: "parseTime", operand: { field: "Date" }, format: "%Y-%m-%d" } })
    .createComputedData({ id: "typed", as: "valueNum", expression: { op: "toNumber", operand: { field: "Value_s" } } })
    .createLinePlot({ x: { field: "dateUtc", fieldType: "temporal" }, y: { field: "valueNum" }, guides: false })
    .encodeColor({ field: "series", fieldType: "nominal" })
    .encodeStroke({ field: "series", fieldType: "nominal" })
    .editLineMark({ strokeWidth: 2 })
    .createScatterPlot({ x: { field: "dateUtc", fieldType: "temporal" }, y: { field: "valueNum" }, guides: false })
    .encodeColor({ field: "series", fieldType: "nominal" })
    .encodeStroke({ value: "rgba(220,220,220,0.8)" })
    .editPointMark({ strokeWidth: 5, opacity: 1 })
    .encodePointRadius({ value: 7.071067811865476 })
    .editColorScale({ domain: ["CPI", "CPIH", "RPI"], range: ["#000080", "#00BFFF", "#0276FD"] })
    .editStrokeScale({ target: "linePlot", domain: ["CPI", "CPIH", "RPI"], range: ["#000080", "#00BFFF", "#0276FD"] })
    .createComputedData({ id: "cpi", as: "CPI", expression: { op: "if", condition: { op: "eq", left: { field: "series" }, right: { constant: "CPI" } }, then: { field: "valueNum" }, else: { constant: 0 } } })
    .createComputedData({ id: "cpih", as: "CPIH", expression: { op: "if", condition: { op: "eq", left: { field: "series" }, right: { constant: "CPIH" } }, then: { field: "valueNum" }, else: { constant: 0 } } })
    .createComputedData({ id: "rpi", as: "RPI", expression: { op: "if", condition: { op: "eq", left: { field: "series" }, right: { constant: "RPI" } }, then: { field: "valueNum" }, else: { constant: 0 } } })
    .createSummaryData({ id: "pivot", groupBy: ["dateUtc"], aggregates: [{ field: "CPI", op: "sum", as: "CPI" }, { field: "CPIH", op: "sum", as: "CPIH" }, { field: "RPI", op: "sum", as: "RPI" }] })
    .createRuleMark({ data: "pivot", opacity: 0 })
    .editRuleMark({ stroke: "black", strokeWidth: 1 })
    .encodeX({ field: "dateUtc", fieldType: "temporal" })
    .editXScale({ domain: [600825600000, 1610668800000], nice: false })
    .editYScale({ domain: [-2, 11], nice: false })
    .createGrid({
      vertical: { values: [631152000000, 788918400000, 946684800000, 1104537600000, 1262304000000, 1420070400000, 1577836800000], color: "#ddd" },
      horizontal: { values: [-2, 0, 2, 4, 6, 8, 10], color: "#ddd" }
    })
    .createXAxis({
      line: { color: "#888" },
      ticksAndLabels: {
        values: [631152000000, 788918400000, 946684800000, 1104537600000, 1262304000000, 1420070400000, 1577836800000],
        ticks: { length: 5, color: "#888" },
        labels: { fontSize: 10, color: "black", offset: 5.5, alongOffset: 0.5, format: "%Y", flush: false }
      },
      title: { text: "Date", fontSize: 11, fontWeight: 700, color: "black", offset: 27.578125 }
    })
    .createYAxis({
      line: { color: "#888" },
      ticksAndLabels: {
        values: [-2, 0, 2, 4, 6, 8, 10],
        ticks: { length: 5, color: "#888" },
        labels: { fontSize: 10, color: "black", offset: 6.5, alongOffset: 0.890625, labelMap: [{ value: -2, label: "−2" }, { value: 0, label: "0" }, { value: 2, label: "2" }, { value: 4, label: "4" }, { value: 6, label: "6" }, { value: 8, label: "8" }, { value: 10, label: "10" }] }
      },
      title: { text: "Value_s", fontSize: 11, fontWeight: 700, color: "black", offset: 26.8232421875, rotation: { value: -90, unit: "degrees" } }
    })
    .createTitle({ text: "CPI - three headline inidces", titleStyle: { fontSize: 13, fontWeight: 700, color: "black" }, alongOffset: -33.4013671875 })
    .editTitle({ offset: -10.716499328613281, gap: 3.34375 })
    .editTitle({ subtitle: "RPI, CPI and CPIH", subtitleStyle: { fontSize: 10, fontStyle: "italic", color: "black" } })
    .createLegend({ target: "linePlot", title: "Index", position: "top-right" })
    .editLegendSymbols({ symbol: { layers: [{ type: "point", size: 5, strokeWidth: 1.5 }] } })
    .editLegendTitle({ fontSize: 11, fontWeight: 700, color: "black" })
    .editLegendLabels({ fontSize: 10, color: "black" });
}