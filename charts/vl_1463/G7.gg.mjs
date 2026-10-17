// DOCS: doc-e790db38fc2a278a, doc-76573a465e2b6a33, doc-2fcdfbdfb290e440
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({
      width: 446,
      height: 347,
      margin: { left: 39, top: 10, right: 7, bottom: 37 }
    })
    .createData({ values: data })
    .createScatterPlot({
      x: { field: "length", fieldType: "quantitative" },
      y: { field: "weight", fieldType: "quantitative" },
      guides: false
    })
    .editXScale({ target: "scatterPlot", domain: [0, 2] })
    .editYScale({ target: "scatterPlot", domain: [0, 16] })
    .createLinePlot({
      x: "length",
      y: "predicted",
      guides: false
    })
    .encodeStroke({ target: "linePlot", value: "orange" })
    .encodeStrokeWidth({ target: "linePlot", value: 2 })
    .editXScale({ target: "linePlot", domain: [0, 2] })
    .editYScale({ target: "linePlot", domain: [0, 16] })
    .encodeOpacity({ target: "scatterPlot", value: 0.7 })
    .editPointMark({ target: "scatterPlot", fill: "#4c78a8" })
    .encodePointRadius({ target: "scatterPlot", value: 2.7386127875258306 })
    .createXAxis({
      line: {},
      ticksAndLabels: {
        values: [0, 0.2, 0.4, 0.6, 0.8, 1, 1.2, 1.4, 1.6, 1.8, 2],
        ticks: { length: 5 },
        labels: { fontSize: 10, offset: 7, flush: true }
      },
      title: { text: "Length", fontSize: 11, offset: 28 }
    })
    .createYAxis({
      line: {},
      ticksAndLabels: {
        values: [0, 2, 4, 6, 8, 10, 12, 14, 16],
        ticks: { length: 5 },
        labels: { fontSize: 10, offset: 7 }
      },
      title: { text: "Weight", fontSize: 11, offset: 28, rotation: { value: -90, unit: "degrees" } }
    })
    .editXAxisLine({ color: "#888" })
    .editXAxisTicks({ color: "#888" })
    .editXAxis({
      ticksAndLabels: { labels: { format: ".1f" } },
      title: { fontWeight: 700 }
    })
    .editYAxisLine({ color: "#888" })
    .editYAxisTicks({ color: "#888" })
    .editYAxis({
      title: { fontWeight: 700 }
    })
    .createGrid({ horizontal: true, vertical: true })
    .editHorizontalGrid({ color: "#ddd" })
    .editVerticalGrid({ color: "#ddd" });;;
}
