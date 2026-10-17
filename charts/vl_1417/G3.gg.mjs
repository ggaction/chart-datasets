// DOCS: doc-e790db38fc2a278a, doc-dfae58344d5a524e, doc-bc26da5598d35bae
import { chart } from "ggaction";
import data from "./data.json";

const xTicks = [-3, -2.5, -2, -1.5, -1, -0.5, 0, 0.5, 1, 1.5, 2, 2.5, 3];
const yTicks = [-2.5, -2, -1.5, -1, -0.5, 0, 0.5, 1, 1.5, 2, 2.5];

export function buildChart() {
  return chart()
    .createCanvas({
      width: 555,
      height: 347,
      margin: { left: 47, top: 10, right: 108, bottom: 37 }
    })
    .createData({ values: data })
    .createScatterPlot({
      x: { field: "a", fieldType: "quantitative" },
      y: { field: "b", fieldType: "quantitative" },
      guides: false
    })
    .editXScale({ domain: [-3, 3] })
    .editYScale({ domain: [-2.5, 2.5] })
    .encodeSize({
      field: "c",
      fieldType: "quantitative"
    })
    .editSizeScale({
      domain: [-2.011264572814634, 2.0522805725436952],
      range: [3.141592653589793, 283.5287377364788]
    })
    .encodeStroke({ value: "#4c78a8" })
    .encodeOpacity({ value: 0.7 })
    .editPointMark({ fill: "none", strokeWidth: 2 })
    .createGuides({
      axes: {
        x: {
          line: {},
          ticksAndLabels: {
            values: xTicks,
            ticks: { length: 5 },
            labels: { fontSize: 10, fontFamily: "sans-serif", offset: 7, format: ".1f" }
          },
          title: { text: "a", fontSize: 11, fontWeight: 700, offset: 28 }
        },
        y: {
          line: {},
          ticksAndLabels: {
            values: yTicks,
            ticks: { length: 5 },
            labels: { fontSize: 10, fontFamily: "sans-serif", offset: 7, format: ".1f" }
          },
          title: { text: "b", fontSize: 11, fontWeight: 700, offset: 36 }
        }
      },
      grid: {
        vertical: { values: xTicks, color: "#ddd" },
        horizontal: { values: yTicks, color: "#ddd" }
      },
      legend: {
        position: "right",
        title: "c",
        channels: ["size"],
        labels: { fontSize: 10, fontFamily: "sans-serif", color: "black" },
        titleStyle: { fontSize: 11, fontWeight: 700, fontFamily: "sans-serif", color: "black" }
      }
    });
}
