// DOCS: doc-fc11e9fb291905d1, doc-6c2c08869091f6a0, doc-2ba6dfbdbb611825
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({
      width: 383,
      height: 354,
      margin: { left: 44, top: 27, right: 39, bottom: 37 }
    })
    .createData({ values: data })
    .filterData({ id: "validYear", field: "year", noneOf: [""] })
    .createComputedData({
      id: "importsN",
      as: "importsN",
      expression: { op: "toNumber", operand: { field: "imports" } }
    })
    .applyTextMetrics({
      profile: {
        schemaVersion: 1,
        id: "source-title-metrics",
        measurements: [
          {
            text: "What % of energy has the UK imported in the last 60 years?",
            fontFamily: "sans-serif",
            fontSize: 13,
            fontWeight: 700,
            width: 367.703125
          }
        ]
      }
    })
    .createTitle({
      text: "What % of energy has the UK imported in the last 60 years?",
      titleStyle: { fontFamily: "sans-serif", fontSize: 13, fontWeight: 700 },
      offset: -13,
      alongOffset: -33.8515625
    })
    .createBarPlot({
      x: {
        field: "year",
        fieldType: "temporal",
        temporalUnit: "year"
      },
      y: {
        field: "importsN",
        fieldType: "quantitative"
      },
      guides: false
    })
    .encodeBarWidth({ pixels: 5 })
    .editXScale({ domain: [-345544882758, 1449996082758], nice: false, range: [44, 344] })
    .editYScale({ domain: [-30, 60], zero: true })
    .createXAxis({
      line: {},
      ticksAndLabels: {
        values: [-315619200000, 0, 315532800000, 631152000000, 946684800000, 1262304000000],
        ticks: {},
        labels: { fontSize: 10, fontFamily: "sans-serif", offset: 7 }
      },
      title: { text: "Year", fontSize: 11, fontWeight: 700, fontFamily: "sans-serif", offset: 26 }
    })
    .createYAxis({
      line: {},
      ticksAndLabels: {
        values: [-30, -20, -10, 0, 10, 20, 30, 40, 50, 60],
        ticks: {},
        labels: { fontSize: 10, fontFamily: "sans-serif", offset: 7 }
      },
      title: { text: "% of energy imported", fontSize: 11, fontWeight: 700, fontFamily: "sans-serif", offset: 28 }
    })
    .editXAxisLine({ color: "#888" })
    .editXAxisTicks({ color: "#888" })
    .editXAxisLabels({ color: "black" })
    .editXAxisTitle({ color: "black" })
    .editYAxisLine({ color: "#888" })
    .editYAxisTicks({ color: "#888" })
    .editYAxisLabels({ color: "black" })
    .editYAxisTitle({ color: "black" })
    .createGrid({
      horizontal: { color: "#ddd", lineWidth: 1 },
      vertical: { color: "#ddd", lineWidth: 1 }
    });
}