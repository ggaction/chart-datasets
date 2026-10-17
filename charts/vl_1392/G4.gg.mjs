import { chart } from "ggaction";
import data from "./data.json";

// DOCS: doc-f9bdba511759fd0a, doc-1986f3cb5e43d63b, doc-471cb9289c01f96c
export function buildChart() {
  return chart()
    .createCanvas({
      width: 844,
      height: 443,
      margin: { left: 39, top: 10, right: 5, bottom: 33 }
    })
    .editCanvas({ plotBorder: { color: "#ddd", lineWidth: 1 } })
    .createData({ values: data })
    .createBoxPlot({
      x: { field: "cyl", fieldType: "nominal", scale: { domain: [4, 6, 8], paddingInner: 0, paddingOuter: 0 } },
      y: { field: "qsec", fieldType: "quantitative", scale: { domain: [14, 23] } },
      whisker: { type: "minmax", caps: false, stroke: "black", strokeWidth: 1 }
    })
    .editBoxPlot({
      width: { pixels: 90 },
      box: { fill: "#4c78a8", stroke: "transparent", strokeWidth: 0 },
      median: { stroke: "white", strokeWidth: 1, width: { pixels: 90 } }
    })
    .encodeColor({
      field: "cyl",
      layout: "overlay"
    })
    .editColorScale({
      domain: [4, 6, 8],
      range: ["#4c78a8", "#f58518", "#e45756"]
    })
    .encodeOpacity({ value: 0.7, target: "boxPlotMedian" })
    .createXAxis({
      line: { color: "#888", lineWidth: 1 },
      ticksAndLabels: {
        values: [4, 6, 8],
        ticks: { length: 5, color: "#888", lineWidth: 1 },
        labels: { fontSize: 10, color: "black", offset: 7.5, alongOffset: 0.390625, rotation: { value: -90, unit: "degrees" } }
      },
      title: { text: "cyl", fontSize: 11, fontWeight: 700, color: "black", offset: 23.1396484375 }
    })
    .createYAxis({
      line: { color: "#888", lineWidth: 1 },
      ticksAndLabels: {
        values: [14, 15, 16, 17, 18, 19, 20, 21, 22, 23],
        ticks: { length: 5, color: "#888", lineWidth: 1 },
        labels: { fontSize: 10, color: "black", offset: 6.5, alongOffset: 0.890625 }
      },
      title: { text: "qsec", fontSize: 11, fontWeight: 700, color: "black", offset: 26.544921875, rotation: { value: -90, unit: "degrees" } }
    })
    .createGrid({
      horizontal: { values: [14, 15, 16, 17, 18, 19, 20, 21, 22, 23] }
    })
    .editHorizontalGrid({ color: "#ddd", lineWidth: 1 });
}