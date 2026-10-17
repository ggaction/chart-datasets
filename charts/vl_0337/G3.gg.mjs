// DOCS: doc-b11b4627b143730d (createLinePlot), doc-76573a465e2b6a33 (basic-charts)
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({ width: 338, height: 357, margin: { left: 29, top: 40, right: 9, bottom: 17 } })
    .createData({ values: data })
    .createComputedData({
      id: "wagesNum",
      as: "valueNum",
      expression: { op: "toNumber", operand: { field: "value" } }
    })
    .createLinePlot({
      x: { field: "date", fieldType: "temporal" },
      y: { field: "valueNum", fieldType: "quantitative" },
      guides: false
    })
    .editXScale({ domain: [283996800000, 1609459200000], nice: false })
    .editYScale({ domain: [0, 400] })
    .encodeStroke({ value: "blue" })
    .encodeStrokeWidth({ value: 2 })
    .editLineMark({ curve: "monotone" })
    .createAxes({
      x: {
        line: {},
        ticksAndLabels: {
          values: [315532800000, 473385600000, 631152000000, 788918400000, 946684800000,
            1104537600000, 1262304000000, 1420070400000, 1577836800000],
          ticks: { length: 0 },
          labels: { fontSize: 10, fontFamily: "sans-serif", offset: 2, format: "%Y" }
        },
        title: false
      },
      y: {
        line: {},
        ticksAndLabels: {
          values: [0, 50, 100, 150, 200, 250, 300, 350, 400],
          labels: { fontSize: 10, fontFamily: "sans-serif", offset: 7 }
        },
        title: false
      }
    })
    .createTitle({
      text: "Median wages",
      titleStyle: { fontSize: 13, fontWeight: 700, fontFamily: "sans-serif", color: "black" },
      subtitleStyle: { fontSize: 10, fontStyle: "italic", fontFamily: "sans-serif", color: "black" }
    })
    .editTitle({ offset: -13, alongOffset: -23.6845703125, gap: 1 })
    .editTitle({ subtitle: "Employed full time: Median usual weekly real earnings (BLS via FRED)" });
}
