// DOCS: doc-b11b4627b143730d, doc-8a4f6f06e0d37d5e (createLinePlot / line chart tutorial)
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({ width: 540, height: 362, margin: { left: 33, top: 40, right: 7, bottom: 22 } })
    .createData({ values: data })
    .filterData({ id: "since1989", field: "Date", predicate: { op: "gte", value: "1989-01-01" } })
    .filterData({ id: "until2022", field: "Date", predicate: { op: "lte", value: "2022-12-31" } })
    .createComputedData({
      id: "inflationValue",
      as: "value",
      expression: { op: "divide", left: { op: "toNumber", operand: { field: "CPIAUCSL_PC1" } }, right: { constant: 100 } }
    })
    .createLinePlot({
      x: { field: "Date", fieldType: "temporal", scale: { domain: [599616000000, 1640995200000], nice: false } },
      y: { field: "value", fieldType: "quantitative", scale: { domain: [-0.02, 0.08], nice: false, zero: false } },
      guides: false
    })
    .editLineMark({ stroke: "rgb(0,112,192)", strokeWidth: 2, opacity: 1 })
    .createAxes({
      x: {
        line: { color: "#888" },
        ticksAndLabels: {
          values: [631152000000, 757382400000, 883612800000, 1009843200000, 1136073600000, 1262304000000, 1388534400000, 1514764800000, 1640995200000],
          ticks: { color: "#888" },
          labels: { fontSize: 10, fontFamily: "sans-serif", offset: 7, format: "%Y", flush: true }
        },
        title: false
      },
      y: {
        line: { color: "#888" },
        ticksAndLabels: {
          values: [-0.02, -0.01, 0, 0.01, 0.02, 0.03, 0.04, 0.05, 0.06, 0.07, 0.08],
          ticks: { color: "#888" },
          labels: { fontSize: 10, fontFamily: "sans-serif", offset: 7, format: ".0%" }
        },
        title: false
      }
    })
    .createGrid({ horizontal: { scale: "y", color: "#ddd" }, vertical: { scale: "x", color: "#ddd" } })
    .createTitle({
      text: "Inflation - US",
      titleStyle: { fontSize: 13, fontWeight: 700, fontFamily: "sans-serif", color: "black" },
      subtitleStyle: { fontSize: 10, fontStyle: "italic", fontWeight: 400, fontFamily: "sans-serif", color: "black" }
    })
    .editTitle({ offset: -13, alongOffset: -27.3, gap: 1 })
    .editTitle({ subtitle: "All items, FRED series: CPIAUCSL_PC1" });
}