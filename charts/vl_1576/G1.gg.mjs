// DOCS: doc-e790db38fc2a278a (createScatterPlot), doc-2e6240c00cb297cc (createScatterPlot),
// doc-bc26da5598d35bae (scatter tutorial: canvas/margin/facade pattern),
// doc-00859dfc99a640de (explicit tick values + axis title style in guides),
// doc-48c72317a1a99e17 (guides:false disables facade-owned guides)
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({
      width: 269,
      height: 252,
      margin: { left: 61, top: 5, right: 8, bottom: 47 }
    })
    .createData({ values: data })
    .createScatterPlot({
      x: { field: "x", fieldType: "quantitative", scale: { domain: [0, 0.5] } },
      y: { field: "y", fieldType: "quantitative", scale: { domain: [0, 110] } },
      guides: false
    })
    .encodePointRadius({ value: 2.7386 })
    .editPointMark({ fill: "#4c78a8", opacity: 0.7, stroke: false })
    .createGrid({
      vertical: { values: [0, 0.1, 0.2, 0.3, 0.4, 0.5] , color: '#ddd'},
      horizontal: { values: [0, 20, 40, 60, 80, 100] , color: '#ddd'}
    })
    .createXAxis({
      line: { color: "#888" },
      ticksAndLabels: {
        values: [0, 0.1, 0.2, 0.3, 0.4],
        ticks: { length: 5 },
        labels: { fontSize: 20, fontFamily: "sans-serif", offset: 7 }
      },
      title: { text: "x", fontSize: 11, fontWeight: "bold", fontFamily: "sans-serif", offset: 38 }
    })
    .createYAxis({
      line: { color: "#888" },
      ticksAndLabels: {
        values: [0, 20, 40, 60, 80, 100],
        ticks: { length: 5 },
        labels: { fontSize: 20, fontFamily: "sans-serif", offset: 7 }
      },
      title: { text: "y", fontSize: 11, fontWeight: "bold", fontFamily: "sans-serif", offset: 50 }
    });
}
