// DOCS: doc-b11b4627b143730d, doc-c2eafbbd16fe3c71, doc-8a4f6f06e0d37d5e
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({
      width: 346,
      height: 242,
      margin: { left: 39, top: 40, right: 7, bottom: 22 }
    })
    .createData({ values: data })
    .createComputedData({
      id: "valueNum",
      as: "valueNum",
      expression: { op: "toNumber", operand: { field: "value" } }
    })
    .createTitle({
      text: "Monthly CPI: Kitchen Utensils (2015=100)",
      titleStyle: { fontSize: 13, fontWeight: 700, color: "black", fontFamily: "sans-serif" },
      subtitleStyle: { fontSize: 10, fontStyle: "italic", color: "black", fontFamily: "sans-serif" }
    })
    .editTitle({ offset: -13, alongOffset: -33.4013671875, gap: 1 })
    .editTitle({ subtitle: "Non electric utensils, Source: ONS" })
    .createLinePlot({
      x: { field: "date", fieldType: "temporal" },
      y: { field: "valueNum", fieldType: "quantitative" },
      guides: false
    })
    .editXScale({ domain: [1422748800000, 1661990400000], nice: false })
    .editYScale({ domain: [-5, 4], nice: false, zero: false })
    .editLineMark({ stroke: "rgb(0,47,167", strokeWidth: 2 })
    .createAxes({
      x: {
        line: {},
        ticksAndLabels: {
          values: [1451606400000, 1483228800000, 1514764800000, 1546300800000, 1577836800000, 1609459200000, 1640995200000],
          ticks: { length: 5 },
          labels: { fontSize: 10, fontFamily: "sans-serif", offset: 7, format: "%Y" }
        },
        title: false
      },
      y: {
        line: {},
        ticksAndLabels: {
          values: [-4, -2, 0, 2, 4],
          ticks: { length: 5 },
          labels: {
            fontSize: 10,
            fontFamily: "sans-serif",
            offset: 7,
            labelMap: [
              { value: -4, label: "\u22124" },
              { value: -2, label: "\u22122" },
              { value: 0, label: "0" },
              { value: 2, label: "2" },
              { value: 4, label: "4" }
            ]
          }
        },
        title: { text: "CPI %", fontSize: 11, fontWeight: 700, offset: 27.4 }
      }
    });
}