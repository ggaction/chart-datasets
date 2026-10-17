import { chart } from "ggaction";
import data from "./data.json";

// DOCS: doc-6c2c08869091f6a0, doc-fc11e9fb291905d1
export function buildChart() {
  return chart()
    .createCanvas({ width: 317, height: 370, margin: { left: 18, top: 40, right: 39, bottom: 30 } })
    .createData({ values: data })
    .createComputedData({
      id: "gdpNum",
      as: "gdpNum",
      expression: { op: "toNumber", operand: { field: "Totals_GDP" } }
    })
    .createBarPlot({
      guides: false,
      x: { field: "Year", fieldType: "temporal", temporalUnit: "year" },
      y: { field: "gdpNum", fieldType: "quantitative" }
    })
    .editXScale({ domain: [417778560000, 1664979840000], nice: false })
    .editYScale({ domain: [0, 8] })
    .editBarMark({ fill: "#86d0bb" })
    .encodeBarWidth({ pixels: 5 })
    .createTitle({
      text: "IMF Lending Outstanding as a percentage of GDP",
      titleStyle: { fontSize: 13, fontWeight: 700, fontFamily: "sans-serif" },
      alongOffset: -12.5615234375
    })
    .editTitle({ offset: -13, gap: 3 })
    .editTitle({
      subtitle: "Ratio of Credit Outstanding to GDP, Source IMF",
      subtitleStyle: { fontSize: 10, fontStyle: "italic", fontFamily: "sans-serif" }
    })
    .createAxes({
      x: {
        line: {},
        ticksAndLabels: {
          values: [
            473385600000, 631152000000, 788918400000, 946684800000,
            1104537600000, 1262304000000, 1420070400000, 1577836800000
          ],
          ticks: { length: 0 },
          labels: {
            fontSize: 10,
            fontFamily: "sans-serif",
            offset: 2,
            rotation: { value: 45, unit: "degrees" }
          }
        },
        title: false
      },
      y: {
        line: {},
        ticksAndLabels: {
          values: [0, 1, 2, 3, 4, 5, 6, 7, 8],
          ticks: {},
          labels: { fontSize: 10, fontFamily: "sans-serif", offset: 7 }
        },
        title: false
      }
    });
}