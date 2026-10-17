import { chart } from "ggaction";
import data from "./data.json";

// DOCS: doc-b11b4627b143730d, doc-76573a465e2b6a33, doc-c2eafbbd16fe3c71

const X_DOMAIN = [504921600000, 1546300800000];
const Y_DOMAIN = [0, 0.45];
const X_TICKS = [631152000000, 788918400000, 946684800000, 1104537600000, 1262304000000, 1420070400000];
const Y_TICKS = [0, 0.05, 0.1, 0.15, 0.2, 0.25, 0.3, 0.35, 0.4, 0.45];

export function buildChart() {
  return chart()
    .createCanvas({
      width: 455,
      height: 347,
      margin: { left: 47, top: 10, right: 8, bottom: 37 }
    })
    .createData({ values: data })
    .createLinePlot({
      x: { field: "year", fieldType: "temporal" },
      y: { field: "TW", fieldType: "quantitative" },
      guides: false
    })
    .editXScale({ domain: X_DOMAIN })
    .editYScale({ domain: Y_DOMAIN })
    .encodeStroke({ target: "linePlot", value: "dodgerblue" })
    .encodeStrokeWidth({ target: "linePlot", value: 2 })
    .createScatterPlot({
      x: { field: "year", fieldType: "temporal" },
      y: { field: "TW", fieldType: "quantitative" },
      guides: false
    })
    .encodePointRadius({ value: 2.7386127875258306 })
    .encodeOpacity({ target: "scatterPlot", value: 0.7 })
    .editPointMark({ fill: "dodgerblue" })
    .createXAxis({
      line: {},
      ticksAndLabels: {
        values: X_TICKS,
        labels: { fontSize: 10, offset: 7, fontFamily: "sans-serif" }
      },
      title: { text: "year", fontSize: 11, fontFamily: "sans-serif", offset: 27 }
    })
    .createYAxis({
      line: {},
      ticksAndLabels: {
        values: Y_TICKS,
        labels: { fontSize: 10, offset: 7, fontFamily: "sans-serif" }
      },
      title: { text: "Wind Generation [TW]", fontSize: 11, fontFamily: "sans-serif", offset: 35.5 }
    })
    .editXAxisLabels({ format: "%Y" })
    .editYAxisLabels({ format: ".2f" })
    .editXAxisTitle({ fontWeight: 700 })
    .editYAxisTitle({ fontWeight: 700 })
    .createGrid({ horizontal: {}, vertical: {} })
    .editGrid({ horizontal: { color: "#ddd" }, vertical: { color: "#ddd" } });
}