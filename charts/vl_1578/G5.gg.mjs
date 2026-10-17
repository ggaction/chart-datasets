// DOCS: doc-e790db38fc2a278a, doc-2e6240c00cb297cc, doc-00859dfc99a640de
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({ width: 269, height: 252, margin: { left: 61, top: 5, right: 8, bottom: 47 } })
    .createData({ values: data })
    .createScatterPlot({
      x: { field: "x", fieldType: "quantitative" },
      y: { field: "y", fieldType: "quantitative" },
      guides: false
    })
    .editXScale({ domain: [0, 0.5] })
    .editYScale({ domain: [0, 110] })
    .editPointMark({ fill: "#4c78a8", opacity: 0.7 })
    .encodePointRadius({ value: 2.7386 })
    .createXAxis({
      line: {},
      ticksAndLabels: {
        values: [0, 0.2, 0.4],
        ticks: { length: 5 },
        labels: { fontSize: 20, fontFamily: "sans-serif", offset: 7, flush: true, overlap: "allow" }
      },
      title: { text: "x", fontSize: 11, fontWeight: 700, offset: 40 }
    })
    .createYAxis({
      line: {},
      ticksAndLabels: {
        values: [0, 20, 40, 60, 80, 100],
        ticks: { length: 5 },
        labels: { fontSize: 20, fontFamily: "sans-serif", offset: 7, overlap: "allow" }
      },
      title: { text: "y", fontSize: 11, fontWeight: 700, offset: 54 }
    })
    .createGrid({ horizontal: {}, vertical: {} })
    .editHorizontalGrid({ color: "#ddd", lineWidth: 1 })
    .editVerticalGrid({ color: "#ddd", lineWidth: 1 });
}
