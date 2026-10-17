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
    .encodeColor({ field: "group", scale: { type: "ordinal", domain: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"], range: { palette: "tableau10" } } })
    .editXScale({ domain: [1589932800000, 1592265600000] })
    .editYScale({ domain: [0, 26] })
    .editLineMark({ strokeWidth: 2 })
    .createScatterPlot({
      x: { field: "label", fieldType: "temporal" },
      y: { field: "value", fieldType: "quantitative" },
      guides: false
    })
    .encodeColor({ target: "scatterPlot", field: "group", scale: { type: "ordinal", domain: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"], range: { palette: "tableau10" } } })
    .encodePointRadius({ value: 2.7386127875258306, target: "scatterPlot" })
    .editPointMark({ target: "scatterPlot", opacity: 1 })
    .createAxes({
      x: {
        ticksAndLabels: {
          count: 5,
          ticks: { length: 5 },
          labels: { format: "%d", fontSize: 10, fontFamily: "sans-serif", offset: 7 }
        },
        title: { text: "date", fontSize: 11, fontWeight: 700, fontFamily: "sans-serif", offset: 28 }
      },
      y: {
        ticksAndLabels: {
          count: 5,
          ticks: { length: 5 },
          labels: { fontSize: 10, fontFamily: "sans-serif", offset: 7 }
        },
        title: { text: "count", fontSize: 11, fontWeight: 700, fontFamily: "sans-serif", offset: 28 }
      }
    })
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