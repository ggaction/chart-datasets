import { chart } from "ggaction";
import data from "./data.json";

// DOCS: doc-6c2c08869091f6a0, doc-fc11e9fb291905d1, doc-b257fb08998617a5, doc-dfae58344d5a524e
export function buildChart() {
  return chart()
    .createCanvas({
      width: 958,
      height: 517,
      margin: { left: 53, top: 27, right: 5, bottom: 90 }
    })
    .createData({ values: data })
    .createBarPlot({
      x: { field: "provstate", fieldType: "nominal" },
      y: { field: "Attack Count" },
      guides: false
    })
    .encodeBarWidth({ band: 1 })
    .editBarMark({ fill: "#b3de69" })
    .editXScale({ target: "barPlot", paddingInner: 0.1, paddingOuter: 0.05 })
    .editYScale({ target: "barPlot", domain: [0, 1100] })
    .createTitle({
      text: "Terrorist Attacks with Explosives in Iraq by Province",
      offset: -3,
      titleStyle: { fontSize: 13, fontWeight: 700, fontFamily: "sans-serif" }
    })
    .createGuides({
      axes: {
        x: {
          line: { color: "#888", lineWidth: 1 },
          ticksAndLabels: {
            ticks: { length: 5, color: "#888", lineWidth: 1 },
            labels: {
              fontSize: 10,
              fontFamily: "sans-serif",
              offset: 7,
              rotation: { value: -90, unit: "degrees" }
            }
          },
          title: { text: "Province/State", fontSize: 11, fontWeight: 700, offset: 80 }
        },
        y: {
          line: { color: "#888", lineWidth: 1 },
          ticksAndLabels: {
            values: [0, 100, 200, 300, 400, 500, 600, 700, 800, 900, 1000, 1100],
            ticks: { length: 5, color: "#888", lineWidth: 1 },
            labels: { fontSize: 10, fontFamily: "sans-serif", offset: 7 }
          },
          title: { text: "Attack Count", fontSize: 11, fontWeight: 700, offset: 45 }
        }
      },
      grid: { horizontal: { color: "#ddd", lineWidth: 1 } }
    });
}