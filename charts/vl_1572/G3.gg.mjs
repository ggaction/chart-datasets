import { chart } from "ggaction";
import data from "./data.json";

// DOCS: doc-28f4ef7a7aa5765c, doc-36558ee3175924e3, doc-fb3b01cca895bdad, doc-0a1e48878a814143

export function buildChart() {
  return chart()
    // Source outer 252x247, margins from contract; plot area preserved exactly (200x200).
    .createCanvas({
      width: 252,
      height: 247,
      margin: { left: 44, top: 10, right: 8, bottom: 37 }
    })
    // Raw immutable data from ./data.json; no schema invention.
    .createData({ values: data })
    // Line mark with point:true -> scatter overlay with identical bindings, guides:false.
    .createLinePlot({
      x: { field: "x", fieldType: "quantitative" },
      y: { field: "y", fieldType: "quantitative" },
      guides: false
    })
    .editXScale({ domain: [0, 100] })
    .editYScale({ domain: [0, 100] })
    .editLineMark({ stroke: "#4c78a8", strokeWidth: 2 })
    .createScatterPlot({
      x: { field: "x", fieldType: "quantitative" },
      y: { field: "y", fieldType: "quantitative" },
      guides: false
    })
    .editPointMark({ fill: "#4c78a8", opacity: 1, stroke: false })
    .encodePointRadius({ value: 2.7386127875258306 })
    // Grid-only axes from referenceGridAxisSpecs (grid:true there); grid lines only.
    .createGrid({
      vertical: { scale: "x", color: "#ddd" },
      horizontal: { scale: "y", color: "#ddd" }
 })
    // Complete X axis with source title, tick values and x labelExpr (value/100) via labelMap.
    .createXAxis({
      ticksAndLabels: {
        values: [0, 20, 40, 60, 80, 100],
        ticks: { length: 5 },
        labels: {
          fontSize: 10,
          offset: 7,
          labelMap: [
            { value: 0, label: "0" },
            { value: 20, label: "0.2" },
            { value: 40, label: "0.4" },
            { value: 60, label: "0.6" },
            { value: 80, label: "0.8" },
            { value: 100, label: "1" }
          ]
        }
      },
      title: { text: "x", fontSize: 11, fontWeight: "bold", offset: 28 }
    })
    // Complete Y axis with source title, tick values and labels.
    .createYAxis({
      ticksAndLabels: {
        values: [0, 20, 40, 60, 80, 100],
        ticks: { length: 5 },
        labels: { fontSize: 10, offset: 7 }
      },
      title: { text: "y", fontSize: 11, fontWeight: "bold", offset: 33 }
    });
}