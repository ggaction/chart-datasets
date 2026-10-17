// DOCS: doc-e790db38fc2a278a doc-76573a465e2b6a33 doc-48c72317a1a99e17 doc-2bd5de4bd99e314a
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({
      width: 300,
      height: 314,
      margin: { left: 44, top: 27, right: 6, bottom: 37 }
    })
    .editCanvas({
      background: "rgba(255, 255, 255, 0)"
    })
    .createData({ values: data })
    .createComputedData({ id: "heightNum", as: "HeightNum", expression: { op: "toNumber", operand: { field: "Height" } } })
    .createComputedData({ id: "weightNum", as: "WeightNum", expression: { op: "toNumber", operand: { field: "Weight" } } })
    .createScatterPlot({
      x: { field: "HeightNum", fieldType: "quantitative" },
      y: { field: "WeightNum", fieldType: "quantitative" },
      guides: false
    })
    .editXScale({ target: "scatterPlot", domain: [0, 250] })
    .editYScale({ target: "scatterPlot", domain: [0, 250] })
    .encodePointRadius({ value: 2.7386 })
    .encodeOpacity({ value: 0.7 })
    .editPointMark({ fill: "none", stroke: "#000000", strokeWidth: 2 })
    .createXAxis({
      line: {},
      ticksAndLabels: {
        values: [0, 50, 100, 150, 200, 250],
        ticks: {},
        labels: { fontSize: 10, fontFamily: "sans-serif", offset: 7, flush: true }
      },
      title: { text: "Height", fontSize: 11, fontWeight: 700, fontFamily: "sans-serif", offset: 28 }
    })
    .createYAxis({
      line: {},
      ticksAndLabels: {
        values: [0, 50, 100, 150, 200, 250],
        ticks: {},
        labels: { fontSize: 10, fontFamily: "sans-serif", offset: 7 }
      },
      title: { text: "Weight", fontSize: 11, fontWeight: 700, fontFamily: "sans-serif", offset: 32, rotation: { value: -90, unit: "degrees" } }
    })
    .createGrid({
      horizontal: { color: "#bbbbbb99" },
      vertical: { color: "#bbbbbb99" }
    })
    .createTitle({
      text: "Africa",
      titleStyle: { fontSize: 13, fontWeight: 700, fontFamily: "sans-serif", color: "rgb(0, 0, 0)" },
      offset: -13
    })
    .editTitle({ align: "center" });
}