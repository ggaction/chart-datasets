// DOCS: doc-e790db38fc2a278a, doc-2e6240c00cb297cc (createScatterPlot facade, point appearance)
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({
      width: 352,
      height: 370,
      margin: { left: 47, top: 7, right: 5, bottom: 63 }
    })
    .createData({ values: data })
    .createScatterPlot({
      x: {
        field: "datamations_x",
        fieldType: "quantitative",
        scale: { domain: [0.5, 2.5] }
      },
      y: {
        field: "datamations_y",
        fieldType: "quantitative",
        scale: { domain: [87.5297479964919, 90.5374350058899] }
      },
      guides: false
    })
    .encodePointRadius({ value: 2.7386127875258306 })
    .editPointMark({ fill: "#4c78a8", opacity: 0.7, stroke: false })
    .createGuides({
      axes: {
        x: {
          line: {},
          ticksAndLabels: {
            values: [1, 2],
            ticks: {},
            labels: {
              labelMap: [
                { value: 1, label: "Masters" },
                { value: 2, label: "PhD" }
              ],
              rotation: { value: -90, unit: "degrees" },
              offset: 7,
              fontSize: 10
            }
          },
          title: { text: "Degree", fontSize: 11, offset: 54 }
        },
        y: {
          line: {},
          ticksAndLabels: {
            values: [88, 88.5, 89, 89.5, 90, 90.5],
            ticks: {},
            labels: { fontSize: 10, offset: 7, format: ".1f" }
          },
          title: { text: "mean(Salary)", fontSize: 11, offset: 37 }
        }
      },
      grid: {
        vertical: { values: [1, 2], color: "#ddd" },
        horizontal: { values: [88, 88.5, 89, 89.5, 90, 90.5], color: "#ddd" }
      }
    });
}