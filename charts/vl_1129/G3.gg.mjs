// DOCS: doc-b11b4627b143730d
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({
      width: 342,
      height: 252,
      margin: { left: 44, top: 35, right: 98, bottom: 37 }
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
    .editLineMark({ stroke: "rgb(0,47,167", strokeWidth: 2 })
    .editXScale({ domain: [694224000000, 1609459200000] })
    .editYScale({ domain: [0, 550] })
    .createXAxis({
      line: {},
      ticksAndLabels: {
        count: 6,
        ticks: {},
        labels: { fontSize: 10, offset: 7, fontFamily: "sans-serif" }
      },
      title: { text: "date", fontSize: 11, fontFamily: "sans-serif", offset: 28 }
    })
    .createYAxis({
      line: {},
      ticksAndLabels: {
        count: 6,
        ticks: {},
        labels: { fontSize: 10, offset: 7, fontFamily: "sans-serif" }
      },
      title: { text: "Unemployed people (000s)", fontSize: 11, fontFamily: "sans-serif", offset: 33 }
    })
    .editXAxisTitle({ fontWeight: 700 })
    .editYAxisTitle({ fontWeight: 700 })
    .applyTextMetrics({
      profile: {
        schemaVersion: 1,
        id: "title-text-metrics",
        measurements: [
          {
            text: "Number of unemployed males in the UK  (Aged 25-34)",
            fontFamily: "sans-serif",
            fontSize: 13,
            fontWeight: 700,
            fontStyle: "normal",
            width: 327.953125
          },
          {
            text: "Seasonally adjusted from 1992-2022 , Source: ONS",
            fontFamily: "sans-serif",
            fontSize: 10,
            fontWeight: 400,
            fontStyle: "italic",
            width: 230.78125
          }
        ]
      }
    })
    .createTitle({
      text: "Number of unemployed males in the UK  (Aged 25-34)",
      titleStyle: { fontSize: 13, fontWeight: 700, fontFamily: "sans-serif" },
      offset: -13,
      alongOffset: -38.6845703125
    })
    .editTitle({
      subtitle: "Seasonally adjusted from 1992-2022 , Source: ONS",
      subtitleStyle: { fontSize: 10, fontStyle: "italic", fontFamily: "sans-serif" },
      gap: 3
    });
}
