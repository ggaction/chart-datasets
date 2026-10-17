// DOCS: doc-b11b4627b143730d, doc-071c93dff3a5ea2e, doc-c2eafbbd16fe3c71
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({
      width: 318,
      height: 208,
      margin: { left: 39, top: 36, right: 79, bottom: 22 }
    })
    .createData({ values: data })
    .createComputedData({
      id: "cpiRows",
      as: "cpi",
      expression: { op: "toNumber", operand: { field: "value" } }
    })
    .filterData({
      id: "yearGt1980",
      field: "year",
      predicate: { op: "gt", value: "1980" }
    })
    .filterData({
      id: "yearLt2022",
      field: "year",
      predicate: { op: "lt", value: "2022" }
    })
    .createLinePlot({
      x: { field: "date", fieldType: "temporal" },
      y: { field: "cpi", fieldType: "quantitative" },
      guides: false
    })
    .editXScale({ domain: [599616000000, 1638316800000], nice: false })
    .editYScale({ domain: [-1, 13] })
    .encodeStroke({ value: "#00BFFF" })
    .encodeStrokeWidth({ value: 2 })
    .encodeOpacity({ value: 1 })
    .createXAxis({
      line: {},
      ticksAndLabels: {
        values: [
          631152000000, 788918400000, 946684800000, 1104537600000,
          1262304000000, 1420070400000, 1577836800000
        ],
        ticks: {},
        labels: { fontSize: 10, offset: 7, flush: false }
      },
      title: false
    })
    .editXAxisLabels({ format: "%Y" })
    .createYAxis({
      line: {},
      ticksAndLabels: {
        values: [0, 5, 10],
        ticks: {},
        labels: { fontSize: 10, offset: 7 }
      },
      title: { text: "CPI(%)", fontSize: 11, offset: 30 }
    })
    .editYAxisTitle({ fontWeight: 700 })
    .createGrid({ horizontal: true, vertical: true })
    .editHorizontalGrid({ color: "#ddd" })
    .editVerticalGrid({ color: "#ddd" })
    .applyTextMetrics({
      profile: {
        schemaVersion: 1,
        id: "source-title-metrics",
        measurements: [
          {
            text: "Monthly CPI for Recreational & Personal Services",
            fontFamily: "sans-serif",
            fontSize: 13,
            fontWeight: 700,
            fontStyle: "normal",
            width: 306.328125
          },
          {
            text: "The follwoing data was taken from an ONS API",
            fontFamily: "sans-serif",
            fontSize: 12,
            fontWeight: 400,
            fontStyle: "normal",
            width: 250.140625
          }
        ]
      }
    })
    .createTitle({
      text: "Monthly CPI for Recreational & Personal Services",
      titleStyle: { fontSize: 13, fontWeight: 700, color: "black" },
      alongOffset: -33.123046875
    })
    .editTitle({
      subtitle: "The follwoing data was taken from an ONS API",
      subtitleStyle: { fontSize: 12, color: "black", fontStyle: "normal" },
      offset: -13
    });
}