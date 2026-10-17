// DOCS: doc-e790db38fc2a278a doc-2e6240c00cb297cc doc-2fcdfbdfb290e440
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({
      width: 686,
      height: 692,
      margin: { left: 80, top: 17, right: 6, bottom: 75 }
    })
    .createData({ id: "high_lines", values: data })
    .createScatterPlot({
      x: { field: "x", fieldType: "quantitative" },
      y: { field: "y", fieldType: "quantitative" },
      guides: false
    })
    .editXScale({ domain: [0, 100], nice: false })
    .editYScale({ domain: [0, 90], nice: false })
    .encodeStroke({ value: "#1b9e77" })
    .encodePointRadius({ value: 4.743416490252569 })
    .editPointMark({ fill: "none", opacity: 0.7, strokeWidth: 4 })
    .createXAxis({
      line: {},
      ticksAndLabels: {
        values: [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100],
        ticks: {},
        labels: { fontSize: 24, fontFamily: "sans-serif", offset: 4.5, flush: true }
      },
      title: { text: "x", fontSize: 36, fontWeight: 700, fontFamily: "sans-serif", offset: 57 }
    })
    .createYAxis({
      line: {},
      ticksAndLabels: {
        values: [0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90],
        ticks: {},
        labels: { fontSize: 24, fontFamily: "sans-serif", offset: 7 }
      },
      title: {
        text: "y",
        fontSize: 36,
        fontWeight: 700,
        fontFamily: "sans-serif",
        offset: 56,
        rotation: { value: -90, unit: "degrees" }
      }
    })
    .createGrid({
      horizontal: { values: [0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90] },
      vertical: { values: [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100] }
    })
    .editGrid({
      horizontal: { color: "#ddd" },
      vertical: { color: "#ddd" }
    });
}
