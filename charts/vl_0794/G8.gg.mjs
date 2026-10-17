// DOCS: doc-b11b4627b143730d doc-76573a465e2b6a33 doc-d9e3b1b7add0d2c6 doc-0cbb124f0c04d6d9
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({ width: 299, height: 213, margin: { left: 44, top: 41, right: 55, bottom: 22 } })
    .createData({ values: data })
    
    .createComputedData({ id: "valueNum", as: "valueNum", expression: { op: "toNumber", operand: { field: "value" } } })
    
    .filterData({ id: "minYearData", field: "year", predicate: { op: "gt", value: "1980" } })
    .filterData({ id: "maxYearData", field: "year", predicate: { op: "lt", value: "2022" } })
    .createLinePlot({
      x: { field: "date", fieldType: "temporal" },
      y: { field: "valueNum", fieldType: "quantitative" },
      guides: false
    })
    .editXScale({ domain: [599616000000, 1638316800000], nice: false })
    .editYScale({ domain: [-15, 30] })
    .encodeStroke({ value: "#00BFFF" })
    .encodeStrokeWidth({ value: 2 })
    .encodeOpacity({ value: 1 })
    .applyTextMetrics({ profile: { schemaVersion: 1, id: "monthlyCpiTitle", measurements: [{ text: "Monthly CPI for Energy Goods", fontFamily: "sans-serif", fontSize: 13, fontWeight: 700, fontStyle: "normal", width: 188.515625 }, { text: "The follwoing data was taken from an ONS API", fontFamily: "sans-serif", fontSize: 12, fontWeight: 400, fontStyle: "normal", width: 250.140625 }] } })
    .createTitle({ text: "Monthly CPI for Energy Goods", titleStyle: { fontSize: 13 } })
    .editTitle({ offset: -13, gap: 1, alongOffset: -39 })
    .editTitle({ subtitle: "The follwoing data was taken from an ONS API", subtitleStyle: { fontSize: 12, color: "black" }, titleStyle: { fontWeight: 700, color: "black" } })
    .createXAxis({
      title: false,
      line: {},
      ticksAndLabels: {
        values: [631152000000, 788918400000, 946684800000, 1104537600000, 1262304000000, 1420070400000, 1577836800000],
        ticks: { length: 5 },
        labels: { fontSize: 10, fontFamily: "sans-serif", offset: 7, flush: false }
      }
    })
    .createYAxis({
      line: {},
      ticksAndLabels: {
        values: [-10, 0, 10, 20, 30],
        ticks: { length: 5 },
        labels: { fontSize: 10, fontFamily: "sans-serif", offset: 7 }
      },
      title: { text: "CPI(%)", fontSize: 11, offset: 33, rotation: { value: -90, unit: "degrees" } }
    })
    .editXAxisLine({ color: "#888" })
    .editXAxisLabels({ format: "%Y" })
    .editYAxisLine({ color: "#888" })
    .editYAxisLabels({ labelMap: [{ value: -10, label: "−10" }] })
    .editYAxisTitle({ fontWeight: 700 })
    .createGrid({ horizontal: true, vertical: true })
    .editHorizontalGrid({ color: "#ddd" })
    .editVerticalGrid({ color: "#ddd" });
}