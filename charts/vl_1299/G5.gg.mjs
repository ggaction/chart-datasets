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
      line: {},
      ticksAndLabels: {
        values: [0, 10, 20, 30, 40, 50, 60, 70, 80, 90],
        ticks: { length: 5 },
        labels: { fontSize: 24, offset: 5, flush: true }
      },
      title: { text: "x", fontSize: 36, offset: 63 }
    })
    .editXAxis({
      line: { color: "#888" },
      ticksAndLabels: {
        ticks: { color: "#888" },
        labels: { color: "black", fontFamily: "sans-serif" }
      },
      title: { color: "black", fontWeight: 700, fontFamily: "sans-serif" }
    })
    .createYAxis({
      line: {},
      ticksAndLabels: {
        values: [0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90],
        ticks: { length: 5 },
        labels: { fontSize: 24, offset: 6 }
      },
      title: {
        text: "y",
        fontSize: 36,
        offset: 60,
        rotation: { value: -90, unit: "degrees" }
      }
    })
    .editYAxis({
      line: { color: "#888" },
      ticksAndLabels: {
        ticks: { color: "#888" },
        labels: { color: "black", fontFamily: "sans-serif" }
      },
      title: { color: "black", fontWeight: 700, fontFamily: "sans-serif" }
    })
    .createGrid({horizontal:true,vertical:true})
    .editGrid({
      horizontal: { color: "#ddd", lineWidth: 1 },
      vertical: { color: "#ddd", lineWidth: 1 }
    })
  .editYAxis({ title: { offset: 54.7578125 } })
;
}
