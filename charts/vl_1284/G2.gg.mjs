// DOCS: doc-e790db38fc2a278a (createScatterPlot), doc-bc26da5598d35bae (scatter tutorial), doc-2fcdfbdfb290e440 (edit-scales-and-guides)
import { chart } from "ggaction";
import data from "./data.json";

const xTicks = [0, 10, 20, 30, 40, 50, 60, 70, 80, 90];
const yTicks = [0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100];

export function buildChart() {
  return chart()
    .createCanvas({
      width: 700,
      height: 692,
      margin: { left: 94, top: 17, right: 6, bottom: 75 }
    })
    .createData({ values: data })
    .createScatterPlot({
      x: { field: "x", fieldType: "quantitative" },
      y: { field: "y", fieldType: "quantitative" },
      guides: false
    })
    .editXScale({ target: "scatterPlot", domain: [0, 90] })
    .editYScale({ target: "scatterPlot", domain: [0, 100] })
    .encodeStroke({ value: "#d95f02" })
    .editPointMark({ fill: "none", strokeWidth: 4, opacity: 0.7 })
    .encodePointRadius({ value: 4.743416490252569 })
    .createGrid({ vertical: { values: xTicks, color: "#ddd" }, horizontal: { values: yTicks, color: "#ddd" } })
    .createAxes({
      x: {
          line: {},
          ticksAndLabels: {
            values: xTicks,
            ticks: { length: 5 },
            labels: { fontSize: 24, offset: 7, flush: true }
          },
          title: { text: "x", fontSize: 36, fontWeight: "bold", offset: 52 }
        },
        y: {
          line: {},
          ticksAndLabels: {
            values: yTicks,
            ticks: { length: 5 },
            labels: { fontSize: 24, offset: 7 }
          },
          title: { text: "y", fontSize: 36, fontWeight: "bold", offset: 70 }
        }
    });
}