// DOCS: doc-8a4f6f06e0d37d5e, doc-b11b4627b143730d
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({
      width: 203,
      height: 206,
      margin: { left: 39, top: 34, right: 14, bottom: 22 }
    })
    .createData({ values: data })
    .createComputedData({
      id: "emp_value",
      as: "valueNum",
      expression: { op: "toNumber", operand: { field: "value" } }
    })
    .createLinePlot({
      x: {
        field: "date",
        fieldType: "temporal",
        temporalUnit: "year"
      },
      y: {
        field: "valueNum",
        fieldType: "quantitative"
      },
      guides: false
    })
    .editXScale({ domain: [31536000000, 1609459200000], nice: false })
    .editYScale({ domain: [0, 80] })
    .encodeStroke({ value: "rgb(8,123,102" })
    .encodeStrokeWidth({ value: 2 })
    .createXAxis({
      line: {},
      ticksAndLabels: {
        values: [315532800000, 631152000000, 946684800000, 1262304000000, 1577836800000],
        ticks: {},
        labels: { fontSize: 10, offset: 7, fontFamily: "sans-serif" }
      },
      title: false
    })
    .editXAxisLabels({ format: "%Y" })
    .createYAxis({
      line: {},
      ticksAndLabels: {
        values: [0, 20, 40, 60, 80],
        ticks: {},
        labels: { fontSize: 10, offset: 7, fontFamily: "sans-serif" }
      },
      title: {
        text: "%",
        fontSize: 11,
        fontFamily: "sans-serif",
        offset: 32,
        rotation: { value: -90, unit: "degrees" }
      }
    })
    .editYAxisTitle({ fontWeight: 700 })
    .createTitle({
      text: "Employment rate, aged 16 to 64",
      titleStyle: { fontSize: 9, fontWeight: 700, fontFamily: "sans-serif" },
      subtitleStyle: { fontSize: 8, fontStyle: "italic", fontFamily: "sans-serif" }
    })
    .editTitle({ offset: -12, gap: 2, alongOffset: -33 })
    .editTitle({ subtitle: "Seasonally Adjusted, Source: ONS" });
}