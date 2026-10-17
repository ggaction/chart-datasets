// DOCS: doc-76573a465e2b6a33, doc-dfae58344d5a524e, doc-b11b4627b143730d
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({
      width: 252,
      height: 247,
      margin: { top: 10, right: 8, bottom: 37, left: 44 }
    })
    .createData({ values: data })
    .createLinePlot({
      x: { field: "x", fieldType: "quantitative" },
      y: { field: "y", fieldType: "quantitative" },
      guides: false
    })
    .createScatterPlot({
      x: { field: "x", fieldType: "quantitative" },
      y: { field: "y", fieldType: "quantitative" },
      guides: false
    })
    .encodePointRadius({ value: 2.7386127875258306 })
    .editLineMark({ stroke: "#4c78a8", strokeWidth: 2 })
    .editPointMark({ fill: "#4c78a8", opacity: 1 })
    .editXScale({ domain: [0, 100] })
    .editYScale({ domain: [0, 100] })
    .createXAxis({
      line: {},
      ticksAndLabels: {
        values: [0, 20, 40, 60, 80, 100],
        labels: { fontSize: 10, offset: 7, flush: true }
      },
      title: { text: "x", fontSize: 11, fontWeight: 700, offset: 28 }
    })
    .createYAxis({
      line: {},
      ticksAndLabels: {
        values: [0, 20, 40, 60, 80, 100],
        labels: { fontSize: 10, offset: 7 }
      },
      title: { text: "y", fontSize: 11, fontWeight: 700, offset: 35 }
    })
    .createGrid({ horizontal: true, vertical: true })
    .editHorizontalGrid({ color: "#ddd" })
    .editVerticalGrid({ color: "#ddd" });
}
