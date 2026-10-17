// DOCS: doc-b11b4627b143730d, doc-2a31551f1566fc6b, doc-76573a465e2b6a33
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({
      width: 453,
      height: 347,
      margin: { left: 47, top: 10, right: 6, bottom: 37 }
    })
    .createData({ values: data })
    .createLinePlot({
      x: { field: "x", fieldType: "quantitative" },
      y: { field: "f(x)", fieldType: "quantitative" },
      guides: false
    })
    .editLineMark({ stroke: "#4c78a8", strokeWidth: 2 })
    .editXScale({ domain: [0, 100] })
    .editYScale({ domain: [-1, 1] })
    .createXAxis({
      line: {},
      ticksAndLabels: {
        values: [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100],
        ticks: { length: 5 },
        labels: { fontSize: 10, offset: 7, flush: true }
      },
      title: { text: "x", fontSize: 11, offset: 28 }
    })
    .createYAxis({
      line: {},
      ticksAndLabels: {
        values: [-1, -0.8, -0.6, -0.4, -0.2, 0, 0.2, 0.4, 0.6, 0.8, 1],
        ticks: { length: 5 },
        labels: { fontSize: 10, offset: 7 }
      },
      title: { text: "f(x)", fontSize: 11, offset: 37, rotation: { value: -90, unit: "degrees" } }
    })
    .editXAxisLabels({ fontFamily: "sans-serif" })
    .editXAxisTitle({ fontFamily: "sans-serif", fontWeight: 700 })
    .editYAxisLabels({ format: ".1f", fontFamily: "sans-serif" })
    .editYAxisTitle({ fontFamily: "sans-serif", fontWeight: 700 })
    .createGrid({ horizontal: true, vertical: true })
    .editHorizontalGrid({ color: "#ddd" })
    .editVerticalGrid({ color: "#ddd" });
}
