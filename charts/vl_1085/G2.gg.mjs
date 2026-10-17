import { chart } from "ggaction";
import data from "./data.json";

// DOCS: doc-6c2c08869091f6a0, doc-fc11e9fb291905d1
export function buildChart() {
  return chart()
    .createCanvas({ width: 384, height: 426, margin: { left: 29, top: 40, right: 5, bottom: 36 } })
    .createData({ values: data })
    .createComputedData({
      id: "totalsNum",
      as: "totalsNum",
      expression: { op: "toNumber", operand: { field: "totals in billions" } }
    })
    .createBarPlot({
      x: {
        field: "Year",
        fieldType: "temporal",
        temporalUnit: "year"
      },
      y: {
        field: "totalsNum"
      },
      guides: false
    })
    .editYScale({ domain: [0, 110], nice: false })
    .editXScale({
      domain: [424127435294, 1658630964705],
      nice: false,
      range: [29, 379]
    })
    .editBarMark({ fill: "#423abb" })
    .encodeBarWidth({ pixels: 5 })
    .createTitle({
      text: "IMF Lending Outstanding",
      titleStyle: { fontSize: 13, fontFamily: "sans-serif" },
      alongOffset: -23.6845703125
    })
    .editTitle({ offset: -13, gap: 3, titleStyle: { fontWeight: 700, color: "black" } })
    .editTitle({
      subtitle: "Credit outstanding to all members, SDR's (billions), source:IMF",
      subtitleStyle: { fontSize: 10, fontStyle: "italic", fontFamily: "sans-serif", color: "black" }
    })
    .createAxes({
      x: {
        line: {},
        ticksAndLabels: {
          ticks: { length: 0 },
          labels: {
            fontSize: 10,
            offset: 7,
            rotation: { value: 45, unit: "degrees" }
          },
          values: [
            473385600000, 631152000000, 788918400000, 946684800000,
            1104537600000, 1262304000000, 1420070400000, 1577836800000
          ]
        },
        title: false
      },
      y: {
        line: {},
        ticksAndLabels: {
          values: [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110],
          labels: { fontSize: 10, offset: 7 }
        },
        title: false
      }
    })

}