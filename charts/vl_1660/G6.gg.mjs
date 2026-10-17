// DOCS: doc-dfae58344d5a524e, doc-76573a465e2b6a33, doc-2bd5de4bd99e314a
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({
      width: 243,
      height: 267,
      margin: { left: 33, top: 30, right: 10, bottom: 37 }
    })
    .createData({ values: data })
    .createScatterPlot({
      x: { field: "x", fieldType: "quantitative" },
      y: { field: "y", fieldType: "quantitative" },
      guides: false
    })
    .editXScale({ domain: [0, 40] })
    .editYScale({ domain: [0, 4] })
    .editPointMark({
      fill: "red",
      stroke: "black",
      strokeWidth: 2
    })
    .editPointMark({ opacity: 0.7 })
    .encodePointRadius({ value: 22.360679774997898 })
    .createXAxis({
      ticksAndLabels: {
        ticks: { length: 5 },
        labels: { fontSize: 10, offset: 7 }
      },
      title: {
        text: "x",
        fontSize: 11,
        offset: 28
      }
    })
    .editXAxisLine({ color: "#888" })
    .editXAxisTicksAndLabels({
      ticks: { color: "#888" },
      labels: { color: "black" }
    })
    .editXAxisTitle({ color: "black", fontWeight: "bold" })
    .createYAxis({
      ticksAndLabels: {
        ticks: { length: 5 },
        labels: { fontSize: 10, offset: 7 }
      },
      title: {
        text: "y",
        fontSize: 11,
        offset: 22
      }
    })
    .editYAxisLine({ color: "#888" })
    .editYAxisTicksAndLabels({
      ticks: { color: "#888" },
      labels: { color: "black" }
    })
    .editYAxisTitle({ color: "black", fontWeight: "bold" })
    .createGrid({
      horizontal: { color: "#ddd" },
      vertical: { color: "#ddd" }
    });
}