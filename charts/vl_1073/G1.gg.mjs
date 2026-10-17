import { chart } from "ggaction";
import data from "./data.json";
// DOCS: doc-b11b4627b143730d, doc-071c93dff3a5ea2e, doc-074cfcd2d7c62d4a

export function buildChart() {
  return chart()
    .createCanvas({ width: 217, height: 242, margin: { left: 24, top: 40, right: 13, bottom: 22 } })
    .createData({ values: data })
    .createComputedData({ id: "lmsNum", as: "valueNum", expression: { op: "toNumber", operand: { field: "value" } } })
    .createLinePlot({
      x: { field: "date", fieldType: "temporal", temporalUnit: "year", scale: { domain: [31536000000, 1609459200000], nice: false } },
      y: { field: "valueNum", scale: { domain: [0, 12] } },
      guides: false
    })
    .editLineMark({ stroke: "seagreen", strokeWidth: 2, opacity: 1 })
    .createGuides({
      axes: {
        x: {
          line: { color: "#888" },
          ticksAndLabels: {
            values: [315532800000, 631152000000, 946684800000, 1262304000000, 1577836800000],
            ticks: {},
            labels: { fontFamily: "sans-serif", fontSize: 10, offset: 7, color: "black" }
          },
          title: false
        },
        y: {
          line: { color: "#888" },
          ticksAndLabels: {
            values: [0, 2, 4, 6, 8, 10, 12],
            ticks: {},
            labels: { fontFamily: "sans-serif", fontSize: 10, offset: 7, color: "black" }
          },
          title: false
        }
      },
      grid: {
        horizontal: { color: "#ddd", lineWidth: 1, values: [0, 2, 4, 6, 8, 10, 12] },
        vertical: { color: "#ddd", lineWidth: 1, values: [315532800000, 631152000000, 946684800000, 1262304000000, 1577836800000] }
      },
      legend: false
    })
    .createTitle({
      text: "Unemployment rate %",
      titleStyle: { fontFamily: "sans-serif", fontSize: 13, fontWeight: 700, color: "black" },
      subtitleStyle: { fontFamily: "sans-serif", fontSize: 10, fontStyle: "italic", color: "black" }
    })
    .editTitle({ offset: -13, alongOffset: -18 })
    .editTitle({ subtitle: "(aged 16 and over, seasonally adjusted)", gap: 3 });
}