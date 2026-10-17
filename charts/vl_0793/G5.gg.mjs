import { chart } from "ggaction";
import data from "./data.json";
// DOCS: doc-b11b4627b143730d

const YEAR_TICKS = [631152000000, 788918400000, 946684800000, 1104537600000, 1262304000000, 1420070400000, 1577836800000];

export function buildChart() {
  return chart()
    .createCanvas({ width: 325, height: 208, margin: { left: 39, top: 36, right: 86, bottom: 22 } })
    .createData({ values: data })
    .createComputedData({ id: "v", as: "valueNum", expression: { op: "toNumber", operand: { field: "value" } } })
    .filterData({ id: "f1", field: "year", predicate: { op: "gt", value: "1980" } })
    .filterData({ id: "f2", field: "year", predicate: { op: "lt", value: "2022" } })
    .createLinePlot({
      x: { field: "date", fieldType: "temporal", temporalUnit: "auto" },
      y: { field: "valueNum", fieldType: "quantitative" },
      guides: false
    })
    .editXScale({ domain: [599616000000, 1638316800000], nice: false })
    .editYScale({ domain: [-4, 14], zero: false })
    .encodeStroke({ value: "#00BFFF" })
    .encodeStrokeWidth({ value: 2 })
    .encodeOpacity({ value: 1 })
    .createXAxis({
      ticksAndLabels: {
        values: YEAR_TICKS,
        ticks: { length: 5 },
        labels: { fontSize: 10, fontFamily: "sans-serif", offset: 7, flush: false }
      },
      title: false
    })
    .createYAxis({
      ticksAndLabels: {
        values: [-4, -2, 0, 2, 4, 6, 8, 10, 12, 14],
        ticks: { length: 5 },
        labels: { fontSize: 10, fontFamily: "sans-serif", offset: 7 }
      },
      title: { text: "CPI(%)", fontSize: 11, offset: 30, rotation: { value: -90, unit: "degrees" } }
    })
    .editXAxis({ line: { color: "#888" }, ticksAndLabels: { ticks: { color: "#888" }, labels: { color: "black", format: "%Y" } } })
    .editYAxis({ line: { color: "#888" }, ticksAndLabels: { ticks: { color: "#888" }, labels: { color: "black", labelMap: [{ value: -2, label: "−2" }, { value: -4, label: "−4" }] } }, title: { fontWeight: 700 } })
    .createGrid({ horizontal: { values: [-4, -2, 0, 2, 4, 6, 8, 10, 12, 14], color: "#ddd" }, vertical: { values: YEAR_TICKS, color: "#ddd" } })
    .applyTextMetrics({
      profile: {
        schemaVersion: 1,
        id: "cpi-title-metrics",
        measurements: [
          { text: "Annual CPI for Food and Non-Alcoholic Beverages", fontFamily: "sans-serif", fontSize: 13, fontWeight: 700, fontStyle: "normal", width: 313.484375 },
          { text: "The follwoing data was taken from an ONS API", fontFamily: "sans-serif", fontSize: 12, fontWeight: 400, fontStyle: "normal", width: 250.140625 }
        ]
      }
    })
    .createTitle({
      text: "Annual CPI for Food and Non-Alcoholic Beverages",
      titleStyle: { fontSize: 13, fontWeight: 700, color: "black" },
      alongOffset: -33.123046875
    })
    .editTitle({
      subtitle: "The follwoing data was taken from an ONS API",
      subtitleStyle: { fontSize: 12, fontWeight: 400, color: "black" },
      offset: -13
    });
}
