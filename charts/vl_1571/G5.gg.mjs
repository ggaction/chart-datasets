import { chart } from "ggaction";
import data from "./data.json";
// DOCS: doc-b11b4627b143730d, doc-76573a465e2b6a33, doc-f30bfed200b50a98, doc-16c583350443cc93, doc-7f2c254224fc4908

export function buildChart() {
  return chart()
    .createCanvas({
      width: 247,
      height: 246,
      margin: { left: 38, top: 9, right: 9, bottom: 37 }
    })
    .createData({ values: data })
    .createLinePlot({
      x: { field: "date", fieldType: "temporal" },
      y: { field: "y", fieldType: "quantitative" },
      guides: false
    })
    .editXScale({ target: "linePlot", domain: [1546333200000, 1547283600000] })
    .editYScale({ target: "linePlot", domain: [0, 12] })
    .editLineMark({ stroke: "gray", strokeWidth: 2 })
    .createScatterPlot({
      x: { field: "date", fieldType: "temporal" },
      y: { field: "y", fieldType: "quantitative" },
      guides: false
    })
    .editXScale({ target: "scatterPlot", domain: [1546333200000, 1547283600000] })
    .editYScale({ target: "scatterPlot", domain: [0, 12] })
    .editPointMark({ fill: "yellow", stroke: "rgba(0,0,0,0.4)", strokeWidth: 1 })
  .encodePointRadius({ value: 2.7386127875258306 })
    .createXAxis({
      line: { color: "brown" },
      ticksAndLabels: {
        values: [1546560000000, 1546905600000],
        ticks: { length: 5 },
        labels: {
          offset: 7,
          color: "purple",
          fontSize: 10,
          labelMap: [
            { value: 1546560000000, label: "Fri 04" },
            { value: 1546905600000, label: "Tue 08" }
          ]
        }
      },
      title: { text: "date", fontSize: 11, fontWeight: 700, offset: 28 }
    })
    .createYAxis({
      line: { color: "orange" },
      ticksAndLabels: {
        ticks: { length: 5, alongOffset: 10 },
        labels: { fontFamily: "Comic Sans MS", fontSize: 10, offset: 10, alongOffset: 10 }
      },
      title: { text: "y", fontSize: 11, fontWeight: 700 }
    })
    .createGrid({ horizontal: { color: "seagreen", alongOffset: 10 } })
  .editYAxis({ title: { offset: 26.02734375 }, ticksAndLabels: { labels: { offset: 6.5 } } })
}