import { chart } from "ggaction";
import data from "./data.json";

// DOCS: doc-6c2c08869091f6a0, doc-fc11e9fb291905d1, doc-5f9c35fbf79658cc, doc-ba092ec842bafcc1
export function buildChart() {
  return chart()
    .createCanvas({ width: 323, height: 370, margin: { left: 24, top: 40, right: 39, bottom: 30 } })
    .createData({ values: data })
    .createComputedData({
      id: "valueNum",
      as: "ValueNum",
      expression: { op: "toNumber", operand: { field: "Value" } }
    })
    .createTitle({
      text: "Green Party representation \u2013 European Parliament",
      titleStyle: { fontSize: 13, fontWeight: 700, color: "black", fontFamily: "sans-serif" },
      offset: -12,
      alongOffset: -18.123046875
    })
    .editTitle({
      subtitle: "% of seats won by election. Source: European Parliament",
      subtitleStyle: { fontSize: 10, fontStyle: "italic", color: "black", fontFamily: "sans-serif" }
    })
    .createBarPlot({
      x: {
        field: "Time",
        fieldType: "nominal",
        scale: { type: "band", domain: ["1984", "1989", "1994", "1999", "2004", "2009", "2014", "2019"], paddingInner: 0.1, paddingOuter: 0.05 }
      },
      y: { field: "ValueNum", fieldType: "quantitative", scale: { domain: [0, 10] } },
      guides: false
    })
    .encodeBarWidth({ band: 1 })
    .editBarMark({ fill: "#86d0bb" })
    .createAxes({
      x: {
        ticksAndLabels: {
          ticks: { length: 0 },
          labels: { fontSize: 10, offset: 5, fontFamily: "sans-serif", rotation: { value: 45, unit: "degrees" } }
        },
        title: false
      },
      y: {
        ticksAndLabels: {
          values: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
          labels: { fontSize: 10, offset: 7, fontFamily: "sans-serif" }
        },
        title: false
      }
    });
}
