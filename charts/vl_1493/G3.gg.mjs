// DOCS: doc-e790db38fc2a278a, doc-2e6240c00cb297cc, doc-76573a465e2b6a33, doc-7184b02978bdf5d1
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({
      width: 448,
      height: 342,
      margin: { left: 39, top: 5, right: 9, bottom: 37 }
    })
    .createData({ values: data })
    .createScatterPlot({
      x: { field: "x", fieldType: "quantitative" },
      y: { field: "y", fieldType: "quantitative" },
      guides: false
    })
    .editXScale({ domain: [0, 2] })
    .editYScale({ domain: [0, 13] })
    .editPointMark({ fill: "red", opacity: 0.7 })
    .encodePointRadius({ value: 3.5355339059327378 })
    .createXAxis({
      line: {},
      ticksAndLabels: {
        ticks: {},
        labels: { fontSize: 10, fontFamily: "sans-serif", offset: 7, color: "black" }
      },
      title: { text: "x", fontSize: 11, fontWeight: 700, fontFamily: "sans-serif", offset: 28, color: "black" }
    })
    .createYAxis({
      line: {},
      ticksAndLabels: {
        ticks: {},
        labels: { fontSize: 10, fontFamily: "sans-serif", offset: 7, color: "black" }
      },
      title: { text: "y", fontSize: 11, fontWeight: 700, fontFamily: "sans-serif", offset: 26, color: "black" }
    })
    .createGrid({
      horizontal: { color: "#ddd", lineWidth: 1 },
      vertical: { color: "#ddd", lineWidth: 1 }
    });
}
