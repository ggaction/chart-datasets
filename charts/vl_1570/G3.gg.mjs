// DOCS: doc-b11b4627b143730d doc-76573a465e2b6a33
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({
      width: 247,
      height: 247,
      margin: { left: 39, top: 10, right: 8, bottom: 37 }
    })
    .createData({ id: "data", values: data })
    .createLinePlot({
      x: { field: "date", fieldType: "temporal" },
      y: { field: "y", fieldType: "quantitative" },
      guides: false
    })
    .editXScale({ target: "linePlot", domain: [1546333200000, 1547283600000] })
    .editYScale({ target: "linePlot", domain: [0, 12] })
    .editLineMark({ stroke: "#4c78a8", strokeWidth: 2 })
    .createScatterPlot({
      x: { field: "date", fieldType: "temporal" },
      y: { field: "y", fieldType: "quantitative" },
      guides: false
    })
    .editXScale({ target: "scatterPlot", domain: [1546333200000, 1547283600000] })
    .editYScale({ target: "scatterPlot", domain: [0, 12] })
    .encodePointRadius({ value: 2.7386127875258306 })
    .editPointMark({ fill: "#4c78a8", stroke: false, opacity: 1 })
    .createGrid({
      vertical: { scale: "x", values: [1546569600000, 1546915200000] , color: '#ddd'},
      horizontal: { scale: "y", values: [0, 3, 6, 9, 12] , color: '#ddd'}
    })
    .createXAxis({
      line: {"color":"#888"},
      ticksAndLabels: {
        values: [1546569600000, 1546915200000],
        ticks: { length: 5 },
        labels: {
          fontSize: 10,
          fontFamily: "sans-serif",
          color: "black",
          offset: 7
        }
      },
      title: {
        text: "date",
        fontSize: 11,
        fontWeight: "bold",
        fontFamily: "sans-serif",
        color: "black",
        offset: 28
      }
    })
    .createYAxis({
      line: {"color":"#888"},
      ticksAndLabels: {
        values: [0, 2, 4, 6, 8, 10, 12],
        ticks: { length: 5 },
        labels: {
          fontSize: 10,
          fontFamily: "sans-serif",
          color: "black",
          offset: 7
        }
      },
      title: {
        text: "y",
        fontSize: 11,
        fontWeight: "bold",
        fontFamily: "sans-serif",
        color: "black",
        offset: 32
      }
    });
}
