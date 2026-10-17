import { chart } from "ggaction";
import data from "./data.json";

// DOCS: doc-e790db38fc2a278a createScatterPlot facade; grid-only axes via createGrid per referenceGridAxisSpecs
export function buildChart() {
  return chart()
    .createCanvas({
      width: 547,
      height: 347,
      margin: { left: 39, top: 10, right: 8, bottom: 37 }
    })
    .createData({ values: data })
    .createScatterPlot({
      x: { field: "length", fieldType: "quantitative" },
      y: { field: "weight", fieldType: "quantitative" },
      guides: false
    })
    .editXScale({ domain: [0, 2] })
    .editYScale({ domain: [0, 14] })
    .editPointMark({ fill: "green", opacity: 0.7 })
    .encodePointRadius({ value: 2.7386127875258306 })
    .createXAxis({
      line: {},
      ticksAndLabels: {
        values: [0, 0.2, 0.4, 0.6, 0.8, 1, 1.2, 1.4, 1.6, 1.8, 2],
        ticks: { length: 5 },
        labels: { fontSize: 10, fontFamily: "sans-serif", offset: 7, format: ".1f", flush: true }
      },
      title: { text: "length", fontSize: 11, fontWeight: 700, fontFamily: "sans-serif", offset: 28 }
    })
    .editXAxisLine({ color: "#888" })
    .editXAxisTicks({ color: "#888" })
    .editXAxisLabels({ color: "black" })
    .editXAxisTitle({ color: "black" })
    .createYAxis({
      line: {},
      ticksAndLabels: {
        values: [0, 2, 4, 6, 8, 10, 12, 14],
        ticks: { length: 5 },
        labels: { fontSize: 10, fontFamily: "sans-serif", offset: 7 }
      },
      title: { text: "weight", fontSize: 11, fontWeight: 700, fontFamily: "sans-serif", offset: 32, rotation: { value: -90, unit: "degrees" } }
    })
    .editYAxisLine({ color: "#888" })
    .editYAxisTicks({ color: "#888" })
    .editYAxisLabels({ color: "black" })
    .editYAxisTitle({ color: "black" })
    .createGrid({ horizontal: { color: "#ddd" }, vertical: { color: "#ddd" } });
}
