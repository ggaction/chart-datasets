// DOCS: doc-6c2c08869091f6a0, doc-fc11e9fb291905d1, doc-ba092ec842bafcc1
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({
      width: 269,
      height: 222,
      margin: { left: 64, top: 35, right: 5, bottom: 37 }
    })
    .editCanvas({
      background: "#fff0d8"
    })
    .createData({ id: "data", values: data })
    .createComputedData({
      id: "valueNum",
      as: "valueNum",
      expression: { op: "toNumber", operand: { field: "value" } }
    })
    .createBarPlot({
      x: {
        field: "date",
        fieldType: "temporal",
        scale: { type: "time", domain: [832145684210, 1629390315789], range: [64, 264], nice: false }
      },
      y: {
        field: "valueNum",
        fieldType: "quantitative",
        scale: { type: "linear", domain: [0, 550000] }
      },
      guides: false
    })
    .createTitle({
      text: "Trade in Goods: Imports",
      titleStyle: { fontSize: 13, fontWeight: 700 },
      offset: -13
    })
    .editTitle({
      alongOffset: -58.1474609375
    })
    .editTitle({
      subtitle: "Source: ONS",
      subtitleStyle: { fontSize: 10, fontWeight: 400, fontStyle: "normal" },
      gap: 3
    })
    .encodeBarWidth({ pixels: 5 })
    .editBarMark({ fill: "#fe921f" })
    .createGuides({
      axes: {
        x: {
          line: { color: "#fffff" },
          ticksAndLabels: {
            count: 5,
            ticks: {},
            labels: { fontSize: 10, fontWeight: 400, offset: 7 }
          },
          title: { text: "Year", fontSize: 11, fontWeight: 700, offset: 28 }
        },
        y: {
          line: {},
          ticksAndLabels: {
            count: 6,
            ticks: {},
            labels: { fontSize: 10, fontWeight: 400, offset: 7, labelMap: [
          { value: 0, label: "0" },
          { value: 100000, label: "100,000" },
          { value: 200000, label: "200,000" },
          { value: 300000, label: "300,000" },
          { value: 400000, label: "400,000" },
          { value: 500000, label: "500,000" }
        ] }
          },
          title: {
            text: "Imports in £m",
            fontSize: 11,
            fontWeight: 700,
            offset: 52,
            rotation: { value: -90, unit: "degrees" }
          }
        }
      },
      grid: {
        horizontal: { color: "#00000017" },
        vertical: { color: "#00000017" }
      }
    });
}