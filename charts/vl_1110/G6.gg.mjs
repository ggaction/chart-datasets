// DOCS: doc-dfae58344d5a524e, doc-e790db38fc2a278a, doc-847cb1497a53c317, doc-7184b02978bdf5d1
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({
      width: 749,
      height: 642,
      margin: { left: 44, top: 5, right: 5, bottom: 37 }
    })
    .createData({ values: data })
    .createScatterPlot({
      x: { field: "x1", fieldType: "quantitative" },
      y: { field: "y", fieldType: "quantitative" },
      guides: false
    })
    .editXScale({ domain: [-12, 11], nice: false })
    .editYScale({ domain: [-12, 11], nice: false })
    .encodeStroke({
      value: "red"
    })
    .encodeOpacity({ target: "scatterPlot", value: 0.7 })
    .editPointMark({
      fill: "transparent",
      strokeWidth: 2
    })
    .encodePointRadius({
      value: Math.sqrt(30) / 2
    })
    .createGrid({
      horizontal: { values: [-10, 0, 10] },
      vertical: { values: [-10, 0, 10] }
    })
    .editHorizontalGrid({ color: "rgba(0,0,0,0.2)", lineWidth: 1 })
    .editVerticalGrid({ color: "rgba(0,0,0,0.2)", lineWidth: 1 })
    .createXAxis({
      line: {},
      ticksAndLabels: {
        values: [-10, 0, 10],
        ticks: { length: 5, lineWidth: 1 },
        labels: { fontSize: 10, fontFamily: "sans-serif", offset: 7 }
      },
      title: { text: "x1", fontSize: 11, fontFamily: "sans-serif", offset: 28 }
    })
    .createYAxis({
      line: {},
      ticksAndLabels: {
        values: [-10, 0, 10],
        ticks: { length: 5, lineWidth: 1 },
        labels: { fontSize: 10, fontFamily: "sans-serif", offset: 7 }
      },
      title: { text: "y", fontSize: 11, fontFamily: "sans-serif", offset: 28 }
    })
    .editXAxis({
      ticksAndLabels: {
        ticks: { color: "rgba(0,0,0,0.2)" },
        labels: { color: "rgba(0,0,0,0.2)" }
      },
      title: { color: "black", fontWeight: 700 }
    })
    .editYAxis({
      ticksAndLabels: {
        ticks: { color: "rgba(0,0,0,0.2)" },
        labels: { color: "rgba(0,0,0,0.2)" }
      },
      title: { color: "black", fontWeight: 700 }
    });
}