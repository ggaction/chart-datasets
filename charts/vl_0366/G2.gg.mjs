// DOCS: doc-b11b4627b143730d, doc-f30bfed200b50a98, doc-dfae58344d5a524e
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({
      width: 344,
      height: 374,
      margin: { top: 52, right: 7, bottom: 22, left: 57 }
    })
    .editCanvas({ background: "#122b39" })
    .createData({ id: "boe", values: data })
    .createComputedData({
      id: "boeNum",
      as: "ValueNum",
      expression: { op: "toNumber", operand: { field: "Value" } }
    })
    .createComputedData({
      id: "boeTs",
      as: "DateTs",
      expression: { op: "parseTime", operand: { field: "Date" }, format: "%Y-%m-%d" }
    })
    .createLinePlot({
      x: {
        field: "DateTs",
        fieldType: "temporal",
      },
      y: {
        field: "ValueNum",
        fieldType: "quantitative",
      },
      guides: false
    })
    .editXScale({ type: "time", domain: [1148428800000, 1664323200000], nice: false })
    .editYScale({ domain: [0, 1000000] })
    .editLineMark({
      stroke: "#ff9a00",
      strokeWidth: 2
    })
    .editLineMark({
      opacity: 1,
      curve: "step"
    })
    .createAxes({
      x: {
        line: {},
        ticksAndLabels: {
          count: 7,
          labels: { fontSize: 10, offset: 7, color: "#cbc7cf", fontFamily: "sans-serif" }
        },
        title: false
      },
      y: {
        line: {},
        ticksAndLabels: {
          values: [0, 100000, 200000, 300000, 400000, 500000, 600000, 700000, 800000, 900000, 1000000],
          labels: {
            fontSize: 10,
            offset: 7,
            color: "#cbc7cf",
            fontFamily: "sans-serif",
            labelMap: [
              { value: 0, label: "0" },
              { value: 100000, label: "100,000" },
              { value: 200000, label: "200,000" },
              { value: 300000, label: "300,000" },
              { value: 400000, label: "400,000" },
              { value: 500000, label: "500,000" },
              { value: 600000, label: "600,000" },
              { value: 700000, label: "700,000" },
              { value: 800000, label: "800,000" },
              { value: 900000, label: "900,000" },
              { value: 1000000, label: "1,000,000" }
            ]
          }
        },
        title: false
      }
    })
    .createTitle({
      text: "BoE balance sheet (2006-2022)",
      titleStyle: { fontSize: 13, fontWeight: 700, color: "#cbc7cf", fontFamily: "sans-serif" },
      offset: -13
    })
    .editTitle({
      alongOffset: -51.4873046875
    })
    .editTitle({
      subtitle: "Reserve Balance liabilities (\u00a3m). Source: BoE.",
      subtitleStyle: { fontSize: 10, fontStyle: "italic", color: "#cbc7cf", fontFamily: "sans-serif" },
      gap: 3
    });
}
