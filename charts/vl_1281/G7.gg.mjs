// DOCS: doc-e790db38fc2a278a, doc-2e6240c00cb297cc, doc-2fcdfbdfb290e440
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({
      width: 686,
      height: 700,
      margin: { left: 80, top: 17, right: 6, bottom: 83 }
    })
    .createData({ values: data })
    .createScatterPlot({
      x: { field: "x", fieldType: "quantitative" },
      y: { field: "y", fieldType: "quantitative" },
      guides: false
    })
    .editXScale({ domain: [0, 100] })
    .editYScale({ domain: [0, 90] })
    .editPointMark({ fill: "transparent", opacity: 0.7 })
    .editPointMark({ stroke: "#1b9e77", strokeWidth: 4 })
    .encodePointRadius({ value: 4.743416490252569 })
    .createXAxis({
      line: {},
      ticksAndLabels: {
        values: [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100],
        ticks: { length: 5 },
        labels: { fontSize: 24, offset: 7, flush: true }
      },
      title: { text: "x", fontSize: 36, offset: 62 }
    })
    .createYAxis({
      line: {},
      ticksAndLabels: {
        values: [0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90],
        ticks: { length: 5 },
        labels: { fontSize: 24, offset: 7 }
      },
      title: {
        text: "y",
        fontSize: 36,
        offset: 58,
        rotation: { value: -90, unit: "degrees" }
      }
    })
    .createGrid({
      vertical: { count: 21 },
      horizontal: { count: 19 }
    })
    .editGrid({
      vertical: { color: "#ddd", lineWidth: 1 },
      horizontal: { color: "#ddd", lineWidth: 1 }
    })
    .editXAxisTicksAndLabels({ labels: { fontFamily: "sans-serif" } })
    .editXAxisTitle({ fontFamily: "sans-serif", fontWeight: 700 })
    .editYAxisTicksAndLabels({ labels: { fontFamily: "sans-serif" } })
    .editYAxisTitle({ fontFamily: "sans-serif", fontWeight: 700 })
  .editYAxis({ title: { offset: 54.7578125 } })
;
}