import { chart } from "ggaction";
import data from "./data.json";
// DOCS: doc-6c2c08869091f6a0, doc-fc11e9fb291905d1
export function buildChart() {
  return chart()
    .createCanvas({ width: 335, height: 370, margin: { left: 29, top: 40, right: 6, bottom: 30 } })
    .createData({ values: data })
    .createComputedData({
      id: "billions-computed",
      as: "billions",
      expression: { op: "divide", left: { op: "toNumber", operand: { field: "Totals" } }, right: { constant: 1000000000 } }
    })
    .createTitle({
      text: "IMF Lending Outstanding",
      titleStyle: { fontSize: 13, fontFamily: "sans-serif" },
      alongOffset: -23.7
    })
    .editTitle({
      offset: -9,
      subtitle: "Credit outstanding to all members, SDRs (nominal $billions). Source: IMF",
      subtitleStyle: { fontSize: 10, fontStyle: "italic", fontFamily: "sans-serif", color: "black" }
    })
    .createBarPlot({
      x: { field: "Year", fieldType: "temporal", temporalUnit: "year" },
      y: { field: "billions", fieldType: "quantitative" },
      guides: false
    })
    .editXScale({ domain: [421086786206, 1661671613793], nice: false, range: [29, 329] })
    .editYScale({ domain: [0, 110] })
    .encodeBarWidth({ pixels: 5 })
    .editBarMark({ fill: "#6b788c" })
    .createXAxis({
      line: {},
      title: false,
      ticksAndLabels: {
        ticks: { length: 0 },
        values: [473385600000, 631152000000, 788918400000, 946684800000, 1104537600000, 1262304000000, 1420070400000, 1577836800000],
        labels: {
          fontSize: 10,
          offset: 2,
          rotation: { value: 45, unit: "degrees" }
        }
      }
    })
    
    .createYAxis({
      line: {},
      title: false,
      ticksAndLabels: {
        ticks: {},
        values: [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110],
        labels: {
          fontSize: 10,
          offset: 7
        }
      }
    })
    .editTitle({ titleStyle: { fontWeight: 700, color: "black" } })
    .editXAxisLabels({ format: "%Y", fontFamily: "sans-serif", color: "black" })
    .editYAxisLabels({ fontFamily: "sans-serif", color: "black" });
}
