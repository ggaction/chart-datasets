// DOCS: doc-6c2c08869091f6a0, doc-e7f2fa9f88cd79b5, doc-fc11e9fb291905d1
import { chart } from "ggaction";
import data from "./data.json";

const xTicks = [946684800000, 1104537600000, 1262304000000, 1420070400000, 1577836800000];
const yTicks = [0, 50000, 100000, 150000, 200000];

export function buildChart() {
  return chart()
    .createCanvas({ width: 269, height: 222, margin: { left: 64, top: 35, right: 5, bottom: 37 } })
    .editCanvas({ background: "#fff0d8" })
    .createData({ values: data })
    .createComputedData({ id: "numericValue", as: "numericValue", expression: { op: "toNumber", operand: { field: "value" } } })
    .createStackData({ category: "year", group: "month", value: "numericValue" })
    .createBarPlot({
      x: { field: "year", fieldType: "temporal", temporalUnit: "year" },
      y: { lower: "numericValue_start", upper: "numericValue_end" },
      guides: false
    })
    .editXScale({ type: "time", domain: [831315789473, 1661756210526], nice: false })
    .editYScale({ domain: [0, 240000] })
    .encodeBarWidth({ pixels: 5 })
    .editBarMark({ fill: "#fe921f", stroke: false })
    .createTitle({
      text: "Trade in Services: Imports",
      titleStyle: { fontSize: 13, fontWeight: 700, fontFamily: "sans-serif" },
      subtitleStyle: { fontSize: 10, fontFamily: "sans-serif" }
    })
    .editTitle({ gap: 1, offset: -13, alongOffset: -58.15 })
    .editTitle({ subtitle: "Source: ONS" })    .createAxes({
      x: {
        line: false,
        ticksAndLabels: { values: xTicks, ticks: {}, labels: { fontSize: 10, fontFamily: "sans-serif", offset: 7, flush: true } },
        title: { text: "Year", fontSize: 11, fontWeight: 700, fontFamily: "sans-serif", offset: 30 }
      },
      y: {
        line: { color: "#888" },
        ticksAndLabels: { values: yTicks, ticks: {}, labels: { fontSize: 10, fontFamily: "sans-serif", offset: 7, format: ",.0f" } },
        title: { text: "Services Imported in £m", fontSize: 11, fontWeight: 700, fontFamily: "sans-serif", offset: 54, rotation: { value: -90, unit: "degrees" } }
      }
    })
    .createGrid({
      horizontal: { values: yTicks, color: "#00000017" },
      vertical: { values: xTicks, color: "#00000017" }
    });
}
