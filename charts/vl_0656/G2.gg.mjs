// DOCS: doc-6c2c08869091f6a0, doc-fc11e9fb291905d1, doc-08d24a62ced0d1b8
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({ width: 334, height: 369, margin: { left: 29, top: 52, right: 5, bottom: 17 } })
    .createData({ values: data })
    .createComputedData({
      id: "billions",
      as: "billions",
      expression: {
        op: "divide",
        left: { op: "toNumber", operand: { field: "Totals" } },
        right: { constant: 1000000000 }
      }
    })
    .createBarPlot({
      x: {
        field: "Year",
        fieldType: "temporal",
        temporalUnit: "year"
      },
      y: {
        field: "billions",
        fieldType: "quantitative"
      },
      guides: false
    })
    .editXScale({ nice: false, domain: [421086786206, 1661671613793], range: [29, 329] })
    .editYScale({ domain: [0, 110] })
    .editBarMark({ fill: "rgb(0,47,167)" })
    .encodeBarWidth({ pixels: 5 })
    .createGuides({
      grid: false,
      axes: {
        x: {
          line: { color: "#888" },
          ticksAndLabels: {
            count: 8,
            ticks: { length: 0 },
            labels: { fontSize: 10, offset: 0.5 }
          },
          title: false
        },
        y: {
          line: { color: "#888" },
          ticksAndLabels: {
            count: 12,
            labels: { fontSize: 10, offset: 7 }
          },
          title: false
        }
      }
    })
    .createTitle({
      text: "IMF credit outstanding: total",
      offset: -13,
      titleStyle: { fontSize: 13, fontWeight: 700, color: "black", fontFamily: "sans-serif" }
    })
    .editTitle({
      subtitle: "Lending to IMF members, SDRs (bn). Source: IMF",
      subtitleStyle: { fontSize: 10, fontStyle: "italic", color: "black", fontFamily: "sans-serif" },
      gap: 3
    })
    .editTitle({
      alongOffset: -23.6845703125
    });
}
