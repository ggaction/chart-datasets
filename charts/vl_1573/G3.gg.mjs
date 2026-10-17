// DOCS: doc-b11b4627b143730d, doc-76573a465e2b6a33, doc-8a4f6f06e0d37d5e, doc-f84a6354ad5070da
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({
      width: 269,
      height: 246,
      margin: { left: 44, top: 9, right: 25, bottom: 37 }
    })
    .createData({ values: data })
    .createLinePlot({
      x: { field: "x", fieldType: "quantitative" },
      y: { field: "y", fieldType: "quantitative" },
      guides: false
    })
    .editXScale({ target: "linePlot", domain: [0, 100] })
    .editYScale({ target: "linePlot", domain: [0, 100] })
    .editLineMark({ stroke: "gray", strokeWidth: 2 })
    .createScatterPlot({
      x: { field: "x", fieldType: "quantitative" },
      y: { field: "y", fieldType: "quantitative" },
      guides: false
    })
    .editXScale({ target: "scatterPlot", domain: [0, 100] })
    .editYScale({ target: "scatterPlot", domain: [0, 100] })
    .editPointMark({ fill: "yellow", stroke: "rgba(0, 0, 0, 0.4)", strokeWidth: 1 })
    .editPointMark({ opacity: 1 })
    .encodePointRadius({ value: 2.7386127875258306, target: "scatterPlot" })
    .createXAxis({
      line: { color: "orange" },
      ticksAndLabels: {
        values: [0, 20, 40, 60, 80, 100],
        ticks: { length: 5, alongOffset: 10 },
        labels: {
          fontSize: 10,
          fontFamily: "Comic Sans MS",
          alongOffset: 10,
          offset: 7,
          flush: true,
          labelMap: [
            { value: 0, label: "0" },
            { value: 20, label: "0.2" },
            { value: 40, label: "0.4" },
            { value: 60, label: "0.6" },
            { value: 80, label: "0.8" },
            { value: 100, label: "1" }
          ]
        }
      },
      title: { text: "x", fontSize: 11, fontWeight: 700, offset: 30 }
    })
    .createYAxis({
      line: { color: "orange" },
      ticksAndLabels: {
        values: [0, 20, 40, 60, 80, 100],
        ticks: { length: 5, alongOffset: 10 },
        labels: { fontSize: 10, fontFamily: "Comic Sans MS", alongOffset: 10, offset: 7 }
      },
      title: { text: "y", fontSize: 11, fontWeight: 700, offset: 31 }
    })
    .createGrid({
      horizontal: { color: "seagreen" },
      vertical: { color: "seagreen" }
    });
}
