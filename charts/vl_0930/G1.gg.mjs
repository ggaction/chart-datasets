import { chart } from "ggaction";
import data from "./data.json";
// DOCS: doc-b11b4627b143730d (createLinePlot), doc-76573a465e2b6a33 (scatter/point semantics), doc-8a4f6f06e0d37d5e (line-chart tutorial)

export function buildChart() {
  return chart()
    .createCanvas({ width: 230, height: 266, margin: { left: 24, top: 36, right: 6, bottom: 30 } })
    .createData({ id: "lms", values: data })
    .createComputedData({ id: "lmsDate", as: "dateMs", expression: { op: "parseTime", operand: { field: "date" }, format: "auto" } })
    .createComputedData({ id: "lmsValue", as: "valueN", expression: { op: "toNumber", operand: { field: "value" } } })
    .createLinePlot({
      x: { field: "dateMs", fieldType: "temporal", scale: { domain: [702086400000, 1656633600000], nice: false } },
      y: { field: "valueN", fieldType: "quantitative", scale: { domain: [0, 11], nice: false } },
      guides: false
    })
    .editLineMark({ strokeWidth: 1, stroke: "#7E9971" })
    .createTitle({
      text: "Total population aged 25-34 ",
      titleStyle: { fontSize: 13, fontWeight: 700 },
      alongOffset: -18.123046875
    })
    .editTitle({ offset: -13, gap: 1 })
    .editTitle({
      subtitle: "Unemployment rate, %, 1992-2022",
      subtitleStyle: { fontSize: 10, fontStyle: "italic" }
    })
    .createAxes({
      x: {
        line: {},
        ticksAndLabels: {
          count: 6,
          ticks: { length: 0 },
          labels: { fontSize: 10, offset: 3, rotation: { value: 45, unit: "degrees" } }
        },
        title: false
      },
      y: {
        line: {},
        ticksAndLabels: {
          count: 6,
          ticks: { length: 5 },
          labels: { fontSize: 10, offset: 7 }
        },
        title: false
      }
    });
}