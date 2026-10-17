// DOCS: doc-6c2c08869091f6a0, doc-fc11e9fb291905d1, doc-2ba6dfbdbb611825, doc-b257fb08998617a5
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({
      width: 487,
      height: 384,
      margin: { left: 32, top: 52, right: 5, bottom: 32 }
    })
    .editCanvas({ background: "#122b39" })
    .createData({ values: data })
    .createComputedData({
      id: "ratioData",
      as: "creditRatio",
      expression: { op: "toNumber", operand: { field: "IMF Credit/GDP" } }
    })
    .createBarPlot({
      x: { field: "Year", fieldType: "temporal", temporalUnit: "year" },
      y: { field: "creditRatio" },
      guides: false
    })
    .editXScale({ domain: [428135563636, 1654622836363], nice: false })
    .editYScale({ domain: [0, 0.45] })
    .editBarMark({ fill: "#ff9a00" })
    .encodeBarWidth({ pixels: 8 })
    .createXAxis({
      line: { color: "#888" },
      title: false,
      ticksAndLabels: {
        values: [
          473385600000, 631152000000, 788918400000, 946684800000,
          1104537600000, 1262304000000, 1420070400000, 1577836800000
        ],
        ticks: { length: 0 },
        labels: {
          fontSize: 10,
          offset: 7,
          color: "#cbc7cf",
          fontFamily: "sans-serif",
          format: "%Y",
          rotation: { value: 45, unit: "degrees" }
        }
      }
    })
    .createYAxis({
      line: { color: "#888" },
      title: false,
      ticksAndLabels: {
        values: [0, 0.05, 0.1, 0.15, 0.2, 0.25, 0.3, 0.35, 0.4, 0.45],
        labels: {
          fontSize: 10,
          offset: 7,
          color: "#cbc7cf",
          fontFamily: "sans-serif",
          format: ".2f"
        }
      }
    })
    .createTitle({
      text: "IMF Lending as a percentage of Global GDP",
      titleStyle: { fontSize: 13, fontFamily: "sans-serif" },
      subtitleStyle: { fontSize: 10, fontStyle: "italic", fontFamily: "sans-serif" }
    })
    .editTitle({ subtitle: "Loans dispersed, % of Global GDP Source: IMF (2022 data up to September 30).\n", gap: 3, offset: -13 })
    .editTitle({
      alongOffset: -26.46,
      titleStyle: { color: "#cbc7cf", fontWeight: 700 },
      subtitleStyle: { color: "#cbc7cf" }
    });
}