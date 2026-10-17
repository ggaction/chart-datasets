// DOCS: doc-b11b4627b143730d, doc-071c93dff3a5ea2e, doc-8a4f6f06e0d37d5e
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({
      width: 246,
      height: 262,
      margin: { top: 40, right: 27, bottom: 22, left: 44 }
    })
    .createData({ values: data })
    .createComputedData({ id: "valueNum", as: "valueNum", expression: { op: "toNumber", operand: { field: "value" } } })
    .filterData({ id: "yearMin", field: "year", predicate: { op: "gt", value: "2015" } })
    .filterData({ id: "yearMax", field: "year", predicate: { op: "lt", value: "2022" } })
    .createLinePlot({
      x: { field: "date", fieldType: "temporal" },
      y: { field: "valueNum", fieldType: "quantitative" },
      guides: false
    })
    .editXScale({ domain: [1451606400000, 1638316800000] })
    .editYScale({ domain: [80, 115] })
    .encodeStroke({ value: "#86d0bb" })
    .encodeStrokeWidth({ value: 1.5 })
    .encodeOpacity({ value: 1 })
    .createTitle({
      text: "CPI",
      titleStyle: { fontSize: 13, fontWeight: 700, color: "black", fontFamily: "sans-serif" },
      subtitleStyle: { fontSize: 10, fontStyle: "italic", color: "black", fontFamily: "sans-serif" }
    })
    .editTitle({ gap: 1, offset: -13, alongOffset: -38.6845703125 })
    .editTitle({ subtitle: "CPIH index: Beef and veal 2015 = 100. Source: ONS" })
    .createXAxis({
      title: false,
      ticksAndLabels: {
        values: [1451606400000, 1483228800000, 1514764800000, 1546300800000, 1577836800000, 1609459200000],
        ticks: { length: 5 },
        labels: {
          fontSize: 10,
          fontFamily: "sans-serif",
          offset: 7,
          format: "%Y",
          flush: true,
          labelMap: [
            { value: 1483228800000, label: "" },
            { value: 1546300800000, label: "" },
            { value: 1609459200000, label: "" }
          ]
        }
      }
    })
    .createYAxis({
      title: { text: "Index", fontSize: 11, fontWeight: 700, offset: 33, fontFamily: "sans-serif" },
      ticksAndLabels: {
        values: [80, 85, 90, 95, 100, 105, 110, 115],
        ticks: { length: 5 },
        labels: { fontSize: 10, fontFamily: "sans-serif", offset: 7 }
      }
    });
}
