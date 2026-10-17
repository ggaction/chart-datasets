// DOCS: doc-e790db38fc2a278a, doc-76573a465e2b6a33, doc-7f2c254224fc4908
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({ width: 335, height: 384, margin: { left: 29, top: 47, right: 6, bottom: 37 } })
    .createData({ values: data })
    .createComputedData({ id: "numP", as: "PercentileNum", expression: { op: "toNumber", operand: { field: "Percentile" } } })
    .createComputedData({ id: "numV", as: "modelValueNum", expression: { op: "toNumber", operand: { field: "modelValue" } } })
    .filterData({ id: "filtered", field: "modelValueNum", predicate: { op: "lt", value: 300 } })
    .createScatterPlot({
      x: { field: "PercentileNum", fieldType: "quantitative" },
      y: { field: "modelValueNum", fieldType: "quantitative" },
      guides: false
    })
    .editPointMark({ fill: "rgb(0,29,159)", opacity: 0.7 })
    .encodePointRadius({ value: 4.743 })
    .editXScale({ domain: [0, 100] })
    .editYScale({ domain: [0, 260] })
    .createXAxis({
      line: {},
      ticksAndLabels: {
        values: [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100],
        ticks: {},
        labels: { fontSize: 10, fontFamily: "sans-serif", offset: 7, format: ".0f", flush: true }
      },
      title: { text: "Percentile", fontSize: 11, fontWeight: 700, fontFamily: "sans-serif", offset: 28 }
    })
    .createYAxis({
      line: {},
      ticksAndLabels: {
        values: [0, 50, 100, 150, 200, 250],
        ticks: {},
        labels: { fontSize: 10, fontFamily: "sans-serif", offset: 7, format: ".0f" }
      },
      title: false
    })
    .createTitle({
      text: "Productivity in 2020 - distribution",
      offset: -13,
      titleStyle: { fontSize: 13, fontWeight: 700, fontFamily: "sans-serif", color: "black" }
    })
    .editTitle({
      gap: 3,
    })
    .editTitle({
      subtitle: "Estimated distribution, turnover \u00A3k per employee",
      subtitleStyle: { fontSize: 10, fontStyle: "italic", fontFamily: "sans-serif", color: "black" },
      alongOffset: -23.7
    });
}
