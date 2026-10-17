import { chart } from "ggaction";
import data from "./data.json";

// DOCS: doc-b11b4627b143730d, doc-dfae58344d5a524e, doc-76573a465e2b6a33
export function buildChart() {
  return chart()
    .createCanvas({
      width: 299,
      height: 213,
      margin: { left: 39, top: 41, right: 60, bottom: 22 }
    })
    .createData({ values: data })
    .filterData({
      id: "filteredYear",
      field: "year",
      range: { min: "1980", max: "2022", minInclusive: false, maxInclusive: false }
    })
    .createComputedData({
      id: "valueNum",
      as: "valueNum",
      expression: { op: "toNumber", operand: { field: "value" } }
    })
    .createLinePlot({
      x: { field: "date", fieldType: "temporal", temporalUnit: "auto" },
      y: { field: "valueNum", fieldType: "quantitative" },
      guides: false
    })
    .editXScale({ domain: [599616000000, 1638316800000], nice: false })
    .editYScale({ domain: [-4, 6], zero: false, nice: false })
    .encodeStroke({ value: "#00BFFF" })
    .encodeStrokeWidth({ value: 2 })
    .encodeOpacity({ value: 1 })
    .createXAxis({
      line: { color: "#888" },
      ticksAndLabels: {
        values: [
          631152000000, 788918400000, 946684800000, 1104537600000,
          1262304000000, 1420070400000, 1577836800000
        ],
        ticks: { length: 5, color: "#888" },
        labels: {
          fontSize: 10,
          fontFamily: "sans-serif",
          fontWeight: 400,
          color: "black",
          offset: 7,
          format: "%Y"
        }
      },
      title: false
    })
    .createYAxis({
      line: { color: "#888" },
      ticksAndLabels: {
        values: [-4, -2, 0, 2, 4, 6],
        ticks: { length: 5, color: "#888" },
        labels: {
          fontSize: 10,
          fontFamily: "sans-serif",
          fontWeight: 400,
          color: "black",
          offset: 7
        }
      },
      title: {
        text: "CPI(%)",
        fontSize: 11,
        fontWeight: "bold",
        color: "black",
        offset: 28
      }
    })
    .createGrid({ horizontal: true, vertical: true })
    .editHorizontalGrid({ color: "#ddd" })
    .editVerticalGrid({ color: "#ddd" })
    .createTitle({
      text: "Monthly CPI for Non-Energy Industrial Goods",
      titleStyle: { fontSize: 13, fontWeight: 700, color: "black", fontFamily: "sans-serif" },
      subtitleStyle: { fontSize: 12, fontWeight: 400, color: "black", fontFamily: "sans-serif" }
    })
    .editTitle({ offset: -13, alongOffset: -33.4, gap: 1 })
    .editTitle({ subtitle: "The follwoing data was taken from an ONS API" });
}