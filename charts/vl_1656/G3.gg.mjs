// DOCS: doc-e790db38fc2a278a, doc-2e6240c00cb297cc, doc-48c72317a1a99e17
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({
      width: 278,
      height: 267,
      margin: { top: 30, right: 45, bottom: 37, left: 33 }
    })
    .createData({ values: data })
    .createScatterPlot({
      x: { field: "x", fieldType: "quantitative" },
      y: { field: "y", fieldType: "quantitative" },
      guides: false
    })
    .encodeColor({ field: "y", fieldType: "ordinal" })
    .editColorScale({
      domain: [1, 2, 3, 4],
      range: [
        "rgb(168, 206, 229)",
        "rgb(116, 178, 215)",
        "rgb(69, 146, 198)",
        "rgb(32, 111, 178)"
      ]
    })
    .encodePointRadius({ value: 22.360679774997898 })
    .editPointMark({ stroke: "red", strokeWidth: 2, opacity: 0.7 })
    .editXScale({ domain: [0, 40] })
    .editYScale({ domain: [0, 4] })
    .createAxes({
      x: {
        ticksAndLabels: {
          values: [0, 10, 20, 30, 40],
          ticks: { length: 5 },
          labels: { fontSize: 10, offset: 7 }
        },
        title: { text: "x", fontSize: 11, fontWeight: 700, offset: 30 }
      },
      y: {
        ticksAndLabels: {
          values: [0, 1, 2, 3, 4],
          ticks: { length: 5 },
          labels: { fontSize: 10, offset: 7 }
        },
        title: { text: "y", fontSize: 11, fontWeight: 700, offset: 22 }
      }
    })
    .createGuides({
      axes: false,
      grid: {
        horizontal: { color: "#ddd", lineWidth: 1 },
        vertical: { color: "#ddd", lineWidth: 1 }
      },
      legend: {
        position: "right",
        channels: ["color"],
        title: "y",
        labels: { fontSize: 10 },
        titleStyle: { fontSize: 11, fontWeight: 700 },
        symbol: { layers: [{ type: "point", size: 5, stroke: "red", strokeWidth: 2 }] }
      }
    })
    .editLegendBlock({ target: "scatterPlot", channel: "color", symbol: { opacity: 0.7 } });
}
