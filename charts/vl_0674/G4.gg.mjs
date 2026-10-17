import { chart } from "ggaction";
import data from "./data.json";
// DOCS: doc-8a4f6f06e0d37d5e doc-9bb354f4e2d46693 doc-76573a465e2b6a33
export function buildChart() {
  return chart()
    .createCanvas({
      width: 352,
      height: 269,
      margin: { left: 29, top: 47, right: 23, bottom: 22 }
    })
    .editCanvas({ background: "#122b39" })
    .createData({ values: data })
    
    .createComputedData({
      id: "numY",
      as: "valueNum",
      expression: { op: "toNumber", operand: { field: "value" } }
    })
    .applyTextMetrics({
      profile: {
        schemaVersion: 1,
        id: "source-headline",
        measurements: [
          {
            text: "Net Debt (including public sector banks) as a % of GDP",
            fontFamily: "sans-serif",
            fontSize: 13,
            fontWeight: 700,
            width: 340.953125
          }
        ]
      }
    })
    .createTitle({
      text: "Net Debt (including public sector banks) as a % of GDP",
      titleStyle: {
        fontSize: 13,
        fontWeight: 700,
        fontFamily: "sans-serif",
        color: "#cbc7cf"
      },
      alongOffset: -23.6845703125
    })
    .editTitle({
      offset: -13,
      gap: 1
    })
    .editTitle({
      subtitle: "% of GDP. Source: ONS.\n",
      subtitleStyle: {
        fontSize: 10,
        fontStyle: "italic",
        fontFamily: "sans-serif",
        color: "#cbc7cf"
      }
    })
    .createLinePlot({
      x: {
        field: "date",
        fieldType: "temporal"
      },
      y: {
        field: "valueNum",
        fieldType: "quantitative"
      },
      guides: false
    })
    .editXScale({ domain: [730944000000, 1661990400000], nice: false })
    .editYScale({ domain: [0, 160] })
    .encodeStroke({ value: "#ff9a00" })
    .encodeStrokeWidth({ value: 2 })
    .editLineMark({ curve: "step" })
    .createAxes({
      x: {
        line: {},
        title: false,
        ticksAndLabels: {
          values: [
            788918400000,
            946684800000,
            1104537600000,
            1262304000000,
            1420070400000,
            1577836800000
          ],
          ticks: {},
          labels: {
            fontSize: 10,
            fontFamily: "sans-serif",
            color: "#cbc7cf",
            offset: 7,
            flush: true,
            format: "%Y"
          }
        }
      },
      y: {
        line: {},
        title: false,
        ticksAndLabels: {
          values: [0, 50, 100, 150],
          ticks: {},
          labels: {
            fontSize: 10,
            fontFamily: "sans-serif",
            color: "#cbc7cf",
            offset: 7
          }
        }
      }
    });
}