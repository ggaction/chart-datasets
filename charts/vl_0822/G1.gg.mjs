import { chart } from "ggaction";
import data from "./data.json";

// DOCS: doc-6c2c08869091f6a0, doc-fc11e9fb291905d1, doc-ba092ec842bafcc1

export function buildChart() {
  return chart()
    .createCanvas({ width: 334, height: 370, margin: { left: 29, top: 40, right: 5, bottom: 30 } })
    .createData({ values: data })
    .filterData({ id: "imfDefined", field: "Year", noneOf: [""] })
    .createComputedData({
      id: "billions",
      as: "billions",
      expression: {
        op: "divide",
        left: { op: "toNumber", operand: { field: "Totals" } },
        right: { constant: 1000000000 }
      }
    })
    .createBarPlot({
      x: { field: "Year", fieldType: "temporal" },
      y: { field: "billions", fieldType: "quantitative" },
      guides: false
    })
    .editXScale({ domain: [421086786206, 1661671613793], nice: false })
    .editYScale({ domain: [0, 110], nice: false })
    .editBarMark({ fill: "rgb(0,47,167)", stroke: false })
    .encodeBarWidth({ pixels: 5 })
    .applyTextMetrics({
      profile: {
        schemaVersion: 1,
        id: "source-actual-font-metrics",
        measurements: [
          { text: "1985", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 22.25 },
          { text: "1990", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 22.25 },
          { text: "1995", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 22.25 },
          { text: "2000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 22.25 },
          { text: "2005", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 22.25 },
          { text: "2010", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 22.25 },
          { text: "2015", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 22.25 },
          { text: "2020", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 22.25 },
          { text: "0", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 5.5625 },
          { text: "10", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 11.125 },
          { text: "20", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 11.125 },
          { text: "30", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 11.125 },
          { text: "40", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 11.125 },
          { text: "50", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 11.125 },
          { text: "60", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 11.125 },
          { text: "70", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 11.125 },
          { text: "80", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 11.125 },
          { text: "90", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 11.125 },
          { text: "100", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 16.6875 },
          { text: "110", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 15.953125 },
          { text: "IMF Lending outstanding", fontFamily: "sans-serif", fontSize: 13, fontWeight: 700, fontStyle: "normal", width: 154.53125 },
          { text: "Credit outstanding to all members, SDRs (billions), Source: IMF", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "italic", width: 282.4560546875 }
        ]
      }
    })
    .createAxes({
      x: {
          title: false,
          line: { color: "#888" },
          ticksAndLabels: {
            values: [473385600000, 631152000000, 788918400000, 946684800000, 1104537600000, 1262304000000, 1420070400000, 1577836800000],
            ticks: { length: 0, color: "transparent" },
            labels: {
              fontSize: 10,
              color: "black",
              format: "%Y",
              rotation: { value: 45, unit: "degrees" },
              alongOffset: -3.311748504638672,
              offset: 2.776214599609375
            }
          }
        },
        y: {
          title: false,
          line: { color: "#888" },
          ticksAndLabels: {
            values: [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110],
            ticks: { length: 5, color: "#888" },
            labels: { fontSize: 10, offset: 7, color: "black", format: ",.0f" }
          }
        }
    })
    .createTitle({
      text: "IMF Lending outstanding",
      titleStyle: { fontSize: 13, fontWeight: 700, color: "black" },
      alongOffset: -23.6845703125
    })
    .editTitle({ offset: -10.953125, gap: 3.34375 })
    .editTitle({
      subtitle: "Credit outstanding to all members, SDRs (billions), Source: IMF",
      subtitleStyle: { fontSize: 10, fontStyle: "italic", color: "black" }
    });
}