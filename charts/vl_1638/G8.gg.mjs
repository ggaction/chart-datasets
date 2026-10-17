// DOCS: doc-b11b4627b143730d (createLinePlot), doc-76573a465e2b6a33 (createScatterPlot overlay)
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({
      width: 252,
      height: 245,
      margin: { left: 44, top: 8, right: 8, bottom: 37 }
    })
    .createData({ values: data })
    .createLinePlot({
      x: { field: "x", fieldType: "quantitative" },
      y: { field: "y", fieldType: "quantitative" },
      guides: false
    })
    .editXScale({ domain: [1, 4] })
    .editYScale({ domain: [95, 105] })
    .editLineMark({ stroke: "#4c78a8", strokeWidth: 2 })
    .createScatterPlot({
      x: { field: "x", fieldType: "quantitative" },
      y: { field: "y", fieldType: "quantitative" },
      guides: false
    })
    .editPointMark({ target: "scatterPlot", fill: "#4c78a8", opacity: 1 })
    .encodePointRadius({ value: 2.7386127875258306, target: "scatterPlot" })
    .createGrid({
      horizontal: { values: [96, 98, 100, 102, 104] , color: '#ddd'}
    })
    .createXAxis({
      ticksAndLabels: {
        values: [1, 1.5, 2, 2.5, 3, 3.5, 4],
        ticks: { length: 4 },
        labels: { offset: 7 }
      },
      title: { text: "x", offset: 27 }
    })
    .createYAxis({
      ticksAndLabels: {
        values: [96, 98, 100, 102, 104],
        ticks: { length: 4 },
        labels: { offset: 7, fontSize: 10 }
      },
      title: { text: "y", offset: 33, fontSize: 11 }
    })
    .editXAxisTicks({ color: "#888", lineWidth: 1 })
    .editXAxisLabels({ fontSize: 10, fontFamily: "sans-serif", color: "black" })
    .editXAxisTitle({ fontSize: 11, fontWeight: "bold", fontFamily: "sans-serif" })
    .editYAxisTicks({ color: "#888", lineWidth: 1 })
    .editYAxisLabels({ fontFamily: "sans-serif", color: "black" })
    .editYAxisTitle({ fontWeight: "bold", fontFamily: "sans-serif" })
    .createVerticalGrid({color:'#ddd'});
}
