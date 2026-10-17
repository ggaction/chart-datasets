// DOCS: doc-8a4f6f06e0d37d5e, doc-9bb354f4e2d46693, doc-b11b4627b143730d
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({ width: 296, height: 322, margin: { left: 39, top: 25, right: 57, bottom: 97 } })
    .createData({ values: data })
    .createLinePlot({
      x: { field: "label", fieldType: "temporal" },
      y: { field: "value", fieldType: "quantitative" },
      guides: false
    })
    .encodeColor({ field: "group" })
    .editXScale({ domain: [1589932800000, 1592265600000] })
    .editYScale({ domain: [0, 26] })
    .editLineMark({ strokeWidth: 2 })
    .createScatterPlot({
      x: { field: "label", fieldType: "temporal" },
      y: { field: "value", fieldType: "quantitative" },
      guides: false
    })
    .encodeColor({ target: "scatterPlot", field: "group" })
    .encodePointRadius({ value: 2.7386127875258306, target: "scatterPlot" })
    .editPointMark({ target: "scatterPlot", opacity: 1 })
    .editColorScale({ domain: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"], range: { palette: "tableau10" } })
    .editColorScale({ target: "scatterPlot", domain: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"], range: { palette: "tableau10" } })
    .createXAxis({
      ticksAndLabels: {
        count: 5,
        ticks: { length: 5 },
        labels: { format: "%d", fontSize: 10, offset: 7 }
      },
      title: { text: "date", fontSize: 11, offset: 28 }
    })
    .editXAxis({ ticksAndLabels: { labels: { fontFamily: "sans-serif" } }, title: { fontWeight: 700, fontFamily: "sans-serif" } })
    .createYAxis({
      ticksAndLabels: {
        count: 5,
        ticks: { length: 5 },
        labels: { fontSize: 10, offset: 7 }
      },
      title: { text: "count", fontSize: 11, offset: 28 }
    })
    .editYAxis({ ticksAndLabels: { labels: { fontFamily: "sans-serif" } }, title: { fontWeight: 700, fontFamily: "sans-serif" } })
    .createGrid({
      horizontal: { color: "#ddd", lineWidth: 1 },
      vertical: { color: "#ddd", lineWidth: 1 }
    })
    .createLegend({
      target: "scatterPlot",
      labels: { fontSize: 10, fontFamily: "sans-serif" },
      titleStyle: { fontSize: 11, fontWeight: 700, fontFamily: "sans-serif" }
    })
    .createTitle({
      text: "Line Chart Example",
      titleStyle: { fontSize: 13, fontWeight: 700, fontFamily: "sans-serif" },
      offset: -13
    });
}