// DOCS: doc-b11b4627b143730d
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({
      width: 316,
      height: 208,
      margin: { left: 39, top: 36, right: 77, bottom: 22 }
    })
    .createData({ id: "cpi", values: data })
    .createComputedData({
      id: "cpiValue",
      as: "valueNum",
      expression: { op: "toNumber", operand: { field: "value" } }
    })
    
    .filterData({ id: "cpiFrom", field: "year", predicate: { op: "gt", value: "1980" } })
    .filterData({ id: "cpiTo", field: "year", predicate: { op: "lt", value: "2021" } })
    .createLinePlot({
      x: { field: "date", fieldType: "temporal" },
      y: { field: "valueNum" },
      guides: false
    })
    .editXScale({ domain: [599616000000, 1606780800000] })
    .editYScale({ domain: [0, 18] })
    .editLineMark({ stroke: "#00BFFF", strokeWidth: 2, opacity: 1 })
    .applyTextMetrics({
      profile: {
        schemaVersion: 1,
        id: "source-title-metrics",
        measurements: [
          { text: "Annual CPI for Alcoholic Beverages and Tobacco", fontFamily: "sans-serif", fontSize: 13, fontWeight: 700, fontStyle: "normal", width: 304.140625 },
          { text: "The following data was taken from an ONS API", fontFamily: "sans-serif", fontSize: 12, fontWeight: 400, fontStyle: "normal", width: 250.140625 }
        ]
      }
    })
    .createTitle({
      text: "Annual CPI for Alcoholic Beverages and Tobacco",
      titleStyle: { fontSize: 13, fontWeight: 700, fontFamily: "sans-serif", color: "black" },
      alongOffset: -33.123046875
    })
    .editTitle({
      subtitle: "The following data was taken from an ONS API",
      subtitleStyle: { fontSize: 12, fontFamily: "sans-serif", color: "black", fontStyle: "normal" },
      offset: -13
    })
    .createXAxis({
      line: {},
      ticksAndLabels: {
        values: [
          631152000000, 788918400000, 946684800000, 1104537600000,
          1262304000000, 1420070400000, 1577836800000
        ],
        ticks: {},
        labels: { fontSize: 10, fontFamily: "sans-serif", format: "%Y", offset: 7, flush: false }
      },
      title: false
    })
    .createYAxis({
      line: {},
      ticksAndLabels: {
        values: [0, 5, 10, 15],
        ticks: {},
        labels: { fontSize: 10, fontFamily: "sans-serif", offset: 7 }
      },
      title: {
        text: "CPI(%)",
        fontSize: 11,
        fontWeight: 700,
        fontFamily: "sans-serif",
        offset: 30
      }
    })
    .createGrid({ horizontal: { color: "#ddd" }, vertical: { color: "#ddd" } });
}