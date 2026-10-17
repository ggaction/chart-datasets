// DOCS: doc-dfae58344d5a524e, doc-b11b4627b143730d, doc-071c93dff3a5ea2e, doc-76573a465e2b6a33
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({ width: 308, height: 210, margin: { left: 39, top: 38, right: 69, bottom: 22 } })
    .createData({ id: "cpi", values: data })
    .filterData({ id: "yearFrom", field: "year", predicate: { op: "gt", value: "1980" } })
    .filterData({ id: "yearTo", field: "year", predicate: { op: "lt", value: "2022" } })
    .createComputedData({ id: "typedValue", as: "valueN", expression: { op: "toNumber", operand: { field: "value" } } })
    .createLinePlot({
      x: { field: "date", fieldType: "temporal" },
      y: { field: "valueN", fieldType: "quantitative" },
      guides: false
    })
    .editXScale({ domain: [599616000000, 1638316800000], nice: false })
    .editYScale({ domain: [0, 11], nice: false, zero: true })
    .encodeStroke({ value: "#00BFFF" })
    .encodeStrokeWidth({ value: 2 })
    .encodeOpacity({ value: 1 })
    .applyTextMetrics({ profile: { schemaVersion: 1, id: "cpi-title-metrics", measurements: [{ text: "Monthly CPI for Miscellaneous & Other Services", fontFamily: "sans-serif", fontSize: 13, fontWeight: 700, fontStyle: "normal", width: 296.921875 }, { text: "The follwoing data was taken from an ONS API", fontFamily: "sans-serif", fontSize: 12, fontWeight: 400, fontStyle: "normal", width: 250.140625 }] } })
    .createTitle({ text: "Monthly CPI for Miscellaneous & Other Services", titleStyle: { fontSize: 13, fontFamily: "sans-serif" }, alongOffset: -33.123046875 })
    .editTitle({ titleStyle: { color: "black", fontWeight: 700 } })
    .editTitle({ subtitle: "The follwoing data was taken from an ONS API", subtitleStyle: { fontSize: 12, fontWeight: 400, fontFamily: "sans-serif", color: "black", fontStyle: "normal" }, offset: -13 })
    .createXAxis({
      line: { lineWidth: 1 },
      ticksAndLabels: {
        values: [631152000000, 788918400000, 946684800000, 1104537600000, 1262304000000, 1420070400000, 1577836800000],
        ticks: { length: 5, lineWidth: 1 },
        labels: { fontSize: 10, fontFamily: "sans-serif", fontWeight: 400, offset: 7, flush: false }
      },
      title: false
    })
    .editXAxisLine({ color: "#888" })
    .editXAxisTicks({ color: "#888" })
    .editXAxisLabels({ color: "black", format: "%Y" })
    .createYAxis({
      line: { lineWidth: 1 },
      ticksAndLabels: {
        values: [0, 2, 4, 6, 8, 10],
        ticks: { length: 5, lineWidth: 1 },
        labels: { fontSize: 10, fontFamily: "sans-serif", fontWeight: 400, offset: 7, format: "auto" }
      },
      title: { text: "CPI(%)", fontSize: 11, fontFamily: "sans-serif", offset: 30 }
    })
    .editYAxisLine({ color: "#888" })
    .editYAxisTicks({ color: "#888" })
    .editYAxisLabels({ color: "black" })
    .editYAxisTitle({ color: "black", fontWeight: 700 })
    .createGrid({ horizontal: { color: "#ddd" }, vertical: { color: "#ddd" } });
}
