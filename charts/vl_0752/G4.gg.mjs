// DOCS: doc-fc11e9fb291905d1 (createBarPlot), doc-6c2c08869091f6a0 (createBarPlot)
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({ width: 337, height: 370, margin: { left: 32, top: 40, right: 5, bottom: 30 } })
    .createData({ id: "imf", values: data })
    .createComputedData({ id: "ratioData", as: "ratio",
      expression: { op: "if",
        condition: { op: "eq", left: { field: "Tot_div_worldGDP" }, right: { constant: "" } },
        then: { constant: 0 },
        else: { op: "toNumber", operand: { field: "Tot_div_worldGDP" } } } })
    .createTitle({ text: "IMF Lending Outstanding Relative to World GDP",
      titleStyle: { fontSize: 13 }, alongOffset: -26.5 })
    .editTitle({ align: "left", offset: -13, titleStyle: { fontFamily: "sans-serif", fontWeight: 700, color: "black" } })
    .editTitle({ subtitle: "Credit outstanding to all members, SDRs (%). Source: IMF",
      subtitleStyle: { fontSize: 10, fontStyle: "italic", fontFamily: "sans-serif", color: "black" }, gap: 1 })
    .createBarPlot({
      x: { field: "Year", fieldType: "temporal" },
      y: { field: "ratio", fieldType: "quantitative" },
      guides: false })
    .editXScale({ domain: [421086786206, 1661671613793], range: [32, 332], nice: false })
    .editYScale({ domain: [0, 0.35] })
    .encodeBarWidth({ pixels: 5 })
    .editBarMark({ fill: "#a6b9d7", stroke: false })
    .createXAxis({ line: {},
      ticksAndLabels: { values: [473385600000, 631152000000, 788918400000, 946684800000, 1104537600000, 1262304000000, 1420070400000, 1577836800000],
        ticks: { length: 0 },
        labels: { fontSize: 10, offset: 2, rotation: { value: 45, unit: "degrees" } } },
      title: false })
    .editXAxisLabels({ format: "%Y" })
    .createYAxis({ line: {},
      ticksAndLabels: { values: [0, 0.05, 0.10, 0.15, 0.20, 0.25, 0.30, 0.35],
        ticks: {}, labels: { fontSize: 10, offset: 7 } },
      title: false })
    .editYAxisLabels({ format: ".2f" });

}
