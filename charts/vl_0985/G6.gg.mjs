// DOCS: doc-dfae58344d5a524e doc-2a31551f1566fc6b doc-f30bfed200b50a98 doc-99b0513458edff76 doc-ca3e770693a924c8 doc-7184b02978bdf5d1
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({
      width: 229,
      height: 262,
      margin: { left: 44, top: 40, right: 10, bottom: 22 }
    })
    .createData({ values: data })
    .createComputedData({
      id: "numericValue",
      as: "valueN",
      expression: { op: "toNumber", operand: { field: "value" } }
    })
    .filterData({ id: "from2016", field: "year", predicate: { op: "gt", value: "2015" } })
    .filterData({ id: "to2021", field: "year", predicate: { op: "lt", value: "2022" } })
    .createLinePlot({
      x: {
        field: "date",
        fieldType: "temporal"
      },
      y: {
        field: "valueN",
        fieldType: "quantitative"
      },
      guides: false
    })
    .editXScale({ domain: [1451606400000, 1638316800000], nice: false })
    .editYScale({ domain: [-10, 10], nice: false })
    .encodeStroke({ value: "#86d0bb" })
    .encodeStrokeWidth({ value: 1.5 })
    .encodeOpacity({ value: 1 })
    .createTitle({
      text: "CPI",
      titleStyle: { fontSize: 13, fontFamily: "sans-serif", fontStyle: "normal" },
      subtitleStyle: { fontSize: 10, fontFamily: "sans-serif", fontStyle: "italic" }
    })
    .editTitle({
      offset: -13,
      gap: 1,
      alongOffset: -38.962890625
    })
    .editTitle({
      subtitle: "CPIH Monthly rate:Tea 2015 = 100. Source: ONS",
      titleStyle: { fontWeight: 700, color: "black" },
      subtitleStyle: { fontWeight: 400, color: "black" }
    })
    .createXAxis({
          line: { color: "#888", lineWidth: 1 },
          ticksAndLabels: {
            values: [1451606400000, 1483228800000, 1514764800000, 1546300800000, 1577836800000, 1609459200000],
            ticks: { length: 5, color: "#888", lineWidth: 1 },
            labels: {
              format: "%Y",
              fontSize: 10,
              fontFamily: "sans-serif",
              offset: 7,
              flush: true,
              labelMap: [
                { value: 1451606400000, label: "2016" },
                { value: 1483228800000, label: "" },
                { value: 1514764800000, label: "2018" },
                { value: 1546300800000, label: "" },
                { value: 1577836800000, label: "2020" },
                { value: 1609459200000, label: "" }
              ]
            }
          },
          title: false
    })
    .createYAxis({
          line: { color: "#888", lineWidth: 1 },
          ticksAndLabels: {
            values: [-10, -5, 0, 5, 10],
            ticks: { length: 5, color: "#888", lineWidth: 1 },
            labels: {
              fontSize: 10,
              fontFamily: "sans-serif",
              offset: 7,
              labelMap: [
                { value: -10, label: "\u221210" },
                { value: -5, label: "\u22125" },
                { value: 0, label: "0" },
                { value: 5, label: "5" },
                { value: 10, label: "10" }
              ]
            }
          },
          title: {
            text: "Monthly rate %",
            fontSize: 11,
            fontWeight: 700,
            fontFamily: "sans-serif",
            offset: 29,
            rotation: { value: -90, unit: "degrees" }
          }
    });
}