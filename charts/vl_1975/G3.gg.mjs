// DOCS: doc-76573a465e2b6a33, doc-071c93dff3a5ea2e, doc-2a31551f1566fc6b
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({
      width: 247,
      height: 262,
      margin: { left: 39, top: 25, right: 8, bottom: 37 }
    })
    .createData({ values: data })
    .createComputedData({
      id: "t",
      as: "t",
      expression: { op: "parseTime", operand: { field: "label" }, format: "%Y-%m-%d" }
    })
    .createLinePlot({
      x: { field: "t", fieldType: "temporal" },
      y: { field: "value" },
      guides: false
    })
    .editLineMark({ stroke: "#4c78a8", strokeWidth: 2 })
    .createScatterPlot({
      x: { field: "t", fieldType: "temporal" },
      y: { field: "value" },
      guides: false
    })
    .editXScale({ target: "linePlot", domain: [1589932800000, 1592265600000] })
    .editYScale({ target: "linePlot", domain: [0, 26] })
    .editXScale({ target: "scatterPlot", domain: [1589932800000, 1592265600000] })
    .editYScale({ target: "scatterPlot", domain: [0, 26] })
    .encodePointRadius({ value: 2.7386127875258306 })
    .editPointMark({ opacity: 1 })
    .createXAxis({
      line: { color: "#888" },
      ticksAndLabels: {
        count: 5,
        ticks: { length: 5, color: "#888" },
        labels: { fontSize: 10, fontFamily: "sans-serif", offset: 7, format: "%d" }
      },
      title: { text: "date", fontSize: 11, fontWeight: 700, fontFamily: "sans-serif", offset: 28 }
    })
    .createYAxis({
      line: { color: "#888" },
      ticksAndLabels: {
        count: 6,
        ticks: { length: 5, color: "#888" },
        labels: { fontSize: 10, fontFamily: "sans-serif", offset: 7 }
      },
      title: { text: "count", fontSize: 11, fontWeight: 700, fontFamily: "sans-serif", offset: 28 }
    })
    .createGrid({
      horizontal: { color: "#ddd", lineWidth: 1 },
      vertical: { color: "#ddd", lineWidth: 1 }
    })
    .createTitle({
      text: "Line Chart Example",
      titleStyle: { fontSize: 13, fontWeight: 700, fontFamily: "sans-serif" },
      offset: -13
    });
}
