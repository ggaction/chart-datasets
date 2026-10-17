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
    .editLineMark({ stroke: "orange", strokeWidth: 2 })
    .editXScale({ target: "linePlot", domain: [0, 2] })
    .editYScale({ target: "linePlot", domain: [0, 16] })
    .editPointMark({ target: "scatterPlot", fill: "#4c78a8", opacity: 0.7 })
    .encodePointRadius({ target: "scatterPlot", value: 2.7386127875258306 })
    .createXAxis({
      line: { color: "#888" },
      ticksAndLabels: {
        values: [0, 0.2, 0.4, 0.6, 0.8, 1, 1.2, 1.4, 1.6, 1.8, 2],
        ticks: { length: 5, color: "#888" },
        labels: { fontSize: 10, offset: 7, format: ".1f", flush: true }
      },
      title: { text: "Length", fontSize: 11, fontWeight: 700, offset: 28 }
    })
    .createYAxis({
      line: { color: "#888" },
      ticksAndLabels: {
        values: [0, 2, 4, 6, 8, 10, 12, 14, 16],
        ticks: { length: 5, color: "#888" },
        labels: { fontSize: 10, offset: 7 }
      },
      title: { text: "Weight", fontSize: 11, fontWeight: 700, offset: 28, rotation: { value: -90, unit: "degrees" } }
    })
    .createGrid({ horizontal: { color: "#ddd" }, vertical: { color: "#ddd" } });;
}
