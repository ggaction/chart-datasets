// DOCS: doc-b11b4627b143730d, doc-8a4f6f06e0d37d5e, doc-a929fd81abd909f8
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({
      width: 256,
      height: 246,
      margin: { left: 44, top: 9, right: 12, bottom: 37 }
    })
    .createData({ id: "data", values: data })
    .createLinePlot({
      x: { field: "x", fieldType: "quantitative" },
      y: { field: "y", fieldType: "quantitative" },
      guides: false
    })
    .editXScale({ domain: [0, 100] })
    .editYScale({ domain: [0, 100] })
    .editLineMark({ stroke: "gray", strokeWidth: 2 })
    .createScatterPlot({
      x: { field: "x", fieldType: "quantitative" },
      y: { field: "y", fieldType: "quantitative" },
      guides: false
    })
    .editPointMark({ fill: "yellow", stroke: "rgba(0, 0, 0, 0.4)", strokeWidth: 1 })
    .encodePointRadius({ value: 2.7386127875258306 })
    .createXAxis({
      line: {},
      ticksAndLabels: {
        values: [1, 25, 39, 90],
        ticks: { alongOffset: 10 },
        labels: { fontSize: 10, alongOffset: 20, offset: 7, flush: true }
      },
      title: { text: "x", fontSize: 11, offset: 31 }
    })
    .createYAxis({
      line: {},
      ticksAndLabels: {
        count: 5,
        ticks: { alongOffset: 10 },
        labels: { fontSize: 10, alongOffset: 20, offset: 7 }
      },
      title: { text: "y", fontSize: 11, offset: 35 }
    })
    .editXAxisLine({ color: "orange" })
    .editYAxisLine({ color: "orange" })
    .editXAxisLabels({ fontFamily: "Comic Sans MS" })
    .editYAxisLabels({ fontFamily: "Comic Sans MS" })
    .editXAxisTitle({ fontWeight: 700 })
    .editYAxisTitle({ fontWeight: 700 })
    .createGrid({
      horizontal: { count: 5 },
      vertical: { values: [1, 25, 39, 90] }
    })
    .editGrid({
      horizontal: { color: "seagreen", alongOffset: 10 },
      vertical: { color: "seagreen", alongOffset: 10 }
    });
}
