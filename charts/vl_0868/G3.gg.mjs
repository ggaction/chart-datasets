// DOCS: doc-6c2c08869091f6a0, doc-fc11e9fb291905d1, doc-d357a2ecdb667240
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({ width: 334, height: 388, margin: { left: 29, top: 52, right: 5, bottom: 36 } })
    .createData({ id: "imf", values: data })
  .filterData({
    id: "validYears",
    field: "Year",
    predicate: { op: "neq", value: "" }
  })

    .createComputedData({
      id: "billions",
      as: "billions",
      expression: {
        op: "divide",
        left: { op: "toNumber", operand: { field: "Totals" } },
        right: { constant: 1000000000 }
      }
    })
    .createTitle({
      text: "IMF Leading Outstanding",
      titleStyle: { fontSize: 13, fontFamily: "sans-serif" },
      offset: -4
    })
    .editTitle({
      offset: -13,
      gap: 3,
      titleStyle: { fontWeight: 700, color: "black" }
    })
    .editTitle({
      subtitle: "Credit outstanding to all members, SDRs (billions)\nSource:IMF",
      subtitleStyle: { fontStyle: "italic", fontSize: 10, color: "black", fontFamily: "sans-serif" },
      alongOffset: -23.6845703125
    })
    .createBarPlot({
      x: {
        field: "Year",
        fieldType: "temporal",
        temporalUnit: "year"
      },
      y: { field: "billions" },
      guides: false
    })
    .editYScale({ domain: [0, 110] })
    .editXScale({ domain: [421086786206, 1661671613793], nice: false, range: [29, 329] })
    .encodeBarWidth({ pixels: 5 })
    .editBarMark({ fill: "rgb(0,47,167" })
    .createXAxis({
      line: {},
      ticksAndLabels: {
        values: [473385600000, 631152000000, 788918400000, 946684800000, 1104537600000, 1262304000000, 1420070400000, 1577836800000],
        ticks: { length: 0 },
        labels: {
          fontSize: 10,
          offset: 7,
          rotation: { value: 45, unit: "degrees" }
        }
      },
      title: false
    })
    .createYAxis({
      line: {},
      ticksAndLabels: {
        values: [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110],
        ticks: {},
        labels: { fontSize: 10, offset: 7 }
      },
      title: false
    })
    .editXAxisLine({ color: "#888" })
    .editYAxisLine({ color: "#888" })
    .editXAxisLabels({ color: "black", fontFamily: "sans-serif" })
    .editYAxisLabels({ color: "black", fontFamily: "sans-serif" });
}