// DOCS: doc-e790db38fc2a278a, doc-2bd5de4bd99e314a, doc-76573a465e2b6a33
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({ width: 278, height: 267, margin: { left: 33, top: 30, right: 45, bottom: 37 } })
    .createData({ values: data })
    .createScatterPlot({
      x: { field: "x", fieldType: "quantitative", scale: { domain: [0, 40] } },
      y: { field: "y", fieldType: "quantitative", scale: { domain: [0, 4] } },
      guides: false
    })
    .encodeStroke({
      field: "y",
      fieldType: "ordinal",
      scale: {
        domain: [1, 2, 3, 4],
        range: ["rgb(168, 206, 229)", "rgb(116, 178, 215)", "rgb(69, 146, 198)", "rgb(32, 111, 178)"]
      }
    })
    .encodePointRadius({ value: 22.360679774997898 })
    .editPointMark({ fill: "red", opacity: 0.7, strokeWidth: 2 })
    .createGuides({
      axes: {
        x: {
          ticksAndLabels: { ticks: { color: "#888" }, labels: { fontSize: 10, offset: 7, color: "black" } },
          title: { text: "x", fontSize: 11, fontWeight: "bold", offset: 28, color: "black" }
        },
        y: {
          ticksAndLabels: { ticks: { color: "#888" }, labels: { fontSize: 10, offset: 7, color: "black" } },
          title: { text: "y", fontSize: 11, fontWeight: "bold", offset: 25, color: "black" }
        }
      },
      grid: { horizontal: { color: "#ddd" }, vertical: { color: "#ddd" } },
      legend: { channels: ["stroke"], title: "y", labels: { fontSize: 10 }, titleStyle: { fontSize: 11, fontWeight: "bold" } }
    });
}
