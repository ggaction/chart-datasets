// DOCS: doc-8a4f6f06e0d37d5e (line chart tutorial), doc-071c93dff3a5ea2e (data derivation)
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({
      width: 346,
      height: 377,
      margin: { left: 39, top: 40, right: 7, bottom: 37 }
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
    .editXScale({ domain: [599616000000, 1625097600000] })
    .editYScale({ domain: [-2, 14] })
    .encodeStroke({ value: "#00BFFF" })
    .encodeStrokeWidth({ value: 2 })
    .encodeOpacity({ value: 1 })
    .applyTextMetrics({
      profile: {
        schemaVersion: 1,
        id: "sourceYGlyphProfile",
        measurements: [
          { text: "−2", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 11.40625 },
          { text: "0", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 5.5625 },
          { text: "2", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 5.5625 },
          { text: "4", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 5.5625 },
          { text: "6", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 5.5625 },
          { text: "8", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 5.5625 },
          { text: "10", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 11.125 },
          { text: "12", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 11.125 },
          { text: "14", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 11.125 }
        ]
      }
    })
    .createAxes({
      x: {
        line: {},
        ticksAndLabels: {
          values: [
            631152000000, 788918400000, 946684800000, 1104537600000,
            1262304000000, 1420070400000, 1577836800000
          ],
          ticks: { length: 5, color: "#000" },
          labels: { fontSize: 10, fontFamily: "sans-serif", offset: 7, format: "%Y", flush: true }
        },
        title: { text: "dateClean", fontSize: 11, fontWeight: 700, offset: 30 }
      },
      y: {
        line: {},
        ticksAndLabels: {
          values: [-2, 0, 2, 4, 6, 8, 10, 12, 14],
          ticks: { length: 5, color: "#000" },
          labels: {
            fontSize: 10,
            fontFamily: "sans-serif",
            offset: 7,
            labelMap: [{ value: -2, label: "−2" }]
          }
        },
        title: { text: "value", fontSize: 11, fontWeight: 700, offset: 27 }
      }
    })
    .createGrid({ horizontal: { color: "#ddd" }, vertical: { color: "#ddd" } })
    .createTitle({
      text: "Housing",
      titleStyle: { fontSize: 13, fontWeight: 700, color: "black", fontFamily: "sans-serif" },
      subtitleStyle: { fontSize: 10, fontStyle: "italic", color: "black", fontFamily: "sans-serif" }
    })
    .editTitle({ gap: 1, offset: -13, alongOffset: -33.4013671875 })
    .editTitle({ subtitle: "Housing, Water and Fuels, % change 12 months" });
}