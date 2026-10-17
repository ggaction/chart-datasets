// DOCS: doc-6c2c08869091f6a0, doc-fc11e9fb291905d1, doc-333a87e52954985d
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({ width: 958, height: 582, margin: { left: 53, top: 27, right: 5, bottom: 155 } })
    .createData({ id: "attacks", values: data })
    .createComputedData({
      id: "attacksNum",
      as: "AttackCountNum",
      expression: { op: "toNumber", operand: { field: "Attack Count" } }
    })
    .createBarPlot({
      x: { field: "targtype1_txt", fieldType: "nominal" },
      y: { field: "AttackCountNum", fieldType: "quantitative" },
      guides: false
    })
    .editXScale({ type: "band", paddingInner: 0.1, paddingOuter: 0.05 })
    .editYScale({ type: "linear", domain: [0, 1000] })
    .encodeBarWidth({ band: 1 })
    .editBarMark({ fill: "#fdb462" })
    .createTitle({
      text: "Terrorist Attacks with Explosives in Iraq by Primary Target",
      offset: -13,
      titleStyle: { fontSize: 13, fontWeight: "700" }
    })
    .editTitle({ align: "center" })
    .createXAxis({
      line: {},
      ticksAndLabels: {
        ticks: {},
        labels: {
          fontSize: 10,
          offset: 7,
          rotation: { value: -90, unit: "degrees" }
        }
      },
      title: { text: "Target Type", fontSize: 11, fontWeight: "700" }
    })
    .createYAxis({
      line: {},
      ticksAndLabels: {
        ticks: {},
        labels: { fontSize: 10, offset: 7 },
        values: [0, 100, 200, 300, 400, 500, 600, 700, 800, 900, 1000]
      },
      title: { text: "Attack Count", fontSize: 11, fontWeight: "700", offset: 44 }
    })
    .createGrid({
      horizontal: {
        values: [0, 100, 200, 300, 400, 500, 600, 700, 800, 900, 1000],
        color: "#ddd",
        lineWidth: 1
      },
      vertical: false
    })
    ;
}