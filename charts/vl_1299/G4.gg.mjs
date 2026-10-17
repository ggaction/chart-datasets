// DOCS: doc-e790db38fc2a278a, doc-bc26da5598d35bae, doc-5b80d9e7442172a5
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({
      width: 686,
      height: 702,
      margin: { left: 80, top: 17, right: 6, bottom: 85 }
    })
    .createData({ values: data })
    .createScatterPlot({
      x: { field: "x", fieldType: "quantitative" },
      y: { field: "y", fieldType: "quantitative" },
      guides: false
    })
    .editXScale({ target: "scatterPlot", domain: [0, 90] })
    .editYScale({ target: "scatterPlot", domain: [0, 90] })
    .encodeStroke({ value: "#1b9e77" })
    .encodePointRadius({ value: 4.74341649025257 })
    .encodeOpacity({ value: 0.7 })
    .editPointMark({ fill: "none", strokeWidth: 4 })
    .createXAxis({
      line: { color: "#888" },
      ticksAndLabels: {
        values: [0, 10, 20, 30, 40, 50, 60, 70, 80, 90],
        ticks: { length: 5, color: "#888" },
        labels: { fontSize: 24, fontFamily: "sans-serif", offset: 5, color: "black", flush: true }
      },
      title: { text: "x", fontSize: 36, fontWeight: 700, fontFamily: "sans-serif", offset: 63, color: "black" }
    })
    .createYAxis({
      line: { color: "#888" },
      ticksAndLabels: {
        values: [0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90],
        ticks: { length: 5, color: "#888" },
        labels: { fontSize: 24, fontFamily: "sans-serif", offset: 6, color: "black" }
      },
      title: {
        text: "y",
        fontSize: 36,
        fontWeight: 700,
        fontFamily: "sans-serif",
        offset: 60,
        rotation: { value: -90, unit: "degrees" },
        color: "black"
      }
    })
    .createGrid({horizontal:true,vertical:true})
    .editGrid({
      horizontal: { color: "#ddd", lineWidth: 1 },
      vertical: { color: "#ddd", lineWidth: 1 }
    })
  .editYAxis({ title: { offset: 54.7578125 } })
;
}
