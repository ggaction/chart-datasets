import { chart } from "ggaction";
import data from "./data.json";
// DOCS: doc-2bd5de4bd99e314a, doc-e790db38fc2a278a, doc-2e6240c00cb297cc, doc-76573a465e2b6a33

export function buildChart() {
  return chart()
    .createCanvas({ width: 485, height: 384, margin: { left: 29, top: 47, right: 6, bottom: 37 } })
    .createData({ values: data })
    .createComputedData({ id: "dPercentile", as: "percentileNum", expression: { op: "toNumber", operand: { field: "Percentile" } } })
    .createComputedData({ id: "dModelValue", as: "modelValueNum", expression: { op: "toNumber", operand: { field: "modelValue" } } })
    .filterData({ id: "dFiltered", field: "modelValueNum", predicate: { op: "lt", value: 300 } })
    .createScatterPlot({ x: "percentileNum", y: "modelValueNum", guides: false })
    .encodePointRadius({ value: 4.7434 })
    .editPointMark({ shape: "circle", fill: "rgb(0,29,159)", opacity: 0.7 })
    .editXScale({ domain: [0, 100] })
    .editYScale({ domain: [0, 260] })
    .createTitle({
      text: "Productivity in 2020 - distribution",
      titleStyle: { fontSize: 13 },
      subtitleStyle: { fontSize: 10, fontStyle: "italic" }
    })
    // Measured 4-key title requirement: source subtitle line, block offset -13 (top 3), gap 3, alongOffset -23.685 (left 5.315 vs plot left 29).
    .editTitle({
      subtitle: "Estimated distribution, turnover £k per employee",
      gap: 3,
      subtitleStyle: { color: "black" }
    })
    .editTitle({ offset: -13, alongOffset: -23.685, titleStyle: { color: "black", fontWeight: 700 } })
    .createXAxis({
      line: {},
      ticksAndLabels: {
        values: [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100],
        ticks: { length: 5 },
        labels: { fontSize: 10, offset: 7, flush: true }
      },
      title: { text: "Percentile", fontSize: 11, offset: 28 }
    })
    .editXAxisLine({ color: "#888" })
    .editXAxisTicksAndLabels({ ticks: { color: "#888" }, labels: { format: ".0f", fontFamily: "sans-serif" } })
    .editXAxisTitle({ fontWeight: 700 })
    .createYAxis({
      line: {},
      ticksAndLabels: {
        values: [0, 50, 100, 150, 200, 250],
        ticks: { length: 5 },
        labels: { fontSize: 10, offset: 7 }
      },
      title: false
    })
    .editYAxisLine({ color: "#888" })
    .editYAxisTicksAndLabels({ ticks: { color: "#888" }, labels: { format: ".0f", fontFamily: "sans-serif" } });
}