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
    .editPointMark({
      fill: "transparent",
      strokeWidth: 2,
      opacity: 0.7
    })
    .encodePointRadius({
      value: Math.sqrt(30) / 2
    })
    .createGrid({
      horizontal: { values: [-10, 0, 10], color: "rgba(0,0,0,0.2)", lineWidth: 1 },
      vertical: { values: [-10, 0, 10], color: "rgba(0,0,0,0.2)", lineWidth: 1 }
    })
    .createAxes({
      x: {
        line: {},
        ticksAndLabels: {
          values: [-10, 0, 10],
          ticks: { length: 5, color: "rgba(0,0,0,0.2)", lineWidth: 1 },
          labels: { fontSize: 10, fontFamily: "sans-serif", color: "rgba(0,0,0,0.2)", offset: 7 }
        },
        title: { text: "x1", fontSize: 11, fontWeight: 700, fontFamily: "sans-serif", color: "black", offset: 28 }
      },
      y: {
        line: {},
        ticksAndLabels: {
          values: [-10, 0, 10],
          ticks: { length: 5, color: "rgba(0,0,0,0.2)", lineWidth: 1 },
          labels: { fontSize: 10, fontFamily: "sans-serif", color: "rgba(0,0,0,0.2)", offset: 7 }
        },
        title: { text: "y", fontSize: 11, fontWeight: 700, fontFamily: "sans-serif", color: "black", offset: 28 }
      }
    });
}