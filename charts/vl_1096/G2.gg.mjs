// DOCS: doc-6c2c08869091f6a0, doc-fc11e9fb291905d1, doc-2ba6dfbdbb611825
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({ width: 409, height: 372, margin: { left: 203, top: 35, right: 6, bottom: 37 } })
    .createData({ values: data })
    .createComputedData({ id: "valueNum", as: "ValueNum", expression: { op: "toNumber", operand: { field: "Value" } } })
    .createBarPlot({
      x: { field: "ValueNum", fieldType: "quantitative" },
      y: { field: "River", fieldType: "ordinal" },
      guides: false
    })
    .editXScale({ domain: [0, 350000], zero: true })
    .editYScale({ paddingInner: 0.1, paddingOuter: 0.05 })
    .encodeBarWidth({ band: 1 })
    .editBarMark({ fill: "#86d0bb", opacity: 1, strokeWidth: 2 })
.editBarMark({ stroke: false })
    .createTitle({
      text: "Plastic waste by river",
      titleStyle: { fontSize: 13, fontWeight: 700 },
      alongOffset: -197.0634765625
    })
    .editTitle({ subtitle: "Tonnes (2015). Source: Lebreton et al (2017)", subtitleStyle: { fontSize: 10, fontStyle: "italic" }, offset: -12 })
    .createGuides({
      axes: {
        x: {
          line: {},
          ticksAndLabels: {
            values: [0, 100000, 200000, 300000],
            ticks: {},
            labels: { fontSize: 10, offset: 7, format: "," }
          },
          title: { text: "Value", fontSize: 11, fontWeight: 700, offset: 28 }
        },
        y: {
          line: {},
          ticksAndLabels: {
            ticks: {},
            labels: { fontSize: 10, offset: 7, labelMap: [
      { value: "Amazon (Brazil, Peru, Colombia, Ecuador)", label: "Amazon (Brazil, Peru, Colombia, Ecu…" },
      { value: "Mekong (Thailand, Cambodia, Laos, China, Myanmar, Vietnam)", label: "Mekong (Thailand, Cambodia, Laos, …" }
    ] }
          },
          title: { text: "River", fontSize: 11, fontWeight: 700, offset: 195, rotation: { value: -90, unit: "degrees" } }
        }
      },
      grid: { horizontal: false, vertical: { values: [0, 50000, 100000, 150000, 200000, 250000, 300000, 350000], color: "#ddd" } }
    });
}
