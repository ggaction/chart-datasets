// DOCS: doc-e790db38fc2a278a doc-2bd5de4bd99e314a
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({ width: 330, height: 369, margin: { left: 24, top: 47, right: 6, bottom: 22 } })
    .editCanvas({ background: "#122b39" })
    .createData({ values: data })
    .createComputedData({ id: "xNum", as: "incomeDeprevationNum", expression: { op: "toNumber", operand: { field: "incomeDeprevation" } } })
    .createComputedData({ id: "yNum", as: "maleLENum", expression: { op: "toNumber", operand: { field: "maleLE" } } })
    .createScatterPlot({
      x: { field: "incomeDeprevationNum" },
      y: { field: "maleLENum" },
      guides: false
    })
    .editXScale({ domain: [0, 0.4] })
    .editYScale({ domain: [60, 85] })
    .encodePointRadius({ value: 5 })
    .editPointMark({ fill: "hotpink", opacity: 0.7, stroke: false })
    .createTitle({
      text: "Glasgow: deprivation and life expectancy",
      offset: -13,
      titleStyle: { fontSize: 13, fontFamily: "sans-serif" }
    })
    .editTitle({
      subtitle: "% of residents income deprived (x) and male life expectancy (y)",
      gap: 3,
      subtitleStyle: { color: "white", fontSize: 10, fontStyle: "italic", fontFamily: "sans-serif" }
    })
    .editTitle({ alongOffset: -18.123046875, titleStyle: { color: "white", fontWeight: 700 } })
    .createXAxis({
      ticksAndLabels: {
        values: [0, 0.05, 0.1, 0.15, 0.2, 0.25, 0.3, 0.35, 0.4],
        labels: { labelMap: [{ value: 0, label: "0%" }, { value: 0.05, label: "" }, { value: 0.1, label: "10%" }, { value: 0.15, label: "" }, { value: 0.2, label: "20%" }, { value: 0.25, label: "" }, { value: 0.3, label: "30%" }, { value: 0.35, label: "" }, { value: 0.4, label: "40%" }], fontSize: 10, offset: 7, flush: true }
      },
      title: false
    })
    .editXAxisLine({ color: "dimgrey" })
    .editXAxisTicks({ color: "pink" })
    .editXAxisLabels({ color: "#00a767", fontFamily: "sans-serif" })
    .createYAxis({
      ticksAndLabels: {
        values: [60, 62, 64, 66, 68, 70, 72, 74, 76, 78, 80, 82, 84],
        labels: { fontSize: 10, offset: 7 }
      },
      title: false
    })
    .editYAxisLine({ color: "dimgrey" })
    .editYAxisTicks({ color: "pink" })
    .editYAxisLabels({ color: "#00a767", fontFamily: "sans-serif" });
}