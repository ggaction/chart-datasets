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
      ticksAndLabels: {
        values: [
          631152000000, 788918400000, 946684800000, 1104537600000,
          1262304000000, 1420070400000, 1577836800000
        ],
        ticks: { length: 5 },
        labels: {
          fontSize: 10,
          fontFamily: "sans-serif",
          fontWeight: 400,
          offset: 7
        }
      },
      title: false
    })
    .editXAxis({
      line: { color: "#888" },
      ticksAndLabels: {
        ticks: { color: "#888" },
        labels: { color: "black", format: "%Y" }
      }
    })
    .createYAxis({
      ticksAndLabels: {
        values: [-4, -2, 0, 2, 4, 6],
        ticks: { length: 5 },
        labels: {
          fontSize: 10,
          fontFamily: "sans-serif",
          fontWeight: 400,
          offset: 7
        }
      },
      title: {
        text: "CPI(%)",
        fontSize: 11,
        offset: 28
      }
    })
    .editYAxis({
      line: { color: "#888" },
      ticksAndLabels: { ticks: { color: "#888" }, labels: { color: "black" } },
      title: { color: "black", fontWeight: "bold" }
    })
    .createGrid({ horizontal: true, vertical: true })
    .editHorizontalGrid({ color: "#ddd" })
    .editVerticalGrid({ color: "#ddd" })
    .createTitle({
      text: "Monthly CPI for Non-Energy Industrial Goods",
      titleStyle: { fontSize: 13, fontFamily: "sans-serif" },
      subtitleStyle: { fontSize: 12, fontFamily: "sans-serif" }
    })
    .editTitle({ offset: -13, alongOffset: -33.4, gap: 1 })
    .editTitle({
      subtitle: "The follwoing data was taken from an ONS API",
      titleStyle: { color: "black", fontWeight: 700 },
      subtitleStyle: { color: "black", fontWeight: 400 }
    });
}