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
      line: {},
      ticksAndLabels: {
        count: 5,
        ticks: { length: 5 },
        labels: { fontSize: 10, offset: 7, format: "%d" }
      },
      title: { text: "date", fontSize: 11, offset: 28 }
    })
    .createYAxis({
      line: {},
      ticksAndLabels: {
        count: 6,
        ticks: { length: 5 },
        labels: { fontSize: 10, offset: 7 }
      },
      title: { text: "count", fontSize: 11, offset: 28 }
    })
    .editXAxisTitle({ fontWeight: 700 })
    .editYAxisTitle({ fontWeight: 700 })
    .editXAxisLine({ color: "#888" })
    .editXAxisTicks({ color: "#888" })
    .editXAxisLabels({ fontFamily: "sans-serif" })
    .editYAxisLine({ color: "#888" })
    .editYAxisTicks({ color: "#888" })
    .editYAxisLabels({ fontFamily: "sans-serif" })
    .createHorizontalGrid({
      color: "#ddd",
      lineWidth: 1
    })
    .createVerticalGrid({
      color: "#ddd",
      lineWidth: 1
    })
    .createTitle({
      text: "Line Chart Example",
      titleStyle: { fontSize: 13, fontWeight: 700, fontFamily: "sans-serif" },
      offset: -13
    });
}
