// DOCS: doc-8a4f6f06e0d37d5e, doc-7f9a19c76a29a115
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({
      width: 203,
      height: 201,
      margin: { left: 39, top: 29, right: 14, bottom: 22 }
    })
    .createData({ id: "raw", values: data })
    .createComputedData({
      id: "rates",
      as: "valueNum",
      expression: { op: "toNumber", operand: { field: "value" } }
    })
    .createLinePlot({
      x: {
        field: "date",
        fieldType: "temporal",
        temporalUnit: "year"
      },
      y: { field: "valueNum" },
      guides: false
    })
    .editXScale({ domain: [31536000000, 1609459200000] })
    .editYScale({ domain: [0, 13], nice: false })
    .encodeStroke({ value: "rgb(8,123,102" })
    .encodeStrokeWidth({ value: 2 })
    .createXAxis({
      ticksAndLabels: {
        values: [315532800000, 631152000000, 946684800000, 1262304000000, 1577836800000],
        ticks: {},
        labels: { fontSize: 10, offset: 7 }
      },
      title: false
    })
    .editXAxisLine({ color: "#888" })
    .createYAxis({
      ticksAndLabels: {
        values: [0, 5, 10],
        ticks: {},
        labels: { fontSize: 10, offset: 7 }
      },
      title: { text: "%", fontSize: 11, offset: 27 }
    })
    .editYAxisLine({ color: "#888" })
    .editYAxisTitle({ fontWeight: 700 })
    // Measured 4-key createTitle requirement: text/titleStyle/offset/alongOffset are all
    // geometrically essential (source title at x 5.877 vs plotleft 39 -> alongOffset -33.12;
    // tight top margin 29 with title block height 21 -> offset -8; no authoringBudget supplied).
    .createTitle({
      text: "Male unemployment rate, aged 16 and over",
      alongOffset: -33.12,
      titleStyle: { fontSize: 9 }
    })
    .editTitle({ offset: -8 })
    .editTitle({ titleStyle: { fontWeight: 700 } })
    .editTitle({
      subtitle: "Seasonally Adjusted, Source: ONS",
      subtitleStyle: { fontSize: 8, fontStyle: "italic" },
      gap: 2
    });
}