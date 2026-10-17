import { chart } from "ggaction";
// DOCS: doc-e790db38fc2a278a, doc-2e6240c00cb297cc, doc-76573a465e2b6a33, doc-2bd5de4bd99e314a
import data from "./data.json";

const xTicks = [0,10,20,30,40,50,60,70,80,90,100];
const yTicks = [0,5,10,15,20,25,30,35,40,45,50,55,60,65,70,75,80,85,90,95,100];

export function buildChart() {
  return chart()
    .createCanvas({ width: 700, height: 700, margin: { left: 94, top: 17, right: 6, bottom: 83 } })
    .createData({ values: data })
    .createScatterPlot({
      x: { field: "x", fieldType: "quantitative" },
      y: { field: "y", fieldType: "quantitative" },
      guides: false
    })
    .editXScale({ domain: [0, 100] })
    .editYScale({ domain: [0, 100] })
    .editPointMark({ fill: "transparent", stroke: "#e7298a", opacity: 0.7 })
    .editPointMark({ strokeWidth: 4 })
    .encodePointRadius({ value: 4.743416490252569 })
    .createXAxis({
      line: { color: "#888" },
      ticksAndLabels: {
        values: xTicks,
        ticks: { color: "#888" },
        labels: { fontSize: 24, fontFamily: "sans-serif", color: "black", offset: 7, flush: true }
      },
      title: { text: "x", fontSize: 36, fontWeight: 700, fontFamily: "sans-serif", color: "black", offset: 62 }
    })
    .createYAxis({
      line: { color: "#888" },
      ticksAndLabels: {
        values: yTicks,
        ticks: { color: "#888" },
        labels: { fontSize: 24, fontFamily: "sans-serif", color: "black", offset: 7 }
      },
      title: { text: "y", fontSize: 36, fontWeight: 700, fontFamily: "sans-serif", color: "black", offset: 71 }
    })
    .createGrid({
      horizontal: { values: [0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100], color: "#ddd", lineWidth: 1 },
      vertical: { values: [0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100], color: "#ddd", lineWidth: 1 }
    });
}
