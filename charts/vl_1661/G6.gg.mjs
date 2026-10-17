// DOCS: doc-6c2c08869091f6a0 (createBarPlot), doc-fc11e9fb291905d1 (createBarPlot)
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    // G1: settled static first render — bar chart with opacity-mapped bars
    .createCanvas({
      width: 84,
      height: 247,
      margin: { left: 39, top: 10, right: 5, bottom: 37 }
    })
    .createData({ values: data })
    .createBarPlot({
      x: {
        field: "a",
        fieldType: "ordinal"
      },
      y: {
        field: "b",
        fieldType: "quantitative"
      },
      guides: false
    })
    .editXScale({ domain: ["A", "B"], paddingInner: 0.1, paddingOuter: 0.05 })
    .editYScale({ domain: [0, 20] })
    .encodeBarWidth({ pixels: 18 })
    .encodeOpacity({
      field: "b",
      fieldType: "quantitative",
      scale: { domain: [10, 20], range: [0.3, 0.8] }
    })
    .createXAxis({
      line: {},
      ticksAndLabels: {
        values: ["A", "B"],
        ticks: {},
        labels: { fontSize: 10, offset: 7 }
      },
      title: { text: "a", fontSize: 11, offset: 28 }
    })
    .createYAxis({
      line: {},
      ticksAndLabels: {
        values: [0, 5, 10, 15, 20],
        ticks: { length: 5 },
        labels: { fontSize: 10, offset: 7 }
      },
      title: { text: "b", fontSize: 11, offset: 26 }
    })
    .createGrid({ vertical: false, horizontal: { scale: "y", color: "#ddd" } })
    .editYAxisLine({ color: "#888" })
    .editXAxisTitle({ fontWeight: "bold" })
    .editYAxisTitle({ fontWeight: "bold" });
}
