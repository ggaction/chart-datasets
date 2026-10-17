// DOCS: doc-b11b4627b143730d, doc-8a4f6f06e0d37d5e, doc-2bd5de4bd99e314a
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({ width: 230, height: 257, margin: { left: 44, top: 35, right: 11, bottom: 22 } })
    .createData({ values: data })
    .filterData({ id: "yearMin", field: "year", range: { min: "1988", max: "2022", inclusive: false } })
    .createComputedData({ id: "cpiValueNum", as: "valueNum", expression: { op: "toNumber", operand: { field: "value" } } })
    .createTitle({ text: "CPI", offset: -9, titleStyle: { fontSize: 13, fontFamily: "sans-serif" } })
    .editTitle({ alongOffset: -38.7, titleStyle: { fontWeight: 700 } })
    .createLinePlot({
      x: { field: "date", fieldType: "temporal", temporalUnit: "year" },
      y: { field: "valueNum", fieldType: "quantitative" },
      guides: false
    })
    .editXScale({ domain: [599616000000, 1609459200000] })
    .editYScale({ domain: [0, 150] })
    .encodeStroke({ value: "#86d0bb" })
    .encodeStrokeWidth({ value: 1.5 })
    .encodeOpacity({ value: 1 })
    .editTitle({
      subtitle: "CPIH index: Tobacco 2015 = 100. Source: ONS",
      subtitleStyle: { fontSize: 10, fontStyle: "italic", fontFamily: "sans-serif" },
      gap: 1
    })
    .createXAxis({
      line: {},
      ticksAndLabels: {
        values: [631152000000, 788918400000, 946684800000, 1104537600000, 1262304000000, 1420070400000, 1577836800000],
        ticks: { length: 5 },
        labels: { fontSize: 10, fontFamily: "sans-serif", offset: 5.5, format: "%Y" }
      },
      title: false
    })
    .createYAxis({
      line: {},
      ticksAndLabels: {
        values: [0, 20, 40, 60, 80, 100, 120, 140],
        ticks: { length: 5 },
        labels: { fontSize: 10, fontFamily: "sans-serif", offset: 6.5 }
      },
      title: {
        text: "Index",
        offset: 26.2,
        rotation: { value: -90, unit: "degrees" },
        fontSize: 11,
        fontWeight: 700,
        fontFamily: "sans-serif"
      }
    })
    .editXAxis({ line: { color: "#888" }, ticksAndLabels: { ticks: { color: "#888" } } })
    .editYAxis({ line: { color: "#888" }, ticksAndLabels: { ticks: { color: "#888" } } });
}