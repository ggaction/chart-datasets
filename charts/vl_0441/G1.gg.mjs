// DOCS: doc-b11b4627b143730d, doc-76573a465e2b6a33, doc-8a4f6f06e0d37d5e, doc-8a63e04cdcf5e650
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({ width: 346, height: 377, margin: { left: 39, top: 40, right: 7, bottom: 37 } })
    .createData({ values: data })
    
    .createComputedData({
      id: "valueNumeric",
      as: "valueN",
      expression: { op: "toNumber", operand: { field: "value" } }
    })
    .createLinePlot({
      x: {
        field: "date",
        fieldType: "temporal",
        scale: { domain: [599616000000, 1627776000000], nice: false }
      },
      y: {
        field: "valueN",
        fieldType: "quantitative",
        scale: { domain: [-4, 14] }
      },
      guides: false
    })
    .editLineMark({ stroke: "#00BFFF", strokeWidth: 2, opacity: 1 })
    .createTitle({
      text: "Food and drink",
      titleStyle: { fontSize: 13, fontWeight: 700, color: "black" },
      subtitleStyle: { fontSize: 10, fontStyle: "italic", color: "black" }
    })
    .editTitle({ subtitle: "CPI division 1, % change over 12 months ", gap: 1, alongOffset: -33 })
    .editTitle({ offset: -13 })
    .applyTextMetrics({
      profile: {
        schemaVersion: 1,
        id: "source-axis-label-metrics",
        measurements: [
          { text: "−4", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 11.40625 },
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
    .createGuides({
      axes: {
        x: {
          line: {},
          ticksAndLabels: {
            values: [
              631152000000, 788918400000, 946684800000, 1104537600000,
              1262304000000, 1420070400000, 1577836800000
            ],
            ticks: {},
            labels: { fontSize: 10, offset: 7, format: "%Y", flush: true }
          },
          title: { text: "dateClean", fontSize: 11, fontWeight: 700, offset: 30 }
        },
        y: {
          line: {},
          ticksAndLabels: {
            values: [-4, -2, 0, 2, 4, 6, 8, 10, 12, 14],
            ticks: {},
            labels: {
              fontSize: 10,
              offset: 7,
              labelMap: [
                { value: -4, label: "\u22124" },
                { value: -2, label: "\u22122" },
                { value: 0, label: "0" },
                { value: 2, label: "2" },
                { value: 4, label: "4" },
                { value: 6, label: "6" },
                { value: 8, label: "8" },
                { value: 10, label: "10" },
                { value: 12, label: "12" },
                { value: 14, label: "14" }
              ]
            }
          },
          title: { text: "value", fontSize: 11, fontWeight: 700, offset: 27, rotation: { value: -90, unit: "degrees" } }
        }
      },
      grid: { horizontal: { color: "#ddd" }, vertical: { color: "#ddd" } }
    });
}