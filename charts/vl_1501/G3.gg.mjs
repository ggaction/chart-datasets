import { chart } from "ggaction";
import data from "./data.json";
// DOCS: doc-6c2c08869091f6a0, doc-fc11e9fb291905d1, doc-b257fb08998617a5

export function buildChart() {
  return chart()
    .createCanvas({ width: 240, height: 431, margin: { left: 60, top: 22, right: 60, bottom: 109 } })
    .createData({ values: data })
    .createStackData({
      category: "username",
      group: "repo",
      value: "closed"
    })
    .createTitle({
      text: "Merges for numpy in the last 10 days",
      titleStyle: { fontSize: 13, fontWeight: 700, fontFamily: "sans-serif" },
      offset: -13,
      alongOffset: -54.1484375
    })
    .createBarPlot({
      x: { field: "username", fieldType: "nominal" },
      y: { lower: "closed_start", upper: "closed_end", fieldType: "quantitative" },
      guides: false
    })
    .encodeBarWidth({ band: 1 })
    .editXScale({ paddingInner: 0.1, paddingOuter: 0.05 })
    .editYScale({ domain: [0, 26] })
    .createAxes({
      x: {
        ticksAndLabels: {
          ticks: { length: 5 },
          labels: { rotation: { value: -90, unit: "degrees" }, fontSize: 10, fontFamily: "sans-serif", offset: 7 }
        },
        title: { text: "username", fontSize: 11, fontWeight: 700, offset: 92 }
      },
      y: {
        ticksAndLabels: {
          values: [0, 5, 10, 15, 20, 25],
          ticks: { length: 5 },
          labels: { fontSize: 10, fontFamily: "sans-serif", offset: 6 }
        },
        title: { text: "closed", fontSize: 11, fontWeight: 700, offset: 30 }
      }
    })
    .createGrid({ horizontal: { color: "#ddd", lineWidth: 1 }, vertical: false });
}
