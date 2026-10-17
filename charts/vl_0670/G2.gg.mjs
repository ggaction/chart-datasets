// DOCS: doc-99b0513458edff76, doc-fb3b01cca895bdad
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({ width: 484, height: 382, margin: { left: 29, top: 52, right: 5, bottom: 30 } })
    .editCanvas({ background: "#122b39" })
    .createData({ id: "raw", values: data })
    .createComputedData({ id: "dX", as: "year", expression: { op: "toNumber", operand: { field: "Year" } } })
    .createComputedData({ id: "dY", as: "totalNum", expression: { op: "toNumber", operand: { field: "Total ($)" } } })
    .createBarPlot({
      x: { field: "year", fieldType: "temporal" },
      y: { field: "totalNum", fieldType: "quantitative" },
      guides: false
    })
    .editXScale({ domain: [428135563636, 1654622836363], nice: false })
    .editYScale({ domain: [0, 140] })
    .editBarMark({ fill: "#ff9a00" })
    .encodeBarWidth({ pixels: 8 })
    .createTitle({
      text: "IMF Lending in absolute value ($)",
      titleStyle: { fontSize: 13, fontWeight: 700, color: "#cbc7cf", fontFamily: "sans-serif" },
      subtitleStyle: { fontSize: 10, fontStyle: "italic", color: "#cbc7cf", fontFamily: "sans-serif" }
    })
    .editTitle({ gap: 1, offset: -13, alongOffset: -23.7 })
    .editTitle({ subtitle: "Loans dispersed, $bn Source: IMF (2022 data up to September 30).\n" })
    .createAxes({
      x: {
        line: { color: "#888" },
        ticksAndLabels: {
          values: [473385600000, 631152000000, 788918400000, 946684800000, 1104537600000, 1262304000000, 1420070400000, 1577836800000],
          ticks: { length: 0 },
          labels: { fontSize: 10, fontFamily: "sans-serif", color: "#cbc7cf", offset: 2, rotation: { value: 45, unit: "degrees" } }
        },
        title: false
      },
      y: {
        line: { color: "#888" },
        ticksAndLabels: {
          values: [0, 20, 40, 60, 80, 100, 120, 140],
          ticks: { length: 5, color: "#888" },
          labels: { fontSize: 10, fontFamily: "sans-serif", color: "#cbc7cf", offset: 7 }
        },
        title: false
      }
    });
}
