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
        fieldType: "quantitative"
      },
      y: {
        field: "datamations_y",
        fieldType: "quantitative"
      },
      guides: false
    })
    .editXScale({ domain: [0.5, 2.5] })
    .editYScale({ domain: [87.5297479964919, 90.5374350058899] })
    .encodePointRadius({ value: 2.7386127875258306 })
    .editPointMark({ fill: "#4c78a8", opacity: 0.7, stroke: false })
    .createXAxis({
        line: {},
        ticksAndLabels: {
          values: [1, 2],
          ticks: {},
          labels: {
            rotation: { value: -90, unit: "degrees" },
            offset: 7,
            fontSize: 10
          }
        },
        title: { text: "Degree", fontSize: 11, offset: 54 }
      })
      .editXAxisLabels({
        labelMap: [
          { value: 1, label: "Masters" },
          { value: 2, label: "PhD" }
        ]
      })
      .createYAxis({
        line: {},
        ticksAndLabels: {
          values: [88, 88.5, 89, 89.5, 90, 90.5],
          ticks: {},
          labels: { fontSize: 10, offset: 7 }
        },
        title: { text: "mean(Salary)", fontSize: 11, offset: 37 }
      })
      .editYAxisLabels({
        format: ".1f"
      })
      .createGrid({
        vertical: { values: [1, 2] },
        horizontal: { values: [88, 88.5, 89, 89.5, 90, 90.5] }
      })
      .editVerticalGrid({ color: "#ddd" })
      .editHorizontalGrid({ color: "#ddd" });
}