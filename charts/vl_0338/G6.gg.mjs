// DOCS: doc-b11b4627b143730d, doc-c2eafbbd16fe3c71, doc-f30bfed200b50a98
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({
      width: 340,
      height: 357,
      margin: { top: 40, right: 11, bottom: 17, left: 29 }
    })
    .createData({ values: data })
    .createComputedData({
      id: "valueNum",
      as: "valueNum",
      expression: { op: "toNumber", operand: { field: "value" } }
    })
    .createLinePlot({
      x: { field: "date", fieldType: "temporal" },
      y: { field: "valueNum", fieldType: "quantitative" },
      guides: false
    })
    .editXScale({ domain: [-126230400000, 1609459200000] })
    .editYScale({ domain: [0, 140], zero: true })
    .encodeStroke({ value: "blue" })
    .encodeStrokeWidth({ value: 2 })
    .editLineMark({ curve: "monotone" })
    .createXAxis({
      line: {},
      ticksAndLabels: {
        ticks: { length: 0 },
        labels: { fontSize: 10, offset: 2 },
        values: [0, 157766400000, 315532800000, 473385600000, 631152000000, 788918400000, 946684800000, 1104537600000, 1262304000000, 1420070400000, 1577836800000]
      },
      title: false
    })
    .createYAxis({
      line: {},
      ticksAndLabels: {
        ticks: {},
        labels: { fontSize: 10, offset: 7 },
        values: [0, 20, 40, 60, 80, 100, 120, 140]
      },
      title: false
    })
    .editXAxisLabels({
      format: "%Y"
    })
    .createTitle({
      text: "Federal Debt",
      titleStyle: { fontSize: 13, fontFamily: "sans-serif" },
      subtitleStyle: { fontSize: 10, fontStyle: "italic", fontFamily: "sans-serif" }
    })
    .editTitle({ offset: -13, gap: 1, alongOffset: -23.6845703125 })
    .editTitle({
      subtitle: "Percent of GDP, Seasonally Adjusted (US OMB via FRED)",
      titleStyle: { fontWeight: 700, color: "black" },
      subtitleStyle: { fontWeight: 400, color: "black" }
    });
}