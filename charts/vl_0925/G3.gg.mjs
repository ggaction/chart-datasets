import { chart } from "ggaction";
import data from "./data.json";

// DOCS: doc-0a1e48878a814143, doc-b30469a9489ccd34, doc-e59305e450ad74de

export function buildChart() {
  return chart()
    .createCanvas({ width: 230, height: 267, margin: { left: 24, top: 35, right: 6, bottom: 32 } })
    .createData({ values: data })
    .createComputedData({ id: "dated", as: "t", expression: { op: "parseTime", operand: { field: "date" }, format: "auto" } })
    .createComputedData({ id: "rated", as: "v", expression: { op: "toNumber", operand: { field: "value" } } })
    .createLinePlot({
      x: { field: "t", fieldType: "temporal" },
      y: { field: "v", fieldType: "quantitative" },
      guides: false
    })
    .editXScale({ domain: [631152000000, 1656633600000] })
    .editYScale({ domain: [0, 11] })
    .editLineMark({ target: "linePlot", stroke: "#3A5A40", strokeWidth: 1 })
    .createTitle({
      text: "Total population aged 16 and over ",
      titleStyle: { fontSize: 13, fontWeight: 700, color: "black" },
      alongOffset: -18.123046875
    })
    .editTitle({ offset: -13, gap: 1 })
    .editTitle({
      subtitle: "Unemployment rate, %, 1992-2022",
      subtitleStyle: { fontSize: 10, fontStyle: "italic", color: "black" }
    })
    .createXAxis({
      line: {},
      ticksAndLabels: {
        values: [631152000000, 788918400000, 946684800000, 1104537600000, 1262304000000, 1420070400000, 1577836800000],
        ticks: { length: 0 },
        labels: { offset: 7, fontSize: 10, format: "%Y", rotation: { value: 45, unit: "degrees" } }
      },
      title: false
    })
    .createYAxis({
      line: {},
      ticksAndLabels: {
        values: [0, 2, 4, 6, 8, 10],
        ticks: {},
        labels: { offset: 7, fontSize: 10 }
      },
      title: false
    });
}