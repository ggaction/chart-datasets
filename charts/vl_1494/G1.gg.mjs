// DOCS: doc-e790db38fc2a278a, doc-2e6240c00cb297cc, doc-48c72317a1a99e17
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({
      width: 500,
      height: 347,
      margin: { top: 10, right: 61, bottom: 37, left: 39 }
    })
    .createData({ values: data })
    .createScatterPlot({
      x: "studied",
      y: "slept",
      guides: false
    })
    .encodeColor({
      field: "passed",
      fieldType: "nominal",
      scale: {
        domain: [0, 1],
        range: ["#4c78a8", "#f58518"]
      }
    })
    .encodePointRadius({ value: 5 })
    .editPointMark({ opacity: 0.7 })
    .editXScale({ domain: [0, 10] })
    .editYScale({ domain: [0, 11] })
    .createGuides({
      axes: {
        x: {
          line: { color: "#888", lineWidth: 1 },
          ticksAndLabels: {
            ticks: { length: 5, color: "#888", lineWidth: 1 },
            labels: { fontSize: 10, fontFamily: "sans-serif", color: "black", offset: 7 }
          },
          title: { text: "studied", fontSize: 11, fontWeight: 700, fontFamily: "sans-serif", color: "black", offset: 26 }
        },
        y: {
          line: { color: "#888", lineWidth: 1 },
          ticksAndLabels: {
            ticks: { length: 5, color: "#888", lineWidth: 1 },
            labels: { fontSize: 10, fontFamily: "sans-serif", color: "black", offset: 7 }
          },
          title: { text: "slept", fontSize: 11, fontWeight: 700, fontFamily: "sans-serif", color: "black", offset: 31 }
        }
      },
      grid: {
        horizontal: { color: "#ddd", lineWidth: 1 },
        vertical: { color: "#ddd", lineWidth: 1 }
      },
      legend: {
        target: "scatterPlot",
        channels: ["color"],
        position: "right",
        title: "passed",
        titleStyle: { fontSize: 11, fontWeight: 700, fontFamily: "sans-serif", color: "black" },
        labels: { fontSize: 10, fontFamily: "sans-serif", color: "black" },
        symbol: { layers: [{ type: "point", shape: "circle", size: 5 }] }
      }
    })
    .editLegendBlock({ target: "scatterPlot", channel: "color", symbol: { opacity: 0.7 } });
}