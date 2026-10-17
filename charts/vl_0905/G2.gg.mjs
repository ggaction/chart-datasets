// DOCS: doc-6c2c08869091f6a0, doc-fc11e9fb291905d1, doc-ba092ec842bafcc1
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({ width: 269, height: 222, margin: { left: 64, top: 35, right: 5, bottom: 37 } })
    .editCanvas({ background: "#fff0d8" })
    .createData({ id: "raw", values: data })
    .createComputedData({ id: "d", as: "valueNum", expression: { op: "toNumber", operand: { field: "value" } } })
    .createBarPlot({
      x: { field: "year", fieldType: "temporal" },
      y: "valueNum",
      guides: false
    })
    .encodeBarWidth({ pixels: 5 })
    .editBarMark({ fill: "#fe921f" })
    .editXScale({ domain: [832145684210, 1629390315789], nice: false, range: [64, 264] })
    .editYScale({ domain: [0, 700000] })
    .createAxes({
      x: {
        line: false,
        ticksAndLabels: {
          values: [946684800000, 1136073600000, 1262304000000, 1420070400000, 1577836800000],
          ticks: { length: 5, color: "#888" },
          labels: { fontSize: 10, fontFamily: "sans-serif", offset: 7, format: "%Y", overlap: "allow" }
        },
        title: { text: "Year", fontSize: 11, fontWeight: 700, fontFamily: "sans-serif", color: "black", offset: 28 }
      },
      y: {
        line: {},
        ticksAndLabels: {
          count: 4,
          ticks: { length: 5, color: "#888" },
          labels: { fontSize: 10, fontFamily: "sans-serif", offset: 7, format: ",.0f" }
        },
        title: { text: "Total Exports in £m", fontSize: 11, fontWeight: 700, fontFamily: "sans-serif", color: "black", offset: 54, rotation: { value: -90, unit: "degrees" } }
      }
    })
    .createGrid({
      horizontal: { color: "#00000017", lineWidth: 1 },
      vertical: { color: "#00000017", lineWidth: 1 }
    })
    .createTitle({
      text: "Total Trade: Exports",
      titleStyle: { fontSize: 13, fontWeight: 700, fontFamily: "sans-serif", color: "black" },
      subtitleStyle: { fontSize: 10, fontFamily: "sans-serif", color: "black" }
    })
    .editTitle({ subtitle: "Source: ONS", offset: -12, alongOffset: -58 });
}