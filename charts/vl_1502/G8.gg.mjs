// DOCS: doc-6c2c08869091f6a0, doc-dfae58344d5a524e, doc-fc11e9fb291905d1
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({ width: 216, height: 401, margin: { left: 78, top: 27, right: 78, bottom: 74 } })
    .createData({ values: data })
    .createBarPlot({
      x: { field: "repo", fieldType: "nominal" },
      y: { field: "number", fieldType: "quantitative" },
      guides: false
    })
    .editXScale({ domain: ["numpy", "numpydoc", "numpy.org"], paddingInner: 0.1, paddingOuter: 0.05 })
    .editYScale({ domain: [0, 18] })
    .encodeBarWidth({ band: 1 })
    .createXAxis({
      line: {},
      ticksAndLabels: {
        ticks: {},
        labels: { fontSize: 10, offset: 7, rotation: { value: -90, unit: "degrees" } }
      },
      title: { text: "repo", fontSize: 11, offset: 65 }
    })
    .editXAxisTitle({ fontWeight: 700 })
    .createYAxis({
      line: {},
      ticksAndLabels: {
        ticks: {},
        labels: { fontSize: 10, offset: 7 },
        values: [0, 2, 4, 6, 8, 10, 12, 14, 16, 18]
      },
      title: { text: "number", fontSize: 11, offset: 32 }
    })
    .editYAxisTitle({ fontWeight: 700 })
    .createHorizontalGrid({})
    .editHorizontalGrid({ color: "#ddd" })
    .createTitle({
      text: "Issues created in the last 10 days",
      offset: -13,
      titleStyle: { fontSize: 13 },
      alongOffset: -72.96875
    })
    .editTitle({ titleStyle: { fontWeight: 700 } });
}
