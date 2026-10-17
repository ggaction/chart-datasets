// DOCS: doc-b11b4627b143730d
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({ width: 379, height: 364, margin: { left: 39, top: 37, right: 40, bottom: 37 } })
    .createData({ values: data })
    .createComputedData({ id: "valueNum", as: "valueNum", expression: { op: "toNumber", operand: { field: "value" } } })
    .applyTextMetrics({
      profile: {
        schemaVersion: 1,
        id: "source-header-width",
        measurements: [
          {
            text: "CPI ANNUAL RATE 01 : FOOD AND NON-ALCOHOLIC BEVERAGES 2015=100",
            fontFamily: "sans-serif",
            fontSize: 10,
            fontWeight: 700,
            width: 367.03125
          }
        ]
      }
    })
    .createTitle({
      text: "CPI ANNUAL RATE 01 : FOOD AND NON-ALCOHOLIC BEVERAGES 2015=100",
      titleStyle: { fontSize: 10, fontWeight: 700, color: "black" },
      alongOffset: -33.4
    })
    .editTitle({
      subtitleStyle: { fontSize: 10, fontStyle: "italic", color: "black" },
      offset: -13,
      gap: 1
    })
    .editTitle({ subtitle: "(\u00a3million, Source: ONS)" })
    .createLinePlot({
      x: { field: "date", fieldType: "temporal" },
      y: { field: "valueNum", fieldType: "quantitative" },
      guides: false
    })
    .editXScale({ domain: [599616000000, 1667260800000], nice: false })
    .editYScale({ domain: [-4, 18] })
    .editLineMark({ stroke: "#002199", strokeWidth: 2 })
    .createAxes({
      x: {
        line: {},
        ticksAndLabels: {
          values: [631152000000, 788918400000, 946684800000, 1104537600000, 1262304000000, 1420070400000, 1577836800000],
          labels: { fontSize: 10, offset: 7 }
        },
        title: { text: "Date", fontSize: 11, fontWeight: 700, offset: 28 }
      },
      y: {
        line: {},
        ticksAndLabels: {
          values: [-4, -2, 0, 2, 4, 6, 8, 10, 12, 14, 16, 18],
          labels: { fontSize: 10, offset: 7 }
        },
        title: { text: "Inflation", fontSize: 11, fontWeight: 700, offset: 26 }
      }
    });
}
