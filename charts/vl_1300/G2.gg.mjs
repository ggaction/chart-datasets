// DOCS: doc-e790db38fc2a278a, doc-2e6240c00cb297cc, doc-76573a465e2b6a33, doc-2fcdfbdfb290e440
import { chart } from "ggaction";
import data from "./data.json";

const xTicks = [0, 10, 20, 30, 40, 50, 60, 70, 80];
const xGrid = [0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80];
const yTicks = [0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100];

export function buildChart() {
  return chart()
    .createCanvas({ width: 700, height: 692, margin: { left: 94, top: 17, right: 6, bottom: 75 } })
    .createData({ values: data })
    .createScatterPlot({
      x: { field: "x", fieldType: "quantitative" },
      y: { field: "y", fieldType: "quantitative" },
      guides: false
    })
    .editXScale({ domain: [0, 80] })
    .editYScale({ domain: [0, 100] })
    .encodeStroke({ value: "#1b9e77" })
    .editPointMark({ fill: "none", strokeWidth: 4, opacity: 0.7 })
    .encodePointRadius({ value: 4.74341649 })
    .createGrid({
      horizontal: { color: "#ddd", lineWidth: 1, values: yTicks },
      vertical: { color: "#ddd", lineWidth: 1, values: xGrid }
    })
    .createXAxis({
      line: {},
      ticksAndLabels: {
        values: xTicks,
        ticks: {},
        labels: { fontSize: 24, fontFamily: "sans-serif", offset: 4.5, flush: true }
      },
      title: { text: "x", fontSize: 36, fontWeight: 700, fontFamily: "sans-serif", offset: 57 }
    })
    .createYAxis({
      line: {},
      ticksAndLabels: {
        values: yTicks,
        ticks: {},
        labels: { fontSize: 24, fontFamily: "sans-serif", offset: 7 }
      },
      title: { text: "y", fontSize: 36, fontWeight: 700, fontFamily: "sans-serif", offset: 72, rotation: { value: -90, unit: "degrees" } }
    })
  .editYAxis({ title: { offset: 68.10546875 } })
;
}
