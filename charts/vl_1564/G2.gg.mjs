import { chart } from "ggaction";
import data from "./data.json";

// DOCS: doc-b11b4627b143730d, doc-76573a465e2b6a33, doc-f30bfed200b50a98, doc-c2eafbbd16fe3c71

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
    .editXScale({ domain: [0, 100] })
    .editYScale({ domain: [0, 100] })
    .editLineMark({ stroke: "gray", strokeWidth: 2 })
    .createScatterPlot({
      x: { field: "x", fieldType: "quantitative" },
      y: { field: "y", fieldType: "quantitative" },
      guides: false
    })
    .encodePointRadius({ value: 2.7386127875258306 })
    .editPointMark({ fill: "yellow", stroke: "rgba(0,0,0,0.4)", opacity: 1 })
    .createAxes({
      x: {
        line: { color: "orange" },
        ticksAndLabels: {
          count: 6,
          ticks: { length: 5, alongOffset: 10, color: "#888" },
          labels: {
            fontFamily: "Comic Sans MS",
            fontSize: 10,
            offset: 7,
            alongOffset: 20,
            color: "#000",
            flush: true
          }
        },
        title: {
          text: "x",
          fontSize: 11,
          fontWeight: 700,
          fontFamily: "sans-serif",
          color: "#000",
          offset: 28
        }
      },
      y: {
        line: { color: "orange" },
        ticksAndLabels: {
          count: 6,
          ticks: { length: 5, alongOffset: 10, color: "#888" },
          labels: {
            fontFamily: "Comic Sans MS",
            fontSize: 10,
            offset: 7,
            alongOffset: 20,
            color: "#000"
          }
        },
        title: {
          text: "y",
          fontSize: 11,
          fontWeight: 700,
          fontFamily: "sans-serif",
          color: "#000",
          offset: 33
        }
      }
    })
    .createGrid({
      horizontal: { scale: "y", color: "seagreen", count: 6, alongOffset: 10 },
      vertical: { scale: "x", color: "seagreen", count: 6, alongOffset: 10 }
    });
}
