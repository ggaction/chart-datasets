// DOCS: doc-fc11e9fb291905d1, doc-dfae58344d5a524e, doc-333a87e52954985d
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({
      width: 473,
      height: 480,
      margin: { left: 67, top: 5, right: 6, bottom: 75 }
    })
    .createData({ values: data })
    .createBarPlot({
      x: {
        field: "Acceleration",
        fieldType: "quantitative",
        aggregate: "mean"
      },
      y: {
        field: "Cylinders",
        fieldType: "ordinal"
      },
      guides: false
    })
    .editXScale({ domain: [0, 20] })
    .editYScale({
      domain: [3, 4, 5, 6, 8],
      paddingInner: 0.1,
      paddingOuter: 0.05
    })
    .encodeBarWidth({ band: 1 })
    .editBarMark({ fill: "#d95f02" })
    .createXAxis({
      line: {},
      ticksAndLabels: {
        values: [0, 4, 8, 12, 16, 20],
        ticks: {},
        labels: { fontSize: 24, offset: 4.5, flush: true }
      },
      title: {
        text: "Mean of Acceleration",
        fontSize: 36,
        offset: 57.0
      }
    })
    .createYAxis({
      line: {},
      ticksAndLabels: {
        values: [3, 4, 5, 6, 8],
        ticks: {},
        labels: { fontSize: 24, offset: 7 }
      },
      title: {
        text: "Cylinders",
        fontSize: 36,
        offset: 43
      }
    })
    .editXAxis({ title: { fontWeight: "bold" } })
    .editYAxis({ title: { fontWeight: "bold" } })
    .createGrid({ horizontal: false, vertical: true })
    .editVerticalGrid({ color: "#ddd" });
}