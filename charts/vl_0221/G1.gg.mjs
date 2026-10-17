// DOCS: doc-fc11e9fb291905d1, doc-6c2c08869091f6a0
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({ width: 347, height: 375, margin: { left: 29, top: 40, right: 18, bottom: 35 } })
    .createData({ id: "imf", values: data })
    .createComputedData({
      id: "imfB",
      as: "TotalsB",
      expression: {
        op: "divide",
        left: { op: "toNumber", operand: { field: "Totals" } },
        right: { constant: 1000000000 }
      }
    })
    .createBarPlot({
      x: { field: "Date", fieldType: "temporal", scale: { domain: [421086786206, 1661671613793], range: [29, 329] } },
      y: { field: "TotalsB", fieldType: "quantitative", scale: { domain: [0, 110] } },
      guides: false
    })
    .editBarMark({ fill: "rgb(153,206,58)" })
    .encodeBarWidth({ pixels: 5 })
    .createAxes({
      x: {
        line: { color: "#888" },
        ticksAndLabels: {
          values: [473385600000, 631152000000, 788918400000, 946684800000, 1104537600000, 1262304000000, 1420070400000, 1577836800000],
          ticks: { length: 0 },
          labels: { format: "%Y", fontSize: 10, offset: 7, rotation: { value: 45, unit: "degrees" } }
        },
        title: false
      },
      y: {
        line: { color: "#888" },
        ticksAndLabels: {
          values: [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110],
          ticks: {},
          labels: { fontSize: 10, offset: 7 }
        },
        title: false
      }
    })
    .createTitle({
      text: "IMF LENDING OUTSTANDING",
      titleStyle: { fontSize: 13, fontWeight: 700, color: "black", fontFamily: "sans-serif" },
      subtitleStyle: { fontSize: 10, fontStyle: "italic", color: "black", fontFamily: "sans-serif" }
    })
    .editTitle({
      subtitle: "CREDIT OUTSTANDING TO ALL MENBERS,SDRs(BILLIONS),Source:IMF",
      offset: -7,
      alongOffset: -23.7
    });
}